import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service'
import { EditService } from './edit.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';  
import { Router } from '@angular/router';  
import { HttpClient, HttpParams } from '@angular/common/http';
import { HostListener } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService, EditService]
})
export class ArticleComponent implements OnInit {
  public article;
  private artId;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private articleService: ArticleService,
              private editService: EditService
            ) 
  {
    this.route.params.subscribe(res => this.artId = res);
    
  }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
     this.articleService.getArticle(this.artId.id, 'pull');
     this.articleService.getLoadedArticle().subscribe(
      (res => {
        this.article = res;
        console.log(res);
      })
    )
  }

  

  editArticle(artid) {
    this.router.navigate(['/author/'+artid]);
  }

}