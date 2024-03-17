import { Meter } from "./Meter";
import { MeterDocument } from "./MeterDocument";

export interface Apartment {
    id: number;
    relatedFamily: string;
    registeredCountPeople: number;
    apartmentNumber: string;
    houseNumber: string;
    buildingNumber: number;
    entranceNumber: number;
    receiptCode?: string;
    meterDocument: MeterDocument;
    meters: Array<Meter>;
}