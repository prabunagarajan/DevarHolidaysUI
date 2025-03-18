import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ngxCsv } from 'ngx-csv';
import * as moment from 'moment';
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
  generatePDF() {
    console.log('generatePDF :')
    const doc = new jsPDF();

    // Get page dimensions
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Add Watermark - "DC Holidays"
    doc.setTextColor(200, 200, 200); // Light gray color
    doc.setFontSize(40); // Large font size
    doc.setFont('helvetica', 'bold'); // Bold font

    // Calculate center position
    const textWidth = doc.getTextWidth('DC Holidays');
    const x = (pageWidth - textWidth) / 2;
    const y = pageHeight / 2;

    // Add rotated watermark text
    doc.text('DC Holidays', x, y, { angle: 45 });

    // Reset text color to black for actual content
    doc.setTextColor(0);

    // Title
    doc.setFontSize(14);
    doc.text('Vehicle Details', 14, 10);

    // Define table columns with Serial Number
    const columns = ['S.No', 'Vehicle No', 'Vehicle Name', 'Insurance Date', 'Tax Date', 'Fc Date', 'Polution Date'];

    // Convert list data to an array format with serial numbers
    const rows = this.dataSource.data.map((item, index) => [
      index + 1, // Serial number starts from 1
      item.vehicleNumber,
      String(item.vehicleName), // Convert number to string
      String(item.insuranceDate), // Convert number to string
      String(item.taxDate), // Convert number to string
      item.fcDate,
      item.polutionDate,
    ]);

    // Add table to the PDF
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: 20
    });

    // Save the PDF
    doc.save('Vehicle_Details.pdf');
  }

    exportToExcel() {
      const rows = this.dataSource.data.map((item, index) => [
        index + 1, // Serial number starts from 1
        item.vehicleNumber,
        String(item.vehicleName), // Convert number to string
        String(item.insuranceDate), // Convert number to string
        String(item.taxDate), // Convert number to string
        item.fcDate,
        item.polutionDate,
      ]);
  
      const options = {
        headers: [
          'S.No', 'Vehicle No', 'Vehicle Name', 'Insurance Date', 'Tax Date', 'Fc Date', 'Polution Date'
        ]
      };
      new ngxCsv(rows, 'Vehicle_Details', options);
    }

}