import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { ContainerRoutingModule } from './container-routing.module';
import { SharedModule } from '../theme/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    SharedModule,
    MatChipsModule
  ]
})
export class ContainerModule { }
