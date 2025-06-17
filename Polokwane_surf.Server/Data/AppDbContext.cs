using Microsoft.EntityFrameworkCore;
using Polokwane_surf.Server.Models;


namespace Polokwane_surf.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<ClientSurveyForm> Surveys { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_unicode_ci");
            modelBuilder.HasCharSet("utf8mb4");

            base.OnModelCreating(modelBuilder);
        }
    }

}
