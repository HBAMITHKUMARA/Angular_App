import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.css']
})
export class ComponentLifecycleComponent implements OnInit {
  data: string = 'default data';

  constructor() { }

  ngOnInit() {
  }

  onClick(localReference: HTMLInputElement) {
    this.data = localReference.value;
    console.log('onClick called!');
  }

}
