import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ContactFormComponent } from './contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    ContactFormComponent
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactFormModule { }
