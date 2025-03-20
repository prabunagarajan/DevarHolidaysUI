import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayoutBalanceComponent } from './payout-balance/payout-balance.component';
import { payoutHistoryComponent } from './payout-balance-history/payout-history.component';


const routes: Routes = [
  {
    path: 'payment-history',
    component:payoutHistoryComponent
  },{
    path:"payment-balance",
    component:PayoutBalanceComponent
  },
  {
    path: "payment-history/:id",
    component: payoutHistoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayoutRoutingModule { }
