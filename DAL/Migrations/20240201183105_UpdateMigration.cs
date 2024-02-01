using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Utilities.Migrations
{
    /// <inheritdoc />
    public partial class UpdateMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MeterId",
                table: "Meters",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "MeterLocationId",
                table: "MeterLocations",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "MeterDocumentId",
                table: "MeterDocuments",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ApartmentId",
                table: "Apartments",
                newName: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Meters",
                newName: "MeterId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "MeterLocations",
                newName: "MeterLocationId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "MeterDocuments",
                newName: "MeterDocumentId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Apartments",
                newName: "ApartmentId");
        }
    }
}
