import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  baseUrl = environment.baseURL;
  constructor(private httpClient:HttpClient) { }


  getAllVehicleActive(): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/active';
    return this.httpClient.get(url);
  }
  getAllVehicleNumberStatus(): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/getAll';
    return this.httpClient.get(url);
  }

  vehicleDetailsGetAllList(): Observable<any> {
    const url = this.baseUrl + 'DriverDetails/getAll';
    return this.httpClient.get(url);
  }
  vehicleDetailsSearchList(obj): Observable<any> {
    const url = this.baseUrl + 'DriverDetails/search';
    return this.httpClient.get(url);
  }
}
