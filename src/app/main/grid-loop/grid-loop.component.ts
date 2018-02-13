import { Component, OnInit, OnDestroy  } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { HeroService } from '../services';
import { Hero } from '../models';

@Component({
  selector: 'app-grid-loop',
  templateUrl: './grid-loop.component.html',
  styleUrls: ['./grid-loop.component.css']
})

export class GridLoopComponent implements OnInit, OnDestroy  {
  loading = true;
  error = true;
  name: string;
  heroes: Hero[];
  heroesObservable: Observable<Hero[]>;
  private subscription: Subscription;
  errorMessage = 'this is the test error message.';

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.populateHeros();
    setTimeout
    this.heroesObservable = this.heroService
      .getHeroes('./assets/data/hero.json', new HttpParams());
  }

  ngOnDestroy(): void {
    console.log('log: after - 1 ', this.subscription);
    this.subscription.unsubscribe();
    console.log('log: after - 2 ', this.subscription);
  }

  populateHeros() {
    this.subscription = this.heroService
    .getHeroes('./assets/data/hero.json', new HttpParams())
    .subscribe(
      (res) => {
        this.heroes = res;
        this.loading = false;
        this.error = true;
        },
      (error) => {
        this.loading = false;
        this.error = false;
        console.log('error in retrieving heroes data');
      }
    );
    console.log('log: before ', this.subscription);
  }

}
