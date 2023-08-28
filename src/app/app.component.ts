import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beyonnex-frontend-task';

  maxTemp: number = 100;
  minTemp: number = 0;
  currentTemp: number = 22;
}
