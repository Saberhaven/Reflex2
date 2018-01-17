import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute} from "@angular/router";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ArticleService {
  apiURL = "./api/article.api.php"
  constructor(private http: HttpClient) { }

  getArticle(id: number, action: string) {
    const params = {'id':id, 'action':action};
    return this.http.post(this.apiURL, params);

  }

}