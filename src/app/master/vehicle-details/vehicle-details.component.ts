import { Component, OnInit, ViewChild } from '@angular/core';
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
  constructor(private driverService: MasterService,
    private toaster: ToastrService,
    private router: Router) { }

  ngOnInit() {
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

    this.driverService.driverDetailsGetAllList(request).subscribe(
      (res) => {
        if (res.status === 's') {
          this.dataSource.data = res.data.contents;
          this.totalCounts = res.data.totalElements;
        } else {
          console.error('Failed to fetch driver details');
        }
      },
      (error) => {
        console.error('Error fetching driver details:', error);
      }
    );
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
}