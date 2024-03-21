using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Utilities.Migrations
{
    /// <inheritdoc />
    public partial class IdentityTablesCreations_6250 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Password",
                table: "AspNetUsers",
                newName: "LastName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "AspNetUsers",
                newName: "Password");
        }
    }
}
