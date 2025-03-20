import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditTripDetailsComponent } from './add-edit-trip-details/add-edit-trip-details.component';
import { TripDetailsComponent } from './trip-details.component';
import { ViewTripDetailsComponent } from './view-trip-details/view-trip-details.component';
import { TripdetailsinprogressComponent } from './tripdetailsinprogress/tripdetailsinprogress.component';
import { TripdeatilsforwardComponent } from './tripdeatilsforward/tripdeatilsforward.component';
import { PaymentPendingComponent } from './payment-pending/payment-pending.component';


const routes: Routes = [
  {
    path: 'list',
    component: TripDetailsComponent
  },
  {
    path: 'add',
    component: AddEditTripDetailsComponent
  },
  {
    path: 'modification/:id',
    component: AddEditTripDetailsComponent
  },
  {
    path: 'view/:id',
    component: ViewTripDetailsComponent
  },
  {
    path: 'view/:id/:status',
    component: ViewTripDetailsComponent
  },
  {
    path: 'inprogresslist',
    component: TripdetailsinprogressComponent
  },
  {
    path: 'forwardlist',
    component: TripdeatilsforwardComponent
  },
  {
    path: 'modification/:id/:status',
    component: AddEditTripDetailsComponent
  },

{
  path: 'payment-pending',
  component:PaymentPendingComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripDetailsRoutingModule { }
