import { StateDto } from "./StateDto";
import { StreetDto } from "./StreetDto";

export interface CityDto {
    name: string;
    state: StateDto;
    streets?: Array<StreetDto>;
}