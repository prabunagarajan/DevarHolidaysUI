(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-payment-driver-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/container/driver-payment/add-driver-payment/add-driver-payment.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/driver-payment/add-driver-payment/add-driver-payment.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Payment Payment</h3>\n<ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n        <a [routerLink]=\"['/dashboard']\">Home</a>\n    </li>\n    <ng-container>\n        <li class=\"breadcrumb-item\" [routerLink]=\"['/container/driver-payment/list']\"><a href=\"javascript:\"> Payment\n                Payment</a></li>\n        <li class=\"breadcrumb-item\"><a href=\"javascript:\">Add</a></li>\n    </ng-container>\n</ul>\n\n<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <form [formGroup]=\"driverPaymentFormDetails\" autocomplete=\"off\">\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                <h3>Payment Details</h3>\n                <hr>\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Driver Name<span class=\"text-danger\">*</span></label>\n                            <select type=\"text\" class=\"form-select\" formControlName=\"driverName\"\n                                (change)=\"getMobileNumber($event.target.value)\"\n                                [ngClass]=\"{ 'is-invalid': driverPaymentFormErrorFlag && driverPaymentForm.driverName.errors }\">\n                                <option value=\"\" disabled>Select Driver Name</option>\n                                <option *ngFor=\"let driverListElemnt of driverList\" value=\"{{driverListElemnt?.name}}\">\n                                    {{driverListElemnt?.name}}</option>\n                            </select>\n                            <div *ngIf=\"driverPaymentFormErrorFlag && driverPaymentForm.driverName.errors\"\n                                class=\"invalid-feedback\">\n                                <div *ngIf=\"driverPaymentForm.driverName.errors.required\">Customer Driver Name is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>(Wages Or Advance) Amount<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" placeholder=\"Enter (Wages Or Advance) Amount\"\n                                formControlName=\"wagesOrAdvance\" (keydown)=\"numbersOnly($event)\" maxlength=\"6\"\n                                class=\"form-control\"\n                                [ngClass]=\"{ 'is-invalid': driverPaymentFormErrorFlag && driverPaymentForm.wagesOrAdvance.errors }\">\n                            <div *ngIf=\"driverPaymentFormErrorFlag && driverPaymentForm.wagesOrAdvance.errors\"\n                                class=\"invalid-feedback\">\n                                <div *ngIf=\"driverPaymentForm.wagesOrAdvance.errors.required\">Customer (Wages Or\n                                    Advance) Amount is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Mobile Number<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" disabled placeholder=\"Mobile Number\" formControlName=\"mobileNumber\"\n                                class=\"form-control\"\n                                [ngClass]=\"{ 'is-invalid': driverPaymentFormErrorFlag && driverPaymentForm.mobileNumber.errors }\">\n                            <div *ngIf=\"driverPaymentFormErrorFlag && driverPaymentForm.mobileNumber.errors\"\n                                class=\"invalid-feedback\">\n                                <div *ngIf=\"driverPaymentForm.mobileNumber.errors.required\">Mobile Number is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Monthly Salary<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" placeholder=\"Enter Monthly Salary\" (keydown)=\"numbersOnly($event)\"\n                                maxlength=\"6\" formControlName=\"monthlySalary\" class=\"form-control\"\n                                [ngClass]=\"{ 'is-invalid': driverPaymentFormErrorFlag && driverPaymentForm.monthlySalary.errors }\">\n                            <div *ngIf=\"driverPaymentFormErrorFlag && driverPaymentForm.monthlySalary.errors\"\n                                class=\"invalid-feedback\">\n                                <div *ngIf=\"driverPaymentForm.monthlySalary.errors.required\">Monthly Salary is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label> Payment Date<span class=\"text-danger\">*</span></label>\n                            <div class=\"input-group\">\n                                <!-- DateTime Input -->\n                                <input type=\"text\" [owlDateTime]=\"dt1\" class=\"form-control\"\n                                    placeholder=\"Select Payment Date\" formControlName=\"paymentDate\"\n                                    [ngClass]=\"{ 'is-invalid': driverPaymentFormErrorFlag && driverPaymentForm.paymentDate.errors }\"\n                                    readonly [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\n                                    (keydown)=\"$event.preventDefault()\">\n\n                                <!-- Calendar Icon Inside Input -->\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt1\" type=\"button\">\n                                        📅\n                                    </button>\n                                </div>\n\n                                <!-- Owl DateTime Picker -->\n                                <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n                            </div>\n\n                            <!-- Validation Message -->\n                            <div *ngIf=\"driverPaymentFormErrorFlag && driverPaymentForm.paymentDate.errors\"\n                                class=\"invalid-feedback\">\n                                <div *ngIf=\"driverPaymentForm.paymentDate.errors.required\">Customer Name is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Salary Type<span class=\"text-danger\">*</span></label>\n                            <select type=\"text\" formControlName=\"salaryType\" class=\"form-select\"\n                                [ngClass]=\"{ 'is-invalid': driverPaymentFormErrorFlag && driverPaymentForm.salaryType.errors }\">\n                                <option value=\"\" disabled>Select Salary Type</option>\n                                <option value=\"WAGES\">Wages</option>\n                                <option value=\"ADVANCE\">Advance</option>\n                            </select>\n                            <div *ngIf=\"driverPaymentFormErrorFlag && driverPaymentForm.salaryType.errors\"\n                                class=\"invalid-feedback\">\n                                <div *ngIf=\"driverPaymentForm.salaryType.errors.required\">Salary Type is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Remark<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" placeholder=\"Enter Remarks\" formControlName=\"remarks\"\n                                class=\"form-control\"\n                                [ngClass]=\"{ 'is-invalid': driverPaymentFormErrorFlag && driverPaymentForm.remarks.errors }\">\n                            <div *ngIf=\"driverPaymentFormErrorFlag && driverPaymentForm.remarks.errors\"\n                                class=\"invalid-feedback\">\n                                <div *ngIf=\"driverPaymentForm.remarks.errors.required\">Salary Type is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-12 text-end\">\n                        <div class=\"modal-footer\">\n                            <button type=\"submit\" class=\"btn btn-outline-success\"\n                                (click)=\"submit(driverPaymentFormDetails)\">Submit</button>\n\n                            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                                [routerLink]=\"['/container/driver-payment/list']\">Back</button>\n\n                        </div>\n                    </div>\n                </div>\n            </app-card>\n\n        </form>\n    </div>\n</div>\n\n\n\n\n<app-ui-modal #submitPopUp [hideFooter]=\"true\" [dialogClass]=\"'modal-lg'\">\n    <div class=\"app-modal-header\">\n        <h5 class=\"modal-title\">Confirm</h5>\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n            (click)=\"submitPopUp.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n    </div>\n\n    <div class=\"app-modal-body\">\n        <p>Are you sure whant submit?</p>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"btnLoder\" (click)=\"finalSubmit()\">\n                <i class=\"fa\" [ngClass]=\"{'fa-spin fa-asterisk': btnLoder, 'fa-check': !btnLoder}\"></i>Yes\n            </button>\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"submitPopUp.hide()\">\n                <i class=\"feather icon-slash\"></i> No\n            </button>\n        </div>\n    </div>\n</app-ui-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/driver-payment/driver-payment.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/driver-payment/driver-payment.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <form [formGroup]=\"driverPaymentFormSearchDetails\" autocomplete=\"off\">\n            <app-card [hidHeader]=\"true\" class=\"view-panel\">\n                <h4>Search</h4>\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Driver Name<span class=\"text-danger\">*</span></label>\n                            <select type=\"text\" class=\"form-select\" formControlName=\"driverNames\"\n                                placeholder=\"Enter Driver Name\">\n                                <option value=\"\" selected disabled>Select Driver Name</option>\n                                <option *ngFor=\"let driverListElemnt of driverList\" value=\"{{driverListElemnt?.name}}\">\n                                    {{driverListElemnt?.name}}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label for=\"driverNumber\">Driver Number</label>\n                            <select type=\"text\" class=\"form-select\" formControlName=\"driverNumber\"\n                                placeholder=\"Enter Driver Name\">\n                                <option value=\"\" selected disabled>Select Driver Name</option>\n                                <option *ngFor=\"let driverListElemnt of driverList\"\n                                    value=\"{{driverListElemnt?.mobileNumber}}\">\n                                    {{driverListElemnt?.mobileNumber}}</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-12 text-end\">\n                        <div class=\"modal-footer\">\n                            <button type=\"submit\" class=\"btn btn-outline-info list-button-container\"\n                                (click)=\"search()\"><span class=\"list-text-alaign-center\">Submit</span></button>\n                            <button type=\"button\" class=\"btn btn-outline-secondary list-button-container\"\n                                (click)=\"onclear()\"><span class=\"list-text-alaign-center\">Clear</span></button>\n\n                        </div>\n                    </div>\n                </div>\n            </app-card>\n        </form>\n    </div>\n</div>\n\n<div class=\"outer-container\">\n    <div class=\"button-container\">\n        <button class=\"btn btn-outline-success list-button-container\" [routerLink]=\"['/container/driver-payment/add']\">\n            <span class=\"list-text-alaign-center\">Add</span>\n        </button>\n        <!-- <button class=\"btn btn-outline-secondary list-button-container\" (click)=\"onEdit()\" [disabled]=\"!editEnable\">\n            <span class=\"list-text-alaign-center\">Edit</span>\n        </button> -->\n        <button class=\"btn btn-outline-warning list-button-container\" (click)=\"onView()\" [disabled]=\"!viewEnable\">\n            <span class=\"list-text-alaign-center\">View</span>\n        </button>\n    </div>\n</div>\n\n\n<!-- <app-card [hidHeader]=\"true\" blockClass=\"table-border-style\" class=\"list-panel\">\n    <div class=\"table-responsive text-center\">\n        <div class=\"example-table-container\">\n            <table mat-table [dataSource]=\"dataSource\" class=\"table-design\">\n                <ng-container matColumnDef=\"serialNo\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> S.No </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-center\"> {{ i + 1 }} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"paymentDate\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Payment Date </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element?.paymentDate | date:\n                        'dd-MM-yyyy hh-mm'}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"driverName\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Driver Name </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        {{element?.driverName}}\n                    </td>\n                </ng-container>\n                <ng-container matColumnDef=\"paymentNo\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">Payment No </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element?.paymentNo}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"salaryType\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">Salary Type</th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        <span class=\"badge badge-light-danger\"\n                            *ngIf=\"element?.salaryType == 'ADVANCE'\">{{element?.salaryType}}</span>\n                        <span class=\"badge badge-light-primary\"\n                            *ngIf=\"element?.salaryType == 'WAGES'\">{{element?.salaryType}}</span>\n                    </td>\n                </ng-container>\n                <ng-container matColumnDef=\"monthlySalary\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Monthly Salary </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element?.monthlySalary}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"driverNamess\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Driver Name </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element?.driverName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"dailyWagesOrAdvance\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">Wages Or Advance</th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element?.dailyWagesOrAdvance}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"remarks\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Remark </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element?.remarks}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Action </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        <mat-radio-button (click)=\"onSelect(element)\"></mat-radio-button>\n                    </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n            <div *ngIf=\"isLoading\" class=\"table-loader\">\n                <mat-spinner diameter=\"64\"></mat-spinner>\n            </div>\n            <mat-paginator [length]=\"totelCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\"\n                (page)=\"pageEvent($event)\">\n            </mat-paginator>\n        </div>\n    </div>\n</app-card> -->\n\n<app-mat-table-configuration [columns]=\"columns\" [actionKeys]=\"actionKeys\" [dataSource]=\"dataSource\"\n    [totalCount]=\"totelCount\" [pageSize]=\"pageSize\" (paginationEvent)=\"handlePagination($event)\"\n    (checkboxAction)=\"onChecked($event)\">\n</app-mat-table-configuration>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/driver-payment/view-driver-payment/view-driver-payment.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/driver-payment/view-driver-payment/view-driver-payment.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n        <a [routerLink]=\"['/dashboard']\">Home</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n        <a [routerLink]=\"['/container/driver-payment/list']\">Payment Details</a>\n    </li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">View</li>\n</ul>\n<app-card [hidHeader]=\"true\" class=\"view-panel\">\n    <h4>Payment Details</h4>\n    <hr>\n    <div class=\"container\">\n        <div class=\"row mb-3\">\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Payment No</label>\n                <p class=\"view-text\">{{driverPaymentObj?.paymentNo}}</p>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Driver Name</label>\n                <p class=\"view-text\">{{driverPaymentObj?.driverName}}</p>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Mobile Number</label>\n                <p class=\"view-text\">{{driverPaymentObj?.mobileNumber}}</p>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Monthly Salary</label>\n                <p class=\"view-text\">{{driverPaymentObj?.monthlySalary}}</p>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Wages Or Advance</label>\n                <p class=\"view-text\">{{driverPaymentObj?.dailyWagesOrAdvance}}</p>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Salary Type</label>\n                <p class=\"view-text\">{{driverPaymentObj?.salaryType}}</p>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Remark</label>\n                <p class=\"view-text\">{{driverPaymentObj?.remarks}}</p>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Payment Date</label>\n                <p class=\"view-text\">{{driverPaymentObj?.paymentDate | date: 'dd-MM-yy HH:mm:ss' }}</p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row mt-3\">\n        <div class=\"col-lg-12 text-end\">\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-secondary\"\n                    [routerLink]=\"['/container/driver-payment/list']\">Back</button>\n            </div>\n        </div>\n    </div>\n</app-card>"

