import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormModule } from './contact-form/contact-form.module';
import { NextStepContentComponent } from './next-step-content.component';

import { nextStepRoutes } from './next-step.routes';

@NgModule({
  imports: [
    CommonModule,
    nextStepRoutes,
    ContactFormModule
  ],
  declarations: [
    NextStepContentComponent
  ]
})
export class NextStepModule { }
