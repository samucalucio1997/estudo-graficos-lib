import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsComponent } from './ngx-charts/ngx-charts/ngx-charts.component';

const routes: Routes = [
  {path: "",component: NgxChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
