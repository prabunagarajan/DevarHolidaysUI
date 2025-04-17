(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dash-analytics-dash-analytics-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/dashboard/dash-analytics/dash-analytics.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/dashboard/dash-analytics/dash-analytics.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\r\n        <app-card [hidHeader]=\"true\">\r\n          <span>User</span>\r\n          <h3>798</h3>\r\n          <app-apex-chart chartID=\"analytics-apex-user-chart\" [chartConfig]=\"this.chartDB.userAACC\"></app-apex-chart>\r\n        </app-card>\r\n      </div>\r\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\r\n        <app-card [hidHeader]=\"true\">\r\n          <span>Session</span>\r\n          <h3>486</h3>\r\n          <app-apex-chart chartID=\"analytics-apex-session-chart\" [chartConfig]=\"this.chartDB.sessionAACC\"></app-apex-chart>\r\n        </app-card>\r\n      </div>\r\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\r\n        <app-card [hidHeader]=\"true\">\r\n          <span>Page view</span>\r\n          <h3>9454</h3>\r\n          <app-apex-chart chartID=\"analytics-apex-page-view-chart\" [chartConfig]=\"this.chartDB.pageViewAACC\"></app-apex-chart>\r\n        </app-card>\r\n      </div>\r\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\r\n        <app-card [hidHeader]=\"true\">\r\n          <span>Page / Session</span>\r\n          <h3>7.15</h3>\r\n          <app-apex-chart chartID=\"analytics-apex-page-session-chart\" [chartConfig]=\"this.chartDB.pageSessionAACC\"></app-apex-chart>\r\n        </app-card>\r\n      </div>\r\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\r\n        <app-card [hidHeader]=\"true\">\r\n          <span>Avg. Session Time</span>\r\n          <h3>00:04:30</h3>\r\n          <app-apex-chart chartID=\"analytics-apex-avg-session-chart\" [chartConfig]=\"this.chartDB.avgSessionAACC\"></app-apex-chart>\r\n        </app-card>\r\n      </div>\r\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\r\n        <app-card [hidHeader]=\"true\">\r\n          <span>Bounce Rate</span>\r\n          <h3>1.55%</h3>\r\n          <app-apex-chart chartID=\"analytics-apex-bounce-rate-chart\" [chartConfig]=\"this.chartDB.bounceRateAACC\"></app-apex-chart>\r\n        </app-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-8\">\r\n    <app-card cardTitle=\"Daily Visitor\" [options]=\"false\">\r\n      <app-apex-chart chartID=\"daily-visitor-aa-cc\" [chartConfig]=\"this.chartDB.dailyVisitorAACC\" [xAxis]=\"dailyVisitorAxis\"></app-apex-chart>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-xl-4\">\r\n    <app-card [hidHeader]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-auto\">\r\n          <h6>Devices</h6>\r\n        </div>\r\n        <div class=\"col text-right\">\r\n          <h2 class=\"mb-0\">1042</h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-4\">\r\n        <div class=\"col\">\r\n          <h3 class=\"m-0\"><i class=\"fas fa-circle text-success f-10 m-r-5\"></i>66%</h3>\r\n          <span class=\"ml-3\">Desktop</span>\r\n        </div>\r\n        <div class=\"col\">\r\n          <h3 class=\"m-0\"><i class=\"fas fa-circle text-primary f-10 m-r-5\"></i>26%</h3>\r\n          <span class=\"ml-3\">Tablet</span>\r\n        </div>\r\n        <div class=\"col\">\r\n          <h3 class=\"m-0\"><i class=\"fas fa-circle text-danger f-10 m-r-5\"></i>8%</h3>\r\n          <span class=\"ml-3\">Mobile</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"progressbar-stack mt-4\">\r\n        <div *ngFor=\"let bar of deviceProgressBar\" [ngStyle]=\"{width: bar.value + '%'}\" class=\"float-left\">\r\n          <ngb-progressbar [type]=\"bar.type\" height=\"8px\" [value]=\"100\"></ngb-progressbar>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <app-card [hidHeader]=\"true\">\r\n      <div class=\"row align-items-start\">\r\n        <div class=\"col\">\r\n          <h2 class=\"mb-0\">954</h2>\r\n        </div>\r\n        <div class=\"col-auto text-right\">\r\n          <h6 class=\"\">Location</h6>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-sm-6\">\r\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-green f-10 m-r-10\"></i>India</span>\r\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-red f-10 m-r-10\"></i>France</span>\r\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-blue f-10 m-r-10\"></i>Other</span>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-yellow f-10 m-r-10\"></i>United states</span>\r\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-purple f-10 m-r-10\"></i>United Kingdom</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"progress mt-3\" style=\"height:20px;\">\r\n        <div class=\"progress-bar badge-light-success rounded\" role=\"progressbar\" style=\"width: 30%;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\">24%</div>\r\n        <div class=\"progress-bar badge-light-danger rounded\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">12%</div>\r\n        <div class=\"progress-bar badge-light-primary rounded\" role=\"progressbar\" style=\"width: 20%;\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">10%</div>\r\n        <div class=\"progress-bar badge-light-warning rounded\" role=\"progressbar\" style=\"width: 15%;\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">8%</div>\r\n        <div class=\"progress-bar badge-light-info rounded\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">35%</div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <app-card cardTitle=\"Campaign Monitor\" cardClass=\"table-card\" blockClass=\"p-0\">\r\n      <perfect-scrollbar [style.max-height]=\"'362px'\">\r\n        <table class=\"table table-hover m-b-0\">\r\n          <thead>\r\n            <tr>\r\n              <th><span>Campaign date</span></th>\r\n              <th>\r\n                <span>Click\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>Cost\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>CTR\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>ARPU\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>ECPI\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>ROI\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>Revenue\r\n                <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>Conversions\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>08-11-2016</td>\r\n              <td>786\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>485\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"50\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>769\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>45,3%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>6,7%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>8,56\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>10:55\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>33.8%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>15-10-2016</td>\r\n              <td>786\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"65\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>523\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>736\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>78,3%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>6,6%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>7,56\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"44\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>4:30\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"68\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>76.8%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>08-08-2017</td>\r\n              <td>624\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"45\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>436\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"55\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>756\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"95\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>78,3%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"38\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>6,4%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>9,45\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>9:05\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"67\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>8.63%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>11-12-2017</td>\r\n              <td>423\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"54\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>123\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>756\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"75\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>78,6%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>45,6%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>6,85\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>7:45\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>33.8%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>05-06-2015</td>\r\n              <td>465\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"66\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>463\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"50\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>456\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>68,6%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>76,6%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"32\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>7,56\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>8:45\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"71\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>39.8%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"38\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>08-11-2016</td>\r\n              <td>786\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"43\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>485\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>769\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"69\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>45,3%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>6,7%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>8,56\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>10:55\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"55\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>33.8%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>15-10-2016</td>\r\n              <td>786\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"61\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>523\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"45\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>736\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>78,3%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>6,6%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>7,56\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>4:30\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>76.8%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </perfect-scrollbar>\r\n    </app-card>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"container mt-4\">\r\n  <h2 class=\"fw-bold\">\r\n    HELLO TEAM DC &nbsp;&nbsp;&nbsp;<span><i class=\"fa fa-car\"></i></span>\r\n  </h2>\r\n\r\n  <nav class=\"d-flex justify-content-between align-items-center\">\r\n    <div class=\"nav\">\r\n      <!-- <a class=\"nav-link active text-success fw-bold\" href=\"#\">Popular Places</a> -->\r\n      <!-- <a class=\"nav-link text-muted\" href=\"#\">Recommended</a>\r\n      <a class=\"nav-link text-muted\" href=\"#\">Near Me</a> -->\r\n    </div>\r\n  </nav>\r\n  <br>\r\n  <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\r\n    <div class=\"row mt-3\">\r\n      <div class=\"col-md-4\" *ngFor=\"let place of driverTrips; let i = index\">\r\n        <div class=\"card border-0 shadow-sm position-relative\">\r\n          <div class=\"image-container\">\r\n            <img [src]=\"places[i]?.image\" class=\"card-img-top rounded\" alt=\"Place Image\">\r\n            <div class=\"overlay-text\">\r\n              <h5 class=\"text-white fw-bold\">{{ place.driverName }}</h5>\r\n              <div class=\"trip-details\">\r\n                <span>\r\n                  <i class=\"fas fa-route me-1\"></i>{{ place.totalTrips }}\r\n                </span>\r\n                <span class=\"text-success fw-bold\">\r\n                  <i class=\"fas fa-rupee-sign me-1\"></i>{{ place.totalEarns }}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </app-card>\r\n  <br>\r\n  <app-card [hidHeader]=\"true\" cardClass=\"comp-card\">\r\n    <div class=\"row mt-3\">\r\n      <div class=\"col-md-4\" *ngFor=\"let place of totalVehicleTripsAndProfit; let i = index\">\r\n        <div class=\"card border-0 shadow-sm position-relative\">\r\n          <div class=\"image-container\">\r\n            <img [src]=\"places[i]?.image\" class=\"card-img-top rounded\" alt=\"Place Image\">\r\n            <div class=\"overlay-text\">\r\n              <h5 class=\"text-white fw-bold\">{{ place.vehicleNumber }}</h5>\r\n              <div class=\"trip-details\">\r\n                <span>\r\n                  <i class=\"fas fa-route me-1\"></i>{{ place.totalTrips }}\r\n                </span>\r\n                <span class=\"text-success fw-bold\">\r\n                  <i class=\"fas fa-rupee-sign me-1\"></i>{{ place.totalProfit }}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </app-card>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: DashAnalyticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAnalyticsRoutingModule", function() { return DashAnalyticsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dash_analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-analytics.component */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts");




var routes = [
    {
        path: '',
        component: _dash_analytics_component__WEBPACK_IMPORTED_MODULE_3__["DashAnalyticsComponent"]
    }
];
var DashAnalyticsRoutingModule = /** @class */ (function () {
    function DashAnalyticsRoutingModule() {
    }
    DashAnalyticsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashAnalyticsRoutingModule);
    return DashAnalyticsRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-container {\n  position: relative;\n  border-radius: 5px;\n  overflow: hidden;\n  /* Ensures the border-radius applies properly */ }\n\n.image-container img {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  border-radius: 15px;\n  /* Apply border-radius to the image */ }\n\n.overlay-text {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 14px;\n  width: calc(100% - 20px); }\n\n.trip-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kYXNoYm9hcmQvZGFzaC1hbmFseXRpY3MvRDpcXDE5LVYtRGV2ZXIgSG9sZGF5cyBVSVxcREhELU9MRC1EZXNpZ25zXFxEZXZhckhvbGlkYXlzVUkvc3JjXFxhcHBcXGRlbW9cXGRhc2hib2FyZFxcZGFzaC1hbmFseXRpY3NcXGRhc2gtYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQUUsK0NBQUEsRUFBZ0Q7O0FBR3BFO0VBQ0UsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUFFLHFDQUFBLEVBQXNDOztBQUc3RDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2Rhc2gtYW5hbHl0aWNzL2Rhc2gtYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmNhcmQ6aG92ZXIge1xyXG4vLyAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbi8vIH1cclxuXHJcbi8vIC5uYXYgYSB7XHJcbi8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuLy8gICBmb250LXNpemU6IDE4cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5uYXYgYS5hY3RpdmUge1xyXG4vLyAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmVlbjtcclxuLy8gfVxyXG5cclxuLy8gLmNhcmQge1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gfVxyXG5cclxuLy8gLmNhcmQgaW1nIHtcclxuLy8gICBoZWlnaHQ6IDIwMHB4O1xyXG4vLyAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyB9XHJcblxyXG4vLyAucmFpbmJvdyB7XHJcbi8vICAgZm9udC1zaXplOiAyNHB4O1xyXG4vLyB9XHJcblxyXG5cclxuLy8gLmltYWdlLWNvbnRhaW5lciB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyB9XHJcblxyXG4vLyAuaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbi8vICAgaGVpZ2h0OiAyMDBweDtcclxuLy8gICBvYmplY3QtZml0OiBjb3ZlcjtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG5cclxuLy8gLm92ZXJsYXktdGV4dCB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIGJvdHRvbTogMTBweDtcclxuLy8gICBsZWZ0OiAxMHB4O1xyXG4vLyAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyB9XHJcblxyXG5cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBFbnN1cmVzIHRoZSBib3JkZXItcmFkaXVzIGFwcGxpZXMgcHJvcGVybHkgKi9cclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgLyogQXBwbHkgYm9yZGVyLXJhZGl1cyB0byB0aGUgaW1hZ2UgKi9cclxufVxyXG5cclxuLm92ZXJsYXktdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTBweDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbn1cclxuXHJcbi50cmlwLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts ***!
  \***************************************************************************/
/*! exports provided: DashAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAnalyticsComponent", function() { return DashAnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../fack-db/chart-data */ "./src/app/fack-db/chart-data.ts");
/* harmony import */ var _theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../theme/shared/components/chart/apex-chart/apex-chart.service */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");





var DashAnalyticsComponent = /** @class */ (function () {
    function DashAnalyticsComponent(apexEvent, commonservice) {
        this.apexEvent = apexEvent;
        this.commonservice = commonservice;
        // places = [
        //   {
        //     image: 'assets/CAR/CAR.jpeg'
        //   },
        //   {
        //     image: 'assets/CAR/CAR1.jpeg'
        //   },
        //   {
        //     image: 'assets/CAR/CAR3.jpeg'
        //   },
        //   {
        //     image: 'assets/CAR/CAR4.jpeg'
        //   },
        //   {
        //     image: 'assets/CAR/CAR5.jpeg'
        //   },
        //   {
        //     image: 'assets/CAR/CAR6.jpeg'
        //   },
        //   {
        //     image: 'assets/CAR/CAR7.jpeg'
        //   },
        // ];
        // totalVehicleTripsAndProfit: any;
        // constructor(public apexEvent: ApexChartService, private commonservice: CommonService) {
        //   this.chartDB = ChartDB;
        //   this.dailyVisitorStatus = '1y';
        //   this.deviceProgressBar = [
        //     {
        //       type: 'success',
        //       value: 66
        //     }, {
        //       type: 'primary',
        //       value: 26
        //     }, {
        //       type: 'danger',
        //       value: 8
        //     }
        //   ];
        // }
        // driverTrips: any[] = [];
        // ngOnInit() {
        //   const today = new Date();
        //   const month = today.getMonth() + 1;
        //   const year = today.getFullYear();
        //   this.commonservice.dashBoardCount(month, year).subscribe(res => {
        //     this.driverTrips = res;
        //     console.log(this.driverTrips);
        //   })
        //   this.commonservice.getTotalVehicleTripsAndProfit(month, year).subscribe(res => {
        //     this.totalVehicleTripsAndProfit = res;
        //     console.log(this.driverTrips);
        //   })
        // }
        this.allImages = [
            'assets/CAR/CAR.jpeg',
            'assets/CAR/CAR1.jpeg',
            'assets/CAR/CAR3.jpeg',
            'assets/CAR/CAR4.jpeg',
            'assets/CAR/CAR5.jpeg',
            'assets/CAR/CAR6.jpeg',
            'assets/CAR/CAR7.jpeg'
        ];
        this.places = [];
        this.driverTrips = [];
        this.chartDB = _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_2__["ChartDB"];
        this.dailyVisitorStatus = '1y';
        this.deviceProgressBar = [
            { type: 'success', value: 66 },
            { type: 'primary', value: 26 },
            { type: 'danger', value: 8 }
        ];
    }
    DashAnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assignRandomImages();
        var today = new Date();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        this.commonservice.dashBoardCount(month, year).subscribe(function (res) {
            _this.driverTrips = res;
            console.log(_this.driverTrips);
        });
        this.commonservice.getTotalVehicleTripsAndProfit(month, year).subscribe(function (res) {
            _this.totalVehicleTripsAndProfit = res;
            console.log(_this.totalVehicleTripsAndProfit);
        });
    };
    DashAnalyticsComponent.prototype.assignRandomImages = function () {
        this.places = this.allImages
            .map(function (image) { return ({ image: image }); }) // Convert to object format
            .sort(function () { return 0.5 - Math.random(); }); // Shuffle the images randomly
    };
    DashAnalyticsComponent.ctorParameters = function () { return [
        { type: _theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"] },
        { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
    ]; };
    DashAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dash-analytics',
            template: __webpack_require__(/*! raw-loader!./dash-analytics.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/dashboard/dash-analytics/dash-analytics.component.html"),
            styles: [__webpack_require__(/*! ./dash-analytics.component.scss */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"], src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], DashAnalyticsComponent);
    return DashAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics.module.ts ***!
  \************************************************************************/
/*! exports provided: DashAnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAnalyticsModule", function() { return DashAnalyticsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dash_analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-analytics-routing.module */ "./src/app/demo/dashboard/dash-analytics/dash-analytics-routing.module.ts");
/* harmony import */ var _dash_analytics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash-analytics.component */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var DashAnalyticsModule = /** @class */ (function () {
    function DashAnalyticsModule() {
    }
    DashAnalyticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dash_analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashAnalyticsRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"]
            ],
            declarations: [
                _dash_analytics_component__WEBPACK_IMPORTED_MODULE_4__["DashAnalyticsComponent"],
            ]
        })
    ], DashAnalyticsModule);
    return DashAnalyticsModule;
}());



/***/ })

}]);
//# sourceMappingURL=dash-analytics-dash-analytics-module-es5.js.map