import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-behaviors',
  templateUrl: './simple-behaviors.component.html',
  styleUrls: ['./simple-behaviors.component.css']
})
export class SimpleBehaviorsComponent implements OnInit {

  @Input()
  title: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
