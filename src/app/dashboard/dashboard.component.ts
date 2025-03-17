import { Component } from '@angular/core';
import { AppTabsComponent } from '../tabs/tabs.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { CompositionChartComponent } from '../compositionChart/composition-chart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    AppTabsComponent,
    BarChartComponent,
    CompositionChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  selectedOption: string = 'Composição de Investimentos';

  tabsList = ['Composição de Investimentos', 'Investimento vs Tempo'];

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
