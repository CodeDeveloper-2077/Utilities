namespace DAL.Dtos
{
    public class StreetDto
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public CityDto? City { get; set; }
    }
}
