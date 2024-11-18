import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechartsRoutingModule } from './recharts-routing.module';
import { RechartsComponent } from './recharts/recharts.component';
import { ReactHostComponent } from '../recharts-components/react-host.componet';


@NgModule({
  declarations: [
    RechartsComponent, ReactHostComponent
  ],
  imports: [
    CommonModule,
    RechartsRoutingModule
  ]
})
export class RechartsModule { }
