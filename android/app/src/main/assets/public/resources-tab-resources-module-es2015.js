(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resources-tab-resources-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resources-tab/resources.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resources-tab/resources.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">\r\n      Resources\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <div *ngIf=\"resources.podcasts\">\r\n      <ion-item-divider>\r\n        <ion-label>Podcasts</ion-label>\r\n      </ion-item-divider>\r\n      <div *ngFor=\"let podcast of resources.podcasts\">\r\n        <ion-item href=\"{{podcast.link}}\">\r\n          <ion-label>{{podcast.name}}</ion-label>\r\n          <!-- <ion-thumbnail slot=\"start\"><img src=\"{{BaseURL +podcast.img}}\" /></ion-thumbnail> -->\r\n          <ion-icon slot=\"start\" name=\"mic-outline\"></ion-icon>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"resources.books\">\r\n      <ion-item-divider>\r\n        <ion-label>Books</ion-label>\r\n      </ion-item-divider>\r\n      <div *ngFor=\"let book of resources.books\">\r\n        <ion-item  href=\"{{book.link}}\">\r\n          <ion-label>{{book.name}}</ion-label>\r\n            <ion-icon slot=\"start\" name=\"book-outline\"></ion-icon>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"resources.movies\">\r\n      <ion-item-divider lines=\"none\">\r\n        <ion-label>Movies</ion-label>\r\n      </ion-item-divider>\r\n      <div *ngFor=\"let movie of resources.movies\">\r\n        <ion-item  href=\"{{movie.link}}\">\r\n          <ion-label>{{movie.name}}</ion-label>\r\n          <ion-icon slot=\"start\" name=\"videocam-outline\"></ion-icon>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n  </ion-list>\r\n\r\n<!--   <div class=\"ion-padding\" *ngIf=\"errMess\">\r\n    <h2>Error</h2>\r\n    <h4>{{errMess}}</h4>\r\n  </div> -->\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/resources-tab/resources-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/resources-tab/resources-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ResourcesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPageRoutingModule", function() { return ResourcesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resources_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources.page */ "./src/app/resources-tab/resources.page.ts");




const routes = [
    {
        path: '',
        component: _resources_page__WEBPACK_IMPORTED_MODULE_3__["ResourcesPage"],
    }
];
let ResourcesPageRoutingModule = class ResourcesPageRoutingModule {
};
ResourcesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ResourcesPageRoutingModule);



/***/ }),

/***/ "./src/app/resources-tab/resources.module.ts":
/*!***************************************************!*\
  !*** ./src/app/resources-tab/resources.module.ts ***!
  \***************************************************/
/*! exports provided: ResourcesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPageModule", function() { return ResourcesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _resources_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources.page */ "./src/app/resources-tab/resources.page.ts");
/* harmony import */ var _resources_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources-routing.module */ "./src/app/resources-tab/resources-routing.module.ts");








let ResourcesPageModule = class ResourcesPageModule {
};
ResourcesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _resources_page__WEBPACK_IMPORTED_MODULE_6__["ResourcesPage"] }]),
            _resources_routing_module__WEBPACK_IMPORTED_MODULE_7__["ResourcesPageRoutingModule"],
        ],
        declarations: [_resources_page__WEBPACK_IMPORTED_MODULE_6__["ResourcesPage"]]
    })
], ResourcesPageModule);



/***/ }),

/***/ "./src/app/resources-tab/resources.page.scss":
/*!***************************************************!*\
  !*** ./src/app/resources-tab/resources.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlcy10YWIvcmVzb3VyY2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/resources-tab/resources.page.ts":
/*!*************************************************!*\
  !*** ./src/app/resources-tab/resources.page.ts ***!
  \*************************************************/
/*! exports provided: ResourcesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPage", function() { return ResourcesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/resources.service */ "./src/app/services/resources.service.ts");
/* harmony import */ var _shared_resources_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/resources.json */ "./src/app/shared/resources.json");
var _shared_resources_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../shared/resources.json */ "./src/app/shared/resources.json", 1);




let ResourcesPage = class ResourcesPage {
    constructor(resoursesservice, BaseURL) {
        this.resoursesservice = resoursesservice;
        this.BaseURL = BaseURL;
        this.resources = _shared_resources_json__WEBPACK_IMPORTED_MODULE_3__;
    }
    ngOnInit() {
        /*     this.resoursesservice.getPodcasts()
              .subscribe( podcasts => this.podcasts = podcasts,
                errmess => this.errMess = <any>errmess );
        
            this.resoursesservice.getBooks()
              .subscribe( books => this.books = books,
                errmess => this.errMess = <any>errmess );
        
            this.resoursesservice.getMovies()
              .subscribe( movies => this.movies = movies,
                errmess => this.errMess = <any>errmess );
         */
    }
};
ResourcesPage.ctorParameters = () => [
    { type: _services_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BaseURL',] }] }
];
ResourcesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resources',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resources.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resources-tab/resources.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resources.page.scss */ "./src/app/resources-tab/resources.page.scss")).default]
    })
], ResourcesPage);



/***/ }),

/***/ "./src/app/shared/resources.json":
/*!***************************************!*\
  !*** ./src/app/shared/resources.json ***!
  \***************************************/
/*! exports provided: podcasts, movies, books, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"podcasts\":[{\"id\":\"0\",\"name\":\"The anxious truth - EP 0017\",\"img\":\"images/podcast.png\",\"link\":\"https://open.spotify.com/episode/16Dhi3wmoW5COhT2QFA4YS?si=obTDxr1_Q-6SYXuphOXqHQ\"},{\"id\":\"1\",\"name\":\"The anxious truth - EP 0018\",\"img\":\"images/podcast.png\",\"link\":\"https://open.spotify.com/episode/2TmhEhkvMZRDgE0cmK6ieW?si=hbXlBRfXStyUF9Lj2gt_Fg\"},{\"id\":\"2\",\"name\":\"Depersonalization and Anxiety - A symptom or something else?\",\"img\":\"images/podcast.png\",\"link\":\"https://open.spotify.com/episode/7yZoWMIvM98PjqeqAvfrsg?si=0MHDdkYiR2OFEG4Er0nmXQ\"}],\"movies\":[{\"id\":\"0\",\"name\":\"The Numb\",\"link\":\" https://www.imdb.com/title/tt0795439/\"}],\"books\":[{\"id\":\"0\",\"name\":\"Feeling Unreal: Depersonalization Disorder and the Loss of the Self \",\"writer\":\"Jeffrey Abugel\",\"link\":\"https://www.amazon.com/Feeling-Unreal-Depersonalization-Disorder-Loss/dp/0195385217/ref=sr_1_1?dchild=1&keywords=feeling+unreal&qid=1611685823&sr=8-1\"}]}");

/***/ })

}]);
//# sourceMappingURL=resources-tab-resources-module-es2015.js.map