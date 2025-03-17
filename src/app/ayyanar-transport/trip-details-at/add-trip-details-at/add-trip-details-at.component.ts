import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-add-trip-details-at',
  templateUrl: './add-trip-details-at.component.html',
  styleUrls: ['./add-trip-details-at.component.scss']
})
export class AddTripDetailsAtComponent implements OnInit {
  screenName = "Add";
  tripFormDetailsAT: FormGroup;
  maxDate = moment();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tripFormDetailsAT = this.formBuilder.group({

    })
  }

}
