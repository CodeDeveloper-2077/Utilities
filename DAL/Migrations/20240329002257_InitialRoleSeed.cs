using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Utilities.Migrations
{
    /// <inheritdoc />
    public partial class InitialRoleSeed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "AspNetUsers",
                newName: "Password");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "09738439-dd3f-446a-a7b2-c315a5778142", "4d859cc3-ce31-47fb-bbca-09f19c3cb1d3", "Viewer", "VIEWER" },
                    { "69165878-a9cf-42d4-900c-0937cd58c1c3", "9f173f84-e120-4640-bda9-c55e9dce42da", "Administrator", "ADMINISTRATOR" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "09738439-dd3f-446a-a7b2-c315a5778142");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "69165878-a9cf-42d4-900c-0937cd58c1c3");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "AspNetUsers",
                newName: "LastName");
        }
    }
}
