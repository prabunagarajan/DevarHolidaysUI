import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-vehicle-details',
  templateUrl: './add-edit-vehicle-details.component.html',
  styleUrls: ['./add-edit-vehicle-details.component.scss']
})
export class AddEditVehicleDetailsComponent implements OnInit {
  vehicleFormDetails: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.vehicleFormDetails = this.formBuilder.group({
      fcDate: [''],
      insuranceDate: [''],
      polutionDate: [''],
      remarks: [''],
      status: [''],
      taxDate: [''],
      vehicleColor: [''],
      vehicleName: [''],
      vehicleNumber: [''],
    });
  }

}
