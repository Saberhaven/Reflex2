import { ArticleService } from '../article/article.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';  
import { Router } from '@angular/router';  
import { HttpClient, HttpParams } from '@angular/common/http';
import { HostListener } from '@angular/core/src/metadata/directives';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {FormGroup,FormBuilder,FormControl, Validators} from '@angular/forms';
import {
  Component,
  AfterViewInit,
  EventEmitter,
  OnDestroy,
  OnInit,
  Input,
  Output
} from '@angular/core';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [ArticleService]
})


export class AuthorComponent implements OnInit {
  articleEditForm : FormGroup
  articleData = new BehaviorSubject<any>([]);
  public ckeditorContent;
  public article;
  public artId;

  public constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute, 
    private router: Router,
    private fb: FormBuilder
  ) {
    this.route.params.subscribe(res => this.artId = res);
 
  }
 


  ngOnInit() {
    this.getArticle();
    this.articleEditForm = this.fb.group({
      arttitle: ['', Validators.required],
      summary: ['', Validators.required]
    });

  }

  onSubmit(value:string){
    console.log(this.articleEditForm);
  }

  

  getArticle() {
    this.articleService.getArticle(this.artId.id, 'pull');
    this.articleService.getLoadedArticle().subscribe(
     (res => {
       this.article = res;
       this.ckeditorContent = res.artbody;
      this.articleEditForm.patchValue({
        arttitle:res.arttitle,
        summary:res.summary,
        artbody:res.artbody
      })
      //  console.log(res);
      
     })
   )
 }


}
