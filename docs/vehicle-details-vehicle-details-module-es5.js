(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-details-vehicle-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Add Vehicle Details</p>\n<ul class=\"breadcrumb\">\n  <li class=\"breadcrumb-item\">\n    <a [routerLink]=\"['/dashboard']\">Home</a>\n  </li>\n  <ng-container>\n    <li class=\"breadcrumb-item\" [routerLink]=\"['/master/vehicle-detail/list']\"><a href=\"javascript:\"> Vehicle\n        Details</a>\n    </li>\n    <li class=\"breadcrumb-item\"><a href=\"javascript:\">{{screenName}}</a></li>\n  </ng-container>\n</ul>\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <form [formGroup]=\"vehicleFormDetails\" autocomplete=\"off\">\n      <h5>Image Caps</h5>\n      <hr>\n      <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>FC Date <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" [owlDateTime]=\"dt1\" class=\"form-control\" [owlDateTimeTrigger]=\"dt1\"\n                placeholder=\"Select Fc Date\" formControlName=\"fcDate\">\n              <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n              <div *ngIf=\"formSubmitted && f.fcDate.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.fcDate.errors.required\">FC Date is required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Insurance Date<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" [owlDateTime]=\"dt2\" class=\"form-control\" [owlDateTimeTrigger]=\"dt2\"\n                placeholder=\"Select Insurance Date\" formControlName=\"insuranceDate\">\n              <owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\n              <div *ngIf=\"formSubmitted && f.insuranceDate.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.insuranceDate.errors.required\">Insurance Date is required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Pollution Date<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" [owlDateTime]=\"dt3\" class=\"form-control\" [owlDateTimeTrigger]=\"dt3\"\n                placeholder=\"Select Pollution Date\" formControlName=\"polutionDate\">\n              <owl-date-time [pickerType]=\"'calendar'\" #dt3></owl-date-time>\n              <div *ngIf=\"formSubmitted && f.polutionDate.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.polutionDate.errors.required\">Pollution Date is required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Remarks<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" formControlName=\"remarks\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.remarks.errors }\" placeholder=\"Enter Remarks\" />\n              <div *ngIf=\"formSubmitted && f.remarks.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.remarks.errors.required\">Remarks are required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Status<span class=\"text-danger\">*</span></label>\n              <select formControlName=\"status\" class=\"form-select\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.status.errors }\">\n                <option value=\"\" disabled>Select Status</option>\n                <option value=\"Active\">Active</option>\n                <option value=\"InActive\">InActive</option>\n              </select>\n              <div *ngIf=\"formSubmitted && f.status.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.status.errors.required\">Status is required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Tax Date<span class=\"text-danger\">*</span></label>\n              <!-- <input type=\"text\" formControlName=\"taxDate\" class=\"form-control\" bsDatepicker\n                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-blue' }\"\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.taxDate.errors }\" /> -->\n              <input type=\"text\" [owlDateTime]=\"dt4\" class=\"form-control\" [owlDateTimeTrigger]=\"dt4\"\n                placeholder=\"Select Tax Date\" formControlName=\"taxDate\">\n              <owl-date-time [pickerType]=\"'calendar'\" #dt4></owl-date-time>\n              <div *ngIf=\"formSubmitted && f.taxDate.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.taxDate.errors.required\">Tax Date is required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Vehicle Color<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" formControlName=\"vehicleColor\" class=\"form-control\"\n              placeholder=\"Enter Vehicle color\"  [ngClass]=\"{ 'is-invalid': formSubmitted && f.vehicleColor.errors }\" />\n              <div *ngIf=\"formSubmitted && f.vehicleColor.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.vehicleColor.errors.required\">Vehicle Color is required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Vehicle Name<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" formControlName=\"vehicleName\" class=\"form-control\"\n             placeholder=\"Enter Vehicle name\"   [ngClass]=\"{ 'is-invalid': formSubmitted && f.vehicleName.errors }\" />\n              <div *ngIf=\"formSubmitted && f.vehicleName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.vehicleName.errors.required\">Vehicle Name is required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Vehicle Number<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" formControlName=\"vehicleNumber\" class=\"form-control\"\n               placeholder=\"Enter Vehicle number\" [ngClass]=\"{ 'is-invalid': formSubmitted && f.vehicleNumber.errors }\"\n                (keydown)=\"spaceNotAllowd($event)\" />\n              <div *ngIf=\"formSubmitted && f.vehicleNumber.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.vehicleNumber.errors.required\">Vehicle Number is required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-lg-12 text-end\">\n            <div class=\"modal-footer\">\n              <button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"submit()\">Submit</button>\n              <button type=\"button\" class=\"btn btn-outline-secondary\" [routerLink]=\"['/master/vehicle-detail/list']\"\n                (click)=\"back()\">Back</button>\n\n            </div>\n          </div>\n        </div>\n      </app-card>\n    </form>\n  </div>\n</div>\n\n\n<app-ui-modal #submitPopUp [hideFooter]=\"true\" [dialogClass]=\"'modal-lg'\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">Confirm</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"submitPopUp.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n\n  <div class=\"app-modal-body\">\n    <p>Are you sure whant submit?</p>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"btnLoder\" (click)=\"finalSubmit()\">\n        <i class=\"fa\" [ngClass]=\"{'fa-spin fa-asterisk': btnLoder, 'fa-check': !btnLoder}\"></i>Yes\n      </button>\n      <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"onCancel()\">\n        <i class=\"feather icon-slash\"></i> No\n      </button>\n    </div>\n  </div>\n</app-ui-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/vehicle-details/vehicle-details.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/vehicle-details/vehicle-details.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <form [formGroup]=\"vehicleFormSearchDetails\" autocomplete=\"off\">\n      <!-- <h5>Driver Details</h5> -->\n      <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n        <h4>Search</h4>\n        <div class=\"row\">\n          <!-- Aadhar Number -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Vehicle Number </label>\n              <input type=\"text\" formControlName=\"vehicleNumber\" class=\"form-control\"\n                placeholder=\"Enter Vehicle Number\" />\n            </div>\n          </div>\n\n          <!-- Aadhar Number -->\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n            <div class=\"form-group\">\n              <label>Vehicle Name</label>\n              <input type=\"text\" formControlName=\"vehicleName\" class=\"form-control\" placeholder=\"Enter Vehicle Name\" />\n            </div>\n          </div>\n        </div>\n\n        <!-- Submit and Cancel buttons -->\n        <div class=\"row mt-3\">\n          <div class=\"col-lg-12 text-end\">\n            <div class=\"modal-footer\">\n              <button type=\"submit\" class=\"btn btn-outline-info list-button-container\" (click)=\"search()\"><span\n                  class=\"list-text-alaign-center\">Submit</span></button>\n              <button type=\"button\" class=\"btn btn-outline-secondary list-button-container\" (click)=\"onclear()\"><span\n                  class=\"list-text-alaign-center\">Clear</span></button>\n\n            </div>\n          </div>\n        </div>\n\n      </app-card>\n    </form>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"outer-container\">\n    <div class=\"button-container\">\n      <button class=\"btn btn-outline-success list-button-container\" [routerLink]=\"'/master/vehicle-detail/add'\">\n        <span class=\"list-text-alaign-center\">Add</span>\n      </button>\n      <button class=\"btn btn-outline-secondary list-button-container\" [disabled]=\"!editDisabled\" (click)=\"edit()\">\n        <span class=\"list-text-alaign-center\">Edit</span>\n      </button>\n      <button class=\"btn btn-outline-warning list-button-container\" [disabled]=\"!viewDisabled\" (click)=\"view()\">\n        <span class=\"list-text-alaign-center\">View</span>\n      </button>\n    </div>\n  </div>\n  <!--   <app-card [hidHeader]=\"true\" blockClass=\"table-border-style\" class=\"list-panel\">\n    <div class=\"table-responsive text-center list-panel\">\n      <div class=\"example-table-container\">\n        <table mat-table [dataSource]=\"dataSource\" class=\"table-design\">\n          <ng-container matColumnDef=\"serialNo\">\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> S.No </th>\n            <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-center\"> {{ i + 1 }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"vehicleNo\">\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Vehicle No </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.vehicleNumber}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"vehicleName\">\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Vehicle Name </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.vehicleName}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"insuranceDate\">\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\">InsuranceDate </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.insuranceDate | date: 'dd-MM-yyyy'}}\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"taxDate\">\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Tax Date </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.taxDate | date: 'dd-MM-yyyy'}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"fcDate\">\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> FC Date </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.fcDate | date: 'dd-MM-yyyy'}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"polutionDate\">\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Polution Date </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.polutionDate | date: 'dd-MM-yyyy'}}\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Action </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n              <mat-radio-button (change)=\"selectRecord(element)\"></mat-radio-button>\n            </td>\n          </ng-container>\n\n\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <div *ngIf=\"isLoading\" class=\"table-loader\">\n          <mat-spinner diameter=\"64\"></mat-spinner>\n        </div>\n        <mat-paginator [length]=\"totalCounts\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\"\n          (page)=\"pageEvent($event)\">\n        </mat-paginator>\n\n      </div>\n    </div>\n  </app-card> -->\n  <app-mat-table-configuration [columns]=\"columns\" [actionKeys]=\"actionKeys\" [dataSource]=\"dataSource\"\n    [totalCount]=\"totelCount\" [pageSize]=\"pageSize\" (paginationEvent)=\"handlePagination($event)\"\n    (checkboxAction)=\"onChecked($event)\">\n  </app-mat-table-configuration>\n\n  <div class=\"row\">\n    <div class=\"col-xl-4 mt-2\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-outline-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\"\n          aria-expanded=\"false\">\n          Download\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"exportToExcel()\">Excel</a></li>\n          <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"generatePDF()\">PDF</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n        <a [routerLink]=\"['/dashboard']\">Home</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n        <a [routerLink]=\"['/master/vehicle-detail/list']\">Vehicle Details</a>\n    </li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">View</li>\n</ul>\n\n<app-card [hidHeader]=\"true\" class=\"view-panel\">\n    <h4>Vehicle Details</h4> <hr>\n    <div class=\"container\">\n        <div class=\"row mb-3\">\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Vehicle Number</label>\n                <p class=\"view-text\">{{ vehicleDetails?.vehicleNumber }}</p>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Vehicle Name</label>\n                <p class=\"view-text\">{{ vehicleDetails?.vehicleName }}</p>\n            </div>\n        </div>\n\n        <div class=\"row mb-3\">\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Vehicle Color</label>\n                <p class=\"view-text\">{{ vehicleDetails?.vehicleColor }}</p>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Remarks</label>\n                <p class=\"view-text\">{{ vehicleDetails?.remarks }}</p>\n            </div>\n        </div>\n\n        <div class=\"row mb-3\">\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Insurance Date</label>\n                <p class=\"view-text\">{{ vehicleDetails?.insuranceDate | date:'medium' }}</p>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Tax Date</label>\n                <p class=\"view-text\">{{ vehicleDetails?.taxDate | date:'medium' }}</p>\n            </div>\n        </div>\n\n        <div class=\"row mb-3\">\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Fitness Certificate Date</label>\n                <p class=\"view-text\">{{ vehicleDetails?.fcDate | date:'medium' }}</p>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"view-label\">Pollution Date</label>\n                <p class=\"view-text\">{{ vehicleDetails?.polutionDate | date:'medium' }}</p>\n            </div>\n        </div>\n        <div class=\"row mt-3\">\n            <div class=\"col-lg-12 text-end\">\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-outline-secondary\"\n                        [routerLink]=\"['/master/vehicle-detail/list']\">Back</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</app-card>"

/***/ }),

