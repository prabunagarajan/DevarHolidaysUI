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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'trip-detail',
        loadChildren: () => Promise.all(/*! import() | trip-details-trip-details-trip-details-module */[__webpack_require__.e("default~driver-payment-driver-payment-module~payout-payout-module~trip-details-at-trip-details-at-mo~7b4323c2"), __webpack_require__.e("default~driver-payment-driver-payment-module~trip-details-at-trip-details-at-module~trip-details-tri~5eb5727e"), __webpack_require__.e("default~driver-details-driver-details-module~payout-payout-module~trip-details-trip-details-trip-det~656da435"), __webpack_require__.e("common"), __webpack_require__.e("trip-details-trip-details-trip-details-module")]).then(__webpack_require__.bind(null, /*! ./trip-details/trip-details/trip-details.module */ "./src/app/container/trip-details/trip-details/trip-details.module.ts")).then(module => module.TripDetailsModule)
    },
    {
        path: 'driver-payment',
        loadChildren: () => Promise.all(/*! import() | driver-payment-driver-payment-module */[__webpack_require__.e("default~driver-payment-driver-payment-module~payout-payout-module~trip-details-at-trip-details-at-mo~7b4323c2"), __webpack_require__.e("default~driver-payment-driver-payment-module~trip-details-at-trip-details-at-module~trip-details-tri~5eb5727e"), __webpack_require__.e("common"), __webpack_require__.e("driver-payment-driver-payment-module")]).then(__webpack_require__.bind(null, /*! ./driver-payment/driver-payment.module */ "./src/app/container/driver-payment/driver-payment.module.ts")).then(module => module.DriverPaymentModule)
    },
    {
        path: 'payout',
        loadChildren: () => Promise.all(/*! import() | payout-payout-module */[__webpack_require__.e("default~driver-payment-driver-payment-module~payout-payout-module~trip-details-at-trip-details-at-mo~7b4323c2"), __webpack_require__.e("default~driver-details-driver-details-module~payout-payout-module~trip-details-trip-details-trip-det~656da435"), __webpack_require__.e("common"), __webpack_require__.e("payout-payout-module")]).then(__webpack_require__.bind(null, /*! ./payout/payout.module */ "./src/app/container/payout/payout.module.ts")).then(module => module.PayoutModule)
    },
    {
        path: 'trip-payment-pending',
        loadChildren: () => Promise.all(/*! import() | trip-pending-payment-trip-pending-payment-trip-pending-payment-module */[__webpack_require__.e("default~driver-payment-driver-payment-module~payout-payout-module~trip-details-at-trip-details-at-mo~7b4323c2"), __webpack_require__.e("default~driver-payment-driver-payment-module~trip-details-at-trip-details-at-module~trip-details-tri~5eb5727e"), __webpack_require__.e("default~ayyanar-transport-ayyanar-transport-module~trip-pending-payment-trip-pending-payment-trip-pe~dddf3ebf"), __webpack_require__.e("common"), __webpack_require__.e("trip-pending-payment-trip-pending-payment-trip-pending-payment-module")]).then(__webpack_require__.bind(null, /*! ./trip-pending-payment/trip-pending-payment/trip-pending-payment.module */ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment.module.ts")).then(module => module.TripPendingPaymentModule)
    }
];
let ContainerRoutingModule = class ContainerRoutingModule {
};
ContainerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContainerRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _container_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container-routing.module */ "./src/app/container/container-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






let ContainerModule = class ContainerModule {
};
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



/***/ })

}]);
//# sourceMappingURL=container-container-module-es2015.js.map