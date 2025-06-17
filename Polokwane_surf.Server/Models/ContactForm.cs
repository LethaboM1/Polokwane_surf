using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Polokwane_surf.Server.Models
{
    public class ContactForm
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string Subject { get; set; }

        [Required]
        public string Message { get; set; }
    }


}
