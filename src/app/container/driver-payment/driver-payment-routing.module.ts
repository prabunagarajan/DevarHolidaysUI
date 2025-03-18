import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDriverPaymentComponent } from './add-driver-payment/add-driver-payment.component';
import { DriverPaymentComponent } from './driver-payment.component';
import { ViewDriverPaymentComponent } from './view-driver-payment/view-driver-payment.component';


const routes: Routes = [
  {
    path: 'list',
    component: DriverPaymentComponent
  },
  {
    path: 'add',
    component: AddDriverPaymentComponent
  },
  {
    path: 'view/:id',
    component: ViewDriverPaymentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverPaymentRoutingModule { }
