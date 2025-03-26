(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-details-driver-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/master/driver-details/add-edit-driver-details/add-edit-driver-details.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/driver-details/add-edit-driver-details/add-edit-driver-details.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Driver Details</h3>\n\n<ul class=\"breadcrumb\">\n  <li class=\"breadcrumb-item\">\n    <a [routerLink]=\"['/dashboard']\">Home</a>\n  </li>\n  <ng-container>\n    <li class=\"breadcrumb-item\" [routerLink]=\"['/master/driver-detail/list']\"><a href=\"javascript:\">Driver Details</a>\n    </li>\n    <li class=\"breadcrumb-item\"><a href=\"javascript:\">{{screenName}}</a></li>\n  </ng-container>\n</ul>\n\n\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <form [formGroup]=\"driverFormDetails\" autocomplete=\"off\">\n      <!-- <h5>Driver Details</h5> -->\n      <hr>\n      <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n        <div class=\"row\">\n          <!-- Aadhar Number -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Aadhar Number <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" formControlName=\"aadharNumber\" class=\"form-control\" placeholder=\"Enter Aadhar Number\"\n                maxlength=\"12\" required [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.aadharNumber.errors }\"\n                (keypress)=\"keyPress($event)\" />\n\n              <div *ngIf=\"formSubmitted && driverForm.aadharNumber.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"driverForm.aadharNumber.errors.required\">AadharNumber is required</div>\n              </div>\n            </div>\n          </div>\n\n          <!-- County -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>County <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" formControlName=\"county\" class=\"form-control\" placeholder=\"Enter County\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.county.errors }\"\n                (keypress)=\"allowOnlyLetters($event)\" />\n              <div *ngIf=\"formSubmitted && driverForm.county.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"driverForm.county.errors.required\">County is required</div>\n              </div>\n            </div>\n          </div>\n          <!-- District -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>District <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" formControlName=\"district\" class=\"form-control\" placeholder=\" Enter District\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.district.errors }\"\n                (keypress)=\"allowOnlyLetters($event)\" />\n              <div *ngIf=\"formSubmitted && driverForm.district.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"driverForm.district.errors.required\">District is required</div>\n              </div>\n\n            </div>\n          </div>\n\n          <!-- Door Number -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Door Number <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" formControlName=\"doorNumber\" class=\"form-control\" placeholder=\"Enter Door Number\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.doorNumber.errors }\" />\n              <div *ngIf=\"formSubmitted && driverForm.doorNumber.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"driverForm.doorNumber.errors.required\">DoorNumber is required</div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <!-- Driving License Number -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Driving License Number <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" formControlName=\"drivingLicenseNumber\" class=\"form-control\"\n                placeholder=\" Enter Driving License Number\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.drivingLicenseNumber.errors }\" />\n              <div *ngIf=\"formSubmitted && driverForm.drivingLicenseNumber.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"driverForm.drivingLicenseNumber.errors.required\">DrivingLicenseNumber is required</div>\n              </div>\n\n\n            </div>\n          </div>\n\n          <!-- Is Permanent Driver -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Is Permanent Driver <span class=\"text-danger\">*</span></label>\n              <select formControlName=\"isPermanentDriver\" class=\"form-select\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.isPermanentDriver.errors }\">\n                <option value=\"\" disabled selected>Select an option</option>\n                <option value=\"Active\">Yes</option>\n                <option value=\"Inactive\">No</option>\n              </select>\n              <div *ngIf=\"formSubmitted && driverForm.isPermanentDriver.errors?.required\" class=\"invalid-feedback\">\n                Is Permanent Driver is required\n              </div>\n            </div>\n          </div>\n          <!-- Mobile Number -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Mobile Number <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"mobileNumber\" placeholder=\"Enter Mobile Number\"\n                maxlength=\"10\" required (keypress)=\"keyPress($event)\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.mobileNumber.errors }\" />\n              <div *ngIf=\"formSubmitted && driverForm.mobileNumber.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"driverForm.mobileNumber.errors.required\">MobileNumber is required</div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Name -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Name <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Enter Name\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.name.errors }\"\n                (keypress)=\"allowOnlyLetters($event)\" />\n              <div *ngIf=\"formSubmitted && driverForm.name.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"driverForm.name.errors.required\">Name is required</div>\n                <div *ngIf=\"driverForm.name.errors.pattern\">Name must contain only letters (A-Z, a-z)</div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <!-- State -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>State <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"Enter State\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.state.errors }\"\n                (keypress)=\"allowOnlyLetters($event)\" />\n              <div *ngIf=\"formSubmitted && driverForm.state.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"driverForm.state.errors.required\">State is required</div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Status -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Status <span class=\"text-danger\">*</span></label>\n              <select formControlName=\"status\" class=\"form-select\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.status.errors }\">\n                <option value=\"\" disabled selected>Select Status</option>\n                <option value=\"Active\">Active</option>\n                <option value=\"Inactive\">InActive</option>\n              </select>\n              <div *ngIf=\"formSubmitted && driverForm.status.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"driverForm.status.errors.required\">Status is required</div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Street -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Street <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" formControlName=\"street\" class=\"form-control\" placeholder=\"Enter Street\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.street.errors }\" />\n              <div *ngIf=\"formSubmitted && driverForm.street.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"driverForm.street.errors.required\">Street is required</div>\n              </div>\n\n            </div>\n          </div>\n\n          <!-- Village or City -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Village or City <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" formControlName=\"villageOrCity\" class=\"form-control\"\n                placeholder=\"Enter Village or City\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.villageOrCity.errors }\"\n                (keypress)=\"allowOnlyLetters($event)\" />\n              <div *ngIf=\"formSubmitted && driverForm.villageOrCity.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"driverForm.villageOrCity.errors.required\">VillageOrCity is required</div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <!-- Submit and Cancel buttons -->\n        <div class=\"row mt-3\">\n          <div class=\"col-lg-12 text-end\">\n            <div class=\"modal-footer\">\n              <button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"submit()\">Submit</button>\n              <button type=\"button\" class=\"btn btn-outline-secondary\" [routerLink]=\"['/master/driver-detail/list']\"\n                (click)=\"back()\">Back</button>\n\n            </div>\n          </div>\n        </div>\n      </app-card>\n    </form>\n  </div>\n</div>\n\n<app-ui-modal #submitPopUp [hideFooter]=\"true\" [dialogClass]=\"'modal-lg'\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">Confirm</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"submitPopUp.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n\n  <div class=\"app-modal-body\">\n    <p>Are you sure whant submit?</p>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"btnLoder\" (click)=\"finalSubmit()\">\n        <i class=\"fa\" [ngClass]=\"{'fa-spin fa-asterisk': btnLoder, 'fa-check': !btnLoder}\"></i>\n\n        Yes\n      </button>\n      <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"onCancel()\">\n        <i class=\"feather icon-slash\"></i> No\n      </button>\n    </div>\n  </div>\n</app-ui-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/driver-details/driver-details.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/driver-details/driver-details.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <form [formGroup]=\"driverFormSearchDetails\" autocomplete=\"off\">\n            <!-- <h5>Driver Details</h5> -->\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                <h4>Search</h4>\n                <div class=\"row\">\n                    <!-- Aadhar Number -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Aadhar Number </label>\n                            <input type=\"text\" formControlName=\"aadharNumber\" class=\"form-control\"\n                                placeholder=\"Enter Aadhar Number\" maxlength=\"12\" required\n                                (keypress)=\"keyPress($event)\" />\n                        </div>\n                    </div>\n\n                    <!-- Aadhar Number -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Driving License Number</label>\n                            <input type=\"text\" formControlName=\"drivingLicenseNumber\" class=\"form-control\"\n                                placeholder=\"Enter Driving Licence Number\" />\n                        </div>\n                    </div>\n\n                    <!-- Aadhar Number -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Mobile Number </label>\n                            <input type=\"text\" formControlName=\"mobileNumber\" class=\"form-control\"\n                                placeholder=\"Enter Mobiel Number\" maxlength=\"10\" (keypress)=\"keyPress($event)\" />\n                        </div>\n                    </div>\n\n                    <!-- Aadhar Number -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Driver Name</label>\n                            <input type=\"text\" formControlName=\"driverName\" class=\"form-control\"\n                                placeholder=\"Enter Driver Name\" />\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Submit and Cancel buttons -->\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-12 text-end\">\n                        <div class=\"modal-footer\">\n                            <button type=\"submit\" class=\"btn btn-outline-info list-button-container\" (click)=\"search()\">\n                                <span class=\"list-text-alaign-center\">Submit</span>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-outline-secondary list-button-container\"\n                                (click)=\"onclear()\"><span class=\"list-text-alaign-center\">Clear</span></button>\n\n                        </div>\n                    </div>\n                </div>\n\n            </app-card>\n        </form>\n    </div>\n</div>\n\n<div class=\"outer-container\">\n    <div class=\"button-container\">\n        <button class=\"btn btn-outline-success list-button-container\" [routerLink]=\"['/master/driver-detail/add']\">\n            <span class=\"list-text-alaign-center\">Add</span>\n        </button>\n        <button class=\"btn btn-outline-secondary list-button-container\" (click)=\"onEdit()\" [disabled]=\"!editEnable\">\n            <span class=\"list-text-alaign-center\">Edit</span>\n        </button>\n        <button class=\"btn btn-outline-warning list-button-container\" (click)=\"onView()\" [disabled]=\"!viewEnable\">\n            <span class=\"list-text-alaign-center\">View</span>\n        </button>\n        <!-- <button (click)=\"onclear()\">\n            <span>Clear</span>\n        </button> -->\n    </div>\n</div>\n\n<!-- <app-card [hidHeader]=\"true\" blockClass=\"table-border-style\" class=\"list-panel\">\n    <div class=\"table-responsive text-center\">\n        <div class=\"example-table-container\">\n            <table mat-table [dataSource]=\"dataSource\" class=\"table-design\">\n                <ng-container matColumnDef=\"serialNo\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> S.No </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-center\">\n                        {{ i + 1 }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Driver Name </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        {{ element.name }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"mobileNumber\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Mobile Number </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        {{ element.mobileNumber }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"drivingLicenseNumber\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Driving License No </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        {{ element.drivingLicenseNumber }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"aadharNumber\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Aadhar No </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        {{ element.aadharNumber }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"district\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> District </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        {{ element.district }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"status\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Status </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        {{ element.status ? 'Active' : 'Inactive' }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Action </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        <mat-radio-button (click)=\"onSelect(element)\"></mat-radio-button>\n                    </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n\n            <div *ngIf=\"isLoading\" class=\"table-loader\">\n                <mat-spinner diameter=\"64\"></mat-spinner>\n            </div>\n\n            <mat-paginator [length]=\"totelCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\"\n                (page)=\"pageEvent($event)\">\n            </mat-paginator>\n        </div>\n    </div>\n</app-card> -->\n\n\n<!-- Loader Template -->\n<!-- <ng-template #loadingTemplate>\n    <mat-spinner diameter=\"20\"></mat-spinner>\n</ng-template> -->\n\n<app-mat-table-configuration [columns]=\"columns\" [actionKeys]=\"actionKeys\" [dataSource]=\"dataSource\"\n    [totalCount]=\"totelCount\" [pageSize]=\"pageSize\" (paginationEvent)=\"handlePagination($event)\"\n    (checkboxAction)=\"onChecked($event)\">\n</app-mat-table-configuration>\n\n\n\n<div>\n\n    <div class=\"row\">\n        <div class=\"col-xl-4 mt-2\">\n            <div class=\"dropdown\">\n                <button class=\"btn btn-outline-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\"\n                    aria-expanded=\"false\">\n                    Download\n                </button>\n                <ul class=\"dropdown-menu\">\n                    <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"exportToExcel()\">Excel</a></li>\n                    <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"generatePDF()\">PDF</a></li>\n                </ul>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/driver-details/view-driver-details/view-driver-details.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/driver-details/view-driver-details/view-driver-details.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\n  <li class=\"breadcrumb-item\">\n    <a [routerLink]=\"['/dashboard']\">Home</a>\n  </li>\n  <li class=\"breadcrumb-item\">\n    <a [routerLink]=\"['/master/driver-detail/list']\">Driver Details</a>\n  </li>\n  <li class=\"breadcrumb-item active\" aria-current=\"page\">View</li>\n</ul>\n\n<app-card [hidHeader]=\"true\" class=\"view-panel\">\n  <h4>Driver Details</h4>\n  <hr>\n  <div class=\"container\">\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Aadhar Number</label>\n        <p class=\"view-text\">{{driverDetails?.aadharNumber}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">County</label>\n        <p class=\"view-text\">{{driverDetails?.county}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">District</label>\n        <p class=\"view-text\">{{driverDetails?.district}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Door Number</label>\n        <p class=\"view-text\">{{driverDetails?.doorNumber}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Driving License Number</label>\n        <p class=\"view-text\">{{driverDetails?.drivingLicenseNumber}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Is Permanent Driver</label>\n        <p class=\"view-text\">{{driverDetails?.isPermanentDriver}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Mobile Number</label>\n        <p class=\"view-text\">{{driverDetails?.mobileNumber}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Name</label>\n        <p class=\"view-text\">{{driverDetails?.name}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">State</label>\n        <p class=\"view-text\">{{driverDetails?.state}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Status</label>\n        <p class=\"view-text\">{{driverDetails?.status}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Street</label>\n        <p class=\"view-text\">{{driverDetails?.street}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Village or City</label>\n        <p class=\"view-text\">{{driverDetails?.villageOrCity}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mt-3\">\n      <div class=\"col-lg-12 text-end\">\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-outline-secondary\"\n            [routerLink]=\"['/master/driver-detail/list']\">Back</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-card>"

/***/ }),

/***/ "./src/app/master/driver-details/add-edit-driver-details/add-edit-driver-details.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/master/driver-details/add-edit-driver-details/add-edit-driver-details.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9kcml2ZXItZGV0YWlscy9hZGQtZWRpdC1kcml2ZXItZGV0YWlscy9hZGQtZWRpdC1kcml2ZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/master/driver-details/add-edit-driver-details/add-edit-driver-details.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/master/driver-details/add-edit-driver-details/add-edit-driver-details.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AddEditDriverDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditDriverDetailsComponent", function() { return AddEditDriverDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_service_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/master.service */ "./src/app/service/master.service.ts");






var AddEditDriverDetailsComponent = /** @class */ (function () {
    function AddEditDriverDetailsComponent(fb, masterService, router, toastr, activatedRoute) {
        this.fb = fb;
        this.masterService = masterService;
        this.router = router;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.formSubmitted = false; // Initialize to false
    }
    AddEditDriverDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        this.screenName = 'Add';
        this.activatedRoute.params.subscribe(function (routeResponse) {
            if (routeResponse.id) {
                _this.listId = routeResponse.id;
                _this.submitFlag = true;
                _this.screenName = 'Edit';
                _this.masterService.driverDetailsView(routeResponse.id).subscribe(function (viewResponse) {
                    if (viewResponse.status == 's') {
                        _this.editDetails = viewResponse.data;
                        _this.driverFormDetails.patchValue({
                            aadharNumber: viewResponse.data.aadharNumber,
                            county: viewResponse.data.county,
                            district: viewResponse.data.district,
                            doorNumber: viewResponse.data.doorNumber,
                            drivingLicenseNumber: viewResponse.data.drivingLicenseNumber,
                            isPermanentDriver: viewResponse.data.isPermanentDriver ? 'Active' : 'Inactive',
                            mobileNumber: viewResponse.data.mobileNumber,
                            name: viewResponse.data.name,
                            state: viewResponse.data.state,
                            status: viewResponse.data.status ? 'Active' : 'Inactive',
                            street: viewResponse.data.street,
                            villageOrCity: viewResponse.data.villageOrCity
                        });
                    }
                });
            }
        });
    };
    AddEditDriverDetailsComponent.prototype.initializeForm = function () {
        this.driverFormDetails = this.fb.group({
            aadharNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            county: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            district: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            doorNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            drivingLicenseNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isPermanentDriver: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            villageOrCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(AddEditDriverDetailsComponent.prototype, "driverForm", {
        get: function () {
            return this.driverFormDetails.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddEditDriverDetailsComponent.prototype.submit = function () {
        if (this.driverFormDetails.valid) {
            this.submitPopUp.show();
        }
        else {
            this.formSubmitted = true;
        }
    };
    AddEditDriverDetailsComponent.prototype.finalSubmit = function () {
        if (this.submitFlag) {
            this.updateDriverDetails();
        }
        else {
            this.addDriverDetails();
        }
    };
    AddEditDriverDetailsComponent.prototype.addDriverDetails = function () {
        var _this = this;
        if (this.driverFormDetails.valid) {
            var addDriverDetailsRequest = {
                aadharNumber: this.driverFormDetails.value.aadharNumber,
                county: this.driverFormDetails.value.county,
                district: this.driverFormDetails.value.district,
                doorNumber: this.driverFormDetails.value.doorNumber,
                drivingLicenseNumber: this.driverFormDetails.value.drivingLicenseNumber,
                isPermanentDriver: this.driverFormDetails.value.isPermanentDriver === 'Active',
                mobileNumber: this.driverFormDetails.value.mobileNumber,
                name: this.driverFormDetails.value.name,
                state: this.driverFormDetails.value.state,
                status: this.driverFormDetails.value.status === 'Active',
                street: this.driverFormDetails.value.street,
                villageOrCity: this.driverFormDetails.value.villageOrCity
            };
            this.btnLoder = true;
            this.masterService.driverDetailsAdd(addDriverDetailsRequest).subscribe(function (addDriverDetailsResponse) {
                _this.btnLoder = false;
                if (addDriverDetailsResponse.status == 's') {
                    _this.toastr.success(addDriverDetailsResponse.userDisplayMesg ? addDriverDetailsResponse.userDisplayMesg : 'Driver details submited successfully!');
                    _this.router.navigate(['master/driver-detail/list']);
                }
                else {
                    _this.toastr.error(addDriverDetailsResponse.userDisplayMesg);
                }
            });
        }
        else {
            this.formSubmitted = true;
        }
    };
    AddEditDriverDetailsComponent.prototype.updateDriverDetails = function () {
        var _this = this;
        if (this.driverFormDetails.valid) {
            var updateDriverDetailsRequest = {
                aadharNumber: this.driverFormDetails.value.aadharNumber,
                county: this.driverFormDetails.value.county,
                district: this.driverFormDetails.value.district,
                doorNumber: this.driverFormDetails.value.doorNumber,
                drivingLicenseNumber: this.driverFormDetails.value.drivingLicenseNumber,
                isPermanentDriver: this.driverFormDetails.value.isPermanentDriver === 'Active',
                mobileNumber: this.driverFormDetails.value.mobileNumber,
                name: this.driverFormDetails.value.name,
                state: this.driverFormDetails.value.state,
                status: this.driverFormDetails.value.status === 'Active',
                street: this.driverFormDetails.value.street,
                villageOrCity: this.driverFormDetails.value.villageOrCity,
                id: this.listId
            };
            this.btnLoder = true;
            this.masterService.driverDetailsUpdate(updateDriverDetailsRequest).subscribe(function (updateDriverDetailsResponse) {
                _this.btnLoder = false;
                if (updateDriverDetailsResponse.status == 's') {
                    _this.toastr.success(updateDriverDetailsResponse.userDisplayMesg ? updateDriverDetailsResponse.userDisplayMesg : 'Driver details updated successfully!');
                    _this.router.navigate(['master/driver-detail/list']);
                }
                else {
                    _this.toastr.error(updateDriverDetailsResponse.userDisplayMesg);
                }
            });
        }
        else {
            this.formSubmitted = true;
        }
    };
    AddEditDriverDetailsComponent.prototype.onCancel = function () {
        this.formSubmitted = false;
        this.submitPopUp.hide();
    };
    AddEditDriverDetailsComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddEditDriverDetailsComponent.prototype.allowOnlyLetters = function (event) {
        var pattern = /^[A-Za-z]$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddEditDriverDetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_service_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('submitPopUp', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddEditDriverDetailsComponent.prototype, "submitPopUp", void 0);
    AddEditDriverDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit-driver-details',
            template: __webpack_require__(/*! raw-loader!./add-edit-driver-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/driver-details/add-edit-driver-details/add-edit-driver-details.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-driver-details.component.scss */ "./src/app/master/driver-details/add-edit-driver-details/add-edit-driver-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_service_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddEditDriverDetailsComponent);
    return AddEditDriverDetailsComponent;
}());



/***/ }),

/***/ "./src/app/master/driver-details/driver-details-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/master/driver-details/driver-details-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DriverDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverDetailsRoutingModule", function() { return DriverDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_edit_driver_details_add_edit_driver_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-driver-details/add-edit-driver-details.component */ "./src/app/master/driver-details/add-edit-driver-details/add-edit-driver-details.component.ts");
/* harmony import */ var _driver_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driver-details.component */ "./src/app/master/driver-details/driver-details.component.ts");
/* harmony import */ var _view_driver_details_view_driver_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-driver-details/view-driver-details.component */ "./src/app/master/driver-details/view-driver-details/view-driver-details.component.ts");






var routes = [
    {
        path: 'list',
        component: _driver_details_component__WEBPACK_IMPORTED_MODULE_4__["DriverDetailsComponent"]
    },
    {
        path: 'add',
        component: _add_edit_driver_details_add_edit_driver_details_component__WEBPACK_IMPORTED_MODULE_3__["AddEditDriverDetailsComponent"]
    },
    {
        path: 'modification/:id',
        component: _add_edit_driver_details_add_edit_driver_details_component__WEBPACK_IMPORTED_MODULE_3__["AddEditDriverDetailsComponent"]
    },
    {
        path: 'view/:id',
        component: _view_driver_details_view_driver_details_component__WEBPACK_IMPORTED_MODULE_5__["ViewDriverDetailsComponent"]
    }
];
var DriverDetailsRoutingModule = /** @class */ (function () {
    function DriverDetailsRoutingModule() {
    }
    DriverDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DriverDetailsRoutingModule);
    return DriverDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/master/driver-details/driver-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/master/driver-details/driver-details.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9kcml2ZXItZGV0YWlscy9kcml2ZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/master/driver-details/driver-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/master/driver-details/driver-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: DriverDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverDetailsComponent", function() { return DriverDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var src_app_service_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/master.service */ "./src/app/service/master.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/config/master-list-columns */ "./src/app/config/master-list-columns.ts");









var DriverDetailsComponent = /** @class */ (function () {
    function DriverDetailsComponent(router, masterService, toastrMsg, formBuilder) {
        this.router = router;
        this.masterService = masterService;
        this.toastrMsg = toastrMsg;
        this.formBuilder = formBuilder;
        this.columns = src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_8__["MasterListColumns"].driverDetailListColumns;
        this.actionKeys = ['checkbox']; // ['edit', 'delete'] for buttons
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](); // Example data source
        this.totalCount = 10;
        this.pageSize = 10;
        this.displayedColumns = ['serialNo', 'name', 'mobileNumber', 'drivingLicenseNumber', 'aadharNumber', 'district', 'status', 'action'];
        this.totelCount = 0;
    }
    DriverDetailsComponent.prototype.ngOnInit = function () {
        this.driverFormSearchDetails = this.formBuilder.group({
            aadharNumber: [''],
            drivingLicenseNumber: [''],
            mobileNumber: [''],
            driverName: ['']
        });
        this.getAll();
    };
    DriverDetailsComponent.prototype.ngAfterViewInit = function () {
        if (this.dataSource) {
            this.dataSource.paginator = this.paginator;
        }
    };
    DriverDetailsComponent.prototype.getAll = function (pageIndex, pageSize) {
        var _this = this;
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        this.isLoading = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](); // Clear previous data before loading
        var driverFormSearchDetails = this.driverFormSearchDetails.value;
        var request = {
            filters: {
                aadharNumber: driverFormSearchDetails.aadharNumber || '',
                drivingLicenseNumber: driverFormSearchDetails.drivingLicenseNumber || '',
                mobileNumber: driverFormSearchDetails.mobileNumber || '',
                name: driverFormSearchDetails.name || '',
            },
            paginationSize: pageSize,
            sortField: "modifiedDate",
            pageNo: pageIndex,
            sortOrder: "DESC"
        };
        this.masterService.driverDetailsSearchList(request).subscribe(function (response) {
            _this.isLoading = false;
            if (response.status == 's' && response.data) {
                var serialNumber_1 = pageIndex * pageSize; // Calculate start index dynamically
                var dataSource = response.data.contents.map(function (v, i) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, v, { sNo: serialNumber_1 + i + 1 // Adjust serial number
                 })); });
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](dataSource);
                _this.totelCount = response.data.totalElements;
            }
            else {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
            }
        });
    };
    DriverDetailsComponent.prototype.onclear = function () {
        var _this = this;
        this.driverFormSearchDetails.patchValue({
            aadharNumber: '',
            drivingLicenseNumber: '',
            mobileNumber: '',
            name: ''
        });
        var request = {
            filters: {
                aadharNumber: '',
                drivingLicenseNumber: '',
                mobileNumber: '',
                name: ''
            },
            paginationSize: 10,
            sortField: "modifiedDate",
            pageNo: 0,
            sortOrder: "DESC"
        };
        this.masterService.driverDetailsSearchList(request).subscribe(function (response) {
            if (response.status === 's' && response.data) {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response.data.contents);
                _this.totelCount = response.data.totalElements;
            }
            else {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
            }
        });
    };
    DriverDetailsComponent.prototype.search = function () {
        var _this = this;
        var driverFormSearchDetails = this.driverFormSearchDetails.value;
        var request = {
            filters: {
                aadharNumber: driverFormSearchDetails.aadharNumber ? driverFormSearchDetails.aadharNumber : '',
                drivingLicenseNumber: driverFormSearchDetails.drivingLicenseNumber ? driverFormSearchDetails.drivingLicenseNumber : '',
                mobileNumber: driverFormSearchDetails.mobileNumber ? driverFormSearchDetails.mobileNumber : '',
                name: driverFormSearchDetails.name ? driverFormSearchDetails.name : '',
            },
            paginationSize: 10,
            sortField: "modifiedDate",
            pageNo: 0,
            sortOrder: "DESC"
        };
        this.masterService.driverDetailsSearchList(request).subscribe(function (response) {
            if (response.status === 's' && response.data) {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response.data.contents);
                _this.totelCount = response.data.totalElements;
            }
            else {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
            }
        });
    };
    DriverDetailsComponent.prototype.onChecked = function (viewObj) {
        var selectObj = this.dataSource.data.find(function (findElement) { return findElement.id == viewObj.id; });
        if (selectObj) {
            this.selectObj = selectObj;
            this.viewEnable = true;
            this.editEnable = true;
        }
    };
    DriverDetailsComponent.prototype.onEdit = function () {
        if (this.selectObj) {
            this.router.navigate(['/master/driver-detail/modification', this.selectObj.id]);
        }
        else {
            this.toastrMsg.error('Edit not able');
        }
    };
    DriverDetailsComponent.prototype.onView = function () {
        if (this.selectObj) {
            this.router.navigate(['/master/driver-detail/view', this.selectObj.id]);
        }
        else {
            this.toastrMsg.error('View not able');
        }
    };
    DriverDetailsComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    DriverDetailsComponent.prototype.handlePagination = function (event) {
        var pageIndex = event.currentPage;
        var pageSize = event.pageSize;
        this.getAll(pageIndex, pageSize);
    };
    DriverDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_service_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], DriverDetailsComponent.prototype, "paginator", void 0);
    DriverDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-driver-details',
            template: __webpack_require__(/*! raw-loader!./driver-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/driver-details/driver-details.component.html"),
            styles: [__webpack_require__(/*! ./driver-details.component.scss */ "./src/app/master/driver-details/driver-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_service_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], DriverDetailsComponent);
    return DriverDetailsComponent;
}());



