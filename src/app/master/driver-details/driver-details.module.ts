import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverDetailsRoutingModule } from './driver-details-routing.module';
import { AddEditDriverDetailsComponent } from './add-edit-driver-details/add-edit-driver-details.component';
import { ViewDriverDetailsComponent } from './view-driver-details/view-driver-details.component';
import { DriverDetailsComponent } from './driver-details.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    DriverDetailsComponent,
    AddEditDriverDetailsComponent,
    ViewDriverDetailsComponent],
  imports: [
    CommonModule,
    DriverDetailsRoutingModule,
    SharedModule  
  ]
})
export class DriverDetailsModule { }
