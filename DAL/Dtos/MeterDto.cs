namespace DAL.Dtos
{
    public class MeterDto
    {
        public int Id { get; set; }

        public string? MeterName { get; set; }

        public string? MeterNumber { get; set; }

        public string? DocPath { get; set; }

        public DateTime PrevCheckDate { get; set; }

        public DateTime NextCheckDate { get; set; }

        public int ApartmentId { get; set; }

        public ApartmentDto? Apartment { get; set; }

        public MeterLocationDto? MeterLocation { get; set; }
    }
}
