import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2ChartsRoutingModule } from './ng2-charts-routing.module';
import { Ng2ChartsComponent } from './ng2-charts/ng2-charts.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';


@NgModule({
  declarations: [
    Ng2ChartsComponent
  ],
  imports: [
    CommonModule,
    Ng2ChartsRoutingModule
  ],
  providers: [
    provideCharts(withDefaultRegisterables())
  ]
})
export class Ng2ChartsModule { }
