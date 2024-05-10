import { Routes } from "@angular/router";
import { CountryTableComponent } from "./country-table/country-table.component";
import { AddEditCountryComponent } from "./add-edit-country/add-edit-country.component";

export const routes: Routes = [
    { path: '', component: CountryTableComponent },
    { path: 'add', component: AddEditCountryComponent },
    { path: 'edit/:id', component: AddEditCountryComponent }
];