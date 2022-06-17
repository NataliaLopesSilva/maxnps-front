import { environment } from './../../../environments/environment.prod';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone(
      { 
        url: `${environment.BASE_URL}${req.url}`,
        setHeaders: {
          
        }
      });
    return next.handle(apiReq);
  }
}
