import { Routes } from "@angular/router";
import { ApartmentTableComponent } from "./apartment-table/apartment-table.component";
import { AddEditApartmentComponent } from "./add-edit-apartment/add-edit-apartment.component";

export const routes: Routes = [
    { path: 'apartments', component: ApartmentTableComponent },
    { path: 'add-apartment', component: AddEditApartmentComponent },
    { path: 'edit-apartment/:id', component: AddEditApartmentComponent }
];