import { Location } from "./Location";
import { Street } from "./Street";

export interface City extends Location {
    streets: Array<Street>;
}