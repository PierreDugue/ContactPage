import { Injectable } from '@angular/core';
import { contact } from '../models/contact-model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const URL = "http://localhost:5000"

@Injectable()
export class ContactService {
  public res;

  constructor(private http: Http) {
  }

  sendContactDatas(event): Observable<any> {
    return this.http.post(URL + '/api/contact/', event)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
