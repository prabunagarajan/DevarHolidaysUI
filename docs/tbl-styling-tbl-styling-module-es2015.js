(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tbl-styling-tbl-styling-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- Default Styling table start -->\n  <div class=\"col-md-6\">\n    <app-card cardTitle=\"Default Styling\" blockClass=\"table-border-style\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>1</td>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <td>2</td>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <td>3</td>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n  <!-- Default Styling table start -->\n  <!-- [ Footer-Styling ] start -->\n  <div class=\"col-md-6\">\n    <app-card cardTitle=\"Table Footer Styling\" blockClass=\"table-border-style\">\n      <table class=\"table table-styling\">\n        <thead>\n        <tr>\n          <th>#</th>\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Username</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>1</td>\n          <td>Mark</td>\n          <td>Otto</td>\n          <td>@mdo</td>\n        </tr>\n        <tr>\n          <td>2</td>\n          <td>Jacob</td>\n          <td>Thornton</td>\n          <td>@fat</td>\n        </tr>\n        </tbody>\n        <tfoot class=\"table-info\">\n        <tr>\n          <td>#</td>\n          <td>Larry</td>\n          <td>the Bird</td>\n          <td>@twitter</td>\n        </tr>\n        </tfoot>\n      </table>\n    </app-card>\n  </div>\n  <!-- [ Footer-Styling ] end -->\n  <!-- [ Custom-Table-Color ] start -->\n  <div class=\"col-md-6\">\n    <app-card cardTitle=\"Custom Table Color\" blockClass=\"table-border-style\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-styling table-info\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>1</td>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <td>2</td>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <td>3</td>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          <tr>\n            <td>4</td>\n            <td>Mark</td>\n            <td>Thornton</td>\n            <td>@facebook</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n  <!-- [ Custom-Table-Color ] end -->\n  <!-- Custom Table color with hover and stripped table start -->\n  <div class=\"col-sm-6\">\n    <app-card cardTitle=\"Custom Table Color with Hover and Stripped\" blockClass=\"table-border-style\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-styling table-hover table-striped table-primary\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>1</td>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <td>2</td>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <td>3</td>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n  <!-- Custom Table color with hover and stripped table end -->\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tbl_styling_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tbl-styling.component */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.ts");




const routes = [
    {
        path: '',
        component: _tbl_styling_component__WEBPACK_IMPORTED_MODULE_3__["TblStylingComponent"]
    }
];
let TblStylingRoutingModule = class TblStylingRoutingModule {
};
TblStylingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TblStylingRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TblStylingComponent = class TblStylingComponent {
    constructor() { }
    ngOnInit() {
    }
};
TblStylingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tbl-styling',
        template: __webpack_require__(/*! raw-loader!./tbl-styling.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.html"),
        styles: [__webpack_require__(/*! ./tbl-styling.component.scss */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TblStylingComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tbl_styling_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tbl-styling-routing.module */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling-routing.module.ts");
/* harmony import */ var _tbl_styling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tbl-styling.component */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






let TblStylingModule = class TblStylingModule {
};
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



/***/ })

}]);
//# sourceMappingURL=tbl-styling-tbl-styling-module-es2015.js.map