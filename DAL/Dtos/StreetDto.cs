using System.Text.Json.Serialization;

namespace DAL.Dtos
{
    public class StreetDto : LocationDto
    {
        [JsonIgnore]
        public IEnumerable<ApartmentDto>? Apartments { get; set; }
    }
}
