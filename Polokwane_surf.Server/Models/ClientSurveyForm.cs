using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class ClientSurveyForm
{
    public int Id { get; set; }

    [Required]
    [Column(TypeName = "varchar(100)")]
    public string Name { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    [Column(TypeName = "varchar(150)")]
    public string Email { get; set; } = string.Empty;

    [Required]
    [Column(TypeName = "varchar(150)")]
    public string ServiceUsed { get; set; } = string.Empty;

    [Required]
    [Column(TypeName = "varchar(5)")]
    public string Rating { get; set; } = string.Empty;

    [Required]
    [Column(TypeName = "text")]
    public string Feedback { get; set; } = string.Empty;

    public DateTime SubmittedAt { get; set; }
}
