using System.ComponentModel.DataAnnotations;

namespace Utilities.Models
{
    public class MeterDocument
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public byte[]? Body { get; set; }

        public virtual Meter? Meter { get; set; }
    }
}
