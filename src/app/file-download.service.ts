import { Injectable } from '@angular/core';
import { Http,ResponseContentType,Headers } from '@angular/http';
//import { Http, Response ,Headers } from "@angular/http";

import { HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';
//import { ResponseContentType } from '@angular/http/src/enums';
//import { Http, Response ,Headers } from "@angular/http";

@Injectable()
export class FileDownloadService {

  constructor(private http:Http,private authenticationService:AuthenticationService) { }
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', this.authenticationService.getToken()); 
  }
  downloadFile(data):Observable<any>{
    let headers= new Headers();
    this.createAuthorizationHeader(headers);
    // we would call the spring-boot service
    const REQUEST_PARAMS = new HttpParams().set('fileName', data.fileName);
    const REQUEST_URI = '/demo/download';
    return this.http.get(REQUEST_URI,{
      params: REQUEST_PARAMS,

      //headers:headers,
      responseType: ResponseContentType.Blob
    })


  }

}
