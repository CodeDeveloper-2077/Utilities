using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class City : Location
    {
        [ForeignKey("Area")]
        public int AreaId { get; set; }

        public Area? Area { get; set; }

        public IEnumerable<Street> Streets { get; set; }

        public City()
        {
            Streets = new List<Street>();
        }
    }
}
