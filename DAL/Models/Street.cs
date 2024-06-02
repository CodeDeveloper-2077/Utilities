using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class Street
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        [ForeignKey("City")]
        public int? CityId { get; set; }

        public virtual City? City { get; set; }
    }
}
