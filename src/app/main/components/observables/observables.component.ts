import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  observable1Sub: Subscription;
  observable2Sub: Subscription;

  constructor() { }

  ngOnInit() {
    // this.Observable1();
    this.Observable2();
  }

  Observable1() {
    const observable1 = Observable.interval(2000);
    this.observable1Sub = observable1.subscribe(
      (num: number) => {
        console.log('--> ', num);
      }
    );
  }

  Observable2() {
    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first observer');
        }, 2000);
        setTimeout(() => {
          observer.next('second observer');
        }, 4000);
        setTimeout(() => {
          observer.error('this does not work');
        }, 6000);
      }
    );
    this.observable2Sub = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      // (error: string) => {
      //   console.log(error);
      // },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy() {
    this.observable1Sub.unsubscribe();
    this.observable2Sub.unsubscribe();
  }

}
