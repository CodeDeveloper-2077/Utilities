namespace DAL.Dtos
{
    public class CountryDto
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public IEnumerable<StateDto>? States { get; set; }
    }
}
