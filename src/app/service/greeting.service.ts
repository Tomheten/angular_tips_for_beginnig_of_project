import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GreetingService {
  constructor(private readonly http: HttpClient) {
  }

  getGreeting() {
    this.http.get('greeting').subscribe((success: any) => alert(success.data));
  }
}
