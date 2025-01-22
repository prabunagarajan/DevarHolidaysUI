(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/service/master.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/master.service.ts ***!
  \*******************************************/
/*! exports provided: MasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterService", function() { return MasterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let MasterService = class MasterService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
    }
    getAllVehicleActive() {
        const url = this.baseUrl + 'vehicleDetails/active';
        return this.httpClient.get(url);
    }
    getAllVehicleNumberStatus() {
        const url = this.baseUrl + 'vehicleDetails/getAll';
        return this.httpClient.get(url);
    }
    driverDetailsSearchList(obj) {
        const url = this.baseUrl + 'DriverDetails/search';
        return this.httpClient.post(url, obj);
    }
    driverDetailsAdd(req) {
        const url = this.baseUrl + 'DriverDetails/add';
        return this.httpClient.post(url, req);
    }
    driverDetailsUpdate(req) {
        const url = this.baseUrl + 'DriverDetails/update';
        return this.httpClient.put(url, req);
    }
    driverDetailsView(requestId) {
        const url = this.baseUrl + 'DriverDetails/getById/' + requestId;
        return this.httpClient.get(url);
    }
    getDriverById(id) {
        const url = this.baseUrl + 'DriverDetails/getById/' + id;
        return this.httpClient.get(url);
    }
    vehicleDetailsGetAllList(obj) {
        const url = this.baseUrl + 'vehicleDetails/search';
        return this.httpClient.post(url, obj);
    }
    vehicleDetailsAdd(obj) {
        const url = this.baseUrl + 'vehicleDetails/add';
        return this.httpClient.post(url, obj);
    }
    updateVehicle(vehicle) {
        const url = this.baseUrl + 'vehicleDetails/update';
        return this.httpClient.put(url, vehicle);
    }
    getVehicleById(id) {
        const url = this.baseUrl + 'vehicleDetails/getById/' + id;
        return this.httpClient.get(url);
    }
};
MasterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MasterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], MasterService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map