using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class Area
    {
        public int Id { get; set; }

        public string Name { get; set; }

        [ForeignKey("Country")]
        public int CountryId { get; set; }

        public Country? Country { get; set; }

        public IEnumerable<City> Cities { get; set; }

        public Area()
        {
            Cities = new List<City>();
        }
    }
}
