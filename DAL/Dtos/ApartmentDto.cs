namespace DAL.Dtos
{
    public class ApartmentDto
    {
        public string? RelatedFamily { get; set; }

        public int RegisteredNumber { get; set; }

        public MeterDocumentDto? MeterDocument { get; set; }

        public LocationDto? Location { get; set; }

        public IEnumerable<MeterDto> Meters;
    }
}
