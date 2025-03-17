import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripDetailsAtRoutingModule } from './trip-details-at-routing.module';
import { AddTripDetailsAtComponent } from './add-trip-details-at/add-trip-details-at.component';
import { ViewTripDetailsAtComponent } from './view-trip-details-at/view-trip-details-at.component';
import { TripDetailsAtComponent } from './trip-details-at.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule, DateTimeAdapter, OWL_DATE_TIME_LOCALE, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from 'src/app/theme/shared/shared.module';

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
  declarations: [TripDetailsAtComponent, AddTripDetailsAtComponent, ViewTripDetailsAtComponent],
  imports: [
    CommonModule,
    TripDetailsAtRoutingModule,
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
export class TripDetailsAtModule { }
