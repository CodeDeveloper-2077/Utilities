using Utilities.Models;

namespace DAL.Models
{
    public class Address
    {
        public int Id { get; set; }

        public int? StreetId { get; set; }

        public virtual Street? Street { get; set; }

        public string? ApartmentNumber { get; set; }

        public string? HouseNumber { get; set; }

        public int BuildingNumber { get; set; }

        public int EntranceNumber { get; set; }

        public int ApartmentId { get; set; }

        public virtual Apartment? Apartment { get; set; }
    }
}
