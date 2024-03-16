import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  handleSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
