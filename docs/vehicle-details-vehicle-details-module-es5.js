(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-details-vehicle-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/vehicle-details/add-edit-vehicle-details/add-edit-vehicle-details.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Add Vehicle Details</p>\r\n<ul class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/dashboard']\">Home</a>\r\n  </li>\r\n  <ng-container>\r\n    <li class=\"breadcrumb-item\" [routerLink]=\"['/master/vehicle-detail/list']\"><a href=\"javascript:\"> Vehicle\r\n        Details</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item\"><a href=\"javascript:\">{{screenName}}</a></li>\r\n  </ng-container>\r\n</ul>\r\n<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <form [formGroup]=\"vehicleFormDetails\" autocomplete=\"off\">\r\n      <h5>Image Caps</h5>\r\n      <hr>\r\n      <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>FC Date <span class=\"text-danger\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" readonly [owlDateTime]=\"dt1\" class=\"form-control\"\r\n                  [ngClass]=\"{ 'is-invalid': formSubmitted && f.fcDate.errors }\" placeholder=\"Select FC Date\"\r\n                  formControlName=\"fcDate\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt1\">\r\n                    <i class=\"fa fa-calendar\"></i> <!-- Calendar icon -->\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\r\n              <div *ngIf=\"formSubmitted && f.fcDate.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.fcDate.errors.required\">FC Date is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Insurance Date<span class=\"text-danger\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" readonly [owlDateTime]=\"dt2\"\r\n                  [ngClass]=\"{ 'is-invalid': formSubmitted && f.insuranceDate.errors }\" class=\"form-control\"\r\n                  placeholder=\"Select Insurance Date\" formControlName=\"insuranceDate\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt2\">\r\n                    <i class=\"fa fa-calendar\"></i> <!-- Calendar icon -->\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\r\n              <div *ngIf=\"formSubmitted && f.insuranceDate.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.insuranceDate.errors.required\">Insurance Date is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Pollution Date<span class=\"text-danger\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" readonly [owlDateTime]=\"dt3\"\r\n                  [ngClass]=\"{ 'is-invalid': formSubmitted && f.polutionDate.errors }\" class=\"form-control\"\r\n                  placeholder=\"Select Pollution Date\" formControlName=\"polutionDate\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt3\">\r\n                    <i class=\"fa fa-calendar\"></i> <!-- Calendar icon -->\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <owl-date-time [pickerType]=\"'calendar'\" #dt3></owl-date-time>\r\n              <div *ngIf=\"formSubmitted && f.polutionDate.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.polutionDate.errors.required\">Pollution Date is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Remarks<span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"remarks\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.remarks.errors }\" placeholder=\"Enter Remarks\" />\r\n              <div *ngIf=\"formSubmitted && f.remarks.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.remarks.errors.required\">Remarks are required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Status<span class=\"text-danger\">*</span></label>\r\n              <select formControlName=\"status\" class=\"form-select\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.status.errors }\">\r\n                <option value=\"\" disabled>Select Status</option>\r\n                <option value=\"Active\">Active</option>\r\n                <option value=\"InActive\">InActive</option>\r\n              </select>\r\n              <div *ngIf=\"formSubmitted && f.status.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.status.errors.required\">Status is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Tax Date<span class=\"text-danger\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" [owlDateTime]=\"dt4\" readonly class=\"form-control\" [owlDateTimeTrigger]=\"dt4\"\r\n                  [ngClass]=\"{ 'is-invalid': formSubmitted && f.taxDate.errors }\" placeholder=\"Select Tax Date\"\r\n                  formControlName=\"taxDate\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt4\">\r\n                    <i class=\"fa fa-calendar\"></i> <!-- Calendar icon -->\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <owl-date-time [pickerType]=\"'calendar'\" #dt4></owl-date-time>\r\n              <div *ngIf=\"formSubmitted && f.taxDate.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.taxDate.errors.required\">Tax Date is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Vehicle Color<span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"vehicleColor\" class=\"form-control\" placeholder=\"Enter Vehicle color\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.vehicleColor.errors }\" />\r\n              <div *ngIf=\"formSubmitted && f.vehicleColor.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.vehicleColor.errors.required\">Vehicle Color is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Vehicle Name<span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"vehicleName\" class=\"form-control\" placeholder=\"Enter Vehicle name\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.vehicleName.errors }\" />\r\n              <div *ngIf=\"formSubmitted && f.vehicleName.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.vehicleName.errors.required\">Vehicle Name is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Vehicle Number<span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"vehicleNumber\" class=\"form-control\" placeholder=\"Enter Vehicle number\"\r\n                [ngClass]=\"{ 'is-invalid': formSubmitted && f.vehicleNumber.errors }\"\r\n                (keydown)=\"spaceNotAllowd($event)\" />\r\n              <div *ngIf=\"formSubmitted && f.vehicleNumber.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.vehicleNumber.errors.required\">Vehicle Number is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-lg-12 text-end\">\r\n            <div class=\"modal-footer\">\r\n              <button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"submit()\">Submit</button>\r\n              <button type=\"button\" class=\"btn btn-outline-secondary\" [routerLink]=\"['/master/vehicle-detail/list']\"\r\n                (click)=\"back()\">Back</button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<app-ui-modal #submitPopUp [hideFooter]=\"true\" [dialogClass]=\"'modal-lg'\">\r\n  <div class=\"app-modal-header\">\r\n    <h5 class=\"modal-title\">Confirm</h5>\r\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n      (click)=\"submitPopUp.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n  </div>\r\n\r\n  <div class=\"app-modal-body\">\r\n    <p>Are you sure whant submit?</p>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"btnLoder\" (click)=\"finalSubmit()\">\r\n        <i class=\"fa\" [ngClass]=\"{'fa-spin fa-asterisk': btnLoder, 'fa-check': !btnLoder}\"></i>Yes\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"onCancel()\">\r\n        <i class=\"feather icon-slash\"></i> No\r\n      </button>\r\n    </div>\r\n  </div>\r\n</app-ui-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/vehicle-details/vehicle-details.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/vehicle-details/vehicle-details.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <form [formGroup]=\"vehicleFormSearchDetails\" autocomplete=\"off\">\r\n      <!-- <h5>Driver Details</h5> -->\r\n      <div class=\"accordion\" id=\"accordionPanelsStayOpenExample\">\r\n        <div class=\"accordion-item\">\r\n          <h2 class=\"accordion-header\" id=\"panelsStayOpen-headingOne\">\r\n            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n              data-bs-target=\"#panelsStayOpen-collapseOne\" aria-expanded=\"false\"\r\n              aria-controls=\"panelsStayOpen-collapseOne\">\r\n              Search\r\n            </button>\r\n          </h2>\r\n\r\n          <div id=\"panelsStayOpen-collapseOne\" class=\"accordion-collapse collapse\"\r\n            aria-labelledby=\"panelsStayOpen-headingOne\" data-bs-parent=\"#accordionPanelsStayOpenExample\">\r\n            <div class=\"accordion-body\">\r\n      <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n        <div class=\"row\">\r\n          <!-- Aadhar Number -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Vehicle Number </label>\r\n              <input type=\"text\" formControlName=\"vehicleNumber\" class=\"form-control\"\r\n                placeholder=\"Enter Vehicle Number\" />\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Aadhar Number -->\r\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Vehicle Name</label>\r\n              <input type=\"text\" formControlName=\"vehicleName\" class=\"form-control\" placeholder=\"Enter Vehicle Name\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Submit and Cancel buttons -->\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-lg-12 text-end\">\r\n            <div class=\"modal-footer\">\r\n              <button type=\"submit\" class=\"btn btn-outline-info list-button-container\" (click)=\"search()\"><span\r\n                  class=\"list-text-alaign-center\">Submit</span></button>\r\n              <button type=\"button\" class=\"btn btn-outline-secondary list-button-container\" (click)=\"onclear()\"><span\r\n                  class=\"list-text-alaign-center\">Clear</span></button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </app-card>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      <br>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"outer-container\">\r\n    <div class=\"button-container\">\r\n      <button class=\"btn btn-outline-success list-button-container\" [routerLink]=\"'/master/vehicle-detail/add'\">\r\n        <span class=\"list-text-alaign-center\">Add</span>\r\n      </button>\r\n      <button class=\"btn btn-outline-secondary list-button-container\" [disabled]=\"!editDisabled\" (click)=\"edit()\">\r\n        <span class=\"list-text-alaign-center\">Edit</span>\r\n      </button>\r\n      <button class=\"btn btn-outline-warning list-button-container\" [disabled]=\"!viewDisabled\" (click)=\"view()\">\r\n        <span class=\"list-text-alaign-center\">View</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <!--   <app-card [hidHeader]=\"true\" blockClass=\"table-border-style\" class=\"list-panel\">\r\n    <div class=\"table-responsive text-center list-panel\">\r\n      <div class=\"example-table-container\">\r\n        <table mat-table [dataSource]=\"dataSource\" class=\"table-design\">\r\n          <ng-container matColumnDef=\"serialNo\">\r\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> S.No </th>\r\n            <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-center\"> {{ i + 1 }} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"vehicleNo\">\r\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Vehicle No </th>\r\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.vehicleNumber}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"vehicleName\">\r\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Vehicle Name </th>\r\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.vehicleName}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"insuranceDate\">\r\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\">InsuranceDate </th>\r\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.insuranceDate | date: 'dd-MM-yyyy'}}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"taxDate\">\r\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Tax Date </th>\r\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.taxDate | date: 'dd-MM-yyyy'}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"fcDate\">\r\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> FC Date </th>\r\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.fcDate | date: 'dd-MM-yyyy'}} </td>\r\n          </ng-container>\r\n\r\n\r\n          <ng-container matColumnDef=\"polutionDate\">\r\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Polution Date </th>\r\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.polutionDate | date: 'dd-MM-yyyy'}}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Action </th>\r\n            <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n              <mat-radio-button (change)=\"selectRecord(element)\"></mat-radio-button>\r\n            </td>\r\n          </ng-container>\r\n\r\n\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <div *ngIf=\"isLoading\" class=\"table-loader\">\r\n          <mat-spinner diameter=\"64\"></mat-spinner>\r\n        </div>\r\n        <mat-paginator [length]=\"totalCounts\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\"\r\n          (page)=\"pageEvent($event)\">\r\n        </mat-paginator>\r\n\r\n      </div>\r\n    </div>\r\n  </app-card> -->\r\n  <app-mat-table-configuration [columns]=\"columns\" [actionKeys]=\"actionKeys\" [dataSource]=\"dataSource\"\r\n    [totalCount]=\"totelCount\" [pageSize]=\"pageSize\" (paginationEvent)=\"handlePagination($event)\"\r\n    (checkboxAction)=\"onChecked($event)\">\r\n  </app-mat-table-configuration>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 mt-2\">\r\n      <div class=\"dropdown\">\r\n        <button class=\"btn btn-outline-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\"\r\n          aria-expanded=\"false\">\r\n          Download\r\n        </button>\r\n        <ul class=\"dropdown-menu\">\r\n          <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"exportToExcel()\">Excel</a></li>\r\n          <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"generatePDF()\">PDF</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

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
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_csv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-csv */ "./node_modules/ngx-csv/ngx-csv.js");
/* harmony import */ var ngx_csv__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_csv__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/config/master-list-columns */ "./src/app/config/master-list-columns.ts");













