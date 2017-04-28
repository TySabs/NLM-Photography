import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { HomeContentComponent } from './home-content.component';
import { HomeCarouselComponent } from './home-carousel.component';

import homeRoutes from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    homeRoutes
  ],
  declarations: [
    HomeCarouselComponent,
    HomeContentComponent
  ]
})
export default class HomeModule { }
