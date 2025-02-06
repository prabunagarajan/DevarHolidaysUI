(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-details-vehicle-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Add Vehicle Details</p>\r\n<ul class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/dashboard']\">Home</a>\r\n  </li>\r\n  <ng-container>\r\n    <li class=\"breadcrumb-item\" [routerLink]=\"['/master/vehicle-detail/list']\"><a href=\"javascript:\"> Vehicle\r\n        Details</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item\"><a href=\"javascript:\">{{screenName}}</a></li>\r\n  </ng-container>\r\n</ul>\r\n<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <form [formGroup]=\"vehicleFormDetails\" autocomplete=\"off\">\r\n      <h5>Image Caps</h5>\r\n      <hr>\r\n      <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>FC Date <span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" [owlDateTime]=\"dt1\" class=\"form-control\" [owlDateTimeTrigger]=\"dt1\"\r\n                placeholder=\"Date Time\" formControlName=\"fcDate\">\r\n              <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\r\n              <div *ngIf=\"formSubmitted && f.fcDate.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.fcDate.errors.required\">FC Date is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Insurance Date<span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" [owlDateTime]=\"dt2\" class=\"form-control\" [owlDateTimeTrigger]=\"dt2\"\r\n                placeholder=\"Date Time\" formControlName=\"insuranceDate\">\r\n              <owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\r\n              <div *ngIf=\"formSubmitted && f.insuranceDate.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.insuranceDate.errors.required\">Insurance Date is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Pollution Date<span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" [owlDateTime]=\"dt3\" class=\"form-control\" [owlDateTimeTrigger]=\"dt3\"\r\n                placeholder=\"Date Time\" formControlName=\"polutionDate\">\r\n              <owl-date-time [pickerType]=\"'calendar'\" #dt3></owl-date-time>\r\n              <div *ngIf=\"formSubmitted && f.polutionDate.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.polutionDate.errors.required\">Pollution Date is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Remarks<span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"remarks\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.remarks.errors }\" />\r\n              <div *ngIf=\"formSubmitted && f.remarks.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.remarks.errors.required\">Remarks are required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Status<span class=\"text-danger\">*</span></label>\r\n              <select formControlName=\"status\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.status.errors }\">\r\n                <option selected disabled>Select Status</option>\r\n                <option value=\"Active\">Active</option>\r\n                <option value=\"InActive\">InActive</option>\r\n              </select>\r\n              <div *ngIf=\"formSubmitted && f.status.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.status.errors.required\">Status is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Tax Date<span class=\"text-danger\">*</span></label>\r\n              <!-- <input type=\"text\" formControlName=\"taxDate\" class=\"form-control\" bsDatepicker\r\n                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-blue' }\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.taxDate.errors }\" /> -->\r\n              <input type=\"text\" [owlDateTime]=\"dt4\" class=\"form-control\" [owlDateTimeTrigger]=\"dt4\"\r\n                placeholder=\"Date Time\" formControlName=\"taxDate\">\r\n              <owl-date-time [pickerType]=\"'calendar'\" #dt4></owl-date-time>\r\n              <div *ngIf=\"formSubmitted && f.taxDate.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.taxDate.errors.required\">Tax Date is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Vehicle Color<span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"vehicleColor\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.vehicleColor.errors }\" />\r\n              <div *ngIf=\"formSubmitted && f.vehicleColor.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.vehicleColor.errors.required\">Vehicle Color is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Vehicle Name<span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"vehicleName\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.vehicleName.errors }\" />\r\n              <div *ngIf=\"formSubmitted && f.vehicleName.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.vehicleName.errors.required\">Vehicle Name is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Vehicle Number<span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"vehicleNumber\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.vehicleNumber.errors }\"\r\n                (keydown)=\"spaceNotAllowd($event)\" />\r\n              <div *ngIf=\"formSubmitted && f.vehicleNumber.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.vehicleNumber.errors.required\">Vehicle Number is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-lg-12 text-end\">\r\n            <div class=\"modal-footer\">\r\n              <button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"submit()\">Submit</button>\r\n              <button type=\"button\" class=\"btn btn-outline-secondary\" [routerLink]=\"['/master/vehicle-detail/list']\"\r\n                (click)=\"back()\">Back</button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<app-ui-modal #submitPopUp [hideFooter]=\"true\" [dialogClass]=\"'modal-lg'\">\r\n  <div class=\"app-modal-header\">\r\n    <h5 class=\"modal-title\">Confirm</h5>\r\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n      (click)=\"submitPopUp.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n  </div>\r\n\r\n  <div class=\"app-modal-body\">\r\n    <p>Are you sure whant submit?</p>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"btnLoder\" (click)=\"finalSubmit()\">\r\n        <i class=\"fa\" [ngClass]=\"{'fa-spin fa-asterisk': btnLoder, 'fa-check': !btnLoder}\"></i>Yes\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"onCancel()\">\r\n        <i class=\"feather icon-slash\"></i> No\r\n      </button>\r\n    </div>\r\n  </div>\r\n</app-ui-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/vehicle-details/vehicle-details.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/vehicle-details/vehicle-details.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <form [formGroup]=\"vehicleFormSearchDetails\" autocomplete=\"off\">\r\n      <!-- <h5>Driver Details</h5> -->\r\n      <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n        <h4>Search</h4>\r\n        <div class=\"row\">\r\n          <!-- Aadhar Number -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Vehicle Number </label>\r\n              <input type=\"text\" formControlName=\"vehicleNumber\" class=\"form-control\"\r\n                placeholder=\"Enter Vehicle Number\" />\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Aadhar Number -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Vehicle Name</label>\r\n              <input type=\"text\" formControlName=\"vehicleName\" class=\"form-control\" placeholder=\"Enter Vehicle Name\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Submit and Cancel buttons -->\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-lg-12 text-end\">\r\n            <div class=\"modal-footer\">\r\n              <button type=\"submit\" class=\"btn btn-outline-info list-button-container\" (click)=\"search()\"><span class=\"list-text-alaign-center\">Submit</span></button>\r\n              <button type=\"button\" class=\"btn btn-outline-secondary list-button-container\" (click)=\"onclear()\"><span class=\"list-text-alaign-center\">Clear</span></button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </app-card>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"outer-container\">\r\n  <div class=\"button-container\">\r\n    <button class=\"btn btn-outline-success list-button-container\" [routerLink]=\"'/master/vehicle-detail/add'\">\r\n      <span class=\"list-text-alaign-center\">Add</span>\r\n    </button>\r\n    <button class=\"btn btn-outline-secondary list-button-container\" [disabled]=\"!editDisabled\" (click)=\"edit()\">\r\n      <span class=\"list-text-alaign-center\">Edit</span>\r\n    </button>\r\n    <button class=\"btn btn-outline-warning list-button-container\" [disabled]=\"!viewDisabled\" (click)=\"view()\">\r\n      <span class=\"list-text-alaign-center\">View</span>\r\n    </button>\r\n    <!-- <button (click)=\"clearSelection()\">\r\n      <span>Clear</span>\r\n    </button> -->\r\n  </div>\r\n</div>\r\n<table mat-table [dataSource]=\"dataSource\" class=\"table-design\">\r\n  <!-- Serial No Column -->\r\n  <ng-container matColumnDef=\"serialNo\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> S.No </th>\r\n    <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-center\"> {{ i + 1 }} </td>\r\n  </ng-container>\r\n\r\n  <!-- Vehicle No Column -->\r\n  <ng-container matColumnDef=\"vehicleNo\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Vehicle No </th>\r\n    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.vehicleNumber}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Vehicle Name Column -->\r\n  <ng-container matColumnDef=\"vehicleName\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Vehicle Name </th>\r\n    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.vehicleName}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Driver Name Column -->\r\n  <ng-container matColumnDef=\"insuranceDate\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"text-center\">InsuranceDate </th>\r\n    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.insuranceDate | date: 'dd-MM-yyyy'}} </td>\r\n  </ng-container>\r\n\r\n  <!-- District Column -->\r\n  <ng-container matColumnDef=\"taxDate\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Tax Date </th>\r\n    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.taxDate | date: 'dd-MM-yyyy'}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Phone No Column -->\r\n  <ng-container matColumnDef=\"fcDate\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> FC Date </th>\r\n    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.fcDate | date: 'dd-MM-yyyy'}} </td>\r\n  </ng-container>\r\n\r\n\r\n  <!-- Phone No Column -->\r\n  <ng-container matColumnDef=\"polutionDate\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Polution Date </th>\r\n    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.polutionDate | date: 'dd-MM-yyyy'}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Action Column -->\r\n  <ng-container matColumnDef=\"action\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Action </th>\r\n    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n      <mat-radio-button (change)=\"selectRecord(element)\"></mat-radio-button>\r\n    </td>\r\n  </ng-container>\r\n\r\n\r\n\r\n  <!-- Header and Row Definitions -->\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [length]=\"totalCounts\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\"\r\n  (page)=\"pageEvent($event)\">\r\n</mat-paginator>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a [routerLink]=\"['/dashboard']\">Home</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item\">\r\n        <a [routerLink]=\"['/master/vehicle-detail/list']\">Vehicle Details</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">View</li>\r\n</ul>\r\n\r\n<app-card [hidHeader]=\"true\" class=\"view-panel\">\r\n    <h4>Vehicle Details</h4> <hr>\r\n    <div class=\"container\">\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col-md-6\">\r\n                <label class=\"view-label\">Vehicle Number</label>\r\n                <p class=\"view-text\">{{ vehicleDetails?.vehicleNumber }}</p>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <label class=\"view-label\">Vehicle Name</label>\r\n                <p class=\"view-text\">{{ vehicleDetails?.vehicleName }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col-md-6\">\r\n                <label class=\"view-label\">Vehicle Color</label>\r\n                <p class=\"view-text\">{{ vehicleDetails?.vehicleColor }}</p>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <label class=\"view-label\">Remarks</label>\r\n                <p class=\"view-text\">{{ vehicleDetails?.remarks }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col-md-6\">\r\n                <label class=\"view-label\">Insurance Date</label>\r\n                <p class=\"view-text\">{{ vehicleDetails?.insuranceDate | date:'medium' }}</p>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <label class=\"view-label\">Tax Date</label>\r\n                <p class=\"view-text\">{{ vehicleDetails?.taxDate | date:'medium' }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col-md-6\">\r\n                <label class=\"view-label\">Fitness Certificate Date</label>\r\n                <p class=\"view-text\">{{ vehicleDetails?.fcDate | date:'medium' }}</p>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <label class=\"view-label\">Pollution Date</label>\r\n                <p class=\"view-text\">{{ vehicleDetails?.polutionDate | date:'medium' }}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n            <div class=\"col-lg-12 text-end\">\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline-secondary\"\r\n                        [routerLink]=\"['/master/vehicle-detail/list']\">Back</button>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</app-card>"

