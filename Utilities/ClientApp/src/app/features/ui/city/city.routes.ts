import { Routes } from "@angular/router";
import { CityTableComponent } from "./city-table/city-table.component";
import { AddEditCityComponent } from "./add-edit-city/add-edit-city.component";

export const routes: Routes = [
    { path: '', component: CityTableComponent },
    { path: 'add', component: AddEditCityComponent },
    { path: 'edit/:id', component: AddEditCityComponent }
];