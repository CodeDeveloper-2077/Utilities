using Utilities.Data;
using Utilities.Models;
using DAL.Repository;

namespace DAL.UnitOfWork
{
    public class UnitOfWork
    {
        private readonly UtilitiesDb _context;
        private GenericRepository<Apartment> _apartmentRepository;
        private GenericRepository<Meter> _meterRepository;
        private GenericRepository<MeterDocument> _meterDocumentRepository;
        private GenericRepository<MeterLocation> _meterLocationRepository;

        public UnitOfWork(UtilitiesDb context)
        {
            _context = context;
        }

        public GenericRepository<Apartment> ApartmentRepository
        {
            get
            {
                if (_apartmentRepository == null)
                {
                    _apartmentRepository = new GenericRepository<Apartment>(_context);
                }
                return _apartmentRepository;
            }
        }

        public GenericRepository<Meter> MeterRepository
        {
            get
            {
                if (_meterRepository == null)
                {
                    _meterRepository = new GenericRepository<Meter>(_context);
                }
                return _meterRepository;
            }
        }

        public GenericRepository<MeterDocument> MeterDocumentRepository
        {
            get
            {
                if (_meterDocumentRepository == null)
                {
                    _meterDocumentRepository = new GenericRepository<MeterDocument>(_context);
                }
                return _meterDocumentRepository;
            }
        }

        public GenericRepository<MeterLocation> MeterLocationRepository
        {
            get
            {
                if (_meterLocationRepository == null)
                {
                    _meterLocationRepository = new GenericRepository<MeterLocation>(_context);
                }
                return _meterLocationRepository;
            }
        }

        public void Save()
        {
            _context.SaveChanges();
        }


        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
