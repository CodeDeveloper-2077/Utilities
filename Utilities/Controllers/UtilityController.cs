using DAL.UnitOfWork;
using Microsoft.AspNetCore.Mvc;
using Utilities.Models;

namespace Utilities.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UtilityController : ControllerBase
    {
        private readonly ILogger<UtilityController> _logger;
        private readonly UnitOfWork _unitOfWork;

        public UtilityController(ILogger<UtilityController> logger, UnitOfWork unitOfWork)
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