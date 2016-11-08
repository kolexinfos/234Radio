import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MessageProvider {

  url:string = 'https://shoppa.herokuapp.com/misc/';
  
  constructor(private http: Http) {}

  CreateReport(report){

    let headers =  new Headers({'Content' : 'application/json'});
    let options = new RequestOptions({ headers : headers});

    var response = this.http.post(this.url + 'createReport',report, options);
    return response;
  }

}

