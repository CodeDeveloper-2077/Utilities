namespace DAL.Dtos
{
    public class CityDto : LocationDto
    {
        public int AreaId { get; set; }

        public IEnumerable<int>? StreetIds { get; set; }
    }
}
