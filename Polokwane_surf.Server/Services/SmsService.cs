using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;
using Microsoft.Extensions.Configuration;

namespace Polokwane_surf.Server.Services
{
    public class SmsService
    {
        private readonly string _fromPhone;

        public SmsService(IConfiguration config)
        {
            var twilio = config.GetRequiredSection("Twilio");

            var accountSid = twilio.GetValue<string>("AccountSid") ?? throw new ArgumentNullException("Twilio:AccountSid");
            var authToken = twilio.GetValue<string>("AuthToken") ?? throw new ArgumentNullException("Twilio:AuthToken");
            _fromPhone = twilio.GetValue<string>("FromPhone") ?? throw new ArgumentNullException("Twilio:FromPhone");

            TwilioClient.Init(accountSid, authToken);
        }

        public void SendSms(string toPhoneNumber, string message)
        {
            try
            {
                MessageResource.Create(
                    body: message,
                    from: new PhoneNumber(_fromPhone),
                    to: new PhoneNumber(toPhoneNumber)
                );
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[SMS ERROR] {ex.Message}");
                throw;
            }
        }

    }
}
