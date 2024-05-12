import { ApartmentDto } from "./ApartmentDto";

export interface AddressDto {
    country: string;
    state: string;
    city: string;
    street: string;
    apartmentNumber: string;
    houseNumber: string;
    buildingNumber: number;
    entranceNumber: number;
    apartment: ApartmentDto;
}