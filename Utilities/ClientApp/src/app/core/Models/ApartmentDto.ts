import { AddressDto } from "./AddressDto";
import { MeterDocumentDto } from "./MeterDocumentDto";
import { MeterDto } from "./MeterDto";

export interface ApartmentDto {
    id: number;
    relatedFamily: string;
    registeredCountPeople: number;
    receiptCode: string;
    address: AddressDto;
    meterDocuments: MeterDocumentDto[];
    meters: MeterDto[];
}