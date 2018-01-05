import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SsoService {
  apiURL = "./api/sso.api.php"
  constructor(private http: HttpClient) { }

  getSso() {
    return this.http.get(this.apiURL, {
    });
  }

}
