namespace DAL.Dtos
{
    public class AreaDto : LocationDto
    {
        public int CountryId { get; set; }

        public IEnumerable<int> CityIds { get; set; }
    }
}
