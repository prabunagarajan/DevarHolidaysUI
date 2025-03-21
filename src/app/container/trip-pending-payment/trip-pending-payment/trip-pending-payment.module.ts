import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripPendingPaymentRoutingModule } from './trip-pending-payment-routing.module';
import { TripPendingPaymentComponent } from './trip-pending-payment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule, DateTimeAdapter, OWL_DATE_TIME_LOCALE, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TripPendingPaymentEditComponent } from './trip-pending-payment-edit/trip-pending-payment-edit.component';
import { TripPendingPaymentViewComponent } from './trip-pending-payment-view/trip-pending-payment-view.component';

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
  declarations: [TripPendingPaymentComponent, TripPendingPaymentEditComponent, TripPendingPaymentViewComponent],
  imports: [
    CommonModule,
    TripPendingPaymentRoutingModule,
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
export class TripPendingPaymentModule { }
