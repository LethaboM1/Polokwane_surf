
//    using Microsoft.AspNetCore.Mvc;
//    using Polokwane_surf.Server.Model;
//    using Polokwane_surf.Server.Services;

//namespace Polokwane_surf.Server.Controllers
//{
//    [ApiController]
//        [Route("api/[controller]")]
//        public class ContactController : ControllerBase
//        {
//            private readonly EmailService _emailService;
//            //private readonly SmsService _smsService;

//            public ContactController(EmailService emailService)
//            {
//                _emailService = emailService;
//                //_smsService = smsService;
//            }

//        [HttpPost("submit")]
//        public async Task<IActionResult> SendContactForm([FromBody] ContactForm form)
//        {
//            try
//            {
//                Console.WriteLine($"Received ContactForm: Name={form.Name}, Email={form.Email}, Subject={form.Subject}, Phone={form.PhoneNumber}, Message={form.Message}");

//                var emailBody = $@"
//            <h2>New Contact Form Submission</h2>
//            <p><strong>Name:</strong> {form.Name}</p>
//            <p><strong>Email:</strong> {form.Email}</p>
//            <p><strong>Phone Number:</strong> {form.PhoneNumber}</p>
//            <p><strong>Subject:</strong> {form.Subject}</p>
//            <p><strong>Message:</strong><br/>{form.Message}</p>";

//                try
//                {
//                    Console.WriteLine("Attempting to send email...");
//                    await _emailService.SendEmailAsync("admin@polokwanesurfacing.co.za", form.Subject, emailBody);
//                    Console.WriteLine("Email sent successfully.");
//                }
//                catch (Exception ex)
//                {
//                    Console.WriteLine($"Email sending failed: {ex.Message}");
//                    throw;
//                }

//                return Ok(new { success = true, message = "Message sent successfully!" });
//            }
//            catch (Exception ex)
//            {
//                Console.WriteLine($"[CONTACT ERROR] {ex.ToString()}");
//                return StatusCode(500, new { success = false, message = "Failed to send message. Please try again later." });
//            }
//        }


//    }
//}

using Microsoft.AspNetCore.Mvc;
using Polokwane_surf.Server.Models;
using Polokwane_surf.Server.Services;

namespace Polokwane_surf.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly EmailService _emailService;
        // private readonly SmsService _smsService; // REMOVE or COMMENT OUT

        public ContactController(EmailService emailService /*, SmsService smsService */)
        {
            _emailService = emailService;
            // _smsService = smsService;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SendContactForm([FromBody] ContactForm form)
        {
            try
            {
                Console.WriteLine($"Received ContactForm: Name={form.Name}, Email={form.Email}, Subject={form.Subject}, Phone={form.PhoneNumber}, Message={form.Message}");

                var emailBody = $@"
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> {form.Name}</p>
                <p><strong>Email:</strong> {form.Email}</p>
                <p><strong>Phone Number:</strong> {form.PhoneNumber}</p>
                <p><strong>Subject:</strong> {form.Subject}</p>
                <p><strong>Message:</strong><br/>{form.Message}</p>";

                try
                {
                    Console.WriteLine("Attempting to send email...");
                    await _emailService.SendEmailAsync("admin@polokwanesurfacing.co.za", form.Subject, emailBody);
                    Console.WriteLine("Email sent successfully.");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Email sending failed: {ex.Message}");
                    throw;
                }

                return Ok(new { success = true, message = "Message sent successfully!" });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[CONTACT ERROR] {ex}");
                return StatusCode(500, new { success = false, message = "Failed to send message. Please try again later." });
            }
        }
    }
}
