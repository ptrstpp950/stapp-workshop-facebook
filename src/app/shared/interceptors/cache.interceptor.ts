import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CacheManagerService } from '../services/cache-manager.service';
import { tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

  constructor(
    private cache: CacheManagerService
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Man!! You are requesting " + req.url);

    if (this.cache.has(req.url)) {
      console.log("Man!! Cached!!!! For " + req.url);
      return of(this.cache.get(req.url));
    }
    return next.handle(req)
      .pipe(
          filter(evt => evt instanceof HttpResponse),
          tap((response) => {
            this.cache.save(req.url, response);
          })
      )
  }
}
