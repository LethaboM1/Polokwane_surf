using Microsoft.AspNetCore.Mvc;
using Polokwane_surf.Server.Models;
using Polokwane_surf.Server.Data;
using System;
using System.Threading.Tasks;

namespace Polokwane_surf.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientSurveyController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientSurveyController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitClientSurvey([FromBody] ClientSurveyForm model)
        {
            if (model == null)
                return BadRequest("Model is null. Possibly invalid JSON structure.");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                model.SubmittedAt = DateTime.UtcNow;

                _context.Surveys.Add(model);
                await _context.SaveChangesAsync(); 

                return Ok(new { message = "Survey submitted successfully." }); // ✅ Will trigger EmailJS on frontend
            }
            catch (Exception ex)
            {
                Console.WriteLine("🔥 DB Save Failed: " + ex.ToString());
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
    }
}
