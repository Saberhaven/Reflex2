import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LinksService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get('./assets/links.json');
  }

}
