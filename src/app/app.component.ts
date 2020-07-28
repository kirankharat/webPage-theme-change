import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  changePassword: FormGroup;
  error_messages = {
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'pattern', message: 'Passwords must contain at least six characters, including at least 1 uppercase,  1 lowercase, 1 digit' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'Password is required.' },
      { type: 'pattern', message: 'Passwords must contain at least six characters, including at least 1 uppercase,  1 lowercase, 1 digit' }
    ]
  }
  constructor(public formBuild: FormBuilder){

    }

    ngOnInit(){
      this.changePassword = this.formBuild.group({

        password: new FormControl('', Validators.compose([
          Validators.required, Validators.minLength(6), Validators.maxLength(30),
          Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z]).{6,}$")

         ])),


        confirmpassword: new FormControl('', Validators.compose([
          Validators.required, Validators.minLength(6), Validators.maxLength(30),
          Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z]).{6,}$")
        ])),
      }, {
        validators: this.password.bind(this)
      });
    }


  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

    public chnageTheme(theme){
      document.body.className = document.body.className.replace(document.body.className,"");
      document.body.classList.add(theme);
    }

}
