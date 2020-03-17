import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { pipe } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {
    constructor(private ngxService: NgxUiLoaderService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.ngxService.start()

        const modifiedReq = req.clone({
            // params: new HttpParams().set('auth',)
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        });
        this.ngxService.stop()
        return next.handle(modifiedReq);
        
    }
}