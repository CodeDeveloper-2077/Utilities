namespace Utilities.Models
{
    public class MeterDocument
    {
        public int MeterDocumentId { get; set; }

        public int ApartmentId { get; set; }
        public Apartment? Apartment { get; set; }

        public string? Body { get; set; }
    }
}
