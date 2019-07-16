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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"top\" style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-table/contact-table.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-table/contact-table.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"array\">Generated {{array.length}} results</p>\n<div *ngIf=\"dataSource\">\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z2\">\n\n      <ng-container *ngFor=\"let column of displayedColumns\" matColumnDef=\"{{column}}\">\n        <th class=\"cell\" mat-header-cell *matHeaderCellDef mat-sort-header> {{column}} </th>\n        <td class=\"cell\" mat-cell *matCellDef=\"let contacts\"> {{contacts[column]}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contacts/contacts.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contacts/contacts.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Type</mat-card-title>\n  <mat-radio-group [(ngModel)]=\"optionType\">\n    <mat-radio-button *ngFor=\"let option of options\" value=\"{{option}}\">{{option}}</mat-radio-button>\n  </mat-radio-group>\n</mat-card>\n\n<header id=\"company\"></header>\n<mat-card>\n  <mat-card-title>Company</mat-card-title>\n  <section class=\"checkboxes\">\n    <mat-checkbox\n    *ngFor=\"let company of companies\"\n    [(ngModel)]=\"company.checked\"\n    (change)=\"onCompanyChecked(company.name, company.checked)\"\n    >{{company.name}}</mat-checkbox>\n  </section>\n</mat-card>\n\n\n<mat-card>\n  <mat-card-title>Material</mat-card-title>\n  <section class=\"checkboxes\">\n    <mat-checkbox\n    *ngFor=\"let material of materials\"\n    [(ngModel)]=\"material.checked\"\n    (change)=\"onMaterialChecked(material.value, material.checked)\"\n    >{{material.name}}</mat-checkbox>\n  </section>\n</mat-card>\n\n\n<mat-card>\n  <mat-card-title>Replacement</mat-card-title>\n  <section class=\"checkboxes\">\n    <mat-checkbox\n    *ngFor=\"let replacement of replacements\"\n    [(ngModel)]=\"replacement.checked\"\n    (change)=\"onReplacementChecked(replacement.value, replacement.checked)\"\n    >{{replacement.name}}</mat-checkbox>\n  </section>\n</mat-card>\n\n<mat-card>\n  <mat-card-title>Dk/t</mat-card-title>\n  <section>\n    <mat-radio-group [(ngModel)]=\"selectedRangeType\">\n      <mat-radio-button *ngFor=\"let option of rangetypes\" value=\"{{option}}\">{{option}}</mat-radio-button>\n    </mat-radio-group>\n  </section>\n  <mat-form-field *ngIf=\"selectedRangeType !== 'Either'\" class=\"dkt value\">\n    <input [(ngModel)]=\"dktValue\" matInput placeholder=\"Dk/t value\" type=\"number\">\n  </mat-form-field>\n</mat-card>\n\n<mat-card>\n  <mat-card-title>Base Curves Available</mat-card-title>\n  <section>\n    <mat-radio-group [(ngModel)]=\"selectedBaseCurves\">\n      <mat-radio-button *ngFor=\"let option of baseCurves\" value=\"{{option}}\">{{option}}</mat-radio-button>\n    </mat-radio-group>\n  </section>\n</mat-card>\n\n<button mat-button (click)=\"search()\">Search</button> <button mat-button (click)=\"backToTop()\">Back to Top</button>\n\n<app-contact-table id=\"resultsTable\" [array]=\"myClonedArray\">contactTable</app-contact-table>\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CL Products';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contact_table_contact_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-table/contact-table.component */ "./src/app/contact-table/contact-table.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"],
                _contact_table_contact_table_component__WEBPACK_IMPORTED_MODULE_10__["ContactTableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"] }
                ])
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-table/contact-table.component.css":
/*!***********************************************************!*\
  !*** ./src/app/contact-table/contact-table.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdGFibGUvY29udGFjdC10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact-table/contact-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/contact-table/contact-table.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactTableComponent", function() { return ContactTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ContactTableComponent = /** @class */ (function () {
    function ContactTableComponent() {
        this.displayedColumns = [];
    }
    ContactTableComponent.prototype.ngOnInit = function () {
    };
    ContactTableComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (typeof changes['array']['currentValue'] !== "undefined") {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.array);
            this.dataSource.sort = this.sort;
            this.displayedColumns = [];
            if (this.array.length === 0) {
                return;
            }
            Object.keys(this.array[0]).forEach(function (key) {
                _this.displayedColumns.push(key);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ContactTableComponent.prototype, "array", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], ContactTableComponent.prototype, "sort", void 0);
    ContactTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-table',
            template: __webpack_require__(/*! raw-loader!./contact-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-table/contact-table.component.html"),
            styles: [__webpack_require__(/*! ./contact-table.component.css */ "./src/app/contact-table/contact-table.component.css")]
        })
    ], ContactTableComponent);
    return ContactTableComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resources_multifocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/multifocal */ "./src/resources/multifocal.ts");
/* harmony import */ var _resources_spherical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resources/spherical */ "./src/resources/spherical.ts");
/* harmony import */ var _resources_tinted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resources/tinted */ "./src/resources/tinted.ts");
/* harmony import */ var _resources_toric__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resources/toric */ "./src/resources/toric.ts");
/* harmony import */ var ng_animate_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-animate-scroll */ "./node_modules/ng-animate-scroll/fesm5/ng-animate-scroll.js");








