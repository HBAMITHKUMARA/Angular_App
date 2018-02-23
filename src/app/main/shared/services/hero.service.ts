import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiService } from '../services/api.service';
import { Hero } from '../models';

@Injectable()
export class HeroService {

  constructor(private apiService: ApiService) { }

  getHeroes(path: string, params: HttpParams = new HttpParams()): Observable<Hero[]> {
    // console.log('in hero serv: path  ', path);
    return this.apiService.get(path, params);
  }

}