var VehicleDetailsComponent = /** @class */ (function () {
    function VehicleDetailsComponent(masterService, toaster, router, formBuilder) {
        this.masterService = masterService;
        this.toaster = toaster;
        this.router = router;
        this.formBuilder = formBuilder;
        this.columns = src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_12__["MasterListColumns"].vehicleDetailListColumns;
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
        var vehicleFormSearchDetails = this.vehicleFormSearchDetails.value;
        var request = {
            filters: {
                vehicleNumber: vehicleFormSearchDetails.vehicleNumber ? vehicleFormSearchDetails.vehicleNumber : '',
                vehicleName: vehicleFormSearchDetails.vehicleName ? vehicleFormSearchDetails.vehicleName : ''
            },
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
    VehicleDetailsComponent.prototype.generatePDF = function () {
        console.log('generatePDF :');
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_8__["default"]();
        // Get page dimensions
        var pageWidth = doc.internal.pageSize.getWidth();
        var pageHeight = doc.internal.pageSize.getHeight();
        // Add Watermark - "DC Holidays"
        doc.setTextColor(200, 200, 200); // Light gray color
        doc.setFontSize(40); // Large font size
        doc.setFont('helvetica', 'bold'); // Bold font
        // Calculate center position
        var textWidth = doc.getTextWidth('DC Holidays');
        var x = (pageWidth - textWidth) / 2;
        var y = pageHeight / 2;
        // Add rotated watermark text
        doc.text('DC Holidays', x, y, { angle: 45 });
        // Reset text color to black for actual content
        doc.setTextColor(0);
        // Title
        doc.setFontSize(14);
        doc.text('Vehicle Details', 14, 10);
        // Define table columns with Serial Number
        var columns = ['S.No', 'Vehicle No', 'Vehicle Name', 'Insurance Date', 'Tax Date', 'Fc Date', 'Polution Date'];
        // Convert list data to an array format with serial numbers
        /* const rows = this.dataSource.data.map((item, index) => [
          index + 1, // Serial number starts from 1
          item.vehicleNumber,
          String(item.vehicleName), // Convert number to string
          String(item.insuranceDate), // Convert number to string
          String(item.taxDate), // Convert number to string
          item.fcDate,
          item.polutionDate,
        ]); */
        var rows = [];
        this.dataSource.data.forEach(function (element, i) {
            rows[i] = [];
            rows[i].push(i + 1);
            rows[i].push(element ? element.vehicleNumber : '');
            rows[i].push(element ? element.vehicleName : '');
            rows[i].push(element ? moment__WEBPACK_IMPORTED_MODULE_11__(element.insuranceDate).format("DD-MM-YYYY") : '');
            rows[i].push(element ? moment__WEBPACK_IMPORTED_MODULE_11__(element.taxDate).format("DD-MM-YYYY") : '');
            rows[i].push(element ? moment__WEBPACK_IMPORTED_MODULE_11__(element.fcDate).format("DD-MM-YYYY") : '');
            rows[i].push(element ? moment__WEBPACK_IMPORTED_MODULE_11__(element.polutionDate).format("DD-MM-YYYY") : '');
        });
        // Add table to the PDF
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_9___default()(doc, {
            head: [columns],
            body: rows,
            startY: 20
        });
        // Save the PDF
        doc.save('Vehicle_Details.pdf');
    };
    VehicleDetailsComponent.prototype.exportToExcel = function () {
        var rows = [];
        this.dataSource.data.forEach(function (element, i) {
            rows[i] = [];
            rows[i].push(i + 1);
            rows[i].push(element ? element.vehicleNumber : '');
            rows[i].push(element ? element.vehicleName : '');
            rows[i].push(element ? moment__WEBPACK_IMPORTED_MODULE_11__(element.insuranceDate).format("DD-MM-YYYY") : '');
            rows[i].push(element ? moment__WEBPACK_IMPORTED_MODULE_11__(element.taxDate).format("DD-MM-YYYY") : '');
            rows[i].push(element ? moment__WEBPACK_IMPORTED_MODULE_11__(element.fcDate).format("DD-MM-YYYY") : '');
            rows[i].push(element ? moment__WEBPACK_IMPORTED_MODULE_11__(element.polutionDate).format("DD-MM-YYYY") : '');
        });
        var options = {
            headers: [
                'S.No', 'Vehicle No', 'Vehicle Name', 'Insurance Date', 'Tax Date', 'Fc Date', 'Polution Date'
            ]
        };
        new ngx_csv__WEBPACK_IMPORTED_MODULE_10__["ngxCsv"](rows, 'Vehicle_Details', options);
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