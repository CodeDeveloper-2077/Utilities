using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Utilities.Models;

namespace DAL.Configurations
{
    public class MeterConfiguration : IEntityTypeConfiguration<Meter>
    {
        public void Configure(EntityTypeBuilder<Meter> builder)
        {
            builder.HasKey(m => m.Id);

            builder.Property(m => m.MeterName).HasMaxLength(50);
            builder.Property(m => m.MeterNumber).HasMaxLength(8);

            builder.HasOne(m => m.Apartment)
                   .WithMany(a => a.Meters)
                   .HasForeignKey(m => m.ApartmentId);

            builder.HasOne(m => m.MeterLocation)
                   .WithOne(ml => ml.Meter)
                   .HasForeignKey<Meter>(m => m.MeterLocationId);
        }
    }
}
