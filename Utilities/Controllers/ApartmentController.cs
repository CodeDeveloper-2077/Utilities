using AutoMapper;
using DAL.Dtos;
using DAL.UnitOfWork;
using LoggerService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Utilities.Models;

namespace Utilities.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApartmentController : GenericRestController<Apartment, ApartmentDto>
    {
        public ApartmentController(ILoggerManager logger, IMapper mapper, UnitOfWork unitOfWork)
            : base(logger, mapper, unitOfWork)
        {

        }

        [HttpGet("Privacy")]
        [Authorize]
        public IActionResult Privacy()
        {
            var claims = User.Claims
                .Select(c => new { c.Type, c.Value })
                .ToList();

            return Ok(claims);
        }
    }
}