import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleDetailsRoutingModule } from './vehicle-details-routing.module';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { AddEditVehicleDetailsComponent } from './add-edit-vehicle-details/add-edit-vehicle-details.component';
import { ViewVehicleDetailsComponent } from './view-vehicle-details/view-vehicle-details.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [
    VehicleDetailsComponent,
    ViewVehicleDetailsComponent,
    AddEditVehicleDetailsComponent
  ],
  imports: [
    CommonModule,
    VehicleDetailsRoutingModule,
    SharedModule
  ]
})
export class VehicleDetailsModule { }
