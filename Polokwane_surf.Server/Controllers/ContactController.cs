using Microsoft.AspNetCore.Mvc;
using Polokwane_surf.Server.Models;
using Polokwane_surf.Server.Services;
using System.Net;

namespace Polokwane_surf.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly EmailService _emailService;

        public ContactController(EmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitContactForm([FromBody] ContactForm model)
        {
            try
            {
                _emailService.ValidateContactForm(model.Name, model.Email, model.PhoneNumber, model.Message);

                // Save to DB or do other logic if you like (optional)

                return Ok("Message received. Email will be sent by EmailJS on the frontend.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Failed to process request: {ex.Message}");
            }
        }
    }
}
