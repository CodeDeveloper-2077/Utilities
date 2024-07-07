import { ApartmentDto } from "./ApartmentDto";
import { MeterLocationDto } from "./MeterLocationDto";

export interface MeterDto {
    id: number;
    meterName: string;
    meterNumber: string;
    docPath: string;
    prevCheckDate: Date;
    nextCheckDate: Date;
    apartment: ApartmentDto;
    meterLocation: MeterLocationDto;
}