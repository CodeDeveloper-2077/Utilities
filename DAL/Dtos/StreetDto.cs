namespace DAL.Dtos
{
    public class StreetDto : LocationDto
    {
        public CityDto City { get; set; }

        public IEnumerable<ApartmentDto> Apartments { get; set; }
    }
}
