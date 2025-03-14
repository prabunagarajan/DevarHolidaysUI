(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-core-chart-core-chart-module"],{

/***/ "./src/app/demo/pages/core-chart/core-chart-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/core-chart-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CoreChartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreChartRoutingModule", function() { return CoreChartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'apex',
                loadChildren: () => Promise.all(/*! import() | crt-apex-crt-apex-module */[__webpack_require__.e("default~crt-apex-crt-apex-module~dash-analytics-dash-analytics-module"), __webpack_require__.e("crt-apex-crt-apex-module")]).then(__webpack_require__.bind(null, /*! ./crt-apex/crt-apex.module */ "./src/app/demo/pages/core-chart/crt-apex/crt-apex.module.ts")).then(module => module.CrtApexModule)
            }
        ]
    }
];
let CoreChartRoutingModule = class CoreChartRoutingModule {
};
CoreChartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CoreChartRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/core-chart/core-chart.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/core-chart.module.ts ***!
  \************************************************************/
/*! exports provided: CoreChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreChartModule", function() { return CoreChartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-chart-routing.module */ "./src/app/demo/pages/core-chart/core-chart-routing.module.ts");




let CoreChartModule = class CoreChartModule {
};
CoreChartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreChartRoutingModule"]
        ]
    })
], CoreChartModule);



/***/ })

}]);
//# sourceMappingURL=demo-pages-core-chart-core-chart-module-es2015.js.map