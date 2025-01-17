import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../theme/layout/auth/auth.component';


const routes: Routes = [
  {
    path: 'driver-detail',
    loadChildren: () => import('./driver-details/driver-details.module').then(module => module.DriverDetailsModule)
  },
  {
    path: 'vehicle-detail',
    loadChildren: () => import('./vehicle-details/vehicle-details.module').then(module => module.VehicleDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
