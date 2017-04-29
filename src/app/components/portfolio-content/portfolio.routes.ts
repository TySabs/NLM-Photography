import { RouterModule, Routes } from '@angular/router';
import { PortfolioContentComponent } from './portfolio-content.component';

const routes: Routes = [
  { path: '', component: PortfolioContentComponent }
];

export const portfolioRoutes = RouterModule.forChild(routes);
