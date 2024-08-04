import { CityDto } from "./CityDto";
import { CountryDto } from "./CountryDto";

export interface StateDto {
    name: string;
    country: CountryDto;
    cities?: Array<CityDto>
}