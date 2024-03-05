import { City } from "./City";
import { Location } from "./Location";

export interface Area extends Location {
    countryId: number;
    cityIds: Array<number>;
}