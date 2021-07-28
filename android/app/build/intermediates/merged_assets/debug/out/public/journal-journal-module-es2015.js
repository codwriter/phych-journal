(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journal-journal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/journal.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/journal/journal.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">\r\n      Journal\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"presentPopover($event)\">\r\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Choose a Day to display: </ion-label>\r\n          <ion-datetime displayFormat=\"DDD DD, MMMM YY\" pickerFormat=\"DD MMMM YYYY\" [(ngModel)]=\"selectedDate\"\r\n            (ionChange)=\"logDay(1)\" value=\"{{selectedDate}}\" [pickerOptions]=\"customPickerOptions\">\r\n          </ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md=\"4\" *ngFor=\"let score of score\">\r\n        <ion-card (click)=\"presentJournalStatusModel(score)\">\r\n          <ion-card-header>\r\n            <ion-row>\r\n              <ion-col size=\"9\">\r\n                <ion-card-subtitle>Date: {{score.date|date:'medium'}}</ion-card-subtitle>\r\n                <ion-card-title>Score: {{score.score}}</ion-card-title>\r\n              </ion-col>\r\n              <ion-col size=\"3\">\r\n                <ion-avatar>\r\n                  <img src=\"{{moodSetImg(score.mood)}}\" />\r\n                </ion-avatar>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            {{score.comment}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-- fab placed to the (vertical) center and end -->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"presentJournalEntryModal()\">\r\n      <ion-icon name=\"pencil-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/popover/popover.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/journal/popover/popover.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list lines=\"none\">\n        <ion-item button detail (click)=\"openStatistics()\">\n                <ion-label>Statistics</ion-label>\n        </ion-item>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/journal-entry-modal/journal-entry-modal.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/journal-entry-modal/journal-entry-modal.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentAlert()\">\n        <ion-icon color=\"danger\" name=\"trash\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Journal Entry</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Score</ion-card-title>\n          </ion-card-header>\n          <ion-card-subtitle class='ion-padding'>Your score is: {{existedScore.score}}</ion-card-subtitle>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

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
/* harmony import */ var _shared_shortQuestions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shortQuestions */ "./src/app/shared/shortQuestions.ts");








let JournalPageModule = class JournalPageModule {
};
JournalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _journal_routing_module__WEBPACK_IMPORTED_MODULE_6__["JournalPageRoutingModule"],
        ],
        providers: [_shared_shortQuestions__WEBPACK_IMPORTED_MODULE_7__["surveyQuestions"]],
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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover/popover.component */ "./src/app/journal/popover/popover.component.ts");
/* harmony import */ var _modals_journal_entry_modal_journal_entry_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/journal-entry-modal/journal-entry-modal.component */ "./src/app/modals/journal-entry-modal/journal-entry-modal.component.ts");








