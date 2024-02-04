using DAL.Models;

namespace Utilities.Models
{
    public class Apartment
    {
        public int Id { get; set; }

        public string? RelatedFamily { get; set; }

        public int RegisteredNumber { get; set; }

        public int MeterDocumentId { get; set; }

        public MeterDocument? MeterDocument { get; set; }

        public int LocationId { get; set; }

        public Location? Location { get; set; }

        public IEnumerable<Meter> Meters;

        public Apartment()
        {
            Meters = new List<Meter>();
        }
    }
}
