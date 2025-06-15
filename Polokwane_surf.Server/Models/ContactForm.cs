using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Polokwane_surf.Server.Models
{
    public class ContactForm
    {
        [JsonPropertyName("name")]
        public required string Name { get; set; }

        [JsonPropertyName("phoneNumber")]
        public required string PhoneNumber { get; set; }

        [EmailAddress]
        [JsonPropertyName("email")]
        public required string Email { get; set; }

        [JsonPropertyName("subject")]
        public required string Subject { get; set; }

        [JsonPropertyName("message")]
        public required string Message { get; set; }
    }

}
