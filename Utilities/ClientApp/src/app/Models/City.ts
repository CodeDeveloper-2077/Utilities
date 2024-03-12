import { Area } from "./Area";
import { Location } from "./Location";
import { Street } from "./Street";

export interface City extends Location {
    area: Area;
    streets: Array<Street>;
}