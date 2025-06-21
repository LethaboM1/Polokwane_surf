using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class ClientSurveyForm
{
    public int Id { get; set; }

    [Required]
    public string Name { get; set; }

    [Required, EmailAddress]
    public string Email { get; set; }

    [Required]
    public string ServiceUsed { get; set; }

    [Required]
    public string Rating { get; set; }

    [Required]
    public string Feedback { get; set; }

    public DateTime SubmittedAt { get; set; }
}
