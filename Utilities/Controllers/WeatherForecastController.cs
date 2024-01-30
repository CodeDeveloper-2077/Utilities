using DAL.UnitOfWork;
using Microsoft.AspNetCore.Mvc;
using Utilities.Models;

namespace Utilities.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly UnitOfWork _unitOfWork;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, UnitOfWork unitOfWork)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public IEnumerable<MeterLocation> Get()
        {
            return _unitOfWork.MeterLocationRepository.GetAll();
        }
    }
}