/***/ }),

/***/ "./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bs-datepicker {\n  background-color: #f8f9fa;\n  border-radius: 5px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }\n\n.bs-datepicker .day {\n  border-radius: 50%; }\n\n.bs-datepicker .day.selected {\n  background-color: #007bff;\n  color: white; }\n\n.bs-datepicker .day:hover {\n  background-color: #007bff33; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL3ZlaGljbGUtZGV0YWlscy9hZGQtZWRpdC12ZWhpY2xlLWRldGFpbHMvRDpcXDE5LVYtRGV2ZXIgSG9sZGF5cyBVSVxcREhELU9MRC1EZXNpZ25zXFxEZXZhckhvbGlkYXlzVUkvc3JjXFxhcHBcXG1hc3RlclxcdmVoaWNsZS1kZXRhaWxzXFxhZGQtZWRpdC12ZWhpY2xlLWRldGFpbHNcXGFkZC1lZGl0LXZlaGljbGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIseUNBQXlDLEVBQUE7O0FBRzdDO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci92ZWhpY2xlLWRldGFpbHMvYWRkLWVkaXQtdmVoaWNsZS1kZXRhaWxzL2FkZC1lZGl0LXZlaGljbGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icy1kYXRlcGlja2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmJzLWRhdGVwaWNrZXIgLmRheSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5icy1kYXRlcGlja2VyIC5kYXkuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJzLWRhdGVwaWNrZXIgLmRheTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmMzM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AddEditVehicleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditVehicleDetailsComponent", function() { return AddEditVehicleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_service_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/master.service */ "./src/app/service/master.service.ts");







