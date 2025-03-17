import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import 'chartjs-plugin-datalabels'; // Register the plugin globally

@Component({
  selector: 'app-composition-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './composition-chart.component.html',
})
export class CompositionChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public compositionChartLabels: string[] = [
    'Ações',
    'Renda Fixa',
    'Imóveis',
    'Outros',
  ];

  public compositionChartType: ChartType = 'doughnut';

  public compositionChartData: ChartData<
    'doughnut',
    number[],
    string | string[]
  > = {
    labels: this.compositionChartLabels,
    datasets: [
      {
        data: [40, 30, 20, 10],
      },
    ],
  };

  public compositionChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        anchor: 'center',
        align: 'center',
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
          return '';
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
}
