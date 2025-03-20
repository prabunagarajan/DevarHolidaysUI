(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["container-container-module"],{

/***/ "./src/app/container/container-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/container/container-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ContainerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerRoutingModule", function() { return ContainerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'trip-detail',
        loadChildren: function () { return Promise.all(/*! import() | trip-details-trip-details-trip-details-module */[__webpack_require__.e("default~driver-payment-driver-payment-module~trip-details-at-trip-details-at-module~trip-details-tri~6808f05a"), __webpack_require__.e("default~driver-details-driver-details-module~trip-details-trip-details-trip-details-module~vehicle-d~b42d40ce"), __webpack_require__.e("common"), __webpack_require__.e("trip-details-trip-details-trip-details-module")]).then(__webpack_require__.bind(null, /*! ./trip-details/trip-details/trip-details.module */ "./src/app/container/trip-details/trip-details/trip-details.module.ts")).then(function (module) { return module.TripDetailsModule; }); }
    },
    {
        path: 'driver-payment',
        loadChildren: function () { return Promise.all(/*! import() | driver-payment-driver-payment-module */[__webpack_require__.e("default~driver-payment-driver-payment-module~trip-details-at-trip-details-at-module~trip-details-tri~6808f05a"), __webpack_require__.e("common"), __webpack_require__.e("driver-payment-driver-payment-module")]).then(__webpack_require__.bind(null, /*! ./driver-payment/driver-payment.module */ "./src/app/container/driver-payment/driver-payment.module.ts")).then(function (module) { return module.DriverPaymentModule; }); }
    }
];
var ContainerRoutingModule = /** @class */ (function () {
    function ContainerRoutingModule() {
    }
    ContainerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContainerRoutingModule);
    return ContainerRoutingModule;
}());



/***/ }),

/***/ "./src/app/container/container.module.ts":
/*!***********************************************!*\
  !*** ./src/app/container/container.module.ts ***!
  \***********************************************/
/*! exports provided: ContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerModule", function() { return ContainerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _container_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container-routing.module */ "./src/app/container/container-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var ContainerModule = /** @class */ (function () {
    function ContainerModule() {
    }
    ContainerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _container_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContainerRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"]
            ]
        })
    ], ContainerModule);
    return ContainerModule;
}());



/***/ })

}]);
//# sourceMappingURL=container-container-module-es5.js.map