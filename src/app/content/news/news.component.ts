import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from './news.service'
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})

export class NewsComponent implements OnInit {
  public news;
  public now;

  public colToggle;

  constructor(private newsService: NewsService){}



  ngOnInit() {
    this.getNews();

  }

  getNews() {
    this.now = new Date();
    this.now = moment();
    this.colToggle= '';
    this.newsService.getNews().subscribe(
      data => {
        this.news = data
        this.news.forEach(e => {
          // console.log(e);
          if(this.now.diff(e.createstamp, 'hours') < 148) {
            this.news.push(e.colToggle=false);
          } else {
            this.news.push(e.colToggle=true);
          }
        })
      
      },
      err => console.error(err),
      () => console.log('News Loaded')
    );
   
    
 
  }



}
