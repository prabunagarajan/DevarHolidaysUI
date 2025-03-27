(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-details-trip-details-trip-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Trip Details</h3>\r\n<ul class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a [routerLink]=\"['/dashboard']\">Home</a>\r\n    </li>\r\n    <ng-container>\r\n        <li class=\"breadcrumb-item\" [routerLink]=\"['/container/trip-detail/list']\"><a href=\"javascript:\"> Trip\r\n                Details</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item\"><a href=\"javascript:\">{{screenName}}</a></li>\r\n    </ng-container>\r\n</ul>\r\n<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <form [formGroup]=\"tripFormDetails\" autocomplete=\"off\">\r\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <h3>Customer & Vehicel Details</h3>\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Vehicle Number <span class=\"text-danger\">*</span></label>\r\n                            <select type=\"text\" class=\"form-select\" formControlName=\"vehicleNumber\"\r\n                                placeholder=\"Select Vehicle Number\" (change)=\"getStaringKM($event.target.value)\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.vehicleNumber.errors }\">\r\n                                <option value=\"\" selected disabled>Select Vehicle Number</option>\r\n                                <option *ngFor=\"let vehicleListElement of vehicleList\"\r\n                                    value=\"{{vehicleListElement.vehicleNumber}}\">{{vehicleListElement.vehicleNumber}}\r\n                                </option>\r\n                            </select>\r\n\r\n                            <div *ngIf=\"formSubmitted && tripForm.vehicleNumber.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.vehicleNumber.errors.required\">Vehicle Number is required</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Date<span class=\"text-danger\">*</span></label>\r\n                            <div class=\"input-group\">\r\n                                <!-- DateTime Input -->\r\n                                <input type=\"text\" [owlDateTime]=\"dt1\" class=\"form-control\" formControlName=\"date\"\r\n                                    placeholder=\"Select Date & Time\" [attr.disabled]=\"isDisableds ? true : null\"\r\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.date.errors }\" readonly\r\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\r\n                                    (keydown)=\"$event.preventDefault()\">\r\n\r\n                                <!-- Calendar Icon Inside Input -->\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt1\" type=\"button\">\r\n                                        📅\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <!-- Owl DateTime Picker -->\r\n                                <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\r\n                            </div>\r\n\r\n                            <!-- Validation Message -->\r\n                            <div *ngIf=\"formSubmitted && tripForm.date.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.date.errors.required\">Customer Name is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Customer Name<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"customerName\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Customer Name\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.customerName.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.customerName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.customerName.errors.required\">Customer Name is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Customer Mobile Number<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"customerMobileNumber\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Customer Mobile Number\"\r\n                                maxlength=\"10\" (keydown)=\"numbersOnly($event)\" maxlength=\"10\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.customerMobileNumber.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.customerMobileNumber.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.customerMobileNumber.errors.required\">Customer Mobile Number is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driver Name<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"driverName\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Driver Name\"\r\n                                (change)=\"onDriverNameChange($event)\" list=\"driverNames\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.driverName.errors }\">\r\n\r\n                            <datalist id=\"driverNames\">\r\n                                <option *ngFor=\"let driverListElemnt of driverList\" [value]=\"driverListElemnt?.name\">\r\n                            </datalist>\r\n\r\n                            <div *ngIf=\"formSubmitted && tripForm.driverName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.driverName.errors.required\">Driver Name is required</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driver Number<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"driverNumber\"\r\n                                (keydown)=\"numbersOnly($event)\" maxlength=\"10\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Driver Number\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.driverNumber.errors }\">\r\n\r\n                            <!-- <datalist id=\"driverNumbers\">\r\n                                <option *ngFor=\"let driverListElemnt of driverList\" [value]=\"driverListElemnt?.mobileNumber\">\r\n                            </datalist> -->\r\n\r\n                            <div *ngIf=\"formSubmitted && tripForm.driverName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.driverNumber.errors.required\">Driver Number is required</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Starting KM<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"startingKM\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Starting KM\"\r\n                                maxlength=\"10\" (keydown)=\"numbersOnly($event)\"\r\n                                (keyup)=\"startingKM($event.target.value);\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.startingKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.startingKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.startingKM.errors.required\">Starting KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Closing KM<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"closingKM\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Closing KM\"\r\n                                maxlength=\"10\" (keydown)=\"numbersOnly($event)\" (keyup)=\"closeingKM($event.target.value)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.closingKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.closingKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.closingKM.errors.required\">Closing KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Used KM<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"usedKM\" placeholder=\"Enter Used KM\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.usedKM.errors }\" disabled />\r\n                            <div *ngIf=\"formSubmitted && tripForm.usedKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.usedKM.errors.required\">Used KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Starting Time<span class=\"text-danger\">*</span></label>\r\n                            <div class=\"input-group\">\r\n                                <!-- DateTime Input -->\r\n                                <input type=\"text\" [owlDateTime]=\"dt2\" class=\"form-control\"\r\n                                    [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Select Staring Time\"\r\n                                    formControlName=\"startingTime\"\r\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.startingTime.errors }\"\r\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\r\n                                    (keydown)=\"$event.preventDefault()\" readonly />\r\n\r\n                                <!-- Calendar Icon Inside Input -->\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt2\" type=\"button\">\r\n                                        📅\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <!-- Owl DateTime Picker -->\r\n                                <owl-date-time #dt2 [pickerType]=\"'both'\" [format]=\"'DD/MM/YYYY HH:mm'\"\r\n                                    [minuteStep]=\"5\"></owl-date-time>\r\n                            </div>\r\n\r\n                            <!-- Validation Message -->\r\n                            <div *ngIf=\"formSubmitted && tripForm.startingTime.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.startingTime.errors.required\">Starting Time is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Closing Time<span class=\"text-danger\">*</span></label>\r\n                            <div class=\"input-group\">\r\n                                <input type=\"text\" [owlDateTime]=\"dt3\" class=\"form-control\"\r\n                                    [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Select Closing Time\"\r\n                                    formControlName=\"closingTime\"\r\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.closingTime.errors }\"\r\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\r\n                                    (keydown)=\"$event.preventDefault()\" readonly>\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt3\" type=\"button\">\r\n                                        📅\r\n                                    </button>\r\n                                </div>\r\n                                <owl-date-time #dt3 [pickerType]=\"'both'\" [format]=\"'DD/MM/YYYY HH:mm'\"\r\n                                    [minuteStep]=\"5\"></owl-date-time>\r\n                            </div>\r\n                            <div *ngIf=\"formSubmitted && tripForm.closingTime.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.closingTime.errors.required\">Closing Time is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Total Hrs<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"totalTime\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Total HRS\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.totalTime.errors }\" readonly />\r\n                            <div *ngIf=\"formSubmitted && tripForm.totalTime.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.totalTime.errors.required\">Total HRS is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Type<span class=\"text-danger\">*</span></label>\r\n                            <select class=\"form-select\" formControlName=\"acOrNonAc\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\" (click)=\"acDetect($event.target.value)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acOrNonAc.errors }\">\r\n                                <option value=\"\" disabled selected>Select AC or Non-AC</option>\r\n                                <option value=\"AC\">AC</option>\r\n                                <option value=\"Non-AC\">Non-AC</option>\r\n                            </select>\r\n                            <div *ngIf=\"formSubmitted && tripForm.acOrNonAc.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.acOrNonAc.errors.required\">AC Type is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Starting KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\r\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\" (keydown)=\"numbersOnly($event)\"\r\n                                maxlength=\"10\" (keyup)=\"acStaringKmCalculation($event.target.value);\"\r\n                                formControlName=\"acStartingKM\" placeholder=\"Enter AC Starting KM\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acStartingKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.acStartingKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.acStartingKM.errors.required\">AC Starting KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Closed KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\r\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\" (keydown)=\"numbersOnly($event)\"\r\n                                maxlength=\"10\" (keyup)=\"acClosingKmCalculation($event.target.value);\"\r\n                                formControlName=\"acClosingKM\" placeholder=\"Enter AC Closed KM\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acClosingKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.acClosingKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.acClosingKM.errors.required\">AC Closed KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Used KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\r\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\"\r\n                                (keydown)=\"numbersOnly($event)\" formControlName=\"usedAcKM\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter AC Used KM\"\r\n                                maxlength=\"10\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.usedAcKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.usedAcKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.usedAcKM.errors.required\">AC Used KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Note<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"acNote\" placeholder=\"Enter AC Note\"\r\n                                [attr.disabled]=\"isDisableds ? true : null\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acNote.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.acNote.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.acNote.errors.required\">AC Note is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n\r\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <h3>Visiting Place Details</h3>\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Visiting Places <span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"visitingPlace\"\r\n                                placeholder=\"Enter Visiting Place\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.visitingPlace.errors }\"\r\n                                [attr.disabled]=\"isDisabled ? true : null\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.visitingPlace.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.visitingPlace.errors.required\">Visiting Place is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- (keyup)=\"dayRentCalculation($event.target.value)\" -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Day Rent<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"dayRent\"\r\n                                placeholder=\"Enter Day Rent\" (keydown)=\"numbersOnly($event)\"\r\n                                (keyup)=\"profitAmoutCalculation('Day Rent')\" [attr.disabled]=\"isDisabled ? true : null\"\r\n                                maxlength=\"10\" [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.dayRent.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.dayRent.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.dayRent.errors.required\">Day Rent is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Toll<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"toll\" placeholder=\"Enter Toll\"\r\n                                [attr.disabled]=\"isDisabled ? true : null\" (keyup)=\"profitAmoutCalculation('Toll');\"\r\n                                (keydown)=\"numbersOnly($event)\" maxlength=\"10\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.toll.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.toll.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.toll.errors.required\">Toll is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Total Rent<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"totalRent\"\r\n                                placeholder=\"Enter Total Rent\"\r\n                                (keyup)=\"getTotalRentAmount($event.target.value); profitAmoutCalculation('Total Rent')\"\r\n                                (keydown)=\"numbersOnly($event)\" [attr.disabled]=\"isDisabled ? true : null\"\r\n                                maxlength=\"10\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.totalRent.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.totalRent.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.totalRent.errors.required\">Total Rent is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Fuel<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"diesel\" placeholder=\"Enter Fuel\"\r\n                                (keyup)=\"profitAmoutCalculation('Fuel')\" (keydown)=\"numbersOnly($event)\" maxlength=\"10\"\r\n                                [attr.disabled]=\"isDisabled ? true : null\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.diesel.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.diesel.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.diesel.errors.required\">Fuel is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driver Payment<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"driverPayment\"\r\n                                placeholder=\"Enter Driver Payment\" (keydown)=\"numbersOnly($event)\"\r\n                                (keyup)=\"profitAmoutCalculation('Driver Payment')\" maxlength=\"10\"\r\n                                [attr.disabled]=\"isDisabled ? true : null\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.driverPayment.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.driverPayment.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.driverPayment.errors.required\">Driver Payment is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Permit<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"permitAmount\"\r\n                                placeholder=\"Enter Permit\" (keydown)=\"numbersOnly($event)\"\r\n                                (keyup)=\"profitAmoutCalculation('Permit');\" [attr.disabled]=\"isDisabled ? true : null\"\r\n                                maxlength=\"10\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.permitAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.permitAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.permitAmount.errors.required\">Permit is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Advance<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"advanceAmount\"\r\n                                placeholder=\"Enter Advance\" (keyup)=\"profitAmoutCalculation('Advance');\" maxlength=\"10\"\r\n                                (keydown)=\"numbersOnly($event)\" [attr.disabled]=\"isDisabled ? true : null\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.advanceAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.advanceAmount.errors.required\">Advance is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Advance Type<span class=\"text-danger\">*</span></label>\r\n                            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"advanceType\"\r\n                                placeholder=\"Enter Advance Type\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceType.errors }\" /> -->\r\n\r\n                            <select type=\"text\" class=\"form-select\" formControlName=\"advanceType\"\r\n                                placeholder=\"Enter Advance Type\" [attr.disabled]=\"isDisabled ? true : null\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceType.errors }\">\r\n                                <option value=\"\" hidden>Select Advance Type</option>\r\n                                <option value=\"No Advance\">No Advance</option>\r\n                                <option value=\"Fuel\">Fuel</option>\r\n                                <option value=\"Hand\">Hand</option>\r\n                            </select>\r\n                            <div *ngIf=\"formSubmitted && tripForm.advanceType.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.advanceType.errors.required\">Advance Type is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Payment Type<span class=\"text-danger\">*</span></label>\r\n                            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"paymentType\"\r\n                                placeholder=\"Enter Payment Type\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.paymentType.errors }\" /> -->\r\n                            <select type=\"text\" class=\"form-select\" formControlName=\"paymentType\"\r\n                                placeholder=\"Enter Payment Type\" [attr.disabled]=\"isDisabled ? true : null\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.paymentType.errors }\">\r\n                                <option value=\"\" hidden> Select Payment Type </option>\r\n                                <option value=\"UPI\"> UPI - GPay / PhonePay </option>\r\n                                <option value=\"HAND\"> Hand </option>\r\n                            </select>\r\n                            <div *ngIf=\"formSubmitted && tripForm.paymentType.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.paymentType.errors.required\">Payment Type is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Recevied Amount<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"receivedAmount\"\r\n                                placeholder=\"Enter Recevied Amount\" (keyup)=\"profitAmoutCalculation('Recevied Amount');\"\r\n                                maxlength=\"10\" (keydown)=\"numbersOnly($event)\"\r\n                                [attr.disabled]=\"isDisabled ? true : null\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.receivedAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.receivedAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.receivedAmount.errors.required\">Recevied Amount is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- (keyup)=\"getDiscountAmount($event.target.value)\"  -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Discount<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"discountAmount\"\r\n                                placeholder=\"Enter Discount Amount\" (keyup)=\"profitAmoutCalculation('Discount')\"\r\n                                (keydown)=\"numbersOnly($event)\" [attr.disabled]=\"isDisabled ? true : null\"\r\n                                maxlength=\"10\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.discountAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.discountAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.discountAmount.errors.required\">Recevied Amount is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- (keyup)=\"getPendingAmount($event.target.value);\" -->\r\n                    <!-- (keyup)=\"profitAmoutCalculation('Pending Amount');\" -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Pending Amount<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"pendingAmount\" disabled\r\n                                placeholder=\"Enter Pending Amount\" (keydown)=\"numbersOnly($event)\"\r\n                                [attr.disabled]=\"isDisabled ? true : null\" maxlength=\"10\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.pendingAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.pendingAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.pendingAmount.errors.required\">Pending Amount is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Balance<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"balanceAmount\"\r\n                                placeholder=\"Enter Balance\" disabled (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.balanceAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.balanceAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.balanceAmount.errors.required\">Balance is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Wrote By<span class=\"text-danger\">*</span></label>\r\n                            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"submittedBy\"\r\n                                placeholder=\"Enter Wrote By\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.submittedBy.errors }\" /> -->\r\n                            <select type=\"text\" class=\"form-select\" formControlName=\"submittedBy\"\r\n                                [attr.disabled]=\"isDisabled ? true : null\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.submittedBy.errors }\">\r\n                                <option value=\"\" hidden>Select Wrote By</option>\r\n                                <option *ngFor=\"let driverListElemnt of driverList\" value=\"{{driverListElemnt?.name}}\">\r\n                                    {{driverListElemnt?.name}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"formSubmitted && tripForm.submittedBy.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.submittedBy.errors.required\">Wrote By is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Profit<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"profitAmount\" disabled\r\n                                placeholder=\"Enter Profit\" (keydown)=\"numbersOnly($event)\"\r\n                                [attr.disabled]=\"isDisabled ? true : null\" maxlength=\"10\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.profitAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.profitAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.profitAmount.errors.required\">Profit is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Remark<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"remark\" placeholder=\"Enter remark\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.remark.errors }\"\r\n                                [attr.disabled]=\"isDisabled ? true : null\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.remark.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.remark.errors.required\">remark is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Verified By (Manager)<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"verifiedByManager\"\r\n                                placeholder=\"Enter Verified By (Manager)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.verifiedByManager.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.verifiedByManager.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.verifiedByManager.errors.required\">Verified By (Manager) is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Verified By (Proprietor)<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"verifiedByProprietor\"\r\n                                placeholder=\"Enter Verified By (Proprietor)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.verifiedByProprietor.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.verifiedByProprietor.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.verifiedByProprietor.errors.required\">Verified By (Proprietor) is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n                <br>\r\n                <div class=\"row modal-footer\" *ngIf=\"tripLogDetails?.length > 0\">\r\n                    <h4>Trip Log Details</h4>\r\n                    <hr>\r\n\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-bordered\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>S.No</th>\r\n                                    <th>Application No</th>\r\n                                    <th>User Name</th>\r\n                                    <th>Action</th>\r\n                                    <th>Comments</th>\r\n                                    <th>Remark</th>\r\n                                    <th>Created Date</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let element of tripLogDetails; let i = index\">\r\n                                    <td>{{ i+1 }}</td>\r\n                                    <td>{{ element.applnNo }}</td>\r\n                                    <td>{{ element.userName }}</td>\r\n                                    <td class=\"text-center\">\r\n                                        <span *ngIf=\"element?.action == 'SUBMITTED'\"\r\n                                            class=\"badge m-r-5 badge-light-primary\">\r\n                                            {{element?.action}}</span>\r\n                                        <span *ngIf=\"element?.action == 'APPROVED'\"\r\n                                            class=\"badge m-r-5 badge-light-success\">\r\n                                            {{element?.action}}</span>\r\n                                        <span *ngIf=\"element?.action == 'REQUESTFORCLARIFICATION'\"\r\n                                            class=\"badge m-r-5 badge-light-secondary\">\r\n                                            {{element?.action}}</span>\r\n                                        <span *ngIf=\"element?.action == 'INPROGRESS'\"\r\n                                            class=\"badge m-r-5 badge-light-success\">\r\n                                            {{element?.action}}</span>\r\n                                        <span *ngIf=\"element?.action == 'FORWARDED'\"\r\n                                            class=\"badge m-r-5 badge-light-warning\">\r\n                                            {{element?.action}}</span>\r\n                                        <span *ngIf=\"element?.action == 'UPDATED'\"\r\n                                            class=\"badge m-r-5 badge-light-primary\">\r\n                                            {{element?.action}}</span>\r\n                                    </td>\r\n                                    <td>{{ element.comments }}</td>\r\n                                    <td>{{ element.remarks }}</td>\r\n                                    <td>{{ element.createdDate | date: 'dd-MM-yy HH:mm:ss' }}</td>\r\n\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col-lg-12 text-end\">\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"submit\" *ngIf=\"!forwardApproveBtnShow && !approveBtnShow\"\r\n                                class=\"btn btn-outline-success\"\r\n                                (click)=\"submit(tripFormDetails , 'Level 1')\">Submit</button>\r\n\r\n                            <button type=\"submit\" *ngIf=\"approveBtnShow ||forwardApproveBtnShow\"\r\n                                class=\"btn btn-outline-warning\"\r\n                                (click)=\"submit(tripFormDetails , 'Level 1 REQ')\">REQUEST FOR CLARIFICATION</button>\r\n\r\n                            <button type=\"submit\" *ngIf=\"forwardApproveBtnShow\" class=\"btn btn-outline-success\"\r\n                                (click)=\"submit(tripFormDetails , 'Level 3')\">Approved</button>\r\n\r\n                            <button type=\"submit\" *ngIf=\"approveBtnShow\" class=\"btn btn-outline-success\"\r\n                                (click)=\"submit(tripFormDetails, 'Level 2')\">Forwarded</button>\r\n\r\n                            <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"back()\">Back</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<app-ui-modal #submitPopUp [hideFooter]=\"true\" [dialogClass]=\"'modal-lg'\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Confirm</h5>\r\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n            (click)=\"submitPopUp.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n    </div>\r\n\r\n    <div class=\"app-modal-body\">\r\n        <p>Are you sure whant submit?</p>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"btnLoder\" (click)=\"finalSubmit()\">\r\n                <i class=\"fa\" [ngClass]=\"{'fa-spin fa-asterisk': btnLoder, 'fa-check': !btnLoder}\"></i>Yes\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"submitPopUp.hide()\">\r\n                <i class=\"feather icon-slash\"></i> No\r\n            </button>\r\n        </div>\r\n    </div>\r\n</app-ui-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/trip-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/trip-details.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <form [formGroup]=\"tripFormSearchDetails\" autocomplete=\"off\">\r\n      <app-card cardTitle=\"Trip Request Status\" blockClass=\"table-border-style\" class=\"search-panel\">\r\n        <div class=\"row\"></div>\r\n        <div class=\"row\">\r\n          <!-- Trip Details -->\r\n          <div class=\"col dashboard_bg1\">\r\n            <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col\">\r\n                  <span>Trip Details</span>\r\n                  <h3 class=\"mt-2\">{{ tripDetailsCount.total || '0' }}</h3>\r\n                  <i class=\"fas fa-external-link-alt\"></i>\r\n                </div>\r\n              </div>\r\n            </app-card>\r\n          </div>\r\n\r\n          <!-- EAL Approved -->\r\n          <div class=\"col dashboard_bg4\">\r\n            <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col\">\r\n                  <span>Total Approved</span>\r\n                  <h3 class=\"mt-2\">{{ tripDetailsCount.totalApproved || '0' }}</h3>\r\n                  <i class=\"fas fas fa-check\"></i>\r\n                </div>\r\n              </div>\r\n            </app-card>\r\n          </div>\r\n\r\n          <!-- EAL Pending/Request for Clarification -->\r\n          <div class=\"col dashboard_bg2\">\r\n            <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col\">\r\n                  <span>Total Request for Clarification</span>\r\n                  <h3 class=\"mt-2\">{{ tripDetailsCount.totalRequestforclarification || '0' }}</h3>\r\n                  <i class=\"fas fa-hourglass-half\"></i>\r\n                </div>\r\n              </div>\r\n            </app-card>\r\n          </div>\r\n\r\n          <!-- EAL Rejected -->\r\n          <div class=\"col dashboard_bg7\">\r\n            <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col\">\r\n                  <span>Total Rejected</span>\r\n                  <h3 class=\"mt-2\">{{ tripDetailsCount.totalRejected || '0' }}</h3>\r\n                  <i class=\"fas fa-external-link-alt\"></i>\r\n                </div>\r\n              </div>\r\n            </app-card>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n      <!-- Search Panel -->\r\n      <div class=\"accordion\" id=\"accordionPanelsStayOpenExample\">\r\n        <div class=\"accordion-item\">\r\n          <h2 class=\"accordion-header\" id=\"panelsStayOpen-headingOne\">\r\n            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n              data-bs-target=\"#panelsStayOpen-collapseOne\" aria-expanded=\"false\"\r\n              aria-controls=\"panelsStayOpen-collapseOne\">\r\n              Search\r\n            </button>\r\n          </h2>\r\n\r\n          <div id=\"panelsStayOpen-collapseOne\" class=\"accordion-collapse collapse\"\r\n            aria-labelledby=\"panelsStayOpen-headingOne\" data-bs-parent=\"#accordionPanelsStayOpenExample\">\r\n            <div class=\"accordion-body\">\r\n              <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <div class=\"row\">\r\n                  <!-- Driver Name -->\r\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>Driver Name<span class=\"text-danger\">*</span></label>\r\n                      <select class=\"form-select\" formControlName=\"driverName\">\r\n                        <option value=\"\" selected disabled>Select Driver Name</option>\r\n                        <option *ngFor=\"let driver of driverList\" [value]=\"driver?.name\">{{ driver?.name }}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- Trip No -->\r\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>Trip No<span class=\"text-danger\">*</span></label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"tripNo\" placeholder=\"Enter Trip Number\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- From Date -->\r\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>From Date<span class=\"text-danger\">*</span></label>\r\n                      <input type=\"text\" [owlDateTime]=\"dt3\" class=\"form-control\" [owlDateTimeTrigger]=\"dt3\"\r\n                        placeholder=\"Select From Date\" formControlName=\"fromDate\">\r\n                      <owl-date-time [pickerType]=\"'calendar'\" #dt3></owl-date-time>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- To Date -->\r\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>To Date<span class=\"text-danger\">*</span></label>\r\n                      <input type=\"text\" [owlDateTime]=\"dt4\" class=\"form-control\" [owlDateTimeTrigger]=\"dt4\"\r\n                        placeholder=\"Select To Date\" formControlName=\"toDate\">\r\n                      <owl-date-time [pickerType]=\"'calendar'\" #dt4></owl-date-time>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- Driver Number -->\r\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>Driver Number</label>\r\n                      <input type=\"text\" formControlName=\"driverNumber\" class=\"form-control\"\r\n                        placeholder=\"Enter Driver Number\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- Vehicle Number -->\r\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>Vehicle Number <span class=\"text-danger\">*</span></label>\r\n                      <select class=\"form-select\" formControlName=\"vehiclenumber\">\r\n                        <option value=\"\" selected disabled>Select Vehicle Number</option>\r\n                        <option *ngFor=\"let vehicle of vehicleList\" [value]=\"vehicle.vehicleNumber\">\r\n                          {{ vehicle.vehicleNumber }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- Status -->\r\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>Status</label>\r\n                      <select formControlName=\"status\" class=\"form-select\">\r\n                        <option value=\"\" disabled selected>Select Status</option>\r\n                        <option value=\"APPROVED\">APPROVED</option>\r\n                        <option value=\"INPROGRESS\">IN PROGRESS</option>\r\n                        <option value=\"FORWARDED\">FORWARDED</option>\r\n                        <option value=\"REQUESTFORCLARIFICATION\">REQUEST FOR CLARIFICATION</option>\r\n                        <option value=\"REJECT\">REJECT</option>\r\n                        <option value=\"SUBMITTED\">SUBMITTED</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Buttons -->\r\n                <div class=\"row mt-3\">\r\n                  <div class=\"col-lg-12 text-end\">\r\n                    <div class=\"modal-footer\">\r\n                      <button type=\"submit\" class=\"btn btn-outline-info\" (click)=\"search()\">\r\n                        <span>Submit</span>\r\n                      </button>\r\n                      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"onclear()\">\r\n                        <span>Clear</span>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </app-card>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"outer-container\">\r\n  <div class=\"button-container\">\r\n    <button class=\"btn btn-outline-success list-button-container\" [routerLink]=\"['/container/trip-detail/add']\">\r\n      <span class=\"list-text-alaign-center\">Add</span>\r\n    </button>\r\n    <button class=\"btn btn-outline-secondary list-button-container\" (click)=\"onEdit()\" [disabled]=\"!editEnable\">\r\n      <span class=\"list-text-alaign-center\">Edit</span>\r\n    </button>\r\n    <button class=\"btn btn-outline-warning list-button-container\" (click)=\"onView()\" [disabled]=\"!viewEnable\">\r\n      <span class=\"list-text-alaign-center\">View</span>\r\n    </button>\r\n    <!-- <button (click)=\"onclear()\">\r\n            <span>Clear</span>\r\n        </button> -->\r\n  </div>\r\n</div>\r\n\r\n\r\n<app-mat-table-configuration *ngIf=\"columns?.length > 0\" [columns]=\"columns\" [actionKeys]=\"actionKeys\"\r\n  [dataSource]=\"dataSource\" [totalCount]=\"totelCount\" [pageSize]=\"pageSize\" (paginationEvent)=\"handlePagination($event)\"\r\n  (checkboxAction)=\"onChecked($event)\">\r\n</app-mat-table-configuration>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xl-4 mt-2\">\r\n    <div class=\"dropdown\">\r\n      <button class=\"btn btn-outline-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\"\r\n        aria-expanded=\"false\">\r\n        Download\r\n      </button>\r\n      <ul class=\"dropdown-menu\">\r\n        <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"exportToExcel()\">Excel</a></li>\r\n        <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"generatePDF()\">PDF</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/tripdeatilsforward/tripdeatilsforward.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/tripdeatilsforward/tripdeatilsforward.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <form [formGroup]=\"tripFormSearchDetails\" autocomplete=\"off\">\r\n            <!-- Search Panel -->\r\n\r\n            <app-card cardTitle=\"Trip Request Status\" blockClass=\"table-border-style\" class=\"search-panel\">\r\n                <div class=\"row\"></div>\r\n                <div class=\"row\">\r\n                    <!-- Trip Details -->\r\n                    <div class=\"col dashboard_bg1\">\r\n                        <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\r\n                            <div class=\"row align-items-center\">\r\n                                <div class=\"col\">\r\n                                    <span>Trip Details</span>\r\n                                    <h3 class=\"mt-2\">{{ tripDetailsCount.total || '0' }}</h3>\r\n                                    <i class=\"fas fa-external-link-alt\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </app-card>\r\n                    </div>\r\n\r\n                    <!-- EAL Approved -->\r\n                    <div class=\"col dashboard_bg4\">\r\n                        <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\r\n                            <div class=\"row align-items-center\">\r\n                                <div class=\"col\">\r\n                                    <span>Total Approved</span>\r\n                                    <h3 class=\"mt-2\">{{ tripDetailsCount.totalApproved || '0' }}</h3>\r\n                                    <i class=\"fas fas fa-check\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </app-card>\r\n                    </div>\r\n\r\n                    <!-- EAL Pending/Request for Clarification -->\r\n                    <div class=\"col dashboard_bg2\">\r\n                        <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\r\n                            <div class=\"row align-items-center\">\r\n                                <div class=\"col\">\r\n                                    <span>Total Request for Clarification</span>\r\n                                    <h3 class=\"mt-2\">{{ tripDetailsCount.totalRequestforclarification || '0' }}</h3>\r\n                                    <i class=\"fas fa-hourglass-half\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </app-card>\r\n                    </div>\r\n\r\n                    <!-- EAL Rejected -->\r\n                    <div class=\"col dashboard_bg7\">\r\n                        <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\r\n                            <div class=\"row align-items-center\">\r\n                                <div class=\"col\">\r\n                                    <span>Total Rejected</span>\r\n                                    <h3 class=\"mt-2\">{{ tripDetailsCount.totalRejected || '0' }}</h3>\r\n                                    <i class=\"fas fa-external-link-alt\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </app-card>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n            <div class=\"accordion\" id=\"accordionPanelsStayOpenExample\">\r\n                <div class=\"accordion-item\">\r\n                    <h2 class=\"accordion-header\" id=\"panelsStayOpen-headingOne\">\r\n                        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                            data-bs-target=\"#panelsStayOpen-collapseOne\" aria-expanded=\"false\"\r\n                            aria-controls=\"panelsStayOpen-collapseOne\">\r\n                            Search\r\n                        </button>\r\n                    </h2>\r\n\r\n                    <div id=\"panelsStayOpen-collapseOne\" class=\"accordion-collapse collapse\"\r\n                        aria-labelledby=\"panelsStayOpen-headingOne\" data-bs-parent=\"#accordionPanelsStayOpenExample\">\r\n                        <div class=\"accordion-body\">\r\n                            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                                <h4>Search</h4>\r\n                                <div class=\"row\">\r\n                                    <!-- Driver Name -->\r\n                                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"driverName\">Driver Name</label>\r\n                            <input type=\"text\" id=\"driverName\" formControlName=\"driverName\" class=\"form-control\"\r\n                                placeholder=\"Enter Driver Name\" />\r\n                        </div>\r\n                    </div> -->\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Driver Name<span class=\"text-danger\">*</span></label>\r\n                                            <select type=\"text\" class=\"form-select\" formControlName=\"driverName\"\r\n                                                placeholder=\"Enter Driver Name\">\r\n                                                <option value=\"\" selected disabled>Select Driver Name</option>\r\n                                                <option *ngFor=\"let driverListElemnt of driverList\"\r\n                                                    value=\"{{driverListElemnt?.name}}\">\r\n                                                    {{driverListElemnt?.name}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <!-- Driver Number -->\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"driverNumber\">Driver Number</label>\r\n                                            <input type=\"text\" id=\"driverNumber\" formControlName=\"driverNumber\"\r\n                                                class=\"form-control\" placeholder=\"Enter Driver Number\" />\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Trip No<span class=\"text-danger\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"tripNo\"\r\n                                                placeholder=\"Enter Trip Number\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>From Date<span class=\"text-danger\">*</span></label>\r\n                                            <!-- <input type=\"text\" formControlName=\"taxDate\" class=\"form-control\" bsDatepicker\r\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-blue' }\"\r\n                            [ngClass]=\"{ 'is-invalid': formSubmitted && f.taxDate.errors }\" /> -->\r\n                                            <input type=\"text\" [owlDateTime]=\"dt3\" class=\"form-control\"\r\n                                                [owlDateTimeTrigger]=\"dt3\" placeholder=\"Select From Date\"\r\n                                                formControlName=\"fromDate\">\r\n                                            <owl-date-time [pickerType]=\"'calendar'\" #dt4></owl-date-time>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>To Date<span class=\"text-danger\">*</span></label>\r\n                                            <!-- <input type=\"text\" formControlName=\"taxDate\" class=\"form-control\" bsDatepicker\r\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-blue' }\"\r\n                            [ngClass]=\"{ 'is-invalid': formSubmitted && f.taxDate.errors }\" /> -->\r\n                                            <input type=\"text\" [owlDateTime]=\"dt4\" class=\"form-control\"\r\n                                                [owlDateTimeTrigger]=\"dt4\" placeholder=\"Select From Date\"\r\n                                                formControlName=\"toDate\">\r\n                                            <owl-date-time [pickerType]=\"'calendar'\" #dt3></owl-date-time>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <!-- Vehicle Number -->\r\n                                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"vehicleNumber\">Vehicle Number</label>\r\n                            <input type=\"text\" id=\"vehicleNumber\" formControlName=\"vehiclenumber\" class=\"form-control\"\r\n                                placeholder=\"Enter Vehicle Number\" />\r\n                        </div>\r\n                    </div> -->\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Vehicle Number <span class=\"text-danger\">*</span></label>\r\n                                            <select type=\"text\" class=\"form-select\" formControlName=\"vehiclenumber\"\r\n                                                placeholder=\"Select Vehicle Number\">\r\n                                                <option value=\"\" selected disabled>Select Vehicle Number</option>\r\n                                                <option *ngFor=\"let vehicleListElement of vehicleList\"\r\n                                                    value=\"{{vehicleListElement.vehicleNumber}}\">\r\n                                                    {{vehicleListElement.vehicleNumber}}\r\n                                                </option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <!-- Status -->\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"status\">Status</label>\r\n                                            <select id=\"status\" formControlName=\"status\" class=\"form-select\">\r\n                                                <option value=\"\" disabled selected>Select Status</option>\r\n                                                <option value=\"APPROVED\">APPROVED</option>\r\n                                                <option value=\"INPROGRESS\">IN PROGRESS</option>\r\n                                                <option value=\"FORWARDED\">FORWARDED</option>\r\n                                                <option value=\"REQUESTFORCLARIFICATION\">REQUEST FOR CLARIFICATION\r\n                                                </option>\r\n                                                <option value=\"REJECT\">REJECT</option>\r\n                                                <option value=\"SUBMITTED\">SUBMITTED</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                </div>\r\n\r\n                                <!-- Submit and Cancel buttons -->\r\n                                <div class=\"row mt-3\">\r\n                                    <div class=\"col-lg-12 text-end\">\r\n                                        <div class=\"modal-footer\">\r\n                                            <button type=\"submit\" class=\"btn btn-outline-info list-button-container\"\r\n                                                (click)=\"search()\"><span\r\n                                                    class=\"list-text-alaign-center\">Submit</span></button>\r\n                                            <button type=\"button\"\r\n                                                class=\"btn btn-outline-secondary list-button-container\"\r\n                                                (click)=\"onclear()\"><span\r\n                                                    class=\"list-text-alaign-center\">Clear</span></button>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </app-card>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"outer-container\">\r\n    <div class=\"button-container\">\r\n        <!-- <button class=\"btn btn-outline-success list-button-container\" [routerLink]=\"['/container/trip-detail/add']\">\r\n            <span class=\"list-text-alaign-center\">Add</span>\r\n        </button> -->\r\n        <button class=\"btn btn-outline-secondary list-button-container\" (click)=\"onEdit()\" [disabled]=\"!editEnable\">\r\n            <span class=\"list-text-alaign-center\">Edit</span>\r\n        </button>\r\n        <button class=\"btn btn-outline-warning list-button-container\" (click)=\"onView()\" [disabled]=\"!viewEnable\">\r\n            <span class=\"list-text-alaign-center\">View</span>\r\n        </button>\r\n        <!-- <button (click)=\"onclear()\">\r\n            <span>Clear</span>\r\n        </button> -->\r\n    </div>\r\n</div>\r\n\r\n<!-- <app-card [hidHeader]=\"true\" blockClass=\"table-border-style\" class=\"list-panel\">\r\n    <div class=\"table-responsive text-center\">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table-design\">\r\n                <ng-container matColumnDef=\"serialNo\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> S.No </th>\r\n                    <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-center\"> {{ i + 1 }} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"tripNumber\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">Trip Number </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.tripNumber}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"createdDate\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> CreatedDate </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.createdDate | date:\r\n                        'dd-MM-yyyy'}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"vehicleNumber\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> VehicleNumber </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.vehicleNumber}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"customerName\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">CustomerName</th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.customerName}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"visitingPlace\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> VisitingPlace </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.visitingPlace}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"driverName\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Driver Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.driverName}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"totalRent\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">TotalRent </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.totalRent}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n                        <span class=\"badge m-r-5 badge-light-success\"\r\n                            *ngIf=\"element?.status == 'APPROVED'\">{{element?.status}}</span>\r\n                        <span class=\"badge m-r-5 badge-light-info\"\r\n                            *ngIf=\"element?.status == 'INPROGRESS'\">{{element?.status}}</span>\r\n                        <span class=\"badge m-r-5 badge-light-secondary\"\r\n                            *ngIf=\"element?.status == 'FORWARDED'\">{{element?.status}}</span>\r\n                        <span class=\"badge m-r-5 badge-light-warning \"\r\n                            *ngIf=\"element?.status == 'REQUESTFORCLARIFICATION'\">{{element?.status}}</span>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Action </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n                        <mat-radio-button (click)=\"onSelect(element)\"></mat-radio-button>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <div *ngIf=\"isLoading\" class=\"table-loader\">\r\n                <mat-spinner diameter=\"64\"></mat-spinner>\r\n            </div>\r\n            <mat-paginator [length]=\"totelCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\"\r\n                (page)=\"pageEvent($event)\">\r\n            </mat-paginator>\r\n        </div>\r\n    </div>\r\n</app-card> -->\r\n\r\n<app-mat-table-configuration [columns]=\"columns\" [actionKeys]=\"actionKeys\" [dataSource]=\"dataSource\"\r\n    [totalCount]=\"totelCount\" [pageSize]=\"pageSize\" (paginationEvent)=\"handlePagination($event)\"\r\n    (checkboxAction)=\"onChecked($event)\">\r\n</app-mat-table-configuration>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-4 mt-2\">\r\n        <div class=\"dropdown\">\r\n            <button class=\"btn btn-outline-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\"\r\n                aria-expanded=\"false\">\r\n                Download\r\n            </button>\r\n            <ul class=\"dropdown-menu\">\r\n                <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"exportToExcel()\">Excel</a></li>\r\n                <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"generatePDF()\">PDF</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/tripdetailsinprogress/tripdetailsinprogress.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/tripdetailsinprogress/tripdetailsinprogress.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <form [formGroup]=\"tripFormSearchDetails\" autocomplete=\"off\">\r\n            <!-- Search Panel -->\r\n            <div class=\"accordion\" id=\"accordionPanelsStayOpenExample\">\r\n                <div class=\"accordion-item\">\r\n                    <h2 class=\"accordion-header\" id=\"panelsStayOpen-headingOne\">\r\n                        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                            data-bs-target=\"#panelsStayOpen-collapseOne\" aria-expanded=\"false\"\r\n                            aria-controls=\"panelsStayOpen-collapseOne\">\r\n                            Search\r\n                        </button>\r\n                    </h2>\r\n\r\n                    <div id=\"panelsStayOpen-collapseOne\" class=\"accordion-collapse collapse\"\r\n                        aria-labelledby=\"panelsStayOpen-headingOne\" data-bs-parent=\"#accordionPanelsStayOpenExample\">\r\n                        <div class=\"accordion-body\">\r\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <h4>Search</h4>\r\n                <div class=\"row\">\r\n                    <!-- Driver Name -->\r\n                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"driverName\">Driver Name</label>\r\n                            <input type=\"text\" id=\"driverName\" formControlName=\"driverName\" class=\"form-control\"\r\n                                placeholder=\"Enter Driver Name\" />\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driver Name<span class=\"text-danger\">*</span></label>\r\n                            <select type=\"text\" class=\"form-select\" formControlName=\"driverName\"\r\n                                placeholder=\"Enter Driver Name\">\r\n                                <option value=\"\" selected disabled>Select Driver Name</option>\r\n                                <option *ngFor=\"let driverListElemnt of driverList\" value=\"{{driverListElemnt?.name}}\">\r\n                                    {{driverListElemnt?.name}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Driver Number -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"driverNumber\">Driver Number</label>\r\n                            <input type=\"text\" id=\"driverNumber\" formControlName=\"driverNumber\" class=\"form-control\"\r\n                                placeholder=\"Enter Driver Number\" />\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Trip No<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"tripNo\"\r\n                                placeholder=\"Enter Trip Number\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                          <label>From Date<span class=\"text-danger\">*</span></label>\r\n                          <!-- <input type=\"text\" formControlName=\"taxDate\" class=\"form-control\" bsDatepicker\r\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-blue' }\"\r\n                            [ngClass]=\"{ 'is-invalid': formSubmitted && f.taxDate.errors }\" /> -->\r\n                          <input type=\"text\" [owlDateTime]=\"dt3\" class=\"form-control\" [owlDateTimeTrigger]=\"dt3\"\r\n                            placeholder=\"Select From Date\" formControlName=\"fromDate\">\r\n                          <owl-date-time [pickerType]=\"'calendar'\" #dt4></owl-date-time>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                          <label>To Date<span class=\"text-danger\">*</span></label>\r\n                          <!-- <input type=\"text\" formControlName=\"taxDate\" class=\"form-control\" bsDatepicker\r\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-blue' }\"\r\n                            [ngClass]=\"{ 'is-invalid': formSubmitted && f.taxDate.errors }\" /> -->\r\n                          <input type=\"text\" [owlDateTime]=\"dt4\" class=\"form-control\" [owlDateTimeTrigger]=\"dt4\"\r\n                            placeholder=\"Select From Date\" formControlName=\"toDate\">\r\n                          <owl-date-time [pickerType]=\"'calendar'\" #dt3></owl-date-time>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                    <!-- Vehicle Number -->\r\n                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"vehicleNumber\">Vehicle Number</label>\r\n                            <input type=\"text\" id=\"vehicleNumber\" formControlName=\"vehiclenumber\" class=\"form-control\"\r\n                                placeholder=\"Enter Vehicle Number\" />\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Vehicle Number <span class=\"text-danger\">*</span></label>\r\n                            <select type=\"text\" class=\"form-select\" formControlName=\"vehiclenumber\"\r\n                                placeholder=\"Select Vehicle Number\">\r\n                                <option value=\"\" selected disabled>Select Vehicle Number</option>\r\n                                <option *ngFor=\"let vehicleListElement of vehicleList\"\r\n                                    value=\"{{vehicleListElement.vehicleNumber}}\">{{vehicleListElement.vehicleNumber}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Status -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"status\">Status</label>\r\n                            <select id=\"status\" formControlName=\"status\" class=\"form-select\">\r\n                                <option value=\"\" disabled selected>Select Status</option>\r\n                                <option value=\"APPROVED\">APPROVED</option>\r\n                                <option value=\"INPROGRESS\">IN PROGRESS</option>\r\n                                <option value=\"FORWARDED\">FORWARDED</option>\r\n                                <option value=\"REQUESTFORCLARIFICATION\">REQUEST FOR CLARIFICATION</option>\r\n                                <option value=\"REJECT\">REJECT</option>\r\n                                <option value=\"SUBMITTED\">SUBMITTED</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n                <!-- Submit and Cancel buttons -->\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col-lg-12 text-end\">\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"submit\" class=\"btn btn-outline-info list-button-container\"\r\n                                (click)=\"search()\"><span class=\"list-text-alaign-center\">Submit</span></button>\r\n                            <button type=\"button\" class=\"btn btn-outline-secondary list-button-container\"\r\n                                (click)=\"onclear()\"><span class=\"list-text-alaign-center\">Clear</span></button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n            </div>\r\n            </div>\r\n            </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"outer-container\">\r\n    <div class=\"button-container\">\r\n        <!-- <button class=\"btn btn-outline-success list-button-container\" [routerLink]=\"['/container/trip-detail/add']\">\r\n            <span class=\"list-text-alaign-center\">Add</span>\r\n        </button> -->\r\n        <button class=\"btn btn-outline-secondary list-button-container\" (click)=\"onEdit()\" [disabled]=\"!editEnable\">\r\n            <span class=\"list-text-alaign-center\">Edit</span>\r\n        </button>\r\n        <button class=\"btn btn-outline-warning list-button-container\" (click)=\"onView()\" [disabled]=\"!viewEnable\">\r\n            <span class=\"list-text-alaign-center\">View</span>\r\n        </button>\r\n        <!-- <button (click)=\"onclear()\">\r\n            <span>Clear</span>\r\n        </button> -->\r\n    </div>\r\n</div>\r\n<!-- <app-card [hidHeader]=\"true\" blockClass=\"table-border-style\" class=\"list-panel\">\r\n    <div class=\"table-responsive text-center\">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table-design\">\r\n                <ng-container matColumnDef=\"serialNo\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> S.No </th>\r\n                    <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-center\"> {{ i + 1 }} </td>\r\n                </ng-container>\r\n\r\n\r\n                <ng-container matColumnDef=\"tripNumber\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">Trip Number </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.tripNumber}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"createdDate\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> CreatedDate </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.createdDate | date:\r\n                        'dd-MM-yyyy'}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"vehicleNumber\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> VehicleNumber </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.vehicleNumber}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"customerName\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">CustomerName</th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.customerName}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"visitingPlace\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> VisitingPlace </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.visitingPlace}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"driverName\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Driver Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.driverName}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"totalRent\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">TotalRent </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.totalRent}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n                        <span class=\"badge m-r-5 badge-light-success\"\r\n                            *ngIf=\"element?.status == 'APPROVED'\">{{element?.status}}</span>\r\n                        <span class=\"badge m-r-5 badge-light-info\"\r\n                            *ngIf=\"element?.status == 'INPROGRESS'\">{{element?.status}}</span>\r\n                        <span class=\"badge m-r-5 badge-light-secondary\"\r\n                            *ngIf=\"element?.status == 'FORWARDED'\">{{element?.status}}</span>\r\n                        <span class=\"badge m-r-5 badge-light-warning \"\r\n                            *ngIf=\"element?.status == 'REQUESTFORCLARIFICATION'\">{{element?.status}}</span>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Action </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n                        <mat-radio-button (click)=\"onSelect(element)\"></mat-radio-button>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <div *ngIf=\"isLoading\" class=\"table-loader\">\r\n                <mat-spinner diameter=\"64\"></mat-spinner>\r\n            </div>\r\n            <mat-paginator [length]=\"totelCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\"\r\n                (page)=\"pageEvent($event)\">\r\n            </mat-paginator>\r\n        </div>\r\n    </div>\r\n</app-card> -->\r\n\r\n<app-mat-table-configuration [columns]=\"columns\" [actionKeys]=\"actionKeys\" [dataSource]=\"dataSource\"\r\n    [totalCount]=\"totelCount\" [pageSize]=\"pageSize\" (paginationEvent)=\"handlePagination($event)\"\r\n    (checkboxAction)=\"onChecked($event)\">\r\n</app-mat-table-configuration>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-4 mt-2\">\r\n        <div class=\"dropdown\">\r\n            <button class=\"btn btn-outline-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\"\r\n                aria-expanded=\"false\">\r\n                Download\r\n            </button>\r\n            <ul class=\"dropdown-menu\">\r\n                <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"exportToExcel()\">Excel</a></li>\r\n                <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"generatePDF()\">PDF</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/dashboard']\">Home</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/container/trip-detail/list']\">Trip Details</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item active\" aria-current=\"page\">View</li>\r\n</ul>\r\n\r\n<app-card [hidHeader]=\"true\" class=\"view-panel\">\r\n  <h4>Trip Details</h4>\r\n  <hr>\r\n  <div class=\"container\">\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Vehicle Number</label>\r\n        <p class=\"view-text\">{{getTripDetails?.vehicleNumber}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Customer Name</label>\r\n        <p class=\"view-text\">{{getTripDetails?.customerName}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Customer Mobile Number</label>\r\n        <p class=\"view-text\">{{getTripDetails?.customerMobileNumber}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Driver Name</label>\r\n        <p class=\"view-text\">{{getTripDetails?.driverName}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Starting KM</label>\r\n        <p class=\"view-text\">{{getTripDetails?.startingKM}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Closing KM</label>\r\n        <p class=\"view-text\">{{getTripDetails?.closingKM}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Used KM</label>\r\n        <p class=\"view-text\">{{getTripDetails?.usedKM}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">AC or Non-AC</label>\r\n        <p class=\"view-text\">{{getTripDetails?.acOrNonAc}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Starting Time</label>\r\n        <p class=\"view-text\">{{getTripDetails?.startingTime}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Closing Time</label>\r\n        <p class=\"view-text\">{{getTripDetails?.closingTime}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Total Time</label>\r\n        <p class=\"view-text\">{{getTripDetails?.totalTime}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Visiting Place</label>\r\n        <p class=\"view-text\">{{getTripDetails?.visitingPlace}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Advance Amount</label>\r\n        <p class=\"view-text\">{{getTripDetails?.advanceAmount}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Total Rent</label>\r\n        <p class=\"view-text\">{{getTripDetails?.totalRent}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Diesel Amount</label>\r\n        <p class=\"view-text\">{{getTripDetails?.diesel}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Driver Payment</label>\r\n        <p class=\"view-text\">{{getTripDetails?.driverPayment}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Received Amount</label>\r\n        <p class=\"view-text\">{{getTripDetails?.receivedAmount}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Pending Amount</label>\r\n        <p class=\"view-text\">{{getTripDetails?.pendingAmount}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Submitted By</label>\r\n        <p class=\"view-text\">{{getTripDetails?.submittedBy}}</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"view-label\">Status</label>\r\n        <p class=\"view-text\">{{getTripDetails?.status}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <hr>\r\n    <div class=\"row modal-footer\" *ngIf=\"tripLogDetails?.length > 0\">\r\n      <h4>Trip Log Details</h4>\r\n      <hr>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>S.No</th>\r\n              <th>Application No</th>\r\n              <th>User Name</th>\r\n              <th>Action</th>\r\n              <th>Comments</th>\r\n              <th>Remark</th>\r\n              <th>Created Date</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let element of tripLogDetails; let i = index\">\r\n              <td>{{ i+1 }}</td>\r\n              <td>{{ element.applnNo }}</td>\r\n              <td>{{ element.userName }}</td>\r\n              <td class=\"text-center\">\r\n                <span *ngIf=\"element?.action == 'SUBMITTED'\" class=\"badge m-r-5 badge-light-primary\">\r\n                  {{element?.action}}</span>\r\n                <span *ngIf=\"element?.action == 'APPROVED'\" class=\"badge m-r-5 badge-light-success\">\r\n                  {{element?.action}}</span>\r\n                <span *ngIf=\"element?.action == 'REQUESTFORCLARIFICATION'\" class=\"badge m-r-5 badge-light-secondary\">\r\n                  {{element?.action}}</span>\r\n                <span *ngIf=\"element?.action == 'INPROGRESS'\" class=\"badge m-r-5 badge-light-success\">\r\n                  {{element?.action}}</span>\r\n                <span *ngIf=\"element?.action == 'FORWARDED'\" class=\"badge m-r-5 badge-light-warning\">\r\n                  {{element?.action}}</span>\r\n                <span *ngIf=\"element?.action == 'UPDATED'\" class=\"badge m-r-5 badge-light-primary\">\r\n                  {{element?.action}}</span>\r\n              </td>\r\n              <td>{{ element.comments }}</td>\r\n              <td>{{ element.remarks }}</td>\r\n              <td>{{ element.createdDate | date: 'dd-MM-yy HH:mm:ss' }}</td>\r\n\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-3\">\r\n      <div class=\"col-lg-12 text-end\">\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"back()\">Back</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-card>"

