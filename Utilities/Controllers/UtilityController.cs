using DAL.UnitOfWork;
using LoggerService;
using Microsoft.AspNetCore.Mvc;
using Utilities.Models;

namespace Utilities.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UtilityController : ControllerBase
    {
        private readonly ILoggerManager _logger;
        private readonly UnitOfWork _unitOfWork;

        public UtilityController(ILoggerManager logger, UnitOfWork unitOfWork)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public IEnumerable<MeterLocation> Get()
        {
            _logger.LogInfo("Hello world");
            return _unitOfWork.MeterLocationRepository.GetAll();
        }

        [HttpPost]
        public Task<IActionResult> Post()
        {
            throw new NotImplementedException();
        }

        [HttpPut("{id:int}")]
        public Task<IActionResult> Put(int id)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{id:int}")]
        public Task<IActionResult> Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}