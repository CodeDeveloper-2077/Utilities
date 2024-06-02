import { ApartmentDto } from "./ApartmentDto";
import { StreetDto } from "./StreetDto";

export interface AddressDto {
    street: StreetDto;
    apartmentNumber: string;
    houseNumber: string;
    buildingNumber: number;
    entranceNumber: number;
}