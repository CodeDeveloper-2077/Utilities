namespace DAL.Dtos
{
    public class MeterDto
    {
        public string? MeterName { get; set; }

        public string? MeterNumber { get; set; }

        public DateTime PrevCheckDate { get; set; }

        public DateTime NextCheckDate { get; set; }

        public int ApartmentId { get; set; }

        public int MeterLocationId { get; set; }
    }
}
