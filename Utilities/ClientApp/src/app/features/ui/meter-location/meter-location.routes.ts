import { Routes } from "@angular/router";
import { MeterLocationTableComponent } from "./meter-location-table/meter-location-table.component";
import { AddEditMeterLocationComponent } from "./add-edit-meter-location/add-edit-meter-location.component";

export const routes: Routes = [
    { path: '', component: MeterLocationTableComponent },
    { path: 'add-meter-location', component: AddEditMeterLocationComponent },
    { path: 'edit-meter-location/:id', component: AddEditMeterLocationComponent }
];