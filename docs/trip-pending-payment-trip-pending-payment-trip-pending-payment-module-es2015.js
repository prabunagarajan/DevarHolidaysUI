(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-pending-payment-trip-pending-payment-trip-pending-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-edit/trip-pending-payment-edit.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-edit/trip-pending-payment-edit.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Trip Details</h3>\r\n<ul class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a [routerLink]=\"['/dashboard']\">Home</a>\r\n    </li>\r\n    <ng-container>\r\n        <li class=\"breadcrumb-item\" [routerLink]=\"['/container/trip-payment-pending/list']\"><a href=\"javascript:\"> Trip\r\n              Pending   Details</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item\"><a href=\"javascript:\">{{screenName}}</a></li>\r\n    </ng-container>\r\n</ul>\r\n<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <form [formGroup]=\"tripFormDetails\" autocomplete=\"off\">\r\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <h3>Customer & Vehicel Details</h3>\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Vehicle Number <span class=\"text-danger\">*</span></label>\r\n                            <select type=\"text\" class=\"form-select\" formControlName=\"vehicleNumber\"\r\n                                placeholder=\"Select Vehicle Number\" (change)=\"getStaringKM($event.target.value)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.vehicleNumber.errors }\" [attr.disabled]=\"true\">\r\n                                <option value=\"\" selected disabled>Select Vehicle Number</option>\r\n                                <option *ngFor=\"let vehicleListElement of vehicleList\"\r\n                                    value=\"{{vehicleListElement.vehicleNumber}}\">{{vehicleListElement.vehicleNumber}}\r\n                                </option>\r\n                            </select>\r\n\r\n                            <div *ngIf=\"formSubmitted && tripForm.vehicleNumber.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.vehicleNumber.errors.required\">Vehicle Number is required</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Date<span class=\"text-danger\">*</span></label>\r\n                            <div class=\"input-group\">\r\n                                <!-- DateTime Input -->\r\n                                <input type=\"text\" [owlDateTime]=\"dt1\" class=\"form-control\" formControlName=\"date\"\r\n                                    placeholder=\"Select Date & Time\" \r\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.date.errors }\"  readonly\r\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\r\n                                    (keydown)=\"$event.preventDefault()\">\r\n\r\n                                <!-- Calendar Icon Inside Input -->\r\n                                <div class=\"input-group-append\">\r\n                                    <button [attr.disabled]=\"true\" class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt1\" type=\"button\">\r\n                                        📅\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <!-- Owl DateTime Picker -->\r\n                                <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\r\n                            </div>\r\n\r\n                            <!-- Validation Message -->\r\n                            <div *ngIf=\"formSubmitted && tripForm.date.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.date.errors.required\">Customer Name is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Customer Name<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"customerName\"\r\n                                placeholder=\"Enter Customer Name\" [attr.disabled]=\"true\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.customerName.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.customerName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.customerName.errors.required\">Customer Name is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Customer Mobile Number<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"customerMobileNumber\"\r\n                                placeholder=\"Enter Customer Mobile Number\" (keydown)=\"numbersOnly($event)\"\r\n                                maxlength=\"10\" [attr.disabled]=\"true\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.customerMobileNumber.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.customerMobileNumber.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.customerMobileNumber.errors.required\">Customer Mobile Number is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driver Name<span class=\"text-danger\">*</span></label>\r\n                            <select type=\"text\" class=\"form-select\" formControlName=\"driverName\" [attr.disabled]=\"true\"\r\n                                placeholder=\"Enter Driver Name\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.driverName.errors }\">\r\n                                <option value=\"\" selected disabled>Select Driver Name</option>\r\n                                <option *ngFor=\"let driverListElemnt of driverList\" value=\"{{driverListElemnt?.name}}\">\r\n                                    {{driverListElemnt?.name}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"formSubmitted && tripForm.driverName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.driverName.errors.required\">Driver Name is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Starting KM<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"startingKM\"\r\n                                placeholder=\"Enter Starting KM\" (keydown)=\"numbersOnly($event)\"\r\n                                (keyup)=\"startingKM($event.target.value);\" [attr.disabled]=\"true\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.startingKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.startingKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.startingKM.errors.required\">Starting KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Closing KM<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"closingKM\"\r\n                                placeholder=\"Enter Closing KM\" (keydown)=\"numbersOnly($event)\"\r\n                                (keyup)=\"closeingKM($event.target.value)\" [attr.disabled]=\"true\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.closingKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.closingKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.closingKM.errors.required\">Closing KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Used KM<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"usedKM\" placeholder=\"Enter Used KM\"\r\n                            [attr.disabled]=\"true\"     [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.usedKM.errors }\" disabled />\r\n                            <div *ngIf=\"formSubmitted && tripForm.usedKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.usedKM.errors.required\">Used KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Starting Time<span class=\"text-danger\">*</span></label>\r\n                            <div class=\"input-group\">\r\n                                <!-- DateTime Input -->\r\n                                <input type=\"text\" [owlDateTime]=\"dt2\" class=\"form-control\"\r\n                                    placeholder=\"Select Staring Time\" formControlName=\"startingTime\"\r\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.startingTime.errors }\"\r\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\r\n                                    (keydown)=\"$event.preventDefault()\" readonly />\r\n\r\n                                <!-- Calendar Icon Inside Input -->\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" [attr.disabled]=\"true\" [owlDateTimeTrigger]=\"dt2\" type=\"button\">\r\n                                        📅\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <!-- Owl DateTime Picker -->\r\n                                <owl-date-time #dt2 [pickerType]=\"'both'\" [format]=\"'DD/MM/YYYY HH:mm'\"\r\n                                    [minuteStep]=\"5\"></owl-date-time>\r\n                            </div>\r\n\r\n                            <!-- Validation Message -->\r\n                            <div *ngIf=\"formSubmitted && tripForm.startingTime.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.startingTime.errors.required\">Starting Time is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Closing Time<span class=\"text-danger\">*</span></label>\r\n                            <div class=\"input-group\">\r\n                                <input type=\"text\" [owlDateTime]=\"dt3\" class=\"form-control\"\r\n                                    placeholder=\"Select Closing Time\" formControlName=\"closingTime\"\r\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.closingTime.errors }\"\r\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\r\n                                    (keydown)=\"$event.preventDefault()\"  readonly>\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" [attr.disabled]=\"true\" [owlDateTimeTrigger]=\"dt3\" type=\"button\">\r\n                                        📅\r\n                                    </button>\r\n                                </div>\r\n                                <owl-date-time #dt3 [pickerType]=\"'both'\" [format]=\"'DD/MM/YYYY HH:mm'\"\r\n                                    [minuteStep]=\"5\"></owl-date-time>\r\n                            </div>\r\n                            <div *ngIf=\"formSubmitted && tripForm.closingTime.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.closingTime.errors.required\">Closing Time is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Total Hrs<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"totalTime\"\r\n                                placeholder=\"Enter Total HRS\" [attr.disabled]=\"true\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.totalTime.errors }\" readonly />\r\n                            <div *ngIf=\"formSubmitted && tripForm.totalTime.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.totalTime.errors.required\">Total HRS is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Type<span class=\"text-danger\">*</span></label>\r\n                            <select class=\"form-select\" formControlName=\"acOrNonAc\"\r\n                                (click)=\"acDetect($event.target.value)\" [attr.disabled]=\"true\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acOrNonAc.errors }\">\r\n                                <option value=\"\" disabled selected>Select AC or Non-AC</option>\r\n                                <option value=\"AC\">AC</option>\r\n                                <option value=\"Non-AC\">Non-AC</option>\r\n                            </select>\r\n                            <div *ngIf=\"formSubmitted && tripForm.acOrNonAc.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.acOrNonAc.errors.required\">AC Type is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Starting KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\r\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\"\r\n                            [attr.disabled]=\"true\" (keydown)=\"numbersOnly($event)\" (keyup)=\"acStaringKmCalculation($event.target.value);\"\r\n                                formControlName=\"acStartingKM\" placeholder=\"Enter AC Starting KM\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acStartingKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.acStartingKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.acStartingKM.errors.required\">AC Starting KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Closed KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\r\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\"\r\n                                (keydown)=\"numbersOnly($event)\" (keyup)=\"acClosingKmCalculation($event.target.value);\"\r\n                                [attr.disabled]=\"true\"  formControlName=\"acClosingKM\" placeholder=\"Enter AC Closed KM\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acClosingKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.acClosingKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.acClosingKM.errors.required\">AC Closed KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Used KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\r\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\"\r\n                                (keydown)=\"numbersOnly($event)\" formControlName=\"usedAcKM\"\r\n                                [attr.disabled]=\"true\"    placeholder=\"Enter AC Used KM\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.usedAcKM.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.usedAcKM.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.usedAcKM.errors.required\">AC Used KM is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>AC Note<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"acNote\" placeholder=\"Enter AC Note\"\r\n                            [attr.disabled]=\"true\" [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acNote.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.acNote.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.acNote.errors.required\">AC Note is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n\r\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\r\n                <h3>Visiting Place Details</h3>\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Visiting Places <span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"visitingPlace\"\r\n                            [attr.disabled]=\"true\"   placeholder=\"Enter Visiting Place\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.visitingPlace.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.visitingPlace.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.visitingPlace.errors.required\">Visiting Place is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Day Rent<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"dayRent\"\r\n                            [attr.disabled]=\"true\"   placeholder=\"Enter Day Rent\" (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.dayRent.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.dayRent.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.dayRent.errors.required\">Day Rent is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Toll<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"toll\" placeholder=\"Enter Toll\"\r\n                                (keyup)=\"profitAmoutCalculation('Toll');\" (keydown)=\"numbersOnly($event)\"\r\n                                [attr.disabled]=\"true\"    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.toll.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.toll.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.toll.errors.required\">Toll is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Total Rent<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"totalRent\"\r\n                                placeholder=\"Enter Total Rent\"\r\n                                (keyup)=\"getTotalRentAmount($event.target.value); profitAmoutCalculation('Total Rent')\"\r\n                                [attr.disabled]=\"true\"   (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.totalRent.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.totalRent.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.totalRent.errors.required\">Total Rent is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Fuel<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"diesel\" placeholder=\"Enter Fuel\"\r\n                            [attr.disabled]=\"true\" (keyup)=\"profitAmoutCalculation('Fuel')\" (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.diesel.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.diesel.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.diesel.errors.required\">Fuel is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driver Payment<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"driverPayment\"\r\n                                placeholder=\"Enter Driver Payment\" (keydown)=\"numbersOnly($event)\"\r\n                                [attr.disabled]=\"true\"      (keyup)=\"profitAmoutCalculation('Driver Payment')\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.driverPayment.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.driverPayment.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.driverPayment.errors.required\">Driver Payment is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Permit<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"permitAmount\"\r\n                                placeholder=\"Enter Permit\" (keydown)=\"numbersOnly($event)\"\r\n                                [attr.disabled]=\"true\"  (keyup)=\"profitAmoutCalculation('Permit');\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.permitAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.permitAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.permitAmount.errors.required\">Permit is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Advance<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"advanceAmount\"\r\n                                placeholder=\"Enter Advance\" (keyup)=\"getAdvanceAmount($event.target.value);\"\r\n                                [attr.disabled]=\"true\"  (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.advanceAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.advanceAmount.errors.required\">Advance is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Advance Type<span class=\"text-danger\">*</span></label>\r\n                            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"advanceType\"\r\n                                placeholder=\"Enter Advance Type\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceType.errors }\" /> -->\r\n\r\n                            <select type=\"text\" class=\"form-select\" formControlName=\"advanceType\"\r\n                            [attr.disabled]=\"true\"  placeholder=\"Enter Advance Type\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceType.errors }\">\r\n                                <option value=\"\" hidden>Select Advance Type</option>\r\n                                <option value=\"No Advance\">No Advance</option>\r\n                                <option value=\"Fuel\">Fuel</option>\r\n                                <option value=\"Hand\">Hand</option>\r\n                            </select>\r\n                            <div *ngIf=\"formSubmitted && tripForm.advanceType.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.advanceType.errors.required\">Advance Type is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Payment Type<span class=\"text-danger\">*</span></label>\r\n                            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"paymentType\"\r\n                                placeholder=\"Enter Payment Type\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.paymentType.errors }\" /> -->\r\n                            <select type=\"text\" class=\"form-select\" formControlName=\"paymentType\"\r\n                            [attr.disabled]=\"true\"  placeholder=\"Enter Payment Type\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.paymentType.errors }\">\r\n                                <option value=\"\" hidden> Select Payment Type </option>\r\n                                <option value=\"UPI\"> UPI - GPay / PhonePay </option>\r\n                                <option value=\"HAND\"> Hand </option>\r\n                            </select>\r\n                            <div *ngIf=\"formSubmitted && tripForm.paymentType.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.paymentType.errors.required\">Payment Type is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Recevied Amount<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"receivedAmount\"\r\n                             placeholder=\"Enter Recevied Amount\" (keyup)=\"getReceivedAmount($event.target.value);\"\r\n                                (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.receivedAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.receivedAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.receivedAmount.errors.required\">Recevied Amount is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Discount<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"discountAmount\"\r\n                            placeholder=\"Enter Discount Amount\" \r\n                                (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.discountAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.discountAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.discountAmount.errors.required\">Recevied Amount is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Pending Amount<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"pendingAmount\" disabled\r\n                            [attr.disabled]=\"true\"  placeholder=\"Enter Pending Amount\" (keyup)=\"getPendingAmount($event.target.value);\"\r\n                                (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.pendingAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.pendingAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.pendingAmount.errors.required\">Pending Amount is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Balance<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"balanceAmount\"\r\n                                placeholder=\"Enter Balance\" disabled (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.balanceAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.balanceAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.balanceAmount.errors.required\">Balance is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Wrote By<span class=\"text-danger\">*</span></label>\r\n                            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"submittedBy\"\r\n                                placeholder=\"Enter Wrote By\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.submittedBy.errors }\" /> -->\r\n                            <select type=\"text\" class=\"form-select\" formControlName=\"submittedBy\"\r\n                            [attr.disabled]=\"true\"  [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.submittedBy.errors }\">\r\n                                <option value=\"\" hidden>Select Wrote By</option>\r\n                                <option *ngFor=\"let driverListElemnt of driverList\" value=\"{{driverListElemnt?.name}}\">\r\n                                    {{driverListElemnt?.name}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"formSubmitted && tripForm.submittedBy.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.submittedBy.errors.required\">Wrote By is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Profit<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"profitAmount\" disabled\r\n                            [attr.disabled]=\"true\"    placeholder=\"Enter Profit\" (keydown)=\"numbersOnly($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.profitAmount.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.profitAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.profitAmount.errors.required\">Profit is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Remark<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"remark\" placeholder=\"Enter remark\"\r\n                            [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.remark.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.remark.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.remark.errors.required\">remark is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Verified By (Manager)<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"verifiedByManager\"\r\n                                placeholder=\"Enter Verified By (Manager)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.verifiedByManager.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.verifiedByManager.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.verifiedByManager.errors.required\">Verified By (Manager) is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Verified By (Proprietor)<span class=\"text-danger\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"verifiedByProprietor\"\r\n                                placeholder=\"Enter Verified By (Proprietor)\"\r\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.verifiedByProprietor.errors }\" />\r\n                            <div *ngIf=\"formSubmitted && tripForm.verifiedByProprietor.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"tripForm.verifiedByProprietor.errors.required\">Verified By (Proprietor) is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n                <br>\r\n                <div class=\"row modal-footer\" *ngIf=\"tripLogDetails?.length > 0\">\r\n                    <h4>Trip Log Details</h4>\r\n                    <hr>\r\n\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-bordered\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>S.No</th>\r\n                                    <th>Application No</th>\r\n                                    <th>User Name</th>\r\n                                    <th>Action</th>\r\n                                    <th>Comments</th>\r\n                                    <th>Remark</th>\r\n                                    <th>Created Date</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let element of tripLogDetails; let i = index\">\r\n                                    <td>{{ i+1 }}</td>\r\n                                    <td>{{ element.applnNo }}</td>\r\n                                    <td>{{ element.userName }}</td>\r\n                                    <td class=\"text-center\">\r\n                                        <span *ngIf=\"element?.action == 'SUBMITTED'\"\r\n                                            class=\"badge m-r-5 badge-light-primary\">\r\n                                            {{element?.action}}</span>\r\n                                        <span *ngIf=\"element?.action == 'APPROVED'\"\r\n                                            class=\"badge m-r-5 badge-light-success\">\r\n                                            {{element?.action}}</span>\r\n                                        <span *ngIf=\"element?.action == 'REQUESTFORCLARIFICATION'\"\r\n                                            class=\"badge m-r-5 badge-light-secondary\">\r\n                                            {{element?.action}}</span>\r\n                                        <span *ngIf=\"element?.action == 'INPROGRESS'\"\r\n                                            class=\"badge m-r-5 badge-light-success\">\r\n                                            {{element?.action}}</span>\r\n                                        <span *ngIf=\"element?.action == 'FORWARDED'\"\r\n                                            class=\"badge m-r-5 badge-light-warning\">\r\n                                            {{element?.action}}</span>\r\n                                        <span *ngIf=\"element?.action == 'UPDATED'\"\r\n                                            class=\"badge m-r-5 badge-light-primary\">\r\n                                            {{element?.action}}</span>\r\n                                    </td>\r\n                                    <td>{{ element.comments }}</td>\r\n                                    <td>{{ element.remarks }}</td>\r\n                                    <td>{{ element.createdDate | date: 'dd-MM-yy HH:mm:ss' }}</td>\r\n\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col-lg-12 text-end\">\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"submit\" *ngIf=\"!forwardApproveBtnShow && !approveBtnShow\"\r\n                                class=\"btn btn-outline-success\"\r\n                                (click)=\"submit(tripFormDetails , 'Level 1')\">Submit</button>\r\n\r\n                            <!-- <button type=\"submit\" *ngIf=\"approveBtnShow ||forwardApproveBtnShow\"\r\n                                class=\"btn btn-outline-warning\"\r\n                                (click)=\"submit(tripFormDetails , 'Level 1 REQ')\">REQUEST FOR CLARIFICATION</button>\r\n\r\n                            <button type=\"submit\" *ngIf=\"forwardApproveBtnShow\" class=\"btn btn-outline-success\"\r\n                                (click)=\"submit(tripFormDetails , 'Level 3')\">Approved</button>\r\n\r\n                            <button type=\"submit\" *ngIf=\"approveBtnShow\" class=\"btn btn-outline-success\"\r\n                                (click)=\"submit(tripFormDetails, 'Level 2')\">Forwarded</button> -->\r\n\r\n                            <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"back()\"\r\n                                >Back</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<app-ui-modal #submitPopUp [hideFooter]=\"true\" [dialogClass]=\"'modal-lg'\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Confirm</h5>\r\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n            (click)=\"submitPopUp.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n    </div>\r\n\r\n    <div class=\"app-modal-body\">\r\n        <p>Are you sure whant submit?</p>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"btnLoder\" (click)=\"finalSubmit()\">\r\n                <i class=\"fa\" [ngClass]=\"{'fa-spin fa-asterisk': btnLoder, 'fa-check': !btnLoder}\"></i>Yes\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"submitPopUp.hide()\">\r\n                <i class=\"feather icon-slash\"></i> No\r\n            </button>\r\n        </div>\r\n    </div>\r\n</app-ui-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-view/trip-pending-payment-view.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-view/trip-pending-payment-view.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['/dashboard']\">Home</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['/container/trip-detail/list']\">Trip Details</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">View</li>\r\n  </ul>\r\n  \r\n  <app-card [hidHeader]=\"true\" class=\"view-panel\">\r\n    <h4>Trip Details</h4>\r\n    <hr>\r\n    <div class=\"container\">\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Vehicle Number</label>\r\n          <p class=\"view-text\">{{getTripDetails?.vehicleNumber}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Customer Name</label>\r\n          <p class=\"view-text\">{{getTripDetails?.customerName}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Customer Mobile Number</label>\r\n          <p class=\"view-text\">{{getTripDetails?.customerMobileNumber}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Driver Name</label>\r\n          <p class=\"view-text\">{{getTripDetails?.driverName}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Starting KM</label>\r\n          <p class=\"view-text\">{{getTripDetails?.startingKM}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Closing KM</label>\r\n          <p class=\"view-text\">{{getTripDetails?.closingKM}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Used KM</label>\r\n          <p class=\"view-text\">{{getTripDetails?.usedKM}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">AC or Non-AC</label>\r\n          <p class=\"view-text\">{{getTripDetails?.acOrNonAc}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Starting Time</label>\r\n          <p class=\"view-text\">{{getTripDetails?.startingTime}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Closing Time</label>\r\n          <p class=\"view-text\">{{getTripDetails?.closingTime}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Total Time</label>\r\n          <p class=\"view-text\">{{getTripDetails?.totalTime}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Visiting Place</label>\r\n          <p class=\"view-text\">{{getTripDetails?.visitingPlace}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Advance Amount</label>\r\n          <p class=\"view-text\">{{getTripDetails?.advanceAmount}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Total Rent</label>\r\n          <p class=\"view-text\">{{getTripDetails?.totalRent}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Diesel Amount</label>\r\n          <p class=\"view-text\">{{getTripDetails?.diesel}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Driver Payment</label>\r\n          <p class=\"view-text\">{{getTripDetails?.driverPayment}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Received Amount</label>\r\n          <p class=\"view-text\">{{getTripDetails?.receivedAmount}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Pending Amount</label>\r\n          <p class=\"view-text\">{{getTripDetails?.pendingAmount}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Submitted By</label>\r\n          <p class=\"view-text\">{{getTripDetails?.submittedBy}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"view-label\">Status</label>\r\n          <p class=\"view-text\">{{getTripDetails?.status}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <hr>\r\n      <div class=\"row modal-footer\" *ngIf=\"tripLogDetails?.length > 0\">\r\n        <h4>Trip Log Details</h4>\r\n        <hr>\r\n  \r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>S.No</th>\r\n                <th>Application No</th>\r\n                <th>User Name</th>\r\n                <th>Action</th>\r\n                <th>Comments</th>\r\n                <th>Remark</th>\r\n                <th>Created Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let element of tripLogDetails; let i = index\">\r\n                <td>{{ i+1 }}</td>\r\n                <td>{{ element.applnNo }}</td>\r\n                <td>{{ element.userName }}</td>\r\n                <td class=\"text-center\">\r\n                  <span *ngIf=\"element?.action == 'SUBMITTED'\" class=\"badge m-r-5 badge-light-primary\">\r\n                    {{element?.action}}</span>\r\n                  <span *ngIf=\"element?.action == 'APPROVED'\" class=\"badge m-r-5 badge-light-success\">\r\n                    {{element?.action}}</span>\r\n                  <span *ngIf=\"element?.action == 'REQUESTFORCLARIFICATION'\" class=\"badge m-r-5 badge-light-secondary\">\r\n                    {{element?.action}}</span>\r\n                  <span *ngIf=\"element?.action == 'INPROGRESS'\" class=\"badge m-r-5 badge-light-success\">\r\n                    {{element?.action}}</span>\r\n                  <span *ngIf=\"element?.action == 'FORWARDED'\" class=\"badge m-r-5 badge-light-warning\">\r\n                    {{element?.action}}</span>\r\n                  <span *ngIf=\"element?.action == 'UPDATED'\" class=\"badge m-r-5 badge-light-primary\">\r\n                    {{element?.action}}</span>\r\n                </td>\r\n                <td>{{ element.comments }}</td>\r\n                <td>{{ element.remarks }}</td>\r\n                <td>{{ element.createdDate | date: 'dd-MM-yy HH:mm:ss' }}</td>\r\n  \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-lg-12 text-end\">\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"back()\">Back</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </app-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer-container\">\r\n    <div class=\"button-container\">\r\n        <button class=\"btn btn-outline-secondary list-button-container\" (click)=\"onEdit()\" [disabled]=\"!editEnable\">\r\n            <span class=\"list-text-alaign-center\">Edit</span>\r\n        </button>\r\n        <button class=\"btn btn-outline-warning list-button-container\" (click)=\"onView()\" [disabled]=\"!viewEnable\">\r\n            <span class=\"list-text-alaign-center\">View</span>\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n<!-- <app-card [hidHeader]=\"true\" blockClass=\"table-border-style\" class=\"list-panel\">\r\n    <div class=\"table-responsive text-center\">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table-design\">\r\n                <ng-container matColumnDef=\"serialNo\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> S.No </th>\r\n                    <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-center\"> {{ i + 1 }} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"tripNumber\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">Trip Number</th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.tripNumber}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"createdDate\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n                        {{element.createdDate | date: 'dd-MM-yyyy'}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"vehicleNumber\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Vehicle Number </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.vehicleNumber}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"customerName\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">Customer Name</th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.customerName}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"visitingPlace\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Visiting Place </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.visitingPlace}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"driverName\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Driver Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.driverName}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"totalRent\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">Total Rent</th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.totalRent}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <ng-container matColumnDef=\"pendingAmount\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">Pending Amount</th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.pendingAmount}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n                        <span class=\"badge badge-light-success\"\r\n                            *ngIf=\"element?.status == 'APPROVED'\">{{element?.status}}</span>\r\n                        <span class=\"badge badge-light-info\"\r\n                            *ngIf=\"element?.status == 'INPROGRESS'\">{{element?.status}}</span>\r\n                        <span class=\"badge badge-light-secondary\"\r\n                            *ngIf=\"element?.status == 'FORWARDED'\">{{element?.status}}</span>\r\n                        <span class=\"badge badge-light-warning\"\r\n                            *ngIf=\"element?.status == 'REQUESTFORCLARIFICATION'\">{{element?.status}}</span>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Action </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n                        <mat-radio-button (click)=\"onSelect(element)\"></mat-radio-button>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <div *ngIf=\"isLoading\" class=\"table-loader\">\r\n                <mat-spinner diameter=\"64\"></mat-spinner>\r\n            </div>\r\n            <mat-paginator [length]=\"totelCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\"\r\n                (page)=\"pageEvent($event)\">\r\n            </mat-paginator>\r\n        </div>\r\n    </div>\r\n</app-card> -->\r\n\r\n\r\n<app-mat-table-configuration [columns]=\"columns\" [actionKeys]=\"actionKeys\" [dataSource]=\"dataSource\"\r\n    [totalCount]=\"totelCount\" [pageSize]=\"pageSize\" (paginationEvent)=\"handlePagination($event)\"\r\n    (checkboxAction)=\"onChecked($event)\">\r\n</app-mat-table-configuration>"

/***/ }),

/***/ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-edit/trip-pending-payment-edit.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-edit/trip-pending-payment-edit.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci90cmlwLXBlbmRpbmctcGF5bWVudC90cmlwLXBlbmRpbmctcGF5bWVudC90cmlwLXBlbmRpbmctcGF5bWVudC1lZGl0L3RyaXAtcGVuZGluZy1wYXltZW50LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-edit/trip-pending-payment-edit.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-edit/trip-pending-payment-edit.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: TripPendingPaymentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripPendingPaymentEditComponent", function() { return TripPendingPaymentEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");







let TripPendingPaymentEditComponent = class TripPendingPaymentEditComponent {
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
                this.getTripDetailsForm(tripIdResponse.id);
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
            totalRent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            diesel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            driverPayment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            permitAmount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            receivedAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pendingAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // balanceAmount: ['', Validators.required],
            profitAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
            this.updateTripDetails();
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
    getReceivedAmount(receivedAmount) {
        const advanceAmount = this.tripFormDetails.controls.advanceAmount.value ? parseFloat(this.tripFormDetails.controls.advanceAmount.value) : 0;
        const totalRentAmount = this.tripFormDetails.controls.totalRent.value ? parseFloat(this.tripFormDetails.controls.totalRent.value) : 0;
        const finalAmount = advanceAmount + parseFloat(receivedAmount);
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
    }
    getTotalRentAmount(totalRentAmount) {
        const advanceAmount = this.tripFormDetails.controls.advanceAmount.value ? parseFloat(this.tripFormDetails.controls.advanceAmount.value) : 0;
        const receivedAmount = this.tripFormDetails.controls.receivedAmount.value ? parseFloat(this.tripFormDetails.controls.receivedAmount.value) : 0;
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
    }
    getAdvanceAmount(advanceAmount) {
        const totalRentAmount = this.tripFormDetails.controls.totalRent.value ? parseFloat(this.tripFormDetails.controls.totalRent.value) : 0;
        const receivedAmount = this.tripFormDetails.controls.receivedAmount.value ? parseFloat(this.tripFormDetails.controls.receivedAmount.value) : 0;
        const pendingAmount = this.tripFormDetails.controls.pendingAmount.value ? parseFloat(this.tripFormDetails.controls.pendingAmount.value) : 0;
        const finalAmount = parseFloat(advanceAmount) + receivedAmount;
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
    }
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
        // Formula < == > ("Profit = Total Rent - (Toll + Fuel + Driver Payment + Permit)")
        const totalRentAmount = this.tripFormDetails.value.totalRent ? parseFloat(this.tripFormDetails.value.totalRent) : 0;
        const tollAmount = this.tripFormDetails.value.toll ? parseFloat(this.tripFormDetails.value.toll) : 0;
        const fuelAmount = this.tripFormDetails.value.diesel ? parseFloat(this.tripFormDetails.value.diesel) : 0;
        const driverPaymentAmount = this.tripFormDetails.value.driverPayment ? parseFloat(this.tripFormDetails.value.driverPayment) : 0;
        const permitAmount = this.tripFormDetails.value.permitAmount ? parseFloat(this.tripFormDetails.value.permitAmount) : 0;
        const profitAmount = (totalRentAmount - (tollAmount + fuelAmount + driverPaymentAmount + permitAmount));
        this.tripFormDetails.patchValue({
            profitAmount: profitAmount ? profitAmount : 0
        });
    }
    updateTripDetails() {
        const tripFormDetails = this.tripFormDetails.value;
        console.log(tripFormDetails);
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
            id: this.tripId,
            remarks: tripFormDetails.remark || '',
        };
        this.btnLoder = true;
        this.commonService.tripDetailModification(updateTripDetailsRequest).subscribe(updateTripDetailsResponse => {
            this.btnLoder = false;
            if (updateTripDetailsResponse.status = 's') {
                this.submitPopUp.hide();
                this.toastrMsg.success("Pending Payment details modified successfully");
                this.router.navigate(['/container/trip-payment-pending/list']);
            }
            else {
                this.toastrMsg.error(updateTripDetailsResponse.userDisplayMesg);
            }
        });
    }
    getTripDetailsForm(tripId) {
        this.commonService.getTripDetails(tripId).subscribe(getTripDetailsResponse => {
            if (getTripDetailsResponse.status == 's') {
                this.getTripDetails = getTripDetailsResponse.data;
                console.log(this.getTripDetails);
                this.commonService.getTripDetailLogs(getTripDetailsResponse.data.tripNumber).subscribe(gettripLogDetailsResponse => {
                    if (gettripLogDetailsResponse.status == 's') {
                        this.tripLogDetails = gettripLogDetailsResponse.data;
                    }
                    else {
                        this.tripLogDetails = [];
                    }
                });
                // if(this.getTripDetails ){
                //   this.tripFormDetails.disable();
                //   this.tripFormDetails.get('receivedAmount').enable();
                //   this.tripFormDetails.get('discountAmount').enable();
                // }
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
        this.router.navigate(['/container/trip-payment-pending/list']);
    }
};
TripPendingPaymentEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('submitPopUp', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TripPendingPaymentEditComponent.prototype, "submitPopUp", void 0);
TripPendingPaymentEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trip-pending-payment-edit',
        template: __webpack_require__(/*! raw-loader!./trip-pending-payment-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-edit/trip-pending-payment-edit.component.html"),
        styles: [__webpack_require__(/*! ./trip-pending-payment-edit.component.scss */ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-edit/trip-pending-payment-edit.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], TripPendingPaymentEditComponent);



/***/ }),

/***/ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-routing.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: TripPendingPaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripPendingPaymentRoutingModule", function() { return TripPendingPaymentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trip_pending_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip-pending-payment.component */ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment.component.ts");
/* harmony import */ var _trip_pending_payment_edit_trip_pending_payment_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip-pending-payment-edit/trip-pending-payment-edit.component */ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-edit/trip-pending-payment-edit.component.ts");
/* harmony import */ var _trip_pending_payment_view_trip_pending_payment_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip-pending-payment-view/trip-pending-payment-view.component */ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-view/trip-pending-payment-view.component.ts");






const routes = [
    {
        path: 'list',
        component: _trip_pending_payment_component__WEBPACK_IMPORTED_MODULE_3__["TripPendingPaymentComponent"]
    },
    {
        path: 'modification/:id',
        component: _trip_pending_payment_edit_trip_pending_payment_edit_component__WEBPACK_IMPORTED_MODULE_4__["TripPendingPaymentEditComponent"]
    },
    {
        path: 'view/:id',
        component: _trip_pending_payment_view_trip_pending_payment_view_component__WEBPACK_IMPORTED_MODULE_5__["TripPendingPaymentViewComponent"]
    }
];
let TripPendingPaymentRoutingModule = class TripPendingPaymentRoutingModule {
};
TripPendingPaymentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TripPendingPaymentRoutingModule);



/***/ }),

/***/ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-view/trip-pending-payment-view.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-view/trip-pending-payment-view.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci90cmlwLXBlbmRpbmctcGF5bWVudC90cmlwLXBlbmRpbmctcGF5bWVudC90cmlwLXBlbmRpbmctcGF5bWVudC12aWV3L3RyaXAtcGVuZGluZy1wYXltZW50LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-view/trip-pending-payment-view.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-view/trip-pending-payment-view.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: TripPendingPaymentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripPendingPaymentViewComponent", function() { return TripPendingPaymentViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");




let TripPendingPaymentViewComponent = class TripPendingPaymentViewComponent {
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
        this.router.navigate(['/container/trip-payment-pending/list']);
    }
};
TripPendingPaymentViewComponent.ctorParameters = () => [
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TripPendingPaymentViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trip-pending-payment-view',
        template: __webpack_require__(/*! raw-loader!./trip-pending-payment-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-view/trip-pending-payment-view.component.html"),
        styles: [__webpack_require__(/*! ./trip-pending-payment-view.component.scss */ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-view/trip-pending-payment-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TripPendingPaymentViewComponent);



/***/ }),

/***/ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci90cmlwLXBlbmRpbmctcGF5bWVudC90cmlwLXBlbmRpbmctcGF5bWVudC90cmlwLXBlbmRpbmctcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TripPendingPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripPendingPaymentComponent", function() { return TripPendingPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config/master-list-columns */ "./src/app/config/master-list-columns.ts");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");








