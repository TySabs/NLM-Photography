import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ContactFormService {
  constructor(public http: Http, public formBuilder: FormBuilder) { }

  contactForm: FormGroup;
  formSubmitted: boolean = false;
  headers = new Headers;
  requestOptions = new RequestOptions({ headers: this.headers});
  mailUrl: string;

  emailRegExp: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  buildForm() {
    this.contactForm = this.formBuilder.group({
      userFirstName: this.formBuilder.control(null, Validators.required),
      userLastName: this.formBuilder.control(null, Validators.required),
      userEmail: this.formBuilder.control(null, [Validators.required, Validators.pattern(this.emailRegExp)]),
      userPhone: this.formBuilder.group({
        areaCode: this.formBuilder.control(null, Validators.required),
        prefixCode: this.formBuilder.control(null, Validators.required),
        suffixCode: this.formBuilder.control(null, Validators.required)
      }),
      weddingDate: this.formBuilder.group({
        dateMM: this.formBuilder.control(null, Validators.required),
        dateDD: this.formBuilder.control(null, Validators.required),
        dateYY: this.formBuilder.control(null, Validators.required)
      }),
      weddingVenue: this.formBuilder.control(null, Validators.required),
      extraInfo: this.formBuilder.control(null)
    });
  }

  onSubmitForm() {
    this.formSubmitted = true;
    console.log(this.contactForm.value);
    // TODO http.post to sendMail URL
    this.contactForm.reset();
  }
}
