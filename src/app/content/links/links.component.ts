import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LinksService } from './links.service'
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  providers: [LinksService]
})
export class LinksComponent implements OnInit {
    public links;
    constructor(private linksService: LinksService){
  
    }
    ngOnInit() {
      this.getLinks();
    }
  
    getLinks() {
      this.linksService.getNews().subscribe(
        data => {this.links = data},
        err => console.error(err),
        () => console.log('done loading links')
      );
    }
  
  }