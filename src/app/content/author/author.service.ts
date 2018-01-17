import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthorService {
  apiURL = "./api/article.api.php"
  constructor(private http: HttpClient) { }

  getArticle(id) {
    return this.http.get(this.apiURL, {
    });
  }

}