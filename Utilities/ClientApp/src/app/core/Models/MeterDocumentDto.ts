import { MeterDto } from "./MeterDto";

export interface MeterDocumentDto {
    id: number;
    body: Uint8Array;
    meter: MeterDto;
}