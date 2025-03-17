import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'trip-detail-at',
    loadChildren: () => import('./trip-details-at/trip-details-at.module').then(module => module.TripDetailsAtModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyyanarTransportRoutingModule { }
