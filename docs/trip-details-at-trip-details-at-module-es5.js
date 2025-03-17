(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-details-at-trip-details-at-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Trip Details</h3>\n<ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n        <a [routerLink]=\"['/dashboard']\">Home</a>\n    </li>\n    <ng-container>\n        <li class=\"breadcrumb-item\" [routerLink]=\"['/ayyanar-transport/trip-detail-at/list']\"><a href=\"javascript:\">\n                Trip\n                Details</a>\n        </li>\n        <li class=\"breadcrumb-item\"><a href=\"javascript:\">{{screenName}}</a></li>\n    </ng-container>\n</ul>\n\n<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <form [formGroup]=\"tripFormDetailsAT\" autocomplete=\"off\">\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                <h3>Customer & Vehicel Details</h3>\n                <hr>\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Trip No<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Trip No\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Date<span class=\"text-danger\">*</span></label>\n                            <div class=\"input-group\">\n                                <input type=\"text\" [owlDateTime]=\"dt1\" class=\"form-control\" placeholder=\"Select Date\"\n                                    readonly [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\n                                    (keydown)=\"$event.preventDefault()\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt1\" type=\"button\">\n                                        📅\n                                    </button>\n                                </div>\n                                <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Opening KM<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Opening KM\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Closing KM<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Closing KM\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Total Running KM<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Total Running KM\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Driver Name<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Driver Name\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Transport Booking<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Transport Booking\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Transport<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Transport\">\n                        </div>\n                    </div>\n                </div>\n            </app-card>\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                <h3>Consignor Details</h3>\n                <hr>\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n                        <div class=\"form-group\">\n                            <label>Consignor<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Consignor\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Driver Salery 15%<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Driver Salery 15%\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Diesal<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Diesal\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>RTO Check Post<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter RTO Check Post\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Toll Plaza<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Toll Plaza\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Commission<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Commission\">\n                        </div>\n                    </div>\n                </div>\n            </app-card>\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                <h3>Consignee Details</h3>\n                <hr>\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n                        <div class=\"form-group\">\n                            <label>Consignee<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Consignee\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Loading / Unloading<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Loading / Unloading\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Add Blue Oil<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Add Blue Oil\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Expens 1<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Expens 1\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Expens 2<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Expens 2\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Total Expenses<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Total Expenses\">\n                        </div>\n                    </div>\n                </div>\n            </app-card>\n\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Advance 1<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Advance 1\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Advance 2<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Advance 2\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Balance<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Balance\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Balance Recd Date<span class=\"text-danger\">*</span></label>\n                            <div class=\"input-group\">\n                                <input type=\"text\" [owlDateTime]=\"dt2\" class=\"form-control\"\n                                    placeholder=\"Select Balance Recd Date\" readonly [max]=\"maxDate\"\n                                    (keypress)=\"$event.preventDefault();\" (keydown)=\"$event.preventDefault()\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt2\" type=\"button\">\n                                        📅\n                                    </button>\n                                </div>\n                                <owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Freight Amount<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Freight Amount\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Less Expenses<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Less Expenses\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Profit Or Loss<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Profit Or Loss\">\n                        </div>\n                    </div>\n                </div>\n            </app-card>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>trip-details-at works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>view-trip-details-at works!</p>\n"

/***/ }),

/***/ "./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F5eWFuYXItdHJhbnNwb3J0L3RyaXAtZGV0YWlscy1hdC9hZGQtdHJpcC1kZXRhaWxzLWF0L2FkZC10cmlwLWRldGFpbHMtYXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddTripDetailsAtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTripDetailsAtComponent", function() { return AddTripDetailsAtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




var AddTripDetailsAtComponent = /** @class */ (function () {
    function AddTripDetailsAtComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.screenName = "Add";
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_3__();
    }
    AddTripDetailsAtComponent.prototype.ngOnInit = function () {
        this.tripFormDetailsAT = this.formBuilder.group({});
    };
    AddTripDetailsAtComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    AddTripDetailsAtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-trip-details-at',
            template: __webpack_require__(/*! raw-loader!./add-trip-details-at.component.html */ "./node_modules/raw-loader/index.js!./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.html"),
            styles: [__webpack_require__(/*! ./add-trip-details-at.component.scss */ "./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddTripDetailsAtComponent);
    return AddTripDetailsAtComponent;
}());



/***/ }),

/***/ "./src/app/ayyanar-transport/trip-details-at/trip-details-at-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ayyanar-transport/trip-details-at/trip-details-at-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: TripDetailsAtRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsAtRoutingModule", function() { return TripDetailsAtRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trip_details_at_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip-details-at.component */ "./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.ts");
/* harmony import */ var _add_trip_details_at_add_trip_details_at_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-trip-details-at/add-trip-details-at.component */ "./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.ts");