/***/ }),

/***/ "./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Default style for the select (light color when no option is selected) */\n.form-select {\n  color: rgba(0, 0, 0, 0.5);\n  /* Light color for placeholder */ }\n/* When an option is selected, change text color to black */\n.form-select:valid {\n  color: black; }\n/* Ensure the placeholder option appears light inside the dropdown */\n.form-select option:disabled {\n  color: rgba(0, 0, 0, 0.5); }\n/* Ensure the dropdown options are always black */\n.form-select option {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyL3RyaXAtZGV0YWlscy90cmlwLWRldGFpbHMvYWRkLWVkaXQtdHJpcC1kZXRhaWxzL0Q6XFwxOS1WLURldmVyIEhvbGRheXMgVUlcXERIRC1PTEQtRGVzaWduc1xcRGV2YXJIb2xpZGF5c1VJL3NyY1xcYXBwXFxjb250YWluZXJcXHRyaXAtZGV0YWlsc1xcdHJpcC1kZXRhaWxzXFxhZGQtZWRpdC10cmlwLWRldGFpbHNcXGFkZC1lZGl0LXRyaXAtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwRUFBQTtBQUNBO0VBQ0kseUJBQXlCO0VBQUUsZ0NBQUEsRUFBaUM7QUFHaEUsMkRBQUE7QUFDQTtFQUNJLFlBQVksRUFBQTtBQUdoQixvRUFBQTtBQUNBO0VBQ0kseUJBQXlCLEVBQUE7QUFHN0IsaURBQUE7QUFDQTtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci90cmlwLWRldGFpbHMvdHJpcC1kZXRhaWxzL2FkZC1lZGl0LXRyaXAtZGV0YWlscy9hZGQtZWRpdC10cmlwLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubmdiLWRwLWNvbnRhaW5lciB7XHJcbi8vICAgICB6LWluZGV4OiAxMDUwICFpbXBvcnRhbnQ7XHJcbi8vICAgfVxyXG4vKiBEZWZhdWx0IHN0eWxlIGZvciB0aGUgc2VsZWN0IChsaWdodCBjb2xvciB3aGVuIG5vIG9wdGlvbiBpcyBzZWxlY3RlZCkgKi9cclxuLmZvcm0tc2VsZWN0IHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIExpZ2h0IGNvbG9yIGZvciBwbGFjZWhvbGRlciAqL1xyXG59XHJcblxyXG4vKiBXaGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZCwgY2hhbmdlIHRleHQgY29sb3IgdG8gYmxhY2sgKi9cclxuLmZvcm0tc2VsZWN0OnZhbGlkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLyogRW5zdXJlIHRoZSBwbGFjZWhvbGRlciBvcHRpb24gYXBwZWFycyBsaWdodCBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbi5mb3JtLXNlbGVjdCBvcHRpb246ZGlzYWJsZWQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLyogRW5zdXJlIHRoZSBkcm9wZG93biBvcHRpb25zIGFyZSBhbHdheXMgYmxhY2sgKi9cclxuLmZvcm0tc2VsZWN0IG9wdGlvbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddEditTripDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditTripDetailsComponent", function() { return AddEditTripDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");







let AddEditTripDetailsComponent = class AddEditTripDetailsComponent {
    constructor(formBuilder, toastrMsg, commonService, router, activatedRoute) {
        this.formBuilder = formBuilder;
        this.toastrMsg = toastrMsg;
        this.commonService = commonService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.screenName = 'Add';
        this.maxDate = new Date();
        this.tripId = '';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(tripIdResponse => {
            if (tripIdResponse.id) {
                this.tripId = tripIdResponse.id;
                this.getTripDetailsForm(tripIdResponse.id, tripIdResponse.status);
                this.routingStatus = tripIdResponse.status;
            }
        });
        this.tripFormDetails = this.formBuilder.group({
            createdDate: [''],
            createdBy: [''],
            modifiedDate: [''],
            modifiedBy: [''],
            vehicleNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerMobileNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            driverName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            driverNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startingKM: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            closingKM: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            usedKM: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startingTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            closingTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            totalTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            acOrNonAc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            acStartingKM: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            acClosingKM: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            usedAcKM: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            acNote: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            visitingPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            advanceType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            advanceAmount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dayRent: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toll: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            totalRent: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            diesel: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            driverPayment: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            permitAmount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            receivedAmount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pendingAmount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // balanceAmount: ['', Validators.required],
            profitAmount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            submittedBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            discountAmount: ['0'],
            status: [''],
            remark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            // verifiedByManager: ['', Validators.required],
            // verifiedByProprietor: ['', Validators.required]
        });
        this.tripFormDetails.get('startingTime').valueChanges.subscribe(() => {
            this.calculateTotalHours();
        });
        this.tripFormDetails.get('closingTime').valueChanges.subscribe(() => {
            this.calculateTotalHours();
        });
        this.commonService.activeVechicle().subscribe(vehicleResponse => {
            if (vehicleResponse.status == 's') {
                this.vehicleList = vehicleResponse.data;
            }
            else {
                this.vehicleList = [];
            }
        });
        this.commonService.activeDriver().subscribe(driverResponse => {
            if (driverResponse.status == 's') {
                this.driverList = driverResponse.data;
            }
            else {
                this.driverList = [];
            }
        });
    }
    /* calculateTotalHours() {
      const startTime = this.tripFormDetails.get('startingTime').value;
      const closingTime = this.tripFormDetails.get('closingTime').value;
      if (startTime && closingTime) {
        const start = new Date(startTime);
        const end = new Date(closingTime);
  
        if (start < end) {
          const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
          this.tripFormDetails.patchValue({ totalTime: diff.toFixed(2) });
        } else {
          this.tripFormDetails.patchValue({ totalTime: 'Invalid Time' });
          this.toastrMsg.error("Please Select Correct Date");
        }
      }
    } */
    calculateTotalHours() {
        const startTime = this.tripFormDetails.get('startingTime').value;
        const closingTime = this.tripFormDetails.get('closingTime').value;
        if (startTime && closingTime) {
            const start = new Date(startTime);
            const end = new Date(closingTime);
            if (start < end) {
                const diffInMinutes = (end.getTime() - start.getTime()) / (1000 * 60);
                const totalHours = Math.floor(diffInMinutes / 60) + (diffInMinutes % 60) / 100;
                this.tripFormDetails.patchValue({ totalTime: totalHours.toFixed(2) });
            }
            else {
                this.tripFormDetails.patchValue({ totalTime: 'Invalid Time' });
                this.toastrMsg.error("Please Select Correct Date");
            }
        }
    }
    get tripForm() {
        return this.tripFormDetails.controls;
    }
    submit(tripFormDetails, level) {
        this.leveStatus = level;
        setTimeout(() => {
            if (this.tripFormDetails.invalid) {
                this.formSubmitted = true;
            }
            else if (tripFormDetails.value.startingKM >= tripFormDetails.value.closingKM) {
                this.toastrMsg.warning('Please enter Starting KM greater than Closing KM');
            }
            else if (tripFormDetails.value.acOrNonAc == 'AC' && tripFormDetails.value.acStartingKM >= tripFormDetails.value.acClosingKM) {
                this.toastrMsg.warning('Please enter AC Starting KM greater than AC Closing KM');
            }
            else {
                this.submitPopUp.show();
            }
        }, 100);
    }
    acDetect(event) {
        if (event === 'Non-AC') {
            this.tripFormDetails.controls['usedAcKM'].clearValidators();
            this.tripFormDetails.controls["usedAcKM"].updateValueAndValidity();
            this.tripFormDetails.controls['acStartingKM'].clearValidators();
            this.tripFormDetails.controls["acStartingKM"].updateValueAndValidity();
            this.tripFormDetails.controls['acClosingKM'].clearValidators();
            this.tripFormDetails.controls["acClosingKM"].updateValueAndValidity();
            this.tripFormDetails.controls['acNote'].clearValidators();
            this.tripFormDetails.controls["acNote"].updateValueAndValidity();
            this.acValidationFlag = true;
            this.tripFormDetails.patchValue({
                usedAcKM: '',
                acStartingKM: '',
                acClosingKM: ''
            });
        }
        else {
            this.tripFormDetails.controls['usedAcKM'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.tripFormDetails.controls["usedAcKM"].updateValueAndValidity();
            this.tripFormDetails.controls['acStartingKM'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.tripFormDetails.controls["acStartingKM"].updateValueAndValidity();
            this.tripFormDetails.controls['acClosingKM'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.tripFormDetails.controls["acClosingKM"].updateValueAndValidity();
            this.tripFormDetails.controls['acNote'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.tripFormDetails.controls["acNote"].updateValueAndValidity();
            this.acValidationFlag = false;
            this.tripFormDetails.patchValue({
                usedAcKM: this.getTripDetails.usedAcKM,
                acStartingKM: this.getTripDetails.acStartingKM,
                acClosingKM: this.getTripDetails.acClosingKM
            });
        }
    }
    finalSubmit() {
        if (this.tripId && this.leveStatus == 'Level 1') {
            this.updateTripDetails('INPROGRESS');
        }
        else if (this.leveStatus == 'Level 2') {
            this.forwardApprove();
        }
        else if (this.leveStatus == 'Level 3') {
            this.updateTripDetails('APPROVED');
        }
        else if (this.leveStatus == 'Level 1 REQ') {
            this.requestForClarification();
        }
        else if (this.leveStatus == 'Level 1') {
            this.addTripDetails();
        }
        else {
            this.toastrMsg.error('Somthing Went Wrong');
        }
    }
    forwardApprove() {
        this.btnLoder = true;
        this.commonService.getTripDetailsForward({
            id: this.tripId,
            status: "FORWARDED",
            remarks: this.tripFormDetails.value.remark || '',
        }).subscribe(res => {
            this.btnLoder = false;
            if (res.status = 's') {
                this.router.navigate(['/container/trip-detail/inprogresslist']);
                this.toastrMsg.success("Forwared submitted successfully");
                this.submitPopUp.hide();
            }
            else {
                this.toastrMsg.error(res.userDisplayMesg);
            }
        });
    }
    approved() {
        this.btnLoder = true;
        this.commonService.getTripDetailsForward({
            id: this.tripId,
            status: "APPROVED",
            remarks: this.tripFormDetails.value.remark || '',
        }).subscribe(res => {
            this.btnLoder = false;
            if (res.status = 's') {
                this.toastrMsg.success("Forwared submitted successfully");
                this.router.navigate(['/container/trip-detail/forwardlist']);
                this.submitPopUp.hide();
            }
            else {
                this.toastrMsg.error(res.userDisplayMesg);
            }
        });
    }
    requestForClarification() {
        this.btnLoder = true;
        this.commonService.getTripDetailsForward({
            id: this.tripId,
            status: "REQUESTFORCLARIFICATION",
            remarks: this.tripFormDetails.value.remark || '',
        }).subscribe(res => {
            this.btnLoder = false;
            if (res.status = 's') {
                this.toastrMsg.success("Forwared submitted successfully");
                if (this.routingStatus == 'forward') {
                    this.router.navigate(['/container/trip-detail/forwardlist']);
                }
                else if (this.routingStatus == 'approved') {
                    this.router.navigate(['/container/trip-detail/inprogresslist']);
                }
                else {
                    this.router.navigate(['/container/trip-detail/list']);
                }
                this.submitPopUp.hide();
            }
            else {
                this.toastrMsg.error(res.userDisplayMesg);
            }
        });
    }
    addTripDetails() {
        const tripFormDetails = this.tripFormDetails.value;
        const addTripDetailsRequest = {
            acClosingKM: tripFormDetails.acClosingKM || '',
            acNote: tripFormDetails.acNote || '',
            acOrNonAc: tripFormDetails.acOrNonAc || '',
            acStartingKM: tripFormDetails.acStartingKM || '',
            advanceAmount: tripFormDetails.advanceAmount || '',
            advanceType: tripFormDetails.advanceType || '',
            balanceAmount: tripFormDetails.pendingAmount || '',
            closingKM: tripFormDetails.closingKM || '',
            closingTime: moment__WEBPACK_IMPORTED_MODULE_4__(tripFormDetails.closingTime).format('YYYY-MM-DD HH:mm:ss') || '',
            customerMobileNumber: tripFormDetails.customerMobileNumber || '',
            driverMobileNumber: tripFormDetails.driverNumber || '',
            customerName: tripFormDetails.customerName || '',
            date: moment__WEBPACK_IMPORTED_MODULE_4__(tripFormDetails.date).format('YYYY-MM-DD') || '',
            dayRent: tripFormDetails.dayRent || '',
            diesel: tripFormDetails.diesel || '',
            driverName: tripFormDetails.driverName || '',
            driverPayment: tripFormDetails.driverPayment || '',
            paymentType: tripFormDetails.paymentType || '',
            pendingAmount: tripFormDetails.pendingAmount || '',
            permitAmount: tripFormDetails.permitAmount || '',
            profitAmount: tripFormDetails.profitAmount || '',
            receivedAmount: tripFormDetails.receivedAmount || '',
            startingKM: tripFormDetails.startingKM || '',
            startingTime: moment__WEBPACK_IMPORTED_MODULE_4__(tripFormDetails.startingTime).format('YYYY-MM-DD HH:mm:ss') || '',
            status: 'INPROGRESS',
            submittedBy: tripFormDetails.submittedBy || '',
            toll: tripFormDetails.toll || '',
            totalRent: tripFormDetails.totalRent || '',
            totalTime: tripFormDetails.totalTime || '',
            usedAcKM: tripFormDetails.usedAcKM || '',
            usedKM: tripFormDetails.usedKM || '',
            vehicleNumber: tripFormDetails.vehicleNumber || '',
            visitingPlace: tripFormDetails.visitingPlace || '',
            verifiedByManager: tripFormDetails.verifiedByManager || '',
            verifiedByProprietor: tripFormDetails.verifiedByProprietor || '',
            discount: tripFormDetails.discountAmount || '',
            remarks: tripFormDetails.remark || '',
        };
        this.btnLoder = true;
        this.commonService.tripDetailAddSubmit(addTripDetailsRequest).subscribe(addTripDetailsResponse => {
            this.btnLoder = false;
            if (addTripDetailsResponse.status = 's') {
                this.submitPopUp.hide();
                this.toastrMsg.success("Vehicle details submitted successfully");
                this.router.navigate(['/container/trip-detail/list']);
            }
            else {
                this.toastrMsg.error(addTripDetailsResponse.userDisplayMesg);
            }
        });
    }
    startingKM(startingKMElemant) {
        if (startingKMElemant) {
            if (this.tripFormDetails.controls.closingKM.value) {
                const usedKM = parseFloat(startingKMElemant) + parseFloat(this.tripFormDetails.controls.closingKM.value);
                this.tripFormDetails.patchValue({
                    usedKM: usedKM
                });
            }
            else {
                this.tripFormDetails.patchValue({
                    usedKM: 0
                });
            }
        }
        else {
            this.tripFormDetails.patchValue({
                usedKM: 0
            });
        }
    }
    closeingKM(closingKMElemant) {
        if (closingKMElemant) {
            if (this.tripFormDetails.controls.closingKM.value) {
                const usedKM = parseFloat(closingKMElemant) - parseFloat(this.tripFormDetails.controls.startingKM.value);
                this.tripFormDetails.patchValue({
                    usedKM: usedKM
                });
            }
            else {
                this.tripFormDetails.patchValue({
                    usedKM: 0
                });
            }
        }
        else {
            this.tripFormDetails.patchValue({
                usedKM: 0
            });
        }
    }
    numbersOnly(event) {
        const charCode = event.keyCode || event.which;
        // Allow navigation keys, Tab, Enter, Backspace, and Delete
        if (event.ctrlKey || event.metaKey || // Allow Ctrl (for copy-paste)
            charCode === 8 || // Backspace
            charCode === 46 || // Delete
            charCode === 37 || // Left Arrow
            charCode === 39 || // Right Arrow
            charCode === 9 || // Tab
            charCode === 13 // Enter
        ) {
            return;
        }
        // Allow only numeric input (0-9) from top row and numpad
        if (!/^\d$/.test(event.key)) {
            event.preventDefault(); // Block non-numeric keys
        }
    }
    getReceivedAmount(receivedAmount) {
        const advanceAmount = this.tripFormDetails.controls.advanceAmount.value ? parseFloat(this.tripFormDetails.controls.advanceAmount.value) : 0;
        const totalRentAmount = this.tripFormDetails.controls.totalRent.value ? parseFloat(this.tripFormDetails.controls.totalRent.value) : 0;
        const dayRent = this.tripFormDetails.controls.dayRent.value ? parseFloat(this.tripFormDetails.controls.dayRent.value) : 0;
        const discount = this.tripFormDetails.controls.discountAmount.value ? parseFloat(this.tripFormDetails.controls.discountAmount.value) : 0;
        const finalAmount = advanceAmount + parseFloat(receivedAmount);
        if (totalRentAmount < finalAmount) {
            this.tripFormDetails.patchValue({
                receivedAmount: ''
            });
        }
        if (receivedAmount) {
            this.tripFormDetails.patchValue({
                // pendingAmount: (totalRentAmount - (advanceAmount + parseFloat(receivedAmount))),
                pendingAmount: ((totalRentAmount + dayRent) - (advanceAmount + receivedAmount + discount)),
                balanceAmount: (totalRentAmount - (advanceAmount + parseFloat(receivedAmount)))
            });
        }
        else if (this.tripFormDetails.controls.advanceAmount.value) {
            this.tripFormDetails.patchValue({
                pendingAmount: advanceAmount,
                balanceAmount: advanceAmount
            });
        }
        else {
            this.tripFormDetails.patchValue({
                pendingAmount: 0,
                balanceAmount: 0
            });
        }
    }
    getTotalRentAmount(totalRentAmount) {
        const advanceAmount = this.tripFormDetails.controls.advanceAmount.value ? parseFloat(this.tripFormDetails.controls.advanceAmount.value) : 0;
        const receivedAmount = this.tripFormDetails.controls.receivedAmount.value ? parseFloat(this.tripFormDetails.controls.receivedAmount.value) : 0;
        const dayRent = this.tripFormDetails.controls.dayRent.value ? parseFloat(this.tripFormDetails.controls.dayRent.value) : 0;
        const discount = this.tripFormDetails.controls.discountAmount.value ? parseFloat(this.tripFormDetails.controls.discountAmount.value) : 0;
        if (this.tripFormDetails.controls.totalRent.value) {
            this.tripFormDetails.patchValue({
                pendingAmount: ((totalRentAmount + dayRent) - (advanceAmount + receivedAmount + discount)),
                balanceAmount: (parseFloat(totalRentAmount) - (advanceAmount + receivedAmount))
            });
        }
        else {
            this.tripFormDetails.patchValue({
                pendingAmount: 0,
                balanceAmount: 0
            });
        }
    }
    /* getDiscountAmount(discountAmount) {
      const advanceAmount = this.tripFormDetails.controls.advanceAmount.value ? parseFloat(this.tripFormDetails.controls.advanceAmount.value) : 0;
      const receivedAmount = this.tripFormDetails.controls.receivedAmount.value ? parseFloat(this.tripFormDetails.controls.receivedAmount.value) : 0;
      const dayRent = this.tripFormDetails.controls.dayRent.value ? parseFloat(this.tripFormDetails.controls.dayRent.value) : 0;
      const discount = this.tripFormDetails.controls.discountAmount.value ? parseFloat(this.tripFormDetails.controls.discountAmount.value) : 0;
      if (this.tripFormDetails.controls.totalRent.value) {
        this.tripFormDetails.patchValue({
          pendingAmount: ((discountAmount + dayRent) - (advanceAmount + receivedAmount + discount)),
          // pendingAmount: (parseFloat(totalRentAmount) - (advanceAmount + receivedAmount)),
          balanceAmount: (parseFloat(discountAmount) - (advanceAmount + receivedAmount))
        });
      } else {
        this.tripFormDetails.patchValue({
          pendingAmount: 0,
          balanceAmount: 0
        });
      }
    } */
    /* getAdvanceAmount(advanceAmount) {
      const totalRentAmount = this.tripFormDetails.controls.totalRent.value ? parseFloat(this.tripFormDetails.controls.totalRent.value) : 0;
      const receivedAmount = this.tripFormDetails.controls.receivedAmount.value ? parseFloat(this.tripFormDetails.controls.receivedAmount.value) : 0;
      const pendingAmount = this.tripFormDetails.controls.pendingAmount.value ? parseFloat(this.tripFormDetails.controls.pendingAmount.value) : 0;
      const dayRent = this.tripFormDetails.controls.dayRent.value ? parseFloat(this.tripFormDetails.controls.dayRent.value) : 0;
      const discount = this.tripFormDetails.controls.discountAmount.value ? parseFloat(this.tripFormDetails.controls.discountAmount.value) : 0;
  
      const finalAmount = parseFloat(advanceAmount) + receivedAmount
      if (totalRentAmount < finalAmount) {
        this.tripFormDetails.patchValue({
          advanceAmount: ''
        });
      }
      if (this.tripFormDetails.controls.advanceAmount.value &&
        this.tripFormDetails.controls.totalRent.value) {
        this.tripFormDetails.patchValue({
          // Pending Amount = ((totalRentAmount + Day Rent) - (parseFloat(advanceAmount) + receivedAmount + discount))
          pendingAmount: ((totalRentAmount + dayRent) - (parseFloat(advanceAmount) + receivedAmount + discount)),
          balanceAmount: (totalRentAmount - (parseFloat(advanceAmount) + receivedAmount))
        });
      } else if (this.tripFormDetails.controls.receivedAmount.value) {
        this.tripFormDetails.patchValue({
          pendingAmount: receivedAmount,
          balanceAmount: receivedAmount
        });
      } else {
        this.tripFormDetails.patchValue({
          pendingAmount: 0,
          balanceAmount: 0
        });
      }
  
    } */
    getStaringKM(statingKM) {
        this.commonService.getStatingKM(statingKM).subscribe(vehicleResponse => {
            if (vehicleResponse.status == 's') {
                this.tripFormDetails.patchValue({
                    startingKM: vehicleResponse.data.closingKM,
                    closingKM: 0
                });
                if (vehicleResponse.data.closingKM && this.tripFormDetails.controls.closingKM.value) {
                    this.tripFormDetails.patchValue({
                        usedKM: parseFloat(this.tripFormDetails.controls.closingKM.value) - parseFloat(vehicleResponse.data.closingKM),
                    });
                }
                else {
                    this.tripFormDetails.patchValue({
                        usedKM: 0,
                        closingKM: 0
                    });
                }
            }
            else {
                this.tripFormDetails.patchValue({
                    startingKM: 0,
                    usedKM: 0,
                    closingKM: 0
                });
            }
        });
    }
    /*  dayRentCalculation(dayRentAmount) {
       const totalRentAmount = this.tripFormDetails.controls.totalRent.value ? parseFloat(this.tripFormDetails.controls.totalRent.value) : 0;
       const receivedAmount = this.tripFormDetails.controls.receivedAmount.value ? parseFloat(this.tripFormDetails.controls.receivedAmount.value) : 0;
       const advanceAmount = this.tripFormDetails.controls.advanceAmount.value ? parseFloat(this.tripFormDetails.controls.advanceAmount.value) : 0;
       const discount = this.tripFormDetails.controls.discountAmount.value ? parseFloat(this.tripFormDetails.controls.discountAmount.value) : 0;
   
       const dayRent = dayRentAmount ? parseFloat(dayRentAmount) : 0;
       const newPendingAmount = (totalRentAmount + dayRent) - (advanceAmount + receivedAmount + discount);
       const newBalanceAmount = totalRentAmount + dayRent - (advanceAmount + receivedAmount);
   
       this.tripFormDetails.patchValue({
         pendingAmount: newPendingAmount,
         balanceAmount: newBalanceAmount
       });
     } */
    acStaringKmCalculation(startingKM) {
        // formula <==> ("u = c - s")
        if (startingKM && this.tripFormDetails.controls.acClosingKM.value) {
            this.tripFormDetails.patchValue({
                usedAcKM: parseFloat(this.tripFormDetails.controls.acClosingKM.value) - parseFloat(startingKM)
            });
        }
    }
    acClosingKmCalculation(closingKM) {
        // formula <==> ("u = c - s")
        if (closingKM && this.tripFormDetails.controls.acStartingKM.value) {
            this.tripFormDetails.patchValue({
                usedAcKM: parseFloat(closingKM) - parseFloat(this.tripFormDetails.controls.acStartingKM.value)
            });
        }
    }
    profitAmoutCalculation(string) {
        /* Formula < == > ("Profit = Total Rent - (Toll + Fuel + Driver Payment + Permit+discount)+dayRent") */
        const totalRentAmount = this.tripFormDetails.value.totalRent ? parseFloat(this.tripFormDetails.value.totalRent) : 0;
        const tollAmount = this.tripFormDetails.value.toll ? parseFloat(this.tripFormDetails.value.toll) : 0;
        const fuelAmount = this.tripFormDetails.value.diesel ? parseFloat(this.tripFormDetails.value.diesel) : 0;
        const driverPaymentAmount = this.tripFormDetails.value.driverPayment ? parseFloat(this.tripFormDetails.value.driverPayment) : 0;
        const permitAmount = this.tripFormDetails.value.permitAmount ? parseFloat(this.tripFormDetails.value.permitAmount) : 0;
        const discount = this.tripFormDetails.value.discountAmount ? parseFloat(this.tripFormDetails.value.discountAmount) : 0;
        const dayRent = this.tripFormDetails.value.dayRent ? parseFloat(this.tripFormDetails.value.dayRent) : 0;
        const advanceAmount = this.tripFormDetails.value.advanceAmount ? parseFloat(this.tripFormDetails.value.advanceAmount) : 0;
        const receivedAmount = this.tripFormDetails.value.receivedAmount ? parseFloat(this.tripFormDetails.value.receivedAmount) : 0;
        /* Profit Amount Calculation - Start */
        // Profit = (Total Rent - (Toll + Fuel + Driver Payment + Permit + discount))+ Day Rent
        const profitAmount = (totalRentAmount - (tollAmount + fuelAmount + driverPaymentAmount + permitAmount + discount)) + dayRent;
        if (profitAmount) {
            this.tripFormDetails.patchValue({
                profitAmount: profitAmount ? profitAmount : 0
            });
        }
        /* Profit Amount Calculation - End */
        /* Pending Amount Calculation - Start */
        // Pending Amount = ((totalRentAmount +  Day Rent) - (parseFloat(advanceAmount) + receivedAmount + discount))
        const pendingAmount = ((totalRentAmount + dayRent) - (advanceAmount + receivedAmount + discount));
        if (pendingAmount) {
            this.tripFormDetails.patchValue({
                pendingAmount: pendingAmount ? pendingAmount : 0
            });
        }
        /* Pending Amount Calculation - End */
    }
    updateTripDetails(status) {
        const tripFormDetails = this.tripFormDetails.value;
        const updateTripDetailsRequest = {
            acClosingKM: tripFormDetails.acClosingKM || '',
            acNote: tripFormDetails.acNote || '',
            acOrNonAc: tripFormDetails.acOrNonAc || '',
            acStartingKM: tripFormDetails.acStartingKM || '',
            advanceAmount: tripFormDetails.advanceAmount || '',
            advanceType: tripFormDetails.advanceType || '',
            balanceAmount: tripFormDetails.balanceAmount || '',
            closingKM: tripFormDetails.closingKM || '',
            closingTime: moment__WEBPACK_IMPORTED_MODULE_4__(tripFormDetails.closingTime).format('YYYY-MM-DD HH:mm:ss') || '',
            customerMobileNumber: tripFormDetails.customerMobileNumber || '',
            customerName: tripFormDetails.customerName || '',
            date: moment__WEBPACK_IMPORTED_MODULE_4__(tripFormDetails.date).format('YYYY-MM-DD') || '',
            dayRent: tripFormDetails.dayRent || '',
            diesel: tripFormDetails.diesel || '',
            driverName: tripFormDetails.driverName || '',
            driverMobileNumber: tripFormDetails.driverNumber || '',
            driverPayment: tripFormDetails.driverPayment || '',
            paymentType: tripFormDetails.paymentType || '',
            pendingAmount: tripFormDetails.pendingAmount || '',
            permitAmount: tripFormDetails.permitAmount || '',
            profitAmount: tripFormDetails.profitAmount || '',
            receivedAmount: tripFormDetails.receivedAmount || '',
            startingKM: tripFormDetails.startingKM || '',
            startingTime: moment__WEBPACK_IMPORTED_MODULE_4__(tripFormDetails.startingTime).format('YYYY-MM-DD HH:mm:ss') || '',
            status: status,
            submittedBy: tripFormDetails.submittedBy || '',
            toll: tripFormDetails.toll || '',
            totalRent: tripFormDetails.totalRent || '',
            totalTime: tripFormDetails.totalTime || '',
            usedAcKM: tripFormDetails.usedAcKM || '',
            usedKM: tripFormDetails.usedKM || '',
            vehicleNumber: tripFormDetails.vehicleNumber || '',
            visitingPlace: tripFormDetails.visitingPlace || '',
            verifiedByManager: tripFormDetails.verifiedByManager || '',
            verifiedByProprietor: tripFormDetails.verifiedByProprietor || '',
            id: this.tripId,
            remarks: tripFormDetails.remark || '',
        };
        this.btnLoder = true;
        this.commonService.tripDetailModification(updateTripDetailsRequest).subscribe(updateTripDetailsResponse => {
            this.btnLoder = false;
            if (updateTripDetailsResponse.status = 's') {
                this.submitPopUp.hide();
                this.toastrMsg.success("Vehicle details modified successfully");
                this.router.navigate(['/container/trip-detail/list']);
            }
            else {
                this.toastrMsg.error(updateTripDetailsResponse.userDisplayMesg);
            }
        });
    }
    onDriverNameChange(event) {
        const selectedDriverName = event.target.value;
        const selectedDriver = this.driverList.find(driver => driver.name === selectedDriverName);
        if (selectedDriver) {
            this.tripFormDetails.patchValue({
                driverNumber: selectedDriver.mobileNumber
            });
        }
    }
    getTripDetailsForm(tripId, status) {
        this.commonService.getTripDetails(tripId).subscribe(getTripDetailsResponse => {
            if (getTripDetailsResponse.status == 's') {
                this.getTripDetails = getTripDetailsResponse.data;
                this.commonService.getTripDetailLogs(getTripDetailsResponse.data.tripNumber).subscribe(gettripLogDetailsResponse => {
                    if (gettripLogDetailsResponse.status == 's') {
                        this.tripLogDetails = gettripLogDetailsResponse.data;
                    }
                    else {
                        this.tripLogDetails = [];
                    }
                });
                if (status == 'forward') {
                    // this.tripFormDetails.disable();
                    this.isDisabled = (status.status != 'forward') ? false : true;
                    this.isDisableds = (status.status != 'forward') ? true : false;
                    this.forwardApproveBtnShow = true;
                }
                else if (status == 'approved') {
                    this.tripFormDetails.disable();
                    this.tripFormDetails.get('remark').enable();
                    this.approveBtnShow = true;
                }
                this.tripFormDetails.patchValue({
                    acClosingKM: getTripDetailsResponse.data.acClosingKM,
                    acNote: getTripDetailsResponse.data.acNote,
                    acOrNonAc: getTripDetailsResponse.data.acOrNonAc,
                    acStartingKM: getTripDetailsResponse.data.acStartingKM,
                    advanceAmount: getTripDetailsResponse.data.advanceAmount,
                    advanceType: getTripDetailsResponse.data.advanceType,
                    balanceAmount: getTripDetailsResponse.data.balanceAmount,
                    closingKM: getTripDetailsResponse.data.closingKM,
                    customerMobileNumber: getTripDetailsResponse.data.customerMobileNumber,
                    customerName: getTripDetailsResponse.data.customerName,
                    date: getTripDetailsResponse.data.date
                        ? moment__WEBPACK_IMPORTED_MODULE_4__(getTripDetailsResponse.data.date).format('YYYY-MM-DD')
                        : '',
                    dayRent: getTripDetailsResponse.data.dayRent,
                    diesel: getTripDetailsResponse.data.diesel,
                    driverName: getTripDetailsResponse.data.driverName,
                    driverPayment: getTripDetailsResponse.data.driverPayment,
                    paymentType: getTripDetailsResponse.data.paymentType,
                    pendingAmount: getTripDetailsResponse.data.pendingAmount,
                    permitAmount: getTripDetailsResponse.data.permitAmount,
                    profitAmount: getTripDetailsResponse.data.profitAmount,
                    receivedAmount: getTripDetailsResponse.data.receivedAmount,
                    startingKM: getTripDetailsResponse.data.startingKM,
                    status: getTripDetailsResponse.data.status,
                    submittedBy: getTripDetailsResponse.data.submittedBy,
                    driverNumber: getTripDetailsResponse.data.driverMobileNumber,
                    toll: getTripDetailsResponse.data.toll,
                    totalRent: getTripDetailsResponse.data.totalRent,
                    totalTime: getTripDetailsResponse.data.totalTime,
                    usedAcKM: getTripDetailsResponse.data.usedAcKM,
                    usedKM: getTripDetailsResponse.data.usedKM,
                    vehicleNumber: getTripDetailsResponse.data.vehicleNumber,
                    visitingPlace: getTripDetailsResponse.data.visitingPlace,
                    startingTime: getTripDetailsResponse.data.startingTime
                        ? moment__WEBPACK_IMPORTED_MODULE_4__(getTripDetailsResponse.data.startingTime).toDate()
                        : '',
                    closingTime: getTripDetailsResponse.data.closingTime
                        ? moment__WEBPACK_IMPORTED_MODULE_4__(getTripDetailsResponse.data.closingTime).toDate()
                        : '',
                    remark: getTripDetailsResponse.data.remark
                        ? getTripDetailsResponse.data.remark
                        : ''
                });
                this.acDetect(getTripDetailsResponse.data.acOrNonAc);
            }
        });
    }
    back() {
        if (this.routingStatus == 'forward') {
            this.router.navigate(['/container/trip-detail/forwardlist']);
        }
        else if (this.routingStatus == 'approved') {
            this.router.navigate(['/container/trip-detail/inprogresslist']);
        }
        else {
            this.router.navigate(['/container/trip-detail/list']);
        }
    }
};
AddEditTripDetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('submitPopUp', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddEditTripDetailsComponent.prototype, "submitPopUp", void 0);
AddEditTripDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-edit-trip-details',
        template: __webpack_require__(/*! raw-loader!./add-edit-trip-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.html"),
        styles: [__webpack_require__(/*! ./add-edit-trip-details.component.scss */ "./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], AddEditTripDetailsComponent);



/***/ }),

/***/ "./src/app/container/trip-details/trip-details/trip-details-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/trip-details-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: TripDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsRoutingModule", function() { return TripDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_edit_trip_details_add_edit_trip_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-trip-details/add-edit-trip-details.component */ "./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.ts");
/* harmony import */ var _trip_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip-details.component */ "./src/app/container/trip-details/trip-details/trip-details.component.ts");
/* harmony import */ var _view_trip_details_view_trip_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-trip-details/view-trip-details.component */ "./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.ts");
/* harmony import */ var _tripdetailsinprogress_tripdetailsinprogress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tripdetailsinprogress/tripdetailsinprogress.component */ "./src/app/container/trip-details/trip-details/tripdetailsinprogress/tripdetailsinprogress.component.ts");
/* harmony import */ var _tripdeatilsforward_tripdeatilsforward_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tripdeatilsforward/tripdeatilsforward.component */ "./src/app/container/trip-details/trip-details/tripdeatilsforward/tripdeatilsforward.component.ts");








const routes = [
    {
        path: 'list',
        component: _trip_details_component__WEBPACK_IMPORTED_MODULE_4__["TripDetailsComponent"]
    },
    {
        path: 'add',
        component: _add_edit_trip_details_add_edit_trip_details_component__WEBPACK_IMPORTED_MODULE_3__["AddEditTripDetailsComponent"]
    },
    {
        path: 'modification/:id',
        component: _add_edit_trip_details_add_edit_trip_details_component__WEBPACK_IMPORTED_MODULE_3__["AddEditTripDetailsComponent"]
    },
    {
        path: 'view/:id',
        component: _view_trip_details_view_trip_details_component__WEBPACK_IMPORTED_MODULE_5__["ViewTripDetailsComponent"]
    },
    {
        path: 'view/:id/:status',
        component: _view_trip_details_view_trip_details_component__WEBPACK_IMPORTED_MODULE_5__["ViewTripDetailsComponent"]
    },
    {
        path: 'inprogresslist',
        component: _tripdetailsinprogress_tripdetailsinprogress_component__WEBPACK_IMPORTED_MODULE_6__["TripdetailsinprogressComponent"]
    },
    {
        path: 'forwardlist',
        component: _tripdeatilsforward_tripdeatilsforward_component__WEBPACK_IMPORTED_MODULE_7__["TripdeatilsforwardComponent"]
    },
    {
        path: 'modification/:id/:status',
        component: _add_edit_trip_details_add_edit_trip_details_component__WEBPACK_IMPORTED_MODULE_3__["AddEditTripDetailsComponent"]
    },
];
let TripDetailsRoutingModule = class TripDetailsRoutingModule {
};
TripDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TripDetailsRoutingModule);



