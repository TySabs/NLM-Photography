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

// Content Components

import appRoutes from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes,
    CarouselModule.forRoot(),
    TooltipModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
