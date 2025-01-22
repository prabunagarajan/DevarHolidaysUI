import { Component, OnInit, } from '@angular/core';
import {  FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';
@Component({
  selector: 'app-view-driver-details',
  templateUrl: './view-driver-details.component.html',
  styleUrls: ['./view-driver-details.component.scss']
})
export class ViewDriverDetailsComponent implements OnInit {
  driverDetails: any;
  
constructor(private masterService: MasterService,
  private activatedRoute: ActivatedRoute) { }

ngOnInit() {
  this.activatedRoute.params.subscribe(getDriverByIdResponse => {
    if (getDriverByIdResponse.id) {
      this.getDriverById(getDriverByIdResponse.id)
    }
  })
}
  
  getDriverById(viewId) {
    this.masterService.getDriverById(viewId).subscribe(getDriverByIdResponse => {
      if (getDriverByIdResponse.status == 's') {
        this.driverDetails = getDriverByIdResponse.data;
      }
    });
  }
}
