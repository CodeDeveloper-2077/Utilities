using AutoMapper;
using DAL.Dtos;
using DAL.Models;
using Utilities.Models;

namespace DAL.Profiles
{
    public class MapperInitializer : Profile
    {
        public MapperInitializer()
        {
            CreateMap<Apartment, ApartmentDto>().ReverseMap();
            CreateMap<Location, LocationDto>().ReverseMap();
            CreateMap<Meter, MeterDto>().ReverseMap();
            CreateMap<MeterDocument, MeterDocumentDto>().ReverseMap();
            CreateMap<MeterLocation, MeterLocationDto>().ReverseMap();
        }
    }
}
