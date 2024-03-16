namespace DAL.Dtos
{
    public class ApartmentDto
    {
        public int Id { get; set; }

        public string? RelatedFamily { get; set; }

        public int RegisteredCountPeople { get; set; }

        public string ApartmentNumber { get; set; }

        public string HouseNumber { get; set; }

        public int BuildingNumber { get; set; }

        public int EntranceNumber { get; set; }

        public string? ReceiptCode { get; set; }

        public MeterDocumentDto MeterDocument { get; set; }

        public IEnumerable<MeterDto> Meters { get; set; }
    }
}
