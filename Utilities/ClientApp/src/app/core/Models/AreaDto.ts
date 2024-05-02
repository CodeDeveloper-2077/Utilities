import { CityDto } from "./CityDto";
import { LocationDto } from "./LocationDto";

export interface AreaDto extends LocationDto {
    cities: CityDto[];
}