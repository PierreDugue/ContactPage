import { Component, OnInit } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, AbstractControl } from '@angular/forms';
import { contact } from '../../models/contact-model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public datasForm: FormGroup;
  public contactCrtl;
  private res;

  constructor(private formBuilder: FormBuilder,
    public contactService: ContactService) {
    this.contactCrtl = {} as FormControl;

    this.contactCrtl.firstName = formBuilder.control('', Validators.required);
    this.contactCrtl.lastName = formBuilder.control('', Validators.required);
    this.contactCrtl.email = formBuilder.control('', Validators.compose([Validators.required, Validators.email]));
    this.contactCrtl.message = formBuilder.control('', Validators.required);

    this.datasForm = this.formBuilder.group({
      firstName: this.contactCrtl.firstName,
      lastName: this.contactCrtl.lastName,
      email: this.contactCrtl.email,
      phoneNumber: this.contactCrtl.phoneNumber,
      message: this.contactCrtl.message,
    });

  }

  ngOnInit() {
  }

  onSubmit() {
    this.res = "";
    this.contactService.sendContactDatas(this.datasForm.value).subscribe(data => {
      this.res = data;
      console.log(this.res);
    },
      error => {
        console.log(error);
      });
  }
}
