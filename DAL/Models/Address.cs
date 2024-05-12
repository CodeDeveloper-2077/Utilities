using Utilities.Models;

namespace DAL.Models
{
    public class Address
    {
        public int Id { get; set; }

        public string? Country { get; set; }

        public string? State { get; set; }

        public string? City { get; set; }

        public string? Street { get; set; }

        public string? ApartmentNumber { get; set; }

        public string? HouseNumber { get; set; }

        public int BuildingNumber { get; set; }

        public int EntranceNumber { get; set; }

        public int ApartmentId { get; set; }

        public Apartment? Apartment { get; set; }
    }
}
