import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'di-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  margin = '16px';
  fill = '#fff';

  constructor() { }

  ngOnInit(): void {
  }

}
