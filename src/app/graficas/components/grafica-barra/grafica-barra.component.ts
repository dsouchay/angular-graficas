import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit{

  @Input() horizontal:boolean = false;
  @Input() barChartLabels:string[] =  [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ];

  @Input() barChartData:ChartData<'bar'>  = {
    labels: this.barChartLabels,
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#F87A75',hoverBackgroundColor:'#DAD05F'},
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor:'#F07DDE',hoverBackgroundColor:'#DAD05F'},
     { data: [ 8, 33, 40, 46, 12, 87, 100 ], label: 'Series C', backgroundColor:'#BB75F8',hoverBackgroundColor:'#DAD05F'}
    ]
  };;


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';


  constructor(){


  }
  ngOnInit(): void {
    if (this.horizontal){
      this.barChartOptions = {...this.barChartOptions, indexAxis:'y'};
      this.chart?.update();
    }
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    // Only Change 3 values
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.chart?.update();
  }


}
