using Microsoft.AspNetCore.Mvc;
using Polokwane_surf.Server.Models;
using Polokwane_surf.Server.Services;

namespace Polokwane_surf.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SurveyController : ControllerBase
    {
        private readonly EmailService _emailService;

        public SurveyController(EmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitSurvey([FromBody] SurveyForm model)
        {
            if (model == null) return BadRequest("Invalid input");

            var subject = "New Client Survey Submission";
            var body = $@"
                <h3>Client Survey</h3>
                <p><strong>Name:</strong> {model.Name}</p>
                <p><strong>Email:</strong> {model.Email}</p>
                <p><strong>Service Used:</strong> {model.ServiceUsed}</p>
                <p><strong>Rating:</strong> {model.Rating}</p>
                <p><strong>Feedback:</strong><br/>{model.Feedback}</p>";

            await _emailService.SendEmailAsync("Quotes1@polokwanesurfacing.co.za", subject, body);

            return Ok(new { message = "Survey submitted successfully." });
        }
    }
}
