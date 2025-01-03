import { Component } from '@angular/core';
import RechartsPieChart from '../../recharts-components/recharts-pie-chart';
import RechartsLineChart from '../../recharts-components/recharts-line-chart';
import RechartsBarChart from '../../recharts-components/recharts-bar-chart';
import RechartsComposedChart from '../../recharts-components/recharts-composed-chart';

@Component({
  selector: 'app-recharts',
  templateUrl: './recharts.component.html',
  styleUrl: './recharts.component.less'
})
export class RechartsComponent {
  
  public rechartsPieChart = RechartsPieChart;
  public rechartsLineChart = RechartsLineChart;
  public rechartsBarChart = RechartsBarChart;
  public rechartsComposedChart = RechartsComposedChart;

  chartData = {
    data: [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
    ],
  };

  dataBar = {
    data: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300
      }
    ]
  };

  lineData = {
    data: [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      }
    ],
  };
}