let JournalPage = class JournalPage {
    constructor(modalCtrl, userSrv, toastController, popoverController) {
        this.modalCtrl = modalCtrl;
        this.userSrv = userSrv;
        this.toastController = toastController;
        this.popoverController = popoverController;
        this.user = { username: "", didTheInitialTest: false, everyDayScore: [], firstTestScore: 0 };
        this.userSrv.getUserInfo().then(user => this.user = user);
        this.logDay(0);
        this.customPickerOptions = {
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Done',
                    handler: (selected) => {
                        if (selected.month.value <= 10) {
                            selected.month.value = '0' + selected.month.value;
                        }
                        this.selectedDate = selected.year.value + '-' + selected.month.value + '-' + selected.day.value;
                        console.log(this.selectedDate);
                    }
                },
                {
                    text: 'Now',
                    handler: () => {
                        let date = new Date().toISOString().split("T");
                        this.selectedDate = date[0];
                    }
                }
            ]
        };
    }
    logDay(number) {
        switch (number) {
            case 0:
                let date = new Date().toISOString().split("T");
                this.selectedDate = date[0];
                this.score = this.userSrv.selectedDayLog(this.selectedDate);
                break;
            case 1:
                this.score = this.userSrv.selectedDayLog(this.selectedDate);
                break;
            default:
                break;
        }
    }
    ionViewWillEnter() {
        this.userSrv.getUserInfo().then(user => this.user = user);
        this.logDay(0);
    }
    ngOnInit() { }
    presentJournalEntryModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const journalModal = yield this.modalCtrl.create({
                component: _journal_entry_journal_entry_page__WEBPACK_IMPORTED_MODULE_3__["JournalEntryPage"],
                cssClass: 'my-custom-modal-css',
            });
            journalModal.present();
            var { data } = yield journalModal.onDidDismiss();
            if (data) {
                this.user.everyDayScore.push(data.score);
                this.userSrv.updateUserInfo(this.user);
                this.presentToast(data.score);
                this.logDay(0);
            }
        });
    }
    presentJournalStatusModel(score) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.score);
            const journalStatus = yield this.modalCtrl.create({
                component: _modals_journal_entry_modal_journal_entry_modal_component__WEBPACK_IMPORTED_MODULE_6__["JournalEntryModalComponent"],
                cssClass: 'my-custom-modal-css',
                componentProps: {
                    'existedScore': score
                }
            });
            journalStatus.present();
            if (this.selectedDate) {
                this.logDay(1);
            }
            else {
                this.logDay(0);
            }
            //onsole.log( this.score );
        });
    }
    presentToast(score) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Score',
                message: 'Your score is: ' + score.score,
                position: 'middle',
                duration: 2500
            });
            toast.present();
        });
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"],
                event: ev,
                translucent: true
            });
            yield popover.present();
        });
    }
    moodSetImg(mood) {
        mood = parseInt(mood);
        switch (mood) {
            case 0:
                return "assets/emojis/happy.png";
            case 1:
                return "assets/emojis/surprise.png";
            case 2:
                return "assets/emojis/sad.png";
            case 3:
                return "assets/emojis/anger.png";
            case 4:
                return "assets/emojis/fear.png";
            case 5:
                return "assets/emojis/disgust.png";
            case 6:
                return "assets/emojis/numb.png";
            default:
                return "assets/emojis/noEmotion.png";
        }
    }
};
JournalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
JournalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./journal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/journal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./journal.page.scss */ "./src/app/journal/journal.page.scss")).default]
    })
], JournalPage);



/***/ }),

/***/ "./src/app/journal/popover/popover.component.scss":
/*!********************************************************!*\
  !*** ./src/app/journal/popover/popover.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuYWwvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/journal/popover/popover.component.ts":
/*!******************************************************!*\
  !*** ./src/app/journal/popover/popover.component.ts ***!
  \******************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let PopoverComponent = class PopoverComponent {
    constructor(router, ctrlPopover) {
        this.router = router;
        this.ctrlPopover = ctrlPopover;
    }
    ngOnInit() { }
    openStatistics() {
        this.router.navigateByUrl('statistics');
        this.ctrlPopover.dismiss();
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/popover/popover.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover.component.scss */ "./src/app/journal/popover/popover.component.scss")).default]
    })
], PopoverComponent);



/***/ }),

/***/ "./src/app/modals/journal-entry-modal/journal-entry-modal.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modals/journal-entry-modal/journal-entry-modal.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9qb3VybmFsLWVudHJ5LW1vZGFsL2pvdXJuYWwtZW50cnktbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modals/journal-entry-modal/journal-entry-modal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modals/journal-entry-modal/journal-entry-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: JournalEntryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalEntryModalComponent", function() { return JournalEntryModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




let JournalEntryModalComponent = class JournalEntryModalComponent {
    constructor(modalCtrl, userSrvc, alertctrl) {
        this.modalCtrl = modalCtrl;
        this.userSrvc = userSrvc;
        this.alertctrl = alertctrl;
    }
    ngOnInit() { }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertctrl.create({
                cssClass: 'my-custom-class',
                header: 'Delete',
                message: 'Are you sure you want to delete this entry?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => { }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this.delete();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    delete() {
        this.userSrvc.deleteScore(this.existedScore);
        this.dismiss();
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
JournalEntryModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
JournalEntryModalComponent.propDecorators = {
    existedScore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
JournalEntryModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journal-entry-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./journal-entry-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/journal-entry-modal/journal-entry-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./journal-entry-modal.component.scss */ "./src/app/modals/journal-entry-modal/journal-entry-modal.component.scss")).default]
    })
], JournalEntryModalComponent);



/***/ })

}]);
//# sourceMappingURL=journal-journal-module-es2015.js.map