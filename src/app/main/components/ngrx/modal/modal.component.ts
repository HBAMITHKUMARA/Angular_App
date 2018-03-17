import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() index: number;
  @Input() id: string;
  @Input() content: string;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  childEventFunction() {
    this.childEvent.emit({event: 'delete', id: this.index});
  }

}
