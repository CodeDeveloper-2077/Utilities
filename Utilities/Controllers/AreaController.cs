using AutoMapper;
using DAL.Dtos;
using DAL.Models;
using DAL.UnitOfWork;
using LoggerService;
using Microsoft.AspNetCore.Mvc;
using Utilities.Models;

namespace Utilities.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AreaController : GenericRestController<Area, AreaDto>
    {
        public AreaController(ILoggerManager logger, IMapper mapper, UnitOfWork unitOfWork)
            : base(logger, mapper, unitOfWork)
        {

        }
    }
}
