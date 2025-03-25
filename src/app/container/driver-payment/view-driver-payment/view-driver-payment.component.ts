import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-view-driver-payment',
  templateUrl: './view-driver-payment.component.html',
  styleUrls: ['./view-driver-payment.component.scss']
})
export class ViewDriverPaymentComponent implements OnInit {
  driverPaymentObj: any;
  constructor(
    private commonService: CommonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(tripIdResponse => {
      if (tripIdResponse.id) {
        this.commonService.driverPaymentview(tripIdResponse.id).subscribe(driverResponse => {
          if (driverResponse.status == 's') {
            this.driverPaymentObj = driverResponse.data;
          }
        });
      }
    });
  }

}
