import { ArticleService } from '../../../services/article.service';
import { CategoryService } from '../../../services/category.service';
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
  selector: 'app-edit-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService, CategoryService]
})
export class EditArticleComponent implements OnInit {
  
  articleEditForm : FormGroup
  articleData = new BehaviorSubject<any>([]);
  public ckeditorContent;
  public article;
  public artId;

  public constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private route: ActivatedRoute, 
    private router: Router,
    private fb: FormBuilder
  ) {
    this.route.params.subscribe(res => this.artId = res);
  }
 
  ngOnInit() {
    this.getArticle();
    this.getCategories();
    this.articleEditForm = this.fb.group({
      arttitle: ['', Validators.required],
      summary: ['', Validators.required],
      categories: [[], Validators.required]
    
    
    });
  }

  onSubmit(value:string){
    console.log(this.articleEditForm);
  }

  setTopic(event) {
    console.log(event);
  }

  getCategories() {
    this.categoryService.getCategories('getCategories');
    this.categoryService.getLoadedCategories().subscribe(
     (res => {
      console.log(res)
      this.articleEditForm.patchValue({
        categories: res
      })

      console.log(this.articleEditForm);
     })
   )

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


}
