import { Component, OnInit } from '@angular/core';
import { ChartDB } from '../../../fack-db/chart-data';
import { ApexChartService } from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-dash-analytics',
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export class DashAnalyticsComponent implements OnInit {
  public chartDB: any;
  public dailyVisitorStatus: string;
  public dailyVisitorAxis: any;
  public deviceProgressBar: any;

  // places = [
  //   {
  //     image: 'assets/CAR/CAR.jpeg'
  //   },
  //   {
  //     image: 'assets/CAR/CAR1.jpeg'
  //   },
  //   {
  //     image: 'assets/CAR/CAR3.jpeg'
  //   },
  //   {
  //     image: 'assets/CAR/CAR4.jpeg'
  //   },
  //   {
  //     image: 'assets/CAR/CAR5.jpeg'
  //   },
  //   {
  //     image: 'assets/CAR/CAR6.jpeg'
  //   },
  //   {
  //     image: 'assets/CAR/CAR7.jpeg'
  //   },
  // ];
  // totalVehicleTripsAndProfit: any;

  // constructor(public apexEvent: ApexChartService, private commonservice: CommonService) {
  //   this.chartDB = ChartDB;
  //   this.dailyVisitorStatus = '1y';

  //   this.deviceProgressBar = [
  //     {
  //       type: 'success',
  //       value: 66
  //     }, {
  //       type: 'primary',
  //       value: 26
  //     }, {
  //       type: 'danger',
  //       value: 8
  //     }
  //   ];
  // }

  // driverTrips: any[] = [];


  // ngOnInit() {
  //   const today = new Date();
  //   const month = today.getMonth() + 1;
  //   const year = today.getFullYear();
  //   this.commonservice.dashBoardCount(month, year).subscribe(res => {
  //     this.driverTrips = res;
  //     console.log(this.driverTrips);

  //   })
  //   this.commonservice.getTotalVehicleTripsAndProfit(month, year).subscribe(res => {
  //     this.totalVehicleTripsAndProfit = res;
  //     console.log(this.driverTrips);

  //   })
  // }

  allImages = [
    'assets/CAR/CAR.jpeg',
    'assets/CAR/CAR1.jpeg',
    'assets/CAR/CAR3.jpeg',
    'assets/CAR/CAR4.jpeg',
    'assets/CAR/CAR5.jpeg',
    'assets/CAR/CAR6.jpeg',
    'assets/CAR/CAR7.jpeg'
  ];

  places: any[] = [];
  totalVehicleTripsAndProfit: any;
  driverTrips: any[] = [];

  constructor(public apexEvent: ApexChartService, private commonservice: CommonService) {
    this.chartDB = ChartDB;
    this.dailyVisitorStatus = '1y';

    this.deviceProgressBar = [
      { type: 'success', value: 66 },
      { type: 'primary', value: 26 },
      { type: 'danger', value: 8 }
    ];
  }

  ngOnInit() {
    this.assignRandomImages();

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    this.commonservice.dashBoardCount(month, year).subscribe(res => {
      this.driverTrips = res;
      console.log(this.driverTrips);
    });

    this.commonservice.getTotalVehicleTripsAndProfit(month, year).subscribe(res => {
      this.totalVehicleTripsAndProfit = res;
      console.log(this.totalVehicleTripsAndProfit);
    });
  }

  assignRandomImages() {
    this.places = this.allImages
      .map(image => ({ image })) // Convert to object format
      .sort(() => 0.5 - Math.random()); // Shuffle the images randomly
  }
}