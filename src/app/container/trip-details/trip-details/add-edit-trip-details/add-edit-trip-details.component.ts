import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-trip-details',
  templateUrl: './add-edit-trip-details.component.html',
  styleUrls: ['./add-edit-trip-details.component.scss']
})
export class AddEditTripDetailsComponent implements OnInit {
  screenName = 'Add';
  tripFormDetails: FormGroup;
  formSubmitted: boolean;
  btnLoder: boolean;
  @ViewChild('submitPopUp', { static: false }) submitPopUp;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tripFormDetails = this.formBuilder.group({
      createdDate: [''],
      createdBy: [''],
      modifiedDate: [''],
      modifiedBy: [''],
      vehicleNumber: ['', Validators.required],
      date: ['', Validators.required],
      customerName: ['', Validators.required],
      customerMobileNumber: ['', Validators.required],
      driverName: ['', Validators.required],
      startingKM: ['', Validators.required],
      closingKM: ['', Validators.required],
      usedKM: ['', Validators.required],
      startingTime: ['', Validators.required],
      closingTime: ['', Validators.required],
      totalTime: ['', Validators.required],
      acOrNonAc: ['', Validators.required],
      acStartingKM: ['', Validators.required],
      acClosingKM: ['', Validators.required],
      usedAcKM: ['', Validators.required],
      acNote: ['', Validators.required],
      visitingPlace: ['', Validators.required],
      advanceType: ['', Validators.required],
      advanceAmount: ['', Validators.required],
      dayRent: ['', Validators.required],
      toll: ['', Validators.required],
      totalRent: ['', Validators.required],
      diesel: ['', Validators.required],
      driverPayment: ['', Validators.required],
      permitAmount: ['', Validators.required],
      paymentType: ['', Validators.required],
      receivedAmount: ['', Validators.required],
      pendingAmount: ['', Validators.required],
      balanceAmount: ['', Validators.required],
      profitAmount: ['', Validators.required],
      submittedBy: ['', Validators.required],
      status: [''],
      verifiedByManager: ['', Validators.required],
      verifiedByProprietor: ['', Validators.required]
    });
  }

  get tripForm(): { [key: string]: AbstractControl } {
    return this.tripFormDetails.controls;
  }

  submit(tripFormDetails) {
    console.log("Form Validity:", tripFormDetails.valid);
    if (!tripFormDetails.valid) {
      this.formSubmitted = true;
    } else {
      this.submitPopUp.show();
    }

  }

  finalSubmit() {
    this.addTripDetails();
  }

  addTripDetails() {
    const tripFormDetails = this.tripFormDetails.value;
    const addTripDetailsRequest = {
      acClosingKM: tripFormDetails.acClosingKM || '',
      acNote: tripFormDetails.acNote || '',
      acOrNonAc: tripFormDetails.acOrNonAc || '',
      acStartingKM: tripFormDetails.acStartingKM || '',
      advanceAmount: tripFormDetails.advanceAmount || '',
      advanceType: tripFormDetails.advanceType || '',
      balanceAmount: tripFormDetails.balanceAmount || '',
      closingKM: tripFormDetails.closingKM || '',
      closingTime: tripFormDetails.closingTime || '',
      customerMobileNumber: tripFormDetails.customerMobileNumber || '',
      customerName: tripFormDetails.customerName || '',
      date: tripFormDetails.date || '',
      dayRent: tripFormDetails.dayRent || '',
      diesel: tripFormDetails.diesel || '',
      driverName: tripFormDetails.driverName || '',
      driverPayment: tripFormDetails.driverPayment || '',
      paymentType: tripFormDetails.paymentType || '',
      pendingAmount: tripFormDetails.pendingAmount || '',
      permitAmount: tripFormDetails.permitAmount || '',
      profitAmount: tripFormDetails.profitAmount || '',
      receivedAmount: tripFormDetails.receivedAmount || '',
      startingKM: tripFormDetails.startingKM || '',
      startingTime: tripFormDetails.startingTime || '',
      status: tripFormDetails.status || '',
      submittedBy: tripFormDetails.submittedBy || '',
      toll: tripFormDetails.toll || '',
      totalRent: tripFormDetails.totalRent || '',
      totalTime: tripFormDetails.totalTime || '',
      usedAcKM: tripFormDetails.usedAcKM || '',
      usedKM: tripFormDetails.usedKM || '',
      vehicleNumber: tripFormDetails.vehicleNumber || '',
      visitingPlace: tripFormDetails.visitingPlace || ''
    }

    console.log('addTripDetailsRequest :', JSON.stringify(addTripDetailsRequest));

  }

  startingKM(startingKMElemant) {
    console.log('startingKMElemant :', startingKMElemant);
    if (startingKMElemant) {
      if (this.tripFormDetails.controls.closingKM.value) {
        const usedKM = parseFloat(startingKMElemant) + parseFloat(this.tripFormDetails.controls.closingKM.value);
        this.tripFormDetails.patchValue({
          usedKM: usedKM
        });
      } else {
        this.tripFormDetails.patchValue({
          usedKM: 0
        });
      }
    } else {
      this.tripFormDetails.patchValue({
        usedKM: 0
      });
    }
  }
  closeingKM(closingKMElemant) {

    console.log('closingKMElemant :', closingKMElemant);
    if (closingKMElemant) {
      if (this.tripFormDetails.controls.closingKM.value) {
        const usedKM = parseFloat(closingKMElemant) + parseFloat(this.tripFormDetails.controls.startingKM.value);
        this.tripFormDetails.patchValue({
          usedKM: usedKM
        });
      } else {
        this.tripFormDetails.patchValue({
          usedKM: 0
        });
      }
    } else {
      this.tripFormDetails.patchValue({
        usedKM: 0
      });
    }
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

    // Restrict non-numeric input (0-9: keyCode 48-57)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }


}
