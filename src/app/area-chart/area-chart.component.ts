import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  HighCharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      title: {
        text: 'KTM INDIA',
        align: 'center'
    },

    subtitle: {
        text: 'Bajaj Auto Ltd. All rights reserved',
        align: 'center'
    },

    yAxis: {
        title: {
            text: 'Report'
        }
    },
    credits:{
      enabled:false
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2012 to 2022'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2012
        }
    },

    series: [{
        name: 'NAKED BIKE',
        data: [43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 155157, 161454, 154610]
    }, {
        name: 'SUPERSPORT',
        data: [43834, 37941, 29742, 29851, 32490, 100282,
            128121, 136885,  145157, 161454, 150610]
    }, {
        name: 'TRAVEL',
        data: [11744, 30000, 16005, 19771, 20185, 24377,
            85147, 95912, 105243, 150213, 145663]
    },],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
    }
  }

}
