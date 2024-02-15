import { Location } from "./Location";

export interface City extends Location {
    areaId: number;
    streetIds: Array<number>;
}