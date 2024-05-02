export interface UserForRegistrationDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    clientUri: string;
}