/***/ }),

/***/ "./src/app/container/trip-details/trip-details/trip-details.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/trip-details.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci90cmlwLWRldGFpbHMvdHJpcC1kZXRhaWxzL3RyaXAtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/container/trip-details/trip-details/trip-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/trip-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TripDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsComponent", function() { return TripDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/config/master-list-columns */ "./src/app/config/master-list-columns.ts");










let TripDetailsComponent = class TripDetailsComponent {
    constructor(formBuilder, commonService, router, toastrMsg) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.router = router;
        this.toastrMsg = toastrMsg;
        this.columns = src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_9__["MasterListColumns"].triplistcolumns;
        this.actionKeys = ['checkbox']; // ['edit', 'delete'] for buttons
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](); // Example data source
        this.totalCount = 10;
        this.pageSize = 10;
        this.tripDetailsCount = {};
    }
    ngOnInit() {
        this.tripFormSearchDetails = this.formBuilder.group({
            driverName: [''],
            driverNumber: [''],
            vehiclenumber: [''],
            status: [''],
            tripNo: [''],
            fromDate: [''],
            toDate: [''],
        });
        this.getAll();
        this.getTripDetailsCount();
        this.commonService.activeVechicle().subscribe(vehicleResponse => {
            if (vehicleResponse.status == 's') {
                this.vehicleList = vehicleResponse.data;
            }
            else {
                this.vehicleList = [];
            }
        });
        this.commonService.activeDriver().subscribe(driverResponse => {
            if (driverResponse.status == 's') {
                this.driverList = driverResponse.data;
            }
            else {
                this.driverList = [];
            }
        });
    }
    getTripDetailsCount() {
        const today = new Date();
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const fromDate = firstDay.toISOString().split('T')[0];
        const toDate = lastDay.toISOString().split('T')[0];
        console.log(fromDate, toDate);
        this.commonService.tripdetailsdashboardcount(fromDate, toDate).subscribe((tripdetailsdashboardcountResponse) => {
            if (tripdetailsdashboardcountResponse.status === 's') {
                this.tripDetailsCount = tripdetailsdashboardcountResponse.data[0] || {}; // Assign first object from data array
            }
            else {
                console.warn('Failed to fetch trip details:', tripdetailsdashboardcountResponse.message);
            }
        }, (error) => {
            console.error('API Error:', error);
        });
    }
    getAll(pageIndex = 0, pageSize = this.pageSize) {
        this.isLoading = true;
        const tripFormSearchDetails = this.tripFormSearchDetails.value;
        const request = {
            filters: {
                vehicleNumber: tripFormSearchDetails.vehiclenumber ? tripFormSearchDetails.vehiclenumber : '',
                customerName: '',
                customerMobileNumber: '',
                driverName: tripFormSearchDetails.driverName ? tripFormSearchDetails.driverName : '',
                visitingPlace: "",
                status: ""
            },
            paginationSize: pageSize,
            sortField: "modifiedDate",
            pageNo: pageIndex,
            sortOrder: "DESC"
        };
        this.commonService.tripDetailsSearchList(request).subscribe(response => {
            this.isLoading = false;
            if (response.status == 's' && response.data) {
                // const dataSource = response.data.contents.map((v, i) => ({
                //   ...v,
                //   sNo: i + 1
                // }));
                // console.log("dataSource", dataSource);
                // this.dataSource = new MatTableDataSource(dataSource);
                const startIndex = pageIndex * pageSize; // Calculate start index dynamically
                const dataSource = response.data.contents.map((v, i) => (Object.assign({}, v, { sNo: startIndex + i + 1 // Adjust serial number
                 })));
                console.log("dataSource", dataSource);
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](dataSource);
                setTimeout(() => {
                    if (this.dataSource.paginator) {
                        this.dataSource.paginator.pageIndex = this.paginator.pageIndex;
                        this.dataSource.paginator.length = dataSource.length;
                    }
                });
                this.totelCount = response.data.totalElements;
            }
            else {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
                this.totelCount = 0;
            }
        });
    }
    search() {
        const tripFormSearchDetails = this.tripFormSearchDetails.value;
        const request = {
            filters: {
                vehicleNumber: tripFormSearchDetails.vehiclenumber ? tripFormSearchDetails.vehiclenumber : '',
                customerName: '',
                customerMobileNumber: '',
                driverName: tripFormSearchDetails.driverName ? tripFormSearchDetails.driverName : '',
                visitingPlace: "",
                status: tripFormSearchDetails.status ? tripFormSearchDetails.status : '',
                fromDate: tripFormSearchDetails.fromDate
                    ? moment__WEBPACK_IMPORTED_MODULE_8__(tripFormSearchDetails.fromDate).format('YYYY-MM-DD')
                    : '',
                toDate: tripFormSearchDetails.toDate
                    ? moment__WEBPACK_IMPORTED_MODULE_8__(tripFormSearchDetails.toDate).format('YYYY-MM-DD') : '',
                tripNo: tripFormSearchDetails.tripNo ? tripFormSearchDetails.tripNo : '',
            },
            paginationSize: 10,
            sortField: "modifiedDate",
            pageNo: 0,
            sortOrder: "DESC"
        };
        this.commonService.tripDetailsSearchList(request).subscribe(response => {
            if (response.status === 's' && response.data) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response.data.contents);
                this.totelCount = response.data.totalElements;
            }
            else {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
            }
        });
    }
    onclear() {
        this.tripFormSearchDetails.patchValue({
            driverName: '',
            driverNumber: '',
            vehiclenumber: '',
            status: "",
        });
        this.pageSize = 10;
        this.getAll();
    }
    handlePagination(event) {
        const pageIndex = event.currentPage;
        const pageSize = event.pageSize;
        this.getAll(pageIndex, pageSize);
    }
    // onSelect(obj) {
    //   this.selectObj = obj ? obj : undefined;
    //   if (obj) {
    //     this.viewEnable = true;
    //     this.editEnable = true;
    //   }
    // }
    onChecked(element) {
        const selectObj = this.dataSource.data.find((item) => item.id === element.id);
        if (selectObj) {
            this.selectObj = selectObj;
            this.viewEnable = true;
            this.editEnable = true;
        }
    }
    onEdit() {
        if (this.selectObj && this.selectObj.status === 'REQUESTFORCLARIFICATION') {
            this.router.navigate(['/container/trip-detail/modification', this.selectObj.id]);
        }
        else {
            this.toastrMsg.error('Edit not able');
        }
    }
    onView() {
        if (this.selectObj) {
            this.router.navigate(['/container/trip-detail/view', this.selectObj.id]);
        }
        else {
            this.toastrMsg.error('View not able');
        }
    }
    getStatusStyle(status) {
        console.log(status);
        switch (status) {
            case 'APPROVED':
                return { 'color': 'green' };
            case 'INPROGRESS':
                return { 'color': 'blue' };
            case 'FORWARDED':
                return { 'color': 'orange' };
            case 'REQUESTFORCLARIFICATION':
                return {
                    'color': 'red',
                };
            case 'REJECT':
                return { 'color': 'red' };
            default:
                return { 'color': 'gray' };
        }
    }
};
TripDetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], TripDetailsComponent.prototype, "paginator", void 0);
TripDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trip-details',
        template: __webpack_require__(/*! raw-loader!./trip-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/trip-details.component.html"),
        styles: [__webpack_require__(/*! ./trip-details.component.scss */ "./src/app/container/trip-details/trip-details/trip-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
], TripDetailsComponent);



