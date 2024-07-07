namespace Utilities.Models
{
    public class Meter
    {
        public int Id { get; set; }

        public string? MeterName { get; set; }

        public string? MeterNumber { get; set; }

        public string? DocPath { get; set; }

        public DateTime PrevCheckDate { get; set; }

        public DateTime NextCheckDate { get; set; }

        public int ApartmentId { get; set; }

        public virtual Apartment? Apartment { get; set; }

        public int MeterLocationId { get; set; }

        public virtual MeterLocation? MeterLocation { get; set; }
    }
}
