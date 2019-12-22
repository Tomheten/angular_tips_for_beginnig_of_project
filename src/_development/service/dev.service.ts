import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { DevMenu } from '../component/dev.menu';

@Injectable()
export class DevService {
  constructor(private readonly cfResolver: ComponentFactoryResolver,
              private readonly injector: Injector) {
  }

  initDevMenu() {
    const factory = this.cfResolver.resolveComponentFactory(DevMenu);
    const componentRef = factory.create(this.injector);
    document.body.appendChild(componentRef.location.nativeElement);
  }
}
