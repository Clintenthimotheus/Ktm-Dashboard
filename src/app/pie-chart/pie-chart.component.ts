import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  HighCharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ' Market shares in May, 2023',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'KTM 390 DUKE',
            y: 7.67,
            sliced: true,
            selected: true
        }, {
            name: 'KTM 250 DUKE',
            y: 8.77
        },  {
            name: ' KTM 200 DUKE',
            y: 6.86
        }, {
            name: 'KTM 125 DUKE',
            y: 4.63
        }, {
            name: 'KTM RC 390',
            y: 4.53
        },  {
            name: 'KTM RC 200',
            y: 4.40
        }, {
            name: 'KTM RC GP',
            y: 3.84
        }, {
            name: 'KTM RC 125',
            y: 4.51
        }, {
            name: '2023 KTM 390 ADVENTURE',
            y: 2.6
        } , {
          name: 'KTM 390 ADVENTURE',
          y: 4.40
      }, {
          name: 'KTM 390 ADVENTURE X',
          y: 3.84
      }, {
          name: 'KTM 250 ADVENTURE',
          y: 5.51
      },]
    }]
    }

  }
}
