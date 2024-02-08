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
    public class MeterLocationController : ControllerBase
    {
        private readonly ILoggerManager _logger;
        private readonly IMapper _mapper;
        private readonly UnitOfWork _unitOfWork;

        public MeterLocationController(ILoggerManager logger, IMapper mapper, UnitOfWork unitOfWork)
        {
            _logger = logger;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMeterLocations()
        {
            try
            {
                var meterLocations = await _unitOfWork.MeterLocationRepository.GetAllAsync();
                _logger.LogInfo($"Returned all meter locations from database");

                var meterLocationResult = _mapper.Map<IEnumerable<MeterLocationDto>>(meterLocations);
                return Ok(meterLocationResult);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetAllMeterLocations action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetMeterLocationById(int id)
        {
            try
            {
                var meterLocation = await _unitOfWork.MeterLocationRepository.GetByIdAsync(id);
                if (meterLocation is null)
                {
                    _logger.LogError($"Meter location with id: {id} hasn't been found in db");
                    return NotFound();
                }
                else
                {
                    _logger.LogInfo($"Returned meter location with id: {id}");

                    var meterLocationResult = _mapper.Map<MeterLocationDto>(meterLocation);
                    return Ok(meterLocationResult);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetMeterLocationById action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateMeterLocation([FromBody] MeterLocationDto meterLocation)
        {
            try
            {
                if (meterLocation is null)
                {
                    _logger.LogError("Meter location object sent from client is null");
                    return BadRequest("Meter location object is null");
                }

                if (!ModelState.IsValid)
                {
                    _logger.LogError("Invalid meter location object sent from client");
                    return BadRequest("Invalid model object");
                }

                var meterLocationEntity = _mapper.Map<MeterLocation>(meterLocation);
                await _unitOfWork.MeterLocationRepository.AddAsync(meterLocationEntity);
                _unitOfWork.Save();

                return CreatedAtRoute("MeterLocationById", new { id = meterLocationEntity.Id }, meterLocationEntity);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside CreateMeterLocation action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateMeterLocation(int id, [FromBody] MeterLocationDto meterLocation)
        {
            try
            {
                if (meterLocation is null)
                {
                    _logger.LogError("Meter location object sent from client is null");
                    return BadRequest("Meter location object is null");
                }

                if (!ModelState.IsValid)
                {
                    _logger.LogError("Invalid meter location object sent from client");
                    return BadRequest("Invalid model object");
                }

                var meterLocationEntity = await _unitOfWork.MeterLocationRepository.GetByIdAsync(id);
                if (meterLocationEntity is null)
                {
                    _logger.LogError($"Meter location with id: {id}, hasn't been found in db");
                    return NotFound();
                }

                _mapper.Map(meterLocation, meterLocationEntity);

                await _unitOfWork.MeterLocationRepository.UpdateAsync(meterLocationEntity);
                _unitOfWork.Save();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside UpdateMeterLocation action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteMeterLocation(int id)
        {
            try
            {
                var meterLocation = await _unitOfWork.MeterLocationRepository.GetByIdAsync(id);
                if (meterLocation is null)
                {
                    _logger.LogError("Meter location object sent from client is null");
                    return BadRequest("Meter location object is null");
                }

                if (meterLocation.Meter is not null)
                {
                    _logger.LogError($"Cannot delete meter location with id: {id}. It has related data. Delete this data first");
                    return BadRequest("Cannot delete meter location. It has related data. Delete this data first");
                }

                await _unitOfWork.MeterLocationRepository.DeleteAsync(id);
                _unitOfWork.Save();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside DeleteMeterLocation action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
