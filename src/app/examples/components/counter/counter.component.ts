import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1 data-testid="title">{{ title }}</h1>

    <button
      id="increment-btn"
      data-testid="increment-btn"
      (click)="incrementClicked()"
    >
      {{ label }}
    </button>

    <div data-testid="counter">{{ counter }}</div>

    <div class="mat-progress-bar-container">
      <mat-progress-bar
        *ngIf="counter > 0"
        data-testid="progress-control"
        [value]="counter"
      ></mat-progress-bar>
    </div>
  `,
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input()
  title: string;

  counter = 0;
  label = 'Increment the counter';

  constructor() {}

  ngOnInit(): void {}

  incrementClicked() {
    this.counter++;
  }
}
