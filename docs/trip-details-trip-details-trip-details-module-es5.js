(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-details-trip-details-trip-details-module"],{

/***/ "./node_modules/ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class.js ***!
  \**********************************************************************************************************/
/*! exports provided: OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY, MomentDateTimeAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS", function() { return OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY", function() { return OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDateTimeAdapter", function() { return MomentDateTimeAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var moment = moment_moment__WEBPACK_IMPORTED_MODULE_1___default.a ? moment_moment__WEBPACK_IMPORTED_MODULE_1___default.a : moment_moment__WEBPACK_IMPORTED_MODULE_1__;
var OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS', {
    providedIn: 'root',
    factory: OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY
});
function OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY() {
    return {
        useUtc: false
    };
}
function range(length, valueFunction) {
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
var MomentDateTimeAdapter = (function (_super) {
    __extends(MomentDateTimeAdapter, _super);
    function MomentDateTimeAdapter(owlDateTimeLocale, options) {
        var _this = _super.call(this) || this;
        _this.owlDateTimeLocale = owlDateTimeLocale;
        _this.options = options;
        _this.setLocale(owlDateTimeLocale || moment.locale());
        return _this;
    }
    MomentDateTimeAdapter.prototype.setLocale = function (locale) {
        var _this = this;
        _super.prototype.setLocale.call(this, locale);
        var momentLocaleData = moment.localeData(locale);
        this._localeData = {
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
            dates: range(31, function (i) { return _this.createDate(2017, 0, i + 1).format('D'); }),
        };
    };
    MomentDateTimeAdapter.prototype.getYear = function (date) {
        return this.clone(date).year();
    };
    MomentDateTimeAdapter.prototype.getMonth = function (date) {
        return this.clone(date).month();
    };
    MomentDateTimeAdapter.prototype.getDay = function (date) {
        return this.clone(date).day();
    };
    MomentDateTimeAdapter.prototype.getDate = function (date) {
        return this.clone(date).date();
    };
    MomentDateTimeAdapter.prototype.getHours = function (date) {
        return this.clone(date).hours();
    };
    MomentDateTimeAdapter.prototype.getMinutes = function (date) {
        return this.clone(date).minutes();
    };
    MomentDateTimeAdapter.prototype.getSeconds = function (date) {
        return this.clone(date).seconds();
    };
    MomentDateTimeAdapter.prototype.getTime = function (date) {
        return this.clone(date).valueOf();
    };
    MomentDateTimeAdapter.prototype.getNumDaysInMonth = function (date) {
        return this.clone(date).daysInMonth();
    };
    MomentDateTimeAdapter.prototype.differenceInCalendarDays = function (dateLeft, dateRight) {
        return this.clone(dateLeft).diff(dateRight, 'days');
    };
    MomentDateTimeAdapter.prototype.getYearName = function (date) {
        return this.clone(date).format('YYYY');
    };
    MomentDateTimeAdapter.prototype.getMonthNames = function (style) {
        return style === 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
    };
    MomentDateTimeAdapter.prototype.getDayOfWeekNames = function (style) {
        if (style === 'long') {
            return this._localeData.longDaysOfWeek;
        }
        if (style === 'short') {
            return this._localeData.shortDaysOfWeek;
        }
        return this._localeData.narrowDaysOfWeek;
    };
    MomentDateTimeAdapter.prototype.getDateNames = function () {
        return this._localeData.dates;
    };
    MomentDateTimeAdapter.prototype.toIso8601 = function (date) {
        return this.clone(date).format();
    };
    MomentDateTimeAdapter.prototype.isEqual = function (dateLeft, dateRight) {
        if (dateLeft && dateRight) {
            return this.clone(dateLeft).isSame(this.clone(dateRight));
        }
        return dateLeft === dateRight;
    };
    MomentDateTimeAdapter.prototype.isSameDay = function (dateLeft, dateRight) {
        if (dateLeft && dateRight) {
            return this.clone(dateLeft).isSame(this.clone(dateRight), 'day');
        }
        return dateLeft === dateRight;
    };
    MomentDateTimeAdapter.prototype.isValid = function (date) {
        return this.clone(date).isValid();
    };
    MomentDateTimeAdapter.prototype.invalid = function () {
        return moment.invalid();
    };
    MomentDateTimeAdapter.prototype.isDateInstance = function (obj) {
        return moment.isMoment(obj);
    };
    MomentDateTimeAdapter.prototype.addCalendarYears = function (date, amount) {
        return this.clone(date).add({ years: amount });
    };
    MomentDateTimeAdapter.prototype.addCalendarMonths = function (date, amount) {
        return this.clone(date).add({ months: amount });
    };
    MomentDateTimeAdapter.prototype.addCalendarDays = function (date, amount) {
        return this.clone(date).add({ days: amount });
    };
    MomentDateTimeAdapter.prototype.setHours = function (date, amount) {
        return this.clone(date).hours(amount);
    };
    MomentDateTimeAdapter.prototype.setMinutes = function (date, amount) {
        return this.clone(date).minutes(amount);
    };
    MomentDateTimeAdapter.prototype.setSeconds = function (date, amount) {
        return this.clone(date).seconds(amount);
    };
    MomentDateTimeAdapter.prototype.createDate = function (year, month, date, hours, minutes, seconds) {
        if (hours === void 0) { hours = 0; }
        if (minutes === void 0) { minutes = 0; }
        if (seconds === void 0) { seconds = 0; }
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        if (hours < 0 || hours > 23) {
            throw Error("Invalid hours \"" + hours + "\". Hours has to be between 0 and 23.");
        }
        if (minutes < 0 || minutes > 59) {
            throw Error("Invalid minutes \"" + minutes + "\". Minutes has to between 0 and 59.");
        }
        if (seconds < 0 || seconds > 59) {
            throw Error("Invalid seconds \"" + seconds + "\". Seconds has to be between 0 and 59.");
        }
        var result = this.createMoment({ year: year, month: month, date: date, hours: hours, minutes: minutes, seconds: seconds }).locale(this.locale);
        if (!result.isValid()) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    MomentDateTimeAdapter.prototype.clone = function (date) {
        return this.createMoment(date).clone().locale(this.locale);
    };
    MomentDateTimeAdapter.prototype.now = function () {
        return this.createMoment().locale(this.locale);
    };
    MomentDateTimeAdapter.prototype.format = function (date, displayFormat) {
        date = this.clone(date);
        if (!this.isValid(date)) {
            throw Error('MomentDateTimeAdapter: Cannot format invalid date.');
        }
        return date.format(displayFormat);
    };
    MomentDateTimeAdapter.prototype.parse = function (value, parseFormat) {
        if (value && typeof value === 'string') {
            return this.createMoment(value, parseFormat, this.locale);
        }
        return value ? this.createMoment(value).locale(this.locale) : null;
    };
    MomentDateTimeAdapter.prototype.deserialize = function (value) {
        var date;
        if (value instanceof Date) {
            date = this.createMoment(value);
        }
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            date = this.createMoment(value, moment.ISO_8601).locale(this.locale);
        }
        if (date && this.isValid(date)) {
            return date;
        }
        return _super.prototype.deserialize.call(this, value);
    };
    MomentDateTimeAdapter.prototype.createMoment = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (this.options && this.options.useUtc) ? moment.utc.apply(moment, args) : moment.apply(void 0, args);
    };
    MomentDateTimeAdapter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["OWL_DATE_TIME_LOCALE"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS)),
        __metadata("design:paramtypes", [String, Object])
    ], MomentDateTimeAdapter);
    return MomentDateTimeAdapter;
}(_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"]));



/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Add Trip Details</p>\n<ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n        <a [routerLink]=\"['/dashboard']\">Home</a>\n    </li>\n    <ng-container>\n        <li class=\"breadcrumb-item\" [routerLink]=\"['/master/trip-detail/list']\"><a href=\"javascript:\"> Trip\n                Details</a>\n        </li>\n        <li class=\"breadcrumb-item\"><a href=\"javascript:\">{{screenName}}</a></li>\n    </ng-container>\n</ul>\n<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <form [formGroup]=\"tripFormDetails\" autocomplete=\"off\">\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                <h3>Customer & Vehicel Details</h3>\n                <hr>\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Vehicle Number <span class=\"text-danger\">*</span></label>\n                            <select type=\"text\" class=\"form-control\" formControlName=\"vehicleNumber\"\n                                placeholder=\"Select Vehicle Number\" (change)=\"getStaringKM($event.target.value)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.vehicleNumber.errors }\">\n                                <option value=\"\" selected disabled>Select Vehicle Number</option>\n                                <option *ngFor=\"let vehicleListElement of vehicleList\"\n                                    value=\"{{vehicleListElement.vehicleNumber}}\">{{vehicleListElement.vehicleNumber}}\n                                </option>\n                            </select>\n\n                            <div *ngIf=\"formSubmitted && tripForm.vehicleNumber.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.vehicleNumber.errors.required\">Vehicle Number is required</div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Date<span class=\"text-danger\">*</span></label>\n                            <div class=\"input-group\">\n                                <!-- DateTime Input -->\n                                <input type=\"text\" [owlDateTime]=\"dt1\" class=\"form-control\" formControlName=\"date\"\n                                    placeholder=\"Select Date & Time\"\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.date.errors }\" readonly\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\n                                    (keydown)=\"$event.preventDefault()\">\n\n                                <!-- Calendar Icon Inside Input -->\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt1\" type=\"button\">\n                                        📅\n                                    </button>\n                                </div>\n\n                                <!-- Owl DateTime Picker -->\n                                <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n                            </div>\n\n                            <!-- Validation Message -->\n                            <div *ngIf=\"formSubmitted && tripForm.date.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.date.errors.required\">Customer Name is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Customer Name<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"customerName\"\n                                placeholder=\"Enter Customer Name\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.customerName.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.customerName.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.customerName.errors.required\">Customer Name is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Customer Mobile Number<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"customerMobileNumber\"\n                                placeholder=\"Enter Customer Mobile Number\" (keydown)=\"numbersOnly($event)\"\n                                maxlength=\"10\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.customerMobileNumber.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.customerMobileNumber.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.customerMobileNumber.errors.required\">Customer Mobile Number is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Driver Name<span class=\"text-danger\">*</span></label>\n                            <select type=\"text\" class=\"form-control\" formControlName=\"driverName\"\n                                placeholder=\"Enter Driver Name\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.driverName.errors }\">\n                                <option value=\"\" selected disabled>Select Driver Name</option>\n                                <option *ngFor=\"let driverListElemnt of driverList\" value=\"{{driverListElemnt?.name}}\">\n                                    {{driverListElemnt?.name}}</option>\n                            </select>\n                            <div *ngIf=\"formSubmitted && tripForm.driverName.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.driverName.errors.required\">Driver Name is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Starting KM<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"startingKM\"\n                                placeholder=\"Enter Starting KM\" (keydown)=\"numbersOnly($event)\"\n                                (keyup)=\"startingKM($event.target.value);\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.startingKM.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.startingKM.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.startingKM.errors.required\">Starting KM is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Closing KM<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"closingKM\"\n                                placeholder=\"Enter Closing KM\" (keydown)=\"numbersOnly($event)\"\n                                (keyup)=\"closeingKM($event.target.value)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.closingKM.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.closingKM.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.closingKM.errors.required\">Closing KM is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Used KM<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"usedKM\" placeholder=\"Enter Used KM\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.usedKM.errors }\" disabled />\n                            <div *ngIf=\"formSubmitted && tripForm.usedKM.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.usedKM.errors.required\">Used KM is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Starting Time<span class=\"text-danger\">*</span></label>\n                            <div class=\"input-group\">\n                                <!-- DateTime Input -->\n                                <input type=\"text\" [owlDateTime]=\"dt2\" class=\"form-control\"\n                                    placeholder=\"Select Staring Time\" formControlName=\"startingTime\"\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.startingTime.errors }\"\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\n                                    (keydown)=\"$event.preventDefault()\" readonly />\n\n                                <!-- Calendar Icon Inside Input -->\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt2\" type=\"button\">\n                                        📅\n                                    </button>\n                                </div>\n\n                                <!-- Owl DateTime Picker -->\n                                <owl-date-time #dt2 [pickerType]=\"'both'\" [format]=\"'DD/MM/YYYY HH:mm'\"\n                                    [minuteStep]=\"5\"></owl-date-time>\n                            </div>\n\n                            <!-- Validation Message -->\n                            <div *ngIf=\"formSubmitted && tripForm.startingTime.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.startingTime.errors.required\">Closing Time is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Closing Time<span class=\"text-danger\">*</span></label>\n                            <div class=\"input-group\">\n                                <!-- DateTime Input -->\n                                <input type=\"text\" [owlDateTime]=\"dt3\" class=\"form-control\"\n                                    placeholder=\"Select Closing Time\" formControlName=\"closingTime\"\n                                    [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.closingTime.errors }\" readonly\n                                    [max]=\"maxDate\" (keypress)=\"$event.preventDefault();\"\n                                    (keydown)=\"$event.preventDefault()\">\n\n                                <!-- Calendar Icon Inside Input -->\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" [owlDateTimeTrigger]=\"dt3\" type=\"button\">\n                                        📅\n                                    </button>\n                                </div>\n\n                                <!-- Owl DateTime Picker -->\n                                <owl-date-time #dt3 [pickerType]=\"'both'\" [format]=\"'DD/MM/YYYY HH:mm'\"\n                                    [minuteStep]=\"5\"></owl-date-time>\n                            </div>\n\n                            <!-- Validation Message -->\n                            <div *ngIf=\"formSubmitted && tripForm.closingTime.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.closingTime.errors.required\">Total HRS is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Total Hrs<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"totalTime\"\n                                placeholder=\"Enter Total HRS\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.totalTime.errors }\" readonly />\n                            <div *ngIf=\"formSubmitted && tripForm.totalTime.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.totalTime.errors.required\">Total HRS is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>AC Type<span class=\"text-danger\">*</span></label>\n                            <select class=\"form-control\" formControlName=\"acOrNonAc\"\n                                (click)=\"acDetect($event.target.value)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acOrNonAc.errors }\">\n                                <option value=\"\" disabled selected>Select AC or Non-AC</option>\n                                <option value=\"AC\">AC</option>\n                                <option value=\"Non-AC\">Non-AC</option>\n                            </select>\n                            <div *ngIf=\"formSubmitted && tripForm.acOrNonAc.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.acOrNonAc.errors.required\">AC Type is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>AC Starting KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\"\n                                (keydown)=\"numbersOnly($event)\" (keyup)=\"acStaringKmCalculation($event.target.value);\"\n                                formControlName=\"acStartingKM\" placeholder=\"Enter AC Starting KM\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acStartingKM.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.acStartingKM.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.acStartingKM.errors.required\">AC Starting KM is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>AC Closed KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\"\n                                (keydown)=\"numbersOnly($event)\" (keyup)=\"acClosingKmCalculation($event.target.value);\"\n                                formControlName=\"acClosingKM\" placeholder=\"Enter AC Closed KM\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acClosingKM.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.acClosingKM.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.acClosingKM.errors.required\">AC Closed KM is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>AC Used KM<span *ngIf=\"!acValidationFlag\" class=\"text-danger\">*</span></label>\n                            <input [attr.disabled]=\"acValidationFlag ? true : null\" type=\"text\" class=\"form-control\"\n                                (keydown)=\"numbersOnly($event)\" formControlName=\"usedAcKM\"\n                                placeholder=\"Enter AC Used KM\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.usedAcKM.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.usedAcKM.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.usedAcKM.errors.required\">AC Used KM is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>AC Note<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"acNote\" placeholder=\"Enter AC Note\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.acNote.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.acNote.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.acNote.errors.required\">AC Note is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </app-card>\n\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                <h3>Visiting Place Details</h3>\n                <hr>\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n                        <div class=\"form-group\">\n                            <label>Visiting Places <span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"visitingPlace\"\n                                placeholder=\"Enter Visiting Place\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.visitingPlace.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.visitingPlace.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.visitingPlace.errors.required\">Visiting Place is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Day Rent<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"dayRent\"\n                                placeholder=\"Enter Day Rent\" (keydown)=\"numbersOnly($event)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.dayRent.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.dayRent.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.dayRent.errors.required\">Day Rent is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Toll<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"toll\" placeholder=\"Enter Toll\"\n                                (keyup)=\"profitAmoutCalculation('Toll');\" (keydown)=\"numbersOnly($event)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.toll.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.toll.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.toll.errors.required\">Toll is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Total Rent<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"totalRent\"\n                                placeholder=\"Enter Total Rent\"\n                                (keyup)=\"getTotalRentAmount($event.target.value); profitAmoutCalculation('Total Rent')\"\n                                (keydown)=\"numbersOnly($event)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.totalRent.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.totalRent.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.totalRent.errors.required\">Total Rent is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Fuel<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"diesel\" placeholder=\"Enter Fuel\"\n                                (keyup)=\"profitAmoutCalculation('Fuel')\" (keydown)=\"numbersOnly($event)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.diesel.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.diesel.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.diesel.errors.required\">Fuel is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Driver Payment<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"driverPayment\"\n                                placeholder=\"Enter Driver Payment\" (keydown)=\"numbersOnly($event)\"\n                                (keyup)=\"profitAmoutCalculation('Driver Payment')\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.driverPayment.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.driverPayment.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.driverPayment.errors.required\">Driver Payment is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Permit<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"permitAmount\"\n                                placeholder=\"Enter Permit\" (keydown)=\"numbersOnly($event)\"\n                                (keyup)=\"profitAmoutCalculation('Permit');\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.permitAmount.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.permitAmount.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.permitAmount.errors.required\">Permit is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Advance<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"advanceAmount\"\n                                placeholder=\"Enter Advance\" (keyup)=\"getAdvanceAmount($event.target.value);\"\n                                (keydown)=\"numbersOnly($event)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceAmount.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.advanceAmount.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.advanceAmount.errors.required\">Advance is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Advance Type<span class=\"text-danger\">*</span></label>\n                            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"advanceType\"\n                                placeholder=\"Enter Advance Type\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceType.errors }\" /> -->\n\n                            <select type=\"text\" class=\"form-control\" formControlName=\"advanceType\"\n                                placeholder=\"Enter Advance Type\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.advanceType.errors }\">\n                                <option value=\"\" hidden>Select Advance Type</option>\n                                <option value=\"Fuel\">Fuel</option>\n                                <option value=\"Hand\">Hand</option>\n                            </select>\n                            <div *ngIf=\"formSubmitted && tripForm.advanceType.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.advanceType.errors.required\">Advance Type is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Payment Type<span class=\"text-danger\">*</span></label>\n                            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"paymentType\"\n                                placeholder=\"Enter Payment Type\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.paymentType.errors }\" /> -->\n                            <select type=\"text\" class=\"form-control\" formControlName=\"paymentType\"\n                                placeholder=\"Enter Payment Type\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.paymentType.errors }\">\n                                <option value=\"\" hidden> Select Payment Type </option>\n                                <option value=\"UPI\"> UPI - GPay / PhonePay </option>\n                                <option value=\"HAND\"> Hand </option>\n                            </select>\n                            <div *ngIf=\"formSubmitted && tripForm.paymentType.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.paymentType.errors.required\">Payment Type is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Recevied Amount<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"receivedAmount\"\n                                placeholder=\"Enter Recevied Amount\" (keyup)=\"getReceivedAmount($event.target.value);\"\n                                (keydown)=\"numbersOnly($event)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.receivedAmount.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.receivedAmount.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.receivedAmount.errors.required\">Recevied Amount is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Pending Amount<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"pendingAmount\" disabled\n                                placeholder=\"Enter Pending Amount\" (keyup)=\"getPendingAmount($event.target.value);\"\n                                (keydown)=\"numbersOnly($event)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.pendingAmount.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.pendingAmount.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.pendingAmount.errors.required\">Pending Amount is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Balance<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"balanceAmount\"\n                                placeholder=\"Enter Balance\" disabled (keydown)=\"numbersOnly($event)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.balanceAmount.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.balanceAmount.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.balanceAmount.errors.required\">Balance is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Wrote By<span class=\"text-danger\">*</span></label>\n                            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"submittedBy\"\n                                placeholder=\"Enter Wrote By\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.submittedBy.errors }\" /> -->\n                            <select type=\"text\" class=\"form-control\" formControlName=\"submittedBy\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.submittedBy.errors }\">\n                                <option value=\"\" hidden>Select Wrote By</option>\n                                <option *ngFor=\"let driverListElemnt of driverList\" value=\"{{driverListElemnt?.name}}\">\n                                    {{driverListElemnt?.name}}</option>\n                            </select>\n                            <div *ngIf=\"formSubmitted && tripForm.submittedBy.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.submittedBy.errors.required\">Wrote By is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Profit<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"profitAmount\"\n                                placeholder=\"Enter Profit\" (keydown)=\"numbersOnly($event)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.profitAmount.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.profitAmount.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.profitAmount.errors.required\">Profit is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Verified By (Manager)<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"verifiedByManager\"\n                                placeholder=\"Enter Verified By (Manager)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.verifiedByManager.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.verifiedByManager.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.verifiedByManager.errors.required\">Verified By (Manager) is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label>Verified By (Proprietor)<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"verifiedByProprietor\"\n                                placeholder=\"Enter Verified By (Proprietor)\"\n                                [ngClass]=\"{ 'is-invalid': formSubmitted && tripForm.verifiedByProprietor.errors }\" />\n                            <div *ngIf=\"formSubmitted && tripForm.verifiedByProprietor.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tripForm.verifiedByProprietor.errors.required\">Verified By (Proprietor) is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-12 text-end\">\n                        <div class=\"modal-footer\">\n                            <button type=\"submit\" class=\"btn btn-outline-success\"\n                                (click)=\"submit(tripFormDetails)\">Submit</button>\n                            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                                [routerLink]=\"['/container/trip-detail/list']\">Back</button>\n\n                        </div>\n                    </div>\n                </div>\n\n            </app-card>\n        </form>\n    </div>\n</div>\n\n\n<app-ui-modal #submitPopUp [hideFooter]=\"true\" [dialogClass]=\"'modal-lg'\">\n    <div class=\"app-modal-header\">\n        <h5 class=\"modal-title\">Confirm</h5>\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n            (click)=\"submitPopUp.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n    </div>\n\n    <div class=\"app-modal-body\">\n        <p>Are you sure whant submit?</p>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"btnLoder\" (click)=\"finalSubmit()\">\n                <i class=\"fa\" [ngClass]=\"{'fa-spin fa-asterisk': btnLoder, 'fa-check': !btnLoder}\"></i>Yes\n            </button>\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"submitPopUp.hide()\">\n                <i class=\"feather icon-slash\"></i> No\n            </button>\n        </div>\n    </div>\n</app-ui-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/trip-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/trip-details.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <form [formGroup]=\"tripFormSearchDetails\" autocomplete=\"off\">\n            <!-- Search Panel -->\n            <app-card [hidHeader]=\"true\" class=\"list-panel add-panel\">\n                <h4>Search</h4>\n                <div class=\"row\">\n                    <!-- Driver Name -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label for=\"driverName\">Driver Name</label>\n                            <input type=\"text\" id=\"driverName\" formControlName=\"driverName\" class=\"form-control\"\n                                placeholder=\"Enter Driver Name\" />\n                        </div>\n                    </div>\n\n                    <!-- Driver Number -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label for=\"driverNumber\">Driver Number</label>\n                            <input type=\"text\" id=\"driverNumber\" formControlName=\"driverNumber\" class=\"form-control\"\n                                placeholder=\"Enter Driver Number\" />\n                        </div>\n                    </div>\n\n                    <!-- Vehicle Number -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-12\">\n                        <div class=\"form-group\">\n                            <label for=\"vehicleNumber\">Vehicle Number</label>\n                            <input type=\"text\" id=\"vehicleNumber\" formControlName=\"vehiclenumber\" class=\"form-control\"\n                                placeholder=\"Enter Vehicle Number\" />\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Submit and Cancel buttons -->\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-12 text-end\">\n                        <div class=\"modal-footer\">\n                            <button type=\"submit\" class=\"btn btn-outline-info list-button-container\"\n                                (click)=\"search()\"><span class=\"list-text-alaign-center\">Submit</span></button>\n                            <button type=\"button\" class=\"btn btn-outline-secondary list-button-container\"\n                                (click)=\"onclear()\"><span class=\"list-text-alaign-center\">Clear</span></button>\n\n                        </div>\n                    </div>\n                </div>\n            </app-card>\n        </form>\n    </div>\n</div>\n\n\n\n\n<div class=\"outer-container\">\n    <div class=\"button-container\">\n        <button class=\"btn btn-outline-success list-button-container\" [routerLink]=\"['/container/trip-detail/add']\">\n            <span class=\"list-text-alaign-center\">Add</span>\n        </button>\n        <button class=\"btn btn-outline-secondary list-button-container\" (click)=\"onEdit()\" [disabled]=\"!editEnable\">\n            <span class=\"list-text-alaign-center\">Edit</span>\n        </button>\n        <button class=\"btn btn-outline-warning list-button-container\" (click)=\"onView()\" [disabled]=\"!viewEnable\">\n            <span class=\"list-text-alaign-center\">View</span>\n        </button>\n        <!-- <button (click)=\"onclear()\">\n            <span>Clear</span>\n        </button> -->\n    </div>\n</div>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"table-design\">\n    <!-- Serial No Column -->\n    <ng-container matColumnDef=\"serialNo\">\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> S.No </th>\n        <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-center\"> {{ i + 1 }} </td>\n    </ng-container>\n\n    <!-- Driver Name Column -->\n    <ng-container matColumnDef=\"createdDate\">\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> CreatedDate </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.createdDate | date: 'dd-MM-yyyy'}} </td>\n    </ng-container>\n\n    <!-- Driver Name Column -->\n    <ng-container matColumnDef=\"vehicleNumber\">\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> VehicleNumber </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.vehicleNumber}} </td>\n    </ng-container>\n\n    <!-- Mobile Number Column -->\n    <ng-container matColumnDef=\"customerName\">\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\">CustomerName</th>\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.customerName}} </td>\n    </ng-container>\n\n    <!-- Driving License Number Column -->\n    <ng-container matColumnDef=\"visitingPlace\">\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> VisitingPlace </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.visitingPlace}} </td>\n    </ng-container>\n\n    <!-- Aadhar Number Column -->\n    <ng-container matColumnDef=\"driverName\">\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Driver Name </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.driverName}} </td>\n    </ng-container>\n\n    <!-- District Column -->\n    <ng-container matColumnDef=\"totalRent\">\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\">TotalRent </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.totalRent}} </td>\n    </ng-container>\n\n    <!-- Status Column -->\n    <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Status </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.status ? 'Active' : 'Inactive'}} </td>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef class=\"text-center\"> Action </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n            <mat-radio-button (click)=\"onSelect(element)\"></mat-radio-button>\n        </td>\n    </ng-container>\n\n\n    <!-- Header and Row Definitions -->\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<mat-paginator [length]=\"totelCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\"\n    (page)=\"pageEvent($event)\">\n</mat-paginator>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a [routerLink]=\"['/dashboard']\">Home</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n      <a [routerLink]=\"['/container/trip-detail/list']\">Trip Details</a>\n    </li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">View</li>\n  </ul>\n  \n  <app-card [hidHeader]=\"true\" class=\"view-panel\">\n    <h4>Trip Details</h4>\n    <hr>\n    <div class=\"container\">\n      <div class=\"row mb-3\">\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Vehicle Number</label>\n          <p class=\"view-text\">{{getTripDetails?.vehicleNumber}}</p>\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Customer Name</label>\n          <p class=\"view-text\">{{getTripDetails?.customerName}}</p>\n        </div>\n      </div>\n  \n      <div class=\"row mb-3\">\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Customer Mobile Number</label>\n          <p class=\"view-text\">{{getTripDetails?.customerMobileNumber}}</p>\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Driver Name</label>\n          <p class=\"view-text\">{{getTripDetails?.driverName}}</p>\n        </div>\n      </div>\n  \n      <div class=\"row mb-3\">\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Starting KM</label>\n          <p class=\"view-text\">{{getTripDetails?.startingKM}}</p>\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Closing KM</label>\n          <p class=\"view-text\">{{getTripDetails?.closingKM}}</p>\n        </div>\n      </div>\n  \n      <div class=\"row mb-3\">\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Used KM</label>\n          <p class=\"view-text\">{{getTripDetails?.usedKM}}</p>\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">AC or Non-AC</label>\n          <p class=\"view-text\">{{getTripDetails?.acOrNonAc}}</p>\n        </div>\n      </div>\n  \n      <div class=\"row mb-3\">\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Starting Time</label>\n          <p class=\"view-text\">{{getTripDetails?.startingTime}}</p>\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Closing Time</label>\n          <p class=\"view-text\">{{getTripDetails?.closingTime}}</p>\n        </div>\n      </div>\n  \n      <div class=\"row mb-3\">\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Total Time</label>\n          <p class=\"view-text\">{{getTripDetails?.totalTime}}</p>\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Visiting Place</label>\n          <p class=\"view-text\">{{getTripDetails?.visitingPlace}}</p>\n        </div>\n      </div>\n  \n      <div class=\"row mb-3\">\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Advance Amount</label>\n          <p class=\"view-text\">{{getTripDetails?.advanceAmount}}</p>\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Total Rent</label>\n          <p class=\"view-text\">{{getTripDetails?.totalRent}}</p>\n        </div>\n      </div>\n  \n      <div class=\"row mb-3\">\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Diesel Amount</label>\n          <p class=\"view-text\">{{getTripDetails?.diesel}}</p>\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Driver Payment</label>\n          <p class=\"view-text\">{{getTripDetails?.driverPayment}}</p>\n        </div>\n      </div>\n  \n      <div class=\"row mb-3\">\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Received Amount</label>\n          <p class=\"view-text\">{{getTripDetails?.receivedAmount}}</p>\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Pending Amount</label>\n          <p class=\"view-text\">{{getTripDetails?.pendingAmount}}</p>\n        </div>\n      </div>\n  \n      <div class=\"row mb-3\">\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Submitted By</label>\n          <p class=\"view-text\">{{getTripDetails?.submittedBy}}</p>\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"view-label\">Status</label>\n          <p class=\"view-text\">{{getTripDetails?.status}}</p>\n        </div>\n      </div>\n  \n      <div class=\"row mt-3\">\n        <div class=\"col-lg-12 text-end\">\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\" [routerLink]=\"['/container/trip-detail/list']\">Back</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </app-card>\n  "

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
        else if (tripFormDetails.value.acOrNonAc == 'AC' && tripFormDetails.value.startingKM >= tripFormDetails.value.closingKM) {
            this.toastrMsg.warning('Please enter Starting KM greater than Closing KM');
        }
        else if (tripFormDetails.value.acOrNonAc == 'AC' && tripFormDetails.value.acStartingKM >= tripFormDetails.value.acClosingKM) {
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
        // Allow only numeric keys (0-9 from both top row and numpad)
        if ((charCode < 48 || charCode > 57) && // Top row numbers (0-9)
            (charCode < 96 || charCode > 105) // Numpad numbers (0-9)
        ) {
            event.preventDefault(); // Restrict other keys
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
/*! exports provided: MY_CUSTOM_FORMATS, TripDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_CUSTOM_FORMATS", function() { return MY_CUSTOM_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsModule", function() { return TripDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_pick_datetime_date_time_adapter_moment_adapter_moment_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class.js");
/* harmony import */ var _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip-details-routing.module */ "./src/app/container/trip-details/trip-details/trip-details-routing.module.ts");
/* harmony import */ var _add_edit_trip_details_add_edit_trip_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit-trip-details/add-edit-trip-details.component */ "./src/app/container/trip-details/trip-details/add-edit-trip-details/add-edit-trip-details.component.ts");
/* harmony import */ var _view_trip_details_view_trip_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-trip-details/view-trip-details.component */ "./src/app/container/trip-details/trip-details/view-trip-details/view-trip-details.component.ts");
/* harmony import */ var _trip_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trip-details.component */ "./src/app/container/trip-details/trip-details/trip-details.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");












var MY_CUSTOM_FORMATS = {
    fullPickerInput: 'DD/MM/YYYY HH:mm',
    parseInput: 'DD/MM/YYYY HH:mm',
    datePickerInput: 'DD/MM/YYYY',
    timePickerInput: 'HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};
var TripDetailsModule = /** @class */ (function () {
    function TripDetailsModule() {
    }
    TripDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _trip_details_component__WEBPACK_IMPORTED_MODULE_7__["TripDetailsComponent"],
                _add_edit_trip_details_add_edit_trip_details_component__WEBPACK_IMPORTED_MODULE_5__["AddEditTripDetailsComponent"],
                _view_trip_details_view_trip_details_component__WEBPACK_IMPORTED_MODULE_6__["ViewTripDetailsComponent"]
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