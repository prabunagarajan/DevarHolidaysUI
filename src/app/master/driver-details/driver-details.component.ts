import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from 'src/app/service/master.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['serialNo', 'name', 'mobileNumber', 'drivingLicenseNumber', 'aadharNumber', 'district', 'status', 'action'];
  dataSource: MatTableDataSource<any>;
  viewEnable: boolean;
  editEnable: boolean;
  selectObj: any;
  driverFormSearchDetails: FormGroup;
  totelCount = 0;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  public pageSize = 10;

  constructor(
    private router: Router,
    private masterService: MasterService,
    private toastrMsg: ToastrService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.driverFormSearchDetails = this.formBuilder.group({
      aadharNumber: [''],
      drivingLicenseNumber: [''],
      mobileNumber: [''],
      driverName: ['']
    });
    this.getAll();
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  getAll(pageIndex = 0, pageSize = this.pageSize) {
    const driverFormSearchDetails = this.driverFormSearchDetails.value;
    const request = {
      filters: {
        aadharNumber: driverFormSearchDetails.aadharNumber ? driverFormSearchDetails.aadharNumber : '',
        drivingLicenseNumber: driverFormSearchDetails.drivingLicenseNumber ? driverFormSearchDetails.drivingLicenseNumber : '',
        mobileNumber: driverFormSearchDetails.mobileNumber ? driverFormSearchDetails.mobileNumber : '',
        name: driverFormSearchDetails.name ? driverFormSearchDetails.name : '',
      },
      paginationSize: pageSize,
      sortField: "modifiedDate",
      pageNo: pageIndex,
      sortOrder: "DESC"
    }
    this.masterService.driverDetailsSearchList(request).subscribe(response => {
      if (response.status == 's' && response.data) {
        this.dataSource = new MatTableDataSource(response.data.contents);
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    })
  }

  onclear() {
    this.driverFormSearchDetails.patchValue({
      aadharNumber: '',
      drivingLicenseNumber: '',
      mobileNumber: '',
      name: ''
    });
    const request = {
      filters: {
        aadharNumber: '',
        drivingLicenseNumber: '',
        mobileNumber: '',
        name: ''
      },
      paginationSize: 10,
      sortField: "modifiedDate",
      pageNo: 0,
      sortOrder: "DESC"
    }

    this.masterService.driverDetailsSearchList(request).subscribe(response => {
      if (response.status === 's' && response.data) {
        this.dataSource = new MatTableDataSource(response.data.contents);
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    });
  }

  search() {

    const driverFormSearchDetails = this.driverFormSearchDetails.value;
    const request = {
      filters: {
        aadharNumber: driverFormSearchDetails.aadharNumber ? driverFormSearchDetails.aadharNumber : '',
        drivingLicenseNumber: driverFormSearchDetails.drivingLicenseNumber ? driverFormSearchDetails.drivingLicenseNumber : '',
        mobileNumber: driverFormSearchDetails.mobileNumber ? driverFormSearchDetails.mobileNumber : '',
        name: driverFormSearchDetails.name ? driverFormSearchDetails.name : '',
      },
      paginationSize: 10,
      sortField: "modifiedDate",
      pageNo: 0,
      sortOrder: "DESC"
    }

    this.masterService.driverDetailsSearchList(request).subscribe(response => {
      if (response.status === 's' && response.data) {
        this.dataSource = new MatTableDataSource(response.data.contents);
        this.totelCount = response.data.totalElements;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    });
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
      this.router.navigate(['/master/driver-detail/modification', this.selectObj.id]);
    } else {
      this.toastrMsg.error('View not able');
    }
  }

  onView() {
    if (this.selectObj) {
      this.router.navigate(['/master/driver-detail/view', this.selectObj.id]);
    } else {
      this.toastrMsg.error('View not able');
    }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  pageEvent(event) {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize
    this.getAll(pageIndex, pageSize);
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
      doc.text('Driver Details', 14, 10);
    
      // Define table columns with Serial Number
      const columns = ['S.No', 'Name', 'Mobile Number', 'Driving License Number', 'Aadhar Number', 'District'];
    
      // Convert list data to an array format with serial numbers
      const rows = this.dataSource.data.map((item, index) => [
        index + 1, // Serial number starts from 1
        item.name,
        String(item.mobileNumber), // Convert number to string
        String(item.drivingLicenseNumber), // Convert number to string
        String(item.aadharNumber), // Convert number to string
        item.district
      ]);
    
      // Add table to the PDF
      autoTable(doc, {
        head: [columns],
        body: rows,
        startY: 20
      });
    
      // Save the PDF
      doc.save('Driver_Details.pdf');
    }
    
    
    
} 