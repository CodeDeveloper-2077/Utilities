import { StateDto } from "./StateDto";

export interface CountryDto {
    id: number;
    name: string;
    states: Array<StateDto>
}