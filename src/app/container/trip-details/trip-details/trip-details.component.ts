import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {

  tripFormSearchDetails: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.tripFormSearchDetails = this.formBuilder.group({
      driverName: [''],
      driverNumber: [''],
      vehiclenumber: ['']
    })
  }


  search() {

  }
  onclear() {

  }
}
