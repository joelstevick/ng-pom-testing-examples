import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  someData: string;

  @Output()
  clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clicked.emit()
  }
}
