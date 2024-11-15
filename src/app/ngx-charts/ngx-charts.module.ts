import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsRoutingModule } from './ngx-charts-routing.module';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    NgxChartsComponent
  ],
  imports: [
    CommonModule,
    NgxChartsRoutingModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class NgxChartsModule { }
