import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './home-content.component';

const homeRoutes: Routes = [
  { path: '', component: HomeContentComponent }
];

export default RouterModule.forChild(homeRoutes);
