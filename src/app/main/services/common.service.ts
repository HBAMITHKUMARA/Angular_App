import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

  constructor(private apiService: ApiService) { }

  query(path: string, params: HttpParams = new HttpParams(), query: string): Observable<any> {
    return this.apiService.get(path)
      .map((res) => {
        return res[query];
      });
  }

}
