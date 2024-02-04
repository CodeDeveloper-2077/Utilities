namespace DAL.Dtos
{
    public class CityDto : LocationDto
    {
        public AreaDto? Area { get; set; }

        public IEnumerable<StreetDto>? Streets { get; set; }
    }
}
