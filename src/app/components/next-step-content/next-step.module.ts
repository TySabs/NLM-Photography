import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NextStepContentComponent } from './next-step-content.component';

import nextStepRoutes from './next-step.routes';

@NgModule({
  imports: [
    CommonModule,
    nextStepRoutes
  ],
  declarations: [
    NextStepContentComponent
  ]
})
export default class NextStepModule { }
