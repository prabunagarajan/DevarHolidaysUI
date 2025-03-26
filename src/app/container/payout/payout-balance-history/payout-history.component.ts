import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { autoTable } from 'jspdf-autotable';
import * as moment from 'moment';
import { ngxCsv } from 'ngx-csv';
import { ToastrService } from 'ngx-toastr';
import { MasterListColumns } from 'src/app/config/master-list-columns';
import { CommonService } from 'src/app/service/common.service';
@Component({
  selector: 'app-payout-history',
  templateUrl: './payout-history.component.html',
  styleUrls: ['./payout-history.component.scss']
})
export class payoutHistoryComponent implements OnInit {

  public columns = MasterListColumns.payOutBalanceHistryListColumns;
  actionKeys: string[] = ['checkbox']; // ['edit', 'delete'] for buttons
  dataSource = new MatTableDataSource(); // Example data source
  totalCount: number = 10;
  public pageSize: number = 10;

  displayedColumns: string[] = ['serialNo', 'walletId', 'createdDate', 'applicationNumber', 'amount', 'transactionName',];
  viewEnable: boolean;
  editEnable: boolean;
  paymentPendingFormSearchDetails: FormGroup;
  totelCount = 0;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  selectObj: any;
  vehicleList: any;
  driverList: any;
  transactionList: any;
  walletId: string;
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router,
    private toastrMsg: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.walletId = params.get('id');
      console.log("Payment History ID:", this.walletId);
    });
    this.paymentPendingFormSearchDetails = this.formBuilder.group({
      driverName: [''],
      createdDate: [''],
      applicationNumber: [''],
      transactionName: ['']
    })
    if (this.walletId) {
      this.getBalanceHistoryParticularSearch();
    }
    else {
      this.getAll();
    }


    this.commonService.activeDriver().subscribe(driverResponse => {
      if (driverResponse.status == 's') {
        this.driverList = driverResponse.data;
        console.log(this.driverList);

      } else {
        this.driverList = [];
      }
    });
  }



  getBalanceHistoryParticularSearch() {
    const request = {
      filters: {
        walletId: this.walletId,
      },
      paginationSize: 10,
      sortField: "modifiedDate",
      pageNo: 0,
      sortOrder: "DESC"
    }
    this.commonService.payoutBalanceHistory(request).subscribe(response => {
      if (response.status === 's' && response.data) {
        const pageIndex = request.pageNo; 
        const pageSize = request.paginationSize; 
        const serialNumber = pageIndex * pageSize; 

        const dataSource = response.data.contents.map((v, i) => ({
            ...v,
            sNo: serialNumber + i + 1 
        }));

        this.dataSource = new MatTableDataSource(dataSource);
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    });
  }

  getAll(pageIndex = 0, pageSize = this.pageSize) {
    const paymentPendingFormSearchDetails = this.paymentPendingFormSearchDetails.value;
    const request = {
      filters: {
        walletId: paymentPendingFormSearchDetails.driverName ? paymentPendingFormSearchDetails.driverName : '',
        applicationNumber: paymentPendingFormSearchDetails.applicationNumber ? paymentPendingFormSearchDetails.applicationNumber : '',
        transactionName: paymentPendingFormSearchDetails.transactionName ? paymentPendingFormSearchDetails.transactionName : '',
      },
      paginationSize: pageSize,
      sortField: "modifiedDate",
      pageNo: pageIndex,
      sortOrder: "DESC"
    }
    this.commonService.payoutBalanceHistory(request).subscribe(response => {
      if (response.status == 's' && response.data) {
        const serialNumber = pageIndex * pageSize; // Calculate start index dynamically
        const dataSource = response.data.contents.map((v, i) => ({
          ...v,
          sNo: serialNumber + i + 1 // Adjust serial number
        }));
        this.dataSource = new MatTableDataSource(dataSource);
        this.transactionList = response.data.contents;
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    })
  }

  search() {
    const paymentPendingFormSearchDetails = this.paymentPendingFormSearchDetails.value;
    console.log(paymentPendingFormSearchDetails);

    const request = {
      filters: {
        walletId: paymentPendingFormSearchDetails.driverName ? paymentPendingFormSearchDetails.driverName : '',
        applicationNumber: paymentPendingFormSearchDetails.applicationNumber ? paymentPendingFormSearchDetails.applicationNumber : '',
        transactionName: paymentPendingFormSearchDetails.transactionName ? paymentPendingFormSearchDetails.transactionName : '',
      },
      paginationSize: 10,
      sortField: "modifiedDate",
      pageNo: 0,
      sortOrder: "DESC"
    }
    this.commonService.payoutBalanceHistory(request).subscribe(response => {
      if (response.status === 's' && response.data) {
        this.dataSource = new MatTableDataSource(response.data.contents);
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    });
  }
  onclear() {
    this.paymentPendingFormSearchDetails.patchValue({
      driverName: '',
      createdDate: '',
      applicationNumber: '',
      transactionName: '',
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
      this.router.navigate(['/container/trip-detail/modification/', this.selectObj.id, "pendingpayment"]);
    } else {
      this.toastrMsg.error('View not able');
    }
  }

  onView() {
    if (this.selectObj) {
      this.router.navigate(['/container/trip-detail/view', this.selectObj.id, "pendingpayment"]);
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

  /*  generatePDF() {
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
     doc.text('Pending Details', 14, 10);
 
     // Define table columns with Serial Number
     const columns = ['S.No', 'WalletId', 'Created Date', 'Application Number', 'Amount', 'Transaction Name',];
 
     // Convert list data to an array format with serial numbers
     const rows = this.dataSource.data.map((item, index) => [
       index + 1, // Serial number starts from 1
       item.walletId,
       moment(item.createdDate).format('DD-MM-YYYY'),
       String(item.applicationNumber), // Convert number to string
       item.amount,
       String(item.transactionName), // Convert number to string
 
     ]);
 
     // Add table to the PDF
     autoTable(doc, {
       head: [columns],
       body: rows,
       startY: 20
     });
 
     // Save the PDF
     doc.save('PaymentDetails.pdf');
   }
   exportToExcel() {
     const rows = this.dataSource.data.map((item, index) => [
       index + 1, // Serial number starts from 1
       item.walletId,
       moment(item.createdDate).format('DD-MM-YYYY'),
       String(item.applicationNumber), // Convert number to string
       item.amount,
       String(item.transactionName), // Convert number to string
 
     ]);
 
     const options = {
       headers: [
         'S.No', 'Wallet Id', 'Created Date', 'Application Number', 'Amount', 'Transaction Name'
       ]
     };
     new ngxCsv(rows, 'Payment_Details', options);
   } */
}
