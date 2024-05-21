using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Utilities.Migrations
{
    /// <inheritdoc />
    public partial class UpdateMeterDocument : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MeterId",
                table: "MeterDocuments");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84a8e3a5-9e03-4e71-b801-4022a0ffb8d6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d232d4b3-5a3a-4947-8f39-9dc2b74b2e73");

            migrationBuilder.AddColumn<int>(
                name: "MeterId",
                table: "MeterDocuments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1e66d505-f8a5-4ba1-a642-6e2fa7faf8ff", "7b5245ba-d017-401e-8d13-1864c48af2dd", "Viewer", "VIEWER" },
                    { "f60111ba-2174-4f7f-a1b4-7474aa055224", "89380679-94e8-4f61-a752-1b69c032431a", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
