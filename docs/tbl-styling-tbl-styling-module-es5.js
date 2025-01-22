(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tbl-styling-tbl-styling-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- Default Styling table start -->\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Default Styling\" blockClass=\"table-border-style\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <td>1</td>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <td>2</td>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <td>3</td>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <!-- Default Styling table start -->\r\n  <!-- [ Footer-Styling ] start -->\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Table Footer Styling\" blockClass=\"table-border-style\">\r\n      <table class=\"table table-styling\">\r\n        <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>First Name</th>\r\n          <th>Last Name</th>\r\n          <th>Username</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr>\r\n          <td>1</td>\r\n          <td>Mark</td>\r\n          <td>Otto</td>\r\n          <td>@mdo</td>\r\n        </tr>\r\n        <tr>\r\n          <td>2</td>\r\n          <td>Jacob</td>\r\n          <td>Thornton</td>\r\n          <td>@fat</td>\r\n        </tr>\r\n        </tbody>\r\n        <tfoot class=\"table-info\">\r\n        <tr>\r\n          <td>#</td>\r\n          <td>Larry</td>\r\n          <td>the Bird</td>\r\n          <td>@twitter</td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </app-card>\r\n  </div>\r\n  <!-- [ Footer-Styling ] end -->\r\n  <!-- [ Custom-Table-Color ] start -->\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Custom Table Color\" blockClass=\"table-border-style\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-styling table-info\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <td>1</td>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <td>2</td>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <td>3</td>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr>\r\n            <td>4</td>\r\n            <td>Mark</td>\r\n            <td>Thornton</td>\r\n            <td>@facebook</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <!-- [ Custom-Table-Color ] end -->\r\n  <!-- Custom Table color with hover and stripped table start -->\r\n  <div class=\"col-sm-6\">\r\n    <app-card cardTitle=\"Custom Table Color with Hover and Stripped\" blockClass=\"table-border-style\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-styling table-hover table-striped table-primary\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <td>1</td>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <td>2</td>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <td>3</td>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <!-- Custom Table color with hover and stripped table end -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TblStylingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TblStylingRoutingModule", function() { return TblStylingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tbl_styling_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tbl-styling.component */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.ts");




var routes = [
    {
        path: '',
        component: _tbl_styling_component__WEBPACK_IMPORTED_MODULE_3__["TblStylingComponent"]
    }
];
var TblStylingRoutingModule = /** @class */ (function () {
    function TblStylingRoutingModule() {
    }
    TblStylingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TblStylingRoutingModule);
    return TblStylingRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvdGFibGVzL3RibC1ib290c3RyYXAvdGJsLXN0eWxpbmcvdGJsLXN0eWxpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TblStylingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TblStylingComponent", function() { return TblStylingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TblStylingComponent = /** @class */ (function () {
    function TblStylingComponent() {
    }
    TblStylingComponent.prototype.ngOnInit = function () {
    };
    TblStylingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tbl-styling',
            template: __webpack_require__(/*! raw-loader!./tbl-styling.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.html"),
            styles: [__webpack_require__(/*! ./tbl-styling.component.scss */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TblStylingComponent);
    return TblStylingComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TblStylingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TblStylingModule", function() { return TblStylingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tbl_styling_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tbl-styling-routing.module */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling-routing.module.ts");
/* harmony import */ var _tbl_styling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tbl-styling.component */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var TblStylingModule = /** @class */ (function () {
    function TblStylingModule() {
    }
    TblStylingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tbl_styling_component__WEBPACK_IMPORTED_MODULE_4__["TblStylingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _tbl_styling_routing_module__WEBPACK_IMPORTED_MODULE_3__["TblStylingRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], TblStylingModule);
    return TblStylingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tbl-styling-tbl-styling-module-es5.js.map