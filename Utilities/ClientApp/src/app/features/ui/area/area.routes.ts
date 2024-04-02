import { Routes } from "@angular/router";
import { AreaTableComponent } from "./area-table/area-table.component";
import { AddEditAreaComponent } from "./add-edit-area/add-edit-area.component";

export const routes: Routes = [
    { path: '', component: AreaTableComponent },
    { path: 'add-area', component: AddEditAreaComponent },
    { path: 'edit-area/:id', component: AddEditAreaComponent }
];