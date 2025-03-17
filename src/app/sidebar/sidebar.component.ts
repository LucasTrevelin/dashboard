import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class AppSidebarComponent {
  @Output() optionSelected = new EventEmitter<string>();

  selectOption(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    console.log('Selected option:', selectedValue); // Debugging
    this.optionSelected.emit(selectedValue);
  }
}
