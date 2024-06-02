namespace DAL.Dtos
{
    public class CityDto
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public StateDto? State { get; set; }

        public virtual IEnumerable<StreetDto>? Streets { get; set; }
    }
}
