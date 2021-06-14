(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen class=\"ion-padding\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" #slides>\n    <ion-slide>\n      <ion-grid>\n        <div class=\"slide\">\n          <h2>Welcome</h2>\n          <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a\n            demonstration\n            of\n            proper code use.</p>\n        </div>\n        <ion-row>\n          <ion-col class=\"ion-align-self-center\">\n            <ion-item lines=\"none\">\n              <ion-label position=\"floating\">What is you name?</ion-label>\n              <ion-input required=\"true\" minlength=\"3\" name=\"username\" type=\"text\" [(ngModel)]=\"username\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-button  class=\"ion-align-self-center\" shape=\"round\" (click)=\"nextSlide()\">\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-grid>\n    </ion-slide>\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <h2>Do you want to do the quiostionnaire now?</h2>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button (click)=\"doQuestionnaire()\">Let's do it</ion-button>\n            <ion-button (click)=\"endIntro()\">Later</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "./src/app/intro/intro-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/intro/intro-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IntroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function() { return IntroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ "./src/app/intro/intro.module.ts":
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro-routing.module */ "./src/app/intro/intro-routing.module.ts");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"],
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })
], IntroPageModule);



/***/ }),

/***/ "./src/app/intro/intro.page.scss":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\nion-slides ion-slide {\n  align-items: flex-start;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\nb {\n  font-weight: 500;\n}\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, grey);\n}\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQUU7RUFDRyx1QkFBQTtBQUVMO0FBR0E7RUFDRSxjQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUFBRjtBQUdBO0VBQ0UscUNBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBpb24tc2xpZGV7XHJcbiAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUgaDIge1xyXG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDUwJTtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDYwcHggMCA0MHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5iIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5wIHtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgZ3JleSk7XHJcbn1cclxuXHJcbnAgYiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/intro/intro.page.ts":
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let IntroPage = class IntroPage {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.user = { username: '', firstTestScore: 0, didTheInitialTest: false, everyDayScore: [] };
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            allowTouchMove: false,
        };
    }
    ngOnInit() { }
    nextSlide() {
        this.slides.slideNext();
        this.user.username = this.username;
        this.storage.set('user', this.user);
    }
    ;
    endIntro() {
        this.router.navigateByUrl("tabs/home");
    }
    doQuestionnaire() {
        this.router.navigateByUrl('/questionnaire');
    }
};
IntroPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
IntroPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slides',] }]
};
IntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./intro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./intro.page.scss */ "./src/app/intro/intro.page.scss")).default]
    })
], IntroPage);



/***/ })

}]);
//# sourceMappingURL=intro-intro-module-es2015.js.map