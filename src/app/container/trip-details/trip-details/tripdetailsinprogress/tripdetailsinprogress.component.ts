import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { autoTable } from 'jspdf-autotable';
import * as moment from 'moment';
import { ngxCsv } from 'ngx-csv';
import { ToastrService } from 'ngx-toastr';
import { MasterListColumns } from 'src/app/config/master-list-columns';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-tripdetailsinprogress',
  templateUrl: './tripdetailsinprogress.component.html',
  styleUrls: ['./tripdetailsinprogress.component.scss']
})
export class TripdetailsinprogressComponent implements OnInit {

  public columns = MasterListColumns.tripListInprogressColumns;
  actionKeys: string[] = ['checkbox']; // ['edit', 'delete'] for buttons
  dataSource = new MatTableDataSource(); // Example data source
  totalCount: number = 10;
  pageSize: number = 10;

  displayedColumns: string[] = ['serialNo', 'tripNumber', 'createdDate', 'vehicleNumber', 'customerName', 'visitingPlace', 'driverName', 'totalRent', 'status', 'action'];
  viewEnable: boolean;
  editEnable: boolean;
  tripFormSearchDetails: FormGroup;
  totelCount = 0;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
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
      status: [''],
      tripNo: [''],
      fromDate: [''],
      toDate: [''],
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
        driverName: tripFormSearchDetails.driverName ? tripFormSearchDetails.driverName : '',
        tripNumber: tripFormSearchDetails.tripNo ? tripFormSearchDetails.tripNo : '',
        fromDate: tripFormSearchDetails.fromDate
          ? moment(tripFormSearchDetails.fromDate).format('YYYY-MM-DD')
          : '',
        toDate: tripFormSearchDetails.toDate
          ? moment(tripFormSearchDetails.toDate).format('YYYY-MM-DD') : '',
        driverMobileNumber: tripFormSearchDetails.driverNumber ? tripFormSearchDetails.driverNumber : '',
        vehicleNumber: tripFormSearchDetails.vehiclenumber ? tripFormSearchDetails.vehiclenumber : '',
        status: tripFormSearchDetails.status ? tripFormSearchDetails.status : 'INPROGRESS'
      },
      paginationSize: pageSize,
      sortField: "modifiedDate",
      pageNo: pageIndex,
      sortOrder: "DESC"
    }
    this.commonService.tripDetailsSearchList(request).subscribe(response => {
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
    });
  }
  search() {
    this.getAll();
  }

  onclear() {
    this.tripFormSearchDetails.patchValue({
      driverName: '',
      driverNumber: '',
      vehiclenumber: '',
      status: '',
      tripNo: '',
      fromDate: '',
      toDate: '',
    });
    this.pageSize = 10;
    this.getAll();
  }

  handlePagination(event) {
    const pageIndex = event.currentPage;
    const pageSize = event.pageSize
    this.getAll(pageIndex, pageSize);
  }

  onChecked(element) {
    const selectObj = this.dataSource.data.find((findElement: any) => findElement.id == element.id);
    if (selectObj) {
      this.selectObj = selectObj;
      this.viewEnable = true;
      this.editEnable = true;
    }

  }

  onEdit() {
    if (this.selectObj) {
      this.router.navigate(['/container/trip-detail/modification', this.selectObj.id, "approved"]);
    } else {
      this.toastrMsg.error('View not able');
    }
  }

  onView() {
    if (this.selectObj) {
      this.router.navigate(['/container/trip-detail/view', this.selectObj.id, "approved"]);
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
    doc.text('Trip Details L2', 14, 10);

    // Define table columns with Serial Number
    const columns = ['S.No', 'Trip No', 'Created Date', 'Vehicle Number', 'Customer Name', 'Visiting Place', 'Driver Name', 'Total Rent', 'Status'];

    // Convert list data to an array format with serial numbers
    let rows = [];
    this.dataSource.data.forEach((element: any, i: number) => {
      rows[i] = [];
      rows[i].push(i + 1);
      rows[i].push(element ? moment(element.createdDate).format('DD-MM-YYYY') : '')
      rows[i].push(element ? element.vehicleNumber : '')
      rows[i].push(element ? element.customerName : '')
      rows[i].push(element ? element.visitingPlace : '')
      rows[i].push(element ? element.driverName : '')
      rows[i].push(element ? element.totalRent : '')
      rows[i].push(element ? element.status : '')
    });

    // Add table to the PDF
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: 20
    });

    // Save the PDF
    doc.save('Trip_Details_L2.pdf');
  }
  exportToExcel() {
    let rows = [];
    this.dataSource.data.forEach((element: any, i: number) => {
      rows[i] = [];
      rows[i].push(i + 1);
      rows[i].push(element ? moment(element.createdDate).format('DD-MM-YYYY') : '')
      rows[i].push(element ? element.vehicleNumber : '')
      rows[i].push(element ? element.customerName : '')
      rows[i].push(element ? element.visitingPlace : '')
      rows[i].push(element ? element.driverName : '')
      rows[i].push(element ? element.totalRent : '')
      rows[i].push(element ? element.status : '')
    });

    const options = {
      headers: [
        'S.No', 'Trip No', 'Created Date', 'Vehicle Number', 'Customer Name', 'Visiting Place', 'Driver Name', 'Total Rent', 'Status'
      ]
    };
    new ngxCsv(rows, 'Trip_Details_L2', options);
  }

}

