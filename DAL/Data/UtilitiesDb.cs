using DAL.Configurations;
using DAL.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Utilities.Models;

namespace Utilities.Data
{
    public class UtilitiesDb : IdentityDbContext<User>
    {
        public UtilitiesDb(DbContextOptions<UtilitiesDb> options)
            : base(options)
        {
            this.ChangeTracker.LazyLoadingEnabled = true;
        }

        public virtual DbSet<Apartment> Apartments { get; set; }

        public virtual DbSet<Meter> Meters { get; set; }

        public virtual DbSet<MeterLocation> MeterLocations { get; set; }

        public virtual DbSet<MeterDocument> MeterDocuments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseLazyLoadingProxies();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new MeterConfiguration());
            modelBuilder.ApplyConfiguration(new ApartmentConfiguration());
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
        }
    }
}
