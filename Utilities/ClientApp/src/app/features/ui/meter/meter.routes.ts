import { Routes } from "@angular/router";
import { MeterTableComponent } from "./meter-table/meter-table.component";
import { AddEditMeterComponent } from "./add-edit-meter/add-edit-meter.component";

export const routes: Routes = [
    { path: '', component: MeterTableComponent },
    { path: 'add', component: AddEditMeterComponent },
    { path: 'edit/:id', component: AddEditMeterComponent }
];