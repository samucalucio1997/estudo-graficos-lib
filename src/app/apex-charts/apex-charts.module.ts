import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    ApexChartsComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApexChartsModule { }
