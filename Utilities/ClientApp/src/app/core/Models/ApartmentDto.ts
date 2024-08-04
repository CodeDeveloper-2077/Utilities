import { AddressDto } from "./AddressDto";
import { MeterDto } from "./MeterDto";

export interface ApartmentDto {
    id?: number;
    relatedFamily: string;
    registeredCountPeople: number;
    receiptCode: string;
    address: AddressDto;
    meters?: MeterDto[];
}