using AutoMapper;
using DAL.Dtos;
using DAL.UnitOfWork;
using LoggerService;
using Microsoft.AspNetCore.Mvc;
using Utilities.Models;

namespace Utilities.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApartmentController : GenericRestController<Apartment, ApartmentDto>
    {
        public ApartmentController(ILoggerManager logger, IMapper mapper, UnitOfWork unitOfWork)
            : base(logger, mapper, unitOfWork)
        {

        }
    }
}