var routes = [
    {
        path: 'list',
        component: _trip_details_at_component__WEBPACK_IMPORTED_MODULE_3__["TripDetailsAtComponent"]
    },
    {
        path: 'add',
        component: _add_trip_details_at_add_trip_details_at_component__WEBPACK_IMPORTED_MODULE_4__["AddTripDetailsAtComponent"]
    },
];
var TripDetailsAtRoutingModule = /** @class */ (function () {
    function TripDetailsAtRoutingModule() {
    }
    TripDetailsAtRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TripDetailsAtRoutingModule);
    return TripDetailsAtRoutingModule;
}());



/***/ }),

/***/ "./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F5eWFuYXItdHJhbnNwb3J0L3RyaXAtZGV0YWlscy1hdC90cmlwLWRldGFpbHMtYXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.ts ***!
  \********************************************************************************/
/*! exports provided: TripDetailsAtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsAtComponent", function() { return TripDetailsAtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TripDetailsAtComponent = /** @class */ (function () {
    function TripDetailsAtComponent() {
    }
    TripDetailsAtComponent.prototype.ngOnInit = function () {
    };
    TripDetailsAtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip-details-at',
            template: __webpack_require__(/*! raw-loader!./trip-details-at.component.html */ "./node_modules/raw-loader/index.js!./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.html"),
            styles: [__webpack_require__(/*! ./trip-details-at.component.scss */ "./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TripDetailsAtComponent);
    return TripDetailsAtComponent;
}());



/***/ }),

/***/ "./src/app/ayyanar-transport/trip-details-at/trip-details-at.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ayyanar-transport/trip-details-at/trip-details-at.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MY_CUSTOM_FORMATS, TripDetailsAtModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_CUSTOM_FORMATS", function() { return MY_CUSTOM_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsAtModule", function() { return TripDetailsAtModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _trip_details_at_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip-details-at-routing.module */ "./src/app/ayyanar-transport/trip-details-at/trip-details-at-routing.module.ts");
/* harmony import */ var _add_trip_details_at_add_trip_details_at_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-trip-details-at/add-trip-details-at.component */ "./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.ts");
/* harmony import */ var _view_trip_details_at_view_trip_details_at_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-trip-details-at/view-trip-details-at.component */ "./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.ts");
/* harmony import */ var _trip_details_at_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-details-at.component */ "./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ng_pick_datetime_date_time_adapter_moment_adapter_moment_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");












var MY_CUSTOM_FORMATS = {
    fullPickerInput: 'DD-MM-YYYY HH:mm',
    parseInput: 'DD-MM-YYYY HH:mm',
    datePickerInput: 'DD-MM-YYYY',
    timePickerInput: 'HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};
var TripDetailsAtModule = /** @class */ (function () {
    function TripDetailsAtModule() {
    }
    TripDetailsAtModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_trip_details_at_component__WEBPACK_IMPORTED_MODULE_6__["TripDetailsAtComponent"], _add_trip_details_at_add_trip_details_at_component__WEBPACK_IMPORTED_MODULE_4__["AddTripDetailsAtComponent"], _view_trip_details_at_view_trip_details_at_component__WEBPACK_IMPORTED_MODULE_5__["ViewTripDetailsAtComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _trip_details_at_routing_module__WEBPACK_IMPORTED_MODULE_3__["TripDetailsAtRoutingModule"],
                src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlNativeDateTimeModule"]
            ],
            providers: [
                {
                    provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["DateTimeAdapter"],
                    useClass: ng_pick_datetime_date_time_adapter_moment_adapter_moment_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_9__["MomentDateTimeAdapter"],
                    deps: [ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OWL_DATE_TIME_LOCALE"]],
                },
                { provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OWL_DATE_TIME_FORMATS"], useValue: MY_CUSTOM_FORMATS },
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], TripDetailsAtModule);
    return TripDetailsAtModule;
}());



/***/ }),

/***/ "./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F5eWFuYXItdHJhbnNwb3J0L3RyaXAtZGV0YWlscy1hdC92aWV3LXRyaXAtZGV0YWlscy1hdC92aWV3LXRyaXAtZGV0YWlscy1hdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ViewTripDetailsAtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTripDetailsAtComponent", function() { return ViewTripDetailsAtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewTripDetailsAtComponent = /** @class */ (function () {
    function ViewTripDetailsAtComponent() {
    }
    ViewTripDetailsAtComponent.prototype.ngOnInit = function () {
    };
    ViewTripDetailsAtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-trip-details-at',
            template: __webpack_require__(/*! raw-loader!./view-trip-details-at.component.html */ "./node_modules/raw-loader/index.js!./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.html"),
            styles: [__webpack_require__(/*! ./view-trip-details-at.component.scss */ "./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewTripDetailsAtComponent);
    return ViewTripDetailsAtComponent;
}());



/***/ })

}]);
//# sourceMappingURL=trip-details-at-trip-details-at-module-es5.js.map