let AddEditVehicleDetailsComponent = class AddEditVehicleDetailsComponent {
    constructor(formBuilder, masterService, toasterMsg, router, route) {
        this.formBuilder = formBuilder;
        this.masterService = masterService;
        this.toasterMsg = toasterMsg;
        this.router = router;
        this.route = route;
        this.startDate = new Date(1990, 0, 1);
        this.formSubmitted = false;
        this.screenName = 'Add';
    }
    ngOnInit() {
        this.vehicleId = this.route.snapshot.paramMap.get('id');
        this.vehicleFormDetails = this.formBuilder.group({
            fcDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            insuranceDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            polutionDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            taxDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleColor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        if (this.vehicleId) {
            this.screenName = 'Edit';
            this.loadVehicleDetails();
        }
    }
    loadVehicleDetails() {
        this.masterService.getVehicleById(this.vehicleId).subscribe(res => {
            if (res.status === 's') {
                const taxDate = this.formatDate(res.data.taxDate);
                const fcDate = this.formatDate(res.data.fcDate);
                const insuranceDate = this.formatDate(res.data.insuranceDate);
                const polutionDate = this.formatDate(res.data.polutionDate);
                const status = res.data.status ? 'Active' : 'Inactive';
                this.vehicleFormDetails.patchValue({
                    fcDate: fcDate,
                    insuranceDate: insuranceDate,
                    polutionDate: polutionDate,
                    remarks: res.data.remarks,
                    status: status,
                    taxDate: taxDate,
                    vehicleColor: res.data.vehicleColor,
                    vehicleName: res.data.vehicleName,
                    vehicleNumber: res.data.vehicleNumber
                });
                this.flagSubmitButton = true;
            }
            else {
                this.toasterMsg.error('Failed to load vehicle details');
            }
        });
    }
    formatDate(date) {
        const parsedDate = new Date(date);
        const day = ('0' + parsedDate.getDate()).slice(-2);
        const month = ('0' + (parsedDate.getMonth() + 1)).slice(-2);
        const year = parsedDate.getFullYear();
        return `${day}/${month}/${year}`;
    }
    get f() {
        return this.vehicleFormDetails.controls;
    }
    submit() {
        if (this.vehicleFormDetails.valid) {
            this.submitPopUp.show();
        }
        else {
            this.formSubmitted = true;
        }
    }
    finalSubmit() {
        if (this.vehicleId) {
            this.vechileUpdate();
        }
        else {
            this.vehicleAdd();
        }
    }
    vehicleAdd() {
        const vehicleFormDetails = this.vehicleFormDetails.value;
        const vehicleAddRequest = {
            fcDate: moment__WEBPACK_IMPORTED_MODULE_4__(vehicleFormDetails.fcDate).format('YYYY-MM-DD') || '',
            insuranceDate: moment__WEBPACK_IMPORTED_MODULE_4__(vehicleFormDetails.insuranceDate).format('YYYY-MM-DD') || '',
            polutionDate: moment__WEBPACK_IMPORTED_MODULE_4__(vehicleFormDetails.polutionDate).format('YYYY-MM-DD') || '',
            remarks: vehicleFormDetails.remarks || '',
            status: vehicleFormDetails.status == 'Active' ? true : false,
            taxDate: moment__WEBPACK_IMPORTED_MODULE_4__(vehicleFormDetails.taxDate).format('YYYY-MM-DD') || '',
            vehicleColor: vehicleFormDetails.vehicleColor || '',
            vehicleName: vehicleFormDetails.vehicleName || '',
            vehicleNumber: vehicleFormDetails.vehicleNumber || ''
        };
        this.btnLoder = true;
        this.masterService.vehicleDetailsAdd(vehicleAddRequest).subscribe(vehicleAddResponse => {
            this.btnLoder = false;
            if (vehicleAddResponse.status = 's') {
                this.submitPopUp.hide();
                this.toasterMsg.success("Vehicle details submitted successfully");
                this.router.navigate(['/master/vehicle-detail/list']);
            }
            else {
                this.toasterMsg.error(vehicleAddResponse.userDisplayMesg);
            }
        });
    }
    vechileUpdate() {
        const vehicleFormDetails = this.vehicleFormDetails.value;
        const vechileUpdateRequest = {
            fcDate: moment__WEBPACK_IMPORTED_MODULE_4__(vehicleFormDetails.fcDate).format('YYYY-MM-DD') || '',
            insuranceDate: moment__WEBPACK_IMPORTED_MODULE_4__(vehicleFormDetails.insuranceDate).format('YYYY-MM-DD') || '',
            polutionDate: moment__WEBPACK_IMPORTED_MODULE_4__(vehicleFormDetails.polutionDate).format('YYYY-MM-DD') || '',
            remarks: vehicleFormDetails.remarks || '',
            status: vehicleFormDetails.status == 'Active' ? true : false,
            taxDate: moment__WEBPACK_IMPORTED_MODULE_4__(vehicleFormDetails.taxDate).format('YYYY-MM-DD') || '',
            vehicleColor: vehicleFormDetails.vehicleColor || '',
            vehicleName: vehicleFormDetails.vehicleName || '',
            vehicleNumber: vehicleFormDetails.vehicleNumber || '',
            id: this.vehicleId
        };
        this.btnLoder = true;
        this.masterService.updateVehicle(vechileUpdateRequest).subscribe(vechileUpdateResponse => {
            this.btnLoder = false;
            if (vechileUpdateResponse.status = 's') {
                this.submitPopUp.hide();
                this.toasterMsg.success("Vehicele details updated successfully");
                this.router.navigate(['/master/vehicle-detail/list']);
            }
            else {
                this.toasterMsg.error(vechileUpdateResponse.userDisplayMesg);
            }
        });
    }
    onCancel() {
        this.submitPopUp.hide();
    }
    spaceNotAllowd(event) {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode === 32) {
            event.preventDefault();
            return;
        }
    }
};
AddEditVehicleDetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('submitPopUp', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddEditVehicleDetailsComponent.prototype, "submitPopUp", void 0);
AddEditVehicleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-edit-vehicle-details',
        template: __webpack_require__(/*! raw-loader!./add-edit-vehicle-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.html"),
        styles: [__webpack_require__(/*! ./add-edit-vehicle-details.component.scss */ "./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_service_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], AddEditVehicleDetailsComponent);



/***/ }),

