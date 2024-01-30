namespace Utilities.Models
{
    public class Apartment
    {
        public int ApartmentId { get; set; }

        public string? RelatedFamily { get; set; }

        public int MeterDocumentId { get; set; }

        public MeterDocument? MeterDocument { get; set; }


        public IEnumerable<Meter> Meters;

        public Apartment()
        {
            Meters = new List<Meter>();
        }
    }
}
