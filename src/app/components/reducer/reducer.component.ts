import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-reducer',
  templateUrl: './reducer.component.html',
  styleUrls: ['./reducer.component.scss'],
})
export class ReducerComponent {
  private arr = [1, 4, 5, 22, 4, 6];

  public maxNumber = new BehaviorSubject<number>(0);
}
