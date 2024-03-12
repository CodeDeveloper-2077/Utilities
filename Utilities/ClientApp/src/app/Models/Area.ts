import { City } from "./City";
import { Country } from "./Country";
import { Location } from "./Location";

export interface Area extends Location {
    country: Country;
    cities: Array<City>;
}