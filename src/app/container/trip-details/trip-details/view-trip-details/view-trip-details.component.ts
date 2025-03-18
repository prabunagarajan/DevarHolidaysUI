import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-view-trip-details',
  templateUrl: './view-trip-details.component.html',
  styleUrls: ['./view-trip-details.component.scss']
})
export class ViewTripDetailsComponent implements OnInit {
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
    if (this.tripListStatus == 'approved') {
      this.router.navigate(['/container/trip-detail/inprogresslist']);
    } else if (this.tripListStatus == 'forward') {
      this.router.navigate(['/container/trip-detail/forwardlist']);
    } else {
      this.router.navigate(['/container/trip-detail/list']);
    }
  }
}