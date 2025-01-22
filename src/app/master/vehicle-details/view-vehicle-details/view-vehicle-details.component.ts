import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-view-vehicle-details',
  templateUrl: './view-vehicle-details.component.html',
  styleUrls: ['./view-vehicle-details.component.scss']
})
export class ViewVehicleDetailsComponent implements OnInit {
  vehicleDetails: any;

  constructor(private masterService: MasterService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(vehicleByIdResponse => {
      if (vehicleByIdResponse.id) {
        this.getVehicleById(vehicleByIdResponse.id)
      }
    })
  }

  getVehicleById(viewId) {
    this.masterService.getVehicleById(viewId).subscribe(getVehicleByIdResponse => {
      if (getVehicleByIdResponse.status == 's') {
        this.vehicleDetails = getVehicleByIdResponse.data;
      }
    });
  }

}
