(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-master-module"],{

/***/ "./src/app/master/master-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/master/master-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterRoutingModule", function() { return MasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'driver-detail',
        loadChildren: function () { return Promise.all(/*! import() | driver-details-driver-details-module */[__webpack_require__.e("default~driver-details-driver-details-module~trip-details-trip-details-trip-details-module~vehicle-d~b42d40ce"), __webpack_require__.e("common"), __webpack_require__.e("driver-details-driver-details-module")]).then(__webpack_require__.bind(null, /*! ./driver-details/driver-details.module */ "./src/app/master/driver-details/driver-details.module.ts")).then(function (module) { return module.DriverDetailsModule; }); }
    },
    {
        path: 'vehicle-detail',
        loadChildren: function () { return Promise.all(/*! import() | vehicle-details-vehicle-details-module */[__webpack_require__.e("default~driver-payment-driver-payment-module~trip-details-at-trip-details-at-module~trip-details-tri~6808f05a"), __webpack_require__.e("default~driver-details-driver-details-module~trip-details-trip-details-trip-details-module~vehicle-d~b42d40ce"), __webpack_require__.e("common"), __webpack_require__.e("vehicle-details-vehicle-details-module")]).then(__webpack_require__.bind(null, /*! ./vehicle-details/vehicle-details.module */ "./src/app/master/vehicle-details/vehicle-details.module.ts")).then(function (module) { return module.VehicleDetailsModule; }); }
    }
];
var MasterRoutingModule = /** @class */ (function () {
    function MasterRoutingModule() {
    }
    MasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MasterRoutingModule);
    return MasterRoutingModule;
}());



/***/ }),

/***/ "./src/app/master/master.module.ts":
/*!*****************************************!*\
  !*** ./src/app/master/master.module.ts ***!
  \*****************************************/
/*! exports provided: MasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterModule", function() { return MasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-routing.module */ "./src/app/master/master-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _master_routing_module__WEBPACK_IMPORTED_MODULE_3__["MasterRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ]
        })
    ], MasterModule);
    return MasterModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-master-module-es5.js.map