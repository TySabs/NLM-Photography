import { Component, OnInit } from '@angular/core';

import { homeCarouselImages } from './home-carousel-images';

@Component({
  selector: 'home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent {
  slideList = homeCarouselImages;
}
