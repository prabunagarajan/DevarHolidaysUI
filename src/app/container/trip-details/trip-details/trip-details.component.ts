import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
  displayedColumns: string[] = ['createdDate', 'vehicleNumber', 'customerName', 'visitingPlace', 'driverName', 'totalRent', 'status', 'action'];
  dataSource: MatTableDataSource<any>;
  viewEnable: boolean;
  editEnable: boolean;
  tripFormSearchDetails: FormGroup;
  totelCount = 0;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  public pageSize = 10;
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService
  ) { }

  ngOnInit() {

    this.tripFormSearchDetails = this.formBuilder.group({
      driverName: [''],
      driverNumber: [''],
      vehiclenumber: ['']
    })
    this.getAll();
  }


  getAll(pageIndex = 0, pageSize = this.pageSize) {
    const tripFormSearchDetails = this.tripFormSearchDetails.value;
    const request = {
      filters: {
        vehicleNumber: tripFormSearchDetails.vehiclenumber ? tripFormSearchDetails.vehiclenumber : '',
        customerName: '',
        customerMobileNumber: '',
        driverName: tripFormSearchDetails.driverName ? tripFormSearchDetails.driverName : '',
        visitingPlace: ""
      },
      paginationSize: pageSize,
      sortField: "modifiedDate",
      pageNo: pageIndex,
      sortOrder: "DESC"
    }
    this.commonService.tripDetailsSearchList(request).subscribe(response => {
      if (response.status == 's' && response.data) {
        this.dataSource = new MatTableDataSource(response.data.contents);
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    })
  }

  search() {
    const tripFormSearchDetails = this.tripFormSearchDetails.value;
    const request = {
      filters: {
        vehicleNumber: tripFormSearchDetails.vehiclenumber ? tripFormSearchDetails.vehiclenumber : '',
        customerName: '',
        customerMobileNumber: '',
        driverName: tripFormSearchDetails.driverName ? tripFormSearchDetails.driverName : '',
        visitingPlace: ""
      },
      paginationSize: 10,
      sortField: "modifiedDate",
      pageNo: 0,
      sortOrder: "DESC"
    }
    this.commonService.tripDetailsSearchList(request).subscribe(response => {
      if (response.status === 's' && response.data) {
        this.dataSource = new MatTableDataSource(response.data.contents);
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    });
  }
  onclear() {
    this.tripFormSearchDetails.patchValue({
      driverName: '',
      driverNumber: '',
      vehiclenumber: ''
    });
    const request = {
      "filters": {
        "vehicleNumber": "",
        "customerName": "",
        "customerMobileNumber": "",
        "driverName": "",
        "visitingPlace": ""
      },
      "pageNo": 0,
      "paginationSize": 10,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"
    }
    this.commonService.tripDetailsSearchList(request).subscribe(response => {
      if (response.status === 's' && response.data) {
        this.dataSource = new MatTableDataSource(response.data.contents);
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    });
  }

  pageEvent(event) {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize
    this.getAll(pageIndex, pageSize);
  }
}
