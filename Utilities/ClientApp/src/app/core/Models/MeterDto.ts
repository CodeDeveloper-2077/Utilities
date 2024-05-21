export interface MeterDto {
    id: number;
    meterName: string;
    meterNumber: string;
    prevCheckDate: Date;
    nextCheckDate: Date;
    apartmentId: number;
    meterLocationId: number;
    meterDocumentId: number;
}