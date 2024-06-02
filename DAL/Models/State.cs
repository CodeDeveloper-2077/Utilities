using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class State
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        [ForeignKey("Country")]
        public int? CountryId { get; set; }

        public virtual Country? Country { get; set; }

        public virtual IEnumerable<City>? Cities { get; set; }
    }
}
