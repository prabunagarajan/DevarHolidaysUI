(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-details-at-trip-details-at-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Trip Details</h3>\r\n<ul class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a [routerLink]=\"['/dashboard']\">Home</a>\r\n    </li>\r\n    <ng-container>\r\n        <li class=\"breadcrumb-item\" [routerLink]=\"['/ayyanar-transport/trip-detail-at/list']\"><a href=\"javascript:\">\r\n                Trip\r\n                Details</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item\"><a href=\"javascript:\">{{screenName}}</a></li>\r\n    </ng-container>\r\n</ul>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <form [formGroup]=\"tripFormDetailsAT\" autocomplete=\"off\">\r\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <h3>Customer & Vehicel Details</h3>\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Trip No<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Trip No\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Date<span class=\"text-danger\">*</span></label>\r\n                            <div class=\"input-group\">\r\n                                <input type=\"text\" [owlDateTime]=\"dt1\" class=\"form-control\" placeholder=\"Select Date\"\r\n                                    readonly [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\r\n                                    (keydown)=\"$event.preventDefault()\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt1\" type=\"button\">\r\n                                        📅\r\n                                    </button>\r\n                                </div>\r\n                                <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Opening KM<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Opening KM\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Closing KM<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Closing KM\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Total Running KM<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Total Running KM\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driver Name<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Driver Name\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Transport Booking<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Transport Booking\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Transport<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Transport\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <h3>Consignor Details</h3>\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Consignor<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Consignor\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driver Salery 15%<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Driver Salery 15%\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Diesal<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Diesal\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>RTO Check Post<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter RTO Check Post\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Toll Plaza<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Toll Plaza\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Commission<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Commission\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <h3>Consignee Details</h3>\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Consignee<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Consignee\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Loading / Unloading<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Loading / Unloading\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Add Blue Oil<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Add Blue Oil\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Expens 1<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Expens 1\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Expens 2<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Expens 2\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Total Expenses<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Total Expenses\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n\r\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Advance 1<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Advance 1\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Advance 2<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Advance 2\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Balance<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Balance\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Balance Recd Date<span class=\"text-danger\">*</span></label>\r\n                            <div class=\"input-group\">\r\n                                <input type=\"text\" [owlDateTime]=\"dt2\" class=\"form-control\"\r\n                                    placeholder=\"Select Balance Recd Date\" readonly [max]=\"maxDate\"\r\n                                    (keypress)=\"$event.preventDefault();\" (keydown)=\"$event.preventDefault()\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt2\" type=\"button\">\r\n                                        📅\r\n                                    </button>\r\n                                </div>\r\n                                <owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Freight Amount<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Freight Amount\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Less Expenses<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Less Expenses\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Profit Or Loss<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Profit Or Loss\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mat-table-configuration *ngIf=\"columns?.length > 0\"\r\n    [columns]=\"columns\"\r\n    [actionKeys]=\"actionKeys\"\r\n    [dataSource]=\"dataSource\"\r\n    [actionBtnBasedOnCond]=\"actionBtnBasedOnCond\"\r\n    [totalCount]=\"totalCount\"\r\n    [pageSize]=\"pageSize\"\r\n    (paginationEvent)=\"handlePagination($event)\"\r\n    (checkboxAction)=\"onChecked($event)\">\r\n  </app-mat-table-configuration>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>view-trip-details-at works!</p>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




let AddTripDetailsAtComponent = class AddTripDetailsAtComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.screenName = "Add";
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_3__();
    }
    ngOnInit() {
        this.tripFormDetailsAT = this.formBuilder.group({});
    }
};
AddTripDetailsAtComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddTripDetailsAtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-trip-details-at',
        template: __webpack_require__(/*! raw-loader!./add-trip-details-at.component.html */ "./node_modules/raw-loader/index.js!./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.html"),
        styles: [__webpack_require__(/*! ./add-trip-details-at.component.scss */ "./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], AddTripDetailsAtComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trip_details_at_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip-details-at.component */ "./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.ts");
/* harmony import */ var _add_trip_details_at_add_trip_details_at_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-trip-details-at/add-trip-details-at.component */ "./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.ts");





const routes = [
    {
        path: 'list',
        component: _trip_details_at_component__WEBPACK_IMPORTED_MODULE_3__["TripDetailsAtComponent"]
    },
    {
        path: 'add',
        component: _add_trip_details_at_add_trip_details_at_component__WEBPACK_IMPORTED_MODULE_4__["AddTripDetailsAtComponent"]
    },
];
let TripDetailsAtRoutingModule = class TripDetailsAtRoutingModule {
};
TripDetailsAtRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TripDetailsAtRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/master-list-columns */ "./src/app/config/master-list-columns.ts");