/***/ "./src/app/master/vehicle-details/vehicle-details-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/master/vehicle-details/vehicle-details-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: VehicleDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailsRoutingModule", function() { return VehicleDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_edit_vehicle_details_add_edit_vehicle_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-vehicle-details/add-edit-vehicle-details.component */ "./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.ts");
/* harmony import */ var _vehicle_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-details.component */ "./src/app/master/vehicle-details/vehicle-details.component.ts");
/* harmony import */ var _view_vehicle_details_view_vehicle_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-vehicle-details/view-vehicle-details.component */ "./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.ts");






const routes = [
    {
        path: 'list',
        component: _vehicle_details_component__WEBPACK_IMPORTED_MODULE_4__["VehicleDetailsComponent"]
    },
    {
        path: 'add',
        component: _add_edit_vehicle_details_add_edit_vehicle_details_component__WEBPACK_IMPORTED_MODULE_3__["AddEditVehicleDetailsComponent"]
    },
    {
        path: 'modification/:id',
        component: _add_edit_vehicle_details_add_edit_vehicle_details_component__WEBPACK_IMPORTED_MODULE_3__["AddEditVehicleDetailsComponent"]
    },
    {
        path: 'view/:id',
        component: _view_vehicle_details_view_vehicle_details_component__WEBPACK_IMPORTED_MODULE_5__["ViewVehicleDetailsComponent"]
    },
];
let VehicleDetailsRoutingModule = class VehicleDetailsRoutingModule {
};
VehicleDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VehicleDetailsRoutingModule);



