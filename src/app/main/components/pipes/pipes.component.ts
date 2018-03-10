import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  name = 'angular';
  now = Date.now();
  user = {
    'email': 'test@gmail.com',
    'token': 'niosdgiungs87trq3'
  };

  constructor() { }

  ngOnInit() {
  }

}
