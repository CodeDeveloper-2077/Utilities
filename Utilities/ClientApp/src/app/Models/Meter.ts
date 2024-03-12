import { Apartment } from "./Apartment";
import { MeterLocation } from "./MeterLocation";

export interface Meter {
    id: number;
    meterName: string;
    meterNumber: string;
    prevCheckDate: Date;
    nextCheckDate: Date;
    apartment: Apartment;
    meterLocation: MeterLocation;
}