var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.animateScrollService = new ng_animate_scroll__WEBPACK_IMPORTED_MODULE_6__["NgAnimateScrollService"]();
        this.optionType = 'Spherical';
        this.selectedCompanies = [];
        this.selectedMaterials = [];
        this.selectedReplacements = [];
        this.selectedRangeType = 'Either';
        this.dktValue = 0;
        this.selectedBaseCurves = 'Either';
        this.options = ['Spherical', 'Toric', 'Tinted', 'Multifocal'];
        this.companies = [
            { name: 'Alcon', checked: false },
            { name: 'B&L', checked: false },
            { name: 'Coopervision', checked: false },
            { name: 'J&J', checked: false },
            { name: 'Menicon', checked: false }
        ];
        this.materials = [
            { name: 'Hydrogel', checked: false, value: 'H' },
            { name: 'Silicone Hydrogel', checked: false, value: 'SiH' }
        ];
        this.replacements = [
            { name: 'Daily Disposable', checked: false, value: 'DD' },
            { name: 'Fortnightly', checked: false, value: 'Fortnightly' },
            { name: 'Monthly', checked: false, value: 'Monthly' }
        ];
        this.rangetypes = ['Either', 'Maximum', 'Minimum'];
        this.baseCurves = ['Either', '1', '2'];
    }
    ContactsComponent.prototype.ngOnInit = function () { };
    ContactsComponent.prototype.backToTop = function () {
        this.animateScrollService.scrollToElement('top', 750);
    };
    ContactsComponent.prototype.search = function () {
        switch (this.optionType) {
            case 'Spherical': {
                this.dataSource = _resources_spherical__WEBPACK_IMPORTED_MODULE_3__["spherical"];
                break;
            }
            case 'Multifocal': {
                this.dataSource = _resources_multifocal__WEBPACK_IMPORTED_MODULE_2__["multifocal"];
                break;
            }
            case 'Toric': {
                this.dataSource = _resources_toric__WEBPACK_IMPORTED_MODULE_5__["toric"];
                break;
            }
            case 'Tinted': {
                this.dataSource = _resources_tinted__WEBPACK_IMPORTED_MODULE_4__["tinted"];
                break;
            }
            default: {
                return;
            }
        }
        this.myClonedArray = Object.assign([], this.dataSource);
        this.filterCompanies(this.myClonedArray);
        this.filterMaterials(this.myClonedArray);
        this.filterReplacements(this.myClonedArray);
        this.filterDkt(this.myClonedArray);
        this.filterBaseCurves(this.myClonedArray);
        this.animateScrollService.scrollToElement('resultsTable', 750);
    };
    ContactsComponent.prototype.onCompanyChecked = function (name, checked) {
        if (checked === true) {
            this.selectedCompanies.push(name);
        }
        else {
            var idx = this.selectedCompanies.indexOf(name, 0);
            if (idx > -1) {
                this.selectedCompanies.splice(idx, 1);
            }
        }
        console.log('selected companies: ' + this.selectedCompanies);
    };
    ContactsComponent.prototype.onMaterialChecked = function (name, checked) {
        if (checked === true) {
            this.selectedMaterials.push(name);
        }
        else {
            var idx = this.selectedMaterials.indexOf(name, 0);
            if (idx > -1) {
                this.selectedMaterials.splice(idx, 1);
            }
        }
        console.log('selected material: ' + this.selectedMaterials);
    };
    ContactsComponent.prototype.onReplacementChecked = function (name, checked) {
        if (checked === true) {
            this.selectedReplacements.push(name);
        }
        else {
            var idx = this.selectedReplacements.indexOf(name, 0);
            if (idx > -1) {
                this.selectedReplacements.splice(idx, 1);
            }
        }
        console.log('selected replacements: ' + this.selectedReplacements);
    };
    /** Filters */
    ContactsComponent.prototype.filterCompanies = function (array) {
        if (this.selectedCompanies.length === 0) {
            return;
        }
        var idx = 0;
        while (idx < array.length) {
            var element = array[idx];
            if (this.selectedCompanies.indexOf(element.Company) === -1) {
                array.splice(idx, 1);
            }
            else {
                idx++;
            }
        }
    };
    ContactsComponent.prototype.filterMaterials = function (array) {
        if (this.selectedMaterials.length === 0) {
            return;
        }
        var idx = 0;
        while (idx < array.length) {
            var element = array[idx];
            if (this.selectedMaterials.indexOf(element.Material) === -1) {
                array.splice(idx, 1);
            }
            else {
                idx++;
            }
        }
    };
    ContactsComponent.prototype.filterReplacements = function (array) {
        if (this.selectedReplacements.length === 0) {
            return;
        }
        var idx = 0;
        while (idx < array.length) {
            var element = array[idx];
            if (this.selectedReplacements.indexOf(element.Replacement) === -1) {
                array.splice(idx, 1);
            }
            else {
                idx++;
            }
        }
    };
    ContactsComponent.prototype.filterDkt = function (array) {
        if (this.selectedRangeType === 'Either') {
            return;
        }
        var idx = 0;
        while (idx < array.length) {
            var value = array[idx]['Dkt'];
            if (this.selectedRangeType === 'Maximum') {
                if (value > this.dktValue) {
                    console.log(this.dktValue + ' ' + value);
                    array.splice(idx, 1);
                }
                else {
                    idx++;
                }
            }
            else {
                if (this.dktValue > value) {
                    console.log(this.dktValue + ' ' + value);
                    array.splice(idx, 1);
                }
                else {
                    idx++;
                }
            }
        }
    };
    ContactsComponent.prototype.filterBaseCurves = function (array) {
        if (this.selectedBaseCurves === 'Either') {
            return;
        }
        var idx = 0;
        while (idx < array.length) {
            var value = array[idx]['BaseCurve'].toString();
            if (value === 'undefined') {
                idx++;
                continue;
            }
            if (this.selectedBaseCurves === '1') {
                if (value.length > 3) {
                    array.splice(idx, 1);
                }
                else {
                    idx++;
                }
            }
            else {
                if (value.length <= 3) {
                    array.splice(idx, 1);
                }
                else {
                    idx++;
                }
            }
        }
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/index.js!./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ContactsComponent);
    return ContactsComponent;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/resources/multifocal.ts":
/*!*************************************!*\
  !*** ./src/resources/multifocal.ts ***!
  \*************************************/
/*! exports provided: multifocal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multifocal", function() { return multifocal; });
// tslint:disable-next-line: no-unused-expression
var multifocal = [
    {
        Name: 'Proclear XR',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'Monthly',
        BaseCurve: 8.7,
        LD: 14.4,
        WaterContent: '62%',
        Dkt: 17,
        Modulus: 0.49,
        SphMin: 6.25,
        SphMax: 20,
        Steps: '6.25, 6.50 to 20 (0.50D steps)',
        Add: 'Options: +1.00 to +4.00 (0.50D steps)',
        AddDesign: 'Both Centre-D and Centre N',
        Notes: 'High Plus Options'
    },
    {
        Name: 'Proclear Toric',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'Monthly',
        BaseCurve: '8.4 & 8.8',
        LD: 14.4,
        WaterContent: '62%',
        Dkt: 17,
        Modulus: 0.49,
        SphMin: -20,
        SphMax: 20,
        Steps: '0.5 steps after +6.50/-6.50',
        Add: 'Options: +1.00 to +4.00 (0.50D steps)',
        AddDesign: 'Both Centre-D and Centre N',
        Notes: 'Cyl -0.75 to -5.75 (0.50D steps) Axis 5 to 180 (5 degree steps)'
    },
    {
        Name: 'Proclear XR',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'Monthly',
        BaseCurve: 8.7,
        LD: 14.4,
        WaterContent: '62%',
        Dkt: 17,
        Modulus: 0.49,
        SphMin: -20,
        SphMax: 8.5,
        Steps: 0.5,
        Add: 'Options: +1.00 to +4.00 (0.50D steps)',
        AddDesign: 'Both Centre-D and Centre N',
        Notes: 'High Minus Options'
    },
    {
        Name: 'Dailies Aquacomfort Plus',
        Company: 'Alcon',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.7,
        LD: 14,
        WaterContent: '69%',
        Dkt: 26,
        Modulus: '',
        SphMin: -10,
        SphMax: 6,
        Steps: '',
        Add: 'Low: up to +1.25\nMed: +1.50 to +2.00\nHigh: +2.25 to +2.50',
        AddDesign: 'Centre-N',
        Notes: ''
    },
    {
        Name: 'Air Optix Aqua',
        Company: 'Alcon',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.6,
        LD: 14.2,
        WaterContent: '33%',
        Dkt: 138,
        Modulus: 1,
        SphMin: -10,
        SphMax: 6,
        Steps: '',
        Add: 'Low: up to +1.25\nMed: +1.50 to +2.00\nHi: +2.25 to +2.50',
        AddDesign: 'Centre-N',
        Notes: 'EW 6 nights'
    },
    {
        Name: 'Biotrue ONEday',
        Company: 'B&L',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 8.6,
        LD: 14.2,
        WaterContent: '78%',
        Dkt: 42,
        Modulus: 0.49,
        SphMin: -9,
        SphMax: 6,
        Steps: '',
        Add: 'Low: +0.75 to +1.50\nHigh: +1.75 to +2.50',
        AddDesign: 'Centre-N',
        Notes: 'Hypergel'
    },
    {
        Name: 'PureVision 2 HD',
        Company: 'B&L',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.6,
        LD: 14,
        WaterContent: '36%',
        Dkt: 130,
        Modulus: 1.1,
        SphMin: -10,
        SphMax: 6,
        Steps: 0.25,
        Add: 'Low: +0.75 to +1.50\nHigh: +1.75 to +2.50',
        AddDesign: 'Centre-N',
        Notes: ''
    },
    {
        Name: 'SofLens',
        Company: 'B&L',
        Material: 'H',
        Replacement: 'Monthly',
        BaseCurve: '8.5 & 8.8',
        LD: 14.5,
        WaterContent: '38.60%',
        Dkt: 8.4,
        Modulus: '',
        SphMin: -10,
        SphMax: 6,
        Steps: '',
        Add: 'Low: +0.75 to +1.50 \nHigh: +1.75 to +2.50',
        AddDesign: 'Centre-N',
        Notes: ''
    },
    {
        Name: 'Proclear 1 day',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.7,
        LD: 14.2,
        WaterContent: '60%',
        Dkt: 28,
        Modulus: 0.4,
        SphMin: -10,
        SphMax: 6,
        Steps: '',
        Add: 'Single add',
        AddDesign: 'Centre-N',
        Notes: ''
    },
    {
        Name: 'Biofinity',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.6,
        LD: 14,
        WaterContent: '48%',
        Dkt: 142,
        Modulus: 0.75,
        SphMin: -10,
        SphMax: 6,
        Steps: '',
        Add: 'Options: +1.00, +1.50, +2.00. +2.50',
        AddDesign: 'Both Centre-D and Centre N',
        Notes: 'EW 29 nights'
    },
    {
        Name: 'Proclear',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'Monthly',
        BaseCurve: 8.7,
        LD: 14.4,
        WaterContent: '62%',
        Dkt: 17,
        Modulus: 0.49,
        SphMin: -8,
        SphMax: 6,
        Steps: '0.25 until -6.50 (then 0.50)',
        Add: 'Options: +1.00, +1.50, +2.00. +2.50',
        AddDesign: 'Both Centre-D and Centre N',
        Notes: ''
    },
    {
        Name: 'Proclear XR',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'Monthly',
        BaseCurve: 8.7,
        LD: 14.4,
        WaterContent: '62%',
        Dkt: 17,
        Modulus: 0.49,
        SphMin: -8,
        SphMax: 6,
        Steps: '0.25 until -6.50 (then 0.50)',
        Add: 'Higher cyl Options: +3.00, +3.50. +4.00',
        AddDesign: 'Both Centre-D and Centre N',
        Notes: 'High Cyl Options'
    },
    {
        Name: 'Acuvue Moist',
        Company: 'J&J',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.4,
        LD: 14.3,
        WaterContent: '58%',
        Dkt: 28,
        Modulus: '',
        SphMin: -9,
        SphMax: 6,
        Steps: '',
        Add: 'Low: +0.75 to +1.25\nMid: +1.50 to +1.75\nHigh: +2.00 to +2.50',
        AddDesign: '',
        Notes: 'Aspheric centre, spherical periphery (ensure centration of optics over the pupil). Inside out mark'
    },
    {
        Name: 'Clariti 1 Day',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 8.6,
        LD: 14.1,
        WaterContent: '56%',
        Dkt: 86,
        Modulus: 0.5,
        SphMin: -6,
        SphMax: 5,
        Steps: '',
        Add: 'Low: up to +2.25 \nHigh: +2.25 to +3.00',
        AddDesign: 'Centre-N',
        Notes: ''
    },
    {
        Name: 'Dailies Total1',
        Company: 'Alcon',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 8.5,
        LD: 14.1,
        WaterContent: '33%',
        Dkt: 156,
        Modulus: '0.76-0.014',
        SphMin: -6,
        SphMax: 3,
        Steps: '',
        Add: 'Low: up to +1.25\nMed: +1.50 to +2.00\nHigh:+2.25 to +2.50',
        AddDesign: '',
        Notes: ''
    },
    {
        Name: 'Ultra for Presbyopia',
        Company: 'B&L',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.5,
        LD: 14.2,
        WaterContent: '46%',
        Dkt: 163,
        Modulus: 0.7,
        SphMin: -7,
        SphMax: 2,
        Steps: '',
        Add: 'Low: +0.75 to +1.50\nHigh: +1.75 to +2.50',
        AddDesign: 'Centre-N',
        Notes: ''
    }
];


/***/ }),

/***/ "./src/resources/spherical.ts":
/*!************************************!*\
  !*** ./src/resources/spherical.ts ***!
  \************************************/
/*! exports provided: spherical */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spherical", function() { return spherical; });
// tslint:disable-next-line: no-unused-expression
var spherical = [
    {
        Name: 'Dailies Aqua Comfort Plus',
        Company: 'Alcon',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.7,
        LD: 14,
        WaterContent: '69%',
        Dkt: 26,
        Modulus: '',
        SphMin: -15,
        SphMax: 8,
        Steps: '0.25 until +6/-6',
        Notes: '',
        Marketing: '',
    },
    {
        Name: 'Dailies Total1',
        Company: 'Alcon',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 8.5,
        LD: 14.1,
        WaterContent: '33% to 80%',
        Dkt: 156,
        Modulus: '0.7-0.025',
        SphMin: -12,
        SphMax: 6,
        Steps: '0.25 until +6/-6',
        Notes: '',
        Marketing: '',
    },
    {
        Name: 'Air Optix Aqua',
        Company: 'Alcon',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.6,
        LD: 14.2,
        WaterContent: '33%',
        Dkt: 138,
        Modulus: 1,
        SphMin: -12,
        SphMax: 8,
        Steps: '0.25 until +6/-6',
        Notes: 'EW 6 nights',
        Marketing: '',
    },
    {
        Name: 'Air Optix Night & Day Aqua',
        Company: 'Alcon',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.6,
        LD: 13.8,
        WaterContent: '24%',
        Dkt: 175,
        Modulus: 1.5,
        SphMin: -10,
        SphMax: 6,
        Steps: '0.25 until +6/-8',
        Notes: 'EW 30 nights',
        Marketing: '',
    },
    {
        Name: 'Air Optix Night & Day Aqua',
        Company: 'Alcon',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.4,
        LD: 13.8,
        WaterContent: '24%',
        Dkt: 175,
        Modulus: 1.5,
        SphMin: -10,
        SphMax: 6,
        Steps: '0.25 until +6/-8',
        Notes: 'EW 30 nights',
        Marketing: '',
    },
    {
        Name: 'PureVision 2 HD',
        Company: 'B&L',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.6,
        LD: 14,
        WaterContent: '36%',
        Dkt: 130,
        Modulus: '',
        SphMin: -12,
        SphMax: 6,
        Steps: '0.25 until +6/-6',
        Notes: 'EW 30 days',
        Marketing: 'replaced Purevision "thinner" alternative',
    },
    {
        Name: 'SofLens',
        Company: 'B&L',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.6,
        LD: 14.2,
        WaterContent: '60%',
        Dkt: 22,
        Modulus: '',
        SphMin: -9,
        SphMax: 6.5,
        Steps: '0.25 until +6.50/-6.50',
        Notes: '',
        Marketing: '',
    },
    {
        Name: 'Biotrue ONEday',
        Company: 'B&L',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 8.6,
        LD: 14.2,
        WaterContent: '78%',
        Dkt: 42,
        Modulus: 0.49,
        SphMin: -9,
        SphMax: 6,
        Steps: '0.25 until +6/-6.50',
        Notes: '',
        Marketing: 'Hypergel, moisture retained for longer (16 h)',
    },
    {
        Name: 'Ultra',
        Company: 'B&L',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.5,
        LD: 14.2,
        WaterContent: '46%',
        Dkt: 163,
        Modulus: 0.7,
        SphMin: -9,
        SphMax: 6.5,
        Steps: '0.25 until +6.50/-6.50',
        Notes: '',
        Marketing: 'Thin edge enables smooth gentle transition between lens/lid. Better for low light vision, less spherical aberrations (movies/driving)',
    },
    {
        Name: 'Biofinity XR',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.6,
        LD: 14,
        WaterContent: '48%',
        Dkt: 160,
        Modulus: 0.75,
        SphMin: -20,
        SphMax: 15,
        Steps: 0.5,
        Notes: '',
        Marketing: '',
    },
    {
        Name: 'Proclear',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.6,
        LD: 14.2,
        WaterContent: '62%',
        Dkt: 27,
        Modulus: 0.4,
        SphMin: -20,
        SphMax: 20,
        Steps: '0.25 until +6/-6',
        Notes: '',
        Marketing: '',
    },
    {
        Name: 'Proclear 1 Day',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.7,
        LD: 14.2,
        WaterContent: '60%',
        Dkt: 28,
        Modulus: 0.4,
        SphMin: -12,
        SphMax: 8,
        Steps: '0.25 until -6/5',
        Notes: '',
        Marketing: '',
    },
    {
        Name: 'Avaira',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'Fortnightly',
        BaseCurve: '8.5 (-) / 8.4 (+)',
        LD: 14.2,
        WaterContent: '46%',
        Dkt: 125,
        Modulus: 0.5,
        SphMin: -12,
        SphMax: 8,
        Steps: '0.25 until +6/-6',
        Notes: '',
        Marketing: '',
    },
    {
        Name: 'Biofinity',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.6,
        LD: 14,
        WaterContent: '48%',
        Dkt: 160,
        Modulus: 0.75,
        SphMin: -12,
        SphMax: 8,
        Steps: '0.25 until +6/-6',
        Notes: 'EW 29 nights',
        Marketing: '',
    },
    {
        Name: 'Biofinity ENERGYS',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.6,
        LD: 14,
        WaterContent: '48%',
        Dkt: 160,
        Modulus: 0.75,
        SphMin: -12,
        SphMax: 8,
        Steps: '0.25 until +6/-6',
        Notes: '',
        Marketing: 'Digital zone optics with multiple front surface aspheric curves to ease accommodative burden of a digital lifestyle',
    },
    {
        Name: 'Biomedics 1 day Extra',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: '8.6 (-) / 8.8 (+)',
        LD: 14.2,
        WaterContent: '55%',
        Dkt: 27,
        Modulus: '',
        SphMin: -10,
        SphMax: 6,
        Steps: '0.25 till -6/+5',
        Notes: '2 BC (different for +/-)',
        Marketing: '',
    },
    {
        Name: 'Clariti 1 Day',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 8.6,
        LD: 14.1,
        WaterContent: '56%',
        Dkt: 86,
        Modulus: 0.5,
        SphMin: -10,
        SphMax: 8,
        Steps: '0.25 until +6/-6',
        Notes: '',
        Marketing: '',
    },
    {
        Name: 'MyDay',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 8.4,
        LD: 14.2,
        WaterContent: '54%',
        Dkt: 100,
        Modulus: 0.4,
        SphMin: -10,
        SphMax: 6,
        Steps: '0.25 until +5.50/-6.50',
        Notes: '',
        Marketing: '',
    },
    {
        Name: 'cAir',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'Fortnightly',
        BaseCurve: 8.4,
        LD: 14.1,
        WaterContent: '55%',
        Dkt: 90,
        Modulus: 0.5,
        SphMin: -10,
        SphMax: 8,
        Steps: '0.25 until +6/-6',
        Notes: '',
        Marketing: '',
    },
    {
        Name: 'Acuvue Moist',
        Company: 'J&J',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 9,
        LD: 14.2,
        WaterContent: '58%',
        Dkt: 26,
        Modulus: 0.31,
        SphMin: -12,
        SphMax: 6,
        Steps: '0.25 until +6/-6',
        Notes: '2 BC',
        Marketing: '',
    },
    {
        Name: 'Acuvue Moist',
        Company: 'J&J',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.5,
        LD: 14.2,
        WaterContent: '58%',
        Dkt: 26,
        Modulus: 0.31,
        SphMin: -12,
        SphMax: 6,
        Steps: '0.25 until +6/-6',
        Notes: '2 BC',
        Marketing: '',
    },
    {
        Name: 'Acuvue Oasys 1 Day',
        Company: 'J&J',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 9,
        LD: 14.3,
        WaterContent: '38%',
        Dkt: 121,
        Modulus: 0.72,
        SphMin: -12,
        SphMax: 8,
        Steps: '0.25 until +6.50/-6.50',
        Notes: '2 BC',
        Marketing: '',
    },
    {
        Name: 'Acuvue Trueye',
        Company: 'J&J',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 9,
        LD: 14.2,
        WaterContent: '46%',
        Dkt: 118,
        Modulus: '0.66-0.71',
        SphMin: -12,
        SphMax: 6,
        Steps: '0.25 until +6/-6',
        Notes: '2 BC',
        Marketing: '',
    },
    {
        Name: 'Acuvue Oasys 1 Day',
        Company: 'J&J',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 8.5,
        LD: 14.3,
        WaterContent: '38%',
        Dkt: 121,
        Modulus: 0.72,
        SphMin: -12,
        SphMax: 8,
        Steps: '0.25 until +6.50/-6.50',
        Notes: '2 BC',
        Marketing: '',
    },
    {
        Name: 'Acuvue Trueye',
        Company: 'J&J',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 8.5,
        LD: 14.2,
        WaterContent: '46%',
        Dkt: 118,
        Modulus: '0.66-0.71',
        SphMin: -12,
        SphMax: 6,
        Steps: '0.25 until +6/-6',
        Notes: '2 BC',
        Marketing: '',
    },
    {
        Name: 'Oasys',
        Company: 'J&J',
        Material: 'SiH',
        Replacement: 'Fortnightly',
        BaseCurve: 8.8,
        LD: 14,
        WaterContent: '38%',
        Dkt: 147,
        Modulus: 0.72,
        SphMin: -12,
        SphMax: 10,
        Steps: '0.25 until +6/-6',
        Notes: '2 BC',
        Marketing: '',
    },
    {
        Name: 'Oasys',
        Company: 'J&J',
        Material: 'SiH',
        Replacement: 'Fortnightly',
        BaseCurve: 8.4,
        LD: 14,
        WaterContent: '38%',
        Dkt: 147,
        Modulus: 0.72,
        SphMin: -12,
        SphMax: 10,
        Steps: '0.25 until +6/-6',
        Notes: '2 BC',
        Marketing: '',
    },
    {
        Name: 'Acuvue VITA',
        Company: 'J&J',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.8,
        LD: 14,
        WaterContent: '41%',
        Dkt: 147,
        Modulus: '',
        SphMin: -12,
        SphMax: 8,
        Steps: '0.25 until +6/-6',
        Notes: '2 BC',
        Marketing: 'UV blocker, visibility/inside out tint. Hydramax allow uniform lipid distribution and density = good lens hydration reduced evaporation',
    },
    {
        Name: 'Acuvue VITA',
        Company: 'J&J',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.4,
        LD: 14,
        WaterContent: '41%',
        Dkt: 147,
        Modulus: '',
        SphMin: -12,
        SphMax: 8,
        Steps: '0.25 until +6/-6',
        Notes: '2 BC',
        Marketing: 'UV blocker, visibility/inside out tint. Hydramax allow uniform lipid distribution and density = good lens hydration reduced evaporation',
    },
    {
        Name: 'Miru 1 Month',
        Company: 'Menicon',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.6,
        LD: 14,
        WaterContent: '40%',
        Dkt: 161,
        Modulus: '',
        SphMin: -13,
        SphMax: 6,
        Steps: '0.25 until +6/-6',
        Notes: '',
        // tslint:disable-next-line: max-line-length
        Marketing: 'Spherical optics; comfortable thin tapered edge, treated on surface with menisilk & nanogloss tech (greater resistance to lipid deposition  less discomfort, inflammation) Better corneal oxygenation across entire lens, low bacterial adhesion',
    },
    {
        Name: 'Miru 1 Month',
        Company: 'Menicon',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.3,
        LD: 14,
        WaterContent: '40%',
        Dkt: 161,
        Modulus: '',
        SphMin: -13,
        SphMax: 6,
        Steps: '0.25 until +6/-6',
        Notes: '',
        // tslint:disable-next-line: max-line-length
        Marketing: 'Spherical optics; comfortable thin tapered edge, treated on surface with menisilk & nanogloss tech (greater resistance to lipid deposition  less discomfort, inflammation) Better corneal oxygenation across entire lens, low bacterial adhesion',
    },
    {
        Name: 'Miru 1 Day',
        Company: 'Menicon',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.6,
        LD: 14.2,
        WaterContent: '57%',
        Dkt: 25,
        Modulus: '',
        SphMin: -10,
        SphMax: -0.5,
        Steps: '',
        Notes: 'Flat Pack',
        Marketing: '',
    }
];


/***/ }),

/***/ "./src/resources/tinted.ts":
/*!*********************************!*\
  !*** ./src/resources/tinted.ts ***!
  \*********************************/
/*! exports provided: tinted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tinted", function() { return tinted; });
// tslint:disable-next-line: no-unused-expression
var tinted = [
    {
        Name: 'FreshLook One-Day',
        Company: 'Alcon',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.6,
        LD: '',
        WaterContent: '69%',
        Dkt: 26,
        Modulus: '',
        SphMin: -8,
        SphMax: -0.5,
        Steps: '',
        Tints: 'Blue\nGreen\nPure Hazel\nGrey',
        Notes: '',
        Marketing: ''
    },
    {
        Name: 'FreshLook Colors',
        Company: 'Alcon',
        Material: 'H',
        Replacement: 'Fortnightly',
        BaseCurve: '',
        LD: '',
        WaterContent: '55%',
        Dkt: 20,
        Modulus: '',
        SphMin: -6,
        SphMax: 6,
        Steps: '',
        Tints: 'Blue\nGreen\nHazel\nViolet',
        Notes: '',
        Marketing: ''
    },
    {
        Name: 'Freshlook Colorblends',
        Company: 'Alcon',
        Material: 'H',
        Replacement: 'Fortnightly',
        BaseCurve: '',
        LD: '',
        WaterContent: '55%',
        Dkt: 20,
        Modulus: '',
        SphMin: -8,
        SphMax: 6,
        Steps: '',
        Tints: 'Amethyst\nBlue\nBrilliant Blue\nBrown\nGemstone Green\nGray, Green\nHoney\nPure Hazel\nSterling Gray\nTrue Sapphire\nTurquoise',
        Notes: '',
        Marketing: ''
    },
    {
        Name: 'FreshLook Dimension',
        Company: 'Alcon',
        Material: 'H',
        Replacement: 'Fortnightly',
        BaseCurve: '',
        LD: '',
        WaterContent: '55%',
        Dkt: 20,
        Modulus: '',
        SphMin: -8,
        SphMax: 6,
        Steps: '',
        Tints: '',
        Notes: '',
        Marketing: ''
    },
    {
        Name: 'AirOptix Colors',
        Company: 'Alcon',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.6,
        LD: '',
        WaterContent: '33%',
        Dkt: '138%',
        Modulus: '',
        SphMin: -8,
        SphMax: 6,
        Steps: '',
        Tints: 'Subtle:\nBlue\nGreen\nBrown\nPure Hazel\nGrey\nVibrant:\nBrillant Blue\n Gemstone Green\nSterling Gray\nHoney',
        Notes: '',
        Marketing: ''
    },
    {
        Name: 'Acuvue Define',
        Company: 'J&J',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.5,
        LD: 14.2,
        WaterContent: '58%',
        Dkt: 26,
        Modulus: '',
        SphMin: -9,
        SphMax: 0,
        Steps: '',
        Tints: 'Vivid D 12.8mm\nAccent D 12.5mm\nNatural Shine D 12.7mm\nNatural sparkle\nNatural shimmer',
        Notes: '',
        Marketing: ''
    }
];


/***/ }),

