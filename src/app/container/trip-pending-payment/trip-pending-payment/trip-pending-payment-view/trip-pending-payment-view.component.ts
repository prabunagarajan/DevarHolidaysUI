import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
@Component({
  selector: 'app-trip-pending-payment-view',
  templateUrl: './trip-pending-payment-view.component.html',
  styleUrls: ['./trip-pending-payment-view.component.scss']
})
export class TripPendingPaymentViewComponent implements OnInit {

  getTripDetails: any;
    tripLogDetails: any[] = [];
    tripListStatus: string;
    constructor(
      private commonService: CommonService,
      private activatedRoute: ActivatedRoute,
      private router: Router) { }
  
    ngOnInit() {
  
      this.activatedRoute.params.subscribe(tripIdResponse => {
        if (tripIdResponse.id) {
          if (tripIdResponse.status) {
            this.tripListStatus = tripIdResponse.status;
          }
          this.commonService.getTripDetails(tripIdResponse.id).subscribe(getTripDetailsResponse => {
            if (getTripDetailsResponse.status == 's') {
              this.getTripDetails = getTripDetailsResponse.data;
              this.commonService.getTripDetailLogs(getTripDetailsResponse.data.tripNumber).subscribe(gettripLogDetailsResponse => {
                if (gettripLogDetailsResponse.status == 's') {
                  this.tripLogDetails = gettripLogDetailsResponse.data;
                } else {
                  this.tripLogDetails = [];
                }
              });
            }
          })
  
        }
      })
    }
  
    back() {
      this.router.navigate(['/container/trip-payment-pending/list']);
    }
}
