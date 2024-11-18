import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-ng2-charts',
  templateUrl: './ng2-charts.component.html',
  styleUrl: './ng2-charts.component.less'
})
export class Ng2ChartsComponent implements OnInit{
  chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      }
    },
  };
  public barChartType = 'bar' as const;

  public pieChartType = 'pie' as const;

  public radarChartType: ChartType = 'radar';

  public polarAreaChartType: ChartType = 'polarArea' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['maio', 'junho', 'julho', 'agosto', 'setetmbro', 'outubro', 'novembro'],
    datasets: [
      { data: [55017.79, 39500.18, 59357.50, 15791.09, 45524.86, 10985.11, 129068.28], label: 'Series A',backgroundColor: '#FF9F40', borderWidth: 1 },
      { data: [14611.77, 1222.22, 530.00, 60.00, 505.00, 0, 25213.60], label: 'Series B',  backgroundColor: '#36A2EB', borderWidth: 1},
      { data: [0, 24888.41, 58135.28, 15261.09, 45464.86, 10480.11, 103854.68], label: 'Series C', backgroundColor: '#FFCE56' }
    ],
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: [
        '#FF9F40AA', // Original
        '#36A2EB', // Original
        '#FFCE56', // Original
        '#4BC0C0', // Nova cor
        '#9966FF', // Nova cor
        '#FF9F40', // Nova cor
        ]
      },
    ],
  };

  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], backgroundColor:'', label: 'Series A' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' },
    ],
  };

  ngOnInit(): void {
  //  this.barChartData.datasets[0].backgroundColor = ''
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }
}
