import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'trip-detail',
    loadChildren: () => import('./trip-details/trip-details/trip-details.module').then(module => module.TripDetailsModule)
  },
  {
    path: 'driver-payment',
    loadChildren: () => import('./driver-payment/driver-payment.module').then(module => module.DriverPaymentModule)
  },
  {
    path: 'payout',
    loadChildren: () => import('./payout/payout.module').then(module => module.PayoutModule)
  },
  {
    path: 'trip-payment-pending',
    loadChildren: () => import('./trip-pending-payment/trip-pending-payment/trip-pending-payment.module').then(module => module.TripPendingPaymentModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
