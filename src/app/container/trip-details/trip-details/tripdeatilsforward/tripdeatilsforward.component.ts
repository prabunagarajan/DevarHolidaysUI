import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/service/common.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';


@Component({
  selector: 'app-tripdeatilsforward',
  templateUrl: './tripdeatilsforward.component.html',
  styleUrls: ['./tripdeatilsforward.component.scss']
})
export class TripdeatilsforwardComponent implements OnInit {


  displayedColumns: string[] = ['serialNo', 'tripNumber', 'createdDate', 'vehicleNumber', 'customerName', 'visitingPlace', 'driverName', 'totalRent', 'status', 'action'];
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
  isLoading: boolean;
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
      status: ['']
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
    this.isLoading = true;
    const tripFormSearchDetails = this.tripFormSearchDetails.value;
    const request = {
      filters: {
        vehicleNumber: tripFormSearchDetails.vehiclenumber ? tripFormSearchDetails.vehiclenumber : '',
        customerName: '',
        customerMobileNumber: '',
        driverName: tripFormSearchDetails.driverName ? tripFormSearchDetails.driverName : '',
        visitingPlace: "",
        status: "FORWARDED"
      },
      paginationSize: pageSize,
      sortField: "modifiedDate",
      pageNo: pageIndex,
      sortOrder: "DESC"
    }
    this.commonService.tripDetailsSearchList(request).subscribe(response => {
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
    const tripFormSearchDetails = this.tripFormSearchDetails.value;
    const request = {
      filters: {
        vehicleNumber: tripFormSearchDetails.vehiclenumber ? tripFormSearchDetails.vehiclenumber : '',
        customerName: '',
        customerMobileNumber: '',
        driverName: tripFormSearchDetails.driverName ? tripFormSearchDetails.driverName : '',
        visitingPlace: "",
        status: tripFormSearchDetails.status ? tripFormSearchDetails.status : 'FORWARDED'
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
      status: '',
    });
    this.pageSize = 10;
    this.getAll();
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
      this.router.navigate(['/container/trip-detail/modification', this.selectObj.id, "forward"]);
    } else {
      this.toastrMsg.error('View not able');
    }
  }

  onView() {
    if (this.selectObj) {
      this.router.navigate(['/container/trip-detail/view', this.selectObj.id, "forward"]);
    } else {
      this.toastrMsg.error('View not able');
    }
  }
  getStatusStyle(status: string): { [key: string]: string } {
    console.log(status);

    switch (status) {
      case 'APPROVED':
        return { 'color': 'green' };
      case 'INPROGRESS':
        return { 'color': 'blue' };
      case 'FORWARDED':
        return { 'color': 'orange' };
      case 'REQUESTFORCLARIFICATION':
        return {
          'color': 'red',
        };
      case 'REJECT':
        return { 'color': 'red' };
      default:
        return { 'color': 'gray' };
    }
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
    doc.text('Trip Details L3', 14, 10);

    // Define table columns with Serial Number
    const columns = ['S.No', 'Trip No', 'Created Date', 'Vehicle Number', 'Customer Name', 'Visiting Place', 'Driver Name', 'Total Rent', 'Status'];

    // Convert list data to an array format with serial numbers
    const rows = this.dataSource.data.map((item, index) => [
      index + 1, // Serial number starts from 1
      item.tripNumber,
      moment(item.createdDate).format('DD-MM-YYYY'),
      String(item.vehicleNumber), // Convert number to string
      String(item.customerName), // Convert number to string
      String(item.visitingPlace), // Convert number to string
      item.driverName,
      item.totalRent,
      item.status
    ]);

    // Add table to the PDF
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: 20
    });

    // Save the PDF
    doc.save('Trip_Details_L3.pdf');
  }
  exportToExcel() {
    const rows = this.dataSource.data.map((item, index) => [
      index + 1, // Serial number starts from 1
      item.tripNumber,
      moment(item.createdDate).format('DD-MM-YYYY'), // Format date
      String(item.vehicleNumber), 
      String(item.customerName),
      String(item.visitingPlace),
      item.driverName,
      item.totalRent,
      item.status
    ]);

    const options = {
      headers: [
        'S.No',
        'Trip Number',
        'Created Date',
        'Vehicle Number',
        'Customer Name',
        'Visiting Place',
        'Driver Name',
        'Total Rent',
        'Status'
      ]
    };
    new ngxCsv(rows, 'Trip_Details_L3', options);
  }
}

