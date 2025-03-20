import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/service/common.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-driver-payment',
  templateUrl: './driver-payment.component.html',
  styleUrls: ['./driver-payment.component.scss']
})
export class DriverPaymentComponent implements OnInit {
  driverPaymentFormSearchDetails: FormGroup;
  driverList: any[] = [];
  isLoading: boolean;
  public pageSize = 10;
  dataSource: MatTableDataSource<any>;
  totelCount = 0;
  displayedColumns: string[] = ['serialNo', 'paymentDate', 'driverNamess', 'paymentNo', 'salaryType', 'monthlySalary', 'dailyWagesOrAdvance', 'remarks', 'action'];
  selectObj: any;
  viewEnable: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router,
    private toastrMsg: ToastrService
  ) { }

  ngOnInit() {
    this.driverPaymentFormSearchDetails = this.formBuilder.group({
      driverNames: [''],
      driverNumber: ['']
    });
    this.commonService.activeDriver().subscribe(driverResponse => {
      if (driverResponse.status == 's') {
        this.driverList = driverResponse.data;
      } else {
        this.driverList = [];
      }
    });
    this.getSaleryDetails();
  }

  getSaleryDetails(pageIndex = 0, pageSize = this.pageSize) {
    this.isLoading = true;
    const tripFormSearchDetails = this.driverPaymentFormSearchDetails.value;
    const request = {
      "filters": {
        "MobileNumber": tripFormSearchDetails.driverNumber ? tripFormSearchDetails.driverNumber : '',
        "driverName": tripFormSearchDetails.driverNames ? tripFormSearchDetails.driverNames : ''
      },
      "pageNo": pageIndex,
      "paginationSize": pageSize,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"
    }

    this.commonService.driverPaymentList(request).subscribe(response => {
      this.isLoading = false;
      if (response.status == 's' && response.data) {
        this.dataSource = new MatTableDataSource(response.data.contents);
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    })
  }

  search() {
    this.viewEnable = false;
    this.getSaleryDetails();
  }
  onclear() {
    this.viewEnable = false;
    this.driverPaymentFormSearchDetails.patchValue({
      driverNumber: '',
      driverNames: ''
    });
    this.getSaleryDetails();
  }
  onView() {
    if (this.selectObj) {
      this.router.navigate(['/container/driver-payment/view', this.selectObj.id]);
    }
  }
  onSelect(viewObj) {
    if (viewObj) {
      this.selectObj = viewObj;
      this.viewEnable = true;
    }
  }
  pageEvent(event) {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize
    this.getSaleryDetails(pageIndex, pageSize);
  }
}
