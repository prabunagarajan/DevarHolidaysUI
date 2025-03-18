import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-driver-payment',
  templateUrl: './add-driver-payment.component.html',
  styleUrls: ['./add-driver-payment.component.scss']
})
export class AddDriverPaymentComponent implements OnInit {
  driverPaymentFormDetails: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  // https://devarholidays-c7av.onrender.com/DevarCabs/DriverDetails/active

  ngOnInit() {
  }

}
