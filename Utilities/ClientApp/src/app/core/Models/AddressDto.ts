import { ApartmentDto } from "./ApartmentDto";
import { StreetDto } from "./StreetDto";

export interface AddressDto {
    id?: number;
    street: StreetDto;
    apartment?: ApartmentDto;
    apartmentNumber: string;
    houseNumber: string;
    buildingNumber: number;
    entranceNumber: number;
}