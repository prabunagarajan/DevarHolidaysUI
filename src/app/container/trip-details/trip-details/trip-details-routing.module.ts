import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditTripDetailsComponent } from './add-edit-trip-details/add-edit-trip-details.component';
import { TripDetailsComponent } from './trip-details.component';
import { ViewTripDetailsComponent } from './view-trip-details/view-trip-details.component';


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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripDetailsRoutingModule { }
