using System.ComponentModel.DataAnnotations;

namespace Utilities.Models
{
    public class MeterLocation
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string? Name { get; set; }

        public virtual Meter? Meter { get; set; }
    }
}
