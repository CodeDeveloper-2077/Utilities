namespace DAL.Dtos
{
    public class StreetDto : LocationDto
    {
        public IEnumerable<ApartmentDto> Apartments { get; set; }
    }
}
