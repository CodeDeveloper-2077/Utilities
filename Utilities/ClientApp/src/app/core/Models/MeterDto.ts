import { MeterLocationDto } from "./MeterLocationDto";

export interface MeterDto {
    id: number;
    meterName: string;
    meterNumber: string;
    prevCheckNumber: Date;
    nextCheckNumber: Date;
    meterLocation: MeterLocationDto;
}