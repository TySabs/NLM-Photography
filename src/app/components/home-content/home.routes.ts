import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './home-content.component';

const routes: Routes = [
  { path: '', component: HomeContentComponent }
];

export const homeRoutes = RouterModule.forChild(routes);
