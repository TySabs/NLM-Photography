import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialContentComponent } from './testimonial-content.component';

import { testimonialRoutes } from './testimonial.routes';

@NgModule({
  imports: [
    CommonModule,
    testimonialRoutes
  ],
  declarations: [
    TestimonialContentComponent
  ]
})
export class TestimonialModule { }
