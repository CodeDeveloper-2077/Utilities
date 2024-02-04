using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utilities.Models;

namespace DAL.Models
{
    public class Location
    {
        public int Id { get; set; }

        public string? Country { get; set; }

        public string? City { get; set; }

        public string? Address { get; set; }

        public int ApartmentId { get; set; }

        public Apartment? Apartment { get; set; }
    }
}
