using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Utilities.Models
{
    public class MeterLocation
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string? Name { get; set; }

        public int MeterId { get; set; }

        public Meter? Meter { get; set; }
    }
}
