import { LocationDto } from "./LocationDto";
import { StreetDto } from "./StreetDto";

export interface CityDto extends LocationDto {
    streets: StreetDto[];
}