/***/ }),

/***/ "./src/app/container/driver-payment/add-driver-payment/add-driver-payment.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/container/driver-payment/add-driver-payment/add-driver-payment.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9kcml2ZXItcGF5bWVudC9hZGQtZHJpdmVyLXBheW1lbnQvYWRkLWRyaXZlci1wYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/container/driver-payment/add-driver-payment/add-driver-payment.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/container/driver-payment/add-driver-payment/add-driver-payment.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddDriverPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriverPaymentComponent", function() { return AddDriverPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");







let AddDriverPaymentComponent = class AddDriverPaymentComponent {
    constructor(formBuilder, commonService, toastrMsg, router) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.toastrMsg = toastrMsg;
        this.router = router;
        this.driverList = [];
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_4__();
    }
    ngOnInit() {
        this.commonService.activeDriver().subscribe(driverResponse => {
            if (driverResponse.status == 's') {
                this.driverList = driverResponse.data;
            }
            else {
                this.driverList = [];
            }
        });
        this.driverPaymentFormDetails = this.formBuilder.group({
            wagesOrAdvance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            driverName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobileNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            monthlySalary: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            salaryType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    getMobileNumber(driverName) {
        if (driverName) {
            const driverObj = this.driverList.find(element => element.name == driverName);
            if (driverObj) {
                this.driverPaymentFormDetails.patchValue({
                    mobileNumber: driverObj ? driverObj.mobileNumber : ''
                });
            }
        }
    }
    submit(driverPaymentFormDetails) {
        console.log('driverPaymentFormDetails :', driverPaymentFormDetails.value);
        if (!driverPaymentFormDetails.valid) {
            this.driverPaymentFormErrorFlag = true;
        }
        else {
            this.submitPopUp.show();
        }
    }
    finalSubmit() {
        const driverPaymentFormDetails = this.driverPaymentFormDetails.value;
        const paymentDate = moment__WEBPACK_IMPORTED_MODULE_4__(driverPaymentFormDetails.paymentDate.startDate).format('YYYY-MM-DD');
        const finalSubmitRequest = {
            createdBy: 0,
            dailyWagesOrAdvance: +driverPaymentFormDetails.wagesOrAdvance || '',
            driverName: driverPaymentFormDetails.driverName || '',
            mobileNumber: +driverPaymentFormDetails.mobileNumber || '',
            monthlySalary: +driverPaymentFormDetails.monthlySalary || '',
            paymentDate: paymentDate || '',
            remarks: driverPaymentFormDetails.remarks || '',
            salaryType: driverPaymentFormDetails.salaryType || ''
        };
        this.btnLoder = true;
        this.commonService.driverPaymentSubmit(finalSubmitRequest).subscribe(response => {
            this.btnLoder = false;
            if (response.status == 's') {
                this.toastrMsg.success(response.userDisplayMesg);
                this.submitPopUp.hide();
                this.router.navigate(['/container/driver-payment/list']);
            }
            else {
                this.toastrMsg.error(response.userDisplayMesg);
            }
        });
    }
    numbersOnly(event) {
        const charCode = event.which ? event.which : event.keyCode;
        // Allow: Backspace (8), Delete (46), Arrow keys (37, 39), Tab (9), Enter (13)
        if (charCode === 8 || // Backspace
            charCode === 46 || // Delete
            charCode === 37 || // Left Arrow
            charCode === 39 || // Right Arrow
            charCode === 9 || // Tab
            charCode === 13 // Enter
        ) {
            return; // Allow these keys
        }
        // Allow only numeric keys (0-9 from both top row and numpad)
        if ((charCode < 48 || charCode > 57) && // Top row numbers (0-9)
            (charCode < 96 || charCode > 105) // Numpad numbers (0-9)
        ) {
            event.preventDefault(); // Restrict other keys
        }
    }
    get driverPaymentForm() {
        return this.driverPaymentFormDetails.controls;
    }
};
AddDriverPaymentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('submitPopUp', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddDriverPaymentComponent.prototype, "submitPopUp", void 0);
AddDriverPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-driver-payment',
        template: __webpack_require__(/*! raw-loader!./add-driver-payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/container/driver-payment/add-driver-payment/add-driver-payment.component.html"),
        styles: [__webpack_require__(/*! ./add-driver-payment.component.scss */ "./src/app/container/driver-payment/add-driver-payment/add-driver-payment.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AddDriverPaymentComponent);



/***/ }),

/***/ "./src/app/container/driver-payment/driver-payment-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/container/driver-payment/driver-payment-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DriverPaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPaymentRoutingModule", function() { return DriverPaymentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_driver_payment_add_driver_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-driver-payment/add-driver-payment.component */ "./src/app/container/driver-payment/add-driver-payment/add-driver-payment.component.ts");
/* harmony import */ var _driver_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driver-payment.component */ "./src/app/container/driver-payment/driver-payment.component.ts");
/* harmony import */ var _view_driver_payment_view_driver_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-driver-payment/view-driver-payment.component */ "./src/app/container/driver-payment/view-driver-payment/view-driver-payment.component.ts");






