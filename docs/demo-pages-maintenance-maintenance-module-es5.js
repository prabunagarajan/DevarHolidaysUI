(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-maintenance-maintenance-module"],{

/***/ "./src/app/demo/pages/maintenance/maintenance-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/pages/maintenance/maintenance-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MaintenanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceRoutingModule", function() { return MaintenanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'coming-soon',
                loadChildren: function () { return __webpack_require__.e(/*! import() | mainten-coming-soon-mainten-coming-soon-module */ "mainten-coming-soon-mainten-coming-soon-module").then(__webpack_require__.bind(null, /*! ./mainten-coming-soon/mainten-coming-soon.module */ "./src/app/demo/pages/maintenance/mainten-coming-soon/mainten-coming-soon.module.ts")).then(function (module) { return module.MaintenComingSoonModule; }); }
            },
            {
                path: 'error',
                loadChildren: function () { return __webpack_require__.e(/*! import() | mainten-error-mainten-error-module */ "mainten-error-mainten-error-module").then(__webpack_require__.bind(null, /*! ./mainten-error/mainten-error.module */ "./src/app/demo/pages/maintenance/mainten-error/mainten-error.module.ts")).then(function (module) { return module.MaintenErrorModule; }); }
            }
        ]
    }
];
var MaintenanceRoutingModule = /** @class */ (function () {
    function MaintenanceRoutingModule() {
    }
    MaintenanceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MaintenanceRoutingModule);
    return MaintenanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/maintenance/maintenance.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/pages/maintenance/maintenance.module.ts ***!
  \**************************************************************/
/*! exports provided: MaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceModule", function() { return MaintenanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance-routing.module */ "./src/app/demo/pages/maintenance/maintenance-routing.module.ts");




var MaintenanceModule = /** @class */ (function () {
    function MaintenanceModule() {
    }
    MaintenanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__["MaintenanceRoutingModule"]
            ],
            declarations: []
        })
    ], MaintenanceModule);
    return MaintenanceModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-pages-maintenance-maintenance-module-es5.js.map