/***/ }),

/***/ "./src/app/master/vehicle-details/vehicle-details.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/master/vehicle-details/vehicle-details.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci92ZWhpY2xlLWRldGFpbHMvdmVoaWNsZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/master/vehicle-details/vehicle-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/master/vehicle-details/vehicle-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: VehicleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailsComponent", function() { return VehicleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_service_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/master.service */ "./src/app/service/master.service.ts");








let VehicleDetailsComponent = class VehicleDetailsComponent {
    constructor(masterService, toaster, router, formBuilder) {
        this.masterService = masterService;
        this.toaster = toaster;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['serialNo', 'vehicleNo', 'vehicleName', 'insuranceDate', 'taxDate', 'fcDate', 'polutionDate', 'action'];
        this.pageSize = 10;
    }
    ngOnInit() {
        this.vehicleFormSearchDetails = this.formBuilder.group({
            vehicleNumber: [''],
            vehicleName: ['']
        });
        this.loadDriverDetails();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    loadDriverDetails(pageIndex = 0, pageSize = this.pageSize) {
        const request = {
            filters: {},
            pageNo: pageIndex,
            paginationSize: pageSize,
            sortField: 'modifiedDate',
            sortOrder: 'DESC',
        };
        this.masterService.vehicleDetailsGetAllList(request).subscribe((res) => {
            if (res.status === 's') {
                this.dataSource.data = res.data.contents;
                this.totalCounts = res.data.totalElements;
            }
            else {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
            }
        });
    }
    selectRecord(record) {
        this.selectedRecord = record ? record : undefined;
        if (this.selectedRecord) {
            this.editDisabled = true;
            this.viewDisabled = true;
        }
    }
    edit() {
        if (this.selectedRecord) {
            this.router.navigate(['/master/vehicle-detail/modification', this.selectedRecord.id]);
        }
    }
    view() {
        if (this.selectedRecord) {
            this.router.navigate(['/master/vehicle-detail/view', this.selectedRecord.id]);
        }
    }
    pageEvent(event) {
        const pageIndex = event.pageIndex;
        const pageSize = event.pageSize;
        this.loadDriverDetails(pageIndex, pageSize);
    }
    search() {
        const vehicleFormSearchDetails = this.vehicleFormSearchDetails.value;
        const searchRequest = {
            filters: {
                vehicleNumber: vehicleFormSearchDetails.vehicleNumber ? vehicleFormSearchDetails.vehicleNumber : '',
                vehicleName: vehicleFormSearchDetails.vehicleName ? vehicleFormSearchDetails.vehicleName : ''
            },
            pageNo: 0,
            paginationSize: 10,
            sortField: "modifiedDate",
            sortOrder: "DESC"
        };
        this.masterService.vehicleDetailsGetAllList(searchRequest).subscribe((searchResponse) => {
            if (searchResponse.status === 's') {
                this.dataSource.data = searchResponse.data.contents;
                this.totalCounts = searchResponse.data.totalElements;
            }
            else {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
            }
        });
    }
    onclear() {
        this.vehicleFormSearchDetails.patchValue({
            vehicleNumber: '',
            vehicleName: ''
        });
        const clearRequest = {
            filters: {},
            pageNo: 0,
            paginationSize: 10,
            sortField: 'modifiedDate',
            sortOrder: 'DESC',
        };
        this.masterService.vehicleDetailsGetAllList(clearRequest).subscribe((clearResponse) => {
            if (clearResponse.status === 's') {
                this.dataSource.data = clearResponse.data.contents;
                this.totalCounts = clearResponse.data.totalElements;
            }
            else {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
            }
        });
    }
};
VehicleDetailsComponent.ctorParameters = () => [
    { type: src_app_service_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], VehicleDetailsComponent.prototype, "paginator", void 0);
VehicleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-details',
        template: __webpack_require__(/*! raw-loader!./vehicle-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/vehicle-details/vehicle-details.component.html"),
        styles: [__webpack_require__(/*! ./vehicle-details.component.scss */ "./src/app/master/vehicle-details/vehicle-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], VehicleDetailsComponent);



/***/ }),

