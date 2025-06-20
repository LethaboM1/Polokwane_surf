//using Microsoft.AspNetCore.Mvc;
//using Polokwane_surf.Server.Models;
//using Polokwane_surf.Server.Services;
//using Polokwane_surf.Server.Data;
//using System;
//using System.Threading.Tasks;

//namespace Polokwane_surf.Server.Controllers
//{
//    [ApiController]
//    [Route("api/[controller]")]
//    public class ClientSurveyController : ControllerBase
//    {
//        private readonly EmailService _emailService;
//        private readonly AppDbContext _context;

//        public ClientSurveyController(EmailService emailService, AppDbContext context)
//        {
//            _emailService = emailService;
//            _context = context;
//        }

//        [HttpPost("submit")]
//        public async Task<IActionResult> SubmitClientSurvey([FromBody] ClientSurveyForm model)
//        {
//            if (model == null || !ModelState.IsValid)
//            {
//                return BadRequest("Invalid input.");
//            }

//            try
//            {
//                model.SubmittedAt = DateTime.UtcNow;
//                _context.Surveys.Add(model);
//                await _context.SaveChangesAsync();

//var stars = model.Rating switch
//{
//    "5" => "🌟🌟🌟🌟🌟",
//    "4" => "🌟🌟🌟🌟",
//    "3" => "🌟🌟🌟",
//    "2" => "🌟🌟",
//    "1" => "🌟",
//    _ => "No rating"
//};

//                var subject = "New Client Survey Submission";
//                var body = $@"
//        <html>
//            <body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;'>
//                <div style='max-width: 600px; margin: auto; background: white; border-radius: 10px; padding: 20px;'>
//                    <h2 style='color: #2c3e50;'>New Client Survey Submission</h2>
//                    <p><strong>Name:</strong> {model.Name}</p>
//                    <p><strong>Email:</strong> {model.Email}</p>
//                    <p><strong>Service Used:</strong> {model.ServiceUsed}</p>
//                    <p><strong>Rating:</strong> {stars}</p>
//                    <p><strong>Feedback:</strong><br />{model.Feedback?.Replace("\n", "<br />")}</p>
//                    <hr />
//                    <p style='font-size: 12px; color: #888;'>Submitted at: {DateTime.Now:dd MMM yyyy HH:mm}</p>
//                </div>
//            </body>
//        </html>";

//                await _emailService.SendEmailAsync("Quotes1@polokwanesurfacing.co.za", subject, body);

//                // Confirmation email to user
//                var confirmationSubject = "Thank You for Your Feedback – Polokwane Surfacing";
//                var confirmationBody = $@"
//        <html>
//          <body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;'>
//            <div style='max-width: 600px; margin: auto; background: white; border-radius: 10px; padding: 20px;'>
//              <h2 style='color: #2c3e50;'>Hi {model.Name},</h2>
//              <p>Thank you for completing our client satisfaction survey!</p>
//              <p>Your feedback is valuable and helps us improve our services.</p>
//              <hr />
//              <p><strong>Your Feedback:</strong><br />{model.Feedback?.Replace("\n", "<br />")}</p>
//              <p><strong>Rating:</strong> {stars}</p>
//              <hr />
//              <p style='font-size: 14px; color: #888;'>
//                Kind regards,<br />
//                <strong>Polokwane Surfacing Team</strong><br />
//                <a href='https://polokwanesurfacing.co.za' style='color: #27ae60;'>www.polokwanesurfacing.co.za</a>
//              </p>
//            </div>
//          </body>
//        </html>";

//                await _emailService.SendEmailAsync(model.Email, confirmationSubject, confirmationBody);

//                return Ok(new { message = "Survey submitted and confirmation email sent." });
//            }
//            catch (Exception ex)
//            {
//                return StatusCode(500, $"Internal Server Error: {ex.Message}");
//            }
//        }

//    }
//}
using Microsoft.AspNetCore.Mvc;
using Polokwane_surf.Server.Models;
using Polokwane_surf.Server.Data;
using System;
using System.Threading.Tasks;

namespace Polokwane_surf.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientSurveyController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientSurveyController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitClientSurvey([FromBody] ClientSurveyForm model)
        {
            if (model == null || !ModelState.IsValid)
            {
                return BadRequest("Invalid input.");
            }

            try
            {
                model.SubmittedAt = DateTime.UtcNow;
                _context.Surveys.Add(model);
                await _context.SaveChangesAsync();

                // ✅ Backend saves the data only.
                return Ok(new { message = "Survey submitted successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
    }
}
