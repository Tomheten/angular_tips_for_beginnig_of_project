import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DevService } from '../service/dev.service';

@Injectable()
export class DevInterceptor implements HttpInterceptor {
  private hostUrl = sessionStorage.getItem('hostUrl') || '';

  constructor(private readonly devService: DevService) {
    devService.initDevMenu();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({url: this.hostUrl + req.url}));
  }
}
