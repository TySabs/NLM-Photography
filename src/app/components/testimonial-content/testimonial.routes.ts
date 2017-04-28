import { RouterModule, Routes } from '@angular/router';
import { TestimonialContentComponent } from './testimonial-content.component';

const testimonialRoutes: Routes = [
  { path: '', component: TestimonialContentComponent }
];

export default RouterModule.forChild(testimonialRoutes);
