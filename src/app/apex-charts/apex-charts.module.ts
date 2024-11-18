import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';



@NgModule({
  declarations: [
    ApexChartsComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApexChartsModule { }
