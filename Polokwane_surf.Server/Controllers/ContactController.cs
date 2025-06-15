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
        private readonly SmsService _smsService;

        public ContactController(EmailService emailService, SmsService smsService)
        {
            _emailService = emailService;
            _smsService = smsService;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitContactForm([FromBody] ContactForm model)
        {
            try
            {
                await _emailService.SendContactEmailAsync(model.Name, model.Email, model.PhoneNumber, model.Message);

                if (!string.IsNullOrWhiteSpace(model.PhoneNumber))
                {
                    string smsMessage = $"Hi {model.Name}, thank you for contacting Polokwane Surfacing. We’ll be in touch soon.";

                    try
                    {
                        await _smsService.SendSmsAsync(model.PhoneNumber, smsMessage);
                    }
                    catch (Exception smsEx)
                    {
                        // Email succeeded, but SMS failed
                        return StatusCode(500, $"Email sent, but SMS failed: {smsEx.Message}");
                    }
                }

                return Ok("Email and SMS sent successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Failed to process request: {ex.Message}");
            }
        }


        [HttpGet("test-email")]
        public async Task<IActionResult> TestEmail()
        {
            try
            {
                string name = "Test User";
                string message = "This is a test message.\nIt has multiple lines.";

                string bodyToUser = $@"
                <html>
                  <body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;'>
                    <div style='max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
                      <div style='text-align: center;'>
                        <img src='../assets/images/logo.png' alt='Polokwane Surfacing Logo' style='width: 160px; margin-bottom: 20px;' />
                      </div>
                      <h2 style='color: #2c3e50;'>Thank You, {WebUtility.HtmlEncode(name)}</h2>
                      <p style='font-size: 16px; color: #333;'>
                        We have received your message and will get back to you shortly.
                      </p>
                      <p style='font-size: 16px; color: #333;'>
                        <strong>Your Message:</strong><br />
                        {WebUtility.HtmlEncode(message).Replace("\n", "<br />")}
                      </p>
                      <p style='margin-top: 30px; font-size: 14px; color: #555;'>
                        Kind regards,<br />
                        <strong>Polokwane Surfacing Team</strong><br />
                        <a href='https://polokwanesurfacing.co.za' target='_blank' style='color: #27ae60;'>www.polokwanesurfacing.co.za</a>
                      </p>
                    </div>
                  </body>
                </html>";

                await _emailService.SendEmailAsync(
                    "test@gmail.com",
                    "Polokwane Surfacing - Test Email",
                    bodyToUser
                );

                return Ok("Email sent successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet("test-sms")]
        public async Task<IActionResult> TestSms([FromQuery] string phone)
        {
            if (string.IsNullOrWhiteSpace(phone))
                return BadRequest("Phone number is required.");

            try
            {
                string testMessage = "Hello from Polokwane Surfacing! This is a test SMS.";
                await _smsService.SendSmsAsync(phone, testMessage);
                return Ok($"Test SMS sent to {phone}.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Failed to send SMS: {ex.Message}");
            }
        }

    }
}
