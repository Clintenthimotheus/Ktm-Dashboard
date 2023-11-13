import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  HighCharts = Highcharts
  chartOptions = {}
  constructor() {
    this.chartOptions = {
      title: {
        text: '2023 Report',
        align: 'left'
      },
      subtitle: {
        text: 'Sales:@ ',
        align: 'left'
      },
      colors: [
        '#4caefe',
        '#3fbdf3',
        '#35c3e8',
        '#2bc9dc',
        '#20cfe1',
        '#16d4e6',
        '#0dd9db',
        '#03dfd0',
        '#00e4c5',
        '#00e9ba',
        '#00eeaf',
        '#23e274'
      ],
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        type: 'column',
        name: 'Unemployed',
        borderRadius: 5,
        colorByPoint: true,
        data: [5412, 4977, 4730, 4437, 3947, 3707, 4143, 3609,
          3311, 3072, 2899, 2887],
        showInLegend: false
      }]
    };

    
  }
}
