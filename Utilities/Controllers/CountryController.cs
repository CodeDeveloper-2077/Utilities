using AutoMapper;
using DAL.Dtos;
using DAL.Models;
using DAL.UnitOfWork;
using LoggerService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Utilities.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController : GenericRestController<Country, CountryDto>
    {
        public CountryController(ILoggerManager logger, IMapper mapper, UnitOfWork unitOfWork)
            : base(logger, mapper, unitOfWork)
        {

        }
    }
}
