import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthorService {
  private artRet;
  private _article = new BehaviorSubject<any>('');
  cast = this._article.asObservable();

  apiURL = "./api/article.api.php"
  constructor(private http: HttpClient) { }

  getArticle(id) {
    this.artRet = this.http.get(this.apiURL, {
    });
    // console.log(this.artRet);
    return this._article.next(this.artRet);

  }

}