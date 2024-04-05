using System.ComponentModel.DataAnnotations;

namespace DAL.Dtos
{
    public class UserForRegistrationDto
    {
        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        public string? Password { get; set; }

        [Compare("Password", ErrorMessage = "The password and password confirmation do not match")]
        public string? PasswordConfirmation { get; set; }

        public string? ClientUri { get; set; }
    }
}
