import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let XAuthorization: any;
    let userName: any;
    if (sessionStorage.getItem('X-Authorization') && sessionStorage.getItem('userName')) {
      XAuthorization = sessionStorage.getItem('X-Authorization');
      userName = sessionStorage.getItem('userName');
    }

    if (XAuthorization && userName) {
      const cloneRequest = request.clone({
        headers: request.headers
          .set('X-Authorization', XAuthorization.trim())
          .set('UserName', userName)
      });
      return next.handle(cloneRequest);
    }
    return next.handle(request);
  }

}
