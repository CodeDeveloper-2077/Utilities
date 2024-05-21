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

            builder.HasOne(a => a.Address)
                   .WithOne(a => a.Apartment)
                   .HasForeignKey<Address>(a => a.ApartmentId);

            builder.HasMany(a => a.Meters)
                   .WithOne(m => m.Apartment)
                   .HasForeignKey(m => m.ApartmentId);
        }
    }
}
