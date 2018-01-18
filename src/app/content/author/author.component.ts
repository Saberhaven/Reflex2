import { ArticleService } from '../article/article.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';  
import { Router } from '@angular/router';  
import { HttpClient, HttpParams } from '@angular/common/http';
import { HostListener } from '@angular/core/src/metadata/directives';

import {
  Component,
  AfterViewInit,
  EventEmitter,
  OnDestroy,
  OnInit,
  Input,
  Output
} from '@angular/core';

import 'tinymce';
import 'tinymce/themes/modern';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';

declare var tinymce: any;


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [ArticleService]
})


export class AuthorComponent implements AfterViewInit, OnDestroy, OnInit {
  @Input() elementId: String;
  @Output() onEditorContentChange = new EventEmitter();
  public stuff;
  public article;
  public artId;

  editor;

  public constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute, 
    private router: Router
    
  ) {
    this.route.params.subscribe(res => this.artId = res);
    // console.log(this.artId);
  }
 


  ngOnInit() {
    this.getArticle();

  }

  

  getArticle() {
    this.articleService.getArticle(this.artId.id, 'pull').subscribe(
      data => {this.article = data},
      err => console.error(err),
      () => console.log('this.article')
    );

  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      content_css: 'https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      skin_url: '../../assets/skins/lightgray',
      plugins: ['print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help fontawesome noneditable'],
      toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat fontawesome',
      extended_valid_elements: 'span[*]',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.onEditorContentChange.emit(content);
        });
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
