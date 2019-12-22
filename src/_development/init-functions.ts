import { HttpClient } from '@angular/common/http';
import { take } from "rxjs/operators";
import { DevService } from "./service/dev.service";

export function initDevResources(http: HttpClient, devService: DevService) {
  return () => new Promise(resolve => {
    http.get('')
      .pipe(take(1))
      .subscribe(
        value => undefined,
        error => undefined
      )
      .unsubscribe();

    devService.initDevMenu();

    resolve();
  });
}
