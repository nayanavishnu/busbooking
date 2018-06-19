import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Bus } from 'src/app/shared/modal/bus';
import { Busroute } from 'src/app/shared/modal/busroute';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  // baseurl = "https://jsonplaceholder.typicode.com/";
  baseurl = "http://localhost:8081/";
  constructor(private http: HttpClient) { }

  getBusList_get() {
    return this.http.get(this.baseurl + "bus");
  }

  getBusList_post() {
    let obj = {};
    return this.http.post(this.baseurl + "bus", obj).do(res=>{
    })
    .map(res => this.convertData(res))
    .catch(this.errorHandler);
  }
  errorHandler(error){
    return Observable.throw(error);
  }
  convertData(res) {
    let convertData = res.map(this.formatData);    
    return convertData;
  }

  formatData(data) {
    let routes = new Busroute(data.busroute.id, data.busroute.from, data.busroute.to, data.busroute.date);
    let bus = new Bus(data.id, data.name, routes, data.totalseat, [], data.rate);
    return bus;
  }

}
