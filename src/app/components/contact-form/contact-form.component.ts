import { Component, OnInit } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, AbstractControl } from '@angular/forms';
import { contact } from '../../models/contact-model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public datasForm: FormGroup;
  public contactCrtl;

  constructor(private formBuilder: FormBuilder) {
    this.contactCrtl = {} as FormControl;

    this.contactCrtl.firstName = formBuilder.control('',Validators.required);
    this.contactCrtl.lastName = formBuilder.control('',Validators.required);  
    this.contactCrtl.email = formBuilder.control('',Validators.compose([Validators.required, Validators.email]));  
    this.contactCrtl.message = formBuilder.control('',Validators.required);  

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

  onSubmit(){
    console.log(this.datasForm.value);
  }

}
