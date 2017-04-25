import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';

import { MainNavComponent } from './components/main-nav/main-nav.component';

import { HomeContentComponent } from './components/home-content/home-content.component';
import { HomeCarouselComponent } from './components/home-content/home-carousel.component';
import { PortfolioContentComponent } from './components/portfolio-content/portfolio-content.component';

const appRoutes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'portfolio', component: PortfolioContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeContentComponent,
    HomeCarouselComponent,
    PortfolioContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
