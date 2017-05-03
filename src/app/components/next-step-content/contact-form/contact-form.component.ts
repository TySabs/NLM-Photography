import { Component } from '@angular/core';

import { ContactFormService } from './contact-form.service';

@Component({
  selector: 'contact-form',
  templateUrl: 'contact-form.component.html',
  styleUrls: ['contact-form.component.css'],
  providers: [ContactFormService]
})
export class ContactFormComponent {
  constructor(public formService: ContactFormService) {
    formService.buildForm();
  }
}
