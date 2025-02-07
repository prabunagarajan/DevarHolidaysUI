import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../loader.service';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  /* constructor(private loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show(); // Show loader on request start
    return next.handle(req).pipe(
      finalize(() => this.loaderService.hide()) // Hide loader on request completion
    );
  } */

    private requests: HttpRequest<any>[] = [];

    constructor(private loaderService: LoaderService) { }
  
    removeRequest(req: HttpRequest<any>) {
      const i = this.requests.indexOf(req);
      if (i >= 0) {
        this.requests.splice(i, 1);
      }
      this.loaderService.isLoading.next(this.requests.length > 0);
    }
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
      this.requests.push(req);
      this.loaderService.isLoading.next(true);
  
      return new Observable<HttpEvent<any>>((observer) => {
        const subscription = next.handle(req).subscribe({
          next: (event) => {
            if (event instanceof HttpResponse) {
              this.removeRequest(req);
              observer.next(event);
            }
          },
          error: (err) => {
            console.log("err", err);
            this.removeRequest(req);
            observer.error(err);
          },
          complete: () => {
            this.removeRequest(req);
            observer.complete();
          }
        });
      
        // Remove the request from the queue when canceled
        return () => {
          this.removeRequest(req);
          subscription.unsubscribe();
        };
      });
  
    }
}