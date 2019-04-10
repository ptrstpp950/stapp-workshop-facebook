import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  isRegistrationSuccess = false;

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    person: new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
    })
  });

  constructor() { }

  ngOnInit() {
  }

  async handleSubmit() {
    const formData = this.registerForm.getRawValue();
    this.isRegistrationSuccess = true;
    console.log(formData);
  }

}