let TripPendingPaymentComponent = class TripPendingPaymentComponent {
    constructor(formBuilder, commonService, router, toastrMsg) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.router = router;
        this.toastrMsg = toastrMsg;
        this.columns = src_app_config_master_list_columns__WEBPACK_IMPORTED_MODULE_6__["MasterListColumns"].tripListPendingPaymentColumns;
        this.actionKeys = ['checkbox']; // ['edit', 'delete'] for buttons
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](); // Example data source
        this.totalCount = 10;
        this.pageSize = 10;
        this.displayedColumns = ['serialNo', 'tripNumber', 'createdDate', 'vehicleNumber', 'customerName', 'visitingPlace', 'driverName', 'totalRent', 'pendingAmount', 'status', 'action'];
        this.totelCount = 0;
    }
    ngOnInit() {
        this.getTripPaymentPendingList();
    }
    getTripPaymentPendingList(pageIndex = 0, pageSize = this.pageSize) {
        this.isLoading = true;
        this.commonService.getTripPaymentPendingList().subscribe(response => {
            this.isLoading = false;
            if (response.status == 's' && response.data) {
                const serialNumber = pageIndex * pageSize; // Calculate start index dynamically
                const dataSource = response.data.map((v, i) => (Object.assign({}, v, { sNo: serialNumber + i + 1 // Adjust serial number
                 })));
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](dataSource);
                this.totelCount = response.data.length;
            }
            else {
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
            }
        });
    }
    onChecked(element) {
        const selectObj = this.dataSource.data.find((findElement) => findElement.id == element.id);
        if (selectObj) {
            this.selectObj = selectObj;
            this.editEnable = true;
            this.viewEnable = true;
        }
    }
    onEdit() {
        if (this.selectObj) {
            this.router.navigate(['/container/trip-payment-pending/modification', this.selectObj.id]);
        }
        else {
            this.toastrMsg.warning('Edit not able');
        }
    }
    onView() {
        if (this.selectObj) {
            this.router.navigate(['/container/trip-payment-pending/view', this.selectObj.id]);
        }
        else {
            this.toastrMsg.warning('View not able');
        }
    }
};
TripPendingPaymentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], TripPendingPaymentComponent.prototype, "paginator", void 0);
TripPendingPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trip-pending-payment',
        template: __webpack_require__(/*! raw-loader!./trip-pending-payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment.component.html"),
        styles: [__webpack_require__(/*! ./trip-pending-payment.component.scss */ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], TripPendingPaymentComponent);



