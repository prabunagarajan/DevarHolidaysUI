(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-typography-basic-typography-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Headings\" [options]=\"false\">\r\n      <h1>This is a Heading 1</h1>\r\n      <p class=\"text-muted mb-4\">Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.</p>\r\n      <div class=\"clearfix\"></div>\r\n      <h2>This is a Heading 2</h2>\r\n      <p class=\"text-muted mb-4\">In nec rhoncus eros. Vestibulum eu mattis nisl. Quisque viverra viverra magna nec pulvinar. Maecenas pellentesque porta augue, consectetur facilisis diam porttitor sed. Suspendisse tempor est sodales augue rutrum tincidunt. Quisque a malesuada purus.</p>\r\n      <div class=\"clearfix\"></div>\r\n      <h3>This is a Heading 3</h3>\r\n      <p class=\"text-muted mb-4\">Vestibulum auctor tincidunt semper. Phasellus ut vulputate lacus. Suspendisse ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.</p>\r\n      <div class=\"clearfix\"></div>\r\n      <h4>This is a Heading 4</h4>\r\n      <p class=\"text-muted mb-4\">Nulla et mattis nunc. Curabitur scelerisque commodo condimentum. Mauris blandit, velit a consectetur egestas, diam arcu fermentum justo, eget ultrices arcu eros vel erat.</p>\r\n      <div class=\"clearfix\"></div>\r\n      <h5>This is a Heading 5</h5>\r\n      <p class=\"text-muted mb-4\">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus elementum. Suspendisse molestie ullamcorper ornare.</p>\r\n      <div class=\"clearfix\"></div>\r\n      <h6>This is a Heading 6</h6>\r\n      <p class=\"text-muted mb-0\">Donec ultricies, lacus id tempor condimentum, orci leo faucibus sem, a molestie libero lectus ac justo. ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.</p>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Display Headings\" [options]=\"false\">\r\n      <h1 class=\"display-1\">Display 1</h1>\r\n      <h1 class=\"display-2\">Display 2</h1>\r\n      <h1 class=\"display-3\">Display 3</h1>\r\n      <h1 class=\"display-4\">Display 4</h1>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Inline Text Elements\" [options]=\"false\">\r\n      <p class=\"lead m-t-0\">Your title goes here</p>\r\n      You can use the mark tag to\r\n      <mark>highlight</mark> text.\r\n      <br>\r\n      <del>This line of text is meant to be treated as deleted text.</del>\r\n      <br>\r\n      <ins>This line of text is meant to be treated as an addition to the document.</ins>\r\n      <br>\r\n      <strong>rendered as bold text</strong>\r\n      <br>\r\n      <em>rendered as italicized text</em>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Contextual Text Colors\" [options]=\"false\">\r\n      <p class=\"text-muted mb-1\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\r\n      <p class=\"text-primary mb-1\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n      <p class=\"text-success mb-1\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\r\n      <p class=\"text-info mb-1\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\r\n      <p class=\"text-warning mb-1\">Etiam porta sem malesuada magna mollis euismod.</p>\r\n      <p class=\"text-danger mb-1\">Donec ullamcorper nulla non metus auctor fringilla.</p>\r\n      <p class=\"text-dark mb-1\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6 col-lg-4\">\r\n    <app-card cardTitle=\"Unordered\" [options]=\"false\">\r\n      <ul>\r\n        <li>Lorem ipsum dolor sit amet</li>\r\n        <li>Consectetur adipiscing elit</li>\r\n        <li>Integer molestie lorem at massa</li>\r\n        <li>Facilisis in pretium nisl aliquet</li>\r\n        <li>Nulla volutpat aliquam velit\r\n          <ul>\r\n            <li>Phasellus iaculis neque</li>\r\n            <li>Purus sodales ultricies</li>\r\n            <li>Vestibulum laoreet porttitor sem</li>\r\n            <li>Ac tristique libero volutpat at</li>\r\n          </ul>\r\n        </li>\r\n        <li>Faucibus porta lacus fringilla vel</li>\r\n        <li>Aenean sit amet erat nunc</li>\r\n        <li>Eget porttitor lorem</li>\r\n      </ul>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6 col-lg-4\">\r\n    <app-card cardTitle=\"Ordered\" [options]=\"false\">\r\n      <ol>\r\n        <li>Lorem ipsum dolor sit amet</li>\r\n        <li>Consectetur adipiscing elit</li>\r\n        <li>Integer molestie lorem at massa</li>\r\n        <li>Facilisis in pretium nisl aliquet</li>\r\n        <li>Nulla volutpat aliquam velit\r\n          <ul>\r\n            <li>Phasellus iaculis neque</li>\r\n            <li>Purus sodales ultricies</li>\r\n            <li>Vestibulum laoreet porttitor sem</li>\r\n            <li>Ac tristique libero volutpat at</li>\r\n          </ul>\r\n        </li>\r\n        <li>Faucibus porta lacus fringilla vel</li>\r\n        <li>Aenean sit amet erat nunc</li>\r\n        <li>Eget porttitor lorem</li>\r\n      </ol>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-lg-4\">\r\n    <app-card cardTitle=\"Unstyled\" [options]=\"false\">\r\n      <ul class=\"list-unstyled\">\r\n        <li>Lorem ipsum dolor sit amet</li>\r\n        <li>Integer molestie lorem at massa\r\n          <ul>\r\n            <li>Phasellus iaculis neque</li>\r\n          </ul>\r\n        </li>\r\n        <li>Faucibus porta lacus fringilla vel</li>\r\n        <li>Eget porttitor lorem</li>\r\n      </ul>\r\n      <h5>Inline</h5>\r\n      <hr>\r\n      <ul class=\"list-inline m-b-0\">\r\n        <li class=\"list-inline-item\">Lorem ipsum</li>\r\n        <li class=\"list-inline-item\">Phasellus iaculis</li>\r\n        <li class=\"list-inline-item\">Nulla volutpat</li>\r\n      </ul>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Blockquotes\" [options]=\"false\">\r\n      <p class=\"text-muted m-b-30\">Your awesome text goes here.</p>\r\n      <blockquote class=\"blockquote\">\r\n        <p class=\"mb-2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\r\n      </blockquote>\r\n      <p class=\"text-muted m-b-15 m-t-20\">Add <code>.text-right</code> for a blockquote with right-aligned content.</p>\r\n      <blockquote class=\"blockquote text-right\">\r\n        <p class=\"mb-2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\r\n      </blockquote>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Horizontal Description\" [options]=\"false\">\r\n      <dl class=\"dl-horizontal row\">\r\n        <dt class=\"col-sm-3\">Description lists</dt>\r\n        <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\r\n\r\n        <dt class=\"col-sm-3\">Euismod</dt>\r\n        <dd class=\"col-sm-9\">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\r\n        <dd class=\"col-sm-9\">Donec id elit non mi porta gravida at eget metus.</dd>\r\n\r\n        <dt class=\"col-sm-3\">Malesuada porta</dt>\r\n        <dd class=\"col-sm-9\">Etiam porta sem malesuada magna mollis euismod.</dd>\r\n\r\n        <dt class=\"col-sm-3 text-truncate\">Truncated term is truncated</dt>\r\n        <dd class=\"col-sm-9\">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\r\n      </dl>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: BasicTypographyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTypographyRoutingModule", function() { return BasicTypographyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-typography.component */ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts");




var routes = [
    {
        path: '',
        component: _basic_typography_component__WEBPACK_IMPORTED_MODULE_3__["BasicTypographyComponent"]
    }
];
var BasicTypographyRoutingModule = /** @class */ (function () {
    function BasicTypographyRoutingModule() {
    }
    BasicTypographyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicTypographyRoutingModule);
    return BasicTypographyRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtdHlwb2dyYXBoeS9iYXNpYy10eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts ***!
  \******************************************************************************************/
/*! exports provided: BasicTypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTypographyComponent", function() { return BasicTypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicTypographyComponent = /** @class */ (function () {
    function BasicTypographyComponent() {
    }
    BasicTypographyComponent.prototype.ngOnInit = function () {
    };
    BasicTypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-typography',
            template: __webpack_require__(/*! raw-loader!./basic-typography.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.html"),
            styles: [__webpack_require__(/*! ./basic-typography.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicTypographyComponent);
    return BasicTypographyComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.module.ts ***!
  \***************************************************************************************/
/*! exports provided: BasicTypographyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTypographyModule", function() { return BasicTypographyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_typography_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-typography-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography-routing.module.ts");
/* harmony import */ var _basic_typography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-typography.component */ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var BasicTypographyModule = /** @class */ (function () {
    function BasicTypographyModule() {
    }
    BasicTypographyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_typography_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicTypographyRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_basic_typography_component__WEBPACK_IMPORTED_MODULE_4__["BasicTypographyComponent"]]
        })
    ], BasicTypographyModule);
    return BasicTypographyModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-typography-basic-typography-module-es5.js.map