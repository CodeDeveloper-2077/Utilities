import { Location } from "./Location";

export interface Street extends Location {
    cityId: number;
    apartmentId: number;
}