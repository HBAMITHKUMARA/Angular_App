import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Example1Service } from '../../../shared/services';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {
  @Output() eventCreated = new EventEmitter<any>();

  constructor(private example1Service: Example1Service) {
    this.example1Service.statusUpdated.subscribe(
      (status: string) => {
        alert(status);
        console.log(status);
      }
    );
  }

  ngOnInit() {
  }

  onClick1(event) {
    this.eventCreated.emit('event emitted by Example2Component');
  }

}
