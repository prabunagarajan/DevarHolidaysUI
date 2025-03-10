import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/service/common.service';
@Component({
  selector: 'app-tripdeatilsforward',
  templateUrl: './tripdeatilsforward.component.html',
  styleUrls: ['./tripdeatilsforward.component.scss']
})
export class TripdeatilsforwardComponent implements OnInit {


  displayedColumns: string[] = ['serialNo', 'createdDate', 'vehicleNumber', 'customerName', 'visitingPlace', 'driverName', 'totalRent', 'status', 'action'];
  dataSource: MatTableDataSource<any>;
  viewEnable: boolean;
  editEnable: boolean;
  tripFormSearchDetails: FormGroup;
  totelCount = 0;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  public pageSize = 10;
  selectObj: any;
  vehicleList: any;
  driverList: any;
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router,
    private toastrMsg: ToastrService
  ) { }

  ngOnInit() {

    this.tripFormSearchDetails = this.formBuilder.group({
      driverName: [''],
      driverNumber: [''],
      vehiclenumber: [''],
      status:['']
    })
    this.getAll();
    this.commonService.activeVechicle().subscribe(vehicleResponse => {
      if (vehicleResponse.status == 's') {
        this.vehicleList = vehicleResponse.data;
      } else {
        this.vehicleList = [];
      }
    });
    this.commonService.activeDriver().subscribe(driverResponse => {
      if (driverResponse.status == 's') {
        this.driverList = driverResponse.data;
      } else {
        this.driverList = [];
      }
    });
  }


  getAll(pageIndex = 0, pageSize = this.pageSize) {
    const tripFormSearchDetails = this.tripFormSearchDetails.value;
    const request = {
      filters: {
        vehicleNumber: tripFormSearchDetails.vehiclenumber ? tripFormSearchDetails.vehiclenumber : '',
        customerName: '',
        customerMobileNumber: '',
        driverName: tripFormSearchDetails.driverName ? tripFormSearchDetails.driverName : '',
        visitingPlace: "",
        status:"FORWARDED"
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
        visitingPlace: "",
        status: tripFormSearchDetails.status ? tripFormSearchDetails.status : ''
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
      vehiclenumber: '',
      status:"",
    });
    /* const request = {
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
    }); */
    this.pageSize = 10;
    this.search();
  }

  pageEvent(event) {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize
    this.getAll(pageIndex, pageSize);
  }

  onSelect(obj) {
    this.selectObj = obj ? obj : undefined;
    if (obj) {
      this.viewEnable = true;
      this.editEnable = true;
    }
  }

  onEdit() {
    if (this.selectObj) {
      this.router.navigate(['/container/trip-detail/modification', this.selectObj.id]);
    } else {
      this.toastrMsg.error('View not able');
    }
  }

  onView() {
    if (this.selectObj) {
      this.router.navigate(['/container/trip-detail/view', this.selectObj.id]);
    } else {
      this.toastrMsg.error('View not able');
    }
  }

}

