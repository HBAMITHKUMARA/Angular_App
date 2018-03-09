import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../../shared/services';

@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.css']
})
export class Observable2Component implements OnInit {
  status = false;

  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    this.observableService.isActivated.subscribe(
      (res: boolean) => {
        this.status = res;
      }
    );
  }

}
