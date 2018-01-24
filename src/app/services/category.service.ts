import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
  apiURL = "./api/utils.api.php"
  public _categories = new Subject<any>();
  
  constructor(private httpClient: HttpClient) { }

  getCategories(action: string) {
    const params = {'action':action};
    this.httpClient.post(this.apiURL, params)
    .subscribe(
      (response: object) => {
        this._categories.next(response);
      }
    ) 
  }

  getLoadedCategories():Subject<object> {
    return this._categories
  }

}
