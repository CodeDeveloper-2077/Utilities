export interface Meter {
    id: number;
    meterName: string;
    meterNumber: string;
    prevCheckDate: Date;
    nextCheckDate: Date;
    apartmentId: number;
    meterLocationId: number;
}