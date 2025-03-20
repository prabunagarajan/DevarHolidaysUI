import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-add-driver-payment',
  templateUrl: './add-driver-payment.component.html',
  styleUrls: ['./add-driver-payment.component.scss']
})
export class AddDriverPaymentComponent implements OnInit {
  driverPaymentFormDetails: FormGroup;
  driverList: any[] = [];
  @ViewChild('submitPopUp', { static: false }) submitPopUp;
  driverPaymentFormErrorFlag: boolean;
  maxDate = moment();
  btnLoder: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private toastrMsg: ToastrService,
    private router: Router
  ) { }
  ngOnInit() {
    this.commonService.activeDriver().subscribe(driverResponse => {
      if (driverResponse.status == 's') {
        this.driverList = driverResponse.data;
      } else {
        this.driverList = [];
      }
    });
    this.driverPaymentFormDetails = this.formBuilder.group({
      wagesOrAdvance: ['', Validators.required],
      driverName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      monthlySalary: ['0', Validators.required],
      paymentDate: ['', Validators.required],
      salaryType: ['', Validators.required],
      remarks: ['', Validators.required]
    })
  }
  getMobileNumber(driverName) {
    if (driverName) {
      const driverObj = this.driverList.find(element => element.name == driverName);
      if (driverObj) {
        this.driverPaymentFormDetails.patchValue({
          mobileNumber: driverObj ? driverObj.mobileNumber : ''
        })
      }
    }
  }
  submit(driverPaymentFormDetails) {
    console.log('driverPaymentFormDetails :', driverPaymentFormDetails.value);

    if (!driverPaymentFormDetails.valid) {
      this.driverPaymentFormErrorFlag = true;
    } else {
      this.submitPopUp.show();
    }

  }

  finalSubmit() {
    const driverPaymentFormDetails = this.driverPaymentFormDetails.value;
    const paymentDate = moment(driverPaymentFormDetails.paymentDate.startDate).format('YYYY-MM-DD');

    const finalSubmitRequest = {
      createdBy: 0,
      dailyWagesOrAdvance: +driverPaymentFormDetails.wagesOrAdvance || '',
      driverName: driverPaymentFormDetails.driverName || '',
      mobileNumber: +driverPaymentFormDetails.mobileNumber || '',
      monthlySalary: +driverPaymentFormDetails.monthlySalary || '',
      paymentDate: paymentDate || '',
      remarks: driverPaymentFormDetails.remarks || '',
      salaryType: driverPaymentFormDetails.salaryType || ''
    }
    this.btnLoder = true;
    this.commonService.driverPaymentSubmit(finalSubmitRequest).subscribe(response => {
      this.btnLoder = false;
      if (response.status == 's') {
        this.toastrMsg.success(response.userDisplayMesg);
        this.submitPopUp.hide();
        this.router.navigate(['/container/driver-payment/list'])
      } else {
        this.toastrMsg.error(response.userDisplayMesg);
      }
    })
  }

  numbersOnly(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;

    // Allow: Backspace (8), Delete (46), Arrow keys (37, 39), Tab (9), Enter (13)
    if (
      charCode === 8 ||  // Backspace
      charCode === 46 || // Delete
      charCode === 37 || // Left Arrow
      charCode === 39 || // Right Arrow
      charCode === 9 ||  // Tab
      charCode === 13    // Enter
    ) {
      return; // Allow these keys
    }

    // Allow only numeric keys (0-9 from both top row and numpad)
    if (
      (charCode < 48 || charCode > 57) &&  // Top row numbers (0-9)
      (charCode < 96 || charCode > 105)    // Numpad numbers (0-9)
    ) {
      event.preventDefault(); // Restrict other keys
    }
  }
  get driverPaymentForm() {
    return this.driverPaymentFormDetails.controls;
  }
}
