import { CityDto } from "./CityDto";
import { CountryDto } from "./CountryDto";

export interface StateDto {
    id: number;
    name: string;
    country: CountryDto;
    cities: Array<CityDto>
}