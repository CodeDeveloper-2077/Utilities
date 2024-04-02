import { Routes } from "@angular/router";
import { MeterTableComponent } from "./meter-table/meter-table.component";
import { AddEditMeterComponent } from "./add-edit-meter/add-edit-meter.component";

export const routes: Routes = [
    { path: '', component: MeterTableComponent },
    { path: 'add-meter', component: AddEditMeterComponent },
    { path: 'edit-meter/:id', component: AddEditMeterComponent }
];