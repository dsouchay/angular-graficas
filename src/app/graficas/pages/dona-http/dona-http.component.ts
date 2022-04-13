import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public colors:Color[]=[
    '#7B21FD',
    '#2D5DFA',
    '#71B0E3',
    '#29D0FD',
    '#21DEFD',
    '#61DAAD',
];

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [  ],backgroundColor:this.colors,hoverBackgroundColor:'#FF8775' },

    ],

  };
  public doughnutChartType: ChartType = 'doughnut';



  constructor(private graficasService:GraficasService) { }

  ngOnInit(): void {
    // this.graficasService.getUsuarioRedessociales()
    //   .subscribe((d) => {
    //     const values = Object.values(d);
    //     this.doughnutChartData.datasets[0].data = values;
    //     const labels = Object.keys(d);
    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.labels = labels;
    //   });

      this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe(({labels, values })=>{
        this.doughnutChartData.datasets[0].data = values;
        this.doughnutChartLabels = labels;
        this.doughnutChartData.labels = labels;
      });

  }
}
