namespace Utilities.Models
{
    public class Meter
    {
        public int MeterId { get; set; }

        public string? MeterName { get; set; }

        public long MeterNumber { get; set; }

        public DateTime PrevCheckDate { get; set; }

        public DateTime NextCheckDate { get; set; }

        public int MeterLocationId { get; set; }

        public MeterLocation? MeterLocation { get; set; }
    }
}
