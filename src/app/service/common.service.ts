import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl = environment.baseURL;
  constructor(private httpClient: HttpClient) { }

  tripDetailsSearchList(obj): Observable<any> {
    const url = this.baseUrl + 'tripDetails/search';
    return this.httpClient.post(url, obj);
  }

  tripDetailAddSubmit(requestObj): Observable<any> {
    const url = this.baseUrl + 'tripDetails/add';
    return this.httpClient.post(url, requestObj);
  }
  tripDetailModification(requestObj): Observable<any> {
    const url = this.baseUrl + 'tripDetails/update';
    return this.httpClient.put(url, requestObj);
  }
  activeVechicle(): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/active';
    return this.httpClient.get(url);
  }
  activeDriver(): Observable<any> {
    const url = this.baseUrl + 'DriverDetails/active';
    return this.httpClient.get(url);
  }
  getStatingKM(vehicleNumber): Observable<any> {
    const url = this.baseUrl + 'tripDetails/getLastRecordByV/' + vehicleNumber;
    return this.httpClient.get(url);
  }
  getTripDetails(tripId): Observable<any> {
    const url = this.baseUrl + 'tripDetails/getById/' + tripId;
    return this.httpClient.get(url);
  }

  getTripDetailsForward(req:any): Observable<any> {
    const url = this.baseUrl + 'tripDetails/approval';
    return this.httpClient.put(url,req);
  }
  getTripDetailLogs(refNumber): Observable<any> {
    const url = this.baseUrl + 'tripDetails/getLogsByTripNo/' + refNumber;
    return this.httpClient.get(url);
  }
}