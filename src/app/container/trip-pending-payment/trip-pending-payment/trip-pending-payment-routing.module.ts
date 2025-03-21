import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripPendingPaymentComponent } from './trip-pending-payment.component';
import { TripPendingPaymentEditComponent } from './trip-pending-payment-edit/trip-pending-payment-edit.component';
import { TripPendingPaymentViewComponent } from './trip-pending-payment-view/trip-pending-payment-view.component';


const routes: Routes = [
  {
    path: 'list',
    component: TripPendingPaymentComponent
  },
  {
    path: 'modification/:id',
    component: TripPendingPaymentEditComponent
  },
   {
    path: 'view/:id',
    component: TripPendingPaymentViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripPendingPaymentRoutingModule { }
