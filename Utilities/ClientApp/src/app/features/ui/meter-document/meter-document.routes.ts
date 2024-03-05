import { Routes } from "@angular/router";
import { MeterDocumentTableComponent } from "./meter-document-table/meter-document-table.component";
import { AddEditMeterDocumentComponent } from "./add-edit-meter-document/add-edit-meter-document.component";

export const routes: Routes = [
    { path: 'meter-documents', component: MeterDocumentTableComponent },
    { path: 'add-meter-document', component: AddEditMeterDocumentComponent },
    { path: 'edit-meter-document/:id', component: AddEditMeterDocumentComponent }
];