const routes = [
    {
        path: 'list',
        component: _driver_payment_component__WEBPACK_IMPORTED_MODULE_4__["DriverPaymentComponent"]
    },
    {
        path: 'add',
        component: _add_driver_payment_add_driver_payment_component__WEBPACK_IMPORTED_MODULE_3__["AddDriverPaymentComponent"]
    },
    {
        path: 'view/:id',
        component: _view_driver_payment_view_driver_payment_component__WEBPACK_IMPORTED_MODULE_5__["ViewDriverPaymentComponent"]
    },
];
let DriverPaymentRoutingModule = class DriverPaymentRoutingModule {
};
DriverPaymentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DriverPaymentRoutingModule);



/***/ }),

/***/ "./src/app/container/driver-payment/driver-payment.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/container/driver-payment/driver-payment.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9kcml2ZXItcGF5bWVudC9kcml2ZXItcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/container/driver-payment/driver-payment.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/container/driver-payment/driver-payment.component.ts ***!
  \**********************************************************************/
/*! exports provided: DriverPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPaymentComponent", function() { return DriverPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/config/master-list-columns */ "./src/app/config/master-list-columns.ts");








let DriverPaymentComponent = class DriverPaymentComponent {
    constructor(formBuilder, commonService, router, toastrMsg) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.router = router;
        this.toastrMsg = toastrMsg;
        this.columns = src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_7__["MasterListColumns"].driverPaymentColumns;
        this.actionKeys = ['checkbox']; // ['edit', 'delete'] for buttons
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](); // Example data source
        this.totalCount = 10;
        this.pageSize = 10;
        this.driverList = [];
        this.totelCount = 0;
        this.displayedColumns = ['serialNo', 'paymentDate', 'driverNamess', 'paymentNo', 'salaryType', 'monthlySalary', 'dailyWagesOrAdvance', 'remarks', 'action'];
    }
    ngOnInit() {
        this.driverPaymentFormSearchDetails = this.formBuilder.group({
            driverNames: [''],
            driverNumber: ['']
        });
        this.commonService.activeDriver().subscribe(driverResponse => {
            if (driverResponse.status == 's') {
                this.driverList = driverResponse.data;
            }
            else {
                this.driverList = [];
            }
        });
        this.getSaleryDetails();
    }
    getSaleryDetails(pageIndex = 0, pageSize = this.pageSize) {
        this.isLoading = true;
        const tripFormSearchDetails = this.driverPaymentFormSearchDetails.value;
        const request = {
            "filters": {
                "MobileNumber": tripFormSearchDetails.driverNumber ? tripFormSearchDetails.driverNumber : '',
                "driverName": tripFormSearchDetails.driverNames ? tripFormSearchDetails.driverNames : ''
            },
            "pageNo": pageIndex,
            "paginationSize": pageSize,
            "sortField": "modifiedDate",
            "sortOrder": "DESC"
        };
        this.commonService.driverPaymentList(request).subscribe(response => {
            this.isLoading = false;
            if (response.status == 's' && response.data) {
                const serialNumber = pageIndex * pageSize; // Calculate start index dynamically
                const dataSource = response.data.contents.map((v, i) => (Object.assign({}, v, { sNo: serialNumber + i + 1 // Adjust serial number
                 })));
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](dataSource);
                this.totelCount = response.data.totalElements;
            }
            else {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]();
            }
        });
    }
    search() {
        this.viewEnable = false;
        this.getSaleryDetails();
    }
    onclear() {
        this.viewEnable = false;
        this.driverPaymentFormSearchDetails.patchValue({
            driverNumber: '',
            driverNames: ''
        });
        this.getSaleryDetails();
    }
    onView() {
        if (this.selectObj) {
            this.router.navigate(['/container/driver-payment/view', this.selectObj.id]);
        }
    }
    onChecked(viewObj) {
        const selectObj = this.dataSource.data.find((findElement) => findElement.id == viewObj.id);
        if (selectObj) {
            this.selectObj = viewObj;
            this.viewEnable = true;
        }
    }
    handlePagination(event) {
        const pageIndex = event.currentPage;
        const pageSize = event.pageSize;
        this.getSaleryDetails(pageIndex, pageSize);
    }
};
DriverPaymentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
DriverPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-driver-payment',
        template: __webpack_require__(/*! raw-loader!./driver-payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/container/driver-payment/driver-payment.component.html"),
        styles: [__webpack_require__(/*! ./driver-payment.component.scss */ "./src/app/container/driver-payment/driver-payment.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], DriverPaymentComponent);



/***/ }),

