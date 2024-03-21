import { Area } from "./Area";
import { Location } from "./Location";

export interface Country extends Location {
    areas: Array<Area>;
}