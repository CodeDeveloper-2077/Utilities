namespace DAL.Dtos
{
    public class StateDto
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public CountryDto? Country { get; set; }

        public IEnumerable<CityDto>? Cities { get; set; }
    }
}
