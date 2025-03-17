import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
})
export class AppTabsComponent {
  @Input() tabsList: string[] = [
    'Composição de Investimentos',
    'Investimento vs Tempo',
  ];

  @Output() optionSelected = new EventEmitter<string>();

  activeTab = this.tabsList[0];

  selectTab(tab: string, event: Event): void {
    event.preventDefault();
    this.activeTab = tab;
    this.optionSelected.emit(tab);
  }
}