/***/ }),

/***/ "./src/app/container/trip-details/trip-details/trip-details.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/trip-details.module.ts ***!
  \****************************************************************************/
/*! exports provided: MY_CUSTOM_FORMATS, TripDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_CUSTOM_FORMATS", function() { return MY_CUSTOM_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsModule", function() { return TripDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng_pick_datetime_date_time_adapter_moment_adapter_moment_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class.js");
/* harmony import */ var _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip-details-routing.module */ "./src/app/container/trip-details/trip-details/trip-details-routing.module.ts");
/* harmony import */ var _add_edit_trip_details_add_edit_trip_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit-trip-details/add-edit-trip-details.component */ "./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.ts");
/* harmony import */ var _view_trip_details_view_trip_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-trip-details/view-trip-details.component */ "./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.ts");
/* harmony import */ var _trip_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trip-details.component */ "./src/app/container/trip-details/trip-details/trip-details.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _tripdetailsinprogress_tripdetailsinprogress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tripdetailsinprogress/tripdetailsinprogress.component */ "./src/app/container/trip-details/trip-details/tripdetailsinprogress/tripdetailsinprogress.component.ts");
/* harmony import */ var _tripdeatilsforward_tripdeatilsforward_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tripdeatilsforward/tripdeatilsforward.component */ "./src/app/container/trip-details/trip-details/tripdeatilsforward/tripdeatilsforward.component.ts");