/***/ "./src/app/master/vehicle-details/vehicle-details.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/master/vehicle-details/vehicle-details.module.ts ***!
  \******************************************************************/
/*! exports provided: VehicleDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailsModule", function() { return VehicleDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _vehicle_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle-details-routing.module */ "./src/app/master/vehicle-details/vehicle-details-routing.module.ts");
/* harmony import */ var _vehicle_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-details.component */ "./src/app/master/vehicle-details/vehicle-details.component.ts");
/* harmony import */ var _add_edit_vehicle_details_add_edit_vehicle_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit-vehicle-details/add-edit-vehicle-details.component */ "./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.ts");
/* harmony import */ var _view_vehicle_details_view_vehicle_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-vehicle-details/view-vehicle-details.component */ "./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
















let VehicleDetailsModule = class VehicleDetailsModule {
};
VehicleDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _vehicle_details_component__WEBPACK_IMPORTED_MODULE_4__["VehicleDetailsComponent"],
            _view_vehicle_details_view_vehicle_details_component__WEBPACK_IMPORTED_MODULE_6__["ViewVehicleDetailsComponent"],
            _add_edit_vehicle_details_add_edit_vehicle_details_component__WEBPACK_IMPORTED_MODULE_5__["AddEditVehicleDetailsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _vehicle_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["VehicleDetailsRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            // BsDatepickerModule.forRoot(),
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_15__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_15__["OwlNativeDateTimeModule"]
        ]
    })
], VehicleDetailsModule);



