import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/service/common.service';
import { MasterListColumns } from 'src/app/config/master-list-columns';

@Component({
  selector: 'app-trip-details-at',
  templateUrl: './trip-details-at.component.html',
  styleUrls: ['./trip-details-at.component.scss']
})
export class TripDetailsAtComponent implements OnInit {
  public columns = MasterListColumns.triplistcolumns;
  actionKeys: string[] = ['checkbox']; // Example action keys
  dataSource = new MatTableDataSource(); // Example data source
  actionBtnBasedOnCond: any = {};
  totalCount: number = 10;
  pageSize: number = 10;

  constructor(public commonService: CommonService) { }
  ngOnInit() {
    // Simulating API call or dynamic initialization
    const request = {
      filters: {
        vehicleNumber: '',
        customerName: '',
        customerMobileNumber: '',
        driverName: '',
        visitingPlace: "",
        status: ""
      },
      paginationSize: 10,
      sortField: "modifiedDate",
      pageNo: 0,
      sortOrder: "DESC"
    }
    this.commonService.tripDetailsSearchList(request).subscribe(response => {
      if (response.status == 's' && response.data) {
        this.dataSource = new MatTableDataSource(response.data.contents);
        this.totalCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    })
  }

  handlePagination(event: any) {
    console.log('Pagination event:', event);
  }

  onChecked(event: any) {
    console.log('Checkbox event:', event);
  }

}
