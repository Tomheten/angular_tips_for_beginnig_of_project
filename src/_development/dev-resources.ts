import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, NgZone } from '@angular/core';
import { DevService } from './service/dev.service';
import { DevInterceptor } from './interceptor/dev-interceptor';
import { DevMenu } from './component/dev.menu';
import { initDevResources } from './init-functions';

export const devProviders = [
  {
    provide: APP_INITIALIZER,
    useFactory: initDevResources,
    deps: [HttpClient, DevService],
    multi: true
  },
  DevService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: DevInterceptor,
    multi: true
  }
];

export const devComponents = [
  DevMenu
];