/***/ }),

/***/ "./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci92ZWhpY2xlLWRldGFpbHMvdmlldy12ZWhpY2xlLWRldGFpbHMvdmlldy12ZWhpY2xlLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ViewVehicleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVehicleDetailsComponent", function() { return ViewVehicleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/master.service */ "./src/app/service/master.service.ts");




let ViewVehicleDetailsComponent = class ViewVehicleDetailsComponent {
    constructor(masterService, activatedRoute) {
        this.masterService = masterService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(vehicleByIdResponse => {
            if (vehicleByIdResponse.id) {
                this.getVehicleById(vehicleByIdResponse.id);
            }
        });
    }
    getVehicleById(viewId) {
        this.masterService.getVehicleById(viewId).subscribe(getVehicleByIdResponse => {
            if (getVehicleByIdResponse.status == 's') {
                this.vehicleDetails = getVehicleByIdResponse.data;
            }
        });
    }
};
ViewVehicleDetailsComponent.ctorParameters = () => [
    { type: src_app_service_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ViewVehicleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-vehicle-details',
        template: __webpack_require__(/*! raw-loader!./view-vehicle-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.html"),
        styles: [__webpack_require__(/*! ./view-vehicle-details.component.scss */ "./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ViewVehicleDetailsComponent);



/***/ })

}]);
//# sourceMappingURL=vehicle-details-vehicle-details-module-es2015.js.map