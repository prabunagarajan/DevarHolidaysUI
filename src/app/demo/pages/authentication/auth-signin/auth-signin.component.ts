import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';


@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

  signInForm: FormGroup;
  signInSubmitted: boolean;

  constructor(
    private formBuilde: FormBuilder,
    public authservice: AuthserviceService
  ) { }

  ngOnInit() {
    this.signInForm = this.formBuilde.group({
      userName: ['', [Validators.required]],
      passWord: ['', Validators.required]
    });
  }

  signInFun(signInForm) {
    console.log('signInForm :', signInForm.value);
    if (!signInForm.valid) {
      this.signInSubmitted = true;
    } else {
      const signInRequest = {
        userName: signInForm.value.userName ? signInForm.value.userName : '',
        passWord: signInForm.value.passWord ? signInForm.value.passWord : ''
      };

      console.log('signInRequest :', signInRequest);

      this.authservice.signInValidate(signInRequest).subscribe(
        (signInResponse: any) => {
          if (signInResponse.errorCode == 200) {
          } else {
            alert(signInResponse.userDisplayMesg);
          }
        })
    }

  }

  get signInFormControls(): { [key: string]: AbstractControl } {
    return this.signInForm.controls;
  }

}
