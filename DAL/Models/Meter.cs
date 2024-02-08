namespace Utilities.Models
{
    public class Meter
    {
        public int Id { get; set; }

        public string? MeterName { get; set; }

        public string? MeterNumber { get; set; }

        public DateTime PrevCheckDate { get; set; }

        public DateTime NextCheckDate { get; set; }

        public int ApartmentId { get; set; }

        public Apartment? Apartment { get; set; }

        public MeterLocation? MeterLocation { get; set; }
    }
}
