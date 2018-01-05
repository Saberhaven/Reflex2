import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from './news.service'
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})

export class NewsComponent implements OnInit {
  public isCollapsed = true;
  public news;
  constructor(private newsService: NewsService){

  }
  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews().subscribe(
      data => {this.news = data},
      err => console.error(err),
      () => console.log('done loading news')
    );
  }

}
