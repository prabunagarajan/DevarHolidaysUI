(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-details-driver-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/master/driver-details/add-edit-driver-details/add-edit-driver-details.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/driver-details/add-edit-driver-details/add-edit-driver-details.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Driver Details</h3>\r\n\r\n<ul class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/dashboard']\" >Home</a>\r\n  </li>\r\n  <ng-container >\r\n    <li class=\"breadcrumb-item\" [routerLink]=\"['/master/driver-detail/list']\"><a href=\"javascript:\" >Driver Details</a></li>\r\n    <li class=\"breadcrumb-item\" ><a href=\"javascript:\">{{screenName}}</a></li>\r\n  </ng-container>\r\n</ul>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <form [formGroup]=\"driverFormDetails\"  autocomplete=\"off\">\r\n      <!-- <h5>Driver Details</h5> -->\r\n      <hr>\r\n      <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n        <div class=\"row\">\r\n          <!-- Aadhar Number -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Aadhar Number <span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"aadharNumber\" class=\"form-control\" placeholder=\"Enter Aadhar Number\"\r\n                maxlength=\"12\" required \r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.aadharNumber.errors }\"\r\n                (keypress)=\"keyPress($event)\" />\r\n\r\n              <div *ngIf=\"formSubmitted && driverForm.aadharNumber.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"driverForm.aadharNumber.errors.required\">AadharNumber is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- County -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>County <span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"county\" class=\"form-control\" placeholder=\"Enter County\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.county.errors }\"\r\n                (keypress)=\"allowOnlyLetters($event)\" />\r\n              <div *ngIf=\"formSubmitted && driverForm.county.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"driverForm.county.errors.required\">County is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- District -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>District <span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"district\" class=\"form-control\" placeholder=\" Enter District\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.district.errors }\"\r\n                (keypress)=\"allowOnlyLetters($event)\" />\r\n              <div *ngIf=\"formSubmitted && driverForm.district.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"driverForm.district.errors.required\">District is required</div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Door Number -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Door Number <span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"doorNumber\" class=\"form-control\" placeholder=\"Enter Door Number\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.doorNumber.errors }\" />\r\n              <div *ngIf=\"formSubmitted && driverForm.doorNumber.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"driverForm.doorNumber.errors.required\">DoorNumber is required</div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <!-- Driving License Number -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Driving License Number <span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"drivingLicenseNumber\" class=\"form-control\"\r\n                placeholder=\" Enter Driving License Number\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.drivingLicenseNumber.errors }\" />\r\n              <div *ngIf=\"formSubmitted && driverForm.drivingLicenseNumber.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"driverForm.drivingLicenseNumber.errors.required\">DrivingLicenseNumber is required</div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Is Permanent Driver -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Is Permanent Driver <span class=\"text-danger\">*</span></label>\r\n              <select formControlName=\"isPermanentDriver\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.isPermanentDriver.errors }\">\r\n                <option value=\"\" disabled selected>Select an option</option>\r\n                <option value=\"Active\">Active</option>\r\n                <option value=\"Inactive\">Inactive</option>\r\n              </select>\r\n              <div *ngIf=\"formSubmitted && driverForm.isPermanentDriver.errors?.required\" class=\"invalid-feedback\">\r\n                Is Permanent Driver is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Mobile Number -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Mobile Number <span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"mobileNumber\" placeholder=\"Enter Mobile Number\"\r\n                maxlength=\"10\" required  (keypress)=\"keyPress($event)\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.mobileNumber.errors }\" />\r\n              <div *ngIf=\"formSubmitted && driverForm.mobileNumber.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"driverForm.mobileNumber.errors.required\">MobileNumber is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Name -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Name <span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Enter Name\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.name.errors }\"\r\n                (keypress)=\"allowOnlyLetters($event)\" />\r\n              <div *ngIf=\"formSubmitted && driverForm.name.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"driverForm.name.errors.required\">Name is required</div>\r\n                <div *ngIf=\"driverForm.name.errors.pattern\">Name must contain only letters (A-Z, a-z)</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <!-- State -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>State <span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"Enter State\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.state.errors }\"\r\n                (keypress)=\"allowOnlyLetters($event)\" />\r\n              <div *ngIf=\"formSubmitted && driverForm.state.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"driverForm.state.errors.required\">State is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Status -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Status <span class=\"text-danger\">*</span></label>\r\n              <select formControlName=\"status\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.status.errors }\">\r\n                <option value=\"\" disabled selected>Select Status</option>\r\n                <option value=\"Active\">Active</option>\r\n                <option value=\"Inactive\">Inactive</option>\r\n              </select>\r\n              <div *ngIf=\"formSubmitted && driverForm.status.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"driverForm.status.errors.required\">Status is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Street -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Street <span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"street\" class=\"form-control\" placeholder=\"Enter Street\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.street.errors }\" />\r\n              <div *ngIf=\"formSubmitted && driverForm.street.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"driverForm.street.errors.required\">Street is required</div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Village or City -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Village or City <span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"villageOrCity\" class=\"form-control\"\r\n                placeholder=\"Enter Village or City\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && driverForm.villageOrCity.errors }\"\r\n                (keypress)=\"allowOnlyLetters($event)\" />\r\n              <div *ngIf=\"formSubmitted && driverForm.villageOrCity.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"driverForm.villageOrCity.errors.required\">VillageOrCity is required</div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Submit and Cancel buttons -->\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-lg-12 text-end\">\r\n            <div class=\"modal-footer\">\r\n              <button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"submit()\">Submit</button>\r\n              <button type=\"button\" class=\"btn btn-outline-secondary\" [routerLink]=\"['/master/driver-detail/list']\" (click)=\"back()\">Back</button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<app-ui-modal #submitPopUp [hideFooter]=\"true\" [dialogClass]=\"'modal-lg'\">\r\n  <div class=\"app-modal-header\">\r\n    <h5 class=\"modal-title\">Confirm</h5>\r\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n      (click)=\"submitPopUp.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n  </div>\r\n\r\n  <div class=\"app-modal-body\">\r\n    <p>Are you sure whant submit?</p>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"finalSubmit()\">\r\n        <i class=\"feather icon-thumbs-up\"></i> Yes\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"onCancel()\">\r\n        <i class=\"feather icon-slash\"></i> No\r\n      </button>\r\n    </div>\r\n  </div>\r\n</app-ui-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/driver-details/driver-details.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/driver-details/driver-details.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <form [formGroup]=\"driverFormSearchDetails\" autocomplete=\"off\">\r\n            <!-- <h5>Driver Details</h5> -->\r\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <h4>Search</h4>\r\n                <div class=\"row\">\r\n                    <!-- Aadhar Number -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Aadhar Number </label>\r\n                            <input type=\"text\" formControlName=\"aadharNumber\" class=\"form-control\"\r\n                                placeholder=\"Enter Aadhar Number\" maxlength=\"12\" required\r\n                                (keypress)=\"keyPress($event)\" />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Aadhar Number -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driving License Number</label>\r\n                            <input type=\"text\" formControlName=\"drivingLicenseNumber\" class=\"form-control\"\r\n                                placeholder=\"Enter Driving Licence Number\" />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Aadhar Number -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Mobile Number </label>\r\n                            <input type=\"text\" formControlName=\"mobileNumber\" class=\"form-control\"\r\n                                placeholder=\"Enter Mobiel Number\" maxlength=\"10\" (keypress)=\"keyPress($event)\" />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Aadhar Number -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driver Name</label>\r\n                            <input type=\"text\" formControlName=\"driverName\" class=\"form-control\"\r\n                                placeholder=\"Enter Driver Name\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Submit and Cancel buttons -->\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col-lg-12 text-end\">\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"submit\" class=\"btn btn-outline-info\" (click)=\"search()\">Submit</button>\r\n                            <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"onclear()\">Clear</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </app-card>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"outer-container\">\r\n    <div class=\"button-container\">\r\n        <button class=\"btn btn-outline-success\" [routerLink]=\"['/master/driver-detail/add']\">\r\n            <span>Add</span>\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" (click)=\"onEdit()\" [disabled]=\"!editEnable\">\r\n            <span>Edit</span>\r\n        </button>\r\n        <button class=\"btn btn-outline-warning\" (click)=\"onView()\" [disabled]=\"!viewEnable\">\r\n            <span>View</span>\r\n        </button>\r\n        <!-- <button (click)=\"onclear()\">\r\n            <span>Clear</span>\r\n        </button> -->\r\n    </div>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"driver-table\">\r\n    <!-- Serial No Column -->\r\n    <ng-container matColumnDef=\"serialNo\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> S.No </th>\r\n        <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-center\"> {{ i + 1 }} </td>\r\n    </ng-container>\r\n\r\n    <!-- Driver Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Driver Name </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Mobile Number Column -->\r\n    <ng-container matColumnDef=\"mobileNumber\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Mobile Number </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.mobileNumber}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Driving License Number Column -->\r\n    <ng-container matColumnDef=\"drivingLicenseNumber\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Driving License No </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.drivingLicenseNumber}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Aadhar Number Column -->\r\n    <ng-container matColumnDef=\"aadharNumber\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Aadhar No </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.aadharNumber}} </td>\r\n    </ng-container>\r\n\r\n    <!-- District Column -->\r\n    <ng-container matColumnDef=\"district\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> District </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.district}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Status Column -->\r\n    <ng-container matColumnDef=\"status\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Status </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.status ? 'Active' : 'Inactive'}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Action Column -->\r\n    <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Action </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n            <mat-radio-button (click)=\"onSelect(element)\"></mat-radio-button>\r\n        </td>\r\n    </ng-container>\r\n\r\n\r\n    <!-- Header and Row Definitions -->\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [length]=\"totelCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\"\r\n    (page)=\"pageEvent($event)\">\r\n</mat-paginator>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/driver-details/view-driver-details/view-driver-details.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/driver-details/view-driver-details/view-driver-details.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/dashboard']\">Home</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/master/driver-detail/list']\">Driver Details</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item active\" aria-current=\"page\">View</li>\r\n</ul>\r\n\r\n<app-card [hidHeader]=\"true\" class=\"view-panel\">\r\n  <h4>Driver Details</h4>\r\n  <hr>\r\n  <div class=\"container\">\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Aadhar Number</label>\r\n        <p class=\"view-text\">{{driverDetails?.aadharNumber}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">County</label>\r\n        <p class=\"view-text\">{{driverDetails?.county}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">District</label>\r\n        <p class=\"view-text\">{{driverDetails?.district}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Door Number</label>\r\n        <p class=\"view-text\">{{driverDetails?.doorNumber}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Driving License Number</label>\r\n        <p class=\"view-text\">{{driverDetails?.drivingLicenseNumber}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Is Permanent Driver</label>\r\n        <p class=\"view-text\">{{driverDetails?.isPermanentDriver}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Mobile Number</label>\r\n        <p class=\"view-text\">{{driverDetails?.mobileNumber}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Name</label>\r\n        <p class=\"view-text\">{{driverDetails?.name}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">State</label>\r\n        <p class=\"view-text\">{{driverDetails?.state}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Status</label>\r\n        <p class=\"view-text\">{{driverDetails?.status}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Street</label>\r\n        <p class=\"view-text\">{{driverDetails?.street}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Village or City</label>\r\n        <p class=\"view-text\">{{driverDetails?.villageOrCity}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-3\">\r\n      <div class=\"col-lg-12 text-end\">\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-outline-secondary\"\r\n            [routerLink]=\"['/master/driver-detail/list']\">Back</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-card>"

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
            this.masterService.driverDetailsAdd(addDriverDetailsRequest).subscribe(function (addDriverDetailsResponse) {
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
            this.masterService.driverDetailsUpdate(updateDriverDetailsRequest).subscribe(function (updateDriverDetailsResponse) {
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

module.exports = ".driver-table {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse;\n  box-shadow: none;\n  /* Removed box-shadow */\n  border-radius: 0;\n  /* Removed border-radius */\n  overflow: hidden;\n  background-color: #ffffff;\n  margin-bottom: 20px; }\n\nth {\n  background: -webkit-gradient(linear, left top, left bottom, from(gray), to(gray));\n  background: linear-gradient(gray, gray);\n  color: white;\n  font-weight: bold;\n  font-size: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\ntr:nth-child(even) td {\n  background-color: #f7f7f7; }\n\n.mat-header-row {\n  border-bottom: none;\n  /* Removed border */ }\n\n.mat-row {\n  border-bottom: none;\n  /* Removed border */ }\n\n.mat-header-cell,\n.mat-cell {\n  padding: 12px 20px; }\n\n.mat-paginator {\n  margin-top: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  font-size: 14px;\n  font-weight: bold;\n  background-color: #ffffff;\n  border-radius: 0;\n  /* Removed border-radius */\n  box-shadow: none;\n  /* Removed box-shadow */\n  padding: 10px; }\n\n.mat-paginator-range-actions {\n  display: none; }\n\n.mat-paginator-previous,\n.mat-paginator-next {\n  color: #1e88e5;\n  -webkit-transition: color 0.3s ease;\n  transition: color 0.3s ease; }\n\n.mat-paginator-previous:hover,\n.mat-paginator-next:hover {\n  color: #42a5f5; }\n\n.mat-paginator-page-size {\n  font-size: 14px;\n  font-weight: normal; }\n\n/*Button Design*/\n\n.outer-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  /* Align the button container to the right */\n  width: 100%;\n  /* Ensures the outer container takes up the full width */ }\n\n.button-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  /* Align buttons to the left within the container */\n  gap: 10px;\n  /* Optional: adds space between buttons */ }\n\n/* From Uiverse.io by mrhyddenn */\n\nbutton {\n  background: #fff;\n  border: none;\n  padding: 10px 20px;\n  display: inline-block;\n  font-size: 15px;\n  font-weight: 600;\n  width: 120px;\n  text-transform: uppercase;\n  cursor: pointer;\n  -webkit-transform: skew(-21deg);\n          transform: skew(-21deg); }\n\nspan {\n  display: inline-block;\n  -webkit-transform: skew(21deg);\n          transform: skew(21deg); }\n\nbutton::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 100%;\n  left: 0;\n  background: #525252;\n  opacity: 0;\n  z-index: -1;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s; }\n\nbutton:hover {\n  color: #fff; }\n\nbutton:hover::before {\n  left: 0;\n  right: 0;\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2RyaXZlci1kZXRhaWxzL0Q6XFwxOS1WLURldmVyIEhvbGRheXMgVUlcXERIRC1PTEQtRGVzaWduc1xcRGV2YXJIb2xpZGF5c1VJL3NyY1xcYXBwXFxtYXN0ZXJcXGRyaXZlci1kZXRhaWxzXFxkcml2ZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQix1QkFBQTtFQUNBLGdCQUFnQjtFQUNoQiwwQkFBQTtFQUNBLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBS3ZCO0VBQ0ksaUZBQXlDO0VBQXpDLHVDQUF5QztFQUN6QyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVUsRUFBQTs7QUFJZDtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLG1CQUFtQjtFQUNuQixtQkFBQSxFQUFvQjs7QUFHeEI7RUFDSSxtQkFBbUI7RUFDbkIsbUJBQUEsRUFBb0I7O0FBR3hCOztFQUVJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiwwQkFBQTtFQUNBLGdCQUFnQjtFQUNoQix1QkFBQTtFQUNBLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCOztFQUVJLGNBQWM7RUFDZCxtQ0FBMkI7RUFBM0IsMkJBQTJCLEVBQUE7O0FBRy9COztFQUVJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3ZCLGdCQUFBOztBQUNBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IscUJBQXlCO1VBQXpCLHlCQUF5QjtFQUFFLDRDQUFBO0VBQzNCLFdBQVc7RUFBRSx3REFBQSxFQUF5RDs7QUFHeEU7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQUUsbURBQUE7RUFDN0IsU0FBUztFQUFFLHlDQUFBLEVBQTBDOztBQUt2RCxpQ0FBQTs7QUFDRjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLCtCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxxQkFBcUI7RUFDckIsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsT0FBTztFQUNQLG1CQUEyQjtFQUMzQixVQUFVO0VBQ1YsV0FBVztFQUNYLDRCQUFvQjtFQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9kcml2ZXItZGV0YWlscy9kcml2ZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcml2ZXItdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLyogUmVtb3ZlZCBib3gtc2hhZG93ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLyogUmVtb3ZlZCBib3JkZXItcmFkaXVzICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG5cclxudGgge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGdyYXkgLCBncmF5ICk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIC8qIFJlbW92ZWQgYm9yZGVyICovXHJcbn1cclxuXHJcbi5tYXQtcm93IHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAvKiBSZW1vdmVkIGJvcmRlciAqL1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsLFxyXG4ubWF0LWNlbGwge1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLyogUmVtb3ZlZCBib3JkZXItcmFkaXVzICovXHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLyogUmVtb3ZlZCBib3gtc2hhZG93ICovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvci1yYW5nZS1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yLXByZXZpb3VzLFxyXG4ubWF0LXBhZ2luYXRvci1uZXh0IHtcclxuICAgIGNvbG9yOiAjMWU4OGU1O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvci1wcmV2aW91czpob3ZlcixcclxuLm1hdC1wYWdpbmF0b3ItbmV4dDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzQyYTVmNTtcclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi8qQnV0dG9uIERlc2lnbiovXHJcbi5vdXRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IC8qIEFsaWduIHRoZSBidXR0b24gY29udGFpbmVyIHRvIHRoZSByaWdodCAqL1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEVuc3VyZXMgdGhlIG91dGVyIGNvbnRhaW5lciB0YWtlcyB1cCB0aGUgZnVsbCB3aWR0aCAqL1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvKiBBbGlnbiBidXR0b25zIHRvIHRoZSBsZWZ0IHdpdGhpbiB0aGUgY29udGFpbmVyICovXHJcbiAgICBnYXA6IDEwcHg7IC8qIE9wdGlvbmFsOiBhZGRzIHNwYWNlIGJldHdlZW4gYnV0dG9ucyAqL1xyXG4gIH1cclxuICBcclxuXHJcbiAgXHJcbiAgLyogRnJvbSBVaXZlcnNlLmlvIGJ5IG1yaHlkZGVubiAqLyBcclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHNrZXcoLTIxZGVnKTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRyYW5zZm9ybTogc2tldygyMWRlZyk7XHJcbn1cclxuXHJcbmJ1dHRvbjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYig4MiwgODIsIDgyKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5idXR0b246aG92ZXI6OmJlZm9yZSB7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBvcGFjaXR5OiAxO1xyXG59Il19 */"

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








var DriverDetailsComponent = /** @class */ (function () {
    function DriverDetailsComponent(router, masterService, toastrMsg, formBuilder) {
        this.router = router;
        this.masterService = masterService;
        this.toastrMsg = toastrMsg;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['serialNo', 'name', 'mobileNumber', 'drivingLicenseNumber', 'aadharNumber', 'district', 'status', 'action'];
        this.totelCount = 0;
        this.pageSize = 10;
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
        var driverFormSearchDetails = this.driverFormSearchDetails.value;
        var request = {
            filters: {
                aadharNumber: driverFormSearchDetails.aadharNumber ? driverFormSearchDetails.aadharNumber : '',
                drivingLicenseNumber: driverFormSearchDetails.drivingLicenseNumber ? driverFormSearchDetails.drivingLicenseNumber : '',
                mobileNumber: driverFormSearchDetails.mobileNumber ? driverFormSearchDetails.mobileNumber : '',
                name: driverFormSearchDetails.name ? driverFormSearchDetails.name : '',
            },
            paginationSize: pageSize,
            sortField: "modifiedDate",
            pageNo: pageIndex,
            sortOrder: "DESC"
        };
        this.masterService.driverDetailsSearchList(request).subscribe(function (response) {
            if (response.status == 's' && response.data) {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response.data.contents);
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
    DriverDetailsComponent.prototype.onSelect = function (obj) {
        this.selectObj = obj ? obj : undefined;
        if (obj) {
            this.viewEnable = true;
            this.editEnable = true;
        }
    };
    DriverDetailsComponent.prototype.onEdit = function () {
        if (this.selectObj) {
            this.router.navigate(['/master/driver-detail/modification', this.selectObj.id]);
        }
        else {
            this.toastrMsg.error('View not able');
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
    DriverDetailsComponent.prototype.pageEvent = function (event) {
        var pageIndex = event.pageIndex;
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