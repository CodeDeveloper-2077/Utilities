import { Meter } from "./Meter";
import { MeterDocument } from "./MeterDocument";

export interface Apartment {
    id: number;
    relatedFamily: string;
    meterDocumentId: number;
    meterDocument: MeterDocument;
    meters: Array<Meter>;
}