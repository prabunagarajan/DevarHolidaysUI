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
}
