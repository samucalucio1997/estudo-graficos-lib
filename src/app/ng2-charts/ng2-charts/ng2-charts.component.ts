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

  public lineChartType: ChartType = 'line' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['maio', 'junho', 'julho', 'agosto', 'setetmbro', 'outubro', 'novembro'],
    datasets: [
      { data: [55017.79, 39500.18, 59357.50, 15791.09, 45524.86, 10985.11, 129068.28], label: 'Series A',backgroundColor: '#FF9F40', borderWidth: 1 },
      { data: [14611.77, 1222.22, 530.00, 60.00, 505.00, 0, 25213.60], label: 'Series B',  backgroundColor: '#36A2EB', borderWidth: 1},
      { data: [0, 24888.41, 58135.28, 15261.09, 45464.86, 10480.11, 103854.68], label: 'Series C', backgroundColor: '#FFCE56' }
    ],
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ["Mayrcon Profissional",
    "Antonio",
    "APRESENTAÇÃO - Profissional",
    "Floriswaldo Apresentação",
    "Antônio Rodrigues",
    "Jefferson Ferreira MED",
    "Julio Menacho",
    "[CLINIC-2543] Profissional I"],
    datasets: [
      {
        data: [8, 6, 6, 4, 3, 2, 1, 1],
        backgroundColor: [
        '#A0522D', // Original
        '#36A2EB', // Original
        '#FFCE56', // Original
        '#4BC0C0', // Nova cor
        '#9966FF', // Nova cor
        '#FF9F40',
        '#FF6347',
        '#4B0082' // Nova cor
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
      { data: [28, 48, 40, 19, 96, 27, 100], backgroundColor:'', label: 'Series B' },
    ],
  };

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [55017.79, 39500.18, 59357.5, 15791.09, 45524.86, 10985.11, 129068.28],
        label: 'Receitas',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'green',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [14611.77, 1222.22, 530, 60, 505, 0, 25213.6],
        label: 'Despesas',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'orange',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [24888.41, 58135.28, 15261.09, 45464.86, 10480.11, 0],
        label: 'Saldo',
        borderColor: 'blue',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro'],
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

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },

    plugins: {
      legend: { display: true }
    },
  };


}
