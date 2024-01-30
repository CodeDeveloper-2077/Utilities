using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Utilities.Models;

namespace DAL.Configurations
{
    public class MeterConfiguration : IEntityTypeConfiguration<Meter>
    {
        public void Configure(EntityTypeBuilder<Meter> builder)
        {
            builder.HasKey(m => m.MeterId);

            builder.Property(m => m.MeterName).HasMaxLength(50);
            builder.Property(m => m.MeterNumber).HasMaxLength(8);

            builder.HasOne(m => m.MeterLocation)
                   .WithOne(ml => ml.Meter)
                   .HasForeignKey<MeterLocation>(ml => ml.MeterId);
        }
    }
}
