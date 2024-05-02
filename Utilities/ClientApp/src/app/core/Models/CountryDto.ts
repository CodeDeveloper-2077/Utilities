import { AreaDto } from "./AreaDto";
import { LocationDto } from "./LocationDto";

export interface CountryDto extends LocationDto {
    areas: AreaDto[];
}