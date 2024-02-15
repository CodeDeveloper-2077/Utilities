import { Location } from "./Location";

export interface Country extends Location {
    areaIds: Array<number>;
}