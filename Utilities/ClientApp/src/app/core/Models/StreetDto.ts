import { CityDto } from "./CityDto";

export interface StreetDto {
    id: number;
    name: string;
    city: CityDto;
}