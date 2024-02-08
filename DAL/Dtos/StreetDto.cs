namespace DAL.Dtos
{
    public class StreetDto : LocationDto
    {
        public int CityId { get; set; }

        public int ApartmentId { get; set; }
    }
}
