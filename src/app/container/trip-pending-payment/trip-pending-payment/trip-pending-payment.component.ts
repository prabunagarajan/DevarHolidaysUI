import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MasterListColumns } from 'src/app/config/master-list-columns';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-trip-pending-payment',
  templateUrl: './trip-pending-payment.component.html',
  styleUrls: ['./trip-pending-payment.component.scss']
})
export class TripPendingPaymentComponent implements OnInit {

  public columns = MasterListColumns.tripListPendingPaymentColumns;
  actionKeys: string[] = ['checkbox']; // ['edit', 'delete'] for buttons
  dataSource = new MatTableDataSource(); // Example data source
  totalCount: number = 10;
  pageSize: number = 10;

  tripPaymentPendingFormSearchDetails: FormGroup;
  displayedColumns: string[] = ['serialNo', 'tripNumber', 'createdDate', 'vehicleNumber', 'customerName', 'visitingPlace', 'driverName', 'totalRent', 'pendingAmount', 'status', 'action'];
  totelCount = 0;
  isLoading: boolean;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  editEnable: boolean;
  viewEnable: boolean;
  selectObj: any;
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router,
    private toastrMsg: ToastrService
  ) { }

  ngOnInit() {
    this.getTripPaymentPendingList();
  }
  getTripPaymentPendingList(pageIndex = 0, pageSize = this.pageSize) {
    this.isLoading = true;
    this.commonService.getTripPaymentPendingList().subscribe(response => {
      this.isLoading = false;
      if (response.status == 's' && response.data) {
        const serialNumber = pageIndex * pageSize; // Calculate start index dynamically
        const dataSource = response.data.map((v, i) => ({
          ...v,
          sNo: serialNumber + i + 1 // Adjust serial number
        }));
        this.dataSource = new MatTableDataSource(dataSource);
        this.totelCount = response.data.length;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    })
  }

  onChecked(element) {
    const selectObj = this.dataSource.data.find((findElement: any) => findElement.id == element.id);
    if (selectObj) {
      this.selectObj = selectObj;
      this.editEnable = true;
      this.viewEnable = true;
    }
  }

  onEdit() {
    if (this.selectObj) {
      this.router.navigate(['/container/trip-payment-pending/modification', this.selectObj.id]);
    } else {
      this.toastrMsg.warning('Edit not able');
    }
  }

  onView() {
    if (this.selectObj) {
      this.router.navigate(['/container/trip-payment-pending/view', this.selectObj.id]);
    } else {
      this.toastrMsg.warning('View not able');
    }
  }


}
