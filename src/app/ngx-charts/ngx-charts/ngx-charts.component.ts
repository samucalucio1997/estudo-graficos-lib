import { Component, OnInit } from '@angular/core';
import { data, seriesData } from '../ngx-data.model';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrl: './ngx-charts.component.less'
})
export class NgxChartsComponent implements OnInit{
  public single: { name: string, value: number }[] = [];

  public view: number[] = [700, 400];

  // options
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel: string = 'Country';
  public showYAxisLabel = true;
  public yAxisLabel: string = 'Population';

  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal
  };

  constructor() {}
 
  ngOnInit() {
    const data: seriesData[] = [
      {
        "name": "Germany",
        "value": 8940000
      },
      {
        "name": "USA",
        "value": 5000000
      },
      {
        "name": "France",
        "value": 7200000
      }
    ];
    this.single = data;
  }


}
