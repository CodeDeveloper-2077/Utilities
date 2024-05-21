using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Dtos
{
    public class MeterDocumentDto
    {
        public int Id { get; set; }

        public byte[]? Body { get; set; }

        public MeterDto? Meter { get; set; }
    }
}
