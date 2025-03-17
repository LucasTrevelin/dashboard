import { Component } from '@angular/core';
import { AppSidebarComponent } from '../sidebar/sidebar.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    AppSidebarComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  selectedOption: string = 'pieChart';

  onOptionSelected(option: string) {
    console.log('Selected option:', option);
    this.selectedOption = option;
  }
}
