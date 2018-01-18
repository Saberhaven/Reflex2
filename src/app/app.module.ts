import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from './../environments/environment';
import { Routes, RouterModule } from "@angular/router";
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { CKEditorModule } from 'ng2-ckeditor';
import { TinymceModule } from 'angular2-tinymce';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './header/search-box/search-box.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { NewsComponent } from './content/news/news.component';
import { LinksComponent } from './content/links/links.component';
import { StaleDatesComponent } from './content/stale-dates/stale-dates.component';
import { MomentModule } from 'angular2-moment';
import { ArticleComponent } from './content/article/article.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorComponent } from './content/author/author.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



export const ROUTES: Routes = [

    {path:'', component: ContentComponent},
    {path:'article/:id', component: ArticleComponent},
    {path:'author/:id', component: AuthorComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBoxComponent,
    NavComponent,
    ContentComponent,
    MarqueeComponent,
    NewsComponent,
    LinksComponent,
    StaleDatesComponent,
    ArticleComponent,
    FooterComponent,
    AuthorComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    SlideMenuModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    MomentModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    TinymceModule.withConfig({
      theme: 'modern',
      content_css: 'https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      skin_url: '../../assets/skins/lightgray',
      plugins: ['print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help fontawesome noneditable'],
      toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat fontawesome',
      extended_valid_elements: 'span[*]'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
