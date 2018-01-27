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
import * as _ from "lodash";

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
  public cat;
  public artData = {
    title: '',
    summary: '',
    category: '',
    topic: '',
    createstamp: '',
    modstamp: '',
    topics: [],
    categories: []

  };

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
  }

  onSubmit(value:string){
    console.log(this.articleEditForm);
  }

  catSelect(cat) {
    
    this.cat = cat;
    this.getTopics()
    console.log(this.cat);
  }


  getCategories() {
    this.categoryService.getCategories('getCategories');
    this.categoryService.getLoadedCategories().subscribe(
     (res => {
       this.artData.categories = _.uniqBy(res, 'cat1');
     })
   )

  }

  getTopics() {
    this.categoryService.getTopics('getTopics', this.cat);
    this.categoryService.getLoadedTopics().subscribe(
     (res => {
       this.artData.topics = _.uniqBy(res, 'cat2');
       console.log(res);
     })
   )
  }

  getArticle() {
    this.articleService.getArticle(this.artId.id, 'pull');
    this.articleService.getLoadedArticle().subscribe(
     (res => {
      this.ckeditorContent = res.artbody;
      this.artData.title = res.arttitle;
      this.artData.summary = res.summary;
      this.artData.category = res.cat1;
      this.artData.topic = res.cat2;
      this.artData.createstamp = res.createstamp;
      this.artData.modstamp = res.modstamp;
      this.cat = res.cat1
      this.getTopics();
      console.log(res);

      // this.articleEditForm.patchValue({
      //   arttitle:res.arttitle,
      //   summary:res.summary,
      //   artbody:res.artbody
      // })
      //  console.log(res);
      
     })
   )
 }


}



