(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signin-auth-signin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/authentication/auth-signin/auth-signin.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/authentication/auth-signin/auth-signin.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper\">\r\n  <div class=\"auth-content\">\r\n    <div class=\"card\">\r\n      <div class=\"row align-items-center text-center\">\r\n        <div class=\"col-md-12\">\r\n          <form [formGroup]=\"signInForm\" autocomplete=\"off\">\r\n            <div class=\"card-body\">\r\n              <img src=\"assets/images/logo-dark.png\" alt=\"\" class=\"img-fluid mb-4\">\r\n              <h4 class=\"mb-3 f-w-400\">Signin</h4>\r\n              <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"feather icon-mail\"></i></span>\r\n                </div>\r\n                <input type=\"text\" formControlName=\"userName\" class=\"form-control\" placeholder=\"User Name\"\r\n                  [ngClass]=\"{ 'is-invalid': signInSubmitted && signInFormControls.userName.errors }\">\r\n                <div *ngIf=\"signInSubmitted && signInFormControls.userName.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"signInFormControls.userName.errors.required\">User Name is required</div>\r\n                  <!-- <div *ngIf=\"signInFormControls.userName.errors.userName\">User Name is invalid</div> -->\r\n                </div>\r\n              </div>\r\n              <div class=\"input-group mb-4\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"feather icon-lock\"></i></span>\r\n                </div>\r\n                <input type=\"password\" formControlName=\"passWord\" class=\"form-control\" placeholder=\"passWord\"\r\n                  [ngClass]=\"{ 'is-invalid': signInSubmitted && signInFormControls.passWord.errors }\">\r\n                <div *ngIf=\"signInSubmitted && signInFormControls.passWord.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"signInFormControls.passWord.errors.required\">User Name is required</div>\r\n                  <!-- <div *ngIf=\"signInFormControls.passWord.errors.passWord\">User Name is invalid</div> -->\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"form-group text-left mt-2\">\r\n              <div class=\"checkbox checkbox-primary d-inline\">\r\n                <input type=\"checkbox\" name=\"checkbox-fill-1\" id=\"checkbox-fill-a1\" checked=\"\">\r\n                <label for=\"checkbox-fill-a1\" class=\"cr\"> Save credentials</label>\r\n              </div>\r\n            </div> -->\r\n              <button class=\"btn btn-block btn-primary mb-4\" (click)=\"signInFun(signInForm)\">Signin</button>\r\n              <p class=\"mb-2 text-muted\">Forgot password? <a [routerLink]=\"['/auth/reset-password']\"\r\n                  class=\"f-w-400\">Reset</a></p>\r\n              <p class=\"mb-0 text-muted\">Don’t have an account? <a [routerLink]=\"['/auth/signup']\"\r\n                  class=\"f-w-400\">Signup</a></p>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AuthSigninRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninRoutingModule", function() { return AuthSigninRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signin.component */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts");




var routes = [
    {
        path: '',
        component: _auth_signin_component__WEBPACK_IMPORTED_MODULE_3__["AuthSigninComponent"]
    }
];
var AuthSigninRoutingModule = /** @class */ (function () {
    function AuthSigninRoutingModule() {
    }
    AuthSigninRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthSigninRoutingModule);
    return AuthSigninRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1zaWduaW4vYXV0aC1zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninComponent", function() { return AuthSigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authservice.service */ "./src/app/demo/pages/authentication/authservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthSigninComponent = /** @class */ (function () {
    function AuthSigninComponent(formBuilde, authservice, alertMsg, router) {
        this.formBuilde = formBuilde;
        this.authservice = authservice;
        this.alertMsg = alertMsg;
        this.router = router;
    }
    AuthSigninComponent.prototype.ngOnInit = function () {
        this.signInForm = this.formBuilde.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            passWord: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    AuthSigninComponent.prototype.signInFun = function (signInForm) {
        console.log('signInForm :', signInForm.value);
        this.router.navigate(['dashboard/analytics']);
        /* Temprory Commented */
        /* if (!signInForm.valid) {
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
        } */
    };
    Object.defineProperty(AuthSigninComponent.prototype, "signInFormControls", {
        get: function () {
            return this.signInForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AuthSigninComponent.prototype.getUserProfileDetails = function (signInDetails) {
        var _this = this;
        if (signInDetails) {
            this.authservice.signInGetUserProfile(signInDetails.id).subscribe(function (getUserProfileDetailsResponse) {
                if (getUserProfileDetailsResponse.errorCode == 200) {
                    sessionStorage.setItem('userName', getUserProfileDetailsResponse.data.userName);
                    sessionStorage.setItem('Email', getUserProfileDetailsResponse.data.email);
                    sessionStorage.setItem('mobileNumber', getUserProfileDetailsResponse.data.phoneNumber);
                    sessionStorage.setItem('roll', getUserProfileDetailsResponse.data.roll);
                    sessionStorage.setItem('roll', getUserProfileDetailsResponse.data.roll);
                }
                else {
                    _this.alertMsg.error(getUserProfileDetailsResponse.userDisplayMesg);
                }
            });
        }
        else {
            this.alertMsg.error('Somthing Went Wrong... ');
        }
    };
    AuthSigninComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _authservice_service__WEBPACK_IMPORTED_MODULE_3__["AuthserviceService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AuthSigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-signin',
            template: __webpack_require__(/*! raw-loader!./auth-signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/authentication/auth-signin/auth-signin.component.html"),
            styles: [__webpack_require__(/*! ./auth-signin.component.scss */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _authservice_service__WEBPACK_IMPORTED_MODULE_3__["AuthserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthSigninComponent);
    return AuthSigninComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AuthSigninModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninModule", function() { return AuthSigninModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signin-routing.module */ "./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts");
/* harmony import */ var _auth_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-signin.component */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AuthSigninModule = /** @class */ (function () {
    function AuthSigninModule() {
    }
    AuthSigninModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthSigninRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            declarations: [_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninComponent"]]
        })
    ], AuthSigninModule);
    return AuthSigninModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/authservice.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/pages/authentication/authservice.service.ts ***!
  \******************************************************************/
/*! exports provided: AuthserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthserviceService", function() { return AuthserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AuthserviceService = /** @class */ (function () {
    function AuthserviceService(http) {
        this.http = http;
        this.domainURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
    }
    AuthserviceService.prototype.signInValidate = function (signInValidateObj) {
        var url = this.domainURL + 'auth/login';
        return this.http.post(url, signInValidateObj);
    };
    AuthserviceService.prototype.signInGetUserProfile = function (signInGetUserProfileObj) {
        var url = this.domainURL + 'auth/getUserById/' + signInGetUserProfileObj;
        return this.http.get(url, signInGetUserProfileObj);
    };
    AuthserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AuthserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthserviceService);
    return AuthserviceService;
}());



/***/ })

}]);
//# sourceMappingURL=auth-signin-auth-signin-module-es5.js.map