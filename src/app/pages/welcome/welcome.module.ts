import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { Ng2ChartsComponent } from '../../ng2-charts/ng2-charts/ng2-charts.component';
import { Ng2ChartsModule } from '../../ng2-charts/ng2-charts.module';


@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
