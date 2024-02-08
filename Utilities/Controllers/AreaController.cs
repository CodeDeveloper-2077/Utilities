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
    public class AreaController : ControllerBase
    {
        private readonly ILoggerManager _logger;
        private readonly IMapper _mapper;
        private readonly UnitOfWork _unitOfWork;

        public AreaController(ILoggerManager logger, IMapper mapper, UnitOfWork unitOfWork)
        {
            _logger = logger;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAreas()
        {
            try
            {
                var areas = await _unitOfWork.AreaRepository.GetAllAsync();
                _logger.LogInfo($"Returned all areas from database");

                var areasResult = _mapper.Map<IEnumerable<AreaDto>>(areas);
                return Ok(areasResult);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetAllAreas action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetAreaById(int id)
        {
            try
            {
                var areas = await _unitOfWork.AreaRepository.GetByIdAsync(id);
                if (areas is null)
                {
                    _logger.LogError($"Area with id: {id} hasn't been found in db");
                    return NotFound();
                }
                else
                {
                    _logger.LogInfo($"Returned area with id: {id}");

                    var areaResult = _mapper.Map<AreaDto>(areas);
                    return Ok(areaResult);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetAreaById action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateArea([FromBody] AreaDto area)
        {
            try
            {
                if (area is null)
                {
                    _logger.LogError("Area object sent from client is null");
                    return BadRequest("Area object is null");
                }

                if (!ModelState.IsValid)
                {
                    _logger.LogError("Invalid area object sent from client");
                    return BadRequest("Invalid model object");
                }

                var areaEntity = _mapper.Map<Area>(area);
                await _unitOfWork.AreaRepository.AddAsync(areaEntity);
                _unitOfWork.Save();

                return CreatedAtRoute("AreaById", new { id = areaEntity.Id }, areaEntity);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside CreateArea action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateArea(int id, [FromBody] AreaDto area)
        {
            try
            {
                if (area is null)
                {
                    _logger.LogError("Area object sent from client is null");
                    return BadRequest("Area object is null");
                }

                if (!ModelState.IsValid)
                {
                    _logger.LogError("Invalid area object sent from client");
                    return BadRequest("Invalid model object");
                }

                var areaEntity = await _unitOfWork.AreaRepository.GetByIdAsync(id);
                if (areaEntity is null)
                {
                    _logger.LogError($"Area with id: {id}, hasn't been found in db");
                    return NotFound();
                }

                areaEntity = _mapper.Map<Area>(area);
                await _unitOfWork.AreaRepository.UpdateAsync(areaEntity);
                _unitOfWork.Save();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside UpdateArea action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteArea(int id)
        {
            try
            {
                var area = await _unitOfWork.AreaRepository.GetByIdAsync(id);
                if (area is null)
                {
                    _logger.LogError("Area object sent from client is null");
                    return BadRequest("Area object is null");
                }

                if (area.Country is not null || area.Cities.Any())
                {
                    _logger.LogError($"Cannot delete area with id: {id}. It has related data. Delete this data first");
                    return BadRequest("Cannot delete area. It has related data. Delete this data first");
                }

                await _unitOfWork.ApartmentRepository.DeleteAsync(id);
                _unitOfWork.Save();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside DeleteArea action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
