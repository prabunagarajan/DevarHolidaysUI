import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-add-edit-driver-details',
  templateUrl: './add-edit-driver-details.component.html',
  styleUrls: ['./add-edit-driver-details.component.scss']
})
export class AddEditDriverDetailsComponent implements OnInit {

  driverFormDetails!: FormGroup;
  formSubmitted: boolean = false; // Initialize to false
  @ViewChild('submitPopUp', { static: false }) submitPopUp;

  screenName: String;
  listId: any;
  editDetails: any;
  submitFlag: boolean;

  constructor(
    private fb: FormBuilder,
    private masterService: MasterService,
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.initializeForm();
    this.screenName = 'Add';

    this.activatedRoute.params.subscribe(routeResponse => {
      if (routeResponse.id) {
        this.listId = routeResponse.id;
        this.submitFlag = true;
        this.screenName = 'Edit';
        this.masterService.driverDetailsView(routeResponse.id).subscribe(viewResponse => {
          if (viewResponse.status == 's') {
            this.editDetails = viewResponse.data;

            this.driverFormDetails.patchValue({
              aadharNumber: viewResponse.data.aadharNumber,
              county: viewResponse.data.county,
              district: viewResponse.data.district,
              doorNumber: viewResponse.data.doorNumber,
              drivingLicenseNumber: viewResponse.data.drivingLicenseNumber,
              isPermanentDriver: viewResponse.data.isPermanentDriver ? 'Active' : 'Inactive',
              mobileNumber: viewResponse.data.mobileNumber,
              name: viewResponse.data.name,
              state: viewResponse.data.state,
              status: viewResponse.data.status ? 'Active' : 'Inactive',
              street: viewResponse.data.street,
              villageOrCity: viewResponse.data.villageOrCity
            });

          }
        })
      }
    });
  }

  initializeForm() {
    this.driverFormDetails = this.fb.group({
      aadharNumber: ['', [Validators.required]],
      county: ['', Validators.required],
      district: ['', Validators.required],
      doorNumber: ['', Validators.required],
      drivingLicenseNumber: ['', [Validators.required]],
      isPermanentDriver: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      name: ['', [Validators.required]],
      state: ['', Validators.required],
      status: ['', Validators.required],
      street: ['', Validators.required],
      villageOrCity: ['', Validators.required]
    });
  }

  get driverForm(): { [key: string]: AbstractControl } {
    return this.driverFormDetails.controls;
  }

  submit() {
    if (this.driverFormDetails.valid) {
      this.submitPopUp.show();
    } else {
      this.formSubmitted = true;
    }
  }

  finalSubmit() {
    if (this.submitFlag) {
      this.updateDriverDetails();
    } else {
      this.addDriverDetails();
    }
  }

  addDriverDetails() {
    if (this.driverFormDetails.valid) {
      const addDriverDetailsRequest = {
        aadharNumber: this.driverFormDetails.value.aadharNumber,
        county: this.driverFormDetails.value.county,
        district: this.driverFormDetails.value.district,
        doorNumber: this.driverFormDetails.value.doorNumber,
        drivingLicenseNumber: this.driverFormDetails.value.drivingLicenseNumber,
        isPermanentDriver: this.driverFormDetails.value.isPermanentDriver === 'Active',
        mobileNumber: this.driverFormDetails.value.mobileNumber,
        name: this.driverFormDetails.value.name,
        state: this.driverFormDetails.value.state,
        status: this.driverFormDetails.value.status === 'Active',
        street: this.driverFormDetails.value.street,
        villageOrCity: this.driverFormDetails.value.villageOrCity
      };
      this.masterService.driverDetailsAdd(addDriverDetailsRequest).subscribe(
        (addDriverDetailsResponse: any) => {
          if (addDriverDetailsResponse.status == 's') {
            this.toastr.success(addDriverDetailsResponse.userDisplayMesg ? addDriverDetailsResponse.userDisplayMesg : 'Driver details submited successfully!');
            this.router.navigate(['master/driver-detail/list']);
          } else {
            this.toastr.error(addDriverDetailsResponse.userDisplayMesg);
          }
        }
      );
    } else {
      this.formSubmitted = true;
    }
  }

  updateDriverDetails() {
    if (this.driverFormDetails.valid) {
      const updateDriverDetailsRequest = {
        aadharNumber: this.driverFormDetails.value.aadharNumber,
        county: this.driverFormDetails.value.county,
        district: this.driverFormDetails.value.district,
        doorNumber: this.driverFormDetails.value.doorNumber,
        drivingLicenseNumber: this.driverFormDetails.value.drivingLicenseNumber,
        isPermanentDriver: this.driverFormDetails.value.isPermanentDriver === 'Active',
        mobileNumber: this.driverFormDetails.value.mobileNumber,
        name: this.driverFormDetails.value.name,
        state: this.driverFormDetails.value.state,
        status: this.driverFormDetails.value.status === 'Active',
        street: this.driverFormDetails.value.street,
        villageOrCity: this.driverFormDetails.value.villageOrCity,
        id: this.listId
      };
      this.masterService.driverDetailsUpdate(updateDriverDetailsRequest).subscribe(
        (updateDriverDetailsResponse: any) => {
          if (updateDriverDetailsResponse.status == 's') {
            this.toastr.success(updateDriverDetailsResponse.userDisplayMesg ? updateDriverDetailsResponse.userDisplayMesg : 'Driver details updated successfully!');
            this.router.navigate(['master/driver-detail/list']);
          } else {
            this.toastr.error(updateDriverDetailsResponse.userDisplayMesg);
          }
        }
      );
    } else {
      this.formSubmitted = true;
    }
  }

  onCancel() {
    this.formSubmitted = false;
    this.submitPopUp.hide();
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  allowOnlyLetters(event: KeyboardEvent) {
    const pattern = /^[A-Za-z]$/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


}
