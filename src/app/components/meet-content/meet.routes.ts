import { RouterModule, Routes } from '@angular/router';
import { MeetContentComponent } from './meet-content.component';

const meetRoutes: Routes = [
  { path: '', component: MeetContentComponent }
];

export default RouterModule.forChild(meetRoutes);
