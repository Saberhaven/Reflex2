import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
  apiURL = "./api/utils.api.php"
  public _categories = new Subject<any>();
  public _topics = new Subject<any>();
  
  constructor(private httpClient: HttpClient) { }

  getCategories(action: string) {
    const params = {'action':action};
    this.httpClient.post<Category>(this.apiURL, params)
    .subscribe(
      (response: object) => {
        this._categories.next(response);
      }
    ) 
  }

  getTopics(action: string, cat: string) {
    const params = {'action':action, 'cat':cat};
    this.httpClient.post<Category>(this.apiURL, params)
    .subscribe(
      (response: object) => {
        this._topics.next(response);
      }
    ) 
  }

  getLoadedCategories():Subject<Category[]> {
    return this._categories
  }
  getLoadedTopics():Subject<Category[]> {
    return this._topics
  }

}

interface Category{
  cat1: string;
  cat2: string;
  catid1: number;
  catid2: number;
  catrole: string;
  deptid: number;
  fullcatid: number;
}
