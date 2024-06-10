import { Component } from '@angular/core';
import { CustomCapitalizePipe } from '../../pipes/custom-capitalize.pipe';

@Component({
  selector: 'app-pipe-exercise',
  templateUrl: './pipe-exercise.component.html',
  styleUrl: './pipe-exercise.component.scss'
})
export class PipeExerciseComponent {

  public numericVar: number = 34.22;
  public stringVar: string = "hello world";
}
