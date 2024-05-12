using System.Text.Json.Serialization;
using Utilities.Models;

namespace DAL.Dtos
{
    public class AddressDto
    {
        public string? Country { get; set; }

        public string? State { get; set; }

        public string? City { get; set; }

        public string? Street { get; set; }

        public string? ApartmentNumber { get; set; }

        public string? HouseNumber { get; set; }

        public int BuildingNumber { get; set; }

        public int EntranceNumber { get; set; }
    }
}
