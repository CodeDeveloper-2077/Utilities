using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Utilities.Migrations
{
    /// <inheritdoc />
    public partial class UpdateModelsMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MeterDocuments_Apartments_ApartmentId",
                table: "MeterDocuments");

            migrationBuilder.DropForeignKey(
                name: "FK_MeterLocations_Meters_MeterId",
                table: "MeterLocations");

            migrationBuilder.DropIndex(
                name: "IX_MeterLocations_MeterId",
                table: "MeterLocations");

            migrationBuilder.DropIndex(
                name: "IX_MeterDocuments_ApartmentId",
                table: "MeterDocuments");

            migrationBuilder.DropColumn(
                name: "MeterId",
                table: "MeterLocations");

            migrationBuilder.RenameColumn(
                name: "ApartmentId",
                table: "MeterDocuments",
                newName: "MeterId");

            migrationBuilder.AddColumn<int>(
                name: "MeterDocumentId",
                table: "Meters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MeterLocationId",
                table: "Meters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "RelatedFamily",
                table: "Apartments",
                type: "nvarchar(250)",
                maxLength: 250,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(250)",
                oldMaxLength: 250);

            migrationBuilder.CreateIndex(
                name: "IX_Meters_MeterDocumentId",
                table: "Meters",
                column: "MeterDocumentId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Meters_MeterLocationId",
                table: "Meters",
                column: "MeterLocationId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_ApartmentId",
                table: "Address",
                column: "ApartmentId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Meters_MeterDocuments_MeterDocumentId",
                table: "Meters",
                column: "MeterDocumentId",
                principalTable: "MeterDocuments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Meters_MeterLocations_MeterLocationId",
                table: "Meters",
                column: "MeterLocationId",
                principalTable: "MeterLocations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Meters_MeterDocuments_MeterDocumentId",
                table: "Meters");

            migrationBuilder.DropForeignKey(
                name: "FK_Meters_MeterLocations_MeterLocationId",
                table: "Meters");

            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropIndex(
                name: "IX_Meters_MeterDocumentId",
                table: "Meters");

            migrationBuilder.DropIndex(
                name: "IX_Meters_MeterLocationId",
                table: "Meters");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1e66d505-f8a5-4ba1-a642-6e2fa7faf8ff");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f60111ba-2174-4f7f-a1b4-7474aa055224");

            migrationBuilder.DropColumn(
                name: "MeterDocumentId",
                table: "Meters");

            migrationBuilder.DropColumn(
                name: "MeterLocationId",
                table: "Meters");

            migrationBuilder.RenameColumn(
                name: "MeterId",
                table: "MeterDocuments",
                newName: "ApartmentId");

            migrationBuilder.RenameColumn(
                name: "AddressId",
                table: "Apartments",
                newName: "StreetId");

            migrationBuilder.AddColumn<int>(
                name: "MeterId",
                table: "MeterLocations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "RelatedFamily",
                table: "Apartments",
                type: "nvarchar(250)",
                maxLength: 250,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(250)",
                oldMaxLength: 250,
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApartmentNumber",
                table: "Apartments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "BuildingNumber",
                table: "Apartments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "EntranceNumber",
                table: "Apartments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "HouseNumber",
                table: "Apartments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "Country",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Country", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Area",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CountryId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Area", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Area_Country_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Country",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "City",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AreaId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_City", x => x.Id);
                    table.ForeignKey(
                        name: "FK_City_Area_AreaId",
                        column: x => x.AreaId,
                        principalTable: "Area",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Street",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CityId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Street", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Street_City_CityId",
                        column: x => x.CityId,
                        principalTable: "City",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "09738439-dd3f-446a-a7b2-c315a5778142", "4d859cc3-ce31-47fb-bbca-09f19c3cb1d3", "Viewer", "VIEWER" },
                    { "69165878-a9cf-42d4-900c-0937cd58c1c3", "9f173f84-e120-4640-bda9-c55e9dce42da", "Administrator", "ADMINISTRATOR" }
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_Apartments_StreetId",
                table: "Apartments",
                column: "StreetId");

            migrationBuilder.CreateIndex(
                name: "IX_Area_CountryId",
                table: "Area",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_City_AreaId",
                table: "City",
                column: "AreaId");

            migrationBuilder.CreateIndex(
                name: "IX_Street_CityId",
                table: "Street",
                column: "CityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Apartments_Street_StreetId",
                table: "Apartments",
                column: "StreetId",
                principalTable: "Street",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MeterDocuments_Apartments_ApartmentId",
                table: "MeterDocuments",
                column: "ApartmentId",
                principalTable: "Apartments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MeterLocations_Meters_MeterId",
                table: "MeterLocations",
                column: "MeterId",
                principalTable: "Meters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
