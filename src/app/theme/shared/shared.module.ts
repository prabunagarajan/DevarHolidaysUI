import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule, BreadcrumbModule, CardModule, ModalModule } from './components';
import { DataFilterPipe } from './components/data-table/data-filter.pipe';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ClickOutsideModule } from 'ng-click-outside';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { ApexChartComponent } from './components/chart/apex-chart/apex-chart.component';
import { ApexChartService } from './components/chart/apex-chart/apex-chart.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableConfigurationComponent } from './components/mat-table-configuration/mat-table-configuration.component';
import { MainMaterialModule } from './components/mat-table-configuration/main-material.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    CardModule,
    BreadcrumbModule,
    ModalModule,
    ClickOutsideModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    BsDatepickerModule.forRoot(),
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MainMaterialModule
  ],
  exports: [
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    CardModule,
    BreadcrumbModule,
    ModalModule,
    DataFilterPipe,
    ClickOutsideModule,
    SpinnerComponent,
    ApexChartComponent,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    // BsDatepickerModule.forRoot(),
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    LoaderComponent ,
    MatProgressSpinnerModule,
    MatTableConfigurationComponent,
    MainMaterialModule
  ],
  declarations: [
    DataFilterPipe,
    MatTableConfigurationComponent,
    SpinnerComponent,
    ApexChartComponent,
    LoaderComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    ApexChartService
  ]
})
export class SharedModule { }
