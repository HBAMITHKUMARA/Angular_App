import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpProgressEvent,
    HttpRequest,
    HttpHandler,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpResponse,
    HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import * as fromAppReducer from '../store/app.reducers';
import * as fromAuthReducer from '../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    // intercept(req: HttpRequest<any>, next: HttpHandler):
    // Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    //     console.log('req:    ', req);
    //     const copiedReq = req.clone({params: req.params.set('auth', 'token')});
    //     console.log('copiedReq:    ', copiedReq);
    //     return next.handle(copiedReq);
    // }

    constructor(private store: Store<fromAppReducer.AppState>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        console.log('req:    ', req);
        return this.store.select('authReducer')
            .take(1)
            .switchMap(
                (auth: fromAuthReducer.State) => {
                const copiedReq = req.clone({params: req.params.set('auth', auth.token)});
                console.log('copiedReq:    ', copiedReq);
                return next.handle(copiedReq);
            }
        );
    }
}
