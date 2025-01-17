import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditDriverDetailsComponent } from './add-edit-driver-details/add-edit-driver-details.component';
import { DriverDetailsComponent } from './driver-details.component';
import { ViewDriverDetailsComponent } from './view-driver-details/view-driver-details.component';


const routes: Routes = [
  {
    path: 'list',
    component: DriverDetailsComponent
  },
  {
    path: 'add',
    component: AddEditDriverDetailsComponent
  },
  {
    path: 'modification/:id',
    component: AddEditDriverDetailsComponent
  },
  {
    path: 'view/:id',
    component: ViewDriverDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverDetailsRoutingModule { }
