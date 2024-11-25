import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexMarkers, ApexStroke, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  labels: string[];
  yaxis: ApexYAxis | ApexYAxis[];
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-apex-charts',
  templateUrl: './apex-charts.component.html',
  styleUrl: './apex-charts.component.less'
})
export class ApexChartsComponent {
  
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions>;
  chartd = {
    type: 'bar',
    toolbar: {
      show: true, // Mostra a barra de ferramentas
      tools: {
        download: true // Habilita o menu de download
      },
      export: {
        csv: {
          filename: 'dados',
          columnDelimiter: ',',
          headerCategory: 'Categoria',
          headerValue: 'Valor',
          dateFormatter: (timestamp: number) => {
            return new Date(timestamp).toLocaleDateString('pt-BR');
          }
        },
        svg: {
          filename: 'grafico'
        },
        png: {
          filename: 'grafico'
        }
      },
      menu: {
        items: {
          downloadSVG: 'Baixar SVG',
          downloadPNG: 'Baixar PNG',
          downloadCSV: 'Baixar CSV'
        }
      }
    }
  }

  constructor() {
    this.chartOptions1 = {
      series: [
        {
          name: "Website Blog",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
          name: "Social Media",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: true, // Mostra a barra de ferramentas
          tools: {
            download: false, // Ativa o botão padrão de download
            // customIcons: [
            //   {
            //     icon: '<img src="data:image/svg+xml;base64,...svg_encoded_data..." width="20"/>', // Ícone customizado (pode ser um SVG)
            //     title: 'Baixar Gráfico', // Texto ao passar o mouse
            //     class: 'custom-download-btn', // Classe CSS (se necessário)
            //     index: -1, // Posição no menu
            //     click: function (chart: any, options: any) {
            //       // Ação ao clicar no botão
            //       chart.dataURI().then((uri: any) => {
            //         const link = document.createElement('a');
            //         link.href = uri.imgURI;
            //         link.download = 'grafico.png'; // Nome do arquivo
            //         link.click();
            //       });
            //     }
            //   }
            // ]
          }
        }
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: "Traffic Sources"
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: [
        {
          title: {
            text: "Website Blog"
          }
        },
        {
          opposite: true,
          title: {
            text: "Social Media"
          }
        }
      ]
    };

    this.chartOptions = {
      series: [
        {
          name: "receita",
          data: [28, 29, 33, 36.52, 32.201, 32.402, 33.505]
        },
        {
          name: "saldo", 
          data: [16, 17, 19, 18.4, 15.201, 19.402, 20.505]
        },
        {
          name: "despesa",
          data: [12, 11.541, 14, 18.120, 17, 13, 13]
        },
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#6EA3C1", "#81CF91", "#FFB574"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Recita x Despesa",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        title: {
          text: "mês"
        }
      },
      yaxis: {
        title: {
          text: "R$ ( mil )"
        },
        min: 5,
        max: 40
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
  }
}
