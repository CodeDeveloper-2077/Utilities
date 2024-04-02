import { Routes } from "@angular/router";
import { StreetTableComponent } from "./street-table/street-table.component";
import { AddEditStreetComponent } from "./add-edit-street/add-edit-street.component";

export const routes: Routes = [
    { path: '', component: StreetTableComponent },
    { path: 'add-street', component: AddEditStreetComponent },
    { path: 'edit-street/:id', component: AddEditStreetComponent }
];