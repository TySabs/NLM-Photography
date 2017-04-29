import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceContentComponent } from './experience-content.component';

import { experienceRoutes } from './experience.routes';

@NgModule({
  imports: [
    CommonModule,
    experienceRoutes
  ],
  declarations: [
    ExperienceContentComponent
  ]
})
export class ExperienceModule{ }
