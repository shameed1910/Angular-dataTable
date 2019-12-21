import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

    constructor(private injector:Injector) { }
  
    intercept(req: HttpRequest<any>, next: HttpHandler) {
  let auService=this.injector.get(AuthenticationService);
      if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
        req = req.clone({
          setHeaders: {
            Authorization:auService.getToken()
          }
        })
      }
  
      return next.handle(req);
  
    }
  }
  