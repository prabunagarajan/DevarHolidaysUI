(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-ui-elements-ui-basic-ui-basic-module"],{

/***/ "./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: UiBasicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBasicRoutingModule", function() { return UiBasicRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'alert',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-alert-basic-alert-module */ "basic-alert-basic-alert-module").then(__webpack_require__.bind(null, /*! ./basic-alert/basic-alert.module */ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.module.ts")).then(module => module.BasicAlertModule)
            },
            {
                path: 'button',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-button-basic-button-module */ "basic-button-basic-button-module").then(__webpack_require__.bind(null, /*! ./basic-button/basic-button.module */ "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.module.ts")).then(module => module.BasicButtonModule)
            },
            {
                path: 'badges',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-badge-basic-badge-module */ "basic-badge-basic-badge-module").then(__webpack_require__.bind(null, /*! ./basic-badge/basic-badge.module */ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.module.ts")).then(module => module.BasicBadgeModule)
            },
            {
                path: 'breadcrumb-paging',
                loadChildren: () => __webpack_require__.e(/*! import() | breadcrumb-paging-breadcrumb-paging-module */ "breadcrumb-paging-breadcrumb-paging-module").then(__webpack_require__.bind(null, /*! ./breadcrumb-paging/breadcrumb-paging.module */ "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.module.ts")).then(module => module.BreadcrumbPagingModule)
            },
            {
                path: 'cards',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-cards-basic-cards-module */ "basic-cards-basic-cards-module").then(__webpack_require__.bind(null, /*! ./basic-cards/basic-cards.module */ "./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards.module.ts")).then(module => module.BasicCardsModule)
            },
            {
                path: 'collapse',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-collapse-basic-collapse-module */ "basic-collapse-basic-collapse-module").then(__webpack_require__.bind(null, /*! ./basic-collapse/basic-collapse.module */ "./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.module.ts")).then(module => module.BasicCollapseModule)
            },
            {
                path: 'carousel',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-carousel-basic-carousel-module */ "basic-carousel-basic-carousel-module").then(__webpack_require__.bind(null, /*! ./basic-carousel/basic-carousel.module */ "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.module.ts")).then(module => module.BasicCarouselModule)
            },
            {
                path: 'grid-system',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-grid-basic-grid-module */ "basic-grid-basic-grid-module").then(__webpack_require__.bind(null, /*! ./basic-grid/basic-grid.module */ "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.module.ts")).then(module => module.BasicGridModule)
            },
            {
                path: 'progress',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-progress-bar-basic-progress-bar-module */ "basic-progress-bar-basic-progress-bar-module").then(__webpack_require__.bind(null, /*! ./basic-progress-bar/basic-progress-bar.module */ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.module.ts")).then(module => module.BasicProgressBarModule)
            },
            {
                path: 'modal',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-modal-basic-modal-module */ "basic-modal-basic-modal-module").then(__webpack_require__.bind(null, /*! ./basic-modal/basic-modal.module */ "./src/app/demo/ui-elements/ui-basic/basic-modal/basic-modal.module.ts")).then(module => module.BasicModalModule)
            },
            {
                path: 'spinner',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-spinner-basic-spinner-module */ "basic-spinner-basic-spinner-module").then(__webpack_require__.bind(null, /*! ./basic-spinner/basic-spinner.module */ "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.module.ts")).then(module => module.BasicSpinnerModule)
            },
            {
                path: 'tabs-pills',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-tabs-pills-basic-tabs-pills-module */ "basic-tabs-pills-basic-tabs-pills-module").then(__webpack_require__.bind(null, /*! ./basic-tabs-pills/basic-tabs-pills.module */ "./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.module.ts")).then(module => module.BasicTabsPillsModule)
            },
            {
                path: 'typography',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-typography-basic-typography-module */ "basic-typography-basic-typography-module").then(__webpack_require__.bind(null, /*! ./basic-typography/basic-typography.module */ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.module.ts")).then(module => module.BasicTypographyModule)
            },
            {
                path: 'tooltip-popovers',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-tooltip-popovers-basic-tooltip-popovers-module */ "basic-tooltip-popovers-basic-tooltip-popovers-module").then(__webpack_require__.bind(null, /*! ./basic-tooltip-popovers/basic-tooltip-popovers.module */ "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.module.ts"))
                    .then(module => module.BasicTooltipPopoversModule)
            },
            {
                path: 'other',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-other-basic-other-module */ "basic-other-basic-other-module").then(__webpack_require__.bind(null, /*! ./basic-other/basic-other.module */ "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.module.ts")).then(module => module.BasicOtherModule)
            }
        ]
    }
];
let UiBasicRoutingModule = class UiBasicRoutingModule {
};
UiBasicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UiBasicRoutingModule);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/ui-basic.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/ui-basic.module.ts ***!
  \**************************************************************/
/*! exports provided: UiBasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBasicModule", function() { return UiBasicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-basic-routing.module */ "./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts");




let UiBasicModule = class UiBasicModule {
};
UiBasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiBasicRoutingModule"]
        ]
    })
], UiBasicModule);



/***/ })

}]);
//# sourceMappingURL=demo-ui-elements-ui-basic-ui-basic-module-es2015.js.map