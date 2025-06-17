using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Polokwane_surf.Server.Services
{
    public class EmailService
    {
        private readonly string fromEmail = "lethabo.learn1@gmail.com";
        private readonly string smtpHost = "smtp.gmail.com";
        private readonly int smtpPort = 587;
        private readonly string smtpUser = "lethabo.learn1@gmail.com";
        private readonly string smtpPass = "jwya eqph dalv drzn"; 

        private SmtpClient CreateSmtpClient()
        {
            return new SmtpClient(smtpHost, smtpPort)
            {
                Credentials = new NetworkCredential(smtpUser, smtpPass),
                EnableSsl = true
            };
        }

        public async Task SendEmailAsync(string toEmail, string subject, string body)
        {
            using var smtpClient = CreateSmtpClient();

            var message = new MailMessage(fromEmail, toEmail, subject, body)
            {
                IsBodyHtml = true
            };

            try
            {
                await smtpClient.SendMailAsync(message);
                Console.WriteLine("Email sent successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error sending email: {ex.Message}");
                throw;
            }
        }

        public async Task SendContactEmailAsync(string name, string email, string phoneNumber, string userMessage)
        {
            // Validate email format
            if (string.IsNullOrWhiteSpace(email) || !MailAddress.TryCreate(email, out _))
                throw new ArgumentException("Invalid email format.");

            var toCompany = "lethabo1.mokg@gmail.com";

            var subjectToCompany = "New Contact Form Submission – Polokwane Surfacing";
            var subjectToUser = "Thank You – We Received Your Message";

            var bodyToCompany = $@"
<html>
  <body style='font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;'>
      <h2 style='color: #2c3e50;'>New Contact Form Submission</h2>
      <table style='width: 100%; font-size: 16px; color: #333; border-spacing: 0 10px;'>
        <tr><td style='font-weight: bold;'>Name:</td><td>{WebUtility.HtmlEncode(name)}</td></tr>
        <tr><td style='font-weight: bold;'>Email:</td><td>{WebUtility.HtmlEncode(email)}</td></tr>
        <tr><td style='font-weight: bold;'>Mobile Number:</td><td>{WebUtility.HtmlEncode(phoneNumber)}</td></tr>
        <tr><td style='font-weight: bold; vertical-align: top;'>Message:</td><td>{WebUtility.HtmlEncode(userMessage).Replace("\n", "<br />")}</td></tr>
      </table>
      <p style='margin-top: 30px; font-size: 14px; color: #555;'>
        Regards,<br />
        <strong>Polokwane Surfacing Web System</strong><br />
        <a href='https://polokwanesurfacing.co.za' target='_blank' style='color: #27ae60;'>www.polokwanesurfacing.co.za</a>
      </p>
    </div>
  </body>
</html>";

            var bodyToUser = $@"
<html>
  <body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;'>
    <div style='max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
      <h2 style='color: #2c3e50;'>Thank You, {WebUtility.HtmlEncode(name)}</h2>
      <p style='font-size: 16px; color: #333;'>
        We have received your message and will get back to you shortly.
      </p>
      <p style='font-size: 16px; color: #333;'>
        <strong>Your Message:</strong><br />
        {WebUtility.HtmlEncode(userMessage).Replace("\n", "<br />")}
      </p>
      <p style='margin-top: 30px; font-size: 14px; color: #555;'>
        Kind regards,<br />
        <strong>Polokwane Surfacing Team</strong><br />
        <a href='https://polokwanesurfacing.co.za' target='_blank' style='color: #27ae60;'>www.polokwanesurfacing.co.za</a>
      </p>
    </div>
  </body>
</html>";

            using var smtpClient = CreateSmtpClient();

            var mailToCompany = new MailMessage(fromEmail, toCompany, subjectToCompany, bodyToCompany)
            {
                IsBodyHtml = true
            };

            var mailToUser = new MailMessage(fromEmail, email, subjectToUser, bodyToUser)
            {
                IsBodyHtml = true
            };

            try
            {
                await smtpClient.SendMailAsync(mailToCompany);
                await smtpClient.SendMailAsync(mailToUser);
                Console.WriteLine("Contact emails sent successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error sending contact emails: {ex.Message}");
                throw;
            }
        }
    }
}
