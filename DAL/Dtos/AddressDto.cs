namespace DAL.Dtos
{
    public class AddressDto
    {
        public int Id { get; set; }

        public ApartmentDto? Apartment { get; set; }

        public StreetDto? Street { get; set; }

        public string? ApartmentNumber { get; set; }

        public string? HouseNumber { get; set; }

        public int BuildingNumber { get; set; }

        public int EntranceNumber { get; set; }
    }
}
