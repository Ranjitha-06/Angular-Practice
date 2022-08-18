import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  message = 'Hello World';
  canEdit = false;
  enabled() {
    this.canEdit = !this.canEdit;
  }
}
