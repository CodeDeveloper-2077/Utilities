import { StateDto } from "./StateDto";

export interface CountryDto {
    name: string;
    states?: Array<StateDto>
}