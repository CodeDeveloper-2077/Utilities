using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DAL.Migrations
{
    /// <inheritdoc />
    public partial class RemoveAddressApartmentMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Addresses_Apartments_ApartmentId",
                table: "Addresses");

            migrationBuilder.DropIndex(
                name: "IX_Addresses_ApartmentId",
                table: "Addresses");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "152b6f37-d159-483d-8cae-53aa0453ed64");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2152a1de-69aa-4260-bc5d-97adeb772cfd");

            migrationBuilder.DropColumn(
                name: "ApartmentId",
                table: "Addresses");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0350a923-5cf6-4bd7-a009-a3dc9abf5913", "f57c5ec4-0cf6-40f6-b0af-fb4816fc3e25", "Administrator", "ADMINISTRATOR" },
                    { "b52ae84c-ad50-463a-a005-0f583b6cdb13", "7e59e1ee-b197-4576-be15-d1d1b540506b", "Viewer", "VIEWER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Apartments_AddressId",
                table: "Apartments",
                column: "AddressId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Apartments_Addresses_AddressId",
                table: "Apartments",
                column: "AddressId",
                principalTable: "Addresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Apartments_Addresses_AddressId",
                table: "Apartments");

            migrationBuilder.DropIndex(
                name: "IX_Apartments_AddressId",
                table: "Apartments");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0350a923-5cf6-4bd7-a009-a3dc9abf5913");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b52ae84c-ad50-463a-a005-0f583b6cdb13");

            migrationBuilder.AddColumn<int>(
                name: "ApartmentId",
                table: "Addresses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "152b6f37-d159-483d-8cae-53aa0453ed64", "7ba2ecc2-2586-44c8-b79a-0d448405c12f", "Viewer", "VIEWER" },
                    { "2152a1de-69aa-4260-bc5d-97adeb772cfd", "78693ae4-9964-4b78-8e88-453b9f4ef73c", "Administrator", "ADMINISTRATOR" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_ApartmentId",
                table: "Addresses",
                column: "ApartmentId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Addresses_Apartments_ApartmentId",
                table: "Addresses",
                column: "ApartmentId",
                principalTable: "Apartments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
