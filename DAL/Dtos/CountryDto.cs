namespace DAL.Dtos
{
    public class CountryDto : LocationDto
    {
        public IEnumerable<AreaDto> Areas { get; set; }
    }
}
