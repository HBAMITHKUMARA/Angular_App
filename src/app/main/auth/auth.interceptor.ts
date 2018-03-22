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

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        console.log('req:    ', req);
        const copiedReq = req.clone({params: req.params.set('auth', 'token')});
        console.log('copiedReq:    ', copiedReq);
        return next.handle(copiedReq);
    }
}
