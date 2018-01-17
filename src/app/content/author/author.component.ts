import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article/article.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';  
import { Router } from '@angular/router';  
import { HttpClient, HttpParams } from '@angular/common/http';
import { HostListener } from '@angular/core/src/metadata/directives';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [ArticleService]
})


export class AuthorComponent implements OnInit {
  public stuff;
  public article;
  public artId;

  public constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute, 
    private router: Router
    
  ) {
    this.route.params.subscribe(res => this.artId = res);
    // console.log(this.artId);
  }
 
  private _article = new BehaviorSubject<any>(['asdf']);

  ngOnInit() {
    this.getArticle();
    this._article.subscribe((val)=> {console.log(val)})
  }

  getArticle() {
    this.articleService.getArticle(this.artId.id, 'pull').subscribe(
      data => {this._article.next(data)},
      err => console.error(err),
      () => console.log('this.article')
    );

  }



}
