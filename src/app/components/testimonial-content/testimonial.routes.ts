import { RouterModule, Routes } from '@angular/router';
import { TestimonialContentComponent } from './testimonial-content.component';

const routes: Routes = [
  { path: '', component: TestimonialContentComponent }
];

export const testimonialRoutes = RouterModule.forChild(routes);
