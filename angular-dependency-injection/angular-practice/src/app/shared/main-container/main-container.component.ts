import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'di-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent {
  @Input() title: string = '';

  constructor() {}
}
