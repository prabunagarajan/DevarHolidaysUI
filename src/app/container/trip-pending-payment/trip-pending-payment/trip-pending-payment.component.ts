import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-trip-pending-payment',
  templateUrl: './trip-pending-payment.component.html',
  styleUrls: ['./trip-pending-payment.component.scss']
})
export class TripPendingPaymentComponent implements OnInit {

  tripPaymentPendingFormSearchDetails: FormGroup;
  displayedColumns: string[] = ['serialNo', 'tripNumber', 'createdDate', 'vehicleNumber', 'customerName', 'visitingPlace', 'driverName', 'totalRent', 'status', 'action'];
  dataSource: MatTableDataSource<any>;
  totelCount = 0;
  pageSize = 10;
  isLoading: boolean;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  editEnable: boolean;
  viewEnable: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getTripPaymentPendingList();
  }
  getTripPaymentPendingList(pageIndex = 0, pageSize = this.pageSize) {
    this.isLoading = true;
    this.commonService.getTripPaymentPendingList().subscribe(response => {
      this.isLoading = false;
      if (response.status == 's' && response.data) {
        this.dataSource = new MatTableDataSource(response.data);
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    })
  }

  onSelect(viewObj) {
    console.log('viewObj :', viewObj);
    this.editEnable = true;
    this.viewEnable = true;
  }

}
