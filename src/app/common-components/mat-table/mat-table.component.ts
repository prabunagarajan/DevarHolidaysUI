import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApexChartService } from 'src/app/theme/shared/components/chart/apex-chart/apex-chart.service';
import { ChartDB } from 'src/app/fack-db/chart-data';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 7, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 8, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 9, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 10, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 12, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 15, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 17, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 18, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 19, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 20, name: 'Boron', weight: 10.811, symbol: 'B' },
];

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  // ngOnInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
     ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
