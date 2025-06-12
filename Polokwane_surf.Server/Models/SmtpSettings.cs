namespace Polokwane_surf.Server.Models
{
    public class SmtpSettings
    {
        public required string Host { get; set; }
        public required string Port { get; set; }
        public required string Username { get; set; }
        public required string Password { get; set; }
        public required string From { get; set; }
    }
}