let TripDetailsAtComponent = class TripDetailsAtComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.columns = src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_4__["MasterListColumns"].triplistcolumns;
        this.actionKeys = ['checkbox']; // Example action keys
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](); // Example data source
        this.actionBtnBasedOnCond = {};
        this.totalCount = 10;
        this.pageSize = 10;
    }
    ngOnInit() {
        // Simulating API call or dynamic initialization
        const request = {
            filters: {
                vehicleNumber: '',
                customerName: '',
                customerMobileNumber: '',
                driverName: '',
                visitingPlace: "",
                status: ""
            },
            paginationSize: 10,
            sortField: "modifiedDate",
            pageNo: 0,
            sortOrder: "DESC"
        };
        this.commonService.tripDetailsSearchList(request).subscribe(response => {
            if (response.status == 's' && response.data) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](response.data.contents);
                this.totalCount = response.data.totalElements;
            }
            else {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
            }
        });
    }
    handlePagination(event) {
        console.log('Pagination event:', event);
    }
    onChecked(event) {
        console.log('Checkbox event:', event);
    }
};
TripDetailsAtComponent.ctorParameters = () => [
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
TripDetailsAtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trip-details-at',
        template: __webpack_require__(/*! raw-loader!./trip-details-at.component.html */ "./node_modules/raw-loader/index.js!./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.html"),
        styles: [__webpack_require__(/*! ./trip-details-at.component.scss */ "./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], TripDetailsAtComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _trip_details_at_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip-details-at-routing.module */ "./src/app/ayyanar-transport/trip-details-at/trip-details-at-routing.module.ts");
/* harmony import */ var _add_trip_details_at_add_trip_details_at_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-trip-details-at/add-trip-details-at.component */ "./src/app/ayyanar-transport/trip-details-at/add-trip-details-at/add-trip-details-at.component.ts");
/* harmony import */ var _view_trip_details_at_view_trip_details_at_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-trip-details-at/view-trip-details-at.component */ "./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.ts");
/* harmony import */ var _trip_details_at_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-details-at.component */ "./src/app/ayyanar-transport/trip-details-at/trip-details-at.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ng_pick_datetime_date_time_adapter_moment_adapter_moment_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");












const MY_CUSTOM_FORMATS = {
    fullPickerInput: 'DD-MM-YYYY HH:mm',
    parseInput: 'DD-MM-YYYY HH:mm',
    datePickerInput: 'DD-MM-YYYY',
    timePickerInput: 'HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};
let TripDetailsAtModule = class TripDetailsAtModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewTripDetailsAtComponent = class ViewTripDetailsAtComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewTripDetailsAtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-trip-details-at',
        template: __webpack_require__(/*! raw-loader!./view-trip-details-at.component.html */ "./node_modules/raw-loader/index.js!./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.html"),
        styles: [__webpack_require__(/*! ./view-trip-details-at.component.scss */ "./src/app/ayyanar-transport/trip-details-at/view-trip-details-at/view-trip-details-at.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ViewTripDetailsAtComponent);



/***/ })

}]);
//# sourceMappingURL=trip-details-at-trip-details-at-module-es2015.js.map