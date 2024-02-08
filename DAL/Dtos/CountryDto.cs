namespace DAL.Dtos
{
    public class CountryDto : LocationDto
    {
        public IEnumerable<int> AreaIds { get; set; }
    }
}
