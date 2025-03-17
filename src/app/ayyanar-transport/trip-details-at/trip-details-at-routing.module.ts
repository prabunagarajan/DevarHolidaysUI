import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripDetailsAtComponent } from './trip-details-at.component';
import { AddTripDetailsAtComponent } from './add-trip-details-at/add-trip-details-at.component';


const routes: Routes = [
  {
    path: 'list',
    component: TripDetailsAtComponent
  },
  {
    path: 'add',
    component: AddTripDetailsAtComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripDetailsAtRoutingModule { }
