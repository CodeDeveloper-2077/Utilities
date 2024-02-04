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

        [HttpPost]
        public async Task<IActionResult> PostApartment([FromBody] Apartment apartment)
        {
            try
            {
                if (!ModelState.IsValid || apartment is null)
                {
                    return BadRequest(ModelState);
                }

                await _unitOfWork.ApartmentRepository.AddAsync(apartment);

                return CreatedAtAction(nameof(GetAllApartments), new { id = apartment.Id }, apartment);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error creating apartment record");
            }
        }

        [HttpPut("{id:int}")]
        public Task<IActionResult> Put(int id, Apartment apartment)
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