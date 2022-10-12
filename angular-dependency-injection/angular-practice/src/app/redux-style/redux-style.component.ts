import { Component, OnInit } from '@angular/core';
import {delay, interval, map, Observable} from "rxjs";

@Component({
  selector: 'di-redux-style',
  templateUrl: './redux-style.component.html',
  styleUrls: ['./redux-style.component.scss']
})
export class ReduxStyleComponent implements OnInit {
  public readonly clock: Observable<Date> = new Observable().pipe(delay(1000), map(() => new Date()));

  constructor() { }

  ngOnInit(): void {
  }

}
