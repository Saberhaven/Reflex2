import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SsoService } from '../sso.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SsoService]
})
export class HeaderComponent implements OnInit {
  private user;
  constructor(private ssoService: SsoService) { }

  ngOnInit() {
    this.getSso();

  }

  getSso() {
    this.ssoService.getSso().subscribe(
      data => {this.user = data},
      err => console.error(err),
      () => console.log(this.user)
    );
    
  }

}
