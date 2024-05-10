import { Routes } from "@angular/router";
import { MeterLocationTableComponent } from "./meter-location-table/meter-location-table.component";
import { AddEditMeterLocationComponent } from "./add-edit-meter-location/add-edit-meter-location.component";

export const routes: Routes = [
    { path: '', component: MeterLocationTableComponent },
    { path: 'add', component: AddEditMeterLocationComponent },
    { path: 'edit/:id', component: AddEditMeterLocationComponent }
];