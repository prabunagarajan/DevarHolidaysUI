import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS, DateTimeAdapter, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class';

export const MY_CUSTOM_FORMATS = {
  fullPickerInput: 'DD-MM-YYYY HH:mm',   
  parseInput: 'DD-MM-YYYY HH:mm',       
  datePickerInput: 'DD-MM-YYYY',         
  timePickerInput: 'HH:mm',              
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};

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
    MatNativeDateModule,
    MatRadioModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
      {
        provide: DateTimeAdapter,
        useClass: MomentDateTimeAdapter,
        deps: [OWL_DATE_TIME_LOCALE],
      },
      { provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS },
    ],
    schemas: [NO_ERRORS_SCHEMA] 
  })
export class VehicleDetailsModule { }
