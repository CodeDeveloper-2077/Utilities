import { Meter } from "./Meter";
import { MeterDocument } from "./MeterDocument";
import { Street } from "./Street";

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
    street: Street;
    meters: Array<Meter>;
}