import { Component, OnInit } from '@angular/core';

import { ObservableService } from '../../../shared/services';

@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {

  constructor(private observableService: ObservableService) { }

  ngOnInit() {
  }

  onClick() {
    this.observableService.isActivated.next(true);
  }

  onClickD() {
    this.observableService.isActivated.next(false);
  }

}
