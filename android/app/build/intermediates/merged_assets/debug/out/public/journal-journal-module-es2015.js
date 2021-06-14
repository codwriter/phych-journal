(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journal-journal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal-entry/journal-entry.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/journal-entry/journal-entry.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>journal-entry</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-label>\n  Let's see how much DP or DA are you!\n</ion-label>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/journal.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/journal/journal.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">\n      Journal\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-list>\n        <ion-item></ion-item>\n      </ion-list>\n    </ion-row>\n   \n  </ion-grid>\n  <!-- fab placed to the (vertical) center and end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"presentJournEntryModal()\">\n      <ion-icon name=\"pencil-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/journal-entry/journal-entry.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/journal-entry/journal-entry.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuYWwtZW50cnkvam91cm5hbC1lbnRyeS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/journal-entry/journal-entry.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/journal-entry/journal-entry.page.ts ***!
  \*****************************************************/
/*! exports provided: JournalEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalEntryPage", function() { return JournalEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let JournalEntryPage = class JournalEntryPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
JournalEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
JournalEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journal-entry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./journal-entry.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal-entry/journal-entry.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./journal-entry.page.scss */ "./src/app/journal-entry/journal-entry.page.scss")).default]
    })
], JournalEntryPage);



/***/ }),

/***/ "./src/app/journal/journal-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/journal/journal-routing.module.ts ***!
  \***************************************************/
/*! exports provided: JournalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalPageRoutingModule", function() { return JournalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _journal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./journal.page */ "./src/app/journal/journal.page.ts");




const routes = [
    {
        path: '',
        component: _journal_page__WEBPACK_IMPORTED_MODULE_3__["JournalPage"],
    }
];
let JournalPageRoutingModule = class JournalPageRoutingModule {
};
JournalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], JournalPageRoutingModule);



/***/ }),

/***/ "./src/app/journal/journal.module.ts":
/*!*******************************************!*\
  !*** ./src/app/journal/journal.module.ts ***!
  \*******************************************/
/*! exports provided: JournalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalPageModule", function() { return JournalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _journal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./journal.page */ "./src/app/journal/journal.page.ts");
/* harmony import */ var _journal_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./journal-routing.module */ "./src/app/journal/journal-routing.module.ts");







let JournalPageModule = class JournalPageModule {
};
JournalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _journal_routing_module__WEBPACK_IMPORTED_MODULE_6__["JournalPageRoutingModule"],
        ],
        declarations: [_journal_page__WEBPACK_IMPORTED_MODULE_5__["JournalPage"]]
    })
], JournalPageModule);



/***/ }),

/***/ "./src/app/journal/journal.page.scss":
/*!*******************************************!*\
  !*** ./src/app/journal/journal.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuYWwvam91cm5hbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/journal/journal.page.ts":
/*!*****************************************!*\
  !*** ./src/app/journal/journal.page.ts ***!
  \*****************************************/
/*! exports provided: JournalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalPage", function() { return JournalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _journal_entry_journal_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../journal-entry/journal-entry.page */ "./src/app/journal-entry/journal-entry.page.ts");




let JournalPage = class JournalPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    presentJournEntryModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _journal_entry_journal_entry_page__WEBPACK_IMPORTED_MODULE_3__["JournalEntryPage"],
            });
            return yield modal.present();
        });
    }
    onChange($event) {
        console.log($event);
    }
};
JournalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
JournalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./journal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/journal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./journal.page.scss */ "./src/app/journal/journal.page.scss")).default]
    })
], JournalPage);



/***/ })

}]);
//# sourceMappingURL=journal-journal-module-es2015.js.map