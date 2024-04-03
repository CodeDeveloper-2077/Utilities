using AutoMapper;
using DAL.Dtos;
using DAL.UnitOfWork;
using EmailService;
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
        private readonly IEmailSender _emailSender;
        public ApartmentController(ILoggerManager logger, IMapper mapper, UnitOfWork unitOfWork, IEmailSender emailSender)
            : base(logger, mapper, unitOfWork)
        {
            _emailSender = emailSender;
        }

        public override Task<IActionResult> GetAllEntities()
        {
            var message = new Message(new string[] { "oleh.shevchenko.02@gmail.com" }, "Test email", "This is the content from our email.");
            _emailSender.SendEmail(message);
            _logger.LogInfo("Email Sent");

            return base.GetAllEntities();
        }
    }
}