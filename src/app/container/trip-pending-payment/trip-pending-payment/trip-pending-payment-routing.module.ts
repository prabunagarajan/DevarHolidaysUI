import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripPendingPaymentComponent } from './trip-pending-payment.component';


const routes: Routes = [
  {
    path: 'list',
    component: TripPendingPaymentComponent
  },
  /* {
    path: 'modification/:id',
    component: TripPendingPaymentComponent
  },
  {
    path: 'view/:id',
    component: TripPendingPaymentComponent
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripPendingPaymentRoutingModule { }
