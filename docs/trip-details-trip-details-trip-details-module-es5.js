(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-details-trip-details-trip-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Add Trip Details</p>\r\n<ul class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a [routerLink]=\"['/dashboard']\">Home</a>\r\n    </li>\r\n    <ng-container>\r\n        <li class=\"breadcrumb-item\" [routerLink]=\"['/master/trip-detail/list']\"><a href=\"javascript:\"> Trip\r\n                Details</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item\"><a href=\"javascript:\">{{screenName}}</a></li>\r\n    </ng-container>\r\n</ul>\r\n<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <form [formGroup]=\"tripFormDetails\" autocomplete=\"off\">\r\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <h3>Customer & Vehicel Details</h3>\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Vehicle Number <span class=\"text-danger\">*</span></label>\r\n                            <select type=\"text\" class=\"form-control\" formControlName=\"vehicleNumber\"\r\n                                placeholder=\"Select Vehicle Number\" (change)=\"getStaringKM($event.target.value)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.vehicleNumber.errors }\">\r\n                                <option value=\"\" selected disabled>Select Vehicle Number</option>\r\n                                <option *ngFor=\"let vehicleListElement of vehicleList\"\r\n                                    value=\"{{vehicleListElement.vehicleNumber}}\">{{vehicleListElement.vehicleNumber}}\r\n                                </option>\r\n                            </select>\r\n\r\n                            <div *ngIf=\"formSubmitted && tripForm.vehicleNumber.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.vehicleNumber.errors.required\">Vehicle Number is required</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Date<span class=\"text-danger\">*</span></label>\r\n                            <div class=\"input-group\">\r\n                                <!-- DateTime Input -->\r\n                                <input type=\"text\" [owlDateTime]=\"dt1\" class=\"form-control\" formControlName=\"date\"\r\n                                    placeholder=\"Select Date & Time\"\r\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.date.errors }\" readonly\r\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\r\n                                    (keydown)=\"$event.preventDefault()\">\r\n\r\n                                <!-- Calendar Icon Inside Input -->\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt1\" type=\"button\">\r\n                                        📅\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <!-- Owl DateTime Picker -->\r\n                                <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\r\n                            </div>\r\n\r\n                            <!-- Validation Message -->\r\n                            <div *ngIf=\"formSubmitted && tripForm.date.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.date.errors.required\">Customer Name is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Customer Name<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"customerName\"\r\n                                placeholder=\"Enter Customer Name\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.customerName.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.customerName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.customerName.errors.required\">Customer Name is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Customer Mobile Number<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"customerMobileNumber\"\r\n                                placeholder=\"Enter Customer Mobile Number\" (keydown)=\"numbersOnly($event)\" maxlength=\"10\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.customerMobileNumber.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.customerMobileNumber.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.customerMobileNumber.errors.required\">Customer Mobile Number is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driver Name<span class=\"text-danger\">*</span></label>\r\n                            <select type=\"text\" class=\"form-control\" formControlName=\"driverName\"\r\n                                placeholder=\"Enter Driver Name\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.driverName.errors }\">\r\n                                <option value=\"\" selected disabled>Select Driver Name</option>\r\n                                <option *ngFor=\"let driverListElemnt of driverList\" value=\"{{driverListElemnt?.name}}\">\r\n                                    {{driverListElemnt?.name}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"formSubmitted && tripForm.driverName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.driverName.errors.required\">Driver Name is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Starting KM<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"startingKM\"\r\n                                placeholder=\"Enter Starting KM\" (keydown)=\"numbersOnly($event)\"\r\n                                (keyup)=\"startingKM($event.target.value);\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.startingKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.startingKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.startingKM.errors.required\">Starting KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Closing KM<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"closingKM\"\r\n                                placeholder=\"Enter Closing KM\" (keydown)=\"numbersOnly($event)\"\r\n                                (keyup)=\"closeingKM($event.target.value)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.closingKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.closingKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.closingKM.errors.required\">Closing KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Used KM<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"usedKM\" placeholder=\"Enter Used KM\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.usedKM.errors }\" disabled />\r\n                            <div *ngIf=\"formSubmitted && tripForm.usedKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.usedKM.errors.required\">Used KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Starting Time<span class=\"text-danger\">*</span></label>\r\n                            <div class=\"input-group\">\r\n                                <!-- DateTime Input -->\r\n                                <input type=\"text\" [owlDateTime]=\"dt2\" class=\"form-control\"\r\n                                    placeholder=\"Select Staring Time\" formControlName=\"startingTime\"\r\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.startingTime.errors }\"\r\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\r\n                                    (keydown)=\"$event.preventDefault()\" readonly />\r\n\r\n                                <!-- Calendar Icon Inside Input -->\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt2\" type=\"button\">\r\n                                        📅\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <!-- Owl DateTime Picker -->\r\n                                <owl-date-time #dt2></owl-date-time>\r\n                            </div>\r\n\r\n                            <!-- Validation Message -->\r\n                            <div *ngIf=\"formSubmitted && tripForm.startingTime.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.startingTime.errors.required\">Closing Time is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Closing Time<span class=\"text-danger\">*</span></label>\r\n                            <div class=\"input-group\">\r\n                                <!-- DateTime Input -->\r\n                                <input type=\"text\" [owlDateTime]=\"dt3\" class=\"form-control\"\r\n                                    placeholder=\"Select Closing Time\" formControlName=\"closingTime\"\r\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.closingTime.errors }\" readonly\r\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\r\n                                    (keydown)=\"$event.preventDefault()\">\r\n\r\n                                <!-- Calendar Icon Inside Input -->\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt3\" type=\"button\">\r\n                                        📅\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <!-- Owl DateTime Picker -->\r\n                                <owl-date-time #dt3></owl-date-time>\r\n                            </div>\r\n\r\n                            <!-- Validation Message -->\r\n                            <div *ngIf=\"formSubmitted && tripForm.closingTime.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.closingTime.errors.required\">Total HRS is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Total Hrs<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"totalTime\"\r\n                                placeholder=\"Enter Total HRS\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.totalTime.errors }\" readonly />\r\n                            <div *ngIf=\"formSubmitted && tripForm.totalTime.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.totalTime.errors.required\">Total HRS is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Type<span class=\"text-danger\">*</span></label>\r\n                            <select class=\"form-control\" formControlName=\"acOrNonAc\"\r\n                                (click)=\"acDetect($event.target.value)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acOrNonAc.errors }\">\r\n                                <option value=\"\" disabled selected>Select AC or Non-AC</option>\r\n                                <option value=\"AC\">AC</option>\r\n                                <option value=\"Non-AC\">Non-AC</option>\r\n                            </select>\r\n                            <div *ngIf=\"formSubmitted && tripForm.acOrNonAc.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.acOrNonAc.errors.required\">AC Type is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Starting KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\r\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\" (keydown)=\"numbersOnly($event)\" (keyup)=\"acStaringKmCalculation($event.target.value);\"\r\n                                formControlName=\"acStartingKM\" placeholder=\"Enter AC Starting KM\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acStartingKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.acStartingKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.acStartingKM.errors.required\">AC Starting KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Closed KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\r\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\" (keydown)=\"numbersOnly($event)\" (keyup)=\"acClosingKmCalculation($event.target.value);\"\r\n                                formControlName=\"acClosingKM\" placeholder=\"Enter AC Closed KM\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acClosingKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.acClosingKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.acClosingKM.errors.required\">AC Closed KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Used KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\r\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\" (keydown)=\"numbersOnly($event)\"\r\n                                formControlName=\"usedAcKM\" placeholder=\"Enter AC Used KM\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.usedAcKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.usedAcKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.usedAcKM.errors.required\">AC Used KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Note<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"acNote\" placeholder=\"Enter AC Note\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acNote.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.acNote.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.acNote.errors.required\">AC Note is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n\r\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <h3>Visiting Place Details</h3>\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Visiting Places <span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"visitingPlace\"\r\n                                placeholder=\"Enter Visiting Place\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.visitingPlace.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.visitingPlace.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.visitingPlace.errors.required\">Visiting Place is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Day Rent<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"dayRent\"\r\n                                placeholder=\"Enter Day Rent\" (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.dayRent.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.dayRent.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.dayRent.errors.required\">Day Rent is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Toll<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"toll\" placeholder=\"Enter Toll\" (keyup)=\"profitAmoutCalculation('Toll');\" (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.toll.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.toll.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.toll.errors.required\">Toll is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Total Rent<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"totalRent\"\r\n                                placeholder=\"Enter Total Rent\" (keyup)=\"getTotalRentAmount($event.target.value); profitAmoutCalculation('Total Rent')\"\r\n                                (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.totalRent.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.totalRent.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.totalRent.errors.required\">Total Rent is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Fuel<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"diesel\" placeholder=\"Enter Fuel\" (keyup)=\"profitAmoutCalculation('Fuel')\"\r\n                                (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.diesel.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.diesel.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.diesel.errors.required\">Fuel is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driver Payment<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"driverPayment\"\r\n                                placeholder=\"Enter Driver Payment\" (keydown)=\"numbersOnly($event)\" \r\n                                (keyup)=\"profitAmoutCalculation('Driver Payment')\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.driverPayment.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.driverPayment.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.driverPayment.errors.required\">Driver Payment is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Permit<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"permitAmount\"\r\n                                placeholder=\"Enter Permit\" (keydown)=\"numbersOnly($event)\"  (keyup)=\"profitAmoutCalculation('Permit');\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.permitAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.permitAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.permitAmount.errors.required\">Permit is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Advance<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"advanceAmount\"\r\n                                placeholder=\"Enter Advance\" (keyup)=\"getAdvanceAmount($event.target.value);\"\r\n                                (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.advanceAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.advanceAmount.errors.required\">Advance is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Advance Type<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"advanceType\"\r\n                                placeholder=\"Enter Advance Type\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceType.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.advanceType.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.advanceType.errors.required\">Advance Type is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Payment Type<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"paymentType\"\r\n                                placeholder=\"Enter Payment Type\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.paymentType.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.paymentType.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.paymentType.errors.required\">Payment Type is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Recevied Amount<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"receivedAmount\"\r\n                                placeholder=\"Enter Recevied Amount\" (keyup)=\"getReceivedAmount($event.target.value);\"\r\n                                (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.receivedAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.receivedAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.receivedAmount.errors.required\">Recevied Amount is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Pending Amount<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"pendingAmount\" disabled\r\n                                placeholder=\"Enter Pending Amount\" (keyup)=\"getPendingAmount($event.target.value);\"\r\n                                (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.pendingAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.pendingAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.pendingAmount.errors.required\">Pending Amount is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Balance<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"balanceAmount\"\r\n                                placeholder=\"Enter Balance\" disabled (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.balanceAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.balanceAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.balanceAmount.errors.required\">Balance is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Wrote By<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"submittedBy\"\r\n                                placeholder=\"Enter Wrote By\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.submittedBy.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.submittedBy.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.submittedBy.errors.required\">Wrote By is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Profit<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"profitAmount\"\r\n                                placeholder=\"Enter Profit\" (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.profitAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.profitAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.profitAmount.errors.required\">Profit is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Verified By (Manager)<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"verifiedByManager\"\r\n                                placeholder=\"Enter Verified By (Manager)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.verifiedByManager.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.verifiedByManager.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.verifiedByManager.errors.required\">Verified By (Manager) is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Verified By (Proprietor)<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"verifiedByProprietor\"\r\n                                placeholder=\"Enter Verified By (Proprietor)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.verifiedByProprietor.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.verifiedByProprietor.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.verifiedByProprietor.errors.required\">Verified By (Proprietor) is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col-lg-12 text-end\">\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"submit\" class=\"btn btn-outline-success\"\r\n                                (click)=\"submit(tripFormDetails)\">Submit</button>\r\n                            <button type=\"button\" class=\"btn btn-outline-secondary\"\r\n                                [routerLink]=\"['/container/trip-detail/list']\">Back</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </app-card>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n<app-ui-modal #submitPopUp [hideFooter]=\"true\" [dialogClass]=\"'modal-lg'\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Confirm</h5>\r\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n            (click)=\"submitPopUp.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n    </div>\r\n\r\n    <div class=\"app-modal-body\">\r\n        <p>Are you sure whant submit?</p>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"btnLoder\" (click)=\"finalSubmit()\">\r\n                <i class=\"fa\" [ngClass]=\"{'fa-spin fa-asterisk': btnLoder, 'fa-check': !btnLoder}\"></i>Yes\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"submitPopUp.hide()\">\r\n                <i class=\"feather icon-slash\"></i> No\r\n            </button>\r\n        </div>\r\n    </div>\r\n</app-ui-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/trip-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/trip-details.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <form [formGroup]=\"tripFormSearchDetails\" autocomplete=\"off\">\r\n            <!-- Search Panel -->\r\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <h4>Search</h4>\r\n                <div class=\"row\">\r\n                    <!-- Driver Name -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"driverName\">Driver Name</label>\r\n                            <input type=\"text\" id=\"driverName\" formControlName=\"driverName\" class=\"form-control\"\r\n                                placeholder=\"Enter Driver Name\" />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Driver Number -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"driverNumber\">Driver Number</label>\r\n                            <input type=\"text\" id=\"driverNumber\" formControlName=\"driverNumber\" class=\"form-control\"\r\n                                placeholder=\"Enter Driver Number\" />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Vehicle Number -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"vehicleNumber\">Vehicle Number</label>\r\n                            <input type=\"text\" id=\"vehicleNumber\" formControlName=\"vehiclenumber\" class=\"form-control\"\r\n                                placeholder=\"Enter Vehicle Number\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Submit and Cancel buttons -->\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col-lg-12 text-end\">\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"submit\" class=\"btn btn-outline-info list-button-container\"\r\n                                (click)=\"search()\"><span class=\"list-text-alaign-center\">Submit</span></button>\r\n                            <button type=\"button\" class=\"btn btn-outline-secondary list-button-container\"\r\n                                (click)=\"onclear()\"><span class=\"list-text-alaign-center\">Clear</span></button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"outer-container\">\r\n    <div class=\"button-container\">\r\n        <button class=\"btn btn-outline-success list-button-container\" [routerLink]=\"['/container/trip-detail/add']\">\r\n            <span class=\"list-text-alaign-center\">Add</span>\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary list-button-container\" (click)=\"onEdit()\" [disabled]=\"!editEnable\">\r\n            <span class=\"list-text-alaign-center\">Edit</span>\r\n        </button>\r\n        <button class=\"btn btn-outline-warning list-button-container\" (click)=\"onView()\" [disabled]=\"!viewEnable\">\r\n            <span class=\"list-text-alaign-center\">View</span>\r\n        </button>\r\n        <!-- <button (click)=\"onclear()\">\r\n            <span>Clear</span>\r\n        </button> -->\r\n    </div>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"table-design\">\r\n    <!-- Serial No Column -->\r\n    <ng-container matColumnDef=\"serialNo\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> S.No </th>\r\n        <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-center\"> {{ i + 1 }} </td>\r\n    </ng-container>\r\n\r\n    <!-- Driver Name Column -->\r\n    <ng-container matColumnDef=\"createdDate\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> CreatedDate </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.createdDate | date: 'dd-MM-yyyy'}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Driver Name Column -->\r\n    <ng-container matColumnDef=\"vehicleNumber\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> VehicleNumber </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.vehicleNumber}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Mobile Number Column -->\r\n    <ng-container matColumnDef=\"customerName\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\">CustomerName</th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.customerName}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Driving License Number Column -->\r\n    <ng-container matColumnDef=\"visitingPlace\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> VisitingPlace </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.visitingPlace}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Aadhar Number Column -->\r\n    <ng-container matColumnDef=\"driverName\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Driver Name </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.driverName}} </td>\r\n    </ng-container>\r\n\r\n    <!-- District Column -->\r\n    <ng-container matColumnDef=\"totalRent\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\">TotalRent </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.totalRent}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Status Column -->\r\n    <ng-container matColumnDef=\"status\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Status </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.status ? 'Active' : 'Inactive'}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Action Column -->\r\n    <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Action </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n            <mat-radio-button (click)=\"onSelect(element)\"></mat-radio-button>\r\n        </td>\r\n    </ng-container>\r\n\r\n\r\n    <!-- Header and Row Definitions -->\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [length]=\"totelCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\"\r\n    (page)=\"pageEvent($event)\">\r\n</mat-paginator>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['/dashboard']\">Home</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['/container/trip-detail/list']\">Trip Details</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">View</li>\r\n  </ul>\r\n  \r\n  <app-card [hidHeader]=\"true\" class=\"view-panel\">\r\n    <h4>Trip Details</h4>\r\n    <hr>\r\n    <div class=\"container\">\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Vehicle Number</label>\r\n          <p class=\"view-text\">{{getTripDetails?.vehicleNumber}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Customer Name</label>\r\n          <p class=\"view-text\">{{getTripDetails?.customerName}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Customer Mobile Number</label>\r\n          <p class=\"view-text\">{{getTripDetails?.customerMobileNumber}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Driver Name</label>\r\n          <p class=\"view-text\">{{getTripDetails?.driverName}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Starting KM</label>\r\n          <p class=\"view-text\">{{getTripDetails?.startingKM}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Closing KM</label>\r\n          <p class=\"view-text\">{{getTripDetails?.closingKM}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Used KM</label>\r\n          <p class=\"view-text\">{{getTripDetails?.usedKM}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">AC or Non-AC</label>\r\n          <p class=\"view-text\">{{getTripDetails?.acOrNonAc}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Starting Time</label>\r\n          <p class=\"view-text\">{{getTripDetails?.startingTime}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Closing Time</label>\r\n          <p class=\"view-text\">{{getTripDetails?.closingTime}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Total Time</label>\r\n          <p class=\"view-text\">{{getTripDetails?.totalTime}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Visiting Place</label>\r\n          <p class=\"view-text\">{{getTripDetails?.visitingPlace}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Advance Amount</label>\r\n          <p class=\"view-text\">{{getTripDetails?.advanceAmount}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Total Rent</label>\r\n          <p class=\"view-text\">{{getTripDetails?.totalRent}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Diesel Amount</label>\r\n          <p class=\"view-text\">{{getTripDetails?.diesel}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Driver Payment</label>\r\n          <p class=\"view-text\">{{getTripDetails?.driverPayment}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Received Amount</label>\r\n          <p class=\"view-text\">{{getTripDetails?.receivedAmount}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Pending Amount</label>\r\n          <p class=\"view-text\">{{getTripDetails?.pendingAmount}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Submitted By</label>\r\n          <p class=\"view-text\">{{getTripDetails?.submittedBy}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Status</label>\r\n          <p class=\"view-text\">{{getTripDetails?.status}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-lg-12 text-end\">\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-outline-secondary\" [routerLink]=\"['/container/trip-detail/list']\">Back</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </app-card>\r\n  "

/***/ }),