/***/ "./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bs-datepicker {\n  background-color: #f8f9fa;\n  border-radius: 5px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }\n\n.bs-datepicker .day {\n  border-radius: 50%; }\n\n.bs-datepicker .day.selected {\n  background-color: #007bff;\n  color: white; }\n\n.bs-datepicker .day:hover {\n  background-color: #007bff33; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rldi02OS9EZXZhckhvbGlkYXlzVUkvc3JjL2FwcC9tYXN0ZXIvdmVoaWNsZS1kZXRhaWxzL2FkZC1lZGl0LXZlaGljbGUtZGV0YWlscy9hZGQtZWRpdC12ZWhpY2xlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlDQUF5QyxFQUFBOztBQUc3QztFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXN0ZXIvdmVoaWNsZS1kZXRhaWxzL2FkZC1lZGl0LXZlaGljbGUtZGV0YWlscy9hZGQtZWRpdC12ZWhpY2xlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnMtZGF0ZXBpY2tlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5icy1kYXRlcGlja2VyIC5kYXkge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJzLWRhdGVwaWNrZXIgLmRheS5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5icy1kYXRlcGlja2VyIC5kYXk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYzMztcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_service_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/master.service */ "./src/app/service/master.service.ts");







var AddEditVehicleDetailsComponent = /** @class */ (function () {
    function AddEditVehicleDetailsComponent(formBuilder, masterService, toasterMsg, router, route) {
        this.formBuilder = formBuilder;
        this.masterService = masterService;
        this.toasterMsg = toasterMsg;
        this.router = router;
        this.route = route;
        this.startDate = new Date(1990, 0, 1);
        this.formSubmitted = false;
        this.screenName = 'Add';
    }
    AddEditVehicleDetailsComponent.prototype.ngOnInit = function () {
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
    };
    AddEditVehicleDetailsComponent.prototype.loadVehicleDetails = function () {
        var _this = this;
        this.masterService.getVehicleById(this.vehicleId).subscribe(function (res) {
            if (res.status === 's') {
                var taxDate = _this.formatDate(res.data.taxDate);
                var fcDate = _this.formatDate(res.data.fcDate);
                var insuranceDate = _this.formatDate(res.data.insuranceDate);
                var polutionDate = _this.formatDate(res.data.polutionDate);
                var status_1 = res.data.status ? 'Active' : 'Inactive';
                _this.vehicleFormDetails.patchValue({
                    fcDate: res.data.fcDate,
                    insuranceDate: res.data.insuranceDate,
                    polutionDate: res.data.polutionDate,
                    remarks: res.data.remarks,
                    status: status_1,
                    taxDate: res.data.taxDate,
                    vehicleColor: res.data.vehicleColor,
                    vehicleName: res.data.vehicleName,
                    vehicleNumber: res.data.vehicleNumber
                });
                _this.flagSubmitButton = true;
            }
            else {
                _this.toasterMsg.error('Failed to load vehicle details');
            }
        });
    };
    AddEditVehicleDetailsComponent.prototype.formatDate = function (date) {
        var parsedDate = new Date(date);
        var day = ('0' + parsedDate.getDate()).slice(-2);
        var month = ('0' + (parsedDate.getMonth() + 1)).slice(-2);
        var year = parsedDate.getFullYear();
        return day + "/" + month + "/" + year;
    };
    Object.defineProperty(AddEditVehicleDetailsComponent.prototype, "f", {
        get: function () {
            return this.vehicleFormDetails.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddEditVehicleDetailsComponent.prototype.submit = function () {
        if (this.vehicleFormDetails.valid) {
            this.submitPopUp.show();
        }
        else {
            this.formSubmitted = true;
        }
    };
    AddEditVehicleDetailsComponent.prototype.finalSubmit = function () {
        if (this.vehicleId) {
            this.vechileUpdate();
        }
        else {
            this.vehicleAdd();
        }
    };
    AddEditVehicleDetailsComponent.prototype.vehicleAdd = function () {
        var _this = this;
        var vehicleFormDetails = this.vehicleFormDetails.value;
        var vehicleAddRequest = {
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
        this.masterService.vehicleDetailsAdd(vehicleAddRequest).subscribe(function (vehicleAddResponse) {
            _this.btnLoder = false;
            if (vehicleAddResponse.status = 's') {
                _this.submitPopUp.hide();
                _this.toasterMsg.success("Vehicle details submitted successfully");
                _this.router.navigate(['/master/vehicle-detail/list']);
            }
            else {
                _this.toasterMsg.error(vehicleAddResponse.userDisplayMesg);
            }
        });
    };
    AddEditVehicleDetailsComponent.prototype.vechileUpdate = function () {
        var _this = this;
        var vehicleFormDetails = this.vehicleFormDetails.value;
        var vechileUpdateRequest = {
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
        this.masterService.updateVehicle(vechileUpdateRequest).subscribe(function (vechileUpdateResponse) {
            _this.btnLoder = false;
            if (vechileUpdateResponse.status = 's') {
                _this.submitPopUp.hide();
                _this.toasterMsg.success("Vehicele details updated successfully");
                _this.router.navigate(['/master/vehicle-detail/list']);
            }
            else {
                _this.toasterMsg.error(vechileUpdateResponse.userDisplayMesg);
            }
        });
    };
    AddEditVehicleDetailsComponent.prototype.onCancel = function () {
        this.submitPopUp.hide();
    };
    AddEditVehicleDetailsComponent.prototype.spaceNotAllowd = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode === 32) {
            event.preventDefault();
            return;
        }
    };
    AddEditVehicleDetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_service_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
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
    return AddEditVehicleDetailsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_edit_vehicle_details_add_edit_vehicle_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-vehicle-details/add-edit-vehicle-details.component */ "./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.ts");
/* harmony import */ var _vehicle_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-details.component */ "./src/app/master/vehicle-details/vehicle-details.component.ts");
/* harmony import */ var _view_vehicle_details_view_vehicle_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-vehicle-details/view-vehicle-details.component */ "./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.ts");






var routes = [
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
var VehicleDetailsRoutingModule = /** @class */ (function () {
    function VehicleDetailsRoutingModule() {
    }
    VehicleDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VehicleDetailsRoutingModule);
    return VehicleDetailsRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_service_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/master.service */ "./src/app/service/master.service.ts");
/* harmony import */ var src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/config/master-list-columns */ "./src/app/config/master-list-columns.ts");









var VehicleDetailsComponent = /** @class */ (function () {
    function VehicleDetailsComponent(masterService, toaster, router, formBuilder) {
        this.masterService = masterService;
        this.toaster = toaster;
        this.router = router;
        this.formBuilder = formBuilder;
        this.columns = src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_8__["MasterListColumns"].vehicleDetailListColumns;
        this.actionKeys = ['checkbox']; // ['edit', 'delete'] for buttons
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](); // Example data source
        this.totalCount = 10;
        this.pageSize = 10;
        this.displayedColumns = ['serialNo', 'vehicleNo', 'vehicleName', 'insuranceDate', 'taxDate', 'fcDate', 'polutionDate', 'action'];
    }
    VehicleDetailsComponent.prototype.ngOnInit = function () {
        this.vehicleFormSearchDetails = this.formBuilder.group({
            vehicleNumber: [''],
            vehicleName: ['']
        });
        this.loadDriverDetails();
    };
    VehicleDetailsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    VehicleDetailsComponent.prototype.loadDriverDetails = function (pageIndex, pageSize) {
        var _this = this;
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var request = {
            filters: {},
            pageNo: pageIndex,
            paginationSize: pageSize,
            sortField: 'modifiedDate',
            sortOrder: 'DESC',
        };
        this.isLoading = true;
        this.masterService.vehicleDetailsGetAllList(request).subscribe(function (res) {
            _this.isLoading = false;
            if (res.status === 's') {
                var serialNumber_1 = pageIndex * pageSize; // Calculate start index dynamically
                var dataSource = res.data.contents.map(function (v, i) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, v, { sNo: serialNumber_1 + i + 1 // Adjust serial number
                 })); });
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](dataSource);
                _this.totalCounts = res.data.totalElements;
            }
            else {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
            }
        });
    };
    VehicleDetailsComponent.prototype.onChecked = function (viewObj) {
        var selectObj = this.dataSource.data.find(function (findElement) { return findElement.id == viewObj.id; });
        if (selectObj) {
            this.selectedRecord = selectObj;
            this.editDisabled = true;
            this.viewDisabled = true;
        }
    };
    VehicleDetailsComponent.prototype.edit = function () {
        if (this.selectedRecord) {
            this.router.navigate(['/master/vehicle-detail/modification', this.selectedRecord.id]);
        }
    };
    VehicleDetailsComponent.prototype.view = function () {
        if (this.selectedRecord) {
            this.router.navigate(['/master/vehicle-detail/view', this.selectedRecord.id]);
        }
    };
    VehicleDetailsComponent.prototype.handlePagination = function (event) {
        var pageIndex = event.currentPage;
        var pageSize = event.pageSize;
        this.loadDriverDetails(pageIndex, pageSize);
    };
    VehicleDetailsComponent.prototype.search = function () {
        this.loadDriverDetails();
    };
    VehicleDetailsComponent.prototype.onclear = function () {
        this.vehicleFormSearchDetails.patchValue({
            vehicleNumber: '',
            vehicleName: ''
        });
        this.loadDriverDetails();
    };
    VehicleDetailsComponent.ctorParameters = function () { return [
        { type: src_app_service_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
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
    return VehicleDetailsComponent;
}());



/***/ }),

