import { RouterModule, Routes } from '@angular/router';
import { ExperienceContentComponent } from './experience-content.component';

const experienceRoutes: Routes = [
  { path: '', component: ExperienceContentComponent }
];

export default RouterModule.forChild(experienceRoutes);
