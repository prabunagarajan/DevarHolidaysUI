(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-details-trip-details-trip-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Trip Details</h3>\n<ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n        <a [routerLink]=\"['/dashboard']\">Home</a>\n    </li>\n    <ng-container>\n        <li class=\"breadcrumb-item\" [routerLink]=\"['/container/trip-detail/list']\"><a href=\"javascript:\"> Trip\n                Details</a>\n        </li>\n        <li class=\"breadcrumb-item\"><a href=\"javascript:\">{{screenName}}</a></li>\n    </ng-container>\n</ul>\n<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <form [formGroup]=\"tripFormDetails\" autocomplete=\"off\">\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                <h3>Customer & Vehicel Details</h3>\n                <hr>\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Vehicle Number <span class=\"text-danger\">*</span></label>\n                            <select type=\"text\" class=\"form-select\" formControlName=\"vehicleNumber\"\n                                placeholder=\"Select Vehicle Number\" (change)=\"getStaringKM($event.target.value)\"\n                                [attr.disabled]=\"isDisableds ? true : null\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.vehicleNumber.errors }\">\n                                <option value=\"\" selected disabled>Select Vehicle Number</option>\n                                <option *ngFor=\"let vehicleListElement of vehicleList\"\n                                    value=\"{{vehicleListElement.vehicleNumber}}\">{{vehicleListElement.vehicleNumber}}\n                                </option>\n                            </select>\n\n                            <div *ngIf=\"formSubmitted && tripForm.vehicleNumber.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.vehicleNumber.errors.required\">Vehicle Number is required</div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Date<span class=\"text-danger\">*</span></label>\n                            <div class=\"input-group\">\n                                <!-- DateTime Input -->\n                                <input type=\"text\" [owlDateTime]=\"dt1\" class=\"form-control\" formControlName=\"date\"\n                                    placeholder=\"Select Date & Time\" [attr.disabled]=\"isDisableds ? true : null\"\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.date.errors }\" readonly\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\n                                    (keydown)=\"$event.preventDefault()\">\n\n                                <!-- Calendar Icon Inside Input -->\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt1\" type=\"button\">\n                                        📅\n                                    </button>\n                                </div>\n\n                                <!-- Owl DateTime Picker -->\n                                <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n                            </div>\n\n                            <!-- Validation Message -->\n                            <div *ngIf=\"formSubmitted && tripForm.date.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.date.errors.required\">Customer Name is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Customer Name<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"customerName\"\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Customer Name\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.customerName.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.customerName.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.customerName.errors.required\">Customer Name is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Customer Mobile Number<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"customerMobileNumber\"\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Customer Mobile Number\"\n                                maxlength=\"10\" (keydown)=\"numbersOnly($event)\" maxlength=\"10\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.customerMobileNumber.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.customerMobileNumber.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.customerMobileNumber.errors.required\">Customer Mobile Number is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Driver Name<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"driverName\"\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Driver Name\"\n                                (change)=\"onDriverNameChange($event)\" list=\"driverNames\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.driverName.errors }\">\n\n                            <datalist id=\"driverNames\">\n                                <option *ngFor=\"let driverListElemnt of driverList\" [value]=\"driverListElemnt?.name\">\n                            </datalist>\n\n                            <div *ngIf=\"formSubmitted && tripForm.driverName.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.driverName.errors.required\">Driver Name is required</div>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Driver Number<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"driverNumber\"\n                                (keydown)=\"numbersOnly($event)\" maxlength=\"10\"\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Driver Number\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.driverNumber.errors }\">\n\n                            <!-- <datalist id=\"driverNumbers\">\n                                <option *ngFor=\"let driverListElemnt of driverList\" [value]=\"driverListElemnt?.mobileNumber\">\n                            </datalist> -->\n\n                            <div *ngIf=\"formSubmitted && tripForm.driverName.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.driverNumber.errors.required\">Driver Number is required</div>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Starting KM<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"startingKM\"\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Starting KM\"\n                                maxlength=\"10\" (keydown)=\"numbersOnly($event)\"\n                                (keyup)=\"startingKM($event.target.value);\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.startingKM.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.startingKM.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.startingKM.errors.required\">Starting KM is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Closing KM<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"closingKM\"\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Closing KM\"\n                                maxlength=\"10\" (keydown)=\"numbersOnly($event)\" (keyup)=\"closeingKM($event.target.value)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.closingKM.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.closingKM.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.closingKM.errors.required\">Closing KM is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Used KM<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"usedKM\" placeholder=\"Enter Used KM\"\n                                [attr.disabled]=\"isDisableds ? true : null\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.usedKM.errors }\" disabled />\n                            <div *ngIf=\"formSubmitted && tripForm.usedKM.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.usedKM.errors.required\">Used KM is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Starting Time<span class=\"text-danger\">*</span></label>\n                            <div class=\"input-group\">\n                                <!-- DateTime Input -->\n                                <input type=\"text\" [owlDateTime]=\"dt2\" class=\"form-control\"\n                                    [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Select Staring Time\"\n                                    formControlName=\"startingTime\"\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.startingTime.errors }\"\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\n                                    (keydown)=\"$event.preventDefault()\" readonly />\n\n                                <!-- Calendar Icon Inside Input -->\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt2\" type=\"button\">\n                                        📅\n                                    </button>\n                                </div>\n\n                                <!-- Owl DateTime Picker -->\n                                <owl-date-time #dt2 [pickerType]=\"'both'\" [format]=\"'DD/MM/YYYY HH:mm'\"\n                                    [minuteStep]=\"5\"></owl-date-time>\n                            </div>\n\n                            <!-- Validation Message -->\n                            <div *ngIf=\"formSubmitted && tripForm.startingTime.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.startingTime.errors.required\">Starting Time is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Closing Time<span class=\"text-danger\">*</span></label>\n                            <div class=\"input-group\">\n                                <input type=\"text\" [owlDateTime]=\"dt3\" class=\"form-control\"\n                                    [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Select Closing Time\"\n                                    formControlName=\"closingTime\"\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.closingTime.errors }\"\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\n                                    (keydown)=\"$event.preventDefault()\" readonly>\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt3\" type=\"button\">\n                                        📅\n                                    </button>\n                                </div>\n                                <owl-date-time #dt3 [pickerType]=\"'both'\" [format]=\"'DD/MM/YYYY HH:mm'\"\n                                    [minuteStep]=\"5\"></owl-date-time>\n                            </div>\n                            <div *ngIf=\"formSubmitted && tripForm.closingTime.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.closingTime.errors.required\">Closing Time is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Total Hrs<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"totalTime\"\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter Total HRS\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.totalTime.errors }\" readonly />\n                            <div *ngIf=\"formSubmitted && tripForm.totalTime.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.totalTime.errors.required\">Total HRS is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>AC Type<span class=\"text-danger\">*</span></label>\n                            <select class=\"form-select\" formControlName=\"acOrNonAc\"\n                                [attr.disabled]=\"isDisableds ? true : null\" (click)=\"acDetect($event.target.value)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acOrNonAc.errors }\">\n                                <option value=\"\" disabled selected>Select AC or Non-AC</option>\n                                <option value=\"AC\">AC</option>\n                                <option value=\"Non-AC\">Non-AC</option>\n                            </select>\n                            <div *ngIf=\"formSubmitted && tripForm.acOrNonAc.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.acOrNonAc.errors.required\">AC Type is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>AC Starting KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\"\n                                [attr.disabled]=\"isDisableds ? true : null\" (keydown)=\"numbersOnly($event)\"\n                                maxlength=\"10\" (keyup)=\"acStaringKmCalculation($event.target.value);\"\n                                formControlName=\"acStartingKM\" placeholder=\"Enter AC Starting KM\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acStartingKM.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.acStartingKM.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.acStartingKM.errors.required\">AC Starting KM is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>AC Closed KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\"\n                                [attr.disabled]=\"isDisableds ? true : null\" (keydown)=\"numbersOnly($event)\"\n                                maxlength=\"10\" (keyup)=\"acClosingKmCalculation($event.target.value);\"\n                                formControlName=\"acClosingKM\" placeholder=\"Enter AC Closed KM\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acClosingKM.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.acClosingKM.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.acClosingKM.errors.required\">AC Closed KM is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>AC Used KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\"\n                                (keydown)=\"numbersOnly($event)\" formControlName=\"usedAcKM\"\n                                [attr.disabled]=\"isDisableds ? true : null\" placeholder=\"Enter AC Used KM\"\n                                maxlength=\"10\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.usedAcKM.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.usedAcKM.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.usedAcKM.errors.required\">AC Used KM is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>AC Note<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"acNote\" placeholder=\"Enter AC Note\"\n                                [attr.disabled]=\"isDisableds ? true : null\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acNote.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.acNote.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.acNote.errors.required\">AC Note is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </app-card>\n\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                <h3>Visiting Place Details</h3>\n                <hr>\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n                        <div class=\"form-group\">\n                            <label>Visiting Places <span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"visitingPlace\"\n                                placeholder=\"Enter Visiting Place\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.visitingPlace.errors }\"\n                                [attr.disabled]=\"isDisabled ? true : null\" />\n                            <div *ngIf=\"formSubmitted && tripForm.visitingPlace.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.visitingPlace.errors.required\">Visiting Place is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- (keyup)=\"dayRentCalculation($event.target.value)\" -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Day Rent<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"dayRent\"\n                                placeholder=\"Enter Day Rent\" (keydown)=\"numbersOnly($event)\"\n                                (keyup)=\"profitAmoutCalculation('Day Rent')\" [attr.disabled]=\"isDisabled ? true : null\"\n                                maxlength=\"10\" [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.dayRent.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.dayRent.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.dayRent.errors.required\">Day Rent is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Toll<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"toll\" placeholder=\"Enter Toll\"\n                                [attr.disabled]=\"isDisabled ? true : null\" (keyup)=\"profitAmoutCalculation('Toll');\"\n                                (keydown)=\"numbersOnly($event)\" maxlength=\"10\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.toll.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.toll.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.toll.errors.required\">Toll is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Total Rent<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"totalRent\"\n                                placeholder=\"Enter Total Rent\"\n                                (keyup)=\"getTotalRentAmount($event.target.value); profitAmoutCalculation('Total Rent')\"\n                                (keydown)=\"numbersOnly($event)\" [attr.disabled]=\"isDisabled ? true : null\"\n                                maxlength=\"10\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.totalRent.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.totalRent.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.totalRent.errors.required\">Total Rent is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Fuel<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"diesel\" placeholder=\"Enter Fuel\"\n                                (keyup)=\"profitAmoutCalculation('Fuel')\" (keydown)=\"numbersOnly($event)\" maxlength=\"10\"\n                                [attr.disabled]=\"isDisabled ? true : null\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.diesel.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.diesel.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.diesel.errors.required\">Fuel is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Driver Payment<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"driverPayment\"\n                                placeholder=\"Enter Driver Payment\" (keydown)=\"numbersOnly($event)\"\n                                (keyup)=\"profitAmoutCalculation('Driver Payment')\" maxlength=\"10\"\n                                [attr.disabled]=\"isDisabled ? true : null\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.driverPayment.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.driverPayment.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.driverPayment.errors.required\">Driver Payment is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Permit<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"permitAmount\"\n                                placeholder=\"Enter Permit\" (keydown)=\"numbersOnly($event)\"\n                                (keyup)=\"profitAmoutCalculation('Permit');\" [attr.disabled]=\"isDisabled ? true : null\"\n                                maxlength=\"10\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.permitAmount.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.permitAmount.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.permitAmount.errors.required\">Permit is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Advance<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"advanceAmount\"\n                                placeholder=\"Enter Advance\" (keyup)=\"profitAmoutCalculation('Advance');\" maxlength=\"10\"\n                                (keydown)=\"numbersOnly($event)\" [attr.disabled]=\"isDisabled ? true : null\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceAmount.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.advanceAmount.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.advanceAmount.errors.required\">Advance is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Advance Type<span class=\"text-danger\">*</span></label>\n                            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"advanceType\"\n                                placeholder=\"Enter Advance Type\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceType.errors }\" /> -->\n\n                            <select type=\"text\" class=\"form-select\" formControlName=\"advanceType\"\n                                placeholder=\"Enter Advance Type\" [attr.disabled]=\"isDisabled ? true : null\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceType.errors }\">\n                                <option value=\"\" hidden>Select Advance Type</option>\n                                <option value=\"No Advance\">No Advance</option>\n                                <option value=\"Fuel\">Fuel</option>\n                                <option value=\"Hand\">Hand</option>\n                            </select>\n                            <div *ngIf=\"formSubmitted && tripForm.advanceType.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.advanceType.errors.required\">Advance Type is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Payment Type<span class=\"text-danger\">*</span></label>\n                            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"paymentType\"\n                                placeholder=\"Enter Payment Type\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.paymentType.errors }\" /> -->\n                            <select type=\"text\" class=\"form-select\" formControlName=\"paymentType\"\n                                placeholder=\"Enter Payment Type\" [attr.disabled]=\"isDisabled ? true : null\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.paymentType.errors }\">\n                                <option value=\"\" hidden> Select Payment Type </option>\n                                <option value=\"UPI\"> UPI - GPay / PhonePay </option>\n                                <option value=\"HAND\"> Hand </option>\n                            </select>\n                            <div *ngIf=\"formSubmitted && tripForm.paymentType.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.paymentType.errors.required\">Payment Type is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Recevied Amount<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"receivedAmount\"\n                                placeholder=\"Enter Recevied Amount\" (keyup)=\"profitAmoutCalculation('Recevied Amount');\"\n                                maxlength=\"10\" (keydown)=\"numbersOnly($event)\"\n                                [attr.disabled]=\"isDisabled ? true : null\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.receivedAmount.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.receivedAmount.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.receivedAmount.errors.required\">Recevied Amount is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- (keyup)=\"getDiscountAmount($event.target.value)\"  -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Discount<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"discountAmount\"\n                                placeholder=\"Enter Discount Amount\" (keyup)=\"profitAmoutCalculation('Discount')\"\n                                (keydown)=\"numbersOnly($event)\" [attr.disabled]=\"isDisabled ? true : null\"\n                                maxlength=\"10\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.discountAmount.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.discountAmount.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.discountAmount.errors.required\">Recevied Amount is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- (keyup)=\"getPendingAmount($event.target.value);\" -->\n                    <!-- (keyup)=\"profitAmoutCalculation('Pending Amount');\" -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Pending Amount<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"pendingAmount\" disabled\n                                placeholder=\"Enter Pending Amount\" (keydown)=\"numbersOnly($event)\"\n                                [attr.disabled]=\"isDisabled ? true : null\" maxlength=\"10\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.pendingAmount.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.pendingAmount.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.pendingAmount.errors.required\">Pending Amount is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Balance<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"balanceAmount\"\n                                placeholder=\"Enter Balance\" disabled (keydown)=\"numbersOnly($event)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.balanceAmount.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.balanceAmount.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.balanceAmount.errors.required\">Balance is required\n                                </div>\n                            </div>\n                        </div>\n                    </div> -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Wrote By<span class=\"text-danger\">*</span></label>\n                            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"submittedBy\"\n                                placeholder=\"Enter Wrote By\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.submittedBy.errors }\" /> -->\n                            <select type=\"text\" class=\"form-select\" formControlName=\"submittedBy\"\n                                [attr.disabled]=\"isDisabled ? true : null\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.submittedBy.errors }\">\n                                <option value=\"\" hidden>Select Wrote By</option>\n                                <option *ngFor=\"let driverListElemnt of driverList\" value=\"{{driverListElemnt?.name}}\">\n                                    {{driverListElemnt?.name}}</option>\n                            </select>\n                            <div *ngIf=\"formSubmitted && tripForm.submittedBy.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.submittedBy.errors.required\">Wrote By is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Profit<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"profitAmount\" disabled\n                                placeholder=\"Enter Profit\" (keydown)=\"numbersOnly($event)\"\n                                [attr.disabled]=\"isDisabled ? true : null\" maxlength=\"10\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.profitAmount.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.profitAmount.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.profitAmount.errors.required\">Profit is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Remark<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"remark\" placeholder=\"Enter remark\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.remark.errors }\"\n                                [attr.disabled]=\"isDisabled ? true : null\" />\n                            <div *ngIf=\"formSubmitted && tripForm.remark.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.remark.errors.required\">remark is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Verified By (Manager)<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"verifiedByManager\"\n                                placeholder=\"Enter Verified By (Manager)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.verifiedByManager.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.verifiedByManager.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.verifiedByManager.errors.required\">Verified By (Manager) is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Verified By (Proprietor)<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"verifiedByProprietor\"\n                                placeholder=\"Enter Verified By (Proprietor)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.verifiedByProprietor.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.verifiedByProprietor.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.verifiedByProprietor.errors.required\">Verified By (Proprietor) is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div> -->\n                </div>\n                <br>\n                <div class=\"row modal-footer\" *ngIf=\"tripLogDetails?.length > 0\">\n                    <h4>Trip Log Details</h4>\n                    <hr>\n\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-bordered\">\n                            <thead>\n                                <tr>\n                                    <th>S.No</th>\n                                    <th>Application No</th>\n                                    <th>User Name</th>\n                                    <th>Action</th>\n                                    <th>Comments</th>\n                                    <th>Remark</th>\n                                    <th>Created Date</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let element of tripLogDetails; let i = index\">\n                                    <td>{{ i+1 }}</td>\n                                    <td>{{ element.applnNo }}</td>\n                                    <td>{{ element.userName }}</td>\n                                    <td class=\"text-center\">\n                                        <span *ngIf=\"element?.action == 'SUBMITTED'\"\n                                            class=\"badge m-r-5 badge-light-primary\">\n                                            {{element?.action}}</span>\n                                        <span *ngIf=\"element?.action == 'APPROVED'\"\n                                            class=\"badge m-r-5 badge-light-success\">\n                                            {{element?.action}}</span>\n                                        <span *ngIf=\"element?.action == 'REQUESTFORCLARIFICATION'\"\n                                            class=\"badge m-r-5 badge-light-secondary\">\n                                            {{element?.action}}</span>\n                                        <span *ngIf=\"element?.action == 'INPROGRESS'\"\n                                            class=\"badge m-r-5 badge-light-success\">\n                                            {{element?.action}}</span>\n                                        <span *ngIf=\"element?.action == 'FORWARDED'\"\n                                            class=\"badge m-r-5 badge-light-warning\">\n                                            {{element?.action}}</span>\n                                        <span *ngIf=\"element?.action == 'UPDATED'\"\n                                            class=\"badge m-r-5 badge-light-primary\">\n                                            {{element?.action}}</span>\n                                    </td>\n                                    <td>{{ element.comments }}</td>\n                                    <td>{{ element.remarks }}</td>\n                                    <td>{{ element.createdDate | date: 'dd-MM-yy HH:mm:ss' }}</td>\n\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-12 text-end\">\n                        <div class=\"modal-footer\">\n                            <button type=\"submit\" *ngIf=\"!forwardApproveBtnShow && !approveBtnShow\"\n                                class=\"btn btn-outline-success\"\n                                (click)=\"submit(tripFormDetails , 'Level 1')\">Submit</button>\n\n                            <button type=\"submit\" *ngIf=\"approveBtnShow ||forwardApproveBtnShow\"\n                                class=\"btn btn-outline-warning\"\n                                (click)=\"submit(tripFormDetails , 'Level 1 REQ')\">REQUEST FOR CLARIFICATION</button>\n\n                            <button type=\"submit\" *ngIf=\"forwardApproveBtnShow\" class=\"btn btn-outline-success\"\n                                (click)=\"submit(tripFormDetails , 'Level 3')\">Approved</button>\n\n                            <button type=\"submit\" *ngIf=\"approveBtnShow\" class=\"btn btn-outline-success\"\n                                (click)=\"submit(tripFormDetails, 'Level 2')\">Forwarded</button>\n\n                            <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"back()\">Back</button>\n\n                        </div>\n                    </div>\n                </div>\n            </app-card>\n        </form>\n    </div>\n</div>\n\n\n\n<app-ui-modal #submitPopUp [hideFooter]=\"true\" [dialogClass]=\"'modal-lg'\">\n    <div class=\"app-modal-header\">\n        <h5 class=\"modal-title\">Confirm</h5>\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n            (click)=\"submitPopUp.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n    </div>\n\n    <div class=\"app-modal-body\">\n        <p>Are you sure whant submit?</p>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"btnLoder\" (click)=\"finalSubmit()\">\n                <i class=\"fa\" [ngClass]=\"{'fa-spin fa-asterisk': btnLoder, 'fa-check': !btnLoder}\"></i>Yes\n            </button>\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"submitPopUp.hide()\">\n                <i class=\"feather icon-slash\"></i> No\n            </button>\n        </div>\n    </div>\n</app-ui-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/trip-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/trip-details.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <form [formGroup]=\"tripFormSearchDetails\" autocomplete=\"off\">\n      <app-card cardTitle=\"Trip Request Status\" blockClass=\"table-border-style\" class=\"search-panel\">\n        <div class=\"row\"></div>\n        <div class=\"row\">\n          <!-- Trip Details -->\n          <div class=\"col dashboard_bg1\">\n            <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\n              <div class=\"row align-items-center\">\n                <div class=\"col\">\n                  <span>Trip Details</span>\n                  <h3 class=\"mt-2\">{{ tripDetailsCount.total || '0' }}</h3>\n                  <i class=\"fas fa-external-link-alt\"></i>\n                </div>\n              </div>\n            </app-card>\n          </div>\n\n          <!-- EAL Approved -->\n          <div class=\"col dashboard_bg4\">\n            <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\n              <div class=\"row align-items-center\">\n                <div class=\"col\">\n                  <span>Total Approved</span>\n                  <h3 class=\"mt-2\">{{ tripDetailsCount.totalApproved || '0' }}</h3>\n                  <i class=\"fas fas fa-check\"></i>\n                </div>\n              </div>\n            </app-card>\n          </div>\n\n          <!-- EAL Pending/Request for Clarification -->\n          <div class=\"col dashboard_bg2\">\n            <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\n              <div class=\"row align-items-center\">\n                <div class=\"col\">\n                  <span>Total Request for Clarification</span>\n                  <h3 class=\"mt-2\">{{ tripDetailsCount.totalRequestforclarification || '0' }}</h3>\n                  <i class=\"fas fa-hourglass-half\"></i>\n                </div>\n              </div>\n            </app-card>\n          </div>\n\n          <!-- EAL Rejected -->\n          <div class=\"col dashboard_bg7\">\n            <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\n              <div class=\"row align-items-center\">\n                <div class=\"col\">\n                  <span>Total Rejected</span>\n                  <h3 class=\"mt-2\">{{ tripDetailsCount.totalRejected || '0' }}</h3>\n                  <i class=\"fas fa-external-link-alt\"></i>\n                </div>\n              </div>\n            </app-card>\n          </div>\n        </div>\n      </app-card>\n      <!-- Search Panel -->\n      <div class=\"accordion\" id=\"accordionPanelsStayOpenExample\">\n        <div class=\"accordion-item\">\n          <h2 class=\"accordion-header\" id=\"panelsStayOpen-headingOne\">\n            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\n              data-bs-target=\"#panelsStayOpen-collapseOne\" aria-expanded=\"false\"\n              aria-controls=\"panelsStayOpen-collapseOne\">\n              Search\n            </button>\n          </h2>\n\n          <div id=\"panelsStayOpen-collapseOne\" class=\"accordion-collapse collapse\"\n            aria-labelledby=\"panelsStayOpen-headingOne\" data-bs-parent=\"#accordionPanelsStayOpenExample\">\n            <div class=\"accordion-body\">\n              <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                <div class=\"row\">\n                  <!-- Driver Name -->\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                    <div class=\"form-group\">\n                      <label>Driver Name<span class=\"text-danger\">*</span></label>\n                      <select class=\"form-select\" formControlName=\"driverName\">\n                        <option value=\"\" selected disabled>Select Driver Name</option>\n                        <option *ngFor=\"let driver of driverList\" [value]=\"driver?.name\">{{ driver?.name }}</option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <!-- Trip No -->\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                    <div class=\"form-group\">\n                      <label>Trip No<span class=\"text-danger\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"tripNo\" placeholder=\"Enter Trip Number\">\n                    </div>\n                  </div>\n\n                  <!-- From Date -->\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                    <div class=\"form-group\">\n                      <label>From Date<span class=\"text-danger\">*</span></label>\n                      <input type=\"text\" [owlDateTime]=\"dt3\" class=\"form-control\" [owlDateTimeTrigger]=\"dt3\"\n                        placeholder=\"Select From Date\" formControlName=\"fromDate\">\n                      <owl-date-time [pickerType]=\"'calendar'\" #dt3></owl-date-time>\n                    </div>\n                  </div>\n\n                  <!-- To Date -->\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                    <div class=\"form-group\">\n                      <label>To Date<span class=\"text-danger\">*</span></label>\n                      <input type=\"text\" [owlDateTime]=\"dt4\" class=\"form-control\" [owlDateTimeTrigger]=\"dt4\"\n                        placeholder=\"Select To Date\" formControlName=\"toDate\">\n                      <owl-date-time [pickerType]=\"'calendar'\" #dt4></owl-date-time>\n                    </div>\n                  </div>\n\n                  <!-- Driver Number -->\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                    <div class=\"form-group\">\n                      <label>Driver Number</label>\n                      <input type=\"text\" formControlName=\"driverNumber\" class=\"form-control\"\n                        placeholder=\"Enter Driver Number\">\n                    </div>\n                  </div>\n\n                  <!-- Vehicle Number -->\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                    <div class=\"form-group\">\n                      <label>Vehicle Number <span class=\"text-danger\">*</span></label>\n                      <select class=\"form-select\" formControlName=\"vehiclenumber\">\n                        <option value=\"\" selected disabled>Select Vehicle Number</option>\n                        <option *ngFor=\"let vehicle of vehicleList\" [value]=\"vehicle.vehicleNumber\">\n                          {{ vehicle.vehicleNumber }}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <!-- Status -->\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                    <div class=\"form-group\">\n                      <label>Status</label>\n                      <select formControlName=\"status\" class=\"form-select\">\n                        <option value=\"\" disabled selected>Select Status</option>\n                        <option value=\"APPROVED\">APPROVED</option>\n                        <option value=\"INPROGRESS\">IN PROGRESS</option>\n                        <option value=\"FORWARDED\">FORWARDED</option>\n                        <option value=\"REQUESTFORCLARIFICATION\">REQUEST FOR CLARIFICATION</option>\n                        <option value=\"REJECT\">REJECT</option>\n                        <option value=\"SUBMITTED\">SUBMITTED</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n\n                <!-- Buttons -->\n                <div class=\"row mt-3\">\n                  <div class=\"col-lg-12 text-end\">\n                    <div class=\"modal-footer\">\n                      <button type=\"submit\" class=\"btn btn-outline-info\" (click)=\"search()\">\n                        <span>Submit</span>\n                      </button>\n                      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"onclear()\">\n                        <span>Clear</span>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </app-card>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n    </form>\n  </div>\n</div>\n\n<div class=\"outer-container\">\n  <div class=\"button-container\">\n    <button class=\"btn btn-outline-success list-button-container\" [routerLink]=\"['/container/trip-detail/add']\">\n      <span class=\"list-text-alaign-center\">Add</span>\n    </button>\n    <button class=\"btn btn-outline-secondary list-button-container\" (click)=\"onEdit()\" [disabled]=\"!editEnable\">\n      <span class=\"list-text-alaign-center\">Edit</span>\n    </button>\n    <button class=\"btn btn-outline-warning list-button-container\" (click)=\"onView()\" [disabled]=\"!viewEnable\">\n      <span class=\"list-text-alaign-center\">View</span>\n    </button>\n    <!-- <button (click)=\"onclear()\">\n            <span>Clear</span>\n        </button> -->\n  </div>\n</div>\n\n\n<app-mat-table-configuration *ngIf=\"columns?.length > 0\" [columns]=\"columns\" [actionKeys]=\"actionKeys\"\n  [dataSource]=\"dataSource\" [totalCount]=\"totelCount\" [pageSize]=\"pageSize\" (paginationEvent)=\"handlePagination($event)\"\n  (checkboxAction)=\"onChecked($event)\">\n</app-mat-table-configuration>\n\n\n<div class=\"row\">\n  <div class=\"col-xl-4 mt-2\">\n    <div class=\"dropdown\">\n      <button class=\"btn btn-outline-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\"\n        aria-expanded=\"false\">\n        Download\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"exportToExcel()\">Excel</a></li>\n        <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"generatePDF()\">PDF</a></li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/tripdeatilsforward/tripdeatilsforward.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/tripdeatilsforward/tripdeatilsforward.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <form [formGroup]=\"tripFormSearchDetails\" autocomplete=\"off\">\n            <!-- Search Panel -->\n\n            <app-card cardTitle=\"Trip Request Status\" blockClass=\"table-border-style\" class=\"search-panel\">\n                <div class=\"row\"></div>\n                <div class=\"row\">\n                    <!-- Trip Details -->\n                    <div class=\"col dashboard_bg1\">\n                        <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\n                            <div class=\"row align-items-center\">\n                                <div class=\"col\">\n                                    <span>Trip Details</span>\n                                    <h3 class=\"mt-2\">{{ tripDetailsCount.total || '0' }}</h3>\n                                    <i class=\"fas fa-external-link-alt\"></i>\n                                </div>\n                            </div>\n                        </app-card>\n                    </div>\n\n                    <!-- EAL Approved -->\n                    <div class=\"col dashboard_bg4\">\n                        <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\n                            <div class=\"row align-items-center\">\n                                <div class=\"col\">\n                                    <span>Total Approved</span>\n                                    <h3 class=\"mt-2\">{{ tripDetailsCount.totalApproved || '0' }}</h3>\n                                    <i class=\"fas fas fa-check\"></i>\n                                </div>\n                            </div>\n                        </app-card>\n                    </div>\n\n                    <!-- EAL Pending/Request for Clarification -->\n                    <div class=\"col dashboard_bg2\">\n                        <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\n                            <div class=\"row align-items-center\">\n                                <div class=\"col\">\n                                    <span>Total Request for Clarification</span>\n                                    <h3 class=\"mt-2\">{{ tripDetailsCount.totalRequestforclarification || '0' }}</h3>\n                                    <i class=\"fas fa-hourglass-half\"></i>\n                                </div>\n                            </div>\n                        </app-card>\n                    </div>\n\n                    <!-- EAL Rejected -->\n                    <div class=\"col dashboard_bg7\">\n                        <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\n                            <div class=\"row align-items-center\">\n                                <div class=\"col\">\n                                    <span>Total Rejected</span>\n                                    <h3 class=\"mt-2\">{{ tripDetailsCount.totalRejected || '0' }}</h3>\n                                    <i class=\"fas fa-external-link-alt\"></i>\n                                </div>\n                            </div>\n                        </app-card>\n                    </div>\n                </div>\n            </app-card>\n            <div class=\"accordion\" id=\"accordionPanelsStayOpenExample\">\n                <div class=\"accordion-item\">\n                    <h2 class=\"accordion-header\" id=\"panelsStayOpen-headingOne\">\n                        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\n                            data-bs-target=\"#panelsStayOpen-collapseOne\" aria-expanded=\"false\"\n                            aria-controls=\"panelsStayOpen-collapseOne\">\n                            Search\n                        </button>\n                    </h2>\n\n                    <div id=\"panelsStayOpen-collapseOne\" class=\"accordion-collapse collapse\"\n                        aria-labelledby=\"panelsStayOpen-headingOne\" data-bs-parent=\"#accordionPanelsStayOpenExample\">\n                        <div class=\"accordion-body\">\n                            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                                <h4>Search</h4>\n                                <div class=\"row\">\n                                    <!-- Driver Name -->\n                                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label for=\"driverName\">Driver Name</label>\n                            <input type=\"text\" id=\"driverName\" formControlName=\"driverName\" class=\"form-control\"\n                                placeholder=\"Enter Driver Name\" />\n                        </div>\n                    </div> -->\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                                        <div class=\"form-group\">\n                                            <label>Driver Name<span class=\"text-danger\">*</span></label>\n                                            <select type=\"text\" class=\"form-select\" formControlName=\"driverName\"\n                                                placeholder=\"Enter Driver Name\">\n                                                <option value=\"\" selected disabled>Select Driver Name</option>\n                                                <option *ngFor=\"let driverListElemnt of driverList\"\n                                                    value=\"{{driverListElemnt?.name}}\">\n                                                    {{driverListElemnt?.name}}</option>\n                                            </select>\n                                        </div>\n                                    </div>\n\n                                    <!-- Driver Number -->\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                                        <div class=\"form-group\">\n                                            <label for=\"driverNumber\">Driver Number</label>\n                                            <input type=\"text\" id=\"driverNumber\" formControlName=\"driverNumber\"\n                                                class=\"form-control\" placeholder=\"Enter Driver Number\" />\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                                        <div class=\"form-group\">\n                                            <label>Trip No<span class=\"text-danger\">*</span></label>\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"tripNo\"\n                                                placeholder=\"Enter Trip Number\">\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                                        <div class=\"form-group\">\n                                            <label>From Date<span class=\"text-danger\">*</span></label>\n                                            <!-- <input type=\"text\" formControlName=\"taxDate\" class=\"form-control\" bsDatepicker\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-blue' }\"\n                            [ngClass]=\"{ 'is-invalid': formSubmitted && f.taxDate.errors }\" /> -->\n                                            <input type=\"text\" [owlDateTime]=\"dt3\" class=\"form-control\"\n                                                [owlDateTimeTrigger]=\"dt3\" placeholder=\"Select From Date\"\n                                                formControlName=\"fromDate\">\n                                            <owl-date-time [pickerType]=\"'calendar'\" #dt4></owl-date-time>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                                        <div class=\"form-group\">\n                                            <label>To Date<span class=\"text-danger\">*</span></label>\n                                            <!-- <input type=\"text\" formControlName=\"taxDate\" class=\"form-control\" bsDatepicker\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-blue' }\"\n                            [ngClass]=\"{ 'is-invalid': formSubmitted && f.taxDate.errors }\" /> -->\n                                            <input type=\"text\" [owlDateTime]=\"dt4\" class=\"form-control\"\n                                                [owlDateTimeTrigger]=\"dt4\" placeholder=\"Select From Date\"\n                                                formControlName=\"toDate\">\n                                            <owl-date-time [pickerType]=\"'calendar'\" #dt3></owl-date-time>\n                                        </div>\n                                    </div>\n\n                                    <!-- Vehicle Number -->\n                                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label for=\"vehicleNumber\">Vehicle Number</label>\n                            <input type=\"text\" id=\"vehicleNumber\" formControlName=\"vehiclenumber\" class=\"form-control\"\n                                placeholder=\"Enter Vehicle Number\" />\n                        </div>\n                    </div> -->\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                                        <div class=\"form-group\">\n                                            <label>Vehicle Number <span class=\"text-danger\">*</span></label>\n                                            <select type=\"text\" class=\"form-select\" formControlName=\"vehiclenumber\"\n                                                placeholder=\"Select Vehicle Number\">\n                                                <option value=\"\" selected disabled>Select Vehicle Number</option>\n                                                <option *ngFor=\"let vehicleListElement of vehicleList\"\n                                                    value=\"{{vehicleListElement.vehicleNumber}}\">\n                                                    {{vehicleListElement.vehicleNumber}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </div>\n\n                                    <!-- Status -->\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                                        <div class=\"form-group\">\n                                            <label for=\"status\">Status</label>\n                                            <select id=\"status\" formControlName=\"status\" class=\"form-select\">\n                                                <option value=\"\" disabled selected>Select Status</option>\n                                                <option value=\"APPROVED\">APPROVED</option>\n                                                <option value=\"INPROGRESS\">IN PROGRESS</option>\n                                                <option value=\"FORWARDED\">FORWARDED</option>\n                                                <option value=\"REQUESTFORCLARIFICATION\">REQUEST FOR CLARIFICATION\n                                                </option>\n                                                <option value=\"REJECT\">REJECT</option>\n                                                <option value=\"SUBMITTED\">SUBMITTED</option>\n                                            </select>\n                                        </div>\n                                    </div>\n\n\n                                </div>\n\n                                <!-- Submit and Cancel buttons -->\n                                <div class=\"row mt-3\">\n                                    <div class=\"col-lg-12 text-end\">\n                                        <div class=\"modal-footer\">\n                                            <button type=\"submit\" class=\"btn btn-outline-info list-button-container\"\n                                                (click)=\"search()\"><span\n                                                    class=\"list-text-alaign-center\">Submit</span></button>\n                                            <button type=\"button\"\n                                                class=\"btn btn-outline-secondary list-button-container\"\n                                                (click)=\"onclear()\"><span\n                                                    class=\"list-text-alaign-center\">Clear</span></button>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </app-card>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n\n\n\n<div class=\"outer-container\">\n    <div class=\"button-container\">\n        <!-- <button class=\"btn btn-outline-success list-button-container\" [routerLink]=\"['/container/trip-detail/add']\">\n            <span class=\"list-text-alaign-center\">Add</span>\n        </button> -->\n        <button class=\"btn btn-outline-secondary list-button-container\" (click)=\"onEdit()\" [disabled]=\"!editEnable\">\n            <span class=\"list-text-alaign-center\">Edit</span>\n        </button>\n        <button class=\"btn btn-outline-warning list-button-container\" (click)=\"onView()\" [disabled]=\"!viewEnable\">\n            <span class=\"list-text-alaign-center\">View</span>\n        </button>\n        <!-- <button (click)=\"onclear()\">\n            <span>Clear</span>\n        </button> -->\n    </div>\n</div>\n\n<!-- <app-card [hidHeader]=\"true\" blockClass=\"table-border-style\" class=\"list-panel\">\n    <div class=\"table-responsive text-center\">\n        <div class=\"example-table-container\">\n            <table mat-table [dataSource]=\"dataSource\" class=\"table-design\">\n                <ng-container matColumnDef=\"serialNo\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> S.No </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-center\"> {{ i + 1 }} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"tripNumber\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">Trip Number </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.tripNumber}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"createdDate\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> CreatedDate </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.createdDate | date:\n                        'dd-MM-yyyy'}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"vehicleNumber\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> VehicleNumber </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.vehicleNumber}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"customerName\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">CustomerName</th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.customerName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"visitingPlace\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> VisitingPlace </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.visitingPlace}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"driverName\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Driver Name </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.driverName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"totalRent\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">TotalRent </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.totalRent}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"status\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Status </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        <span class=\"badge m-r-5 badge-light-success\"\n                            *ngIf=\"element?.status == 'APPROVED'\">{{element?.status}}</span>\n                        <span class=\"badge m-r-5 badge-light-info\"\n                            *ngIf=\"element?.status == 'INPROGRESS'\">{{element?.status}}</span>\n                        <span class=\"badge m-r-5 badge-light-secondary\"\n                            *ngIf=\"element?.status == 'FORWARDED'\">{{element?.status}}</span>\n                        <span class=\"badge m-r-5 badge-light-warning \"\n                            *ngIf=\"element?.status == 'REQUESTFORCLARIFICATION'\">{{element?.status}}</span>\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Action </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        <mat-radio-button (click)=\"onSelect(element)\"></mat-radio-button>\n                    </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n            <div *ngIf=\"isLoading\" class=\"table-loader\">\n                <mat-spinner diameter=\"64\"></mat-spinner>\n            </div>\n            <mat-paginator [length]=\"totelCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\"\n                (page)=\"pageEvent($event)\">\n            </mat-paginator>\n        </div>\n    </div>\n</app-card> -->\n\n<app-mat-table-configuration [columns]=\"columns\" [actionKeys]=\"actionKeys\" [dataSource]=\"dataSource\"\n    [totalCount]=\"totelCount\" [pageSize]=\"pageSize\" (paginationEvent)=\"handlePagination($event)\"\n    (checkboxAction)=\"onChecked($event)\">\n</app-mat-table-configuration>\n\n<div class=\"row\">\n    <div class=\"col-xl-4 mt-2\">\n        <div class=\"dropdown\">\n            <button class=\"btn btn-outline-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\"\n                aria-expanded=\"false\">\n                Download\n            </button>\n            <ul class=\"dropdown-menu\">\n                <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"exportToExcel()\">Excel</a></li>\n                <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"generatePDF()\">PDF</a></li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/tripdetailsinprogress/tripdetailsinprogress.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/tripdetailsinprogress/tripdetailsinprogress.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <form [formGroup]=\"tripFormSearchDetails\" autocomplete=\"off\">\n            <!-- Search Panel -->\n            <div class=\"accordion\" id=\"accordionPanelsStayOpenExample\">\n                <div class=\"accordion-item\">\n                    <h2 class=\"accordion-header\" id=\"panelsStayOpen-headingOne\">\n                        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\n                            data-bs-target=\"#panelsStayOpen-collapseOne\" aria-expanded=\"false\"\n                            aria-controls=\"panelsStayOpen-collapseOne\">\n                            Search\n                        </button>\n                    </h2>\n\n                    <div id=\"panelsStayOpen-collapseOne\" class=\"accordion-collapse collapse\"\n                        aria-labelledby=\"panelsStayOpen-headingOne\" data-bs-parent=\"#accordionPanelsStayOpenExample\">\n                        <div class=\"accordion-body\">\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                <h4>Search</h4>\n                <div class=\"row\">\n                    <!-- Driver Name -->\n                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label for=\"driverName\">Driver Name</label>\n                            <input type=\"text\" id=\"driverName\" formControlName=\"driverName\" class=\"form-control\"\n                                placeholder=\"Enter Driver Name\" />\n                        </div>\n                    </div> -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Driver Name<span class=\"text-danger\">*</span></label>\n                            <select type=\"text\" class=\"form-select\" formControlName=\"driverName\"\n                                placeholder=\"Enter Driver Name\">\n                                <option value=\"\" selected disabled>Select Driver Name</option>\n                                <option *ngFor=\"let driverListElemnt of driverList\" value=\"{{driverListElemnt?.name}}\">\n                                    {{driverListElemnt?.name}}</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <!-- Driver Number -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label for=\"driverNumber\">Driver Number</label>\n                            <input type=\"text\" id=\"driverNumber\" formControlName=\"driverNumber\" class=\"form-control\"\n                                placeholder=\"Enter Driver Number\" />\n                        </div>\n                    </div>\n\n\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Trip No<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"tripNo\"\n                                placeholder=\"Enter Trip Number\">\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                          <label>From Date<span class=\"text-danger\">*</span></label>\n                          <!-- <input type=\"text\" formControlName=\"taxDate\" class=\"form-control\" bsDatepicker\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-blue' }\"\n                            [ngClass]=\"{ 'is-invalid': formSubmitted && f.taxDate.errors }\" /> -->\n                          <input type=\"text\" [owlDateTime]=\"dt3\" class=\"form-control\" [owlDateTimeTrigger]=\"dt3\"\n                            placeholder=\"Select From Date\" formControlName=\"fromDate\">\n                          <owl-date-time [pickerType]=\"'calendar'\" #dt4></owl-date-time>\n                        </div>\n                      </div>\n\n\n                      <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                          <label>To Date<span class=\"text-danger\">*</span></label>\n                          <!-- <input type=\"text\" formControlName=\"taxDate\" class=\"form-control\" bsDatepicker\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-blue' }\"\n                            [ngClass]=\"{ 'is-invalid': formSubmitted && f.taxDate.errors }\" /> -->\n                          <input type=\"text\" [owlDateTime]=\"dt4\" class=\"form-control\" [owlDateTimeTrigger]=\"dt4\"\n                            placeholder=\"Select From Date\" formControlName=\"toDate\">\n                          <owl-date-time [pickerType]=\"'calendar'\" #dt3></owl-date-time>\n                        </div>\n                      </div>\n\n\n                    <!-- Vehicle Number -->\n                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label for=\"vehicleNumber\">Vehicle Number</label>\n                            <input type=\"text\" id=\"vehicleNumber\" formControlName=\"vehiclenumber\" class=\"form-control\"\n                                placeholder=\"Enter Vehicle Number\" />\n                        </div>\n                    </div> -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Vehicle Number <span class=\"text-danger\">*</span></label>\n                            <select type=\"text\" class=\"form-select\" formControlName=\"vehiclenumber\"\n                                placeholder=\"Select Vehicle Number\">\n                                <option value=\"\" selected disabled>Select Vehicle Number</option>\n                                <option *ngFor=\"let vehicleListElement of vehicleList\"\n                                    value=\"{{vehicleListElement.vehicleNumber}}\">{{vehicleListElement.vehicleNumber}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <!-- Status -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label for=\"status\">Status</label>\n                            <select id=\"status\" formControlName=\"status\" class=\"form-select\">\n                                <option value=\"\" disabled selected>Select Status</option>\n                                <option value=\"APPROVED\">APPROVED</option>\n                                <option value=\"INPROGRESS\">IN PROGRESS</option>\n                                <option value=\"FORWARDED\">FORWARDED</option>\n                                <option value=\"REQUESTFORCLARIFICATION\">REQUEST FOR CLARIFICATION</option>\n                                <option value=\"REJECT\">REJECT</option>\n                                <option value=\"SUBMITTED\">SUBMITTED</option>\n                            </select>\n                        </div>\n                    </div>\n\n\n                </div>\n\n                <!-- Submit and Cancel buttons -->\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-12 text-end\">\n                        <div class=\"modal-footer\">\n                            <button type=\"submit\" class=\"btn btn-outline-info list-button-container\"\n                                (click)=\"search()\"><span class=\"list-text-alaign-center\">Submit</span></button>\n                            <button type=\"button\" class=\"btn btn-outline-secondary list-button-container\"\n                                (click)=\"onclear()\"><span class=\"list-text-alaign-center\">Clear</span></button>\n\n                        </div>\n                    </div>\n                </div>\n            </app-card>\n            </div>\n            </div>\n            </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n\n\n\n<div class=\"outer-container\">\n    <div class=\"button-container\">\n        <!-- <button class=\"btn btn-outline-success list-button-container\" [routerLink]=\"['/container/trip-detail/add']\">\n            <span class=\"list-text-alaign-center\">Add</span>\n        </button> -->\n        <button class=\"btn btn-outline-secondary list-button-container\" (click)=\"onEdit()\" [disabled]=\"!editEnable\">\n            <span class=\"list-text-alaign-center\">Edit</span>\n        </button>\n        <button class=\"btn btn-outline-warning list-button-container\" (click)=\"onView()\" [disabled]=\"!viewEnable\">\n            <span class=\"list-text-alaign-center\">View</span>\n        </button>\n        <!-- <button (click)=\"onclear()\">\n            <span>Clear</span>\n        </button> -->\n    </div>\n</div>\n<!-- <app-card [hidHeader]=\"true\" blockClass=\"table-border-style\" class=\"list-panel\">\n    <div class=\"table-responsive text-center\">\n        <div class=\"example-table-container\">\n            <table mat-table [dataSource]=\"dataSource\" class=\"table-design\">\n                <ng-container matColumnDef=\"serialNo\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> S.No </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-center\"> {{ i + 1 }} </td>\n                </ng-container>\n\n\n                <ng-container matColumnDef=\"tripNumber\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">Trip Number </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.tripNumber}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"createdDate\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> CreatedDate </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.createdDate | date:\n                        'dd-MM-yyyy'}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"vehicleNumber\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> VehicleNumber </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.vehicleNumber}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"customerName\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">CustomerName</th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.customerName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"visitingPlace\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> VisitingPlace </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.visitingPlace}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"driverName\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Driver Name </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.driverName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"totalRent\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\">TotalRent </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.totalRent}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"status\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Status </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        <span class=\"badge m-r-5 badge-light-success\"\n                            *ngIf=\"element?.status == 'APPROVED'\">{{element?.status}}</span>\n                        <span class=\"badge m-r-5 badge-light-info\"\n                            *ngIf=\"element?.status == 'INPROGRESS'\">{{element?.status}}</span>\n                        <span class=\"badge m-r-5 badge-light-secondary\"\n                            *ngIf=\"element?.status == 'FORWARDED'\">{{element?.status}}</span>\n                        <span class=\"badge m-r-5 badge-light-warning \"\n                            *ngIf=\"element?.status == 'REQUESTFORCLARIFICATION'\">{{element?.status}}</span>\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Action </th>\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                        <mat-radio-button (click)=\"onSelect(element)\"></mat-radio-button>\n                    </td>\n                </ng-container>\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n            <div *ngIf=\"isLoading\" class=\"table-loader\">\n                <mat-spinner diameter=\"64\"></mat-spinner>\n            </div>\n            <mat-paginator [length]=\"totelCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\"\n                (page)=\"pageEvent($event)\">\n            </mat-paginator>\n        </div>\n    </div>\n</app-card> -->\n\n<app-mat-table-configuration [columns]=\"columns\" [actionKeys]=\"actionKeys\" [dataSource]=\"dataSource\"\n    [totalCount]=\"totelCount\" [pageSize]=\"pageSize\" (paginationEvent)=\"handlePagination($event)\"\n    (checkboxAction)=\"onChecked($event)\">\n</app-mat-table-configuration>\n\n<div class=\"row\">\n    <div class=\"col-xl-4 mt-2\">\n        <div class=\"dropdown\">\n            <button class=\"btn btn-outline-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\"\n                aria-expanded=\"false\">\n                Download\n            </button>\n            <ul class=\"dropdown-menu\">\n                <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"exportToExcel()\">Excel</a></li>\n                <li><a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"generatePDF()\">PDF</a></li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\n  <li class=\"breadcrumb-item\">\n    <a [routerLink]=\"['/dashboard']\">Home</a>\n  </li>\n  <li class=\"breadcrumb-item\">\n    <a [routerLink]=\"['/container/trip-detail/list']\">Trip Details</a>\n  </li>\n  <li class=\"breadcrumb-item active\" aria-current=\"page\">View</li>\n</ul>\n\n<app-card [hidHeader]=\"true\" class=\"view-panel\">\n  <h4>Trip Details</h4>\n  <hr>\n  <div class=\"container\">\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Vehicle Number</label>\n        <p class=\"view-text\">{{getTripDetails?.vehicleNumber}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Customer Name</label>\n        <p class=\"view-text\">{{getTripDetails?.customerName}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Customer Mobile Number</label>\n        <p class=\"view-text\">{{getTripDetails?.customerMobileNumber}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Driver Name</label>\n        <p class=\"view-text\">{{getTripDetails?.driverName}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Starting KM</label>\n        <p class=\"view-text\">{{getTripDetails?.startingKM}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Closing KM</label>\n        <p class=\"view-text\">{{getTripDetails?.closingKM}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Used KM</label>\n        <p class=\"view-text\">{{getTripDetails?.usedKM}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">AC or Non-AC</label>\n        <p class=\"view-text\">{{getTripDetails?.acOrNonAc}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Starting Time</label>\n        <p class=\"view-text\">{{getTripDetails?.startingTime}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Closing Time</label>\n        <p class=\"view-text\">{{getTripDetails?.closingTime}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Total Time</label>\n        <p class=\"view-text\">{{getTripDetails?.totalTime}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Visiting Place</label>\n        <p class=\"view-text\">{{getTripDetails?.visitingPlace}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Advance Amount</label>\n        <p class=\"view-text\">{{getTripDetails?.advanceAmount}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Total Rent</label>\n        <p class=\"view-text\">{{getTripDetails?.totalRent}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Diesel Amount</label>\n        <p class=\"view-text\">{{getTripDetails?.diesel}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Driver Payment</label>\n        <p class=\"view-text\">{{getTripDetails?.driverPayment}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Received Amount</label>\n        <p class=\"view-text\">{{getTripDetails?.receivedAmount}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Pending Amount</label>\n        <p class=\"view-text\">{{getTripDetails?.pendingAmount}}</p>\n      </div>\n    </div>\n\n    <div class=\"row mb-3\">\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Submitted By</label>\n        <p class=\"view-text\">{{getTripDetails?.submittedBy}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"view-label\">Status</label>\n        <p class=\"view-text\">{{getTripDetails?.status}}</p>\n      </div>\n    </div>\n\n    <hr>\n    <div class=\"row modal-footer\" *ngIf=\"tripLogDetails?.length > 0\">\n      <h4>Trip Log Details</h4>\n      <hr>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>S.No</th>\n              <th>Application No</th>\n              <th>User Name</th>\n              <th>Action</th>\n              <th>Comments</th>\n              <th>Remark</th>\n              <th>Created Date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let element of tripLogDetails; let i = index\">\n              <td>{{ i+1 }}</td>\n              <td>{{ element.applnNo }}</td>\n              <td>{{ element.userName }}</td>\n              <td class=\"text-center\">\n                <span *ngIf=\"element?.action == 'SUBMITTED'\" class=\"badge m-r-5 badge-light-primary\">\n                  {{element?.action}}</span>\n                <span *ngIf=\"element?.action == 'APPROVED'\" class=\"badge m-r-5 badge-light-success\">\n                  {{element?.action}}</span>\n                <span *ngIf=\"element?.action == 'REQUESTFORCLARIFICATION'\" class=\"badge m-r-5 badge-light-secondary\">\n                  {{element?.action}}</span>\n                <span *ngIf=\"element?.action == 'INPROGRESS'\" class=\"badge m-r-5 badge-light-success\">\n                  {{element?.action}}</span>\n                <span *ngIf=\"element?.action == 'FORWARDED'\" class=\"badge m-r-5 badge-light-warning\">\n                  {{element?.action}}</span>\n                <span *ngIf=\"element?.action == 'UPDATED'\" class=\"badge m-r-5 badge-light-primary\">\n                  {{element?.action}}</span>\n              </td>\n              <td>{{ element.comments }}</td>\n              <td>{{ element.remarks }}</td>\n              <td>{{ element.createdDate | date: 'dd-MM-yy HH:mm:ss' }}</td>\n\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"row mt-3\">\n      <div class=\"col-lg-12 text-end\">\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"back()\">Back</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-card>"

/***/ }),

/***/ "./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Default style for the select (light color when no option is selected) */\n.form-select {\n  color: rgba(0, 0, 0, 0.5);\n  /* Light color for placeholder */ }\n/* When an option is selected, change text color to black */\n.form-select:valid {\n  color: black; }\n/* Ensure the placeholder option appears light inside the dropdown */\n.form-select option:disabled {\n  color: rgba(0, 0, 0, 0.5); }\n/* Ensure the dropdown options are always black */\n.form-select option {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rldi02OS9EZXZhckhvbGlkYXlzVUkvc3JjL2FwcC9jb250YWluZXIvdHJpcC1kZXRhaWxzL3RyaXAtZGV0YWlscy9hZGQtZWRpdC10cmlwLWRldGFpbHMvYWRkLWVkaXQtdHJpcC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBFQUFBO0FBQ0E7RUFDSSx5QkFBeUI7RUFBRSxnQ0FBQSxFQUFpQztBQUdoRSwyREFBQTtBQUNBO0VBQ0ksWUFBWSxFQUFBO0FBR2hCLG9FQUFBO0FBQ0E7RUFDSSx5QkFBeUIsRUFBQTtBQUc3QixpREFBQTtBQUNBO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVyL3RyaXAtZGV0YWlscy90cmlwLWRldGFpbHMvYWRkLWVkaXQtdHJpcC1kZXRhaWxzL2FkZC1lZGl0LXRyaXAtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5uZ2ItZHAtY29udGFpbmVyIHtcbi8vICAgICB6LWluZGV4OiAxMDUwICFpbXBvcnRhbnQ7XG4vLyAgIH1cbi8qIERlZmF1bHQgc3R5bGUgZm9yIHRoZSBzZWxlY3QgKGxpZ2h0IGNvbG9yIHdoZW4gbm8gb3B0aW9uIGlzIHNlbGVjdGVkKSAqL1xuLmZvcm0tc2VsZWN0IHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBMaWdodCBjb2xvciBmb3IgcGxhY2Vob2xkZXIgKi9cbn1cblxuLyogV2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWQsIGNoYW5nZSB0ZXh0IGNvbG9yIHRvIGJsYWNrICovXG4uZm9ybS1zZWxlY3Q6dmFsaWQge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLyogRW5zdXJlIHRoZSBwbGFjZWhvbGRlciBvcHRpb24gYXBwZWFycyBsaWdodCBpbnNpZGUgdGhlIGRyb3Bkb3duICovXG4uZm9ybS1zZWxlY3Qgb3B0aW9uOmRpc2FibGVkIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4vKiBFbnN1cmUgdGhlIGRyb3Bkb3duIG9wdGlvbnMgYXJlIGFsd2F5cyBibGFjayAqL1xuLmZvcm0tc2VsZWN0IG9wdGlvbiB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuIl19 */"

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
                const pageIndex = request.pageNo;
                const pageSize = request.paginationSize;
                const serialNumber = pageIndex * pageSize;
                const dataSource = response.data.contents.map((v, i) => (Object.assign({}, v, { sNo: serialNumber + i + 1 })));
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](dataSource);
                // this.dataSource = new MatTableDataSource(response.data.contents);
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