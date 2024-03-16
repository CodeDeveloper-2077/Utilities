using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utilities.Models;

namespace DAL.Models
{
    public class Street : Location
    {
        [ForeignKey("City")]
        public int CityId { get; set; }

        public virtual City? City { get; set; }

        public virtual IEnumerable<Apartment>? Apartments { get; set; }
    }
}
