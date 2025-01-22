(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-authentication-authentication-module"],{

/***/ "./src/app/demo/pages/authentication/authentication-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/authentication-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                /* path: 'signin', */
                path: '',
                loadChildren: function () { return __webpack_require__.e(/*! import() | auth-signin-auth-signin-module */ "auth-signin-auth-signin-module").then(__webpack_require__.bind(null, /*! ./auth-signin/auth-signin.module */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts")).then(function (module) { return module.AuthSigninModule; }); }
            },
            {
                /* path: 'signup', */
                path: 'signup',
                loadChildren: function () { return __webpack_require__.e(/*! import() | auth-signup-auth-signup-module */ "auth-signup-auth-signup-module").then(__webpack_require__.bind(null, /*! ./auth-signup/auth-signup.module */ "./src/app/demo/pages/authentication/auth-signup/auth-signup.module.ts")).then(function (module) { return module.AuthSignupModule; }); }
            },
            {
                path: 'reset-password',
                loadChildren: function () { return __webpack_require__.e(/*! import() | auth-reset-password-auth-reset-password-module */ "auth-reset-password-auth-reset-password-module").then(__webpack_require__.bind(null, /*! ./auth-reset-password/auth-reset-password.module */ "./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.module.ts")).then(function (module) { return module.AuthResetPasswordModule; }); }
            },
            {
                path: 'change-password',
                loadChildren: function () { return __webpack_require__.e(/*! import() | auth-change-password-auth-change-password-module */ "auth-change-password-auth-change-password-module").then(__webpack_require__.bind(null, /*! ./auth-change-password/auth-change-password.module */ "./src/app/demo/pages/authentication/auth-change-password/auth-change-password.module.ts")).then(function (module) { return module.AuthChangePasswordModule; }); }
            }
        ]
    }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/authentication.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/authentication/authentication.module.ts ***!
  \********************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/demo/pages/authentication/authentication-routing.module.ts");




var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"]
            ],
            declarations: []
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-pages-authentication-authentication-module-es5.js.map