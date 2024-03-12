import { Apartment } from "./Apartment";
import { City } from "./City";
import { Location } from "./Location";

export interface Street extends Location {
    city: City;
    apartment: Array<Apartment>;
}