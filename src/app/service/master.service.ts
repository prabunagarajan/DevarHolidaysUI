import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  baseUrl = environment.baseURL;
  constructor(private httpClient: HttpClient) { }


  getAllVehicleActive(): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/active';
    return this.httpClient.get(url);
  }
  getAllVehicleNumberStatus(): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/getAll';
    return this.httpClient.get(url);
  }
  driverDetailsSearchList(obj): Observable<any> {
    const url = this.baseUrl + 'DriverDetails/search';
    return this.httpClient.post(url, obj);
  }
  driverDetailsAdd(req: any): Observable<any> {
    const url = this.baseUrl + 'DriverDetails/add';
    return this.httpClient.post(url, req);
  }

  driverDetailsUpdate(req: any): Observable<any> {
    const url = this.baseUrl + 'DriverDetails/update';
    return this.httpClient.put(url, req);
  }

  driverDetailsView(requestId): Observable<any> {
    const url = this.baseUrl + 'DriverDetails/getById/' + requestId;
    return this.httpClient.get(url);
  }

  getDriverById(id: number): Observable<any> {
    const url = this.baseUrl + 'DriverDetails/getById/'+id;
    return this.httpClient.get<any>(url);
  }
  
  vehicleDetailsGetAllList(obj): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/search';
    return this.httpClient.post(url, obj);
  }

  vehicleDetailsAdd(obj: any): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/add';
    return this.httpClient.post(url, obj);
  }

  updateVehicle(vehicle: any): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/update';
    return this.httpClient.put<any>(url, vehicle);
  }

  getVehicleById(id: number): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/getById/'+id;
    return this.httpClient.get<any>(url);
  }

}
