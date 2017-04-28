import { RouterModule, Routes } from '@angular/router';

import { TestimonialContentComponent } from './components/testimonial-content/testimonial-content.component';

const appRoutes: Routes = [
  { path: '', loadChildren: 'app/components/home-content/home.module' },
  { path: 'portfolio', loadChildren: 'app/components/portfolio-content/portfolio.module' },
  { path: 'the-experience', loadChildren: 'app/components/experience-content/experience.module' },
  { path: 'meet-natasha', loadChildren: 'app/components/meet-content/meet.module' },
  { path: 'testimonials', loadChildren: 'app/components/testimonial-content/testimonial.module' },
  { path: 'next-steps', loadChildren: 'app/components/next-step-content/next-step.module' }
];

export default RouterModule.forRoot(appRoutes);
