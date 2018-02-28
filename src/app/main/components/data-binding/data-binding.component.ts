import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  data: string = 'default data';

  constructor() { }

  ngOnInit() {
  }

  onClick(localReference: HTMLInputElement) {
    this.data = localReference.value;
  }

}
