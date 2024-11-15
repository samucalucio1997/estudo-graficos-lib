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
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(pt);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    Ng2ChartsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    provideCharts(withDefaultRegisterables()),
    provideAnimationsAsync(),
    { provide: NZ_I18N, useValue: pt_BR },
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
