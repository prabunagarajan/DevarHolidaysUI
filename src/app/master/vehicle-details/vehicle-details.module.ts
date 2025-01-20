import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleDetailsRoutingModule } from './vehicle-details-routing.module';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { AddEditVehicleDetailsComponent } from './add-edit-vehicle-details/add-edit-vehicle-details.component';
import { ViewVehicleDetailsComponent } from './view-vehicle-details/view-vehicle-details.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    VehicleDetailsComponent,
    ViewVehicleDetailsComponent,
    AddEditVehicleDetailsComponent
  ],
  imports: [
    CommonModule,
    VehicleDetailsRoutingModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    // BsDatepickerModule.forRoot(),
    MatInputModule,
    MatNativeDateModule
  ]
})
export class VehicleDetailsModule { }
