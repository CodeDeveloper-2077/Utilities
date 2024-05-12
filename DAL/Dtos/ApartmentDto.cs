namespace DAL.Dtos
{
    public class ApartmentDto
    {
        public int Id { get; set; }

        public string? RelatedFamily { get; set; }

        public int RegisteredCountPeople { get; set; }

        public string? ReceiptCode { get; set; }

        public AddressDto? Address { get; set; }

        public MeterDocumentDto? MeterDocument { get; set; }

        public IEnumerable<MeterDto>? Meters { get; set; }
    }
}
