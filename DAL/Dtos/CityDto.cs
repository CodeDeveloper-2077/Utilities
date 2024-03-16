namespace DAL.Dtos
{
    public class CityDto : LocationDto
    {

        public IEnumerable<StreetDto>? Streets { get; set; }
    }
}
