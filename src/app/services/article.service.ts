import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ActivatedRoute } from "@angular/router";
import { Subject } from 'rxjs/Subject';
import { Article } from './article.model'
import 'rxjs/add/operator/map';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class ArticleService {
  apiURL = "./api/article.api.php"
  public articleData = new Subject<Article>();
  
  constructor(private httpClient: HttpClient) { }

  getArticle(id: number, action: string) {
    const params = {'id':id, 'action':action};
    this.httpClient.post(this.apiURL, params)
    .subscribe(
      (response:Article) => {
        this.articleData.next(response);
      }
    ) 
  }

  getLoadedArticle():Subject<Article> {
    return this.articleData
  }

}


