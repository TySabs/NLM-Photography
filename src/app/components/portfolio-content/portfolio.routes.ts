import { RouterModule, Routes } from '@angular/router';
import { PortfolioContentComponent } from './portfolio-content.component';

const portfolioRoutes: Routes = [
  { path: '', component: PortfolioContentComponent }
];

export default RouterModule.forChild(portfolioRoutes);
