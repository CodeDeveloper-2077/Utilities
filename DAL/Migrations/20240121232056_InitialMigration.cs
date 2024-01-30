using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Utilities.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Apartments",
                columns: table => new
                {
                    ApartmentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RelatedFamily = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Apartments", x => x.ApartmentId);
                });

            migrationBuilder.CreateTable(
                name: "MeterLocations",
                columns: table => new
                {
                    MeterLocationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeterLocations", x => x.MeterLocationId);
                });

            migrationBuilder.CreateTable(
                name: "MeterDocuments",
                columns: table => new
                {
                    MeterDocumentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApartmentId = table.Column<int>(type: "int", nullable: false),
                    Body = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeterDocuments", x => x.MeterDocumentId);
                    table.ForeignKey(
                        name: "FK_MeterDocuments_Apartments_ApartmentId",
                        column: x => x.ApartmentId,
                        principalTable: "Apartments",
                        principalColumn: "ApartmentId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Meters",
                columns: table => new
                {
                    MeterId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MeterName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MeterNumber = table.Column<long>(type: "bigint", nullable: false),
                    PrevCheckDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NextCheckDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MeterLocationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Meters", x => x.MeterId);
                    table.ForeignKey(
                        name: "FK_Meters_MeterLocations_MeterLocationId",
                        column: x => x.MeterLocationId,
                        principalTable: "MeterLocations",
                        principalColumn: "MeterLocationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MeterDocuments_ApartmentId",
                table: "MeterDocuments",
                column: "ApartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Meters_MeterLocationId",
                table: "Meters",
                column: "MeterLocationId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MeterDocuments");

            migrationBuilder.DropTable(
                name: "Meters");

            migrationBuilder.DropTable(
                name: "Apartments");

            migrationBuilder.DropTable(
                name: "MeterLocations");
        }
    }
}
