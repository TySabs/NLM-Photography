import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './components/home-content/home.module#HomeModule' },
  { path: 'portfolio', loadChildren: './components/portfolio-content/portfolio.module#PortfolioModule' },
  { path: 'the-experience', loadChildren: './components/experience-content/experience.module#ExperienceModule' },
  { path: 'meet-natasha', loadChildren: './components/meet-content/meet.module#MeetModule' },
  { path: 'testimonials', loadChildren: './components/testimonial-content/testimonial.module#TestimonialModule' },
  { path: 'next-steps', loadChildren: './components/next-step-content/next-step.module#NextStepModule' }
];

export const appRoutes = RouterModule.forRoot(routes);
