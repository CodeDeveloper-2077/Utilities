using DAL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Utilities.Models;

namespace DAL.Configurations
{
    public class ApartmentConfiguration : IEntityTypeConfiguration<Apartment>
    {
        public void Configure(EntityTypeBuilder<Apartment> builder)
        {
            builder.HasKey(a => a.Id);

            builder.Property(a => a.RelatedFamily)
                   .HasMaxLength(250);

            builder.HasOne(a => a.MeterDocument)
                   .WithOne(md => md.Apartment)
                   .HasForeignKey<MeterDocument>(md => md.ApartmentId);

            builder.HasOne(a => a.Location)
                   .WithOne(l => l.Apartment)
                   .HasForeignKey<Location>(l => l.ApartmentId);

            builder.HasMany(a => a.Meters)
                   .WithOne(m => m.Apartment)
                   .HasForeignKey(m => m.ApartmentId);
        }
    }
}