/***/ }),

/***/ "./src/app/master/driver-details/driver-details.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/master/driver-details/driver-details.module.ts ***!
  \****************************************************************/
/*! exports provided: DriverDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverDetailsModule", function() { return DriverDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _driver_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-details-routing.module */ "./src/app/master/driver-details/driver-details-routing.module.ts");
/* harmony import */ var _add_edit_driver_details_add_edit_driver_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-driver-details/add-edit-driver-details.component */ "./src/app/master/driver-details/add-edit-driver-details/add-edit-driver-details.component.ts");
/* harmony import */ var _view_driver_details_view_driver_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-driver-details/view-driver-details.component */ "./src/app/master/driver-details/view-driver-details/view-driver-details.component.ts");
/* harmony import */ var _driver_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driver-details.component */ "./src/app/master/driver-details/driver-details.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");








var DriverDetailsModule = /** @class */ (function () {
    function DriverDetailsModule() {
    }
    DriverDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _driver_details_component__WEBPACK_IMPORTED_MODULE_6__["DriverDetailsComponent"],
                _add_edit_driver_details_add_edit_driver_details_component__WEBPACK_IMPORTED_MODULE_4__["AddEditDriverDetailsComponent"],
                _view_driver_details_view_driver_details_component__WEBPACK_IMPORTED_MODULE_5__["ViewDriverDetailsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _driver_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["DriverDetailsRoutingModule"],
                src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], DriverDetailsModule);
    return DriverDetailsModule;
}());