/***/ "./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci90cmlwLWRldGFpbHMvdHJpcC1kZXRhaWxzL2FkZC1lZGl0LXRyaXAtZGV0YWlscy9hZGQtZWRpdC10cmlwLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");







var AddEditTripDetailsComponent = /** @class */ (function () {
    function AddEditTripDetailsComponent(formBuilder, toastrMsg, commonService, router, activatedRoute) {
        this.formBuilder = formBuilder;
        this.toastrMsg = toastrMsg;
        this.commonService = commonService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.screenName = 'Add';
        this.maxDate = new Date();
        this.tripId = '';
    }
    AddEditTripDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (tripIdResponse) {
            if (tripIdResponse.id) {
                _this.tripId = tripIdResponse.id;
                _this.getTripDetailsForm(tripIdResponse.id);
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
            advanceAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dayRent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toll: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            totalRent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            diesel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            driverPayment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            permitAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            receivedAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pendingAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            balanceAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            profitAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            submittedBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [''],
            verifiedByManager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            verifiedByProprietor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.tripFormDetails.get('startingTime').valueChanges.subscribe(function () {
            _this.calculateTotalHours();
        });
        this.tripFormDetails.get('closingTime').valueChanges.subscribe(function () {
            _this.calculateTotalHours();
        });
        this.commonService.activeVechicle().subscribe(function (vehicleResponse) {
            if (vehicleResponse.status == 's') {
                _this.vehicleList = vehicleResponse.data;
            }
            else {
                _this.vehicleList = [];
            }
        });
        this.commonService.activeDriver().subscribe(function (driverResponse) {
            if (driverResponse.status == 's') {
                _this.driverList = driverResponse.data;
            }
            else {
                _this.driverList = [];
            }
        });
    };
    AddEditTripDetailsComponent.prototype.calculateTotalHours = function () {
        var startTime = this.tripFormDetails.get('startingTime').value;
        var closingTime = this.tripFormDetails.get('closingTime').value;
        if (startTime && closingTime) {
            var start = new Date(startTime);
            var end = new Date(closingTime);
            if (start < end) {
                var diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
                this.tripFormDetails.patchValue({ totalTime: diff.toFixed(2) });
            }
            else {
                this.tripFormDetails.patchValue({ totalTime: 'Invalid Time' });
                this.toastrMsg.error("Please Select Correct Date");
            }
        }
    };
    Object.defineProperty(AddEditTripDetailsComponent.prototype, "tripForm", {
        get: function () {
            return this.tripFormDetails.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddEditTripDetailsComponent.prototype.submit = function (tripFormDetails) {
        if (this.tripFormDetails.invalid) {
            this.formSubmitted = true;
        }
        else if (tripFormDetails.value.startingKM >= tripFormDetails.value.closingKM) {
            this.toastrMsg.warning('Please enter Starting KM greater than Closing KM');
        }
        else if (tripFormDetails.value.acStartingKM >= tripFormDetails.value.acClosingKM) {
            this.toastrMsg.warning('Please enter AC Starting KM greater than AC Closing KM');
        }
        else {
            this.submitPopUp.show();
        }
    };
    AddEditTripDetailsComponent.prototype.acDetect = function (event) {
        if (event === 'Non-AC') {
            this.tripFormDetails.controls['usedAcKM'].clearValidators();
            this.tripFormDetails.controls["usedAcKM"].updateValueAndValidity();
            this.tripFormDetails.controls['acStartingKM'].clearValidators();
            this.tripFormDetails.controls["acStartingKM"].updateValueAndValidity();
            this.tripFormDetails.controls['acClosingKM'].clearValidators();
            this.tripFormDetails.controls["acClosingKM"].updateValueAndValidity();
            this.acValidationFlag = true;
        }
        else {
            this.tripFormDetails.controls['usedAcKM'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.tripFormDetails.controls["usedAcKM"].updateValueAndValidity();
            this.tripFormDetails.controls['acStartingKM'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.tripFormDetails.controls["acStartingKM"].updateValueAndValidity();
            this.tripFormDetails.controls['acClosingKM'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.tripFormDetails.controls["acClosingKM"].updateValueAndValidity();
            this.acValidationFlag = false;
        }
    };
    AddEditTripDetailsComponent.prototype.finalSubmit = function () {
        if (this.tripId) {
            this.updateTripDetails();
        }
        else {
            this.addTripDetails();
        }
    };
    AddEditTripDetailsComponent.prototype.addTripDetails = function () {
        var _this = this;
        var tripFormDetails = this.tripFormDetails.value;
        var addTripDetailsRequest = {
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
            driverPayment: tripFormDetails.driverPayment || '',
            paymentType: tripFormDetails.paymentType || '',
            pendingAmount: tripFormDetails.pendingAmount || '',
            permitAmount: tripFormDetails.permitAmount || '',
            profitAmount: tripFormDetails.profitAmount || '',
            receivedAmount: tripFormDetails.receivedAmount || '',
            startingKM: tripFormDetails.startingKM || '',
            startingTime: moment__WEBPACK_IMPORTED_MODULE_4__(tripFormDetails.startingTime).format('YYYY-MM-DD HH:mm:ss') || '',
            status: tripFormDetails.status || 'SUBMITTED',
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
        };
        this.btnLoder = true;
        this.commonService.tripDetailAddSubmit(addTripDetailsRequest).subscribe(function (addTripDetailsResponse) {
            _this.btnLoder = false;
            if (addTripDetailsResponse.status = 's') {
                _this.submitPopUp.hide();
                _this.toastrMsg.success("Vehicle details submitted successfully");
                _this.router.navigate(['/container/trip-detail/list']);
            }
            else {
                _this.toastrMsg.error(addTripDetailsResponse.userDisplayMesg);
            }
        });
    };
    AddEditTripDetailsComponent.prototype.startingKM = function (startingKMElemant) {
        if (startingKMElemant) {
            if (this.tripFormDetails.controls.closingKM.value) {
                var usedKM = parseFloat(startingKMElemant) + parseFloat(this.tripFormDetails.controls.closingKM.value);
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
    };
    AddEditTripDetailsComponent.prototype.closeingKM = function (closingKMElemant) {
        if (closingKMElemant) {
            if (this.tripFormDetails.controls.closingKM.value) {
                var usedKM = parseFloat(closingKMElemant) - parseFloat(this.tripFormDetails.controls.startingKM.value);
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
    };
    AddEditTripDetailsComponent.prototype.numbersOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
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
        // Restrict non-numeric input (0-9: keyCode 48-57)
        if (charCode < 48 || charCode > 57) {
            event.preventDefault();
        }
    };
    AddEditTripDetailsComponent.prototype.getReceivedAmount = function (receivedAmount) {
        var advanceAmount = this.tripFormDetails.controls.advanceAmount.value ? parseFloat(this.tripFormDetails.controls.advanceAmount.value) : 0;
        var totalRentAmount = this.tripFormDetails.controls.totalRent.value ? parseFloat(this.tripFormDetails.controls.totalRent.value) : 0;
        var finalAmount = advanceAmount + parseFloat(receivedAmount);
        if (totalRentAmount < finalAmount) {
            this.tripFormDetails.patchValue({
                receivedAmount: ''
            });
        }
        if (receivedAmount) {
            this.tripFormDetails.patchValue({
                pendingAmount: (totalRentAmount - (advanceAmount + parseFloat(receivedAmount))),
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
    };
    AddEditTripDetailsComponent.prototype.getTotalRentAmount = function (totalRentAmount) {
        var advanceAmount = this.tripFormDetails.controls.advanceAmount.value ? parseFloat(this.tripFormDetails.controls.advanceAmount.value) : 0;
        var receivedAmount = this.tripFormDetails.controls.receivedAmount.value ? parseFloat(this.tripFormDetails.controls.receivedAmount.value) : 0;
        if (this.tripFormDetails.controls.totalRent.value) {
            this.tripFormDetails.patchValue({
                pendingAmount: (parseFloat(totalRentAmount) - (advanceAmount + receivedAmount)),
                balanceAmount: (parseFloat(totalRentAmount) - (advanceAmount + receivedAmount))
            });
        }
        else {
            this.tripFormDetails.patchValue({
                pendingAmount: 0,
                balanceAmount: 0
            });
        }
    };
    AddEditTripDetailsComponent.prototype.getAdvanceAmount = function (advanceAmount) {
        var totalRentAmount = this.tripFormDetails.controls.totalRent.value ? parseFloat(this.tripFormDetails.controls.totalRent.value) : 0;
        var receivedAmount = this.tripFormDetails.controls.receivedAmount.value ? parseFloat(this.tripFormDetails.controls.receivedAmount.value) : 0;
        var pendingAmount = this.tripFormDetails.controls.pendingAmount.value ? parseFloat(this.tripFormDetails.controls.pendingAmount.value) : 0;
        var finalAmount = parseFloat(advanceAmount) + receivedAmount;
        if (totalRentAmount < finalAmount) {
            this.tripFormDetails.patchValue({
                advanceAmount: ''
            });
        }
        if (this.tripFormDetails.controls.advanceAmount.value &&
            this.tripFormDetails.controls.totalRent.value) {
            this.tripFormDetails.patchValue({
                pendingAmount: (totalRentAmount - (parseFloat(advanceAmount) + receivedAmount)),
                balanceAmount: (totalRentAmount - (parseFloat(advanceAmount) + receivedAmount))
            });
        }
        else if (this.tripFormDetails.controls.receivedAmount.value) {
            this.tripFormDetails.patchValue({
                pendingAmount: receivedAmount,
                balanceAmount: receivedAmount
            });
        }
        else {
            this.tripFormDetails.patchValue({
                pendingAmount: 0,
                balanceAmount: 0
            });
        }
    };
    AddEditTripDetailsComponent.prototype.getStaringKM = function (statingKM) {
        var _this = this;
        this.commonService.getStatingKM(statingKM).subscribe(function (vehicleResponse) {
            if (vehicleResponse.status == 's') {
                _this.tripFormDetails.patchValue({
                    startingKM: vehicleResponse.data.closingKM,
                    closingKM: 0
                });
                if (vehicleResponse.data.closingKM && _this.tripFormDetails.controls.closingKM.value) {
                    _this.tripFormDetails.patchValue({
                        usedKM: parseFloat(_this.tripFormDetails.controls.closingKM.value) - parseFloat(vehicleResponse.data.closingKM),
                    });
                }
                else {
                    _this.tripFormDetails.patchValue({
                        usedKM: 0,
                        closingKM: 0
                    });
                }
            }
            else {
                _this.tripFormDetails.patchValue({
                    startingKM: 0,
                    usedKM: 0,
                    closingKM: 0
                });
            }
        });
    };
    AddEditTripDetailsComponent.prototype.acStaringKmCalculation = function (startingKM) {
        // formula <==> ("u = c - s")
        if (startingKM && this.tripFormDetails.controls.acClosingKM.value) {
            this.tripFormDetails.patchValue({
                usedAcKM: parseFloat(this.tripFormDetails.controls.acClosingKM.value) - parseFloat(startingKM)
            });
        }
    };
    AddEditTripDetailsComponent.prototype.acClosingKmCalculation = function (closingKM) {
        // formula <==> ("u = c - s")
        if (closingKM && this.tripFormDetails.controls.acStartingKM.value) {
            this.tripFormDetails.patchValue({
                usedAcKM: parseFloat(closingKM) - parseFloat(this.tripFormDetails.controls.acStartingKM.value)
            });
        }
    };
    AddEditTripDetailsComponent.prototype.profitAmoutCalculation = function (string) {
        // Formula < == > ("Profit = Total Rent - (Toll + Fuel + Driver Payment + Permit)")
        var totalRentAmount = this.tripFormDetails.value.totalRent ? parseFloat(this.tripFormDetails.value.totalRent) : 0;
        var tollAmount = this.tripFormDetails.value.toll ? parseFloat(this.tripFormDetails.value.toll) : 0;
        var fuelAmount = this.tripFormDetails.value.diesel ? parseFloat(this.tripFormDetails.value.diesel) : 0;
        var driverPaymentAmount = this.tripFormDetails.value.driverPayment ? parseFloat(this.tripFormDetails.value.driverPayment) : 0;
        var permitAmount = this.tripFormDetails.value.permitAmount ? parseFloat(this.tripFormDetails.value.permitAmount) : 0;
        var profitAmount = (totalRentAmount - (tollAmount + fuelAmount + driverPaymentAmount + permitAmount));
        this.tripFormDetails.patchValue({
            profitAmount: profitAmount ? profitAmount : 0
        });
    };
    AddEditTripDetailsComponent.prototype.updateTripDetails = function () {
        var _this = this;
        var tripFormDetails = this.tripFormDetails.value;
        var updateTripDetailsRequest = {
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
            driverPayment: tripFormDetails.driverPayment || '',
            paymentType: tripFormDetails.paymentType || '',
            pendingAmount: tripFormDetails.pendingAmount || '',
            permitAmount: tripFormDetails.permitAmount || '',
            profitAmount: tripFormDetails.profitAmount || '',
            receivedAmount: tripFormDetails.receivedAmount || '',
            startingKM: tripFormDetails.startingKM || '',
            startingTime: moment__WEBPACK_IMPORTED_MODULE_4__(tripFormDetails.startingTime).format('YYYY-MM-DD HH:mm:ss') || '',
            status: tripFormDetails.status || 'SUBMITTED',
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
            id: this.tripId
        };
        this.btnLoder = true;
        this.commonService.tripDetailModification(updateTripDetailsRequest).subscribe(function (updateTripDetailsResponse) {
            _this.btnLoder = false;
            if (updateTripDetailsResponse.status = 's') {
                _this.submitPopUp.hide();
                _this.toastrMsg.success("Vehicle details modified successfully");
                _this.router.navigate(['/container/trip-detail/list']);
            }
            else {
                _this.toastrMsg.error(updateTripDetailsResponse.userDisplayMesg);
            }
        });
    };
    AddEditTripDetailsComponent.prototype.getTripDetailsForm = function (tripId) {
        var _this = this;
        this.commonService.getTripDetails(tripId).subscribe(function (getTripDetailsResponse) {
            if (getTripDetailsResponse.status == 's') {
                _this.getTripDetails = getTripDetailsResponse.data;
                _this.tripFormDetails.patchValue({
                    acClosingKM: getTripDetailsResponse.data.acClosingKM,
                    acNote: getTripDetailsResponse.data.acNote,
                    acOrNonAc: getTripDetailsResponse.data.acOrNonAc,
                    acStartingKM: getTripDetailsResponse.data.acStartingKM,
                    advanceAmount: getTripDetailsResponse.data.advanceAmount,
                    advanceType: getTripDetailsResponse.data.advanceType,
                    balanceAmount: getTripDetailsResponse.data.balanceAmount,
                    closingKM: getTripDetailsResponse.data.closingKM,
                    /* closingTime: getTripDetailsResponse.data.closingTime
                      ? moment(getTripDetailsResponse.data.closingTime).format('YYYY-MM-DD HH:mm:ss')
                      : '', */
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
                    /* startingTime: getTripDetailsResponse.data.startingTime
                      ? moment(getTripDetailsResponse.data.startingTime).format('YYYY-MM-DD HH:mm:ss')
                      : '', */
                    status: getTripDetailsResponse.data.status,
                    submittedBy: getTripDetailsResponse.data.submittedBy,
                    toll: getTripDetailsResponse.data.toll,
                    totalRent: getTripDetailsResponse.data.totalRent,
                    totalTime: getTripDetailsResponse.data.totalTime,
                    usedAcKM: getTripDetailsResponse.data.usedAcKM,
                    usedKM: getTripDetailsResponse.data.usedKM,
                    vehicleNumber: getTripDetailsResponse.data.vehicleNumber,
                    visitingPlace: getTripDetailsResponse.data.visitingPlace,
                    /* startingTime: getTripDetailsResponse.data.startingTime
                      ? moment(getTripDetailsResponse.data.startingTime).format('YYYY-MM-DD HH:mm')
                      : '', */
                    startingTime: getTripDetailsResponse.data.startingTime
                        ? moment__WEBPACK_IMPORTED_MODULE_4__(getTripDetailsResponse.data.startingTime).toDate()
                        : '',
                    closingTime: getTripDetailsResponse.data.closingTime
                        ? moment__WEBPACK_IMPORTED_MODULE_4__(getTripDetailsResponse.data.closingTime).toDate()
                        : ''
                });
                console.log("this.tripFormDetails.value ", _this.tripFormDetails.value);
                console.log('startingTime :', moment__WEBPACK_IMPORTED_MODULE_4__(getTripDetailsResponse.data.startingTime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'));
                console.log('closingTime :', moment__WEBPACK_IMPORTED_MODULE_4__(getTripDetailsResponse.data.closingTime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'));
            }
        });
    };
    AddEditTripDetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
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
    return AddEditTripDetailsComponent;
}());

// transfetStartDate: this.editdata.dissolveStartDate ? new Date(new Date(this.editdata.dissolveStartDate).getTime() - (this.myDate.getTimezoneOffset() * 60000)).toISOString().slice(0, 16) : '',


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_edit_trip_details_add_edit_trip_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-trip-details/add-edit-trip-details.component */ "./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.ts");
/* harmony import */ var _trip_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip-details.component */ "./src/app/container/trip-details/trip-details/trip-details.component.ts");
/* harmony import */ var _view_trip_details_view_trip_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-trip-details/view-trip-details.component */ "./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.ts");






var routes = [
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
];
var TripDetailsRoutingModule = /** @class */ (function () {
    function TripDetailsRoutingModule() {
    }
    TripDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TripDetailsRoutingModule);
    return TripDetailsRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");








var TripDetailsComponent = /** @class */ (function () {
    function TripDetailsComponent(formBuilder, commonService, router, toastrMsg) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.router = router;
        this.toastrMsg = toastrMsg;
        this.displayedColumns = ['serialNo', 'createdDate', 'vehicleNumber', 'customerName', 'visitingPlace', 'driverName', 'totalRent', 'status', 'action'];
        this.totelCount = 0;
        this.pageSize = 10;
    }
    TripDetailsComponent.prototype.ngOnInit = function () {
        this.tripFormSearchDetails = this.formBuilder.group({
            driverName: [''],
            driverNumber: [''],
            vehiclenumber: ['']
        });
        this.getAll();
    };
    TripDetailsComponent.prototype.getAll = function (pageIndex, pageSize) {
        var _this = this;
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var tripFormSearchDetails = this.tripFormSearchDetails.value;
        var request = {
            filters: {
                vehicleNumber: tripFormSearchDetails.vehiclenumber ? tripFormSearchDetails.vehiclenumber : '',
                customerName: '',
                customerMobileNumber: '',
                driverName: tripFormSearchDetails.driverName ? tripFormSearchDetails.driverName : '',
                visitingPlace: ""
            },
            paginationSize: pageSize,
            sortField: "modifiedDate",
            pageNo: pageIndex,
            sortOrder: "DESC"
        };
        this.commonService.tripDetailsSearchList(request).subscribe(function (response) {
            if (response.status == 's' && response.data) {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response.data.contents);
                _this.totelCount = response.data.totalElements;
            }
            else {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
            }
        });
    };
    TripDetailsComponent.prototype.search = function () {
        var _this = this;
        var tripFormSearchDetails = this.tripFormSearchDetails.value;
        var request = {
            filters: {
                vehicleNumber: tripFormSearchDetails.vehiclenumber ? tripFormSearchDetails.vehiclenumber : '',
                customerName: '',
                customerMobileNumber: '',
                driverName: tripFormSearchDetails.driverName ? tripFormSearchDetails.driverName : '',
                visitingPlace: ""
            },
            paginationSize: 10,
            sortField: "modifiedDate",
            pageNo: 0,
            sortOrder: "DESC"
        };
        this.commonService.tripDetailsSearchList(request).subscribe(function (response) {
            if (response.status === 's' && response.data) {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response.data.contents);
                _this.totelCount = response.data.totalElements;
            }
            else {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
            }
        });
    };
    TripDetailsComponent.prototype.onclear = function () {
        this.tripFormSearchDetails.patchValue({
            driverName: '',
            driverNumber: '',
            vehiclenumber: ''
        });
        /* const request = {
          "filters": {
            "vehicleNumber": "",
            "customerName": "",
            "customerMobileNumber": "",
            "driverName": "",
            "visitingPlace": ""
          },
          "pageNo": 0,
          "paginationSize": 10,
          "sortField": "modifiedDate",
          "sortOrder": "DESC"
        }
        this.commonService.tripDetailsSearchList(request).subscribe(response => {
          if (response.status === 's' && response.data) {
            this.dataSource = new MatTableDataSource(response.data.contents);
            this.totelCount = response.data.totalElements;
          } else {
            this.dataSource = new MatTableDataSource();
          }
        }); */
        this.pageSize = 10;
        this.search();
    };
    TripDetailsComponent.prototype.pageEvent = function (event) {
        var pageIndex = event.pageIndex;
        var pageSize = event.pageSize;
        this.getAll(pageIndex, pageSize);
    };
    TripDetailsComponent.prototype.onSelect = function (obj) {
        this.selectObj = obj ? obj : undefined;
        if (obj) {
            this.viewEnable = true;
            this.editEnable = true;
        }
    };
    TripDetailsComponent.prototype.onEdit = function () {
        if (this.selectObj) {
            this.router.navigate(['/container/trip-detail/modification', this.selectObj.id]);
        }
        else {
            this.toastrMsg.error('View not able');
        }
    };
    TripDetailsComponent.prototype.onView = function () {
        if (this.selectObj) {
            this.router.navigate(['/container/trip-detail/view', this.selectObj.id]);
        }
        else {
            this.toastrMsg.error('View not able');
        }
    };
    TripDetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
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
    return TripDetailsComponent;
}());



/***/ }),

/***/ "./src/app/container/trip-details/trip-details/trip-details.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/trip-details.module.ts ***!
  \****************************************************************************/
/*! exports provided: TripDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsModule", function() { return TripDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip-details-routing.module */ "./src/app/container/trip-details/trip-details/trip-details-routing.module.ts");
/* harmony import */ var _add_edit_trip_details_add_edit_trip_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-trip-details/add-edit-trip-details.component */ "./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.ts");
/* harmony import */ var _view_trip_details_view_trip_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-trip-details/view-trip-details.component */ "./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.ts");
/* harmony import */ var _trip_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-details.component */ "./src/app/container/trip-details/trip-details/trip-details.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");











var TripDetailsModule = /** @class */ (function () {
    function TripDetailsModule() {
    }
    TripDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _trip_details_component__WEBPACK_IMPORTED_MODULE_6__["TripDetailsComponent"],
                _add_edit_trip_details_add_edit_trip_details_component__WEBPACK_IMPORTED_MODULE_4__["AddEditTripDetailsComponent"],
                _view_trip_details_view_trip_details_component__WEBPACK_IMPORTED_MODULE_5__["ViewTripDetailsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["TripDetailsRoutingModule"],
                src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"]
            ]
        })
    ], TripDetailsModule);
    return TripDetailsModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");




var ViewTripDetailsComponent = /** @class */ (function () {
    function ViewTripDetailsComponent(commonService, activatedRoute) {
        this.commonService = commonService;
        this.activatedRoute = activatedRoute;
    }
    ViewTripDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (tripIdResponse) {
            if (tripIdResponse.id) {
                _this.commonService.getTripDetails(tripIdResponse.id).subscribe(function (getTripDetailsResponse) {
                    if (getTripDetailsResponse.status == 's') {
                        _this.getTripDetails = getTripDetailsResponse.data;
                    }
                });
            }
        });
    };
    ViewTripDetailsComponent.ctorParameters = function () { return [
        { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ViewTripDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-trip-details',
            template: __webpack_require__(/*! raw-loader!./view-trip-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.html"),
            styles: [__webpack_require__(/*! ./view-trip-details.component.scss */ "./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewTripDetailsComponent);
    return ViewTripDetailsComponent;
}());



/***/ }),

/***/ "./src/app/service/common.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var CommonService = /** @class */ (function () {
    function CommonService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
    }
    CommonService.prototype.tripDetailsSearchList = function (obj) {
        var url = this.baseUrl + 'tripDetails/search';
        return this.httpClient.post(url, obj);
    };
    CommonService.prototype.tripDetailAddSubmit = function (requestObj) {
        var url = this.baseUrl + 'tripDetails/add';
        return this.httpClient.post(url, requestObj);
    };
    CommonService.prototype.tripDetailModification = function (requestObj) {
        var url = this.baseUrl + 'tripDetails/update';
        return this.httpClient.put(url, requestObj);
    };
    CommonService.prototype.activeVechicle = function () {
        var url = this.baseUrl + 'vehicleDetails/active';
        return this.httpClient.get(url);
    };
    CommonService.prototype.activeDriver = function () {
        var url = this.baseUrl + 'DriverDetails/active';
        return this.httpClient.get(url);
    };
    CommonService.prototype.getStatingKM = function (vehicleNumber) {
        var url = this.baseUrl + 'tripDetails/getLastRecordByV/' + vehicleNumber;
        return this.httpClient.get(url);
    };
    CommonService.prototype.getTripDetails = function (tripId) {
        var url = this.baseUrl + 'tripDetails/getById/' + tripId;
        return this.httpClient.get(url);
    };
    CommonService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommonService);
    return CommonService;
}());



/***/ })

}]);
//# sourceMappingURL=trip-details-trip-details-trip-details-module-es5.js.map