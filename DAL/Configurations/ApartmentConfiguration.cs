using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Utilities.Models;

namespace DAL.Configurations
{
    public class ApartmentConfiguration : IEntityTypeConfiguration<Apartment>
    {
        public void Configure(EntityTypeBuilder<Apartment> builder)
        {
            builder.HasKey(a => a.ApartmentId);

            builder.Property(a => a.RelatedFamily)
                   .HasMaxLength(250);

            builder.HasOne(a => a.MeterDocument)
                   .WithOne(md => md.Apartment)
                   .HasForeignKey<MeterDocument>(md => md.ApartmentId);

            builder.HasMany(a => a.Meters)
                   .WithOne(m => m.Apartment)
                   .HasForeignKey(m => m.ApartmentId);
        }
    }
}
