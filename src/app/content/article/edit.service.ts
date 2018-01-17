import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class EditService {
  private id = new BehaviorSubject<number>(0);
  outID = this.id.asObservable();


  editArticle(id) {
    this.id = id;
    console.log(id);
  }


  pullArticle() {
    this.outID;
  }


}
