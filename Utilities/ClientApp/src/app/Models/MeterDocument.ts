import { Apartment } from "./Apartment";

export interface MeterDocument {
    id: number;
    body: Uint8Array;
    apartment: Apartment;
}