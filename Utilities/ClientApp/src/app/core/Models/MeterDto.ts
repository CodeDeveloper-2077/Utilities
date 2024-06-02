export interface MeterDto {
    id: number;
    meterName: string;
    meterNumber: string;
    docPath: string;
    prevCheckDate: Date;
    nextCheckDate: Date;
    apartmentId: number;
    meterLocationId: number;
    meterDocumentId: number;
}