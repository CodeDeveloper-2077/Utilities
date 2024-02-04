namespace DAL.Dtos
{
    public class AreaDto : LocationDto
    {
        public CountryDto Country { get; set; }

        public IEnumerable<CityDto> Cities { get; set; }
    }
}
