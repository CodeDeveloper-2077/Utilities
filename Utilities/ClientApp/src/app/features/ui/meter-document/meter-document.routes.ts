import { Routes } from "@angular/router";
import { MeterDocumentTableComponent } from "./meter-document-table/meter-document-table.component";
import { AddEditMeterDocumentComponent } from "./add-edit-meter-document/add-edit-meter-document.component";

export const routes: Routes = [
    { path: '', component: MeterDocumentTableComponent },
    { path: 'add', component: AddEditMeterDocumentComponent },
    { path: 'edit/:id', component: AddEditMeterDocumentComponent }
];