import { Apartment } from './Apartment';

export interface MeterDocument {
    id: number;
    apartmentId: number;
    apartment: Apartment;
    body: string;
}