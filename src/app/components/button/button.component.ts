import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() name: string;
  @Input() color: string;
  @Output() add = new EventEmitter();
  constructor() {}

  onAdd() {
    this.add.emit();
  }
}
