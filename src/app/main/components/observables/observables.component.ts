import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  test1: number;
  test2: string;
  observable1Sub: Subscription;
  observable2Sub: Subscription;

  constructor() { }

  ngOnInit() {
    this.Observable1();
    this.Observable2();
  }

  Observable1() {
    const observable1 = Observable.interval(2000);
    this.observable1Sub = observable1.subscribe(
      (num: number) => {
        this.test1 = num;
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
        this.test2 = data;
      },
      // (error: string) => {
      //   console.log(error);
      // },
      () => {
        this.test2 = 'completed';
      }
    );
  }

  ngOnDestroy() {
    this.observable1Sub.unsubscribe();
    this.observable2Sub.unsubscribe();
  }

}
