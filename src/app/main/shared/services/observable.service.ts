import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ObservableService {
  isActivated = new Subject();

  constructor() { }

}
