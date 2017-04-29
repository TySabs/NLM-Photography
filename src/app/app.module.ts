// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NPM Modules
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// Main Component
import { AppComponent } from './app.component';

// Partial Components
import { MainNavComponent } from './components/main-nav/main-nav.component';

// Content Components

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    TooltipModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