const MY_CUSTOM_FORMATS = {
    fullPickerInput: 'DD-MM-YYYY HH:mm',
    parseInput: 'DD-MM-YYYY HH:mm',
    datePickerInput: 'DD-MM-YYYY',
    timePickerInput: 'HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};
let TripDetailsModule = class TripDetailsModule {
};
TripDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _trip_details_component__WEBPACK_IMPORTED_MODULE_7__["TripDetailsComponent"],
            _add_edit_trip_details_add_edit_trip_details_component__WEBPACK_IMPORTED_MODULE_5__["AddEditTripDetailsComponent"],
            _view_trip_details_view_trip_details_component__WEBPACK_IMPORTED_MODULE_6__["ViewTripDetailsComponent"],
            _tripdetailsinprogress_tripdetailsinprogress_component__WEBPACK_IMPORTED_MODULE_12__["TripdetailsinprogressComponent"],
            _tripdeatilsforward_tripdeatilsforward_component__WEBPACK_IMPORTED_MODULE_13__["TripdeatilsforwardComponent"],
            _tripdeatilsforward_tripdeatilsforward_component__WEBPACK_IMPORTED_MODULE_13__["TripdeatilsforwardComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_4__["TripDetailsRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlNativeDateTimeModule"]
        ],
        providers: [
            {
                provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["DateTimeAdapter"],
                useClass: ng_pick_datetime_date_time_adapter_moment_adapter_moment_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__["MomentDateTimeAdapter"],
                deps: [ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OWL_DATE_TIME_LOCALE"]],
            },
            { provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OWL_DATE_TIME_FORMATS"], useValue: MY_CUSTOM_FORMATS },
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })
], TripDetailsModule);



