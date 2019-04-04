import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { DashboardService } from 'src/app/modules/dashboard/dashboard.service';
import { throwError } from 'rxjs/internal/observable/throwError';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private _router:Router,private dashboardService:DashboardService) { }

  intercept(req, next) {
    let token = localStorage.getItem('token');
    let tokenReq;
    if (token) {
      tokenReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token 
        }
      })
    }
    else {
      tokenReq = req.clone();
    }

    return next.handle(tokenReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          /* publish the error for the component to subscribe and display */
          this.dashboardService.handleError(err);
          return throwError(err);
        }
      }));
  }
}
