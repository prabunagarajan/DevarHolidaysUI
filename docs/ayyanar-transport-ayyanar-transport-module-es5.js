(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ayyanar-transport-ayyanar-transport-module"],{

/***/ "./src/app/ayyanar-transport/ayyanar-transport-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ayyanar-transport/ayyanar-transport-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AyyanarTransportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyyanarTransportRoutingModule", function() { return AyyanarTransportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'trip-detail-at',
        loadChildren: function () { return Promise.all(/*! import() | trip-details-at-trip-details-at-module */[__webpack_require__.e("default~driver-payment-driver-payment-module~payout-payout-module~trip-details-at-trip-details-at-mo~7b4323c2"), __webpack_require__.e("default~driver-payment-driver-payment-module~trip-details-at-trip-details-at-module~trip-details-tri~5eb5727e"), __webpack_require__.e("trip-details-at-trip-details-at-module")]).then(__webpack_require__.bind(null, /*! ./trip-details-at/trip-details-at.module */ "./src/app/ayyanar-transport/trip-details-at/trip-details-at.module.ts")).then(function (module) { return module.TripDetailsAtModule; }); }
    },
];
var AyyanarTransportRoutingModule = /** @class */ (function () {
    function AyyanarTransportRoutingModule() {
    }
    AyyanarTransportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AyyanarTransportRoutingModule);
    return AyyanarTransportRoutingModule;
}());



/***/ }),

/***/ "./src/app/ayyanar-transport/ayyanar-transport.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/ayyanar-transport/ayyanar-transport.module.ts ***!
  \***************************************************************/
/*! exports provided: AyyanarTransportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyyanarTransportModule", function() { return AyyanarTransportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ayyanar_transport_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ayyanar-transport-routing.module */ "./src/app/ayyanar-transport/ayyanar-transport-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var AyyanarTransportModule = /** @class */ (function () {
    function AyyanarTransportModule() {
    }
    AyyanarTransportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ayyanar_transport_routing_module__WEBPACK_IMPORTED_MODULE_3__["AyyanarTransportRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"]
            ]
        })
    ], AyyanarTransportModule);
    return AyyanarTransportModule;
}());



/***/ })

}]);
//# sourceMappingURL=ayyanar-transport-ayyanar-transport-module-es5.js.map