import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxChartsComponent } from './ngx-charts/ngx-charts/ngx-charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent, NgxChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
