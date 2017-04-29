import { RouterModule, Routes } from '@angular/router';
import { NextStepContentComponent } from './next-step-content.component';

const routes: Routes = [
  { path: '', component: NextStepContentComponent }
];

export const nextStepRoutes = RouterModule.forChild(routes);