/***/ }),

/***/ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: MY_CUSTOM_FORMATS, TripPendingPaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_CUSTOM_FORMATS", function() { return MY_CUSTOM_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripPendingPaymentModule", function() { return TripPendingPaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _trip_pending_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip-pending-payment-routing.module */ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-routing.module.ts");
/* harmony import */ var _trip_pending_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip-pending-payment.component */ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ng_pick_datetime_date_time_adapter_moment_adapter_moment_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _trip_pending_payment_edit_trip_pending_payment_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trip-pending-payment-edit/trip-pending-payment-edit.component */ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-edit/trip-pending-payment-edit.component.ts");
/* harmony import */ var _trip_pending_payment_view_trip_pending_payment_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trip-pending-payment-view/trip-pending-payment-view.component */ "./src/app/container/trip-pending-payment/trip-pending-payment/trip-pending-payment-view/trip-pending-payment-view.component.ts");












const MY_CUSTOM_FORMATS = {
    fullPickerInput: 'DD-MM-YYYY HH:mm',
    parseInput: 'DD-MM-YYYY HH:mm',
    datePickerInput: 'DD-MM-YYYY',
    timePickerInput: 'HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};
let TripPendingPaymentModule = class TripPendingPaymentModule {
};
TripPendingPaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_trip_pending_payment_component__WEBPACK_IMPORTED_MODULE_4__["TripPendingPaymentComponent"], _trip_pending_payment_edit_trip_pending_payment_edit_component__WEBPACK_IMPORTED_MODULE_10__["TripPendingPaymentEditComponent"], _trip_pending_payment_view_trip_pending_payment_view_component__WEBPACK_IMPORTED_MODULE_11__["TripPendingPaymentViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _trip_pending_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["TripPendingPaymentRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OwlNativeDateTimeModule"]
        ],
        providers: [
            {
                provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["DateTimeAdapter"],
                useClass: ng_pick_datetime_date_time_adapter_moment_adapter_moment_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_7__["MomentDateTimeAdapter"],
                deps: [ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OWL_DATE_TIME_LOCALE"]],
            },
            { provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OWL_DATE_TIME_FORMATS"], useValue: MY_CUSTOM_FORMATS },
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })
], TripPendingPaymentModule);



/***/ })

}]);
//# sourceMappingURL=trip-pending-payment-trip-pending-payment-trip-pending-payment-module-es2015.js.map