import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutRoutingModule } from './payout-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { payoutHistoryComponent } from './payout-balance-history/payout-history.component';
import { PayoutBalanceComponent } from './payout-balance/payout-balance.component';


@NgModule({
  declarations: [
    payoutHistoryComponent,
    PayoutBalanceComponent
  ],
  imports: [
    CommonModule,
    PayoutRoutingModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule]
})
export class PayoutModule { }
