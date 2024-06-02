import { StateDto } from "./StateDto";
import { StreetDto } from "./StreetDto";

export interface CityDto {
    id: number;
    name: string;
    state: StateDto;
    streets: Array<StreetDto>;
}