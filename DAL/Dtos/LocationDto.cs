namespace DAL.Dtos
{
    public class LocationDto
    {
        public string? Country { get; set; }

        public string? City { get; set; }

        public string? Address { get; set; }

        public ApartmentDto? Apartment { get; set; }
    }
}
