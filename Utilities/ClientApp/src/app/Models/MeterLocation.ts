import { Meter } from "./Meter";

export interface MeterLocation {
    id: number;
    name: string;
    meterId: number;
    meter: Meter;
}