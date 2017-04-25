// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// NPM Modules
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// Main Component
import { AppComponent } from './app.component';

// Partial Components
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HomeCarouselComponent } from './components/home-content/home-carousel.component';

// Content Components
import { HomeContentComponent } from './components/home-content/home-content.component';
import { PortfolioContentComponent } from './components/portfolio-content/portfolio-content.component';
import { ExperienceContentComponent } from './components/experience-content/experience-content.component';
import { MeetContentComponent } from './components/meet-content/meet-content.component';
import { TestimonialContentComponent } from './components/testimonial-content/testimonial-content.component';
import { NextStepContentComponent } from './components/next-step-content/next-step-content.component';

const appRoutes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'portfolio', component: PortfolioContentComponent },
  { path: 'the-experience', component: ExperienceContentComponent },
  { path: 'meet-natasha', component: MeetContentComponent },
  { path: 'testimonials', component: TestimonialContentComponent },
  { path: 'next-steps', component: NextStepContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeContentComponent,
    HomeCarouselComponent,
    PortfolioContentComponent,
    ExperienceContentComponent,
    MeetContentComponent,
    TestimonialContentComponent,
    NextStepContentComponent
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
