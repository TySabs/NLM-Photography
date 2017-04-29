import { RouterModule, Routes } from '@angular/router';
import { ExperienceContentComponent } from './experience-content.component';

const routes: Routes = [
  { path: '', component: ExperienceContentComponent }
];

export const experienceRoutes = RouterModule.forChild(routes);
