export interface Apartment {
    id: number;
    relatedFamily: string;
    registeredCountPeople: number;
    apartmentNumber: string;
    houseNumber: string;
    buildingNumber: number;
    entranceNumber: number;
    receiptCode?: string;
    meterDocumentId: number;
    locationId: number;
    meterIds: Array<number>;
}