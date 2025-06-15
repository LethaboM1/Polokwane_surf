//using Twilio;
//using Twilio.Rest.Api.V2010.Account;
//using Twilio.Types;
//using Microsoft.Extensions.Configuration;

//namespace Polokwane_surf.Server.Services
//{
//    public class SmsService
//    {
//        private readonly string _fromPhone;

//        public SmsService(IConfiguration config)
//        {
//            var twilio = config.GetRequiredSection("Twilio");

//            var accountSid = twilio.GetValue<string>("AccountSid")
//                             ?? throw new ArgumentNullException("Twilio:AccountSid");
//            var authToken = twilio.GetValue<string>("AuthToken")
//                            ?? throw new ArgumentNullException("Twilio:AuthToken");
//            _fromPhone = twilio.GetValue<string>("FromPhone")
//                         ?? throw new ArgumentNullException("Twilio:FromPhone");

//            TwilioClient.Init(accountSid, authToken);
//        }

//        public async Task SendSmsAsync(string toPhoneNumber, string message)
//        {
//            try
//            {
//                await MessageResource.CreateAsync(
//                    body: message,
//                    from: new PhoneNumber(_fromPhone),
//                    to: new PhoneNumber(toPhoneNumber)
//                );
//            }
//            catch (Exception ex)
//            {
//                Console.WriteLine($"[SMS ERROR] {ex.Message}");
//                throw;
//            }
//        }
//    }
//}
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;
using Microsoft.Extensions.Configuration;

namespace Polokwane_surf.Server.Services
{
    public class SmsService
    {
        private readonly string _accountSid;
        private readonly string _authToken;
        private readonly string _fromPhone;

        public SmsService(IConfiguration configuration)
        {
            _accountSid = configuration["Twilio:AccountSid"];
            _authToken = configuration["Twilio:AuthToken"];
            _fromPhone = configuration["Twilio:FromPhone"];

            TwilioClient.Init(_accountSid, _authToken);
        }

        public async Task SendSmsAsync(string toPhoneNumber, string message)
        {
            try
            {
                var formattedPhone = FormatSouthAfricanNumber(toPhoneNumber);

                await MessageResource.CreateAsync(
                    body: message,
                    from: new PhoneNumber(_fromPhone),
                    to: new PhoneNumber(formattedPhone)
                );
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[SMS ERROR] {ex.Message}");
                throw;
            }
        }

        /// <summary>
        /// Formats SA numbers like 0601234567 to +27601234567
        /// </summary>
        private string FormatSouthAfricanNumber(string raw)
        {
            raw = raw.Trim().Replace(" ", "").Replace("-", "");

            if (raw.StartsWith("0") && raw.Length == 10)
            {
                return "+27" + raw.Substring(1);
            }

            if (raw.StartsWith("+27") && raw.Length == 12)
            {
                return raw;
            }

            throw new ArgumentException("Invalid South African mobile number format. Must be 10 digits starting with 0.");
        }
    }
}
