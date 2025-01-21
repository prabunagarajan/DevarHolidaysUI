import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from 'src/app/service/master.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['serialNo', 'name', 'mobileNumber', 'drivingLicenseNumber', 'aadharNumber', 'district', 'status', 'action'];
  dataSource: MatTableDataSource<any>;
  viewEnable: boolean;
  editEnable: boolean;
  selectObj: any;
  driverFormSearchDetails: FormGroup;
  totelCount = 0;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  public pageSize = 10;

  constructor(
    private router: Router,
    private masterService: MasterService,
    private toastrMsg: ToastrService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.driverFormSearchDetails = this.formBuilder.group({
      aadharNumber: [''],
      drivingLicenseNumber: [''],
      mobileNumber: [''],
      driverName: ['']
    });
    this.getAll();
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  getAll(pageIndex = 0, pageSize = this.pageSize) {
    const driverFormSearchDetails = this.driverFormSearchDetails.value;
    const request = {
      filters: {
        aadharNumber: driverFormSearchDetails.aadharNumber ? driverFormSearchDetails.aadharNumber : '',
        drivingLicenseNumber: driverFormSearchDetails.drivingLicenseNumber ? driverFormSearchDetails.drivingLicenseNumber : '',
        mobileNumber: driverFormSearchDetails.mobileNumber ? driverFormSearchDetails.mobileNumber : '',
        name: driverFormSearchDetails.name ? driverFormSearchDetails.name : '',
      },
      paginationSize: pageSize,
      sortField: "modifiedDate",
      pageNo: pageIndex,
      sortOrder: "DESC"
    }
    this.masterService.driverDetailsSearchList(request).subscribe(response => {
      if (response.status == 's' && response.data) {
        this.dataSource = new MatTableDataSource(response.data.contents);
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    })
  }

  onclear() {

    const request = {
      filters: {
        aadharNumber: '',
        drivingLicenseNumber: '',
        mobileNumber: '',
        name: ''
      },
      paginationSize: 10,
      sortField: "modifiedDate",
      pageNo: 0,
      sortOrder: "DESC"
    }

    this.masterService.driverDetailsSearchList(request).subscribe(response => {
      if (response.status === 's' && response.data) {
        this.dataSource = new MatTableDataSource(response.data.contents);
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    });
  }

  search() {

    const driverFormSearchDetails = this.driverFormSearchDetails.value;
    const request = {
      filters: {
        aadharNumber: driverFormSearchDetails.aadharNumber ? driverFormSearchDetails.aadharNumber : '',
        drivingLicenseNumber: driverFormSearchDetails.drivingLicenseNumber ? driverFormSearchDetails.drivingLicenseNumber : '',
        mobileNumber: driverFormSearchDetails.mobileNumber ? driverFormSearchDetails.mobileNumber : '',
        name: driverFormSearchDetails.name ? driverFormSearchDetails.name : '',
      },
      paginationSize: 10,
      sortField: "modifiedDate",
      pageNo: 0,
      sortOrder: "DESC"
    }

    this.masterService.driverDetailsSearchList(request).subscribe(response => {
      if (response.status === 's' && response.data) {
        this.dataSource = new MatTableDataSource(response.data.contents);
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    });
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
      this.router.navigate(['/master/driver-detail/modification', this.selectObj.id]);
    } else {
      this.toastrMsg.error('View not able');
    }
  }

  onView() {
    if (this.selectObj) {
      this.router.navigate(['/master/driver-detail/view', this.selectObj.id]);
    } else {
      this.toastrMsg.error('View not able');
    }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  pageEvent(event) {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize
    this.getAll(pageIndex, pageSize);
  }
} 