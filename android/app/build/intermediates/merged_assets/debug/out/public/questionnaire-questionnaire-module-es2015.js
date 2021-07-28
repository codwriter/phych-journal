(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questionnaire-questionnaire-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen class=\"ion-padding\">\r\n  <ion-slides [options]=\"slideOpts\" #slides scrollbar=\"true\">\r\n    <ion-slide *ngFor=\"let question of questions.questions; let i = index;\">\r\n      <ion-list lines=\"none\">\r\n        <form [formGroup]=\"assesmentForm\" (ngSubmit)=\"onSubmit()\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col class=\"ion-align-self-center\">\r\n                <h3>Question {{i+1}} of {{questions.questions.length}}</h3>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col class=\"ion-align-self-center\">\r\n                <h3>{{question.questionText}}</h3>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col class=\"ion-align-self-center\">\r\n                <ion-label>How frequent is happening from 0 to 5?</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col class=\"ion-align-self-center\">\r\n                <ion-radio-group lines=\"none\" formControlName=\"frequency_answer\">\r\n                  <ion-row>\r\n                    <ion-col class=\"ion-align-self-center\">\r\n                      <ion-range min=\"0\" max=\"5\" snaps=\"true\" value=\"0\" pin=\"true\" ticks=\"true\"\r\n                        formControlName=\"frequency_answer\">\r\n                        <ion-label slot=\"start\">0</ion-label>\r\n                        <ion-label slot=\"end\">5</ion-label>\r\n                      </ion-range>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-radio-group>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"ion-padding\">\r\n              <ion-col class=\"ion-align-self-center\">\r\n                <ion-label>How intence did you feel it from 0 to 5?</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col class=\"ion-align-self-center\">\r\n                <ion-range min=\"0\" max=\"5\" snaps=\"true\" pin=\"true\" ticks=\"true\" value=\"0\"\r\n                  formControlName=\"intencity_answer\">\r\n                  <ion-label slot=\"start\">0</ion-label>\r\n                  <ion-label slot=\"end\">5</ion-label>\r\n                </ion-range>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-button class=\"ion-align-self-center\" shape=\"round\" type=\"submit\">\r\n              <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-grid>\r\n        </form>\r\n      </ion-list>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-label>Your Result is: {{result}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"ion-align-self-center\">\r\n            <ion-button shape=\"round\" (click)=\"finish()\">\r\n              <ion-icon name=\"checkmark-done-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button shape=\"round\" (click)=\"restart()\">\r\n              <ion-icon name=\"refresh-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/questionnaire/questionnaire-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/questionnaire/questionnaire-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: QuestionnairePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnairePageRoutingModule", function() { return QuestionnairePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _questionnaire_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questionnaire.page */ "./src/app/questionnaire/questionnaire.page.ts");




const routes = [
    {
        path: '',
        component: _questionnaire_page__WEBPACK_IMPORTED_MODULE_3__["QuestionnairePage"]
    }
];
let QuestionnairePageRoutingModule = class QuestionnairePageRoutingModule {
};
QuestionnairePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuestionnairePageRoutingModule);



/***/ }),

/***/ "./src/app/questionnaire/questionnaire.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.module.ts ***!
  \*******************************************************/
/*! exports provided: QuestionnairePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnairePageModule", function() { return QuestionnairePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questionnaire-routing.module */ "./src/app/questionnaire/questionnaire-routing.module.ts");
/* harmony import */ var _questionnaire_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questionnaire.page */ "./src/app/questionnaire/questionnaire.page.ts");







let QuestionnairePageModule = class QuestionnairePageModule {
};
QuestionnairePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionnairePageRoutingModule"]
        ],
        declarations: [_questionnaire_page__WEBPACK_IMPORTED_MODULE_6__["QuestionnairePage"]]
    })
], QuestionnairePageModule);



/***/ }),

/***/ "./src/app/questionnaire/questionnaire.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n  overflow-y: scroll;\n}\nion-slides ion-slide {\n  align-items: flex-start;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\nb {\n  font-weight: 500;\n}\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, grey);\n}\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25uYWlyZS9xdWVzdGlvbm5haXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSx1QkFBQTtBQUVKO0FBRUE7RUFDRSxjQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUFDRjtBQUVBO0VBQ0UscUNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ubmFpcmUvcXVlc3Rpb25uYWlyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGlvbi1zbGlkZSB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIGgyIHtcclxuICBtYXJnaW4tdG9wOiAyLjhyZW07XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiA2MHB4IDAgNDBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuYiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxucCB7XHJcbiAgcGFkZGluZzogMCA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIGdyZXkpO1xyXG59XHJcblxyXG5wIGIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/questionnaire/questionnaire.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.page.ts ***!
  \*****************************************************/
