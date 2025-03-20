import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentDateTimeAdapter } from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class';
import { TripDetailsRoutingModule } from './trip-details-routing.module';
import { AddEditTripDetailsComponent } from './add-edit-trip-details/add-edit-trip-details.component';
import { ViewTripDetailsComponent } from './view-trip-details/view-trip-details.component';
import { TripDetailsComponent } from './trip-details.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS, DateTimeAdapter, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { TripdetailsinprogressComponent } from './tripdetailsinprogress/tripdetailsinprogress.component';
import { TripdeatilsforwardComponent } from './tripdeatilsforward/tripdeatilsforward.component';
import {  PaymentPendingComponent } from './payment-pending/payment-pending.component';

export const MY_CUSTOM_FORMATS = {
  fullPickerInput: 'DD/MM/YYYY HH:mm',   
  parseInput: 'DD/MM/YYYY HH:mm',       
  datePickerInput: 'DD/MM/YYYY',         
  timePickerInput: 'HH:mm',              
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};
@NgModule({
  declarations: [
    TripDetailsComponent,
    AddEditTripDetailsComponent,
    ViewTripDetailsComponent,
    TripdetailsinprogressComponent,
    TripdeatilsforwardComponent,
    TripdeatilsforwardComponent,
    PaymentPendingComponent
  ],
  imports: [
    CommonModule,
    TripDetailsRoutingModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
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
export class TripDetailsModule { }


