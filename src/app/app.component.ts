import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularBootCampHomeworksGamalielMendez';
  arrayOfLetters: Array<string> = ['A', 'B', 'C'];
}
