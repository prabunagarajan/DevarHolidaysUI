import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyyanarTransportRoutingModule } from './ayyanar-transport-routing.module';
import { MatChipsModule } from '@angular/material';
import { SharedModule } from '../theme/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AyyanarTransportRoutingModule,
    SharedModule,
    MatChipsModule
  ]
})
export class AyyanarTransportModule { }
