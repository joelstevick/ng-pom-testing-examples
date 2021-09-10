import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentational',
  templateUrl: './presentational.component.html',
  styleUrls: ['./presentational.component.css']
})
export class PresentationalComponent implements OnInit {

  @Input()
  title: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