/*! exports provided: QuestionnairePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnairePage", function() { return QuestionnairePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_questions_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/questions.json */ "./src/app/shared/questions.json");
var _shared_questions_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../shared/questions.json */ "./src/app/shared/questions.json", 1);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");







let QuestionnairePage = class QuestionnairePage {
    constructor(storage, usrSrv, router, formBuilder) {
        this.storage = storage;
        this.usrSrv = usrSrv;
        this.router = router;
        this.formBuilder = formBuilder;
        this.questions = _shared_questions_json__WEBPACK_IMPORTED_MODULE_5__;
        this.frequency_answer = 0;
        this.intencity_answer = 0;
        this.result = 0;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            allowTouchMove: false,
        };
        this.assesmentForm = this.formBuilder.group({
            frequency_answer: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            intencity_answer: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.usrSrv.getUserInfo().then(user => this.user = user);
    }
    ngOnInit() {
    }
    nextSlide() {
        this.slides.slideNext();
    }
    ;
    onSubmit() {
        this.result += this.assesmentForm.value.frequency_answer + this.assesmentForm.value.intencity_answer;
        console.log(this.assesmentForm.value, this.result);
        this.assesmentForm.reset({
            frequency_answer: 0,
            intencity_answer: 0
        });
        this.nextSlide();
    }
    restart() {
        this.result = 0;
        this.slides.slideTo(0);
    }
    finish() {
        this.user.firstTestScore = this.result;
        if (this.result) {
            this.user.didTheInitialTest = true;
        }
        this.storage.set('user', this.user);
        this.router.navigateByUrl('/tabs/home');
    }
};
QuestionnairePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
QuestionnairePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slides',] }]
};
QuestionnairePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questionnaire',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./questionnaire.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./questionnaire.page.scss */ "./src/app/questionnaire/questionnaire.page.scss")).default]
    })
], QuestionnairePage);



/***/ }),

/***/ "./src/app/shared/questions.json":
/*!***************************************!*\
  !*** ./src/app/shared/questions.json ***!
  \***************************************/
/*! exports provided: questions, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"questions\":[{\"id\":0,\"questionText\":\"Feeling mechanical and 'robotic' when moving?\"},{\"id\":1,\"questionText\":\"Seeing oneself outside, as if looking in a mirror?\"},{\"id\":2,\"questionText\":\"Unable to feel properly things touched with hands?\"},{\"id\":3,\"questionText\":\"Urge to touch oneself to be reassured of body existence?\"},{\"id\":4,\"questionText\":\"Feeling of being outside the body?\"},{\"id\":5,\"questionText\":\"Body feels as if it didn't belong to self?\"},{\"id\":6,\"questionText\":\"Feeling of being a detached observer of oneself?\"},{\"id\":7,\"questionText\":\"Own voice sounds remote  and unreal?\"},{\"id\":8,\"questionText\":\"Body feels very light, as if it were floating on air?\"},{\"id\":9,\"questionText\":\"Smell of things no longer gives feeling of pleasure or dislike?\"},{\"id\":10,\"questionText\":\"Unable to feel hunger or thirst?\"},{\"id\":11,\"questionText\":\"Flavor of meals no longer gives feeling of pleasure or distaste?\"},{\"id\":12,\"questionText\":\"No emotions felt when weeping or laughing\"},{\"id\":13,\"questionText\":\"Unable to feel affection towards family and friends?\"},{\"id\":14,\"questionText\":\"Feeling of not having any thoughts at all?\"},{\"id\":15,\"questionText\":\"Personal memories feel as if one had not been involved in them?\"},{\"id\":16,\"questionText\":\"Recently done things feel as if they had taken place long time ago?\"},{\"id\":17,\"questionText\":\"Objects look smaller or further away?\"},{\"id\":18,\"questionText\":\"Unable to picture things in mind?\"},{\"id\":19,\"questionText\":\"When in a new situation, feeling as if it happened before?\"},{\"id\":20,\"questionText\":\"Feeling unreal or cut-off from the world\"},{\"id\":21,\"questionText\":\"Surroundings feel detached or unreal?\"},{\"id\":22,\"questionText\":\"Favourite activities no longer enjoyable?\"},{\"id\":23,\"questionText\":\"Things look flat, as if looking at a picture?\"}]}");

/***/ })

}]);
//# sourceMappingURL=questionnaire-questionnaire-module-es2015.js.map