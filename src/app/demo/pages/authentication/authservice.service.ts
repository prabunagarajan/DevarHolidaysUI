import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  domainURL = environment.baseURL;
  constructor(private http: HttpClient) { }

  signInValidate(signInValidateObj: any): Observable<any> {
    const url = this.domainURL + 'auth/login';
    return this.http.post(url, signInValidateObj);
  }

  signInGetUserProfile(signInGetUserProfileObj): Observable<any> {
    const url = this.domainURL + 'auth/getUserById/' + signInGetUserProfileObj;
    return this.http.get(url, signInGetUserProfileObj);
  }

}
