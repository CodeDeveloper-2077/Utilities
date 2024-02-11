using AutoMapper;
using DAL.Dtos;
using DAL.Models;
using DAL.UnitOfWork;
using LoggerService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Utilities.Models;

namespace Utilities.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenericRestController<TEntity, TEntityDto> : ControllerBase where TEntity : class 
        where TEntityDto : class
    {
        private readonly ILoggerManager _logger;
        private readonly UnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GenericRestController(ILoggerManager logger, IMapper mapper, UnitOfWork unitOfWork)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public virtual async Task<IActionResult> GetAllEntities()
        {
            try
            {
                var entities = await _unitOfWork.Repository<TEntity>().GetAllAsync();
                _logger.LogInfo($"Returned all {typeof(TEntity).Name}s from database");

                var entitiesResult = _mapper.Map<IEnumerable<TEntityDto>>(entities);
                return Ok(entitiesResult);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetAll{typeof(TEntity).Name}s action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpGet("{id:int}")]
        public virtual async Task<IActionResult> GetEntityById(int id)
        {
            try
            {
                var entity = await _unitOfWork.Repository<TEntity>().GetByIdAsync(id);
                if (entity is null)
                {
                    _logger.LogError($"{typeof(TEntity).Name} with id: {id} hasn't been found in db");
                    return NotFound();
                }
                else
                {
                    _logger.LogInfo($"Returned {typeof(TEntity).Name} with id: {id}");

                    var entitiesResult = _mapper.Map<TEntityDto>(entity);
                    return Ok(entitiesResult);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside Get{typeof(TEntity).Name}ById action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpPost]
        public virtual async Task<IActionResult> CreateEntity([FromBody] TEntityDto entityDto)
        {
            try
            {
                if (entityDto is null)
                {
                    _logger.LogError($"{typeof(TEntity).Name} object sent from client is null");
                    return BadRequest($"{typeof(TEntity).Name} object is null");
                }

                if (!ModelState.IsValid)
                {
                    _logger.LogError($"Invalid {typeof(TEntity).Name} object sent from client");
                    return BadRequest("Invalid model object");
                }

                var entity = _mapper.Map<TEntity>(entityDto);
                await _unitOfWork.Repository<TEntity>().AddAsync(entity);
                _unitOfWork.Commit();

                return Ok(entity);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside Create{typeof(TEntity).Name} action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpPut("{id:int}")]
        public virtual async Task<IActionResult> UpdateEntity(int id, [FromBody] TEntityDto entityDto)
        {
            try
            {
                if (entityDto is null)
                {
                    _logger.LogError($"{typeof(TEntity).Name} object sent from client is null");
                    return BadRequest($"{typeof(TEntity).Name} object is null");
                }

                if (!ModelState.IsValid)
                {
                    _logger.LogError($"Invalid {typeof(TEntity).Name} object sent from client");
                    return BadRequest("Invalid model object");
                }

                var entity = await _unitOfWork.Repository<TEntity>().GetByIdAsync(id);
                if (entity is null)
                {
                    _logger.LogError($"{typeof(TEntity).Name} with id: {id}, hasn't been found in db");
                    return NotFound();
                }

                _mapper.Map(entityDto, entity);
                await _unitOfWork.Repository<TEntity>().UpdateAsync(entity);
                _unitOfWork.Commit();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside Update{typeof(TEntity).Name} action: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpDelete("{id:int}")]
        public virtual async Task<IActionResult> DeleteEntity(int id)
        {
            try
            {
                var entity = await _unitOfWork.Repository<TEntity>().GetByIdAsync(id);
                if (entity is null)
                {
                    _logger.LogError($"{typeof(TEntity).Name} object sent from client is null");
                    return BadRequest($"{typeof(TEntity).Name} object is null");
                }

                await _unitOfWork.Repository<TEntity>().DeleteAsync(id);
                _unitOfWork.Commit();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside Delete{typeof(TEntity).Name} action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
