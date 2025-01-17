import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditVehicleDetailsComponent } from './add-edit-vehicle-details/add-edit-vehicle-details.component';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { ViewVehicleDetailsComponent } from './view-vehicle-details/view-vehicle-details.component';


const routes: Routes = [
  {
    path: 'list',
    component: VehicleDetailsComponent
  },
  {
    path: 'add',
    component: AddEditVehicleDetailsComponent
  },
  {
    path: 'modification/:id',
    component: AddEditVehicleDetailsComponent
  },
  {
    path: 'view/:id',
    component: ViewVehicleDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleDetailsRoutingModule { }
