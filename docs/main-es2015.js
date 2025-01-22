(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n  <app-spinner></app-spinner>\r\n</router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/admin.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/admin.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation class=\"pcoded-navbar\" [ngClass]=\"{'navbar-collapsed' : navCollapsed, 'theme-horizontal': this.nextConfig['layout'] === 'horizontal', 'mob-open' : navCollapsedMob}\" (onNavMobCollapse)=\"navMobClick()\"></app-navigation>\r\n<app-nav-bar class=\"navbar pcoded-header navbar-expand-lg navbar-light\" (onNavCollapse)=\"this.navCollapsed = !this.navCollapsed;\" (onNavHeaderMobCollapse)=\"navMobClick()\"></app-nav-bar>\r\n<div class=\"pcoded-main-container\">\r\n  <div class=\"pcoded-wrapper\" [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\r\n    <div class=\"pcoded-content\">\r\n      <div class=\"pcoded-inner-content\">\r\n        <div class=\"main-body\">\r\n          <div class=\"page-wrapper\">\r\n            <app-breadcrumb></app-breadcrumb>\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-configuration></app-configuration>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/configuration/configuration.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/configuration/configuration.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'; else mainHeader\">\r\n  <ng-container *ngTemplateOutlet=\"mainHeader\"></ng-container>\r\n</div>\r\n<ng-template #mainHeader>\r\n  <div class=\"m-header\">\r\n    <a href=\"javascript:\" class=\"mobile-menu\" id=\"mobile-collapse\" (click)=\"navCollapse()\"><span></span></a>\r\n    <a [routerLink]=\"['/dashboard/analytics']\" class=\"b-brand\">\r\n      <img id=\"main-logo\" src=\"assets/images/logo.png\" alt=\"\" class=\"logo\" *ngIf=\"this.nextConfig.navBrandColor !== 'brand-default' || this.nextConfig.headerBackColor !== 'header-default'\">\r\n      <img src=\"assets/images/logo-dark.png\" alt=\"\" class=\"logo\" *ngIf=\"this.nextConfig.navBrandColor === 'brand-default' && this.nextConfig.headerBackColor === 'header-default'\">\r\n      <img src=\"assets/images/logo-icon.png\" alt=\"\" class=\"logo-thumb\">\r\n    </a>\r\n    <a class=\"mob-toggler\" [ngClass]=\"{'on' : this.menuClass}\" href=\"javascript:\" (click)=\"toggleMobOption()\"><i class=\"feather icon-more-vertical\"></i></a>\r\n  </div>\r\n  <div class=\"collapse navbar-collapse\" [style.display]=\"this.collapseStyle\">\r\n    <app-nav-left class=\"mr-auto\"></app-nav-left>\r\n    <app-nav-right class=\"ml-auto\"></app-nav-right>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav mr-auto\">\r\n  <li class=\"nav-item\">\r\n    <app-nav-search></app-nav-search>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"main-search\" class=\"main-search open\">\r\n  <div class=\"input-group\">\r\n    <input type=\"text\" id=\"m-search\" class=\"form-control\" placeholder=\"Search . . .\" [style.width]=\"'130px'\">\r\n    <span class=\"input-group-append search-btn btn btn-primary\">\r\n      <i class=\"feather icon-search input-group-text\"></i>\r\n    </span>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav ml-auto\">\r\n  <li>\r\n    <div class=\"dropdown\" ngbDropdown placement=\"auto\">\r\n      <a ngbDropdownToggle href=\"javascript:\" data-toggle=\"dropdown\"><i class=\"icon feather icon-bell\"></i></a>\r\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right notification\">\r\n        <div class=\"noti-head\">\r\n          <h6 class=\"d-inline-block m-b-0\">Notifications</h6>\r\n          <div class=\"float-right\">\r\n            <a href=\"javascript:\" class=\"m-r-10\">mark as read</a>\r\n            <a href=\"javascript:\">clear all</a>\r\n          </div>\r\n        </div>\r\n        <ul class=\"noti-body\">\r\n          <li class=\"n-title\">\r\n            <p class=\"m-b-0\">NEW</p>\r\n          </li>\r\n          <li class=\"notification\">\r\n            <div class=\"media\">\r\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-1.jpg\" alt=\"Generic placeholder image\">\r\n              <div class=\"media-body\">\r\n                <p><strong>John Doe</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\r\n                <p>New ticket Added</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"n-title\">\r\n            <p class=\"m-b-0\">EARLIER</p>\r\n          </li>\r\n          <li class=\"notification\">\r\n            <div class=\"media\">\r\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n              <div class=\"media-body\">\r\n                <p><strong>Joseph William</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\r\n                <p>Prchace New Theme and make payment</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"notification\">\r\n            <div class=\"media\">\r\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-3.jpg\" alt=\"Generic placeholder image\">\r\n              <div class=\"media-body\">\r\n                <p><strong>Sara Soudein</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\r\n                <p>currently login</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n        <div class=\"noti-footer\">\r\n          <a href=\"javascript:\">show all</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <li>\r\n    <div class=\"dropdown drp-user\" ngbDropdown placement=\"auto\">\r\n      <a href=\"javascript:\" ngbDropdownToggle data-toggle=\"dropdown\">\r\n        <i class=\"icon feather icon-user\"></i>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right profile-notification\" ngbDropdownMenu>\r\n        <div class=\"pro-head\">\r\n          <img src=\"assets/images/user/avatar-1.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n          <span>John Doe</span>\r\n          <a href=\"javascript:\" class=\"dud-logout\" title=\"Logout\">\r\n            <i class=\"feather icon-log-out\"></i>\r\n          </a>\r\n        </div>\r\n        <ul class=\"pro-body\">\r\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-user\"></i> Profile</a></li>\r\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-mail\"></i> My Messages</a></li>\r\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-lock\"></i> Lock Screen</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!item.hidden\">\r\n  <li *ngIf=\"themeLayout === 'horizontal'\" (mouseenter)=\"navCollapse($event)\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\r\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\">\r\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\r\n    </a>\r\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\r\n  </li>\r\n  <li *ngIf=\"themeLayout === 'vertical'\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\r\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\" (click)=\"navCollapse($event)\">\r\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\r\n    </a>\r\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\r\n  </li>\r\n  <ng-template #itemContent>\r\n      <span class=\"pcoded-micon\" *ngIf=\"item.icon\">\r\n        <i class=\"{{item.icon}}\"></i>\r\n      </span>\r\n      <span class=\"pcoded-mtext\">{{item.title}}\r\n        <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\r\n          {{item.badge.title}}\r\n        </span>\r\n      </span>\r\n      <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\r\n        {{item.badge.title}}\r\n      </span>\r\n  </ng-template>\r\n  <ng-template #subMenuContent>\r\n    <ul class=\"pcoded-submenu\" [routerLinkActive]=\"['active']\">\r\n      <ng-container *ngFor=\"let item of item.children\">\r\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n      </ng-container>\r\n    </ul>\r\n  </ng-template>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<perfect-scrollbar *ngIf=\"this.nextConfig['layout'] === 'vertical'\" (clickOutside)=\"navMob()\"\r\n  [excludeBeforeClick]=\"true\" [exclude]=\"'#mobile-collapse'\" id=\"nav-ps-next\" ngClass=\"next-scroll\"\r\n  [style.max-width]=\"'300px'\" [style.max-height]=\"'calc(100vh - 60px)'\" [usePSClass]=\"'next'\" [disabled]=\"null\">\r\n  <div class=\"navbar-content\">\r\n    <ul class=\"nav pcoded-inner-navbar\" (clickOutside)=\"fireOutClick()\">\r\n      <ng-container *ngFor=\"let item of navigation\">\r\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n      </ng-container>\r\n    </ul>\r\n    <!-- <app-card [hidHeader]=\"true\" cardClass=\"text-center\">\r\n      <i class=\"feather icon-sunset f-40\"></i>\r\n      <h6 class=\"mt-3\">Help?</h6>\r\n      <p>Please contact us on our email for need any support</p>\r\n      <a href=\"javascript:\" target=\"_blank\" class=\"btn btn-primary btn-sm text-white m-0\">Support</a>\r\n    </app-card> -->\r\n  </div>\r\n</perfect-scrollbar>\r\n\r\n<div *ngIf=\"this.nextConfig['layout'] === 'horizontal'\" #navbarWrapper class=\"navbar-content sidenav-horizontal\"\r\n  id=\"layout-sidenav\">\r\n  <a href=\"javascript:\" class=\"sidenav-horizontal-prev\" [ngClass]=\"prevDisabled\" (click)=\"scrollMinus()\"></a>\r\n  <div class=\"sidenav-horizontal-wrapper\"><!-- add 14-4 viral -->\r\n    <ul #navbarContent id=\"side-nav-horizontal\" class=\"nav pcoded-inner-navbar sidenav-inner\"\r\n      (clickOutside)=\"fireLeave()\" (mouseleave)=\"fireLeave()\">\r\n      <ng-container *ngFor=\"let item of navigation\">\r\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n      </ng-container>\r\n    </ul>\r\n  </div>\r\n  <a href=\"javascript:\" class=\"sidenav-horizontal-next\" [ngClass]=\"nextDisabled\" (click)=\"scrollPlus()\"></a>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!item.hidden\">\r\n  <li class=\"nav-item pcoded-menu-caption\"><label>{{item.title}}</label></li>\r\n  <ng-container *ngFor=\"let item of item.children\">\r\n    <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n    <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n    <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n  </ng-container>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!item.hidden\">\r\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && !item.external\" [routerLinkActive]=\"['active']\">\r\n    <a class=\"nav-link\" [target]=\"item.target ? '_blank' : '_self'\" [routerLink]=\"[item.url]\" (click)=\"closeOtherMenu($event)\">\r\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\r\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\r\n      <ng-template #directTitle>\r\n        {{item.title}}\r\n      </ng-template>\r\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\r\n    </a>\r\n  </li>\r\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && item.external\">\r\n    <a [target]=\"item.target ? '_blank' : '_self'\" [href]=\"item.url\">\r\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\r\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\r\n      <ng-template #directTitle>\r\n        {{item.title}}\r\n      </ng-template>\r\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\r\n    </a>\r\n  </li>\r\n  <ng-template #itemIcon>\r\n    <span *ngIf=\"item.icon\" class=\"pcoded-micon\"><i class=\"feather\" [ngClass]=\"item.icon\"></i></span>\r\n  </ng-template>\r\n  <ng-template #itemBadge>\r\n    <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\r\n      {{item.badge.title}}\r\n    </span>\r\n    <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\r\n      {{item.badge.title}}\r\n    </span>\r\n  </ng-template>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/navigation.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/navigation.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-wrapper\" [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\r\n  <app-nav-content (onNavMobCollapse)=\"navMobCollapse()\"></app-nav-content>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/auth/auth.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/auth/auth.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/alert/alert.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/alert/alert.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #alert class=\"alert alert-{{type}}\" role=\"alert\" [ngClass]=\"{'alert-dismissible': dismiss}\">\r\n  <ng-content></ng-content>\r\n  <button *ngIf=\"dismiss\" (click)=\"dismissAlert(alert)\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"this.navigationList\">\r\n  <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\">\r\n    <div class=\"page-header\" *ngIf=\"last && breadcrumb.breadcrumbs !== false\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"page-header-title\">\r\n              <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\"><h5 class=\"m-b-10\" *ngIf=\"last\">{{breadcrumb.title}}</h5></ng-container>\r\n            </div>\r\n            <ul class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\">\r\n                <a [routerLink]=\"['/dashboard/analytics/']\" *ngIf=\"type === 'theme2'\"><i class=\"feather icon-home\"></i></a>\r\n                <a [routerLink]=\"['/dashboard/analytics/']\" *ngIf=\"type === 'theme1'\">Home</a>\r\n              </li>\r\n              <ng-container *ngFor=\"let breadcrumb of navigationList\">\r\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url !== false\"><a [routerLink]=\"breadcrumb.url\">{{breadcrumb.title}}</a></li>\r\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url === false\"><a href=\"javascript:\">{{breadcrumb.title}}</a></li>\r\n              </ng-container>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/card/card.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/card/card.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [ngClass]=\"cardClass\" [@cardRemove]=\"cardRemove\" #toAnimate animates animatesInitMode=\"show\" [animatesOnInit]=\"{useVisibility: false, disabled: true}\">\r\n  <div class=\"card-header\" *ngIf=\"!hidHeader\" [ngClass]=\"headerClass\">\r\n    <h5 *ngIf=\"!customHeader\">{{ cardTitle }}</h5>\r\n    <p *ngIf=\"!customHeader && cardCaption\" [ngClass]=\"captionClass\">{{cardCaption}}</p>\r\n    <div class=\"card-header-right\" *ngIf=\"this.options && !customHeader\">\r\n      <div class=\"btn-group card-option dropdown\" ngbDropdown>\r\n        <button type=\"button\" class=\"btn dropdown-toggle btn-icon\" ngbDropdownToggle>\r\n          <i class=\"feather icon-more-horizontal\"></i>\r\n        </button>\r\n        <ul class=\"list-unstyled card-option dropdown-menu dropdown-menu-right\" ngbDropdownMenu>\r\n          <li class=\"dropdown-item full-card\" (click)=\"fullCardToggle(toAnimate, '', true)\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"fullIcon\"></i> {{this.cardClass === 'full-card' ? 'Restore' : 'Maximize'}}</span></a></li>\r\n          <li class=\"dropdown-item minimize-card\" (click)=\"collapsedCardToggle()\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"collapsedIcon\"></i> {{this.collapsedCard === 'collapsed' ? 'Expand' : 'Collapse'}} </span>\r\n            <span style=\"display:none\"><i class=\"feather icon-plus\"></i></span></a></li>\r\n          <li class=\"dropdown-item reload-card\" (click)=\"cardRefresh($event)\"><a href=\"javascript:\"><i class=\"feather icon-refresh-cw\"></i> Reload</a></li>\r\n          <li class=\"dropdown-item close-card\" (click)=\"cardRemoveAction()\"><a href=\"javascript:\"><i class=\"feather icon-trash\"></i> Remove</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <ng-content *ngIf=\"customHeader\" select=\".app-card-header\"></ng-content>\r\n  </div>\r\n  <div [@collapsedCard]=\"collapsedCard\" *ngIf=\"this.options; else subMenuContent\">\r\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\r\n  </div>\r\n  <ng-template #subMenuContent>\r\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </ng-template>\r\n  <div *ngIf=\"isCardFooter\" class=\"card-footer\" [ngClass]=\"footerClass\">\r\n    <ng-content select=\".app-card-footer\"></ng-content>\r\n  </div>\r\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"pct-loader1 anim-rotate\"></i></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"{{this.chartID}}\"></div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"md-modal\" [ngClass]=\"modalClass\" id=\"{{modalID}}\">\r\n  <div class=\"md-content\" [ngClass]=\"contentClass\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"(backDrop); else backDropOver\" class=\"md-overlay\"></div>\r\n<ng-template #backDropOver>\r\n  <div class=\"md-overlay\" (click)=\"close(modalID)\"></div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\" class=\"basic modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" [ngClass]=\"{'in': visibleAnimate}\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n  <div class=\"modal-dialog\" role=\"document\" [ngClass]=\"dialogClass\">\r\n    <div class=\"modal-content\">\r\n      <div *ngIf=\"!hideHeader\" class=\"modal-header\">\r\n        <ng-content select=\".app-modal-header\"></ng-content>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ng-content select=\".app-modal-body\"></ng-content>\r\n      </div>\r\n      <div *ngIf=\"!hideFooter\" class=\"modal-footer\">\r\n        <ng-content select=\".app-modal-footer\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/spinner/spinner.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/spinner/spinner.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\r\n    <div class=\"loader-bg\">\r\n        <!-- material-line -->\r\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\r\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-config.ts":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! exports provided: NextConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextConfig", function() { return NextConfig; });
class NextConfig {
}
NextConfig.config = {
    layout: 'vertical',
    subLayout: '',
    collapseMenu: false,
    layoutType: 'menu-dark',
    headerBackColor: 'header-blue',
    navBrandColor: 'brand-default',
    rtlLayout: false,
    navFixedLayout: true,
    headerFixedLayout: true,
    boxLayout: false,
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/layout/admin/admin.component */ "./src/app/theme/layout/admin/admin.component.ts");
/* harmony import */ var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/layout/auth/auth.component */ "./src/app/theme/layout/auth/auth.component.ts");





const routes = [
    {
        path: '',
        component: _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
        children: [
            {
                /* path: 'auth', */
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-pages-authentication-authentication-module */ "demo-pages-authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./demo/pages/authentication/authentication.module */ "./src/app/demo/pages/authentication/authentication.module.ts")).then(module => module.AuthenticationModule)
            },
            {
                path: 'maintenance',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-pages-maintenance-maintenance-module */ "demo-pages-maintenance-maintenance-module").then(__webpack_require__.bind(null, /*! ./demo/pages/maintenance/maintenance.module */ "./src/app/demo/pages/maintenance/maintenance.module.ts")).then(module => module.MaintenanceModule)
            }
        ]
    },
    {
        path: '',
        component: _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard/analytics',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-dashboard-dashboard-module */ "demo-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./demo/dashboard/dashboard.module */ "./src/app/demo/dashboard/dashboard.module.ts")).then(module => module.DashboardModule)
            },
            {
                path: 'layout',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-pages-layout-layout-module */ "demo-pages-layout-layout-module").then(__webpack_require__.bind(null, /*! ./demo/pages/layout/layout.module */ "./src/app/demo/pages/layout/layout.module.ts")).then(module => module.LayoutModule)
            },
            {
                path: 'basic',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-ui-elements-ui-basic-ui-basic-module */ "demo-ui-elements-ui-basic-ui-basic-module").then(__webpack_require__.bind(null, /*! ./demo/ui-elements/ui-basic/ui-basic.module */ "./src/app/demo/ui-elements/ui-basic/ui-basic.module.ts")).then(module => module.UiBasicModule)
            },
            {
                path: 'forms',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-pages-form-elements-form-elements-module */ "demo-pages-form-elements-form-elements-module").then(__webpack_require__.bind(null, /*! ./demo/pages/form-elements/form-elements.module */ "./src/app/demo/pages/form-elements/form-elements.module.ts")).then(module => module.FormElementsModule)
            },
            {
                path: 'tbl-bootstrap',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-pages-tables-tbl-bootstrap-tbl-bootstrap-module */ "demo-pages-tables-tbl-bootstrap-tbl-bootstrap-module").then(__webpack_require__.bind(null, /*! ./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module.ts")).then(module => module.TblBootstrapModule)
            },
            {
                path: 'charts',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-pages-core-chart-core-chart-module */ "demo-pages-core-chart-core-chart-module").then(__webpack_require__.bind(null, /*! ./demo/pages/core-chart/core-chart.module */ "./src/app/demo/pages/core-chart/core-chart.module.ts")).then(module => module.CoreChartModule)
            },
            {
                path: 'sample-page',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-pages-sample-page-sample-page-module */ "demo-pages-sample-page-sample-page-module").then(__webpack_require__.bind(null, /*! ./demo/pages/sample-page/sample-page.module */ "./src/app/demo/pages/sample-page/sample-page.module.ts")).then(module => module.SamplePageModule)
            },
            {
                path: 'master',
                loadChildren: () => __webpack_require__.e(/*! import() | master-master-module */ "master-master-module").then(__webpack_require__.bind(null, /*! ./master/master.module */ "./src/app/master/master.module.ts")).then(module => module.MasterModule)
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme/layout/admin/admin.component */ "./src/app/theme/layout/admin/admin.component.ts");
/* harmony import */ var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/layout/auth/auth.component */ "./src/app/theme/layout/auth/auth.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme/layout/admin/navigation/navigation.component */ "./src/app/theme/layout/admin/navigation/navigation.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-content.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-group/nav-group.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-item/nav-item.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-bar.component */ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-left/nav-left.component */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-right/nav-right.component */ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts");
/* harmony import */ var _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./theme/layout/admin/configuration/configuration.component */ "./src/app/theme/layout/admin/configuration/configuration.component.ts");
/* harmony import */ var _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./theme/shared/full-screen/toggle-full-screen */ "./src/app/theme/shared/full-screen/toggle-full-screen.ts");
/* harmony import */ var _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./theme/layout/admin/navigation/navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _demo_pages_interceptor_login_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./demo/pages/interceptor/login-interceptor */ "./src/app/demo/pages/interceptor/login-interceptor.ts");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! css-animator */ "./node_modules/css-animator/index.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




















/* Menu Items */







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
            _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
            _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
            _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__["NavContentComponent"],
            _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__["NavGroupComponent"],
            _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__["NavCollapseComponent"],
            _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__["NavItemComponent"],
            _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
            _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__["NavLeftComponent"],
            _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__["NavSearchComponent"],
            _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__["NavRightComponent"],
            _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_18__["ConfigurationComponent"],
            _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_19__["ToggleFullScreenDirective"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbTabsetModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"],
            css_animator__WEBPACK_IMPORTED_MODULE_25__["AnimatorModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot({
                timeOut: 5000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
                closeButton: true
            })
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"], useClass: _demo_pages_interceptor_login_interceptor__WEBPACK_IMPORTED_MODULE_24__["LoginInterceptor"], multi: true },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_26__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_26__["HashLocationStrategy"] },
            _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_20__["NavigationItem"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/demo/pages/interceptor/login-interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/demo/pages/interceptor/login-interceptor.ts ***!
  \*************************************************************/
/*! exports provided: LoginInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInterceptor", function() { return LoginInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginInterceptor = class LoginInterceptor {
    intercept(request, next) {
        let XAuthorization;
        let userName;
        if (sessionStorage.getItem('X-Authorization') && sessionStorage.getItem('userName')) {
            XAuthorization = sessionStorage.getItem('X-Authorization');
            userName = sessionStorage.getItem('userName');
        }
        if (XAuthorization && userName) {
            const cloneRequest = request.clone({
                headers: request.headers
                    .set('X-Authorization', XAuthorization.trim())
                    .set('UserName', userName)
            });
            return next.handle(cloneRequest);
        }
        return next.handle(request);
    }
};
LoginInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginInterceptor);



/***/ }),

/***/ "./src/app/theme/layout/admin/admin.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/theme/layout/admin/admin.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/layout/admin/admin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/admin/admin.component.ts ***!
  \*******************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let AdminComponent = class AdminComponent {
    constructor(zone, location) {
        this.zone = zone;
        this.location = location;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
        let currentURL = this.location.path();
        const baseHerf = this.location['_baseHref'];
        if (baseHerf) {
            currentURL = baseHerf + this.location.path();
        }
        this.windowWidth = window.innerWidth;
        if (currentURL === baseHerf + '/layout/collapse-menu'
            || currentURL === baseHerf + '/layout/box'
            || (this.windowWidth >= 992 && this.windowWidth <= 1024)) {
            this.nextConfig.collapseMenu = true;
        }
        this.navCollapsed = (this.windowWidth >= 992) ? this.nextConfig.collapseMenu : false;
        this.navCollapsedMob = false;
    }
    ngOnInit() {
        if (this.windowWidth < 992) {
            this.nextConfig.layout = 'vertical';
            setTimeout(() => {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-next').style.maxHeight = '100%'; // 100% amit
            }, 500);
        }
    }
    navMobClick() {
        if (this.windowWidth < 992) {
            if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
                this.navCollapsedMob = !this.navCollapsedMob;
                setTimeout(() => {
                    this.navCollapsedMob = !this.navCollapsedMob;
                }, 100);
            }
            else {
                this.navCollapsedMob = !this.navCollapsedMob;
            }
        }
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/theme/layout/admin/admin.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], AdminComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/configuration/configuration.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/layout/admin/configuration/configuration.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none; }\n\nbody.next-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03); }\n\nbody.next-dark .menu-styler h1,\nbody.next-dark .menu-styler h2,\nbody.next-dark .menu-styler h3,\nbody.next-dark .menu-styler h4,\nbody.next-dark .menu-styler h5,\nbody.next-dark .menu-styler p,\nbody.next-dark .menu-styler h6 {\n  color: #222; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2NvbmZpZ3VyYXRpb24vRDpcXDE5LVYtRGV2ZXIgSG9sZGF5cyBVSVxcREhELU9MRC1EZXNpZ25zXFxEZXZhckhvbGlkYXlzVUkvc3JjXFxhcHBcXHRoZW1lXFxsYXlvdXRcXGFkbWluXFxjb25maWd1cmF0aW9uXFxjb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUlwQjtFQUdNLG1DQUFrQyxFQUFBOztBQUh4Qzs7Ozs7OztFQVlNLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zdHlsZXIge1xyXG4gIC5uYXYtcGlsbHMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG59XHJcbmJvZHkubmV4dC1kYXJre1xyXG4gIC5tZW51LXN0eWxlcntcclxuICAgIC50YWItY29udGVudHtcclxuICAgICAgYmFja2dyb3VuZDpyZ2JhKDQsIDE2OSwgMjQ1LCAwLjAzKTtcclxuICAgIH1cclxuICAgIGgxLFxyXG4gICAgaDIsXHJcbiAgICBoMyxcclxuICAgIGg0LFxyXG4gICAgaDUsXHJcbiAgICBwLFxyXG4gICAgaDZ7XHJcbiAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/theme/layout/admin/configuration/configuration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/configuration/configuration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let ConfigurationComponent = class ConfigurationComponent {
    constructor(zone, location) {
        this.zone = zone;
        this.location = location;
        this.scroll = () => {
            if (this.headerFixedLayout === false) {
                document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh)';
                const el = document.querySelector('.pcoded-navbar.menupos-fixed');
                const scrollPosition = window.pageYOffset;
                if (scrollPosition > 60) {
                    el.style.position = 'fixed';
                    el.style.transition = 'none';
                    el.style.marginTop = '0';
                }
                else {
                    el.style.position = 'absolute';
                    el.style.marginTop = '60px';
                }
            }
            else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
                document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
            }
        };
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
        this.setThemeLayout();
    }
    ngOnInit() {
        this.styleSelectorToggle = false;
        this.layoutType = this.nextConfig.layoutType;
        this.setLayout(this.layoutType);
        this.headerBackgroundColor = this.nextConfig.headerBackColor;
        this.brandBackgroundColor = this.nextConfig.navBrandColor;
        this.setHeaderBackground(this.headerBackgroundColor);
        this.setBrandBackground(this.brandBackgroundColor);
        this.rtlLayout = this.nextConfig.rtlLayout;
        this.changeRtlLayout(this.rtlLayout);
        this.menuFixedLayout = this.nextConfig.navFixedLayout;
        if (this.nextConfig.layout === 'vertical') {
            this.changeMenuFixedLayout(this.menuFixedLayout);
        }
        this.headerFixedLayout = this.nextConfig.headerFixedLayout;
        this.changeHeaderFixedLayout(this.headerFixedLayout);
        this.boxLayout = this.nextConfig.boxLayout;
        this.changeBoxLayout(this.boxLayout);
    }
    setThemeLayout() {
        let currentURL = this.location.path();
        const baseHref = this.location['_baseHref'];
        if (baseHref) {
            currentURL = baseHref + this.location.path();
        }
        switch (currentURL) {
            case baseHref + '/layout/static':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/fixed':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = true;
                break;
            case baseHref + '/layout/nav-fixed':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/collapse-menu':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.collapseMenu = true;
                break;
            case baseHref + '/layout/vertical-rtl':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.rtlLayout = true;
                break;
            case baseHref + '/layout/horizontal':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/horizontal-l2':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.subLayout = 'horizontal-2';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/horizontal-rtl':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.subLayout = 'horizontal-2';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.rtlLayout = true;
                break;
            case baseHref + '/layout/box':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.boxLayout = true;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.collapseMenu = true;
                break;
            case baseHref + '/layout/light':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'menu-light';
                this.nextConfig.headerBackColor = 'header-default';
                break;
            case baseHref + '/layout/dark':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'dark';
                this.nextConfig.headerBackColor = 'header-blue';
                break;
            case baseHref + '/layout/nav-color':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'menu-light';
                this.nextConfig.headerBackColor = 'header-info';
                this.nextConfig.navBrandColor = 'brand-info';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = true;
                break;
            default:
                break;
        }
    }
    setHeaderBackColor(color) {
        this.headerBackColor = color;
        document.querySelector('body').style.background = color;
    }
    // change main layout
    setLayout(layout) {
        this.isConfig = true;
        this.setBrandBackground(this.nextConfig.navBrandColor);
        document.querySelector('.pcoded-navbar').classList.remove('menu-light');
        document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
        document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
        document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
        document.querySelector('body').classList.remove('next-dark');
        this.layoutType = layout;
        if (layout === 'menu-light') {
            this.setBrandBackground(this.brandBackgroundColor);
            document.querySelector('.pcoded-navbar').classList.add(layout);
        }
        if (layout === 'dark') {
            document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
            document.querySelector('.pcoded-navbar').classList.add('brand-dark');
            this.setBrandBackground('brand-blue');
            this.setHeaderBackground('header-blue');
            document.querySelector('body').classList.add('next-dark');
        }
        if (layout === 'reset') {
            this.reset();
        }
    }
    reset() {
        document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
        this.ngOnInit();
    }
    setRtlLayout(e) {
        const flag = !!(e.target.checked);
        this.changeRtlLayout(flag);
    }
    changeRtlLayout(flag) {
        if (flag) {
            document.querySelector('body').classList.add('next-rtl');
        }
        else {
            document.querySelector('body').classList.remove('next-rtl');
        }
    }
    setMenuFixedLayout(e) {
        const flag = !!(e.target.checked);
        this.changeMenuFixedLayout(flag);
    }
    changeMenuFixedLayout(flag) {
        setTimeout(() => {
            if (flag) {
                document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
                document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');
                if (this.nextConfig.layout === 'vertical') {
                    document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
                }
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
            }
            else {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');
                if (this.nextConfig.layout === 'vertical') {
                    document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
                }
                if (this.nextConfig.layout === 'vertical') {
                    window.removeEventListener('scroll', this.scroll, true);
                }
            }
        }, 100);
    }
    setHeaderFixedLayout(e) {
        const flag = !!(e.target.checked);
        this.changeHeaderFixedLayout(flag);
    }
    changeHeaderFixedLayout(flag) {
        if (flag) {
            document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
        }
        else {
            document.querySelector('.pcoded-header').classList.remove('headerpos-fixed');
            // static
            if (this.nextConfig.layout === 'vertical' && this.menuFixedLayout) {
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
            }
            else {
                window.removeEventListener('scroll', this.scroll, true);
            }
        }
    }
    setBoxLayout(e) {
        const flag = !!(e.target.checked);
        this.changeBoxLayout(flag);
    }
    changeBoxLayout(flag) {
        if (flag) {
            document.querySelector('body').classList.add('container');
            document.querySelector('body').classList.add('box-layout');
        }
        else {
            document.querySelector('body').classList.remove('box-layout');
            document.querySelector('body').classList.remove('container');
        }
    }
    setHeaderBackground(background) {
        this.headerBackgroundColor = background;
        this.nextConfig.headerBackColor = background;
        document.querySelector('.pcoded-header').classList.remove('header-blue');
        document.querySelector('.pcoded-header').classList.remove('header-red');
        document.querySelector('.pcoded-header').classList.remove('header-purple');
        document.querySelector('.pcoded-header').classList.remove('header-info');
        document.querySelector('.pcoded-header').classList.remove('header-dark');
        if (background !== 'header-default') {
            document.querySelector('.pcoded-header').classList.add(background);
        }
    }
    setBrandBackground(background) {
        this.brandBackgroundColor = background;
        this.nextConfig.navBrandColor = background;
        document.querySelector('.pcoded-header').classList.remove('brand-blue');
        document.querySelector('.pcoded-header').classList.remove('brand-red');
        document.querySelector('.pcoded-header').classList.remove('brand-purple');
        document.querySelector('.pcoded-header').classList.remove('brand-info');
        document.querySelector('.pcoded-header').classList.remove('brand-dark');
        document.querySelector('.pcoded-header').classList.remove('brand-default');
        document.querySelector('.pcoded-header').classList.add(background);
    }
};
ConfigurationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuration',
        template: __webpack_require__(/*! raw-loader!./configuration.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/configuration/configuration.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./configuration.component.scss */ "./src/app/theme/layout/admin/configuration/configuration.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], ConfigurationComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-config */ "./src/app/app-config.ts");



let NavBarComponent = class NavBarComponent {
    constructor() {
        this.onNavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNavHeaderMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
        this.menuClass = false;
        this.collapseStyle = 'none';
        this.windowWidth = window.innerWidth;
    }
    ngOnInit() { }
    toggleMobOption() {
        this.menuClass = !this.menuClass;
        this.collapseStyle = (this.menuClass) ? 'block' : 'none';
    }
    navCollapse() {
        if (this.windowWidth >= 992) {
            this.onNavCollapse.emit();
        }
        else {
            this.onNavHeaderMobCollapse.emit();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavBarComponent.prototype, "onNavCollapse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavBarComponent.prototype, "onNavHeaderMobCollapse", void 0);
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavBarComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1sZWZ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function() { return NavLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavLeftComponent = class NavLeftComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-left',
        template: __webpack_require__(/*! raw-loader!./nav-left.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html"),
        styles: [__webpack_require__(/*! ./nav-left.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavLeftComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1zZWFyY2gvbmF2LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NavSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSearchComponent", function() { return NavSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavSearchComponent = class NavSearchComponent {
    constructor() { }
    ngOnInit() { }
};
NavSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-search',
        template: __webpack_require__(/*! raw-loader!./nav-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html"),
        styles: [__webpack_require__(/*! ./nav-search.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavSearchComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9uYXYtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NavRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavRightComponent", function() { return NavRightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let NavRightComponent = class NavRightComponent {
    constructor() { }
    ngOnInit() { }
};
NavRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-right',
        template: __webpack_require__(/*! raw-loader!./nav-right.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html"),
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
        styles: [__webpack_require__(/*! ./nav-right.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavRightComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb2xsYXBzZS9uYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: NavCollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function() { return NavCollapseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts");





let NavCollapseComponent = class NavCollapseComponent {
    constructor() {
        this.visible = false;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["NextConfig"].config;
        this.themeLayout = this.nextConfig.layout;
    }
    ngOnInit() {
    }
    navCollapse(e) {
        this.visible = !this.visible;
        let parent = e.target;
        if (this.themeLayout === 'vertical') {
            parent = parent.parentElement;
        }
        const sections = document.querySelectorAll('.pcoded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] !== parent) {
                sections[i].classList.remove('pcoded-trigger');
            }
        }
        let firstParent = parent.parentElement;
        let preParent = parent.parentElement.parentElement;
        if (firstParent.classList.contains('pcoded-hasmenu')) {
            do {
                firstParent.classList.add('pcoded-trigger');
                // firstParent.parentElement.classList.toggle('pcoded-trigger');
                firstParent = firstParent.parentElement.parentElement.parentElement;
            } while (firstParent.classList.contains('pcoded-hasmenu'));
        }
        else if (preParent.classList.contains('pcoded-submenu')) {
            do {
                preParent.parentElement.classList.add('pcoded-trigger');
                preParent = preParent.parentElement.parentElement.parentElement;
            } while (preParent.classList.contains('pcoded-submenu'));
        }
        parent.classList.toggle('pcoded-trigger');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"])
], NavCollapseComponent.prototype, "item", void 0);
NavCollapseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-collapse',
        template: __webpack_require__(/*! raw-loader!./nav-collapse.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(-100%)', display: 'block' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(0%)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(-100%)' }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./nav-collapse.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavCollapseComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts ***!
  \************************************************************************************/
/*! exports provided: NavContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContentComponent", function() { return NavContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let NavContentComponent = class NavContentComponent {
    constructor(nav, zone, location) {
        this.nav = nav;
        this.zone = zone;
        this.location = location;
        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["NextConfig"].config;
        this.windowWidth = window.innerWidth;
        this.navigation = this.nav.get();
        this.prevDisabled = 'disabled';
        this.nextDisabled = '';
        this.scrollWidth = 0;
        this.contentWidth = 0;
    }
    ngOnInit() {
        if (this.windowWidth < 992) {
            this.nextConfig['layout'] = 'vertical';
            setTimeout(() => {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-next').style.maxHeight = '100%';
            }, 500);
        }
    }
    ngAfterViewInit() {
        if (this.nextConfig['layout'] === 'horizontal') {
            this.contentWidth = this.navbarContent.nativeElement.clientWidth;
            this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
        }
    }
    scrollPlus() {
        this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);
        if (this.scrollWidth > (this.contentWidth - this.wrapperWidth)) {
            this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
            this.nextDisabled = 'disabled';
        }
        this.prevDisabled = '';
        if (this.nextConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
        }
        else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
        }
    }
    scrollMinus() {
        this.scrollWidth = this.scrollWidth - this.wrapperWidth;
        if (this.scrollWidth < 0) {
            this.scrollWidth = 0;
            this.prevDisabled = 'disabled';
        }
        this.nextDisabled = '';
        if (this.nextConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
        }
        else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
        }
    }
    fireLeave() {
        const sections = document.querySelectorAll('.pcoded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove('active');
            sections[i].classList.remove('pcoded-trigger');
        }
        let current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent.parentElement.parentElement;
            const last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
                parent.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                last_parent.classList.add('active');
            }
        }
    }
    navMob() {
        if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
            this.onNavMobCollapse.emit();
        }
    }
    fireOutClick() {
        let current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent.parentElement.parentElement;
            const last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    parent.classList.add('pcoded-trigger');
                }
                parent.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    up_parent.classList.add('pcoded-trigger');
                }
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    last_parent.classList.add('pcoded-trigger');
                }
                last_parent.classList.add('active');
            }
        }
    }
};
NavContentComponent.ctorParameters = () => [
    { type: _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavContentComponent.prototype, "onNavMobCollapse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarContent', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], NavContentComponent.prototype, "navbarContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarWrapper', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], NavContentComponent.prototype, "navbarWrapper", void 0);
NavContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-content',
        template: __webpack_require__(/*! raw-loader!./nav-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html"),
        styles: [__webpack_require__(/*! ./nav-content.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], NavContentComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1ncm91cC9uYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
  \********************************************************************************************/
/*! exports provided: NavGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavGroupComponent", function() { return NavGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts");





let NavGroupComponent = class NavGroupComponent {
    constructor(zone, location) {
        this.zone = zone;
        this.location = location;
        this.layout1 = false;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["NextConfig"].config;
    }
    ngOnInit() {
        // at reload time active and trigger link
        let current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent.parentElement.parentElement;
            const last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    parent.classList.add('pcoded-trigger');
                }
                parent.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    up_parent.classList.add('pcoded-trigger');
                }
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    last_parent.classList.add('pcoded-trigger');
                }
                last_parent.classList.add('active');
            }
        }
    }
};
NavGroupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"])
], NavGroupComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], NavGroupComponent.prototype, "layout1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavGroupComponent.prototype, "activeId", void 0);
NavGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-group',
        template: __webpack_require__(/*! raw-loader!./nav-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html"),
        styles: [__webpack_require__(/*! ./nav-group.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], NavGroupComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let NavItemComponent = class NavItemComponent {
    constructor(location) {
        this.location = location;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["NextConfig"].config;
        this.themeLayout = this.nextConfig['layout'];
    }
    ngOnInit() {
    }
    closeOtherMenu(event) {
        if (this.nextConfig['layout'] === 'vertical') {
            const ele = event.target;
            if (ele !== null && ele !== undefined) {
                const parent = ele.parentElement;
                const up_parent = parent.parentElement.parentElement;
                const last_parent = up_parent.parentElement;
                const sections = document.querySelectorAll('.pcoded-hasmenu');
                for (let i = 0; i < sections.length; i++) {
                    sections[i].classList.remove('active');
                    sections[i].classList.remove('pcoded-trigger');
                }
                if (parent.classList.contains('pcoded-hasmenu')) {
                    parent.classList.add('pcoded-trigger');
                    parent.classList.add('active');
                }
                else if (up_parent.classList.contains('pcoded-hasmenu')) {
                    up_parent.classList.add('pcoded-trigger');
                    up_parent.classList.add('active');
                }
                else if (last_parent.classList.contains('pcoded-hasmenu')) {
                    last_parent.classList.add('pcoded-trigger');
                    last_parent.classList.add('active');
                }
            }
            if ((document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
                document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
            }
        }
        else {
            setTimeout(() => {
                const sections = document.querySelectorAll('.pcoded-hasmenu');
                for (let i = 0; i < sections.length; i++) {
                    sections[i].classList.remove('active');
                    sections[i].classList.remove('pcoded-trigger');
                }
                let current_url = this.location.path();
                if (this.location['_baseHref']) {
                    current_url = this.location['_baseHref'] + this.location.path();
                }
                const link = "a.nav-link[ href='" + current_url + "' ]";
                const ele = document.querySelector(link);
                if (ele !== null && ele !== undefined) {
                    const parent = ele.parentElement;
                    const up_parent = parent.parentElement.parentElement;
                    const last_parent = up_parent.parentElement;
                    if (parent.classList.contains('pcoded-hasmenu')) {
                        parent.classList.add('active');
                    }
                    else if (up_parent.classList.contains('pcoded-hasmenu')) {
                        up_parent.classList.add('active');
                    }
                    else if (last_parent.classList.contains('pcoded-hasmenu')) {
                        last_parent.classList.add('active');
                    }
                }
            }, 500);
        }
    }
};
NavItemComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"])
], NavItemComponent.prototype, "item", void 0);
NavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-item',
        template: __webpack_require__(/*! raw-loader!./nav-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html"),
        styles: [__webpack_require__(/*! ./nav-item.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], NavItemComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/navigation.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/navigation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-config */ "./src/app/app-config.ts");



let NavigationComponent = class NavigationComponent {
    constructor() {
        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
        this.windowWidth = window.innerWidth;
    }
    ngOnInit() { }
    navMobCollapse() {
        if (this.windowWidth < 992) {
            this.onNavMobCollapse.emit();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavigationComponent.prototype, "onNavMobCollapse", void 0);
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/theme/layout/admin/navigation/navigation.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavigationComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/navigation.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.ts ***!
  \*************************************************************/
/*! exports provided: NavigationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationItem", function() { return NavigationItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const NavigationItems = [
    {
        id: 'master',
        title: 'Master',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
            {
                id: 'driverdetails',
                title: 'Driver Details',
                type: 'item',
                url: '/master/driver-detail/list',
                icon: 'feather icon-home'
            },
            {
                id: 'vehicledetails',
                title: 'Vehicle Details',
                type: 'item',
                url: '/master/vehicle-detail/list',
                icon: 'feather icon-home'
            }
        ]
    },
    {
        id: 'navigation',
        title: 'Navigation',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                url: '/dashboard/analytics',
                icon: 'feather icon-home'
            },
            {
                id: 'page-layouts',
                title: 'Horizontal Layouts',
                type: 'item',
                url: '/layout/horizontal',
                target: true,
                icon: 'feather icon-layout'
            }
        ]
    },
    {
        id: 'ui-element',
        title: 'UI ELEMENT & FORMS',
        type: 'group',
        icon: 'feather icon-layers',
        children: [
            {
                id: 'basic',
                title: 'Basic',
                type: 'collapse',
                icon: 'feather icon-box',
                children: [
                    {
                        id: 'alert',
                        title: 'Alert',
                        type: 'item',
                        url: '/basic/alert'
                    },
                    {
                        id: 'button',
                        title: 'Button',
                        type: 'item',
                        url: '/basic/button'
                    },
                    {
                        id: 'badges',
                        title: 'Badges',
                        type: 'item',
                        url: '/basic/badges'
                    },
                    {
                        id: 'breadcrumb-pagination',
                        title: 'Breadcrumbs & Pagination',
                        type: 'item',
                        url: '/basic/breadcrumb-paging'
                    },
                    {
                        id: 'cards',
                        title: 'Cards',
                        type: 'item',
                        url: '/basic/cards'
                    },
                    {
                        id: 'collapse',
                        title: 'Collapse',
                        type: 'item',
                        url: '/basic/collapse'
                    },
                    {
                        id: 'carousel',
                        title: 'Carousel',
                        type: 'item',
                        url: '/basic/carousel'
                    },
                    {
                        id: 'grid-system',
                        title: 'Grid System',
                        type: 'item',
                        url: '/basic/grid-system'
                    },
                    {
                        id: 'progress',
                        title: 'Progress',
                        type: 'item',
                        url: '/basic/progress'
                    },
                    {
                        id: 'modal',
                        title: 'Modal',
                        type: 'item',
                        url: '/basic/modal'
                    },
                    {
                        id: 'spinner',
                        title: 'Spinner',
                        type: 'item',
                        url: '/basic/spinner'
                    },
                    {
                        id: 'tabs-pills',
                        title: 'Tabs & Pills',
                        type: 'item',
                        url: '/basic/tabs-pills'
                    },
                    {
                        id: 'typography',
                        title: 'Typography',
                        type: 'item',
                        url: '/basic/typography'
                    },
                    {
                        id: 'tooltip-popovers',
                        title: 'Tooltip & Popovers',
                        type: 'item',
                        url: '/basic/tooltip-popovers'
                    },
                    {
                        id: 'other',
                        title: 'Other',
                        type: 'item',
                        url: '/basic/other'
                    }
                ]
            },
            {
                id: 'forms-element',
                title: 'Form Elements',
                type: 'item',
                url: '/forms/basic',
                icon: 'feather icon-file-text'
            }
        ]
    },
    {
        id: 'table',
        title: 'Table & Charts',
        type: 'group',
        icon: 'feather icon-list',
        children: [
            {
                id: 'bootstrap',
                title: 'Bootstrap Table',
                type: 'item',
                url: '/tbl-bootstrap/bt-basic',
                icon: 'feather icon-server'
            },
            {
                id: 'apex',
                title: 'Apex Chart',
                type: 'item',
                url: '/charts/apex',
                icon: 'feather icon-pie-chart'
            }
        ]
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'feather icon-file-text',
        children: [
            {
                id: 'auth',
                title: 'Authentication',
                type: 'collapse',
                icon: 'feather icon-lock',
                children: [
                    {
                        id: 'signup',
                        title: 'Sign up',
                        type: 'item',
                        url: '/auth/signup',
                        target: true,
                        breadcrumbs: false
                    },
                    {
                        id: 'signin',
                        title: 'Sign in',
                        type: 'item',
                        url: '/auth/signin',
                        target: true,
                        breadcrumbs: false
                    },
                    {
                        id: 'reset-password',
                        title: 'Reset Password',
                        type: 'item',
                        url: '/auth/reset-password',
                        target: true,
                        breadcrumbs: false
                    },
                    {
                        id: 'change-password',
                        title: 'Change Password',
                        type: 'item',
                        url: '/auth/change-password',
                        target: true,
                        breadcrumbs: false
                    }
                ]
            },
            {
                id: 'maintenance',
                title: 'Maintenance',
                type: 'collapse',
                icon: 'feather icon-sliders',
                children: [
                    {
                        id: 'error',
                        title: 'Error',
                        type: 'item',
                        url: '/maintenance/error',
                        target: true,
                        breadcrumbs: false
                    },
                    {
                        id: 'coming-soon',
                        title: 'Maintenance',
                        type: 'item',
                        url: '/maintenance/coming-soon',
                        target: true,
                        breadcrumbs: false
                    }
                ]
            }
        ]
    },
    {
        id: 'other',
        title: 'Other',
        type: 'group',
        icon: 'feather icon-align-left',
        children: [
            {
                id: 'menu-level',
                title: 'Menu Levels',
                type: 'collapse',
                icon: 'feather icon-menu',
                children: [
                    {
                        id: 'menu-level-2.1',
                        title: 'Menu Level 2.1',
                        type: 'item',
                        url: 'javascript:',
                        external: true
                    },
                    {
                        id: 'menu-level-2.2',
                        title: 'Menu Level 2.2',
                        type: 'collapse',
                        children: [
                            {
                                id: 'menu-level-2.2.1',
                                title: 'Menu Level 2.2.1',
                                type: 'item',
                                url: 'javascript:',
                                external: true
                            },
                            {
                                id: 'menu-level-2.2.2',
                                title: 'Menu Level 2.2.2',
                                type: 'item',
                                url: 'javascript:',
                                external: true
                            }
                        ]
                    }
                ]
            },
            {
                id: 'disabled-menu',
                title: 'Disabled Menu',
                type: 'item',
                url: 'javascript:',
                classes: 'nav-item disabled',
                icon: 'feather icon-power',
                external: true
            },
            {
                id: 'sample-page',
                title: 'Sample Page',
                type: 'item',
                url: '/sample-page',
                classes: 'nav-item',
                icon: 'feather icon-sidebar'
            }
        ]
    }
];
let NavigationItem = class NavigationItem {
    get() {
        return NavigationItems;
    }
};
NavigationItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NavigationItem);



/***/ }),

/***/ "./src/app/theme/layout/auth/auth.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/auth/auth.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/auth/auth.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/layout/auth/auth.component.ts ***!
  \*****************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/auth/auth.component.html"),
        styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/theme/layout/auth/auth.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AuthComponent);



/***/ }),

/***/ "./src/app/theme/shared/components/alert/alert.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/theme/shared/components/alert/alert.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/shared/components/alert/alert.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/shared/components/alert/alert.component.ts ***!
  \******************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlertComponent = class AlertComponent {
    constructor() { }
    dismissAlert(element) {
        element.parentElement.removeChild(element);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AlertComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AlertComponent.prototype, "dismiss", void 0);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/alert/alert.component.html"),
        styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/theme/shared/components/alert/alert.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AlertComponent);



/***/ }),

/***/ "./src/app/theme/shared/components/alert/alert.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/shared/components/alert/alert.module.ts ***!
  \***************************************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.component */ "./src/app/theme/shared/components/alert/alert.component.ts");




let AlertModule = class AlertModule {
};
AlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
        exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
    })
], AlertModule);



/***/ }),

/***/ "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/admin/navigation/navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(route, nav, titleService) {
        this.route = route;
        this.nav = nav;
        this.titleService = titleService;
        this.breadcrumbList = [];
        this.navigationList = [];
        this.navigation = this.nav.get();
        this.type = 'theme2';
        this.setBreadcrumb();
    }
    ngOnInit() {
        let routerUrl;
        routerUrl = this.route.url;
        if (routerUrl && typeof routerUrl === 'string') {
            this.filterNavigation(routerUrl);
        }
    }
    setBreadcrumb() {
        let routerUrl;
        this.route.events.subscribe((router) => {
            routerUrl = router.urlAfterRedirects;
            if (routerUrl && typeof routerUrl === 'string') {
                this.breadcrumbList.length = 0;
                const activeLink = router.url;
                this.filterNavigation(activeLink);
            }
        });
    }
    filterNavigation(activeLink) {
        let result = [];
        let title = 'Welcome';
        this.navigation.forEach((a) => {
            if (a.type === 'item' && 'url' in a && a.url === activeLink) {
                result = [
                    {
                        url: ('url' in a) ? a.url : false,
                        title: a.title,
                        breadcrumbs: ('breadcrumbs' in a) ? a.breadcrumbs : true,
                        type: a.type
                    }
                ];
                title = a.title;
            }
            else {
                if (a.type === 'group' && 'children' in a) {
                    a.children.forEach((b) => {
                        if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                            result = [
                                {
                                    url: ('url' in b) ? b.url : false,
                                    title: b.title,
                                    breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                    type: b.type
                                }
                            ];
                            title = b.title;
                        }
                        else {
                            if (b.type === 'collapse' && 'children' in b) {
                                b.children.forEach((c) => {
                                    if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                                        result = [
                                            {
                                                url: ('url' in b) ? b.url : false,
                                                title: b.title,
                                                breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                                type: b.type
                                            },
                                            {
                                                url: ('url' in c) ? c.url : false,
                                                title: c.title,
                                                breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
                                                type: c.type
                                            }
                                        ];
                                        title = c.title;
                                    }
                                    else {
                                        if (c.type === 'collapse' && 'children' in c) {
                                            c.children.forEach((d) => {
                                                if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                                                    result = [
                                                        {
                                                            url: ('url' in b) ? b.url : false,
                                                            title: b.title,
                                                            breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                                            type: b.type
                                                        },
                                                        {
                                                            url: ('url' in c) ? c.url : false,
                                                            title: c.title,
                                                            breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
                                                            type: c.type
                                                        },
                                                        {
                                                            url: ('url' in d) ? d.url : false,
                                                            title: d.title,
                                                            breadcrumbs: ('breadcrumbs' in c) ? d.breadcrumbs : true,
                                                            type: d.type
                                                        }
                                                    ];
                                                    title = d.title;
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
        this.navigationList = result;
        this.titleService.setTitle(title + ' | Next Angular 8+ Admin Template');
    }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BreadcrumbComponent.prototype, "type", void 0);
BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breadcrumb',
        template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html"),
        styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
], BreadcrumbComponent);



/***/ }),

/***/ "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts ***!
  \*************************************************************************/
/*! exports provided: BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb.component */ "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let BreadcrumbModule = class BreadcrumbModule {
};
BreadcrumbModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]],
        exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]]
    })
], BreadcrumbModule);



/***/ }),

/***/ "./src/app/theme/shared/components/card/card.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card.full-card {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: calc(100vw) !important;\n  height: 100vh !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9EOlxcMTktVi1EZXZlciBIb2xkYXlzIFVJXFxESEQtT0xELURlc2lnbnNcXERldmFySG9saWRheXNVSS9zcmNcXGFwcFxcdGhlbWVcXHNoYXJlZFxcY29tcG9uZW50c1xcY2FyZFxcY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQuZnVsbC1jYXJkIHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICB3aWR0aDogY2FsYygxMDB2dykgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/theme/shared/components/card/card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.component.ts ***!
  \****************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! css-animator */ "./node_modules/css-animator/index.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let CardComponent = class CardComponent {
    constructor(animationService, config) {
        config.placement = 'bottom-right';
        this.customHeader = false;
        this.options = true;
        this.hidHeader = false;
        this.isCardFooter = false;
        this.cardTitle = '';
        this.animator = animationService.builder();
        this.animators = animationService.builder();
        this.animator.useVisibility = true;
        this.fullIcon = 'icon-maximize';
        this.isAnimating = false;
        this.collapsedCard = 'expanded';
        this.collapsedIcon = 'icon-minus';
        this.loadCard = false;
        this.cardRemove = 'open';
    }
    ngOnInit() {
        if (this.hidHeader) {
            this.options = false;
        }
        if (!this.options || this.hidHeader || this.customHeader) {
            this.collapsedCard = 'false';
        }
    }
    fullCardToggle(element, animation, status) {
        animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
        this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize';
        // const duration = this.cardClass === 'full-card' ? 300 : 600;
        this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';
        if (status) {
            this.animation = animation;
        }
        this.isAnimating = true;
        this.animators
            .setType(this.animation)
            .setDuration(500)
            .setDirection('alternate')
            .setTimingFunction('cubic-bezier(0.1, -0.6, 0.2, 0)')
            .animate(element)
            .then(() => {
            this.isAnimating = false;
        })
            .catch(() => {
            this.isAnimating = false;
        });
        setTimeout(() => {
            this.cardClass = animation === 'zoomOut' ? '' : this.cardClass;
            if (this.cardClass === 'full-card') {
                document.querySelector('body').style.overflow = 'hidden';
            }
            else {
                document.querySelector('body').removeAttribute('style');
            }
        }, 500);
    }
    collapsedCardToggle() {
        this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
        this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
    }
    cardRefresh() {
        this.loadCard = true;
        this.cardClass = 'card-load';
        setTimeout(() => {
            this.loadCard = false;
            this.cardClass = 'expanded';
        }, 3000);
    }
    cardRemoveAction() {
        this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
    }
};
CardComponent.ctorParameters = () => [
    { type: css_animator__WEBPACK_IMPORTED_MODULE_3__["AnimationService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CardComponent.prototype, "cardTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CardComponent.prototype, "cardClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CardComponent.prototype, "blockClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CardComponent.prototype, "headerClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CardComponent.prototype, "options", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CardComponent.prototype, "hidHeader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CardComponent.prototype, "customHeader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CardComponent.prototype, "cardCaption", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CardComponent.prototype, "captionClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CardComponent.prototype, "isCardFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CardComponent.prototype, "footerClass", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/card/card.component.html"),
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('collapsedCard', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    overflow: 'hidden',
                    height: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AUTO_STYLE"],
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('collapsed <=> expanded', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('cardRemove', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    opacity: 0,
                    display: 'none'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms')),
            ])
        ],
        styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/theme/shared/components/card/card.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [css_animator__WEBPACK_IMPORTED_MODULE_3__["AnimationService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]])
], CardComponent);



/***/ }),

/***/ "./src/app/theme/shared/components/card/card.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.module.ts ***!
  \*************************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.component */ "./src/app/theme/shared/components/card/card.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-animator */ "./node_modules/css-animator/index.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_5__);






let CardModule = class CardModule {
};
CardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimatorModule"]
        ],
        declarations: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
        exports: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
        providers: [css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimationService"]]
    })
], CardModule);



/***/ }),

/***/ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2NoYXJ0L2FwZXgtY2hhcnQvYXBleC1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ApexChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexChartComponent", function() { return ApexChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apexcharts/dist/apexcharts.common.js */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apex_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apex-chart.service */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");




let ApexChartComponent = class ApexChartComponent {
    constructor(apexEvent) {
        this.apexEvent = apexEvent;
    }
    ngOnInit() {
        setTimeout(() => {
            this.chart = new apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2___default.a(document.querySelector('#' + this.chartID), this.chartConfig);
            this.chart.render();
        });
        this.apexEvent.changeTimeRange.subscribe(() => {
            if (this.xAxis) {
                this.chart.updateOptions({
                    xaxis: this.xAxis
                });
            }
        });
        this.apexEvent.changeSeriesData.subscribe(() => {
            if (this.newData) {
                this.chart.updateSeries([{
                        data: this.newData
                    }]);
            }
        });
    }
};
ApexChartComponent.ctorParameters = () => [
    { type: _apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ApexChartComponent.prototype, "chartID", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ApexChartComponent.prototype, "chartConfig", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ApexChartComponent.prototype, "xAxis", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ApexChartComponent.prototype, "newData", void 0);
ApexChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apex-chart',
        template: __webpack_require__(/*! raw-loader!./apex-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.html"),
        styles: [__webpack_require__(/*! ./apex-chart.component.scss */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"]])
], ApexChartComponent);



/***/ }),

/***/ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts ***!
  \********************************************************************************/
/*! exports provided: ApexChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexChartService", function() { return ApexChartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ApexChartService = class ApexChartService {
    constructor() {
        this.changeTimeRange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeSeriesData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    eventChangeTimeRange() {
        this.changeTimeRange.emit();
    }
    eventChangeSeriesData() {
        this.changeSeriesData.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ApexChartService.prototype, "changeTimeRange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ApexChartService.prototype, "changeSeriesData", void 0);
ApexChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ApexChartService);



/***/ }),

/***/ "./src/app/theme/shared/components/data-table/data-filter.pipe.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/shared/components/data-table/data-filter.pipe.ts ***!
  \************************************************************************/
/*! exports provided: DataFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function() { return DataFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let DataFilterPipe = class DataFilterPipe {
    transform(array, query) {
        if (query) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](array, row => row.name.indexOf(query) > -1);
        }
        return array;
    }
};
DataFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
        name: 'dataFilter'
    })
], DataFilterPipe);



/***/ }),

/***/ "./src/app/theme/shared/components/index.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/shared/components/index.ts ***!
  \**************************************************/
/*! exports provided: AlertModule, CardModule, BreadcrumbModule, ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/alert.module */ "./src/app/theme/shared/components/alert/alert.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__["AlertModule"]; });

/* harmony import */ var _card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card.module */ "./src/app/theme/shared/components/card/card.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return _card_card_module__WEBPACK_IMPORTED_MODULE_1__["CardModule"]; });

/* harmony import */ var _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.module */ "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"]; });

/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/modal.module */ "./src/app/theme/shared/components/modal/modal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__["ModalModule"]; });







/***/ }),

/***/ "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".md-perspective {\n  height: 100%;\n  overflow: hidden; }\n  .md-perspective body {\n    height: 100%;\n    overflow: hidden;\n    -webkit-perspective: 600px;\n    perspective: 600px; }\n  .container {\n  min-height: 100%; }\n  .md-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  max-width: 630px;\n  min-width: 320px;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%); }\n  .md-show {\n  visibility: visible; }\n  .md-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1030;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n  .md-show ~ .md-overlay {\n  opacity: 1;\n  visibility: visible; }\n  /* Content styles */\n  .md-content {\n  background: #fff;\n  position: relative;\n  border-radius: 3px;\n  margin: 0 auto; }\n  .md-content h3 {\n    margin: 0;\n    padding: 0.4em;\n    text-align: center;\n    opacity: 0.8;\n    color: #fff;\n    border-radius: 3px 3px 0 0; }\n  .md-content > div {\n    padding: 15px 40px 30px;\n    margin: 0; }\n  .md-content > div p {\n      margin: 0;\n      padding: 10px 0;\n      line-height: 1.5; }\n  .md-content > div ul {\n      margin: 0;\n      padding: 0 0 30px 20px; }\n  .md-content > div ul li {\n        padding: 5px 0; }\n  .md-content button {\n    display: block;\n    margin: 0 auto;\n    font-size: 0.8em; }\n  /* Individual modal styles with animations/transitions */\n  /* Effect 1: Fade in and scale up */\n  .md-effect-1 .md-content {\n  -webkit-transform: scale(0.7);\n  transform: scale(0.7);\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n  .md-show.md-effect-1 .md-content {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1; }\n  /* Effect 2: Slide from the right */\n  .md-effect-2 .md-content {\n  -webkit-transform: translateX(20%);\n  transform: translateX(20%);\n  opacity: 0;\n  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\n  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9); }\n  .md-show.md-effect-2 .md-content {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  opacity: 1; }\n  /* Effect 3: Slide from the bottom */\n  .md-effect-3 .md-content {\n  -webkit-transform: translateY(20%);\n  transform: translateY(20%);\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n  .md-show.md-effect-3 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1; }\n  /* Effect 4: Newspaper */\n  .md-effect-4 .md-content {\n  -webkit-transform: scale(0) rotate(720deg);\n  transform: scale(0) rotate(720deg);\n  opacity: 0; }\n  .md-show.md-effect-4 ~ .md-overlay, .md-effect-4 .md-content {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s; }\n  .md-show.md-effect-4 .md-content {\n  -webkit-transform: scale(1) rotate(0deg);\n  transform: scale(1) rotate(0deg);\n  opacity: 1; }\n  /* Effect 5: fall */\n  .md-effect-5.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n  .md-effect-5 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateZ(600px) rotateX(20deg);\n  transform: translateZ(600px) rotateX(20deg);\n  opacity: 0; }\n  .md-show.md-effect-5 .md-content {\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n  -webkit-transform: translateZ(0px) rotateX(0deg);\n  transform: translateZ(0px) rotateX(0deg);\n  opacity: 1; }\n  /* Effect 6: side fall */\n  .md-effect-6.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n  .md-effect-6 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translate(30%) translateZ(600px) rotate(10deg);\n  transform: translate(30%) translateZ(600px) rotate(10deg);\n  opacity: 0; }\n  .md-show.md-effect-6 .md-content {\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n  -webkit-transform: translate(0%) translateZ(0) rotate(0deg);\n  transform: translate(0%) translateZ(0) rotate(0deg);\n  opacity: 1; }\n  /* Effect 7:  slide and stick to top */\n  .md-effect-7 {\n  top: 0;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%); }\n  .md-effect-7 .md-content {\n    -webkit-transform: translateY(-200%);\n    transform: translateY(-200%);\n    -webkit-transition: all .3s;\n    transition: all .3s;\n    opacity: 0; }\n  .md-show.md-effect-7 .md-content {\n  -webkit-transform: translateY(0%);\n  transform: translateY(0%);\n  border-radius: 0 0 3px 3px;\n  opacity: 1; }\n  /* Effect 8: 3D flip horizontal */\n  .md-effect-8.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n  .md-effect-8 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateY(-70deg);\n  transform: rotateY(-70deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  opacity: 0; }\n  .md-show.md-effect-8 .md-content {\n  -webkit-transform: rotateY(0deg);\n  transform: rotateY(0deg);\n  opacity: 1; }\n  /* Effect 9: 3D flip vertical */\n  .md-effect-9.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n  .md-effect-9 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateX(-70deg);\n  transform: rotateX(-70deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  opacity: 0; }\n  .md-show.md-effect-9 .md-content {\n  -webkit-transform: rotateX(0deg);\n  transform: rotateX(0deg);\n  opacity: 1; }\n  /* Effect 10: 3D sign */\n  .md-effect-10.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n  .md-effect-10 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateX(-60deg);\n  transform: rotateX(-60deg);\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n  .md-show.md-effect-10 .md-content {\n  -webkit-transform: rotateX(0deg);\n  transform: rotateX(0deg);\n  opacity: 1; }\n  /* Effect 11: Super scaled */\n  .md-effect-11 .md-content {\n  -webkit-transform: scale(2);\n  transform: scale(2);\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n  .md-show.md-effect-11 .md-content {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1; }\n  /* Effect 12:  Just me */\n  .md-effect-12 .md-content {\n  -webkit-transform: scale(0.8);\n  transform: scale(0.8);\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  color: #fff;\n  background: transparent; }\n  .md-effect-12 .md-content h3 {\n    background: transparent; }\n  .md-show.md-effect-12 .md-content {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1; }\n  /* Effect 13: 3D slit */\n  .md-effect-13.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n  .md-effect-13 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateZ(-3000px) rotateY(90deg);\n  transform: translateZ(-3000px) rotateY(90deg);\n  opacity: 0; }\n  .md-show.md-effect-13 .md-content {\n  -webkit-animation: slit .7s forwards ease-out;\n  animation: slit .7s forwards ease-out; }\n  @-webkit-keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n    opacity: .5;\n    -webkit-animation-timing-function: ease-out; }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n    opacity: 1; } }\n  @keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n            transform: translateZ(-250px) rotateY(89deg);\n    opacity: 1;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n            transform: translateZ(0) rotateY(0deg);\n    opacity: 1; } }\n  /* Effect 14:  3D Rotate from bottom */\n  .md-effect-14.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n  .md-effect-14 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateY(100%) rotateX(90deg);\n  transform: translateY(100%) rotateX(90deg);\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  opacity: 0;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out; }\n  .md-show.md-effect-14 .md-content {\n  -webkit-transform: translateY(0%) rotateX(0deg);\n  transform: translateY(0%) rotateX(0deg);\n  opacity: 1; }\n  /* Effect 15:  3D Rotate in from left */\n  .md-effect-15.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n  .md-effect-15 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n  .md-show.md-effect-15 .md-content {\n  -webkit-transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  opacity: 1; }\n  /* Effect 16:  Blur */\n  body.modal-16 > nav, body.modal-16 > header, body.modal-16 > section {\n  -webkit-filter: blur(3px);\n  filter: blur(3px); }\n  .md-effect-16 .md-content {\n  -webkit-transform: translateY(-5%);\n  transform: translateY(-5%);\n  opacity: 0; }\n  .md-show.md-effect-16 ~ .container, .md-effect-16 .md-content {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n  .md-show.md-effect-16 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1; }\n  /* Effect 17:  Slide in from bottom with perspective on container */\n  body.modal-17 > nav, body.modal-17 > section, body.modal-17 > .md-overlay {\n  height: 100%;\n  overflow: hidden;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s; }\n  .md-show.md-effect-17 ~ .container {\n  height: 100%;\n  overflow: hidden;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s; }\n  body.modal-17 > header {\n  height: 70px; }\n  body.modal-17 > nav {\n  overflow: hidden;\n  height: calc(100vh - 70px); }\n  body.modal-17 .pcoded-main-container {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n  -webkit-transform: rotateX(-2deg);\n  transform: rotateX(-2deg);\n  -webkit-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n  body.modal-17 > .header-chat, body.modal-17 > .header-user-list {\n  display: none; }\n  body.modal-17 > nav, body.modal-17 > .md-overlay, body.modal-17 > section {\n  -webkit-transform: rotateX(-2deg);\n  transform: rotateX(-2deg);\n  -webkit-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n  .md-effect-17 .md-content {\n  opacity: 0;\n  -webkit-transform: translateY(200%);\n  transform: translateY(200%); }\n  .md-show.md-effect-17 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1;\n  -webkit-transition: all 0.3s 0.2s;\n  transition: all 0.3s 0.2s; }\n  /* Effect 18:  Slide from right with perspective on container */\n  body.modal-18 {\n  height: 100%;\n  overflow: hidden; }\n  .md-show.md-effect-18 ~ .md-overlay {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s; }\n  body.modal-18 > .header-chat, body.modal-18 > .header-user-list {\n  display: none; }\n  body.modal-18 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in; }\n  body.modal-18 > nav, body.modal-18 > header, body.modal-18 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in; }\n  @-webkit-keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out; }\n  100% {\n    -webkit-transform: translateZ(-200px); } }\n  @keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n            transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  100% {\n    -webkit-transform: translateZ(-200px);\n            transform: translateZ(-200px); } }\n  .md-effect-18 .md-content {\n  -webkit-transform: translateX(200%);\n  transform: translateX(200%);\n  opacity: 0; }\n  .md-show.md-effect-18 .md-content {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  opacity: 1;\n  -webkit-transition: all 0.5s 0.1s;\n  transition: all 0.5s 0.1s; }\n  .md-show.md-effect-19 ~ .container {\n  height: 100%;\n  overflow: hidden; }\n  .md-show.md-effect-19 ~ .md-overlay {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s; }\n  /* Effect 19:  Slip in from the top with perspective on container */\n  body.modal-19 > .header-chat, body.modal-19 > .header-user-list {\n  display: none; }\n  body.modal-19 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in; }\n  body.modal-19 > nav, body.modal-19 > header, body.modal-19 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in; }\n  @-webkit-keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out; } }\n  @keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n            transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; } }\n  .md-effect-19 .md-content {\n  -webkit-transform: translateY(-200%);\n  transform: translateY(-200%);\n  opacity: 0; }\n  .md-show.md-effect-19 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1;\n  -webkit-transition: all 0.5s 0.1s;\n  transition: all 0.5s 0.1s; }\n  @media screen and (max-width: 32em) {\n  body {\n    font-size: 75%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvYW5pbWF0aW9uLW1vZGFsL0Q6XFwxOS1WLURldmVyIEhvbGRheXMgVUlcXERIRC1PTEQtRGVzaWduc1xcRGV2YXJIb2xpZGF5c1VJL3NyY1xcYXBwXFx0aGVtZVxcc2hhcmVkXFxjb21wb25lbnRzXFxtb2RhbFxcYW5pbWF0aW9uLW1vZGFsXFxhbmltYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFGbEI7SUFJSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBQTtFQUl0QjtFQUNFLGdCQUFnQixFQUFBO0VBR2xCO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQixvREFBb0Q7RUFDcEQsNENBQTRDLEVBQUE7RUFHOUM7RUFDRSxtQkFBbUIsRUFBQTtFQUdyQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixvQkFBb0IsRUFBQTtFQUd0QjtFQUNFLFVBQVU7RUFDVixtQkFBbUIsRUFBQTtFQUdyQixtQkFBQTtFQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0VBSmhCO0lBTUksU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCwwQkFBMEIsRUFBQTtFQVg5QjtJQWNJLHVCQUF1QjtJQUN2QixTQUFTLEVBQUE7RUFmYjtNQWlCTSxTQUFTO01BQ1QsZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBbkJ0QjtNQXNCTSxTQUFTO01BQ1Qsc0JBQXNCLEVBQUE7RUF2QjVCO1FBeUJRLGNBQWMsRUFBQTtFQXpCdEI7SUE4QkksY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQUlwQix3REFBQTtFQUVBLG1DQUFBO0VBRUE7RUFDRSw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsb0JBQW9CLEVBQUE7RUFHdEI7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTtFQUdaLG1DQUFBO0VBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLFVBQVU7RUFDViw4REFBOEQ7RUFDOUQsc0RBQXNELEVBQUE7RUFHeEQ7RUFDRSxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLFVBQVUsRUFBQTtFQUdaLG9DQUFBO0VBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsb0JBQW9CLEVBQUE7RUFHdEI7RUFDRSxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLFVBQVUsRUFBQTtFQUdaLHdCQUFBO0VBRUE7RUFDRSwwQ0FBMEM7RUFHMUMsa0NBQWtDO0VBQ2xDLFVBQVUsRUFBQTtFQUdaO0VBQ0UsNEJBQTRCO0VBRTVCLG9CQUFvQixFQUFBO0VBR3RCO0VBQ0Usd0NBQXdDO0VBR3hDLGdDQUFnQztFQUNoQyxVQUFVLEVBQUE7RUFHWixtQkFBQTtFQUVBO0VBRUksMkJBQTJCO0VBRTNCLG1CQUFtQixFQUFBO0VBSnZCO0VBT0ksb0NBQW9DO0VBRXBDLDRCQUE0QjtFQUM1QixtREFBbUQ7RUFHbkQsMkNBQTJDO0VBQzNDLFVBQVUsRUFBQTtFQUlkO0VBQ0Usb0NBQW9DO0VBRXBDLDRCQUE0QjtFQUM1QixnREFBZ0Q7RUFHaEQsd0NBQXdDO0VBQ3hDLFVBQVUsRUFBQTtFQUdaLHdCQUFBO0VBRUE7RUFFSSwyQkFBMkI7RUFFM0IsbUJBQW1CLEVBQUE7RUFKdkI7RUFPSSxvQ0FBb0M7RUFFcEMsNEJBQTRCO0VBQzVCLGlFQUFpRTtFQUdqRSx5REFBeUQ7RUFDekQsVUFBVSxFQUFBO0VBSWQ7RUFDRSxvQ0FBb0M7RUFFcEMsNEJBQTRCO0VBQzVCLDJEQUEyRDtFQUczRCxtREFBbUQ7RUFDbkQsVUFBVSxFQUFBO0VBR1osc0NBQUE7RUFFQTtFQUNFLE1BQU07RUFDTixtQ0FBbUM7RUFHbkMsMkJBQTJCLEVBQUE7RUFMN0I7SUFPSSxvQ0FBb0M7SUFHcEMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUUzQixtQkFBbUI7SUFDbkIsVUFBVSxFQUFBO0VBSWQ7RUFDRSxpQ0FBaUM7RUFHakMseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixVQUFVLEVBQUE7RUFHWixpQ0FBQTtFQUVBO0VBRUksMkJBQTJCO0VBRTNCLG1CQUFtQixFQUFBO0VBSnZCO0VBT0ksb0NBQW9DO0VBRXBDLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFHbEMsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUU1QixvQkFBb0I7RUFDcEIsVUFBVSxFQUFBO0VBSWQ7RUFDRSxnQ0FBZ0M7RUFHaEMsd0JBQXdCO0VBQ3hCLFVBQVUsRUFBQTtFQUdaLCtCQUFBO0VBRUE7RUFFSSwyQkFBMkI7RUFFM0IsbUJBQW1CLEVBQUE7RUFKdkI7RUFPSSxvQ0FBb0M7RUFFcEMsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUdsQywwQkFBMEI7RUFDMUIsNEJBQTRCO0VBRTVCLG9CQUFvQjtFQUNwQixVQUFVLEVBQUE7RUFJZDtFQUNFLGdDQUFnQztFQUdoQyx3QkFBd0I7RUFDeEIsVUFBVSxFQUFBO0VBR1osdUJBQUE7RUFFQTtFQUVJLDJCQUEyQjtFQUUzQixtQkFBbUIsRUFBQTtFQUp2QjtFQU9JLG9DQUFvQztFQUVwQyw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBR2xDLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFFL0IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDViw0QkFBNEI7RUFFNUIsb0JBQW9CLEVBQUE7RUFJeEI7RUFDRSxnQ0FBZ0M7RUFHaEMsd0JBQXdCO0VBQ3hCLFVBQVUsRUFBQTtFQUdaLDRCQUFBO0VBRUE7RUFDRSwyQkFBMkI7RUFHM0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDViw0QkFBNEI7RUFFNUIsb0JBQW9CLEVBQUE7RUFHdEI7RUFDRSwyQkFBMkI7RUFHM0IsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTtFQUdaLHdCQUFBO0VBRUE7RUFDRSw2QkFBNkI7RUFHN0IscUJBQXFCO0VBQ3JCLFVBQVU7RUFDViw0QkFBNEI7RUFFNUIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFJWCx1QkFBdUIsRUFBQTtFQWJ6QjtJQVdJLHVCQUF1QixFQUFBO0VBSzNCO0VBQ0UsMkJBQTJCO0VBRzNCLG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7RUFHWix1QkFBQTtFQUVBO0VBRUksMkJBQTJCO0VBRTNCLG1CQUFtQixFQUFBO0VBSnZCO0VBT0ksb0NBQW9DO0VBRXBDLDRCQUE0QjtFQUM1QixxREFBcUQ7RUFHckQsNkNBQTZDO0VBQzdDLFVBQVUsRUFBQTtFQUlkO0VBQ0UsNkNBQTZDO0VBRTdDLHFDQUFxQyxFQUFBO0VBR3ZDO0VBQ0U7SUFDRSxvREFBb0Q7SUFDcEQsV0FBVztJQUNYLDJDQUEyQyxFQUFBO0VBRzdDO0lBQ0UsOENBQThDO0lBQzlDLFVBQVUsRUFBQSxFQUFBO0VBbUJkO0VBQ0U7SUFDRSxvREFBNEM7WUFBNUMsNENBQTRDO0lBQzVDLFVBQVU7SUFDViwwQ0FBa0M7WUFBbEMsa0NBQWtDLEVBQUE7RUFHcEM7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLFVBQVUsRUFBQSxFQUFBO0VBS2Qsc0NBQUE7RUFFQTtFQUVJLDJCQUEyQjtFQUUzQixtQkFBbUIsRUFBQTtFQUp2QjtFQU9JLG9DQUFvQztFQUVwQyw0QkFBNEI7RUFDNUIsa0RBQWtEO0VBR2xELDBDQUEwQztFQUMxQyxnQ0FBZ0M7RUFFaEMsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixxQ0FBcUM7RUFFckMsNkJBQTZCLEVBQUE7RUFJakM7RUFDRSwrQ0FBK0M7RUFHL0MsdUNBQXVDO0VBQ3ZDLFVBQVUsRUFBQTtFQUdaLHVDQUFBO0VBRUE7RUFFSSwyQkFBMkI7RUFFM0IsbUJBQW1CLEVBQUE7RUFKdkI7RUFPSSxvQ0FBb0M7RUFFcEMsNEJBQTRCO0VBQzVCLG9FQUFvRTtFQUdwRSw0REFBNEQ7RUFDNUQsZ0NBQWdDO0VBRWhDLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsNEJBQTRCO0VBRTVCLG9CQUFvQixFQUFBO0VBSXhCO0VBQ0UsK0RBQStEO0VBRy9ELHVEQUF1RDtFQUN2RCxVQUFVLEVBQUE7RUFHWixxQkFBQTtFQUVBO0VBRUkseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBO0VBSXJCO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixVQUFVLEVBQUE7RUFHWjtFQUNFLDRCQUE0QjtFQUM1QixvQkFBb0IsRUFBQTtFQUd0QjtFQUNFLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsVUFBVSxFQUFBO0VBR1osbUVBQUE7RUFFQTtFQUVJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsMENBQTBDO0VBRTFDLGtDQUEwQjtFQUExQiwwQkFBMEI7RUFBMUIsa0RBQTBCLEVBQUE7RUFJOUI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUUxQyxrQ0FBMEI7RUFBMUIsMEJBQTBCO0VBQTFCLGtEQUEwQixFQUFBO0VBRzVCO0VBR00sWUFBWSxFQUFBO0VBSGxCO0VBTU0sZ0JBQWdCO0VBQ2hCLDBCQUEwQixFQUFBO0VBUGhDO0VBV0ksZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsb0NBQW9DO0VBQ3BDLDRCQUE0QixFQUFBO0VBbEJoQztFQXNCTSxhQUFhLEVBQUE7RUF0Qm5CO0VBMkJNLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixvQ0FBb0M7RUFDcEMsNEJBQTRCLEVBQUE7RUFLbEM7RUFDRSxVQUFVO0VBQ1YsbUNBQW1DO0VBQ25DLDJCQUEyQixFQUFBO0VBRzdCO0VBQ0UsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsaUNBQWlDO0VBRWpDLHlCQUF5QixFQUFBO0VBRzNCLCtEQUFBO0VBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFHbEI7RUFDRSw0QkFBNEI7RUFDNUIsb0JBQW9CLEVBQUE7RUFHdEI7RUFHTSxhQUFhLEVBQUE7RUFIbkI7RUFPSSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7RUFDaEMsNkRBQTZEO0VBQzdELDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIscURBQXFELEVBQUE7RUFkekQ7RUFrQk0sb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyw2REFBNkQ7RUFDN0QsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixxREFBcUQsRUFBQTtFQUszRDtFQUNFO0lBQ0Usa0RBQWtEO0lBQ2xELDJDQUEyQyxFQUFBO0VBRzdDO0lBQ0UscUNBQXFDLEVBQUEsRUFBQTtFQUt6QztFQUNFO0lBQ0Usa0RBQTBDO1lBQTFDLDBDQUEwQztJQUMxQywyQ0FBbUM7WUFBbkMsbUNBQW1DLEVBQUE7RUFHckM7SUFDRSxxQ0FBNkI7WUFBN0IsNkJBQTZCLEVBQUEsRUFBQTtFQUtqQztFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsVUFBVSxFQUFBO0VBR1o7RUFFSSxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMseUJBQXlCLEVBQUE7RUFON0I7RUFVTSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFYdEI7RUFjTSw0QkFBNEI7RUFFNUIsb0JBQW9CLEVBQUE7RUFLMUIsbUVBQUE7RUFFQTtFQUdNLGFBQWEsRUFBQTtFQUhuQjtFQU9JLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGtDQUFrQztFQUNsQyxnREFBZ0Q7RUFDaEQsaUNBQWlDO0VBQ2pDLCtCQUErQjtFQUMvQiw2Q0FBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQix3Q0FBd0MsRUFBQTtFQWpCNUM7RUFxQk0sb0NBQW9DO0VBQ3BDLGtDQUFrQztFQUNsQyxnREFBZ0Q7RUFDaEQsaUNBQWlDO0VBQ2pDLCtCQUErQjtFQUMvQiw2Q0FBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQix3Q0FBd0MsRUFBQTtFQUs5QztFQUNFO0lBQ0UsaUNBQWlDO0lBQ2pDLDJDQUEyQyxFQUFBLEVBQUE7RUFhL0M7RUFDRTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsMkNBQW1DO1lBQW5DLG1DQUFtQyxFQUFBLEVBQUE7RUFLdkM7RUFDRSxvQ0FBb0M7RUFHcEMsNEJBQTRCO0VBQzVCLFVBQVUsRUFBQTtFQUdaO0VBQ0UsZ0NBQWdDO0VBR2hDLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsaUNBQWlDO0VBRWpDLHlCQUF5QixFQUFBO0VBRzNCO0VBQ0U7SUFDRSxjQUFjLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbi1tb2RhbC9hbmltYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQtcGVyc3BlY3RpdmUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1kLW1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWF4LXdpZHRoOiA2MzBweDtcclxuICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLm1kLXNob3cge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5tZC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdyB+IC5tZC1vdmVybGF5IHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qIENvbnRlbnQgc3R5bGVzICovXHJcblxyXG4ubWQtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAuNGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICB9XHJcbiAgPiBkaXYge1xyXG4gICAgcGFkZGluZzogMTVweCA0MHB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMCAwIDMwcHggMjBweDtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEluZGl2aWR1YWwgbW9kYWwgc3R5bGVzIHdpdGggYW5pbWF0aW9ucy90cmFuc2l0aW9ucyAqL1xyXG5cclxuLyogRWZmZWN0IDE6IEZhZGUgaW4gYW5kIHNjYWxlIHVwICovXHJcblxyXG4ubWQtZWZmZWN0LTEgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMjogU2xpZGUgZnJvbSB0aGUgcmlnaHQgKi9cclxuXHJcbi5tZC1lZmZlY3QtMiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNSwgMC41LCAwLjkpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMzogU2xpZGUgZnJvbSB0aGUgYm90dG9tICovXHJcblxyXG4ubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMyAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA0OiBOZXdzcGFwZXIgKi9cclxuXHJcbi5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC00IH4gLm1kLW92ZXJsYXksIC5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgNTogZmFsbCAqL1xyXG5cclxuLm1kLWVmZmVjdC01IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGVYKDIwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTUgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDY6IHNpZGUgZmFsbCAqL1xyXG5cclxuLm1kLWVmZmVjdC02IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA3OiAgc2xpZGUgYW5kIHN0aWNrIHRvIHRvcCAqL1xyXG5cclxuLm1kLWVmZmVjdC03IHtcclxuICB0b3A6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNyAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA4OiAzRCBmbGlwIGhvcml6b250YWwgKi9cclxuXHJcbi5tZC1lZmZlY3QtOCB7XHJcbiAgJi5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gIH1cclxuICAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTggLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA5OiAzRCBmbGlwIHZlcnRpY2FsICovXHJcblxyXG4ubWQtZWZmZWN0LTkge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC05IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTA6IDNEIHNpZ24gKi9cclxuXHJcbi5tZC1lZmZlY3QtMTAge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTAgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxMTogU3VwZXIgc2NhbGVkICovXHJcblxyXG4ubWQtZWZmZWN0LTExIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxMjogIEp1c3QgbWUgKi9cclxuXHJcbi5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGgzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDEzOiAzRCBzbGl0ICovXHJcblxyXG4ubWQtZWZmZWN0LTEzIHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTMgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcclxuICAtbW96LWFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaXQge1xyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgc2xpdCB7XHJcbiAgNTAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yNTBweCkgcm90YXRlWSg4OWRlZyk7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgc2xpdCB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBFZmZlY3QgMTQ6ICAzRCBSb3RhdGUgZnJvbSBib3R0b20gKi9cclxuXHJcbi5tZC1lZmZlY3QtMTQge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE0IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTU6ICAzRCBSb3RhdGUgaW4gZnJvbSBsZWZ0ICovXHJcblxyXG4ubWQtZWZmZWN0LTE1IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxNjogIEJsdXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTYgPiB7XHJcbiAgbmF2LCBoZWFkZXIsIHNlY3Rpb24ge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgfiAuY29udGFpbmVyLCAubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTc6ICBTbGlkZSBpbiBmcm9tIGJvdHRvbSB3aXRoIHBlcnNwZWN0aXZlIG9uIGNvbnRhaW5lciAqL1xyXG5cclxuYm9keS5tb2RhbC0xNyA+IHtcclxuICBuYXYsIHNlY3Rpb24sIC5tZC1vdmVybGF5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyB+IC5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtMTcge1xyXG4gID4ge1xyXG4gICAgaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB9XHJcbiAgPiB7XHJcbiAgICAuaGVhZGVyLWNoYXQsIC5oZWFkZXItdXNlci1saXN0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgPiB7XHJcbiAgICBuYXYsIC5tZC1vdmVybGF5LCBzZWN0aW9uIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxODogIFNsaWRlIGZyb20gcmlnaHQgd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTgge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggfiAubWQtb3ZlcmxheSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuYm9keS5tb2RhbC0xOCB7XHJcbiAgPiB7XHJcbiAgICAuaGVhZGVyLWNoYXQsIC5oZWFkZXItdXNlci1saXN0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnBjb2RlZC1tYWluLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgfVxyXG4gID4ge1xyXG4gICAgbmF2LCBoZWFkZXIsIHNlY3Rpb24ge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XHJcbiAgICAgIGFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IHtcclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlUmlnaHRTaWRlRmlyc3Qge1xyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93IHtcclxuICAmLm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gIH1cclxuICAmLm1kLWVmZmVjdC0xOSB+IHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAubWQtb3ZlcmxheSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogRWZmZWN0IDE5OiAgU2xpcCBpbiBmcm9tIHRoZSB0b3Agd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTkge1xyXG4gID4ge1xyXG4gICAgLmhlYWRlci1jaGF0LCAuaGVhZGVyLXVzZXItbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICBhbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gIH1cclxuICA+IHtcclxuICAgIG5hdiwgaGVhZGVyLCBzZWN0aW9uIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgICAgLW1vei1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgICAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBPcGVuVG9wIHtcclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgT3BlblRvcCB7XHJcbiAgNTAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcclxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBPcGVuVG9wIHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XHJcbiAgYm9keSB7XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AnimationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationModalComponent", function() { return AnimationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnimationModalComponent = class AnimationModalComponent {
    constructor() {
        this.backDrop = false;
    }
    close(event) {
        document.querySelector('#' + event).classList.remove('md-show');
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AnimationModalComponent.prototype, "modalClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AnimationModalComponent.prototype, "contentClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AnimationModalComponent.prototype, "modalID", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AnimationModalComponent.prototype, "backDrop", void 0);
AnimationModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animation-modal',
        template: __webpack_require__(/*! raw-loader!./animation-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./animation-modal.component.scss */ "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AnimationModalComponent);



/***/ }),

/***/ "./src/app/theme/shared/components/modal/modal.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/modal.module.ts ***!
  \***************************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-modal/ui-modal.component */ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts");
/* harmony import */ var _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation-modal/animation-modal.component */ "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts");





let ModalModule = class ModalModule {
};
ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_4__["AnimationModalComponent"]],
        exports: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_4__["AnimationModalComponent"]]
    })
], ModalModule);



/***/ }),

/***/ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  /*overflow: hidden;*/\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.basic.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n\n.basic.fade.in {\n    opacity: 1; }\n\n.basic.modal.fade.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.basic.modal.fade .modal-dialog {\n  -webkit-transition: all .3s ease-out;\n  transition: all .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%); }\n\n.basic .basic-close {\n  position: absolute;\n  top: 16px;\n  right: 16px; }\n\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvdWktbW9kYWwvRDpcXDE5LVYtRGV2ZXIgSG9sZGF5cyBVSVxcREhELU9MRC1EZXNpZ25zXFxEZXZhckhvbGlkYXlzVUkvc3JjXFxhcHBcXHRoZW1lXFxzaGFyZWRcXGNvbXBvbmVudHNcXG1vZGFsXFx1aS1tb2RhbFxcdWktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFBO0VBQ0EsaUNBQWlDO0VBQ2pDLFVBQVUsRUFBQTs7QUFaZDtFQWVJLFVBQVU7RUFDVix1Q0FBdUM7RUFFdkMsK0JBQStCLEVBQUE7O0FBbEJuQztJQW9CTSxVQUFVLEVBQUE7O0FBcEJoQjtFQXlCTSxrQ0FBa0M7RUFHbEMsMEJBQTBCLEVBQUE7O0FBNUJoQztFQStCTSxvQ0FBb0M7RUFFcEMsNEJBQTRCO0VBQzVCLHFDQUFxQztFQUdyQyw2QkFBNkIsRUFBQTs7QUFyQ25DO0VBeUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQTNDZjtFQThDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBeUI7RUFDekIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC91aS1tb2RhbC91aS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNpYyB7XHJcbiAgJi5tb2RhbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgJi5mYWRlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcclxuICAgICYuaW4ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLm1vZGFsLmZhZGUge1xyXG4gICAgJi5pbiAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcclxuICAgIH1cclxuICB9XHJcbiAgLmJhc2ljLWNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTZweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAuYmFzaWMtY2xvc2UtbGlnaHQtYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMxcHg7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: UiModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModalComponent", function() { return UiModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UiModalComponent = class UiModalComponent {
    constructor() {
        this.hideHeader = false;
        this.hideFooter = false;
        this.containerClick = true;
        this.visible = false;
        this.visibleAnimate = false;
    }
    ngOnInit() {
    }
    show() {
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
        document.querySelector('body').classList.add('modal-open');
    }
    hide() {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
        document.querySelector('body').classList.remove('modal-open');
    }
    onContainerClicked(event) {
        if (event.target.classList.contains('modal') && this.containerClick === true) {
            this.hide();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UiModalComponent.prototype, "dialogClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UiModalComponent.prototype, "hideHeader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UiModalComponent.prototype, "hideFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UiModalComponent.prototype, "containerClick", void 0);
UiModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ui-modal',
        template: __webpack_require__(/*! raw-loader!./ui-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./ui-modal.component.scss */ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UiModalComponent);



/***/ }),

/***/ "./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%; }\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both; }\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0); }\n  40% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1); } }\n\n@keyframes sk-line-material {\n  0% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0); }\n  100% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1); } }\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0); }\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9EOlxcMTktVi1EZXZlciBIb2xkYXlzIFVJXFxESEQtT0xELURlc2lnbnNcXERldmFySG9saWRheXNVSS9zcmNcXGFwcFxcdGhlbWVcXHNoYXJlZFxcY29tcG9uZW50c1xcc3Bpbm5lclxcc3BpbmtpdC1jc3NcXHNrLWxpbmUtbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQVE7RUFDUixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQUs7RUFDTCxxQkFBcUI7RUFDckIsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixtRUFBbUU7RUFDbkUsMkRBQTJELEVBQUE7O0FBRy9EO0VBQ0k7SUFDSSw0QkFBNEI7SUFDNUIsb0JBQW9CLEVBQUE7RUFFeEI7SUFDSSw0QkFBNEI7SUFDNUIsb0JBQW9CLEVBQUEsRUFBQTs7QUFJNUI7RUFDSTtJQUNJLDRCQUE0QjtJQUM1QixvQkFBb0IsRUFBQTtFQUV4QjtJQUNJLDRCQUE0QjtJQUM1QixvQkFBb0IsRUFBQSxFQUFBOztBQUk1QjtFQUNJLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysa0NBQStCLEVBQUE7O0FBR25DO0VBQ0kseUNBQTBDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWxpbmUtbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1saW5lLW1hdGVyaWFsIHtcclxuICAgIHRvcDogMCAgO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zay1saW5lLW1hdGVyaWFsIC5zay1jaGlsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbiAgICBhbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xyXG4gICAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuI2h0dHAtbG9hZGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5sb2FkZXItYmcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbn1cclxuXHJcbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTg4LCAxNTYsIDAuODApO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/theme/shared/components/spinner/spinkits.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinkits.ts ***!
  \*************************************************************/
/*! exports provided: Spinkit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinkit", function() { return Spinkit; });
const Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
    skLine: 'sk-line-material'
};


/***/ }),

/***/ "./src/app/theme/shared/components/spinner/spinner.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinner.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: .7;\n  background-color: #f1f1f1; }\n\n.colored-parent, .colored > div {\n  background-color: #333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9EOlxcMTktVi1EZXZlciBIb2xkYXlzIFVJXFxESEQtT0xELURlc2lnbnNcXERldmFySG9saWRheXNVSS9zcmNcXGFwcFxcdGhlbWVcXHNoYXJlZFxcY29tcG9uZW50c1xcc3Bpbm5lclxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaHR0cC1sb2FkZXIge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuLmxvYWRlci1iZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/theme/shared/components/spinner/spinner.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinner.component.ts ***!
  \**********************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _spinkits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinkits */ "./src/app/theme/shared/components/spinner/spinkits.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let SpinnerComponent = class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"];
        this.backgroundColor = '#2196f3';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"].skLine;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
};
SpinnerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpinnerComponent.prototype, "backgroundColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpinnerComponent.prototype, "spinner", void 0);
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: __webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/spinner/spinner.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/theme/shared/components/spinner/spinner.component.scss"), __webpack_require__(/*! ./spinkit-css/sk-line-material.scss */ "./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Document])
], SpinnerComponent);



/***/ }),

/***/ "./src/app/theme/shared/full-screen/toggle-full-screen.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/shared/full-screen/toggle-full-screen.ts ***!
  \****************************************************************/
/*! exports provided: ToggleFullScreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function() { return ToggleFullScreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



let ToggleFullScreenDirective = class ToggleFullScreenDirective {
    constructor(elements) {
        this.elements = elements;
    }
    onClick() {
        /*if (screenfull.enabled) {
          (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-maximize');
          (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-minimize');
          screenfull.toggle();
        }*/
        if (isScreenFull(screenfull__WEBPACK_IMPORTED_MODULE_2__)) {
            if (screenfull__WEBPACK_IMPORTED_MODULE_2__["isFullscreen"]) {
                screenfull__WEBPACK_IMPORTED_MODULE_2__["exit"]();
            }
            else {
                screenfull__WEBPACK_IMPORTED_MODULE_2__["request"]();
            }
        }
    }
};
ToggleFullScreenDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ToggleFullScreenDirective.prototype, "onClick", null);
ToggleFullScreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appToggleFullScreen]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ToggleFullScreenDirective);

function isScreenFull(sf) {
    return sf.isFullscreen;
}


/***/ }),

/***/ "./src/app/theme/shared/shared.module.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/shared/shared.module.ts ***!
  \***********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/app/theme/shared/components/index.ts");
/* harmony import */ var _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/data-table/data-filter.pipe */ "./src/app/theme/shared/components/data-table/data-filter.pipe.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/theme/shared/components/spinner/spinner.component.ts");
/* harmony import */ var _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chart/apex-chart/apex-chart.component */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts");
/* harmony import */ var _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/chart/apex-chart/apex-chart.service */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");


















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["AlertModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["CardModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(),
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["AlertModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["CardModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
            _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["DataFilterPipe"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideModule"],
            _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"],
            _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_9__["ApexChartComponent"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            // BsDatepickerModule.forRoot(),
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"]
        ],
        declarations: [
            _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["DataFilterPipe"],
            _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"],
            _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_9__["ApexChartComponent"]
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            },
            _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_10__["ApexChartService"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/* const domainURL = 'http://192.168.3.222:3333/DevarCabs/' */
const domainURL = 'https://prabu-holidays.onrender.com/DevarCabs/';
const environment = {
    production: false,
    baseURL: domainURL
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\19-V-Dever Holdays UI\DHD-OLD-Designs\DevarHolidaysUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map