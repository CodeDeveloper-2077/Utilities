import { MeterDocumentDto } from "./MeterDocumentDto";
import { MeterDto } from "./MeterDto";
import { StreetDto } from "./StreetDto";

export interface ApartmentDto {
    relatedFamily: string;
    registeredCountPeople: number;
    apartmentNumber: number;
    houseNumber: number;
    buildingNumber: number;
    entranceNumber: number;
    receiptCode: string;
    street: StreetDto;
    streetName: string;
    meterDocuments: MeterDocumentDto[];
    meters: MeterDto[];
}