export interface Meter {
    meterName: string;
    meterNumber: string;
    prevCheckDate: Date;
    nextCheckDate: Date;
    apartmentId: number;
    meterLocationId: number;
}