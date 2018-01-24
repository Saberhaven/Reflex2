import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthorService {
  public article;
  private apiURL = "./api/article.api.php";
  constructor(private http: HttpClient) { }

  setArticle(value) {
    console.log(value);

      const params = {'id':value.id, 'action':'pull'};
      this.article = this.http.post(this.apiURL, params);
      console.log(this.article);
  }
  

  getArticle() {
    return this.article;
   }

}