import { Component, OnInit } from '@angular/core';

import { Example1Service } from '../../../shared/services';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  constructor(private example1Service: Example1Service) { }

  ngOnInit() {
  }

  onClick() {
    this.example1Service.statusUpdated.emit('event emitted by Example1Component');
  }

  onEventCreate(status) {
      console.log(status);
      alert(status);
  }

}
