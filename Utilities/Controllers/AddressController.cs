using AutoMapper;
using DAL.Dtos;
using DAL.Models;
using DAL.UnitOfWork;
using LoggerService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Utilities.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly ILoggerManager _logger;
        private readonly IMapper _mapper;
        private readonly UnitOfWork _unitOfWork;

        public AddressController(ILoggerManager logger, UnitOfWork unitOfWork, IMapper mapper)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet("countries")]
        public virtual async Task<IActionResult> GetAllCountries()
        {
            try
            {
                var countries = await _unitOfWork.Repository<Country>().GetAllAsync();
                _logger.LogInfo($"Returned all countries from database");

                var countriesResult = _mapper.Map<IEnumerable<CountryDto>>(countries);
                return Ok(countriesResult);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetAllCountries action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpGet("states")]
        public virtual async Task<IActionResult> GetAllStates()
        {
            try
            {
                var states = await _unitOfWork.Repository<State>().GetAllAsync();
                _logger.LogInfo($"Returned all states from database");

                var statesResult = _mapper.Map<IEnumerable<StateDto>>(states);
                return Ok(statesResult);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetAllStates action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpGet("cities")]
        public virtual async Task<IActionResult> GetAllCities()
        {
            try
            {
                var cities = await _unitOfWork.Repository<City>().GetAllAsync();
                _logger.LogInfo($"Returned all cities from database");

                var citiesResult = _mapper.Map<IEnumerable<CityDto>>(cities);
                return Ok(citiesResult);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetAllCities action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpGet("streets")]
        public virtual async Task<IActionResult> GetAllStreets()
        {
            try
            {
                var streets = await _unitOfWork.Repository<Street>().GetAllAsync();
                _logger.LogInfo($"Returned all streets from database");

                var streetsResult = _mapper.Map<IEnumerable<StreetDto>>(streets);
                return Ok(streetsResult);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetAllStreets action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }
    }
}
