using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class City
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        [ForeignKey("State")]
        public int? StateId { get; set; }

        public virtual State? State { get; set; }

        public virtual IEnumerable<Street>? Streets { get; set; }
    }
}
