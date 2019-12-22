import { ApplicationRef, ChangeDetectorRef, Component, ElementRef, ViewChild, ViewRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './dev.menu.html',
  styleUrls: ['./dev.menu.scss'],
})
export class DevMenu {
  @ViewChild('hostUrl', {static: false}) hostUrl: ElementRef;
  @ViewChild('menu', {static: false}) menu: ElementRef;
  menuOpened = false;
  hostUrlValue: string;

  constructor(public cd: ChangeDetectorRef, public http: HttpClient, private appRef: ApplicationRef) {
    appRef.attachView(cd as ViewRef);
    this.hostUrlValue = sessionStorage.getItem('hostUrl');
  }

  changeHostUrl() {
    sessionStorage.setItem(
      'hostUrl',
      (this.hostUrl.nativeElement as HTMLInputElement).value
    );
    location.reload();
  }

  getCurrentHostUrl(): string {
    return sessionStorage.getItem('hostUrl');
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
