import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


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
    public authservice: AuthserviceService,
    private alertMsg: ToastrService,
    private router: Router
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
            this.alertMsg.success(signInResponse.userDisplayMesg, 'Sucsess');
            sessionStorage.setItem('X-Authorization', signInResponse.data.auth.token);
            sessionStorage.setItem('userName', signInResponse.data.auth.userName);
            this.router.navigate(['dashboard']);
            this.getUserProfileDetails(signInResponse.data.auth);
          } else {
            this.alertMsg.error(signInResponse.userDisplayMesg, 'Error');
          }
        });
    }

  }

  get signInFormControls(): { [key: string]: AbstractControl } {
    return this.signInForm.controls;
  }

  getUserProfileDetails(signInDetails) {
    if (signInDetails) {
      this.authservice.signInGetUserProfile(signInDetails.id).subscribe(getUserProfileDetailsResponse => {
        if (getUserProfileDetailsResponse.errorCode == 200) {
          sessionStorage.setItem('userName', getUserProfileDetailsResponse.data.userName);
          sessionStorage.setItem('Email', getUserProfileDetailsResponse.data.email);
          sessionStorage.setItem('mobileNumber', getUserProfileDetailsResponse.data.phoneNumber);
          sessionStorage.setItem('roll', getUserProfileDetailsResponse.data.roll);
          sessionStorage.setItem('roll', getUserProfileDetailsResponse.data.roll);
        } else {
          this.alertMsg.error(getUserProfileDetailsResponse.userDisplayMesg);
        }
      })
    } else {
      this.alertMsg.error('Somthing Went Wrong... ');
    }

  }

}
