using AutoMapper;
using DAL.Dtos;
using DAL.UnitOfWork;
using LoggerService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Utilities.Models;

namespace Utilities.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeterController : GenericRestController<Meter, MeterDto>
    {
        public MeterController(ILoggerManager logger, IMapper mapper, UnitOfWork unitOfWork)
            : base(logger, mapper, unitOfWork)
        {

        }
    }
}
