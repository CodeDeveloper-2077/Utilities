using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Dtos
{
    public class MeterDocumentDto
    {
        public byte[]? Body { get; set; }

        public int ApartmentId { get; set; }
    }
}
