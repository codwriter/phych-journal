(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journal-journal-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/journal-entry/journal-entry.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/journal-entry/journal-entry.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppJournalEntryJournalEntryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>journal-entry</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-label>\n  Let's see how much DP or DA are you!\n</ion-label>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/journal.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/journal/journal.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppJournalJournalPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">\n      Journal\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-list>\n        <ion-item></ion-item>\n      </ion-list>\n    </ion-row>\n   \n  </ion-grid>\n  <!-- fab placed to the (vertical) center and end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"presentJournEntryModal()\">\n      <ion-icon name=\"pencil-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/journal-entry/journal-entry.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/journal-entry/journal-entry.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppJournalEntryJournalEntryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuYWwtZW50cnkvam91cm5hbC1lbnRyeS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/journal-entry/journal-entry.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/journal-entry/journal-entry.page.ts ***!
      \*****************************************************/

    /*! exports provided: JournalEntryPage */

    /***/
    function srcAppJournalEntryJournalEntryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JournalEntryPage", function () {
        return JournalEntryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var JournalEntryPage = /*#__PURE__*/function () {
        function JournalEntryPage(modalCtrl) {
          _classCallCheck(this, JournalEntryPage);

          this.modalCtrl = modalCtrl;
        }

        _createClass(JournalEntryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
          }
        }]);

        return JournalEntryPage;
      }();

      JournalEntryPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      JournalEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journal-entry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./journal-entry.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/journal-entry/journal-entry.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./journal-entry.page.scss */
        "./src/app/journal-entry/journal-entry.page.scss"))["default"]]
      })], JournalEntryPage);
      /***/
    },

    /***/
    "./src/app/journal/journal-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/journal/journal-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: JournalPageRoutingModule */

    /***/
    function srcAppJournalJournalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JournalPageRoutingModule", function () {
        return JournalPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _journal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./journal.page */
      "./src/app/journal/journal.page.ts");

      var routes = [{
        path: '',
        component: _journal_page__WEBPACK_IMPORTED_MODULE_3__["JournalPage"]
      }];

      var JournalPageRoutingModule = function JournalPageRoutingModule() {
        _classCallCheck(this, JournalPageRoutingModule);
      };

      JournalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], JournalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/journal/journal.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/journal/journal.module.ts ***!
      \*******************************************/

    /*! exports provided: JournalPageModule */

    /***/
    function srcAppJournalJournalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JournalPageModule", function () {
        return JournalPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _journal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./journal.page */
      "./src/app/journal/journal.page.ts");
      /* harmony import */


      var _journal_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./journal-routing.module */
      "./src/app/journal/journal-routing.module.ts");

      var JournalPageModule = function JournalPageModule() {
        _classCallCheck(this, JournalPageModule);
      };

      JournalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _journal_routing_module__WEBPACK_IMPORTED_MODULE_6__["JournalPageRoutingModule"]],
        declarations: [_journal_page__WEBPACK_IMPORTED_MODULE_5__["JournalPage"]]
      })], JournalPageModule);
      /***/
    },

    /***/
    "./src/app/journal/journal.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/journal/journal.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppJournalJournalPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuYWwvam91cm5hbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/journal/journal.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/journal/journal.page.ts ***!
      \*****************************************/

    /*! exports provided: JournalPage */

    /***/
    function srcAppJournalJournalPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JournalPage", function () {
        return JournalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _journal_entry_journal_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../journal-entry/journal-entry.page */
      "./src/app/journal-entry/journal-entry.page.ts");

      var JournalPage = /*#__PURE__*/function () {
        function JournalPage(modalCtrl) {
          _classCallCheck(this, JournalPage);

          this.modalCtrl = modalCtrl;
        }

        _createClass(JournalPage, [{
          key: "presentJournEntryModal",
          value: function presentJournEntryModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _journal_entry_journal_entry_page__WEBPACK_IMPORTED_MODULE_3__["JournalEntryPage"]
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onChange",
          value: function onChange($event) {
            console.log($event);
          }
        }]);

        return JournalPage;
      }();

      JournalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      JournalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./journal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/journal.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./journal.page.scss */
        "./src/app/journal/journal.page.scss"))["default"]]
      })], JournalPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=journal-journal-module-es5.js.map