import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2ChartsRoutingModule } from './ng2-charts-routing.module';
import { Ng2ChartsComponent } from './ng2-charts/ng2-charts.component';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    Ng2ChartsComponent
  ],
  imports: [
    CommonModule,
    Ng2ChartsRoutingModule,
    BrowserModule,
    BaseChartDirective
  ],
  providers: [
    provideCharts(withDefaultRegisterables())
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Ng2ChartsModule { }
