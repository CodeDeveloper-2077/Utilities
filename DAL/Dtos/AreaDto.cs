namespace DAL.Dtos
{
    public class AreaDto : LocationDto
    {
        public IEnumerable<CityDto>? Cities { get; set; }
    }
}
