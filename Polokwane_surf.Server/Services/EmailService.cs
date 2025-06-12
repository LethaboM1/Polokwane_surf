using System.Net;
using System.Net.Mail;

public class EmailService
{
    //public void SendEmail()
    //{
    //    var client = new SmtpClient("smtp.gmail.com", 587)
    //    {
    //        Credentials = new NetworkCredential("lethabo.learn1@gmail.com", "jwya eqph dalv drzn"),
    //        EnableSsl = true
    //    };

    //    var from = new MailAddress("lethabo.learn1@gmail.com", "Lethabo Mokgokoloshi");
    //    var to = new MailAddress("lethabo.learn1@gmail.com");

    //    var message = new MailMessage(from, to)
    //    {
    //        Subject = "Hello from ASP.NET Core",
    //        Body = "This is a test email from your app using Gmail SMTP.",
    //        IsBodyHtml = false
    //    };

    //    client.Send(message);
    //    Console.WriteLine("Email sent successfully.");
    //}

    public async Task SendEmailAsync(string toEmail, string subject, string body)
    {
        var fromEmail = "lethabo.learn1@gmail.com";
        var smtpClient = new SmtpClient("smtp.gmail.com", 587)
        {
            Credentials = new NetworkCredential("lethabo.learn1@gmail.com", "jwya eqph dalv drzn"),
            EnableSsl = true
        };

        var message = new MailMessage(fromEmail, toEmail, subject, body)
        {
            IsBodyHtml = true
        };

        await smtpClient.SendMailAsync(message);
        Console.WriteLine("Email sent successfully.");
    }


    public async Task SendContactEmailAsync(string name, string email, string mobileNumber, string message)
    {
        // ✅ Validate email address format
        if (string.IsNullOrWhiteSpace(email) || !MailAddress.TryCreate(email, out _))
            throw new ArgumentException("Invalid email format.");

        var fromEmail = "lethabo.learn1@gmail.com";
        var toCompany = "lethabo.learn1@gmail.com";

        var subjectToCompany = "New Contact Form Submission – Polokwane Surfacing";
        var subjectToUser = "Thank You – We Received Your Message";

        var bodyToCompany = $@"
    <html>
      <body style='font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;'>
        <div style='max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
          <div style='text-align: center;'>
            <img src='https://polokwanesurfacing.co.za/assets/images/logo.png' alt='Polokwane Surfacing Logo' style='width: 180px; margin-bottom: 20px;' />
          </div>
          <h2 style='color: #2c3e50;'>New Contact Form Submission</h2>
          <table style='width: 100%; font-size: 16px; color: #333; border-spacing: 0 10px;'>
            <tr><td style='font-weight: bold;'>Name:</td><td>{WebUtility.HtmlEncode(name)}</td></tr>
            <tr><td style='font-weight: bold;'>Email:</td><td>{WebUtility.HtmlEncode(email)}</td></tr>
            <tr><td style='font-weight: bold;'>Mobile Number:</td><td>{WebUtility.HtmlEncode(mobileNumber)}</td></tr>
            <tr><td style='font-weight: bold; vertical-align: top;'>Message:</td><td>{WebUtility.HtmlEncode(message).Replace("\n", "<br />")}</td></tr>
          </table>
          <p style='margin-top: 30px; font-size: 14px; color: #555;'>
            Regards,<br />
            <strong>Polokwane Surfacing Web System</strong><br />
            <a href='https://polokwanesurfacing.co.za' target='_blank' style='color: #27ae60;'>www.polokwanesurfacing.co.za</a>
          </p>
        </div>
      </body>
    </html>";
        // Keep your HTML content

        var bodyToUser = $@"
    <html>
      <body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;'>
        <div style='max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
          <div style='text-align: center;'>
            <img src='https://polokwanesurfacing.co.za/assets/images/logo.png' alt='Polokwane Surfacing Logo' style='width: 160px; margin-bottom: 20px;' />
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
        // Keep your HTML content

        var smtpClient = new SmtpClient("sandbox.smtp.mailtrap.io", 2525)
        {
           Credentials = new NetworkCredential("279cd3d2f25081", "2354b7b013a282"),
            EnableSsl = true
        };

        // ✅ Safe construction
        var mailToCompany = new MailMessage(fromEmail, toCompany, subjectToCompany, bodyToCompany)
        {
            IsBodyHtml = true
        };

        var mailToUser = new MailMessage(fromEmail, email, subjectToUser, bodyToUser)
        {
            IsBodyHtml = true
        };

        await smtpClient.SendMailAsync(mailToCompany);
        await smtpClient.SendMailAsync(mailToUser);
    }

}