/***/ }),

/***/ "./src/app/container/trip-details/trip-details/tripdeatilsforward/tripdeatilsforward.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/tripdeatilsforward/tripdeatilsforward.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci90cmlwLWRldGFpbHMvdHJpcC1kZXRhaWxzL3RyaXBkZWF0aWxzZm9yd2FyZC90cmlwZGVhdGlsc2ZvcndhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/container/trip-details/trip-details/tripdeatilsforward/tripdeatilsforward.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/tripdeatilsforward/tripdeatilsforward.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: TripdeatilsforwardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripdeatilsforwardComponent", function() { return TripdeatilsforwardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/config/master-list-columns */ "./src/app/config/master-list-columns.ts");










let TripdeatilsforwardComponent = class TripdeatilsforwardComponent {
    constructor(formBuilder, commonService, router, toastrMsg) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.router = router;
        this.toastrMsg = toastrMsg;
        this.columns = src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_9__["MasterListColumns"].tripListForwardColumns;
        this.actionKeys = ['checkbox']; // ['edit', 'delete'] for buttons
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](); // Example data source
        this.totalCount = 10;
        this.pageSize = 10;
        this.displayedColumns = ['serialNo', 'tripNumber', 'createdDate', 'vehicleNumber', 'customerName', 'visitingPlace', 'driverName', 'totalRent', 'status', 'action'];
        this.totelCount = 0;
    }
    ngOnInit() {
        this.tripFormSearchDetails = this.formBuilder.group({
            driverName: [''],
            driverNumber: [''],
            vehiclenumber: [''],
            status: [''],
            tripNo: [''],
            fromDate: [''],
            toDate: [''],
        });
        this.getAll();
        this.getTripDetailsCount();
        this.commonService.activeVechicle().subscribe(vehicleResponse => {
            if (vehicleResponse.status == 's') {
                this.vehicleList = vehicleResponse.data;
            }
            else {
                this.vehicleList = [];
            }
        });
        this.commonService.activeDriver().subscribe(driverResponse => {
            if (driverResponse.status == 's') {
                this.driverList = driverResponse.data;
            }
            else {
                this.driverList = [];
            }
        });
    }
    getAll(pageIndex = 0, pageSize = this.pageSize) {
        this.isLoading = true;
        const tripFormSearchDetails = this.tripFormSearchDetails.value;
        const request = {
            filters: {
                vehicleNumber: tripFormSearchDetails.vehiclenumber ? tripFormSearchDetails.vehiclenumber : '',
                customerName: '',
                customerMobileNumber: '',
                driverName: tripFormSearchDetails.driverName ? tripFormSearchDetails.driverName : '',
                visitingPlace: "",
                status: "FORWARDED",
                fromDate: tripFormSearchDetails.fromDate
                    ? moment__WEBPACK_IMPORTED_MODULE_6__(tripFormSearchDetails.fromDate).format('YYYY-MM-DD')
                    : '',
                toDate: tripFormSearchDetails.toDate
                    ? moment__WEBPACK_IMPORTED_MODULE_6__(tripFormSearchDetails.toDate).format('YYYY-MM-DD') : '',
                tripNo: tripFormSearchDetails.tripNo ? tripFormSearchDetails.tripNo : '',
            },
            paginationSize: pageSize,
            sortField: "modifiedDate",
            pageNo: pageIndex,
            sortOrder: "DESC"
        };
        this.commonService.tripDetailsSearchList(request).subscribe(response => {
            this.isLoading = false;
            if (response.status == 's' && response.data) {
                const serialNumber = pageIndex * pageSize; // Calculate start index dynamically
                const dataSource = response.data.contents.map((v, i) => (Object.assign({}, v, { sNo: serialNumber + i + 1 // Adjust serial number
                 })));
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](dataSource);
                this.totelCount = response.data.totalElements;
            }
            else {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
            }
        });
    }
    search() {
        this.getAll();
    }
    getTripDetailsCount() {
        const today = new Date();
        const fromDateObj = new Date();
        fromDateObj.setDate(today.getDate() - 30); // 30 days before today
        const fromDate = fromDateObj.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        const toDate = today.toISOString().split('T')[0]; // Today's date in YYYY-MM-DD format
        console.log(fromDate, toDate);
        this.commonService.tripdetailsdashboardcount(fromDate, toDate).subscribe((tripdetailsdashboardcountResponse) => {
            if (tripdetailsdashboardcountResponse.status === 's') {
                this.tripDetailsCount = tripdetailsdashboardcountResponse.data[0] || {}; // Assign first object from data array
            }
            else {
                console.warn('Failed to fetch trip details:', tripdetailsdashboardcountResponse.message);
            }
        }, (error) => {
            console.error('API Error:', error);
        });
    }
    onclear() {
        this.tripFormSearchDetails.patchValue({
            driverName: '',
            driverNumber: '',
            vehiclenumber: '',
            status: '',
            tripNo: '',
            fromDate: '',
            toDate: '',
        });
        this.pageSize = 10;
        this.getAll();
    }
    handlePagination(event) {
        const pageIndex = event.currentPage;
        const pageSize = event.pageSize;
        this.getAll(pageIndex, pageSize);
    }
    onChecked(element) {
        const selectObj = this.dataSource.data.find((findElement) => findElement.id == element.id);
        if (selectObj) {
            this.selectObj = selectObj;
            this.viewEnable = true;
            this.editEnable = true;
        }
    }
    onEdit() {
        if (this.selectObj) {
            this.router.navigate(['/container/trip-detail/modification', this.selectObj.id, "forward"]);
        }
        else {
            this.toastrMsg.error('View not able');
        }
    }
    onView() {
        if (this.selectObj) {
            this.router.navigate(['/container/trip-detail/view', this.selectObj.id, "forward"]);
        }
        else {
            this.toastrMsg.error('View not able');
        }
    }
    getStatusStyle(status) {
        console.log(status);
        switch (status) {
            case 'APPROVED':
                return { 'color': 'green' };
            case 'INPROGRESS':
                return { 'color': 'blue' };
            case 'FORWARDED':
                return { 'color': 'orange' };
            case 'REQUESTFORCLARIFICATION':
                return {
                    'color': 'red',
                };
            case 'REJECT':
                return { 'color': 'red' };
            default:
                return { 'color': 'gray' };
        }
    }
};
TripdeatilsforwardComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], TripdeatilsforwardComponent.prototype, "paginator", void 0);
TripdeatilsforwardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tripdeatilsforward',
        template: __webpack_require__(/*! raw-loader!./tripdeatilsforward.component.html */ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/tripdeatilsforward/tripdeatilsforward.component.html"),
        styles: [__webpack_require__(/*! ./tripdeatilsforward.component.scss */ "./src/app/container/trip-details/trip-details/tripdeatilsforward/tripdeatilsforward.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
], TripdeatilsforwardComponent);



/***/ }),

