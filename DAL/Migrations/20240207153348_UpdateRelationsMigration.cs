using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Utilities.Migrations
{
    /// <inheritdoc />
    public partial class UpdateRelationsMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Street_Apartments_ApartmentId",
                table: "Street");

            migrationBuilder.DropIndex(
                name: "IX_Street_ApartmentId",
                table: "Street");

            migrationBuilder.DropColumn(
                name: "ApartmentId",
                table: "Street");

            migrationBuilder.DropColumn(
                name: "MeterLocationId",
                table: "Meters");

            migrationBuilder.DropColumn(
                name: "MeterDocumentId",
                table: "Apartments");

            migrationBuilder.CreateIndex(
                name: "IX_Apartments_StreetId",
                table: "Apartments",
                column: "StreetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Apartments_Street_StreetId",
                table: "Apartments",
                column: "StreetId",
                principalTable: "Street",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Apartments_Street_StreetId",
                table: "Apartments");

            migrationBuilder.DropIndex(
                name: "IX_Apartments_StreetId",
                table: "Apartments");

            migrationBuilder.AddColumn<int>(
                name: "ApartmentId",
                table: "Street",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MeterLocationId",
                table: "Meters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MeterDocumentId",
                table: "Apartments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Street_ApartmentId",
                table: "Street",
                column: "ApartmentId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Street_Apartments_ApartmentId",
                table: "Street",
                column: "ApartmentId",
                principalTable: "Apartments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
