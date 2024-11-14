import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsComponent } from './ngx-charts/ngx-charts/ngx-charts.component';
import { Ng2ChartsComponent } from './ng2-charts/ng2-charts/ng2-charts.component';

const routes: Routes = [
  {path: "",component: NgxChartsComponent},
  {path: "ng2-charts",component: Ng2ChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
