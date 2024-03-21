import { Apartment } from "./Apartment";
import { Location } from "./Location";

export interface Street extends Location {
    apartment: Array<Apartment>;
}