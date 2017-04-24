import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MainNavComponent } from './components/main-nav/main-nav.component';

import { HomeContentComponent } from './components/home-content/home-content.component';

const appRoutes: Routes = [
  { path: '', component: HomeContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
