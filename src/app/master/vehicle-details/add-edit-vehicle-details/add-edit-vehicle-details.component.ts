import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-add-edit-vehicle-details',
  templateUrl: './add-edit-vehicle-details.component.html',
  styleUrls: ['./add-edit-vehicle-details.component.scss']
})
export class AddEditVehicleDetailsComponent implements OnInit {
  vehicleFormDetails: FormGroup;
  startDate = new Date(1990, 0, 1);
  formSubmitted = false;
  flagSubmitButton: boolean;
  vehicleId: any;
  @ViewChild('submitPopUp', { static: false }) submitPopUp;
  screenName = 'Add';
  btnLoder: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private masterService: MasterService,
    private toasterMsg: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.vehicleId = this.route.snapshot.paramMap.get('id');

    this.vehicleFormDetails = this.formBuilder.group({
      fcDate: ['', Validators.required],
      insuranceDate: ['', Validators.required],
      polutionDate: ['', Validators.required],
      remarks: ['', [Validators.required, Validators.maxLength(200)]],
      status: ['', Validators.required],
      taxDate: ['', Validators.required],
      vehicleColor: ['', Validators.required],
      vehicleName: ['', Validators.required],
      vehicleNumber: ['', [Validators.required]]
    });

    if (this.vehicleId) {
      this.screenName = 'Edit'
      this.loadVehicleDetails();
    }
  }

  loadVehicleDetails() {
    this.masterService.getVehicleById(this.vehicleId).subscribe(res => {
      if (res.status === 's') {
        const taxDate = this.formatDate(res.data.taxDate);
        const fcDate = this.formatDate(res.data.fcDate);
        const insuranceDate = this.formatDate(res.data.insuranceDate);
        const polutionDate = this.formatDate(res.data.polutionDate);
        const status = res.data.status ? 'Active' : 'Inactive';
        this.vehicleFormDetails.patchValue({
          fcDate: res.data.fcDate,
          insuranceDate: res.data.insuranceDate,
          polutionDate: res.data.polutionDate,
          remarks: res.data.remarks,
          status: status,
          taxDate: res.data.taxDate,
          vehicleColor: res.data.vehicleColor,
          vehicleName: res.data.vehicleName,
          vehicleNumber: res.data.vehicleNumber
        });

        this.flagSubmitButton = true;
      } else {
        this.toasterMsg.error('Failed to load vehicle details');
      }
    });
  }

  formatDate(date: string): string {
    const parsedDate = new Date(date);
    const day = ('0' + parsedDate.getDate()).slice(-2);
    const month = ('0' + (parsedDate.getMonth() + 1)).slice(-2);
    const year = parsedDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  get f() {
    return this.vehicleFormDetails.controls;
  }

  submit() {
    if (this.vehicleFormDetails.valid) {
      this.submitPopUp.show();
    } else {
      this.formSubmitted = true;
    }
  }

  finalSubmit() {
    if (this.vehicleId) {
      this.vechileUpdate();
    } else {
      this.vehicleAdd();
    }
  }

  vehicleAdd() {
    const vehicleFormDetails = this.vehicleFormDetails.value;
    const vehicleAddRequest =
    {
      fcDate: moment(vehicleFormDetails.fcDate).format('YYYY-MM-DD') || '',
      insuranceDate: moment(vehicleFormDetails.insuranceDate).format('YYYY-MM-DD') || '',
      polutionDate: moment(vehicleFormDetails.polutionDate).format('YYYY-MM-DD') || '',
      remarks: vehicleFormDetails.remarks || '',
      status: vehicleFormDetails.status == 'Active' ? true : false,
      taxDate: moment(vehicleFormDetails.taxDate).format('YYYY-MM-DD') || '',
      vehicleColor: vehicleFormDetails.vehicleColor || '',
      vehicleName: vehicleFormDetails.vehicleName || '',
      vehicleNumber: vehicleFormDetails.vehicleNumber || ''
    }
    this.btnLoder = true;
    this.masterService.vehicleDetailsAdd(vehicleAddRequest).subscribe(vehicleAddResponse => {
      this.btnLoder = false;
      if (vehicleAddResponse.status = 's') {
        this.submitPopUp.hide();
        this.toasterMsg.success("Vehicle details submitted successfully");
        this.router.navigate(['/master/vehicle-detail/list'])
      } else {
        this.toasterMsg.error(vehicleAddResponse.userDisplayMesg);
      }
    });
  }

  vechileUpdate() {
    const vehicleFormDetails = this.vehicleFormDetails.value;
    const vechileUpdateRequest =
    {
      fcDate: moment(vehicleFormDetails.fcDate).format('YYYY-MM-DD') || '',
      insuranceDate: moment(vehicleFormDetails.insuranceDate).format('YYYY-MM-DD') || '',
      polutionDate: moment(vehicleFormDetails.polutionDate).format('YYYY-MM-DD') || '',
      remarks: vehicleFormDetails.remarks || '',
      status: vehicleFormDetails.status == 'Active' ? true : false,
      taxDate: moment(vehicleFormDetails.taxDate).format('YYYY-MM-DD') || '',
      vehicleColor: vehicleFormDetails.vehicleColor || '',
      vehicleName: vehicleFormDetails.vehicleName || '',
      vehicleNumber: vehicleFormDetails.vehicleNumber || '',
      id: this.vehicleId
    }
    this.btnLoder = true;
    this.masterService.updateVehicle(vechileUpdateRequest).subscribe(vechileUpdateResponse => {
      this.btnLoder = false;
      if (vechileUpdateResponse.status = 's') {
        this.submitPopUp.hide();
        this.toasterMsg.success("Vehicele details updated successfully");
        this.router.navigate(['/master/vehicle-detail/list'])
      } else {
        this.toasterMsg.error(vechileUpdateResponse.userDisplayMesg);
      }
    })
  }

  onCancel() {
    this.submitPopUp.hide();
  }

  spaceNotAllowd(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode === 32) {
      event.preventDefault();
      return;
    }
  }

}
