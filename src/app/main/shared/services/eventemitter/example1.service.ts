import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class Example1Service {
  statusUpdated = new EventEmitter<string>();

  constructor() { }

}
