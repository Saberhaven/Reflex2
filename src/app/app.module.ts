import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from './../environments/environment';

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
    StaleDatesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MomentModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