/***/ "./src/app/master/vehicle-details/vehicle-details.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/master/vehicle-details/vehicle-details.module.ts ***!
  \******************************************************************/
/*! exports provided: MY_CUSTOM_FORMATS, VehicleDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_CUSTOM_FORMATS", function() { return MY_CUSTOM_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailsModule", function() { return VehicleDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _vehicle_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle-details-routing.module */ "./src/app/master/vehicle-details/vehicle-details-routing.module.ts");
/* harmony import */ var _vehicle_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-details.component */ "./src/app/master/vehicle-details/vehicle-details.component.ts");
/* harmony import */ var _add_edit_vehicle_details_add_edit_vehicle_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit-vehicle-details/add-edit-vehicle-details.component */ "./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.ts");
/* harmony import */ var _view_vehicle_details_view_vehicle_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-vehicle-details/view-vehicle-details.component */ "./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ng_pick_datetime_date_time_adapter_moment_adapter_moment_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class.js");

















var MY_CUSTOM_FORMATS = {
    fullPickerInput: 'DD-MM-YYYY HH:mm',
    parseInput: 'DD-MM-YYYY HH:mm',
    datePickerInput: 'DD-MM-YYYY',
    timePickerInput: 'HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};
var VehicleDetailsModule = /** @class */ (function () {
    function VehicleDetailsModule() {
    }
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
            ],
            providers: [
                {
                    provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_15__["DateTimeAdapter"],
                    useClass: ng_pick_datetime_date_time_adapter_moment_adapter_moment_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_16__["MomentDateTimeAdapter"],
                    deps: [ng_pick_datetime__WEBPACK_IMPORTED_MODULE_15__["OWL_DATE_TIME_LOCALE"]],
                },
                { provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_15__["OWL_DATE_TIME_FORMATS"], useValue: MY_CUSTOM_FORMATS },
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], VehicleDetailsModule);
    return VehicleDetailsModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/master.service */ "./src/app/service/master.service.ts");




