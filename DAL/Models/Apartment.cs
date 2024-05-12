using DAL.Models;

namespace Utilities.Models
{
    public class Apartment
    {
        public int Id { get; set; }

        public string? RelatedFamily { get; set; }

        public int RegisteredCountPeople { get; set; }

        public string? ReceiptCode { get; set; }

        public virtual MeterDocument? MeterDocument { get; set; }

        public int AddressId { get; set; }

        public virtual Address? Address { get; set; }

        public virtual IEnumerable<Meter> Meters { get; set; }

        public Apartment()
        {
            Meters = new List<Meter>();
        }
    }
}
