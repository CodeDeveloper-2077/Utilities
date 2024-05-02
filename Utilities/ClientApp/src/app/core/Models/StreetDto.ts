import { LocationDto } from "./LocationDto";
import { ApartmentDto } from "./ApartmentDto";

export interface StreetDto extends LocationDto {
    apartments: ApartmentDto[];
}