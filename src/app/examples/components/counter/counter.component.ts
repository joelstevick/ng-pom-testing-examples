import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input()
  title: string;
  
  counter = 0;
  label = 'Increment the counter';

  constructor() { }

  ngOnInit(): void {
  }

  incrementClicked() {
    this.counter ++;
  }
}
