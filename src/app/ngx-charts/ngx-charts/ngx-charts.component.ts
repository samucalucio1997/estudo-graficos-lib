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
  public xAxisLabel: string = 'profissionais';
  public showYAxisLabel = true;
  public yAxisLabel: string = 'agendamentos';
  public isDoughnut: boolean = false;
  public legendPosition: string = 'below';

  public colorScheme = {
    domain: [] as string[],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal
  };

  public dataMulti = [
    {
      "name": "Mai",
      "series": [
        { "name": "Receitas", "value": 50000 },
        { "name": "Despesas", "value": 10000 },
        { "name": "Saldo", "value": 40000 }
      ]
    },
    {
      "name": "Jun",
      "series": [
        { "name": "Receitas", "value": 40000 },
        { "name": "Despesas", "value": 15000 },
        { "name": "Saldo", "value": 25000 }
      ]
    },
  ];

  constructor() {}
 
  ngOnInit() {
    const data: seriesData[] = [
      {
        "name": "Mayrcon Profissional",
        "value": 8
      },
      {
        "name": "Antonio",
        "value": 6
      },
      {
        "name": "APRESENTAÇÃO - Profissional",
        "value": 6
      },
      {
        "name": "Floriswaldo Apresentação",
        "value": 4
      },
      {
        "name": "Antônio Rodrigues",
        "value": 3
      },
      {
        "name": "Jefferson Ferreira MED",
        "value": 2
      },
      {
        "name": "Julio Menacho",
        "value": 1
      },
      {
        "name": "[CLINIC-2543] Profissional I",
        "value": 1
      }
    ];
    this.colorScheme.domain.push(...this.gerarCoresAleatorias(data.length));
    this.single = data;
  }

  private gerarCoresAleatorias(numColors: number): string[] {
    let colors = [];
    for (let i = 0; i < numColors; i++) {
        colors.push(this.getRandomColor());
    }
    return colors;
  }

  xAxisFormatter(label: string): string {
    return label.length > 5 ? label.slice(0, 5) + '...' : label;
  }

  private getRandomColor():string {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    
    return `#${randomColor.padStart(6, '0')}`;
}
}
