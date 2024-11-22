import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxChartsComponent } from './ngx-charts/ngx-charts/ngx-charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { Ng2ChartsComponent } from './ng2-charts/ng2-charts/ng2-charts.component';
import { Ng2ChartsModule } from './ng2-charts/ng2-charts.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactHostComponent } from './recharts-components/react-host.componet';
import { RechartsModule } from './recharts/recharts.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { ApexChartsComponent } from './apex-charts/apex-charts/apex-charts.component';


@NgModule({
  declarations: [
    AppComponent, NgxChartsComponent, ApexChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    RechartsModule,
    Ng2ChartsModule,
    NgApexchartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    provideCharts(withDefaultRegisterables()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
