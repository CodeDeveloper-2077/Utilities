using DAL.Models;

namespace Utilities.Models
{
    public class Apartment
    {
        public int Id { get; set; }

        public string RelatedFamily { get; set; }

        public int RegisteredCountPeople { get; set; }

        public string ApartmentNumber { get; set; }

        public string HouseNumber { get; set; }

        public int BuildingNumber { get; set; }

        public int EntranceNumber { get; set; }

        public string? ReceiptCode { get; set; }

        public virtual MeterDocument? MeterDocument { get; set; }

        public int StreetId { get; set; }

        public virtual Street? Street { get; set; }

        public virtual IEnumerable<Meter> Meters { get; set; }

        public Apartment()
        {
            Meters = new List<Meter>();
        }
    }
}
