import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  data: string = 'default data';
  data2: string = 'default data2';
  @ViewChild('localReferenceViewChild') localReferenceViewChild: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onClick(localReference: HTMLInputElement) {
    this.data = localReference.value;
    // alert('local reference: ' + localReference.value);
  }

  onClick1() {
    this.data2 = this.localReferenceViewChild.nativeElement.value;
  }

}
