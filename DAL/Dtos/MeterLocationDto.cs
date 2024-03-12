namespace DAL.Dtos
{
    public class MeterLocationDto
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public MeterDto Meter { get; set; }
    }
}
