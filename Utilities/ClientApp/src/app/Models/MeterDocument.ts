import { Apartment } from './Apartment';

export interface MeterDocument {
    body: Uint8Array;
    apartmentId: number;
}