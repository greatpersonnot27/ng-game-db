import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({setHeaders: {
      'x-rapidapi-key': 'cb0f06b6b9mshfd9bf65eae74a0bp1260adjsn3b5439276669',
      'x-rapidapi-host': 'rawg-video-games-dataase.p.rapidapi.com',
    }, setParams: {key:'a;slkdjfa;lskdjf;'}})
    return next.handle(req);
  }
}
