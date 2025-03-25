import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/service/common.service';
import { MatTableDataSource } from '@angular/material/table';
import { MasterListColumns } from 'src/app/config/master-list-columns';
@Component({
  selector: 'app-driver-payment',
  templateUrl: './driver-payment.component.html',
  styleUrls: ['./driver-payment.component.scss']
})
export class DriverPaymentComponent implements OnInit {
  public columns = MasterListColumns.driverPaymentColumns;
  actionKeys: string[] = ['checkbox']; // ['edit', 'delete'] for buttons
  dataSource = new MatTableDataSource(); // Example data source
  totalCount: number = 10;
  pageSize: number = 10;

  driverPaymentFormSearchDetails: FormGroup;
  driverList: any[] = [];
  isLoading: boolean;
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
        const serialNumber = pageIndex * pageSize; // Calculate start index dynamically
        const dataSource = response.data.contents.map((v, i) => ({
          ...v,
          sNo: serialNumber + i + 1 // Adjust serial number
        }));
        this.dataSource = new MatTableDataSource(dataSource);
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
  onChecked(viewObj) {
    const selectObj = this.dataSource.data.find((findElement: any) => findElement.id == viewObj.id);
    if (selectObj) {
      this.selectObj = viewObj;
      this.viewEnable = true;
    }
  }
  handlePagination(event) {
    const pageIndex = event.currentPage;
    const pageSize = event.pageSize
    this.getSaleryDetails(pageIndex, pageSize);
  }
}
