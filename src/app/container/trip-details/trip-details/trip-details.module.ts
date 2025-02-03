import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripDetailsRoutingModule } from './trip-details-routing.module';
import { AddEditTripDetailsComponent } from './add-edit-trip-details/add-edit-trip-details.component';
import { ViewTripDetailsComponent } from './view-trip-details/view-trip-details.component';
import { TripDetailsComponent } from './trip-details.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    TripDetailsComponent,
    AddEditTripDetailsComponent,
    ViewTripDetailsComponent
  ],
  imports: [
    CommonModule,
    TripDetailsRoutingModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    NgbModule
  ]
})
export class TripDetailsModule { }
