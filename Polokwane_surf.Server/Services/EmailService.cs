using System;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Polokwane_surf.Server.Services
{
    public class EmailService
    {

        public void ValidateContactForm(string name, string email, string phoneNumber, string userMessage)
        {
            if (string.IsNullOrWhiteSpace(name) ||
                string.IsNullOrWhiteSpace(email) ||
                string.IsNullOrWhiteSpace(phoneNumber) ||
                string.IsNullOrWhiteSpace(userMessage))
            {
                throw new ArgumentException("All fields are required.");
            }

            if (!MailAddress.TryCreate(email, out _))
            {
                throw new ArgumentException("Invalid email format.");
            }
        }
    }
}
