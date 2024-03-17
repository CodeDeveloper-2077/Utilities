import { City } from "./City";
import { Location } from "./Location";

export interface Area extends Location {
    cities: Array<City>;
}