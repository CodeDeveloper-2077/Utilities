using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Utilities.Migrations
{
    /// <inheritdoc />
    public partial class ConfigMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Meters_MeterLocations_MeterLocationId",
                table: "Meters");

            migrationBuilder.DropIndex(
                name: "IX_Meters_MeterLocationId",
                table: "Meters");

            migrationBuilder.DropIndex(
                name: "IX_MeterDocuments_ApartmentId",
                table: "MeterDocuments");

            migrationBuilder.AlterColumn<string>(
                name: "MeterNumber",
                table: "Meters",
                type: "nvarchar(8)",
                maxLength: 8,
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AlterColumn<string>(
                name: "MeterName",
                table: "Meters",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ApartmentId",
                table: "Meters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MeterId",
                table: "MeterLocations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "Body",
                table: "MeterDocuments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "RelatedFamily",
                table: "Apartments",
                type: "nvarchar(250)",
                maxLength: 250,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MeterDocumentId",
                table: "Apartments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Meters_ApartmentId",
                table: "Meters",
                column: "ApartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_MeterLocations_MeterId",
                table: "MeterLocations",
                column: "MeterId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MeterDocuments_ApartmentId",
                table: "MeterDocuments",
                column: "ApartmentId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_MeterLocations_Meters_MeterId",
                table: "MeterLocations",
                column: "MeterId",
                principalTable: "Meters",
                principalColumn: "MeterId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Meters_Apartments_ApartmentId",
                table: "Meters",
                column: "ApartmentId",
                principalTable: "Apartments",
                principalColumn: "ApartmentId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MeterLocations_Meters_MeterId",
                table: "MeterLocations");

            migrationBuilder.DropForeignKey(
                name: "FK_Meters_Apartments_ApartmentId",
                table: "Meters");

            migrationBuilder.DropIndex(
                name: "IX_Meters_ApartmentId",
                table: "Meters");

            migrationBuilder.DropIndex(
                name: "IX_MeterLocations_MeterId",
                table: "MeterLocations");

            migrationBuilder.DropIndex(
                name: "IX_MeterDocuments_ApartmentId",
                table: "MeterDocuments");

            migrationBuilder.DropColumn(
                name: "ApartmentId",
                table: "Meters");

            migrationBuilder.DropColumn(
                name: "MeterId",
                table: "MeterLocations");

            migrationBuilder.DropColumn(
                name: "MeterDocumentId",
                table: "Apartments");

            migrationBuilder.AlterColumn<long>(
                name: "MeterNumber",
                table: "Meters",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(string),
                oldType: "nvarchar(8)",
                oldMaxLength: 8,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "MeterName",
                table: "Meters",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldMaxLength: 50,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Body",
                table: "MeterDocuments",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "RelatedFamily",
                table: "Apartments",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(250)",
                oldMaxLength: 250,
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Meters_MeterLocationId",
                table: "Meters",
                column: "MeterLocationId");

            migrationBuilder.CreateIndex(
                name: "IX_MeterDocuments_ApartmentId",
                table: "MeterDocuments",
                column: "ApartmentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Meters_MeterLocations_MeterLocationId",
                table: "Meters",
                column: "MeterLocationId",
                principalTable: "MeterLocations",
                principalColumn: "MeterLocationId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
