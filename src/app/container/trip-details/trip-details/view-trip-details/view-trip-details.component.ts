import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-view-trip-details',
  templateUrl: './view-trip-details.component.html',
  styleUrls: ['./view-trip-details.component.scss']
})
export class ViewTripDetailsComponent implements OnInit {
  getTripDetails: any;
  constructor(
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(tripIdResponse => {
      if (tripIdResponse.id) {
        this.commonService.getTripDetails(tripIdResponse.id).subscribe(getTripDetailsResponse => {
          if (getTripDetailsResponse.status == 's') {
            this.getTripDetails = getTripDetailsResponse.data;
          }
        })
      }
    })
  }
}