/***/ "./src/app/container/driver-payment/driver-payment.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/container/driver-payment/driver-payment.module.ts ***!
  \*******************************************************************/
/*! exports provided: MY_CUSTOM_FORMATS, DriverPaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_CUSTOM_FORMATS", function() { return MY_CUSTOM_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPaymentModule", function() { return DriverPaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _driver_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-payment-routing.module */ "./src/app/container/driver-payment/driver-payment-routing.module.ts");
/* harmony import */ var _driver_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driver-payment.component */ "./src/app/container/driver-payment/driver-payment.component.ts");
/* harmony import */ var _add_driver_payment_add_driver_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-driver-payment/add-driver-payment.component */ "./src/app/container/driver-payment/add-driver-payment/add-driver-payment.component.ts");
/* harmony import */ var _view_driver_payment_view_driver_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-driver-payment/view-driver-payment.component */ "./src/app/container/driver-payment/view-driver-payment/view-driver-payment.component.ts");
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
let DriverPaymentModule = class DriverPaymentModule {
};
DriverPaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_driver_payment_component__WEBPACK_IMPORTED_MODULE_4__["DriverPaymentComponent"], _add_driver_payment_add_driver_payment_component__WEBPACK_IMPORTED_MODULE_5__["AddDriverPaymentComponent"], _view_driver_payment_view_driver_payment_component__WEBPACK_IMPORTED_MODULE_6__["ViewDriverPaymentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _driver_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["DriverPaymentRoutingModule"],
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
], DriverPaymentModule);



