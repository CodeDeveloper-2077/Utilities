using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class Country : Location
    {
        public IEnumerable<Area> Areas { get; set; }

        public Country()
        {
            Areas = new List<Area>();
        }
    }
}