/***/ }),

/***/ "./src/app/master/driver-details/view-driver-details/view-driver-details.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/master/driver-details/view-driver-details/view-driver-details.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9kcml2ZXItZGV0YWlscy92aWV3LWRyaXZlci1kZXRhaWxzL3ZpZXctZHJpdmVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/master/driver-details/view-driver-details/view-driver-details.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/master/driver-details/view-driver-details/view-driver-details.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ViewDriverDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDriverDetailsComponent", function() { return ViewDriverDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/master.service */ "./src/app/service/master.service.ts");




var ViewDriverDetailsComponent = /** @class */ (function () {
    function ViewDriverDetailsComponent(masterService, activatedRoute) {
        this.masterService = masterService;
        this.activatedRoute = activatedRoute;
    }
    ViewDriverDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (getDriverByIdResponse) {
            if (getDriverByIdResponse.id) {
                _this.getDriverById(getDriverByIdResponse.id);
            }
        });
    };
    ViewDriverDetailsComponent.prototype.getDriverById = function (viewId) {
        var _this = this;
        this.masterService.getDriverById(viewId).subscribe(function (getDriverByIdResponse) {
            if (getDriverByIdResponse.status == 's') {
                _this.driverDetails = getDriverByIdResponse.data;
            }
        });
    };
    ViewDriverDetailsComponent.ctorParameters = function () { return [
        { type: src_app_service_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ViewDriverDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-driver-details',
            template: __webpack_require__(/*! raw-loader!./view-driver-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/driver-details/view-driver-details/view-driver-details.component.html"),
            styles: [__webpack_require__(/*! ./view-driver-details.component.scss */ "./src/app/master/driver-details/view-driver-details/view-driver-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewDriverDetailsComponent);
    return ViewDriverDetailsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=driver-details-driver-details-module-es5.js.map