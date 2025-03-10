(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dash-analytics-dash-analytics-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/dashboard/dash-analytics/dash-analytics.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/dashboard/dash-analytics/dash-analytics.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- conversion-section start -->\n  <div class=\"col-sm-12\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>User</span>\n          <h3>798</h3>\n          <app-apex-chart chartID=\"analytics-apex-user-chart\" [chartConfig]=\"this.chartDB.userAACC\"></app-apex-chart>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Session</span>\n          <h3>486</h3>\n          <app-apex-chart chartID=\"analytics-apex-session-chart\" [chartConfig]=\"this.chartDB.sessionAACC\"></app-apex-chart>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Page view</span>\n          <h3>9454</h3>\n          <app-apex-chart chartID=\"analytics-apex-page-view-chart\" [chartConfig]=\"this.chartDB.pageViewAACC\"></app-apex-chart>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Page / Session</span>\n          <h3>7.15</h3>\n          <app-apex-chart chartID=\"analytics-apex-page-session-chart\" [chartConfig]=\"this.chartDB.pageSessionAACC\"></app-apex-chart>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Avg. Session Time</span>\n          <h3>00:04:30</h3>\n          <app-apex-chart chartID=\"analytics-apex-avg-session-chart\" [chartConfig]=\"this.chartDB.avgSessionAACC\"></app-apex-chart>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Bounce Rate</span>\n          <h3>1.55%</h3>\n          <app-apex-chart chartID=\"analytics-apex-bounce-rate-chart\" [chartConfig]=\"this.chartDB.bounceRateAACC\"></app-apex-chart>\n        </app-card>\n      </div>\n    </div>\n  </div>\n  <!-- conversion-section end -->\n\n  <!-- account-section start -->\n  <div class=\"col-xl-8\">\n    <app-card cardTitle=\"Daily Visitor\" [options]=\"false\">\n      <app-apex-chart chartID=\"daily-visitor-aa-cc\" [chartConfig]=\"this.chartDB.dailyVisitorAACC\" [xAxis]=\"dailyVisitorAxis\"></app-apex-chart>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4\">\n    <app-card [hidHeader]=\"true\">\n      <div class=\"row\">\n        <div class=\"col-auto\">\n          <h6>Devices</h6>\n        </div>\n        <div class=\"col text-right\">\n          <h2 class=\"mb-0\">1042</h2>\n        </div>\n      </div>\n      <div class=\"row mt-4\">\n        <div class=\"col\">\n          <h3 class=\"m-0\"><i class=\"fas fa-circle text-success f-10 m-r-5\"></i>66%</h3>\n          <span class=\"ml-3\">Desktop</span>\n        </div>\n        <div class=\"col\">\n          <h3 class=\"m-0\"><i class=\"fas fa-circle text-primary f-10 m-r-5\"></i>26%</h3>\n          <span class=\"ml-3\">Tablet</span>\n        </div>\n        <div class=\"col\">\n          <h3 class=\"m-0\"><i class=\"fas fa-circle text-danger f-10 m-r-5\"></i>8%</h3>\n          <span class=\"ml-3\">Mobile</span>\n        </div>\n      </div>\n      <div class=\"progressbar-stack mt-4\">\n        <div *ngFor=\"let bar of deviceProgressBar\" [ngStyle]=\"{width: bar.value + '%'}\" class=\"float-left\">\n          <ngb-progressbar [type]=\"bar.type\" height=\"8px\" [value]=\"100\"></ngb-progressbar>\n        </div>\n      </div>\n    </app-card>\n    <app-card [hidHeader]=\"true\">\n      <div class=\"row align-items-start\">\n        <div class=\"col\">\n          <h2 class=\"mb-0\">954</h2>\n        </div>\n        <div class=\"col-auto text-right\">\n          <h6 class=\"\">Location</h6>\n        </div>\n      </div>\n      <div class=\"row mt-2\">\n        <div class=\"col-sm-6\">\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-green f-10 m-r-10\"></i>India</span>\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-red f-10 m-r-10\"></i>France</span>\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-blue f-10 m-r-10\"></i>Other</span>\n        </div>\n        <div class=\"col-sm-6\">\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-yellow f-10 m-r-10\"></i>United states</span>\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-purple f-10 m-r-10\"></i>United Kingdom</span>\n        </div>\n      </div>\n\n      <div class=\"progress mt-3\" style=\"height:20px;\">\n        <div class=\"progress-bar badge-light-success rounded\" role=\"progressbar\" style=\"width: 30%;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\">24%</div>\n        <div class=\"progress-bar badge-light-danger rounded\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">12%</div>\n        <div class=\"progress-bar badge-light-primary rounded\" role=\"progressbar\" style=\"width: 20%;\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">10%</div>\n        <div class=\"progress-bar badge-light-warning rounded\" role=\"progressbar\" style=\"width: 15%;\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">8%</div>\n        <div class=\"progress-bar badge-light-info rounded\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">35%</div>\n      </div>\n    </app-card>\n  </div>\n  <!-- account-section end -->\n\n  <!-- customer overview start -->\n  <div class=\"col-md-12\">\n    <app-card cardTitle=\"Campaign Monitor\" cardClass=\"table-card\" blockClass=\"p-0\">\n      <perfect-scrollbar [style.max-height]=\"'362px'\">\n        <table class=\"table table-hover m-b-0\">\n          <thead>\n            <tr>\n              <th><span>Campaign date</span></th>\n              <th>\n                <span>Click\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Cost\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>CTR\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>ARPU\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>ECPI\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>ROI\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Revenue\n                <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Conversions\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>08-11-2016</td>\n              <td>786\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>485\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"50\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>769\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>45,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,7%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>8,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>10:55\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>33.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>15-10-2016</td>\n              <td>786\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"65\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>523\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>736\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>78,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>7,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"44\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>4:30\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"68\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>76.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>08-08-2017</td>\n              <td>624\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"45\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>436\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"55\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>756\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"95\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>78,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"38\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,4%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>9,45\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>9:05\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"67\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>8.63%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>11-12-2017</td>\n              <td>423\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"54\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>123\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>756\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"75\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>78,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>45,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,85\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>7:45\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>33.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>05-06-2015</td>\n              <td>465\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"66\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>463\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"50\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>456\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>68,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>76,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"32\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>7,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>8:45\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"71\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>39.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"38\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>08-11-2016</td>\n              <td>786\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"43\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>485\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>769\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"69\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>45,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,7%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>8,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>10:55\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"55\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>33.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>15-10-2016</td>\n              <td>786\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"61\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>523\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"45\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>736\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>78,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>7,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>4:30\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>76.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </perfect-scrollbar>\n    </app-card>\n  </div>\n  <!-- customer overview start -->\n</div>\n"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: DashAnalyticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAnalyticsRoutingModule", function() { return DashAnalyticsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dash_analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-analytics.component */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts");




var routes = [
    {
        path: '',
        component: _dash_analytics_component__WEBPACK_IMPORTED_MODULE_3__["DashAnalyticsComponent"]
    }
];
var DashAnalyticsRoutingModule = /** @class */ (function () {
    function DashAnalyticsRoutingModule() {
    }
    DashAnalyticsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashAnalyticsRoutingModule);
    return DashAnalyticsRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2Rhc2gtYW5hbHl0aWNzL2Rhc2gtYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts ***!
  \***************************************************************************/
/*! exports provided: DashAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAnalyticsComponent", function() { return DashAnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../fack-db/chart-data */ "./src/app/fack-db/chart-data.ts");
/* harmony import */ var _theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../theme/shared/components/chart/apex-chart/apex-chart.service */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");




var DashAnalyticsComponent = /** @class */ (function () {
    function DashAnalyticsComponent(apexEvent) {
        this.apexEvent = apexEvent;
        this.chartDB = _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_2__["ChartDB"];
        this.dailyVisitorStatus = '1y';
        this.deviceProgressBar = [
            {
                type: 'success',
                value: 66
            }, {
                type: 'primary',
                value: 26
            }, {
                type: 'danger',
                value: 8
            }
        ];
    }
    DashAnalyticsComponent.prototype.ngOnInit = function () { };
    DashAnalyticsComponent.ctorParameters = function () { return [
        { type: _theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"] }
    ]; };
    DashAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dash-analytics',
            template: __webpack_require__(/*! raw-loader!./dash-analytics.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/dashboard/dash-analytics/dash-analytics.component.html"),
            styles: [__webpack_require__(/*! ./dash-analytics.component.scss */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"]])
    ], DashAnalyticsComponent);
    return DashAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics.module.ts ***!
  \************************************************************************/
/*! exports provided: DashAnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAnalyticsModule", function() { return DashAnalyticsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dash_analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-analytics-routing.module */ "./src/app/demo/dashboard/dash-analytics/dash-analytics-routing.module.ts");
/* harmony import */ var _dash_analytics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash-analytics.component */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var DashAnalyticsModule = /** @class */ (function () {
    function DashAnalyticsModule() {
    }
    DashAnalyticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dash_analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashAnalyticsRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"]
            ],
            declarations: [
                _dash_analytics_component__WEBPACK_IMPORTED_MODULE_4__["DashAnalyticsComponent"],
            ]
        })
    ], DashAnalyticsModule);
    return DashAnalyticsModule;
}());



/***/ })

}]);
//# sourceMappingURL=dash-analytics-dash-analytics-module-es5.js.map