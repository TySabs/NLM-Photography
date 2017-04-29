import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioContentComponent } from './portfolio-content.component';

import { portfolioRoutes } from './portfolio.routes';

@NgModule({
  imports: [
    CommonModule,
    portfolioRoutes
  ],
  declarations: [
    PortfolioContentComponent
  ]
})
export class PortfolioModule { }