/***/ "./src/app/container/trip-details/trip-details/tripdetailsinprogress/tripdetailsinprogress.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/tripdetailsinprogress/tripdetailsinprogress.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci90cmlwLWRldGFpbHMvdHJpcC1kZXRhaWxzL3RyaXBkZXRhaWxzaW5wcm9ncmVzcy90cmlwZGV0YWlsc2lucHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/container/trip-details/trip-details/tripdetailsinprogress/tripdetailsinprogress.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/tripdetailsinprogress/tripdetailsinprogress.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: TripdetailsinprogressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripdetailsinprogressComponent", function() { return TripdetailsinprogressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/config/master-list-columns */ "./src/app/config/master-list-columns.ts");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");










let TripdetailsinprogressComponent = class TripdetailsinprogressComponent {
    constructor(formBuilder, commonService, router, toastrMsg) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.router = router;
        this.toastrMsg = toastrMsg;
        this.columns = src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_8__["MasterListColumns"].tripListInprogressColumns;
        this.actionKeys = ['checkbox']; // ['edit', 'delete'] for buttons
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](); // Example data source
        this.totalCount = 10;
        this.pageSize = 10;
        this.displayedColumns = ['serialNo', 'tripNumber', 'createdDate', 'vehicleNumber', 'customerName', 'visitingPlace', 'driverName', 'totalRent', 'status', 'action'];
        this.totelCount = 0;
    }
    ngOnInit() {
        this.tripFormSearchDetails = this.formBuilder.group({
            driverName: [''],
            driverNumber: [''],
            vehiclenumber: [''],
            status: [''],
            tripNo: [''],
            fromDate: [''],
            toDate: [''],
        });
        this.getAll();
        this.commonService.activeVechicle().subscribe(vehicleResponse => {
            if (vehicleResponse.status == 's') {
                this.vehicleList = vehicleResponse.data;
            }
            else {
                this.vehicleList = [];
            }
        });
        this.commonService.activeDriver().subscribe(driverResponse => {
            if (driverResponse.status == 's') {
                this.driverList = driverResponse.data;
            }
            else {
                this.driverList = [];
            }
        });
    }
    getAll(pageIndex = 0, pageSize = this.pageSize) {
        this.isLoading = true;
        const tripFormSearchDetails = this.tripFormSearchDetails.value;
        const request = {
            filters: {
                vehicleNumber: tripFormSearchDetails.vehiclenumber ? tripFormSearchDetails.vehiclenumber : '',
                customerName: '',
                customerMobileNumber: '',
                driverName: tripFormSearchDetails.driverName ? tripFormSearchDetails.driverName : '',
                visitingPlace: "",
                status: tripFormSearchDetails.status ? tripFormSearchDetails.status : "INPROGRESS",
                fromDate: tripFormSearchDetails.fromDate
                    ? moment__WEBPACK_IMPORTED_MODULE_6__(tripFormSearchDetails.fromDate).format('YYYY-MM-DD')
                    : '',
                toDate: tripFormSearchDetails.toDate
                    ? moment__WEBPACK_IMPORTED_MODULE_6__(tripFormSearchDetails.toDate).format('YYYY-MM-DD') : '',
                tripNo: tripFormSearchDetails.tripNo ? tripFormSearchDetails.tripNo : '',
            },
            paginationSize: pageSize,
            sortField: "modifiedDate",
            pageNo: pageIndex,
            sortOrder: "DESC"
        };
        this.commonService.tripDetailsSearchList(request).subscribe(response => {
            this.isLoading = false;
            if (response.status == 's' && response.data) {
                const serialNumber = pageIndex * pageSize; // Calculate start index dynamically
                const dataSource = response.data.contents.map((v, i) => (Object.assign({}, v, { sNo: serialNumber + i + 1 // Adjust serial number
                 })));
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](dataSource);
                this.totelCount = response.data.totalElements;
            }
            else {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
            }
        });
    }
    search() {
        this.getAll();
    }
    onclear() {
        this.tripFormSearchDetails.patchValue({
            driverName: '',
            driverNumber: '',
            vehiclenumber: '',
            status: '',
            tripNo: '',
            fromDate: '',
            toDate: '',
        });
        this.pageSize = 10;
        this.getAll();
    }
    handlePagination(event) {
        const pageIndex = event.currentPage;
        const pageSize = event.pageSize;
        this.getAll(pageIndex, pageSize);
    }
    onChecked(element) {
        const selectObj = this.dataSource.data.find((findElement) => findElement.id == element.id);
        if (selectObj) {
            this.selectObj = selectObj;
            this.viewEnable = true;
            this.editEnable = true;
        }
    }
    onEdit() {
        if (this.selectObj) {
            this.router.navigate(['/container/trip-detail/modification', this.selectObj.id, "approved"]);
        }
        else {
            this.toastrMsg.error('View not able');
        }
    }
    onView() {
        if (this.selectObj) {
            this.router.navigate(['/container/trip-detail/view', this.selectObj.id, "approved"]);
        }
        else {
            this.toastrMsg.error('View not able');
        }
    }
    getStatusStyle(status) {
        console.log(status);
        switch (status) {
            case 'APPROVED':
                return { 'color': 'green' };
            case 'INPROGRESS':
                return { 'color': 'blue' };
            case 'FORWARDED':
                return { 'color': 'orange' };
            case 'REQUESTFORCLARIFICATION':
                return {
                    'color': 'red',
                };
            case 'REJECT':
                return { 'color': 'red' };
            default:
                return { 'color': 'gray' };
        }
    }
};
TripdetailsinprogressComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], TripdetailsinprogressComponent.prototype, "paginator", void 0);
TripdetailsinprogressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tripdetailsinprogress',
        template: __webpack_require__(/*! raw-loader!./tripdetailsinprogress.component.html */ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/tripdetailsinprogress/tripdetailsinprogress.component.html"),
        styles: [__webpack_require__(/*! ./tripdetailsinprogress.component.scss */ "./src/app/container/trip-details/trip-details/tripdetailsinprogress/tripdetailsinprogress.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
], TripdetailsinprogressComponent);



/***/ }),

/***/ "./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci90cmlwLWRldGFpbHMvdHJpcC1kZXRhaWxzL3ZpZXctdHJpcC1kZXRhaWxzL3ZpZXctdHJpcC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ViewTripDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTripDetailsComponent", function() { return ViewTripDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");




let ViewTripDetailsComponent = class ViewTripDetailsComponent {
    constructor(commonService, activatedRoute, router) {
        this.commonService = commonService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.tripLogDetails = [];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(tripIdResponse => {
            if (tripIdResponse.id) {
                if (tripIdResponse.status) {
                    this.tripListStatus = tripIdResponse.status;
                }
                this.commonService.getTripDetails(tripIdResponse.id).subscribe(getTripDetailsResponse => {
                    if (getTripDetailsResponse.status == 's') {
                        this.getTripDetails = getTripDetailsResponse.data;
                        this.commonService.getTripDetailLogs(getTripDetailsResponse.data.tripNumber).subscribe(gettripLogDetailsResponse => {
                            if (gettripLogDetailsResponse.status == 's') {
                                this.tripLogDetails = gettripLogDetailsResponse.data;
                            }
                            else {
                                this.tripLogDetails = [];
                            }
                        });
                    }
                });
            }
        });
    }
    back() {
        if (this.tripListStatus == 'approved') {
            this.router.navigate(['/container/trip-detail/inprogresslist']);
        }
        else if (this.tripListStatus == 'forward') {
            this.router.navigate(['/container/trip-detail/forwardlist']);
        }
        else {
            this.router.navigate(['/container/trip-detail/list']);
        }
    }
};
ViewTripDetailsComponent.ctorParameters = () => [
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ViewTripDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-trip-details',
        template: __webpack_require__(/*! raw-loader!./view-trip-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.html"),
        styles: [__webpack_require__(/*! ./view-trip-details.component.scss */ "./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ViewTripDetailsComponent);



/***/ })

}]);
//# sourceMappingURL=trip-details-trip-details-trip-details-module-es2015.js.map