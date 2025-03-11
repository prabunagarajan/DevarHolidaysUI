import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/service/common.service';

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
  acValidationFlag: boolean;
  maxDate = new Date();
  vehicleList: any[];
  driverList: any;
  getTripDetails: any;
  tripId = '';
  forwardApproveBtnShow: boolean;
  approveBtnShow: boolean;
  tripStatus: any;
  constructor(
    private formBuilder: FormBuilder,
    private toastrMsg: ToastrService,
    private commonService: CommonService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(tripIdResponse => {
      if (tripIdResponse.id && tripIdResponse.status == 'forward') {
        this.tripId = tripIdResponse.id;
        console.log("FIRST METHOD");
        this.tripStatus = tripIdResponse.status;
        this.getTripDetailsForward(tripIdResponse.id);
        this.forwardApproveBtnShow = true;
      }
      else if (tripIdResponse.id && tripIdResponse.status == 'approved') {
        this.tripId = tripIdResponse.id;
        this.tripStatus = tripIdResponse.status;
        this.getTripDetailsApprove(tripIdResponse.id);
        this.approveBtnShow = true;
        console.log("Second METHOD");
      }
      else if (tripIdResponse.id) {
        console.log("THIRD METHOD");
        this.tripId = tripIdResponse.id;
        this.getTripDetailsForm(tripIdResponse.id);
      }
    })

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
      advanceAmount: ['0', Validators.required],
      dayRent: ['0', Validators.required],
      toll: ['0', Validators.required],
      totalRent: ['', Validators.required],
      diesel: ['', Validators.required],
      driverPayment: ['', Validators.required],
      permitAmount: ['0', Validators.required],
      paymentType: ['', Validators.required],
      receivedAmount: ['', Validators.required],
      pendingAmount: ['', Validators.required],
      // balanceAmount: ['', Validators.required],
      profitAmount: ['', Validators.required],
      submittedBy: ['', Validators.required],
      status: [''],
      // verifiedByManager: ['', Validators.required],
      // verifiedByProprietor: ['', Validators.required]
    });
    this.tripFormDetails.get('startingTime').valueChanges.subscribe(() => {
      this.calculateTotalHours();
    });
    this.tripFormDetails.get('closingTime').valueChanges.subscribe(() => {
      this.calculateTotalHours();
    });

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

  calculateTotalHours() {
    const startTime = this.tripFormDetails.get('startingTime').value;
    const closingTime = this.tripFormDetails.get('closingTime').value;
    if (startTime && closingTime) {
      const start = new Date(startTime);
      const end = new Date(closingTime);

      if (start < end) {
        const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
        this.tripFormDetails.patchValue({ totalTime: diff.toFixed(2) });
      } else {
        this.tripFormDetails.patchValue({ totalTime: 'Invalid Time' });
        this.toastrMsg.error("Please Select Correct Date");
      }
    }
  }

  get tripForm() {
    return this.tripFormDetails.controls;
  }

  submit(tripFormDetails) {
    console.log(tripFormDetails.value);

    if (this.tripFormDetails.invalid) {
      this.formSubmitted = true;
    } else if (tripFormDetails.value.acOrNonAc == 'AC' && tripFormDetails.value.startingKM >= tripFormDetails.value.closingKM) {
      this.toastrMsg.warning('Please enter Starting KM greater than Closing KM');
    } else if (tripFormDetails.value.acOrNonAc == 'AC' && tripFormDetails.value.acStartingKM >= tripFormDetails.value.acClosingKM) {
      this.toastrMsg.warning('Please enter AC Starting KM greater than AC Closing KM');
    } else {
      this.submitPopUp.show();
    }
  }

  acDetect(event) {
    if (event === 'Non-AC') {
      this.tripFormDetails.controls['usedAcKM'].clearValidators();
      this.tripFormDetails.controls["usedAcKM"].updateValueAndValidity();
      this.tripFormDetails.controls['acStartingKM'].clearValidators();
      this.tripFormDetails.controls["acStartingKM"].updateValueAndValidity();
      this.tripFormDetails.controls['acClosingKM'].clearValidators();
      this.tripFormDetails.controls["acClosingKM"].updateValueAndValidity();
      this.acValidationFlag = true;
    } else {
      this.tripFormDetails.controls['usedAcKM'].setValidators([Validators.required]);
      this.tripFormDetails.controls["usedAcKM"].updateValueAndValidity();
      this.tripFormDetails.controls['acStartingKM'].setValidators([Validators.required]);
      this.tripFormDetails.controls["acStartingKM"].updateValueAndValidity();
      this.tripFormDetails.controls['acClosingKM'].setValidators([Validators.required]);
      this.tripFormDetails.controls["acClosingKM"].updateValueAndValidity();
      this.acValidationFlag = false;
    }
  }

  finalSubmit() {
    if (this.tripId) {
      this.updateTripDetails();
    } else {
      this.addTripDetails();
    }
  }


  forwardApprove() {
    const req = {
      "id": this.tripId,
      "status": "FORWARDED"
    }
    this.commonService.getTripDetailsForward(req).subscribe(res => {
      if (res.status = 's') {
        this.toastrMsg.success("Forwared submitted successfully");
      }
      else {
        this.toastrMsg.error(res.userDisplayMesg);
      }
    })
  }

  approved() {
    const req = {
      "id": this.tripId,
      "status": "APPROVED"
    }
    this.commonService.getTripDetailsForward(req).subscribe(res => {
      if (res.status = 's') {
        this.toastrMsg.success("Forwared submitted successfully");
      }
      else {
        this.toastrMsg.error(res.userDisplayMesg);
      }
    })
  }

  requestForClarification(){
    const req = {
      "id": this.tripId,
      "status": "REQUESTFORCLARIFICATION"
    }
    this.commonService.getTripDetailsForward(req).subscribe(res => {
      if (res.status = 's') {
        this.toastrMsg.success("Forwared submitted successfully");
      }
      else {
        this.toastrMsg.error(res.userDisplayMesg);
      }
    })
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
      balanceAmount: tripFormDetails.pendingAmount || '',
      closingKM: tripFormDetails.closingKM || '',
      closingTime: moment(tripFormDetails.closingTime).format('YYYY-MM-DD HH:mm:ss') || '',
      customerMobileNumber: tripFormDetails.customerMobileNumber || '',
      customerName: tripFormDetails.customerName || '',
      date: moment(tripFormDetails.date).format('YYYY-MM-DD') || '',
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
      startingTime: moment(tripFormDetails.startingTime).format('YYYY-MM-DD HH:mm:ss') || '',
      status: 'INPROGRESS',
      submittedBy: tripFormDetails.submittedBy || '',
      toll: tripFormDetails.toll || '',
      totalRent: tripFormDetails.totalRent || '',
      totalTime: tripFormDetails.totalTime || '',
      usedAcKM: tripFormDetails.usedAcKM || '',
      usedKM: tripFormDetails.usedKM || '',
      vehicleNumber: tripFormDetails.vehicleNumber || '',
      visitingPlace: tripFormDetails.visitingPlace || '',
      verifiedByManager: tripFormDetails.verifiedByManager || '',
      verifiedByProprietor: tripFormDetails.verifiedByProprietor || '',
    }

    this.btnLoder = true;
    this.commonService.tripDetailAddSubmit(addTripDetailsRequest).subscribe(addTripDetailsResponse => {
      this.btnLoder = false;
      if (addTripDetailsResponse.status = 's') {
        this.submitPopUp.hide();
        this.toastrMsg.success("Vehicle details submitted successfully");
        this.router.navigate(['/container/trip-detail/list'])
      } else {
        this.toastrMsg.error(addTripDetailsResponse.userDisplayMesg);
      }
    })



  }

  startingKM(startingKMElemant) {
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
    if (closingKMElemant) {
      if (this.tripFormDetails.controls.closingKM.value) {
        const usedKM = parseFloat(closingKMElemant) - parseFloat(this.tripFormDetails.controls.startingKM.value);
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

    // Allow only numeric keys (0-9 from both top row and numpad)
    if (
      (charCode < 48 || charCode > 57) &&  // Top row numbers (0-9)
      (charCode < 96 || charCode > 105)    // Numpad numbers (0-9)
    ) {
      event.preventDefault(); // Restrict other keys
    }
  }

  getReceivedAmount(receivedAmount) {
    const advanceAmount = this.tripFormDetails.controls.advanceAmount.value ? parseFloat(this.tripFormDetails.controls.advanceAmount.value) : 0;
    const totalRentAmount = this.tripFormDetails.controls.totalRent.value ? parseFloat(this.tripFormDetails.controls.totalRent.value) : 0;
    const finalAmount = advanceAmount + parseFloat(receivedAmount)
    if (totalRentAmount < finalAmount) {
      this.tripFormDetails.patchValue({
        receivedAmount: ''
      });
    }
    if (receivedAmount) {
      this.tripFormDetails.patchValue({
        pendingAmount: (totalRentAmount - (advanceAmount + parseFloat(receivedAmount))),
        balanceAmount: (totalRentAmount - (advanceAmount + parseFloat(receivedAmount)))
      });
    } else if (this.tripFormDetails.controls.advanceAmount.value) {
      this.tripFormDetails.patchValue({
        pendingAmount: advanceAmount,
        balanceAmount: advanceAmount
      });
    } else {
      this.tripFormDetails.patchValue({
        pendingAmount: 0,
        balanceAmount: 0
      });
    }

  }
  getTotalRentAmount(totalRentAmount) {
    const advanceAmount = this.tripFormDetails.controls.advanceAmount.value ? parseFloat(this.tripFormDetails.controls.advanceAmount.value) : 0;
    const receivedAmount = this.tripFormDetails.controls.receivedAmount.value ? parseFloat(this.tripFormDetails.controls.receivedAmount.value) : 0;
    if (this.tripFormDetails.controls.totalRent.value) {
      this.tripFormDetails.patchValue({
        pendingAmount: (parseFloat(totalRentAmount) - (advanceAmount + receivedAmount)),
        balanceAmount: (parseFloat(totalRentAmount) - (advanceAmount + receivedAmount))
      });
    } else {
      this.tripFormDetails.patchValue({
        pendingAmount: 0,
        balanceAmount: 0
      });
    }
  }
  getAdvanceAmount(advanceAmount) {
    const totalRentAmount = this.tripFormDetails.controls.totalRent.value ? parseFloat(this.tripFormDetails.controls.totalRent.value) : 0;
    const receivedAmount = this.tripFormDetails.controls.receivedAmount.value ? parseFloat(this.tripFormDetails.controls.receivedAmount.value) : 0;
    const pendingAmount = this.tripFormDetails.controls.pendingAmount.value ? parseFloat(this.tripFormDetails.controls.pendingAmount.value) : 0;

    const finalAmount = parseFloat(advanceAmount) + receivedAmount
    if (totalRentAmount < finalAmount) {
      this.tripFormDetails.patchValue({
        advanceAmount: ''
      });
    }
    if (this.tripFormDetails.controls.advanceAmount.value &&
      this.tripFormDetails.controls.totalRent.value) {
      this.tripFormDetails.patchValue({
        pendingAmount: (totalRentAmount - (parseFloat(advanceAmount) + receivedAmount)),
        balanceAmount: (totalRentAmount - (parseFloat(advanceAmount) + receivedAmount))
      });
    } else if (this.tripFormDetails.controls.receivedAmount.value) {
      this.tripFormDetails.patchValue({
        pendingAmount: receivedAmount,
        balanceAmount: receivedAmount
      });
    } else {
      this.tripFormDetails.patchValue({
        pendingAmount: 0,
        balanceAmount: 0
      });
    }

  }

  getStaringKM(statingKM) {
    this.commonService.getStatingKM(statingKM).subscribe(vehicleResponse => {
      if (vehicleResponse.status == 's') {
        this.tripFormDetails.patchValue({
          startingKM: vehicleResponse.data.closingKM,
          closingKM: 0
        });
        if (vehicleResponse.data.closingKM && this.tripFormDetails.controls.closingKM.value) {
          this.tripFormDetails.patchValue({
            usedKM: parseFloat(this.tripFormDetails.controls.closingKM.value) - parseFloat(vehicleResponse.data.closingKM),
          });
        } else {
          this.tripFormDetails.patchValue({
            usedKM: 0,
            closingKM: 0
          });
        }
      } else {
        this.tripFormDetails.patchValue({
          startingKM: 0,
          usedKM: 0,
          closingKM: 0
        });
      }
    });
  }

  acStaringKmCalculation(startingKM) {
    // formula <==> ("u = c - s")
    if (startingKM && this.tripFormDetails.controls.acClosingKM.value) {
      this.tripFormDetails.patchValue({
        usedAcKM: parseFloat(this.tripFormDetails.controls.acClosingKM.value) - parseFloat(startingKM)
      });
    }
  }
  acClosingKmCalculation(closingKM) {
    // formula <==> ("u = c - s")
    if (closingKM && this.tripFormDetails.controls.acStartingKM.value) {
      this.tripFormDetails.patchValue({
        usedAcKM: parseFloat(closingKM) - parseFloat(this.tripFormDetails.controls.acStartingKM.value)
      });
    }
  }

  profitAmoutCalculation(string) {
    // Formula < == > ("Profit = Total Rent - (Toll + Fuel + Driver Payment + Permit)")
    const totalRentAmount = this.tripFormDetails.value.totalRent ? parseFloat(this.tripFormDetails.value.totalRent) : 0;
    const tollAmount = this.tripFormDetails.value.toll ? parseFloat(this.tripFormDetails.value.toll) : 0;
    const fuelAmount = this.tripFormDetails.value.diesel ? parseFloat(this.tripFormDetails.value.diesel) : 0;
    const driverPaymentAmount = this.tripFormDetails.value.driverPayment ? parseFloat(this.tripFormDetails.value.driverPayment) : 0;
    const permitAmount = this.tripFormDetails.value.permitAmount ? parseFloat(this.tripFormDetails.value.permitAmount) : 0;
    const profitAmount = (totalRentAmount - (tollAmount + fuelAmount + driverPaymentAmount + permitAmount));
    this.tripFormDetails.patchValue({
      profitAmount: profitAmount ? profitAmount : 0
    });
  }

  updateTripDetails() {
    const tripFormDetails = this.tripFormDetails.value;
    const updateTripDetailsRequest = {
      acClosingKM: tripFormDetails.acClosingKM || '',
      acNote: tripFormDetails.acNote || '',
      acOrNonAc: tripFormDetails.acOrNonAc || '',
      acStartingKM: tripFormDetails.acStartingKM || '',
      advanceAmount: tripFormDetails.advanceAmount || '',
      advanceType: tripFormDetails.advanceType || '',
      balanceAmount: tripFormDetails.balanceAmount || '',
      closingKM: tripFormDetails.closingKM || '',
      closingTime: moment(tripFormDetails.closingTime).format('YYYY-MM-DD HH:mm:ss') || '',
      customerMobileNumber: tripFormDetails.customerMobileNumber || '',
      customerName: tripFormDetails.customerName || '',
      date: moment(tripFormDetails.date).format('YYYY-MM-DD') || '',
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
      startingTime: moment(tripFormDetails.startingTime).format('YYYY-MM-DD HH:mm:ss') || '',
      status: tripFormDetails.status || 'SUBMITTED',
      submittedBy: tripFormDetails.submittedBy || '',
      toll: tripFormDetails.toll || '',
      totalRent: tripFormDetails.totalRent || '',
      totalTime: tripFormDetails.totalTime || '',
      usedAcKM: tripFormDetails.usedAcKM || '',
      usedKM: tripFormDetails.usedKM || '',
      vehicleNumber: tripFormDetails.vehicleNumber || '',
      visitingPlace: tripFormDetails.visitingPlace || '',
      verifiedByManager: tripFormDetails.verifiedByManager || '',
      verifiedByProprietor: tripFormDetails.verifiedByProprietor || '',
      id: this.tripId
    }

    this.btnLoder = true;
    this.commonService.tripDetailModification(updateTripDetailsRequest).subscribe(updateTripDetailsResponse => {
      this.btnLoder = false;
      if (updateTripDetailsResponse.status = 's') {
        this.submitPopUp.hide();
        this.toastrMsg.success("Vehicle details modified successfully");
        this.router.navigate(['/container/trip-detail/list'])
      } else {
        this.toastrMsg.error(updateTripDetailsResponse.userDisplayMesg);
      }
    })


  }

  getTripDetailsForm(tripId) {
    this.commonService.getTripDetails(tripId).subscribe(getTripDetailsResponse => {
      if (getTripDetailsResponse.status == 's') {
        this.getTripDetails = getTripDetailsResponse.data;
        this.tripFormDetails.patchValue({
          acClosingKM: getTripDetailsResponse.data.acClosingKM,
          acNote: getTripDetailsResponse.data.acNote,
          acOrNonAc: getTripDetailsResponse.data.acOrNonAc,
          acStartingKM: getTripDetailsResponse.data.acStartingKM,
          advanceAmount: getTripDetailsResponse.data.advanceAmount,
          advanceType: getTripDetailsResponse.data.advanceType,
          balanceAmount: getTripDetailsResponse.data.balanceAmount,
          closingKM: getTripDetailsResponse.data.closingKM,
          /* closingTime: getTripDetailsResponse.data.closingTime
            ? moment(getTripDetailsResponse.data.closingTime).format('YYYY-MM-DD HH:mm:ss')
            : '', */
          customerMobileNumber: getTripDetailsResponse.data.customerMobileNumber,
          customerName: getTripDetailsResponse.data.customerName,
          date: getTripDetailsResponse.data.date
            ? moment(getTripDetailsResponse.data.date).format('YYYY-MM-DD')
            : '',
          dayRent: getTripDetailsResponse.data.dayRent,
          diesel: getTripDetailsResponse.data.diesel,
          driverName: getTripDetailsResponse.data.driverName,
          driverPayment: getTripDetailsResponse.data.driverPayment,
          paymentType: getTripDetailsResponse.data.paymentType,
          pendingAmount: getTripDetailsResponse.data.pendingAmount,
          permitAmount: getTripDetailsResponse.data.permitAmount,
          profitAmount: getTripDetailsResponse.data.profitAmount,
          receivedAmount: getTripDetailsResponse.data.receivedAmount,
          startingKM: getTripDetailsResponse.data.startingKM,
          /* startingTime: getTripDetailsResponse.data.startingTime
            ? moment(getTripDetailsResponse.data.startingTime).format('YYYY-MM-DD HH:mm:ss')
            : '', */
          status: getTripDetailsResponse.data.status,
          submittedBy: getTripDetailsResponse.data.submittedBy,
          toll: getTripDetailsResponse.data.toll,
          totalRent: getTripDetailsResponse.data.totalRent,
          totalTime: getTripDetailsResponse.data.totalTime,
          usedAcKM: getTripDetailsResponse.data.usedAcKM,
          usedKM: getTripDetailsResponse.data.usedKM,
          vehicleNumber: getTripDetailsResponse.data.vehicleNumber,
          visitingPlace: getTripDetailsResponse.data.visitingPlace,
          /* startingTime: getTripDetailsResponse.data.startingTime
            ? moment(getTripDetailsResponse.data.startingTime).format('YYYY-MM-DD HH:mm')
            : '', */
          startingTime: getTripDetailsResponse.data.startingTime
            ? moment(getTripDetailsResponse.data.startingTime).toDate()
            : '',

          closingTime: getTripDetailsResponse.data.closingTime
            ? moment(getTripDetailsResponse.data.closingTime).toDate()
            : ''
        });

        console.log("this.tripFormDetails.value ", this.tripFormDetails.value);
        console.log('startingTime :', moment(getTripDetailsResponse.data.startingTime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'));
        console.log('closingTime :', moment(getTripDetailsResponse.data.closingTime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'));
      }
    });
  }



  getTripDetailsForward(tripId) {
    this.commonService.getTripDetails(tripId).subscribe(getTripDetailsResponse => {
      if (getTripDetailsResponse.status == 's') {
        this.getTripDetails = getTripDetailsResponse.data;
        this.tripFormDetails.disable();
        this.tripFormDetails.patchValue({
          acClosingKM: getTripDetailsResponse.data.acClosingKM,
          acNote: getTripDetailsResponse.data.acNote,
          acOrNonAc: getTripDetailsResponse.data.acOrNonAc,
          acStartingKM: getTripDetailsResponse.data.acStartingKM,
          advanceAmount: getTripDetailsResponse.data.advanceAmount,
          advanceType: getTripDetailsResponse.data.advanceType,
          balanceAmount: getTripDetailsResponse.data.balanceAmount,
          closingKM: getTripDetailsResponse.data.closingKM,
          /* closingTime: getTripDetailsResponse.data.closingTime
            ? moment(getTripDetailsResponse.data.closingTime).format('YYYY-MM-DD HH:mm:ss')
            : '', */
          customerMobileNumber: getTripDetailsResponse.data.customerMobileNumber,
          customerName: getTripDetailsResponse.data.customerName,
          date: getTripDetailsResponse.data.date
            ? moment(getTripDetailsResponse.data.date).format('YYYY-MM-DD')
            : '',
          dayRent: getTripDetailsResponse.data.dayRent,
          diesel: getTripDetailsResponse.data.diesel,
          driverName: getTripDetailsResponse.data.driverName,
          driverPayment: getTripDetailsResponse.data.driverPayment,
          paymentType: getTripDetailsResponse.data.paymentType,
          pendingAmount: getTripDetailsResponse.data.pendingAmount,
          permitAmount: getTripDetailsResponse.data.permitAmount,
          profitAmount: getTripDetailsResponse.data.profitAmount,
          receivedAmount: getTripDetailsResponse.data.receivedAmount,
          startingKM: getTripDetailsResponse.data.startingKM,
          /* startingTime: getTripDetailsResponse.data.startingTime
            ? moment(getTripDetailsResponse.data.startingTime).format('YYYY-MM-DD HH:mm:ss')
            : '', */
          status: getTripDetailsResponse.data.status,
          submittedBy: getTripDetailsResponse.data.submittedBy,
          toll: getTripDetailsResponse.data.toll,
          totalRent: getTripDetailsResponse.data.totalRent,
          totalTime: getTripDetailsResponse.data.totalTime,
          usedAcKM: getTripDetailsResponse.data.usedAcKM,
          usedKM: getTripDetailsResponse.data.usedKM,
          vehicleNumber: getTripDetailsResponse.data.vehicleNumber,
          visitingPlace: getTripDetailsResponse.data.visitingPlace,
          /* startingTime: getTripDetailsResponse.data.startingTime
            ? moment(getTripDetailsResponse.data.startingTime).format('YYYY-MM-DD HH:mm')
            : '', */
          startingTime: getTripDetailsResponse.data.startingTime
            ? moment(getTripDetailsResponse.data.startingTime).toDate()
            : '',

          closingTime: getTripDetailsResponse.data.closingTime
            ? moment(getTripDetailsResponse.data.closingTime).toDate()
            : ''
        });

        console.log("this.tripFormDetails.value ", this.tripFormDetails.value);
        console.log('startingTime :', moment(getTripDetailsResponse.data.startingTime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'));
        console.log('closingTime :', moment(getTripDetailsResponse.data.closingTime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'));
      }
    });
  }


  getTripDetailsApprove(tripId) {
    this.commonService.getTripDetails(tripId).subscribe(getTripDetailsResponse => {
      if (getTripDetailsResponse.status == 's') {
        this.getTripDetails = getTripDetailsResponse.data;
        this.tripFormDetails.disable();
        this.tripFormDetails.patchValue({
          acClosingKM: getTripDetailsResponse.data.acClosingKM,
          acNote: getTripDetailsResponse.data.acNote,
          acOrNonAc: getTripDetailsResponse.data.acOrNonAc,
          acStartingKM: getTripDetailsResponse.data.acStartingKM,
          advanceAmount: getTripDetailsResponse.data.advanceAmount,
          advanceType: getTripDetailsResponse.data.advanceType,
          balanceAmount: getTripDetailsResponse.data.balanceAmount,
          closingKM: getTripDetailsResponse.data.closingKM,
          /* closingTime: getTripDetailsResponse.data.closingTime
            ? moment(getTripDetailsResponse.data.closingTime).format('YYYY-MM-DD HH:mm:ss')
            : '', */
          customerMobileNumber: getTripDetailsResponse.data.customerMobileNumber,
          customerName: getTripDetailsResponse.data.customerName,
          date: getTripDetailsResponse.data.date
            ? moment(getTripDetailsResponse.data.date).format('YYYY-MM-DD')
            : '',
          dayRent: getTripDetailsResponse.data.dayRent,
          diesel: getTripDetailsResponse.data.diesel,
          driverName: getTripDetailsResponse.data.driverName,
          driverPayment: getTripDetailsResponse.data.driverPayment,
          paymentType: getTripDetailsResponse.data.paymentType,
          pendingAmount: getTripDetailsResponse.data.pendingAmount,
          permitAmount: getTripDetailsResponse.data.permitAmount,
          profitAmount: getTripDetailsResponse.data.profitAmount,
          receivedAmount: getTripDetailsResponse.data.receivedAmount,
          startingKM: getTripDetailsResponse.data.startingKM,
          /* startingTime: getTripDetailsResponse.data.startingTime
            ? moment(getTripDetailsResponse.data.startingTime).format('YYYY-MM-DD HH:mm:ss')
            : '', */
          status: getTripDetailsResponse.data.status,
          submittedBy: getTripDetailsResponse.data.submittedBy,
          toll: getTripDetailsResponse.data.toll,
          totalRent: getTripDetailsResponse.data.totalRent,
          totalTime: getTripDetailsResponse.data.totalTime,
          usedAcKM: getTripDetailsResponse.data.usedAcKM,
          usedKM: getTripDetailsResponse.data.usedKM,
          vehicleNumber: getTripDetailsResponse.data.vehicleNumber,
          visitingPlace: getTripDetailsResponse.data.visitingPlace,
          /* startingTime: getTripDetailsResponse.data.startingTime
            ? moment(getTripDetailsResponse.data.startingTime).format('YYYY-MM-DD HH:mm')
            : '', */
          startingTime: getTripDetailsResponse.data.startingTime
            ? moment(getTripDetailsResponse.data.startingTime).toDate()
            : '',

          closingTime: getTripDetailsResponse.data.closingTime
            ? moment(getTripDetailsResponse.data.closingTime).toDate()
            : ''
        });

        console.log("this.tripFormDetails.value ", this.tripFormDetails.value);
        console.log('startingTime :', moment(getTripDetailsResponse.data.startingTime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'));
        console.log('closingTime :', moment(getTripDetailsResponse.data.closingTime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'));
      }
    });
  }
}


// transfetStartDate: this.editdata.dissolveStartDate ? new Date(new Date(this.editdata.dissolveStartDate).getTime() - (this.myDate.getTimezoneOffset() * 60000)).toISOString().slice(0, 16) : '',