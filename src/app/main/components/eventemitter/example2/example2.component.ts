import { Component, OnInit } from '@angular/core';

import { Example1Service } from '../../../shared/services';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {

  constructor(private example1Service: Example1Service) {
    this.example1Service.statusUpdated.subscribe(
      (status: string) => {
        alert('Im from Example2Component: ' + status);
        console.log('Im from Example2Component: ' + status);
      }
    );
  }

  ngOnInit() {
  }

}
