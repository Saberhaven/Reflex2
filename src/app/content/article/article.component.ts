import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';  
import { Router } from '@angular/router';  
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public article;
  public artId;
  constructor(private route: ActivatedRoute, 
              private router: Router,
              private articleService: ArticleService) 
    { 
      this.artId = this.route.params.subscribe(res=> console.log(res.id));

  }

  ngOnInit() {
    this.getArticle();

  }

  editArticle() {
    this.router.navigate(['']);
  }

  getArticle() {
    this.articleService.getArticle().subscribe(
      data => {this.article = data},
      err => console.error(err),
      () => console.log(this.article)
    );
    
  }

}
