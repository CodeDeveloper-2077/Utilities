using System.ComponentModel.DataAnnotations;

namespace Utilities.Models
{
    public class MeterDocument
    {
        [Key]
        public int MeterDocumentId { get; set; }

        public int ApartmentId { get; set; }
        public Apartment? Apartment { get; set; }

        [Required]
        public string? Body { get; set; }
    }
}
