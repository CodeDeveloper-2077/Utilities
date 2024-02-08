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
    public class ApartmentController : ControllerBase
    {
        private readonly ILoggerManager _logger;
        private readonly IMapper _mapper;
        private readonly UnitOfWork _unitOfWork;

        public ApartmentController(ILoggerManager logger, IMapper mapper, UnitOfWork unitOfWork)
        {
            _logger = logger;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllApartments()
        {
            try
            {
                var apartments = await _unitOfWork.ApartmentRepository.GetAllAsync();
                _logger.LogInfo($"Returned all apartments from database");

                var apartmentsResult = _mapper.Map<IEnumerable<ApartmentDto>>(apartments);
                return Ok(apartmentsResult);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetAllApartments action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetApartmentById(int id)
        {
            try
            {
                var apartment = await _unitOfWork.ApartmentRepository.GetByIdAsync(id);
                if (apartment is null)
                {
                    _logger.LogError($"Apartment with id: {id} hasn't been found in db");
                    return NotFound();
                }
                else
                {
                    _logger.LogInfo($"Returned apartment with id: {id}");

                    var apartmentResult = _mapper.Map<ApartmentDto>(apartment);
                    return Ok(apartmentResult);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetApartmentById action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateApartment([FromBody] ApartmentDto apartment)
        {
            try
            {
                if (apartment is null)
                {
                    _logger.LogError("Apartment object sent from client is null");
                    return BadRequest("Apartment object is null");
                }

                if (!ModelState.IsValid)
                {
                    _logger.LogError("Invalid apartment object sent from client");
                    return BadRequest("Invalid model object");
                }

                var apartmentEntity = _mapper.Map<Apartment>(apartment);
                await _unitOfWork.ApartmentRepository.AddAsync(apartmentEntity);
                _unitOfWork.Save();

                return CreatedAtRoute("ApartmentById", new { id = apartmentEntity.Id }, apartmentEntity);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside CreateApartment action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateApartment(int id, [FromBody] ApartmentDto apartment)
        {
            try
            {
                if (apartment is null)
                {
                    _logger.LogError("Apartment object sent from client is null");
                    return BadRequest("Apartment object is null");
                }

                if (!ModelState.IsValid)
                {
                    _logger.LogError("Invalid apartment object sent from client");
                    return BadRequest("Invalid model object");
                }

                var apartmentEntity = await _unitOfWork.ApartmentRepository.GetByIdAsync(id);
                if (apartmentEntity is null)
                {
                    _logger.LogError($"Apartment with id: {id}, hasn't been found in db");
                    return NotFound();
                }

                apartmentEntity = _mapper.Map<Apartment>(apartment);
                await _unitOfWork.ApartmentRepository.UpdateAsync(apartmentEntity);
                _unitOfWork.Save();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside UpdateApartment action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteApartment(int id)
        {
            try
            {
                var apartment = await _unitOfWork.ApartmentRepository.GetByIdAsync(id);
                if (apartment is null)
                {
                    _logger.LogError("Apartment object sent from client is null");
                    return BadRequest("Apartment object is null");
                }

                if (apartment.MeterDocument != null || apartment.Street != null || apartment.Meters.Any())
                {
                    _logger.LogError($"Cannot delete apartment with id: {id}. It has related data. Delete this data first");
                    return BadRequest("Cannot delete apartment. It has related data. Delete this data first");
                }

                await _unitOfWork.ApartmentRepository.DeleteAsync(id);
                _unitOfWork.Save();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside DeleteApartment action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}