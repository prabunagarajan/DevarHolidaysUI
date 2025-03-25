import {
  Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter, ViewChild, AfterViewInit
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-mat-table-configuration',
  templateUrl: './mat-table-configuration.component.html',
  styleUrls: ['./mat-table-configuration.component.scss']
})
export class MatTableConfigurationComponent implements OnInit, OnChanges, AfterViewInit {
  selectedRow: any;

  @Input() pageSize = 10;
  @Input() totalCount = 10;
  @Input() columns: any[] = []; // ✅ Ensure default value is an empty array
  @Input() dataSource = new MatTableDataSource();
  @Input() actionKeys: string[] = [];
  @Input() actionBtnBasedOnCond: any = {};
  @Output() paginationEvent = new EventEmitter<any>();
  @Output() checkboxAction = new EventEmitter<any>();
  @Input() actionRoutes: { add: string, edit: string, delete?: string } = { add: '', edit: '' };
  @Input() row: any;

  @Output() editAction = new EventEmitter<any>();
  @Output() deleteAction = new EventEmitter<any>();
  @Output() viewAction = new EventEmitter<any>();
  @Output() downloadAction = new EventEmitter<any>();

  onCheckboxChange(row: any) {
    this.checkboxAction.emit(row);
  }
  public displayedColumns: string[] = [];
  public resultsLength = 0;
  public currentPage = 0;
  public pageSizeOptions = [5, 10, 25, 100];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("Columns received in child:", this.columns);

    if (!this.columns || !Array.isArray(this.columns)) {
      console.error("columns is undefined or not an array. Initializing as an empty array.");
      this.columns = [];
    }

    // Ensure displayedColumns uses column.name instead of displayName
    this.displayedColumns = this.columns.map(col => col.name);

    if (this.actionKeys && this.actionKeys.length > 0) {
      this.displayedColumns.push('actions');
    }
  }



  ngAfterViewInit() {
    this.paginator.showFirstLastButtons = true;
    this.dataSource.sortingDataAccessor = _.get;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges) {
    // ✅ Update displayedColumns dynamically when columns change
    if (changes.columns && changes.columns.currentValue) {
      this.displayedColumns = this.columns.map(col => col.displayName);
    }
  }

  handlePagination(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;

    const paginationObj = {
      currentPage: this.currentPage,
      pageSize: this.pageSize
    };

    this.paginationEvent.emit(paginationObj);

  }


  onCheckboxChecked(id, event) {
 
    this.checkboxAction.emit({ event, id });
  }

  onViewClicked(row: any) {
    this.viewAction.emit(row);
  }

  onDownloadClicked(row: any) {
    this.downloadAction.emit(row);
  }

  onEditClicked(row: any) {
    this.editAction.emit(row);
  }

  onDeleteClicked(row: any) {
    this.deleteAction.emit(row);
  }


  onCheckboxAction(event: any) {
    console.log('Checkbox action:', event);
  }
  
}
