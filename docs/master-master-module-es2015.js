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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'driver-detail',
        loadChildren: () => Promise.all(/*! import() | driver-details-driver-details-module */[__webpack_require__.e("common"), __webpack_require__.e("driver-details-driver-details-module")]).then(__webpack_require__.bind(null, /*! ./driver-details/driver-details.module */ "./src/app/master/driver-details/driver-details.module.ts")).then(module => module.DriverDetailsModule)
    },
    {
        path: 'vehicle-detail',
        loadChildren: () => Promise.all(/*! import() | vehicle-details-vehicle-details-module */[__webpack_require__.e("default~trip-details-at-trip-details-at-module~trip-details-trip-details-trip-details-module~vehicle~e5f14595"), __webpack_require__.e("common"), __webpack_require__.e("vehicle-details-vehicle-details-module")]).then(__webpack_require__.bind(null, /*! ./vehicle-details/vehicle-details.module */ "./src/app/master/vehicle-details/vehicle-details.module.ts")).then(module => module.VehicleDetailsModule)
    }
];
let MasterRoutingModule = class MasterRoutingModule {
};
MasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MasterRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-routing.module */ "./src/app/master/master-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





let MasterModule = class MasterModule {
};
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



/***/ })

}]);
//# sourceMappingURL=master-master-module-es2015.js.map