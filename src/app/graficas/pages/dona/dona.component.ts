import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  public colors:Color[]=[
    '#7B21FD',
    '#2D5DFA',
    '#71B0E3',
    '#21DEFD',
];

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ,'Others'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100,40 ],backgroundColor:this.colors,hoverBackgroundColor:'#FF8775' },

    ],

  };
  public doughnutChartType: ChartType = 'doughnut';



  constructor() { }

  ngOnInit(): void {
  }

}
