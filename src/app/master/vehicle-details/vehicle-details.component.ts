import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['serialNo', 'vehicleNo', 'vehicleName', 'insuranceDate', 'taxDate', 'fcDate', 'polutionDate', 'action'];
  selectedRecord: any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  totalCounts: any;
  viewDisabled: boolean;
  editDisabled: boolean;
  public pageSize = 10;
  vehicleFormSearchDetails: FormGroup;
  constructor(private masterService: MasterService,
    private toaster: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.vehicleFormSearchDetails = this.formBuilder.group({
      vehicleNumber: [''],
      vehicleName: ['']
    });

    this.loadDriverDetails();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadDriverDetails(pageIndex = 0, pageSize = this.pageSize) {
    const request = {
      filters: {},
      pageNo: pageIndex,
      paginationSize: pageSize,
      sortField: 'modifiedDate',
      sortOrder: 'DESC',
    };

    this.masterService.vehicleDetailsGetAllList(request).subscribe(
      (res) => {
        if (res.status === 's') {
          this.dataSource.data = res.data.contents;
          this.totalCounts = res.data.totalElements;
        } else {
          this.dataSource = new MatTableDataSource();
        }
      });
  }

  selectRecord(record) {
    this.selectedRecord = record ? record : undefined;
    if (this.selectedRecord) {
      this.editDisabled = true;
      this.viewDisabled = true;
    }
  }

  edit() {
    if (this.selectedRecord) {
      this.router.navigate(['/master/vehicle-detail/modification', this.selectedRecord.id]);
    }
  }

  view() {
    if (this.selectedRecord) {
      this.router.navigate(['/master/vehicle-detail/view', this.selectedRecord.id]);
    }
  }

  pageEvent(event) {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize
    this.loadDriverDetails(pageIndex, pageSize);
  }

  search() {
    const vehicleFormSearchDetails = this.vehicleFormSearchDetails.value;
    const searchRequest = {
      filters: {
        vehicleNumber: vehicleFormSearchDetails.vehicleNumber ? vehicleFormSearchDetails.vehicleNumber : '',
        vehicleName: vehicleFormSearchDetails.vehicleName ? vehicleFormSearchDetails.vehicleName : ''
      },
      pageNo: 0,
      paginationSize: 10,
      sortField: "modifiedDate",
      sortOrder: "DESC"
    }
    this.masterService.vehicleDetailsGetAllList(searchRequest).subscribe(
      (searchResponse) => {
        if (searchResponse.status === 's') {
          this.dataSource.data = searchResponse.data.contents;
          this.totalCounts = searchResponse.data.totalElements;
        } else {
          this.dataSource = new MatTableDataSource();
        }
      }
    );
  }

  onclear() {

    this.vehicleFormSearchDetails.patchValue({
      vehicleNumber: '',
      vehicleName: ''
    });

    const clearRequest = {
      filters: {},
      pageNo: 0,
      paginationSize: 10,
      sortField: 'modifiedDate',
      sortOrder: 'DESC',
    };

    this.masterService.vehicleDetailsGetAllList(clearRequest).subscribe(
      (clearResponse) => {
        if (clearResponse.status === 's') {
          this.dataSource.data = clearResponse.data.contents;
          this.totalCounts = clearResponse.data.totalElements;
        } else {
          this.dataSource = new MatTableDataSource();
        }
      });
  }
}