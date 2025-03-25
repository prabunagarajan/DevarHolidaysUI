import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/service/common.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as moment from 'moment';
import { ngxCsv } from 'ngx-csv';
import { MasterListColumns } from 'src/app/config/master-list-columns';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
  public columns = MasterListColumns.triplistcolumns;
  actionKeys: string[] = ['checkbox']; // ['edit', 'delete'] for buttons
  dataSource = new MatTableDataSource(); // Example data source
  totalCount: number = 10;
  pageSize: number = 10;
  selectedRow: any;

  // displayedColumns: string[] = ['serialNo', 'tripNumber', 'createdDate', 'vehicleNumber', 'customerName', 'visitingPlace', 'driverName', 'totalRent', 'status', 'action'];
  viewEnable: boolean;
  editEnable: boolean;
  tripFormSearchDetails: FormGroup;
  public totelCount: number;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  //public pageSize = 10;
  selectObj: any;
  vehicleList: any;
  driverList: any;
  isLoading: boolean;
  tripDetailsCount: any = {};
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
    this.getTripDetailsCount();
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



  getTripDetailsCount() {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const fromDate = firstDay.toISOString().split('T')[0];
    const toDate = lastDay.toISOString().split('T')[0];
    console.log(fromDate, toDate);

    this.commonService.tripdetailsdashboardcount(fromDate, toDate).subscribe(
      (tripdetailsdashboardcountResponse: any) => {
        if (tripdetailsdashboardcountResponse.status === 's') {
          this.tripDetailsCount = tripdetailsdashboardcountResponse.data[0] || {}; // Assign first object from data array
        } else {
          console.warn('Failed to fetch trip details:', tripdetailsdashboardcountResponse.message);
        }
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
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
        status: ""
      },
      paginationSize: pageSize,
      sortField: "modifiedDate",
      pageNo: pageIndex,
      sortOrder: "DESC"
    }
    this.commonService.tripDetailsSearchList(request).subscribe(response => {
      this.isLoading = false;
      if (response.status == 's' && response.data) {
        // const dataSource = response.data.contents.map((v, i) => ({
        //   ...v,
        //   sNo: i + 1
        // }));
        // console.log("dataSource", dataSource);
        // this.dataSource = new MatTableDataSource(dataSource);
        const startIndex = pageIndex * pageSize; // Calculate start index dynamically
        const dataSource = response.data.contents.map((v, i) => ({
          ...v,
          sNo: startIndex + i + 1 // Adjust serial number
        }));
    
        console.log("dataSource", dataSource);
        this.dataSource = new MatTableDataSource(dataSource);
        setTimeout(() => {
          if (this.dataSource.paginator) {
            this.dataSource.paginator.pageIndex = this.paginator.pageIndex;
            this.dataSource.paginator.length = dataSource.length;
          }
        });

        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
        this.totelCount = 0;
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
        status: tripFormSearchDetails.status ? tripFormSearchDetails.status : ''
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
      status: "",
    });
    this.pageSize = 10;
    this.getAll();
  }

  handlePagination(event) {
    const pageIndex = event.currentPage;
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



  onEdit(event: any) {
    console.log(this.selectObj);

    if (this.selectObj && this.selectObj.status === 'REQUESTFORCLARIFICATION') {
      this.router.navigate(['/container/trip-detail/modification', this.selectObj.id]);
    } else {
      this.toastrMsg.error('View not able');
    }
  }

  onView() {
    if (this.selectObj) {
      this.router.navigate(['/container/trip-detail/view', this.selectObj.id]);
    } else {
      this.toastrMsg.error('View not able');
    }
  }


  onChecked(element){
    const selectObj=this.dataSource.data.find((item:any) => item.id === element.id);
    if (selectObj) {
      this.selectObj = selectObj;
      this.viewEnable = true;
      this.editEnable = true;
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

  // generatePDF() {
  //   console.log('generatePDF :')
  //   const doc = new jsPDF();

  //   // Get page dimensions
  //   const pageWidth = doc.internal.pageSize.getWidth();
  //   const pageHeight = doc.internal.pageSize.getHeight();

  //   // Add Watermark - "DC Holidays"
  //   doc.setTextColor(200, 200, 200); // Light gray color
  //   doc.setFontSize(40); // Large font size
  //   doc.setFont('helvetica', 'bold'); // Bold font

  //   // Calculate center position
  //   const textWidth = doc.getTextWidth('DC Holidays');
  //   const x = (pageWidth - textWidth) / 2;
  //   const y = pageHeight / 2;

  //   // Add rotated watermark text
  //   doc.text('DC Holidays', x, y, { angle: 45 });

  //   // Reset text color to black for actual content
  //   doc.setTextColor(0);

  //   // Title
  //   doc.setFontSize(14);
  //   doc.text('Trip Details L1', 14, 10);

  //   // Define table columns with Serial Number
  //   const columns = ['S.No', 'Trip No', 'Created Date', 'Vehicle Number', 'Customer Name', 'Visiting Place', 'Driver Name', 'Total Rent', 'Status'];

  //   // Convert list data to an array format with serial numbers
  //   const rows = this.dataSource.data.map((item, index) => [
  //     index + 1, // Serial number starts from 1
  //     item.tripNumber,
  //     moment(item.createdDate).format('DD-MM-YYYY'),
  //     String(item.vehicleNumber), // Convert number to string
  //     String(item.customerName), // Convert number to string
  //     String(item.visitingPlace), // Convert number to string
  //     item.driverName,
  //     item.totalRent,
  //     item.status
  //   ]);

  //   // Add table to the PDF
  //   autoTable(doc, {
  //     head: [columns],
  //     body: rows,
  //     startY: 20
  //   });

  //   // Save the PDF
  //   doc.save('Trip_Details_L1.pdf');
  // }
  // exportToExcel() {
  //   const rows = this.dataSource.data.map((item, index) => [
  //     index + 1, // Serial number starts from 1
  //     item.tripNumber,
  //     moment(item.createdDate).format('DD-MM-YYYY'), // Format date
  //     String(item.vehicleNumber),
  //     String(item.customerName),
  //     String(item.visitingPlace),
  //     item.driverName,
  //     item.totalRent,
  //     item.status
  //   ]);

  //   const options = {
  //     headers: [
  //       'S.No', 'Trip No', 'Created Date', 'Vehicle Number', 'Customer Name', 'Visiting Place', 'Driver Name', 'Total Rent', 'Status'
  //     ]
  //   };
  //   new ngxCsv(rows, 'Trip_Details_L1', options);
  // }

}


