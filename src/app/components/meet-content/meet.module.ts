import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetContentComponent } from './meet-content.component';

import meetRoutes from './meet.routes';

@NgModule({
  imports: [
    CommonModule,
    meetRoutes
  ],
  declarations: [
    MeetContentComponent
  ]
})
export default class MeetModule { }