/***/ "./src/resources/toric.ts":
/*!********************************!*\
  !*** ./src/resources/toric.ts ***!
  \********************************/
/*! exports provided: toric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toric", function() { return toric; });
// tslint:disable-next-line: no-unused-expression
var toric = [
    {
        Name: 'Dailies AquaComfort PLus',
        Company: 'Alcon',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.8,
        LD: 14.4,
        WaterContent: '69%',
        Dkt: 26,
        Modulus: 0.9,
        SphMin: -8,
        SphMax: 4,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -1.75,
        CylSteps: '',
        Axis: '',
        Markings: '',
        Notes: '',
        Marketing: '',
        Stabilisation: 'dual thin zone, double slab off design',
    },
    {
        Name: 'Air Optix for Astig',
        Company: 'Alcon',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.7,
        LD: 14,
        WaterContent: '33%',
        Dkt: 108,
        Modulus: 1,
        SphMin: -10,
        SphMax: 6,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -2.25,
        CylSteps: '',
        Axis: '',
        Markings: '3, 6 9 o\'clock',
        Notes: 'EW 6 nights',
        Marketing: '',
        Stabilisation: 'prism ballast',
    },
    {
        Name: 'Biotrue',
        Company: 'B&L',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 8.4,
        LD: 14.5,
        WaterContent: '78%',
        Dkt: 42,
        Modulus: 0.5,
        SphMin: -9,
        SphMax: 4,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -2.25,
        CylSteps: '',
        Axis: '',
        Markings: '',
        Notes: '',
        Marketing: 'Hypergel, prism free optic zone',
        Stabilisation: 'peri ballast',
    },
    {
        Name: 'SofLens Toric',
        Company: 'B&L',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.6,
        LD: 14.2,
        WaterContent: '59%',
        Dkt: 22,
        Modulus: '',
        SphMin: -9,
        SphMax: 0,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -1.75,
        CylSteps: '',
        Axis: '',
        Markings: '',
        Notes: '',
        Marketing: '',
        Stabilisation: 'prism ballast',
    },
    {
        Name: 'SofLens 66 Toric',
        Company: 'B&L',
        Material: 'H',
        Replacement: 'Fortnightly',
        BaseCurve: 8.5,
        LD: 14.5,
        WaterContent: '66%',
        Dkt: 16,
        Modulus: '',
        SphMin: -9,
        SphMax: 6,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -2.75,
        CylSteps: '',
        Axis: '',
        Markings: '5, 6, 7 o\'clock',
        Notes: '',
        Marketing: '',
        Stabilisation: '',
    },
    {
        Name: 'PureVision Toric',
        Company: 'B&L',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.7,
        LD: 14,
        WaterContent: '36%',
        Dkt: 91,
        Modulus: 1.1,
        SphMin: -9,
        SphMax: 6,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -1.75,
        CylSteps: '',
        Axis: '',
        Markings: '5,6,7 o\'clock',
        Notes: 'EW 30 days',
        Marketing: '',
        Stabilisation: 'prism ballast',
    },
    {
        Name: 'PureVision 2',
        Company: 'B&L',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.9,
        LD: 14.5,
        WaterContent: '36%',
        Dkt: 91,
        Modulus: 1.1,
        SphMin: -9,
        SphMax: 6,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -2.25,
        CylSteps: '',
        Axis: '',
        Markings: '5,6,7 o\'clock',
        Notes: 'EW 30 days',
        Marketing: '',
        Stabilisation: 'hybrid ballast',
    },
    {
        Name: 'Clariti 1 Day',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 8.6,
        LD: 14.3,
        WaterContent: '56%',
        Dkt: 57,
        Modulus: 0.5,
        SphMin: -9,
        SphMax: 4,
        SphSteps: '0.25 until +4/-6',
        CylMin: -0.75,
        CylMax: -2.25,
        CylSteps: 0.5,
        Axis: '',
        Markings: '6 o\'clock',
        Notes: '-2.25 only for minus',
        Marketing: 'Aspheric',
        Stabilisation: '',
    },
    {
        Name: 'Myday',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 8.6,
        LD: 14.5,
        WaterContent: '54%',
        Dkt: 80,
        Modulus: 0.4,
        SphMin: -10,
        SphMax: 6,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -2.25,
        CylSteps: 0.5,
        Axis: '',
        Markings: '6 o\'clock',
        Notes: 'optimised toric lens geometry, uniform lens thickness, large optic zone',
        Marketing: '',
        Stabilisation: '',
    },
    {
        Name: 'Biomedics 1 day extra',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.7,
        LD: 14.5,
        WaterContent: '55%',
        Dkt: 17,
        Modulus: '',
        SphMin: 0,
        SphMax: 10,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -1.75,
        CylSteps: '',
        Axis: '',
        Markings: '',
        Notes: '',
        Marketing: '',
        Stabilisation: 'back surface toric with wide ballast band',
    },
    {
        Name: 'Avaira Toric',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'Fortnightly',
        BaseCurve: 8.5,
        LD: 14.5,
        WaterContent: '46%',
        Dkt: 91,
        Modulus: 0.5,
        SphMin: -10,
        SphMax: 6,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -2.25,
        CylSteps: '',
        Axis: '',
        Markings: '6 o\'clock',
        Notes: '',
        Marketing: '',
        Stabilisation: 'back surface toric with wide ballast band',
    },
    {
        Name: 'cAir Toric',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'Fortnightly',
        BaseCurve: 8.5,
        LD: 14.5,
        WaterContent: '55%',
        Dkt: 90,
        Modulus: 0.6,
        SphMin: -10,
        SphMax: 6,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -2.25,
        CylSteps: '',
        Axis: '',
        Markings: '6 o\'clock',
        Notes: '',
        Marketing: '',
        Stabilisation: 'back surface toric with wide ballast band',
    },
    {
        Name: 'Biofinity Toric',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.7,
        LD: 14.5,
        WaterContent: '48%',
        Dkt: 116,
        Modulus: 0.75,
        SphMin: -10,
        SphMax: 8,
        SphSteps: '0.25 until +6/-6',
        CylMin: -0.75,
        CylMax: -2.25,
        CylSteps: 0.5,
        Axis: '10 to 180 (10 steps)',
        Markings: '6 o\'clock',
        Notes: 'EW 29 nights',
        Marketing: '',
        Stabilisation: 'back surface toric with wide ballast band',
    },
    {
        Name: 'Biofinity Toric XR',
        Company: 'Coopervision',
        Material: 'SiH',
        Replacement: 'Monthly',
        BaseCurve: 8.7,
        LD: 14.5,
        WaterContent: '48%',
        Dkt: 116,
        Modulus: '',
        SphMin: -10,
        SphMax: 10,
        SphSteps: 0.5,
        CylMin: -0.75,
        CylMax: -5.75,
        CylSteps: 0.5,
        Axis: '5 to 180 (5 steps)',
        Markings: '6 o\'clock',
        Notes: 'EW 29 nights',
        Marketing: '',
        Stabilisation: '',
    },
    {
        Name: 'Proclear',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'Monthly',
        BaseCurve: 8.8,
        LD: 14.5,
        WaterContent: '62%',
        Dkt: 30.9,
        Modulus: 0.4,
        SphMin: -8,
        SphMax: 6,
        SphSteps: '0.5 after -6',
        CylMin: -0.75,
        CylMax: -2.25,
        CylSteps: 0.5,
        Axis: '10 to 180 (10 steps)',
        Markings: '6 o\'clock and 15 degrees other side',
        Notes: '',
        Marketing: '',
        Stabilisation: '',
    },
    {
        Name: 'Proclear XR',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'Monthly',
        BaseCurve: '8.4 & 8.8',
        LD: 14.5,
        WaterContent: '62%',
        Dkt: 30.9,
        Modulus: 0.4,
        SphMin: -8,
        SphMax: 6,
        SphSteps: '0.25 until +6.50/-8',
        CylMin: -2.75,
        CylMax: -5.75,
        CylSteps: 0.5,
        Axis: '5 to 180 (5 steps)',
        Markings: '6 o\'clock and 15 degrees other side',
        Notes: 'High cyl Options',
        Marketing: '',
        Stabilisation: 'back surface toric with prism ballast',
    },
    {
        Name: 'Proclear XR',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'Monthly',
        BaseCurve: '8.4 & 8.8',
        LD: 14.5,
        WaterContent: '62%',
        Dkt: 30.9,
        Modulus: 0.4,
        SphMin: -10,
        SphMax: -8.5,
        SphSteps: 0.5,
        CylMin: -0.75,
        CylMax: -5.75,
        CylSteps: 0.5,
        Axis: '5 to 180 (5 steps)',
        Markings: '6 o\'clock and 15 degrees other side',
        Notes: 'High minus + cyl options',
        Marketing: '',
        Stabilisation: 'back surface toric with prism ballast',
    },
    {
        Name: 'Proclear XR',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'Monthly',
        BaseCurve: '8.4 & 8.8',
        LD: 14.5,
        WaterContent: '62%',
        Dkt: 30.9,
        Modulus: 0.4,
        SphMin: 6.25,
        SphMax: 10,
        SphSteps: '6.25 then 0.5 steps from 6.5/10',
        CylMin: -0.75,
        CylMax: -5.75,
        CylSteps: 0.5,
        Axis: '5 to 180 (5 steps)',
        Markings: '6 o\'clock and 15 degrees other side',
        Notes: 'High plu + cyl options',
        Marketing: '',
        Stabilisation: 'back surface toric with prism ballast',
    },
    {
        Name: 'Frequency Xcel XR',
        Company: 'Coopervision',
        Material: 'H',
        Replacement: 'Monthly',
        BaseCurve: 8.7,
        LD: 14.4,
        WaterContent: '55%',
        Dkt: 15.7,
        Modulus: '',
        SphMin: -8,
        SphMax: 6,
        SphSteps: '',
        CylMin: -2.75,
        CylMax: -3.75,
        CylSteps: '',
        Axis: '',
        Markings: '',
        Notes: '',
        Marketing: '',
        Stabilisation: '',
    },
    {
        Name: 'Oasys',
        Company: 'J&J',
        Material: 'SiH',
        Replacement: 'DD',
        BaseCurve: 8.6,
        LD: 14.5,
        WaterContent: '38%',
        Dkt: 129,
        Modulus: 0.72,
        SphMin: -9,
        SphMax: 4,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -2.75,
        CylSteps: '',
        Axis: '',
        Markings: '6 & 12 o\'clock',
        Notes: '',
        Marketing: '',
        Stabilisation: 'blink stabilised design',
    },
    {
        Name: 'Acuvue Moist',
        Company: 'J&J',
        Material: 'H',
        Replacement: 'DD',
        BaseCurve: 8.5,
        LD: 14.5,
        WaterContent: '58%',
        Dkt: 26,
        Modulus: 0.3,
        SphMin: -6,
        SphMax: 4,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -2.25,
        CylSteps: '',
        Axis: '',
        Markings: '',
        Notes: '',
        Marketing: '',
        Stabilisation: 'dynamic multizone blink stabilised design',
    },
    {
        Name: 'Acuvue Oasys for Astigmatism',
        Company: 'J&J',
        Material: 'SiH',
        Replacement: 'Fortnightly',
        BaseCurve: 8.6,
        LD: 14.5,
        WaterContent: '38%',
        Dkt: 129,
        Modulus: 0.72,
        SphMin: -9,
        SphMax: 0.25,
        SphSteps: '',
        CylMin: -0.75,
        CylMax: -2.25,
        CylSteps: '',
        Axis: '',
        Markings: '6 & 12 o\'clock',
        Notes: '',
        Marketing: '',
        Stabilisation: '',
    }
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Documents\Code\contact-lense\contacts-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map