/***/ }),

/***/ "./src/app/container/driver-payment/view-driver-payment/view-driver-payment.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/container/driver-payment/view-driver-payment/view-driver-payment.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9kcml2ZXItcGF5bWVudC92aWV3LWRyaXZlci1wYXltZW50L3ZpZXctZHJpdmVyLXBheW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/container/driver-payment/view-driver-payment/view-driver-payment.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/container/driver-payment/view-driver-payment/view-driver-payment.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ViewDriverPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDriverPaymentComponent", function() { return ViewDriverPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");




let ViewDriverPaymentComponent = class ViewDriverPaymentComponent {
    constructor(commonService, router, activatedRoute) {
        this.commonService = commonService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(tripIdResponse => {
            if (tripIdResponse.id) {
                this.commonService.driverPaymentview(tripIdResponse.id).subscribe(driverResponse => {
                    if (driverResponse.status == 's') {
                        this.driverPaymentObj = driverResponse.data;
                    }
                });
            }
        });
    }
};
ViewDriverPaymentComponent.ctorParameters = () => [
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ViewDriverPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-driver-payment',
        template: __webpack_require__(/*! raw-loader!./view-driver-payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/container/driver-payment/view-driver-payment/view-driver-payment.component.html"),
        styles: [__webpack_require__(/*! ./view-driver-payment.component.scss */ "./src/app/container/driver-payment/view-driver-payment/view-driver-payment.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ViewDriverPaymentComponent);



/***/ })

}]);
//# sourceMappingURL=driver-payment-driver-payment-module-es2015.js.map