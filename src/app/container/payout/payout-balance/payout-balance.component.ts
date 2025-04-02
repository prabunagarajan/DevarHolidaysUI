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
  selector: 'app-payout-balance',
  templateUrl: './payout-balance.component.html',
  styleUrls: ['./payout-balance.component.scss']
})
export class PayoutBalanceComponent implements OnInit {


  public columns = MasterListColumns.payOutBalanceListColumns;
  actionKeys: string[] = ['checkbox']; // ['edit', 'delete'] for buttons
  dataSource = new MatTableDataSource(); // Example data source
  totalCount: number = 10;
  public pageSize: number = 10;


  displayedColumns: string[] = ['serialNo', 'date', 'name', 'walletId', 'amount', 'action'];
  viewEnable: boolean;
  editEnable: boolean;
  payoutBalanceFormSearchDetails: FormGroup;
  totelCount = 0;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  selectObj: any;
  vehicleList: any;
  driverList: any;
  transactionList: any;
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router,
    private toastrMsg: ToastrService
  ) { }

  ngOnInit() {

    this.payoutBalanceFormSearchDetails = this.formBuilder.group({
      driverName: [''],
      driverMobileNumber: ['']
    })
    this.getAll();
    this.commonService.activeDriver().subscribe(driverResponse => {
      if (driverResponse.status == 's') {
        this.driverList = driverResponse.data;
        console.log(this.driverList);

      } else {
        this.driverList = [];
      }
    });
  }


  getAll(pageIndex = 0, pageSize = this.pageSize) {
    const paymentPendingFormSearchDetails = this.payoutBalanceFormSearchDetails.value;
    console.log(paymentPendingFormSearchDetails);

    const request = {
      "filters": {
        "walletId": paymentPendingFormSearchDetails.driverMobileNumber ? paymentPendingFormSearchDetails.driverMobileNumber : ''
      },
      "paginationSize": pageSize,
      "sortField": "modifiedDate",
      "pageNo": pageIndex,
      "sortOrder": "DESC"
    }

    this.commonService.payoutBalance(request).subscribe(response => {
      if (response.status === 's' && response.data) {
        const serialNumber = pageIndex * pageSize; // Calculate start index dynamically
        const dataSource = response.data.map((v, i) => ({
          ...v,
          sNo: serialNumber + i + 1 // Adjust serial number
        }));
        this.dataSource = new MatTableDataSource(dataSource);
        this.transactionList = response.data.contents || []; // Adjusted to access 'contents' properly
        this.totalCount = response.data.totalCount || 0; // Corrected variable name and assumed 'totalCount' exists in the response
      } else {
        this.dataSource = new MatTableDataSource();
        this.transactionList = [];
        this.totalCount = 0; // Reset total count if no data is found
      }
    });
  }


  search() {
    const driverElement = this.driverList.find(element => element.mobileNumber == this.payoutBalanceFormSearchDetails.controls.driverName.value);
    console.log('driverElement :', driverElement)
    if (driverElement) {
      this.payoutBalanceFormSearchDetails.patchValue({
        driverMobileNumber: driverElement.mobileNumber
      });
      this.getAll();
    }


  }
  onclear() {
    this.payoutBalanceFormSearchDetails.patchValue({
      driverName: '',
      driverMobileNumber: '',
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
      console.log(selectObj)
      this.selectObj = selectObj;
      this.viewEnable = true;
      this.editEnable = true;
    }
  }

  onEdit() {
    if (this.selectObj) {
      this.router.navigate(['/container/trip-detail/modification/', this.selectObj.mobileNumber]);
    } else {
      this.toastrMsg.error('View not able');
    }
  }

  onView() {
    if (this.selectObj) {
      this.router.navigate(['/container/payout/payment-history/', this.selectObj.walletId]);
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
    doc.text('Pending Details', 14, 10);

    // Define table columns with Serial Number
    const columns = ['S.No', 'date', 'name', 'walletId', 'amount'];

    // Convert list data to an array format with serial numbers
    let rows = [];
    this.dataSource.data.forEach((element: any, i: number) => {
      rows[i] = [];
      rows[i].push(i + 1);
      rows[i].push(element ? moment(element.createdDate).format('DD-MM-YYYY') : '')
      rows[i].push(element ? element.walletId : '')
      rows[i].push(element ? element.name : '')
      rows[i].push(element ? element.amount : '')
    });

    // Add table to the PDF
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: 20
    });

    // Save the PDF
    doc.save('Pay Out Balance.pdf');
  }
  exportToExcel() {
    let rows = [];
    this.dataSource.data.forEach((element: any, i: number) => {
      rows[i] = [];
      rows[i].push(i + 1);
      rows[i].push(element ? moment(element.createdDate).format('DD-MM-YYYY') : '')
      rows[i].push(element ? element.walletId : '')
      rows[i].push(element ? element.name : '')
      rows[i].push(element ? element.amount : '')
    });

    const options = {
      headers: [
        'S.No', 'date', 'name', 'walletId', 'amount'
      ]
    };
    new ngxCsv(rows, 'Pay_Out_Balance', options);
  }
}
