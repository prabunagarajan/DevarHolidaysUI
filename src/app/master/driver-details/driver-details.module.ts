import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverDetailsRoutingModule } from './driver-details-routing.module';
import { AddEditDriverDetailsComponent } from './add-edit-driver-details/add-edit-driver-details.component';
import { ViewDriverDetailsComponent } from './view-driver-details/view-driver-details.component';
import { DriverDetailsComponent } from './driver-details.component';


@NgModule({
  declarations: [
    DriverDetailsComponent,
    AddEditDriverDetailsComponent,
    ViewDriverDetailsComponent],
  imports: [
    CommonModule,
    DriverDetailsRoutingModule
  ]
})
export class DriverDetailsModule { }
