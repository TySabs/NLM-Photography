import { RouterModule, Routes } from '@angular/router';
import { NextStepContentComponent } from './next-step-content.component';

const nextStepRoutes: Routes = [
  { path: '', component: NextStepContentComponent }
];

export default RouterModule.forChild(nextStepRoutes);
