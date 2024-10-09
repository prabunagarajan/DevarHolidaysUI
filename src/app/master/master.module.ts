import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../theme/shared/shared.module';
import { DriverDetailsRoutingModule } from './driver-details/driver-details-routing.module';
import { MainMaterialModule } from '../meterial/material-module';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MainMaterialModule,
    SharedModule,
    MatPaginatorModule
  ]
})
export class MasterModule { }
