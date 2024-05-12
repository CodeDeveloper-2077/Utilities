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
            CreateMap<Meter, MeterDto>().ReverseMap();
            CreateMap<Address, Address>().ReverseMap();
            CreateMap<Country, CountryDto>().ReverseMap();
            CreateMap<Area, AreaDto>().ReverseMap();
            CreateMap<City, CityDto>().ReverseMap();
            CreateMap<Street, StreetDto>().ReverseMap();
            CreateMap<MeterDocument, MeterDocumentDto>().ReverseMap();
            CreateMap<MeterLocation, MeterLocationDto>().ReverseMap();

            CreateMap<UserForRegistrationDto, User>()
                .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));
        }
    }
}
