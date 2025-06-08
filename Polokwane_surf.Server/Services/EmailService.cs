//using System.Net.Mail;
//using System.Net;
//using System.Threading.Tasks;

//namespace Polokwane_surf.Server.Services
//{
//    public class EmailService
//    {
//        private readonly string _host;
//        private readonly int _port;
//        private readonly string _username;
//        private readonly string _password;
//        private readonly string _from;

//        public EmailService(IConfiguration config)
//        {
//            var smtp = config.GetRequiredSection("Smtp");
//            _host = smtp.GetValue<string>("Host") ?? throw new ArgumentNullException("Smtp:Host");
//            _port = smtp.GetValue<int?>("Port") ?? throw new ArgumentNullException("Smtp:Port");
//            _username = smtp.GetValue<string>("Username") ?? throw new ArgumentNullException("Smtp:Username");
//            _password = smtp.GetValue<string>("Password") ?? throw new ArgumentNullException("Smtp:Password");
//            _from = smtp.GetValue<string>("From") ?? throw new ArgumentNullException("Smtp:From");
//        }

 
//        public async Task SendEmailAsync(string to, string subject, string body)
//        {
//            try
//            {
//                var smtpClient = new SmtpClient(_host)
//                {
//                    Port = _port,
//                    Credentials = new NetworkCredential(_username, _password),
//                    EnableSsl = true,
//                };

//                var mailMessage = new MailMessage
//                {
//                    From = new MailAddress(_from),
//                    Subject = subject,
//                    Body = body,
//                    IsBodyHtml = true,
//                };
//                mailMessage.To.Add(to);

//                Console.WriteLine($"[EMAIL INFO] Sending email to: {to}");
//                await smtpClient.SendMailAsync(mailMessage);
//                Console.WriteLine("[EMAIL INFO] Email sent successfully.");
//            }
//            catch (Exception ex)
//            {
//                Console.WriteLine($"[EMAIL ERROR] {ex}");
//                throw;
//            }
//        }

//    }
//}

using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Configuration;

namespace Polokwane_surf.Server.Services
{
    public class EmailService
    {
        private readonly string _host;
        private readonly int _port;
        private readonly string _username;
        private readonly string _password;
        private readonly string _from;

        public EmailService(IConfiguration config)
        {
            var smtp = config.GetRequiredSection("Smtp");
            _host = smtp["Host"];
            _port = smtp.GetValue<int>("Port");
            _username = smtp["Username"];
            _password = smtp["Password"];
            _from = smtp["From"];
        }

        public async Task SendEmailAsync(string to, string subject, string body)
        {
            try
            {
                using var smtpClient = new SmtpClient(_host)
                {
                    Port = _port,
                    Credentials = new NetworkCredential(_username, _password),
                    EnableSsl = true
                };

                var message = new MailMessage
                {
                    From = new MailAddress(_from),
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = true
                };

                message.To.Add(to);

                await smtpClient.SendMailAsync(message);
                Console.WriteLine("Email sent successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[EMAIL ERROR] {ex.Message}");
                throw;
            }
        }
    }
}
