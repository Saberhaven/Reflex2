import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from './../environments/environment';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './nav/search-box/search-box.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { NewsComponent } from './content/news/news.component';
import { LinksComponent } from './content/links/links.component';
import { StaleDatesComponent } from './content/stale-dates/stale-dates.component';
import { MomentModule } from 'angular2-moment';
import { ArticleComponent } from './content/article/article.component';
import { FooterComponent } from './footer/footer.component';

export const ROUTES: Routes = [

    {path:'', component: ContentComponent},
    {path:'article/:id', component: ArticleComponent}

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
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    NgbModule.forRoot(),
    MomentModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
