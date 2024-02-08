using Utilities.Data;
using Utilities.Models;
using DAL.Repository;
using DAL.Models;

namespace DAL.UnitOfWork
{
    public class UnitOfWork
    {
        private readonly UtilitiesDb _context;
        private GenericRepository<Apartment> _apartmentRepository;
        private GenericRepository<Area> _areaRepository;
        private GenericRepository<City> _cityRepository;
        private GenericRepository<Country> _countryRepository;
        private GenericRepository<Meter> _meterRepository;
        private GenericRepository<MeterDocument> _meterDocumentRepository;
        private GenericRepository<MeterLocation> _meterLocationRepository;
        private GenericRepository<Street> _streetRepository;

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

        public GenericRepository<Area> AreaRepository
        {
            get
            {
                if (_areaRepository == null)
                {
                    _areaRepository = new GenericRepository<Area>(_context);
                }
                return _areaRepository;
            }
        }

        public GenericRepository<City> CityRepository
        {
            get
            {
                if (_cityRepository == null)
                {
                    _cityRepository = new GenericRepository<City>(_context);
                }
                return _cityRepository;
            }
        }

        public GenericRepository<Country> CountryRepository
        {
            get
            {
                if (_countryRepository == null)
                {
                    _countryRepository = new GenericRepository<Country>(_context);
                }
                return _countryRepository;
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

        public GenericRepository<Street> StreetRepository
        {
            get
            {
                if (_streetRepository == null)
                {
                    _streetRepository = new GenericRepository<Street>(_context);
                }
                return _streetRepository;
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