var ViewVehicleDetailsComponent = /** @class */ (function () {
    function ViewVehicleDetailsComponent(masterService, activatedRoute) {
        this.masterService = masterService;
        this.activatedRoute = activatedRoute;
    }
    ViewVehicleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (vehicleByIdResponse) {
            if (vehicleByIdResponse.id) {
                _this.getVehicleById(vehicleByIdResponse.id);
            }
        });
    };
    ViewVehicleDetailsComponent.prototype.getVehicleById = function (viewId) {
        var _this = this;
        this.masterService.getVehicleById(viewId).subscribe(function (getVehicleByIdResponse) {
            if (getVehicleByIdResponse.status == 's') {
                _this.vehicleDetails = getVehicleByIdResponse.data;
            }
        });
    };
    ViewVehicleDetailsComponent.ctorParameters = function () { return [
        { type: src_app_service_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ViewVehicleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-vehicle-details',
            template: __webpack_require__(/*! raw-loader!./view-vehicle-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.html"),
            styles: [__webpack_require__(/*! ./view-vehicle-details.component.scss */ "./src/app/master/vehicle-details/view-vehicle-details/view-vehicle-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewVehicleDetailsComponent);
    return ViewVehicleDetailsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=vehicle-details-vehicle-details-module-es5.js.map