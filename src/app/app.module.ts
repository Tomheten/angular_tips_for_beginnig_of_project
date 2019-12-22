import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { devComponents, devProviders } from "../_development/dev-resources";
import { HttpClientModule } from "@angular/common/http";
import { GreetingService } from "./service/greeting.service";

const additionalProviders = [];
const additionalComponents = [];

if (!environment.production) {
  additionalProviders.push(devProviders);
  additionalComponents.push(devComponents);
}

@NgModule({
  declarations: [
    AppComponent,
    ...additionalComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GreetingService, ...additionalProviders],
  bootstrap: [AppComponent],
  entryComponents: [
    ...additionalComponents
  ]
})
export class AppModule {
}
