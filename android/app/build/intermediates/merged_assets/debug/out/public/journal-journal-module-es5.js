(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journal-journal-module"], {
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


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">\r\n      Journal\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"presentPopover($event)\">\r\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Choose a Day to display: </ion-label>\r\n          <ion-datetime displayFormat=\"DDD DD, MMMM YY\" pickerFormat=\"DD MMMM YYYY\" [(ngModel)]=\"selectedDate\"\r\n            (ionChange)=\"logDay(1)\" value=\"{{selectedDate}}\" [pickerOptions]=\"customPickerOptions\">\r\n          </ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md=\"4\" *ngFor=\"let score of score\">\r\n        <ion-card (click)=\"presentJournalStatusModel(score)\">\r\n          <ion-card-header>\r\n            <ion-row>\r\n              <ion-col size=\"9\">\r\n                <ion-card-subtitle>Date: {{score.date|date:'medium'}}</ion-card-subtitle>\r\n                <ion-card-title>Score: {{score.score}}</ion-card-title>\r\n              </ion-col>\r\n              <ion-col size=\"3\">\r\n                <ion-avatar>\r\n                  <img src=\"{{moodSetImg(score.mood)}}\" />\r\n                </ion-avatar>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            {{score.comment}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-- fab placed to the (vertical) center and end -->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"presentJournalEntryModal()\">\r\n      <ion-icon name=\"pencil-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/popover/popover.component.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/journal/popover/popover.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppJournalPopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list lines=\"none\">\n        <ion-item button detail (click)=\"openStatistics()\">\n                <ion-label>Statistics</ion-label>\n        </ion-item>\n</ion-list>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/journal-entry-modal/journal-entry-modal.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/journal-entry-modal/journal-entry-modal.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModalsJournalEntryModalJournalEntryModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentAlert()\">\n        <ion-icon color=\"danger\" name=\"trash\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Journal Entry</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Score</ion-card-title>\n          </ion-card-header>\n          <ion-card-subtitle class='ion-padding'>Your score is: {{existedScore.score}}</ion-card-subtitle>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
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
      /* harmony import */


      var _shared_shortQuestions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shortQuestions */
      "./src/app/shared/shortQuestions.ts");

      var JournalPageModule = function JournalPageModule() {
        _classCallCheck(this, JournalPageModule);
      };

      JournalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _journal_routing_module__WEBPACK_IMPORTED_MODULE_6__["JournalPageRoutingModule"]],
        providers: [_shared_shortQuestions__WEBPACK_IMPORTED_MODULE_7__["surveyQuestions"]],
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
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./popover/popover.component */
      "./src/app/journal/popover/popover.component.ts");
      /* harmony import */


      var _modals_journal_entry_modal_journal_entry_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modals/journal-entry-modal/journal-entry-modal.component */
      "./src/app/modals/journal-entry-modal/journal-entry-modal.component.ts");

      var JournalPage = /*#__PURE__*/function () {
        function JournalPage(modalCtrl, userSrv, toastController, popoverController) {
          var _this = this;

          _classCallCheck(this, JournalPage);

          this.modalCtrl = modalCtrl;
          this.userSrv = userSrv;
          this.toastController = toastController;
          this.popoverController = popoverController;
          this.user = {
            username: "",
            didTheInitialTest: false,
            everyDayScore: [],
            firstTestScore: 0
          };
          this.userSrv.getUserInfo().then(function (user) {
            return _this.user = user;
          });
          this.logDay(0);
          this.customPickerOptions = {
            buttons: [{
              text: 'Cancel'
            }, {
              text: 'Done',
              handler: function handler(selected) {
                if (selected.month.value <= 10) {
                  selected.month.value = '0' + selected.month.value;
                }

                _this.selectedDate = selected.year.value + '-' + selected.month.value + '-' + selected.day.value;
                console.log(_this.selectedDate);
              }
            }, {
              text: 'Now',
              handler: function handler() {
                var date = new Date().toISOString().split("T");
                _this.selectedDate = date[0];
              }
            }]
          };
        }

        _createClass(JournalPage, [{
          key: "logDay",
          value: function logDay(number) {
            switch (number) {
              case 0:
                var date = new Date().toISOString().split("T");
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
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.userSrv.getUserInfo().then(function (user) {
              return _this2.user = user;
            });
            this.logDay(0);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentJournalEntryModal",
          value: function presentJournalEntryModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var journalModal, _yield$journalModal$o, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _journal_entry_journal_entry_page__WEBPACK_IMPORTED_MODULE_3__["JournalEntryPage"],
                        cssClass: 'my-custom-modal-css'
                      });

                    case 2:
                      journalModal = _context.sent;
                      journalModal.present();
                      _context.next = 6;
                      return journalModal.onDidDismiss();

                    case 6:
                      _yield$journalModal$o = _context.sent;
                      data = _yield$journalModal$o.data;

                      if (data) {
                        this.user.everyDayScore.push(data.score);
                        this.userSrv.updateUserInfo(this.user);
                        this.presentToast(data.score);
                        this.logDay(0);
                      }

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentJournalStatusModel",
          value: function presentJournalStatusModel(score) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var journalStatus;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(this.score);
                      _context2.next = 3;
                      return this.modalCtrl.create({
                        component: _modals_journal_entry_modal_journal_entry_modal_component__WEBPACK_IMPORTED_MODULE_6__["JournalEntryModalComponent"],
                        cssClass: 'my-custom-modal-css',
                        componentProps: {
                          'existedScore': score
                        }
                      });

                    case 3:
                      journalStatus = _context2.sent;
                      journalStatus.present();

                      if (this.selectedDate) {
                        this.logDay(1);
                      } else {
                        this.logDay(0);
                      } //onsole.log( this.score );


                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(score) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        header: 'Score',
                        message: 'Your score is: ' + score.score,
                        position: 'middle',
                        duration: 2500
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentPopover",
          value: function presentPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var popover;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.popoverController.create({
                        component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"],
                        event: ev,
                        translucent: true
                      });

                    case 2:
                      popover = _context4.sent;
                      _context4.next = 5;
                      return popover.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "moodSetImg",
          value: function moodSetImg(mood) {
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
        }]);

        return JournalPage;
      }();

      JournalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
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
    },

    /***/
    "./src/app/journal/popover/popover.component.scss":
    /*!********************************************************!*\
      !*** ./src/app/journal/popover/popover.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppJournalPopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuYWwvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/journal/popover/popover.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/journal/popover/popover.component.ts ***!
      \******************************************************/

    /*! exports provided: PopoverComponent */

    /***/
    function srcAppJournalPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
        return PopoverComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var PopoverComponent = /*#__PURE__*/function () {
        function PopoverComponent(router, ctrlPopover) {
          _classCallCheck(this, PopoverComponent);

          this.router = router;
          this.ctrlPopover = ctrlPopover;
        }

        _createClass(PopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openStatistics",
          value: function openStatistics() {
            this.router.navigateByUrl('statistics');
            this.ctrlPopover.dismiss();
          }
        }]);

        return PopoverComponent;
      }();

      PopoverComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }];
      };

      PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./popover.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/popover/popover.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./popover.component.scss */
        "./src/app/journal/popover/popover.component.scss"))["default"]]
      })], PopoverComponent);
      /***/
    },

    /***/
    "./src/app/modals/journal-entry-modal/journal-entry-modal.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/modals/journal-entry-modal/journal-entry-modal.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModalsJournalEntryModalJournalEntryModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9qb3VybmFsLWVudHJ5LW1vZGFsL2pvdXJuYWwtZW50cnktbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modals/journal-entry-modal/journal-entry-modal.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/modals/journal-entry-modal/journal-entry-modal.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: JournalEntryModalComponent */

    /***/
    function srcAppModalsJournalEntryModalJournalEntryModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JournalEntryModalComponent", function () {
        return JournalEntryModalComponent;
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


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");

      var JournalEntryModalComponent = /*#__PURE__*/function () {
        function JournalEntryModalComponent(modalCtrl, userSrvc, alertctrl) {
          _classCallCheck(this, JournalEntryModalComponent);

          this.modalCtrl = modalCtrl;
          this.userSrvc = userSrvc;
          this.alertctrl = alertctrl;
        }

        _createClass(JournalEntryModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertctrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Delete',
                        message: 'Are you sure you want to delete this entry?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {}
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            _this3["delete"]();
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "delete",
          value: function _delete() {
            this.userSrvc.deleteScore(this.existedScore);
            this.dismiss();
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
          }
        }]);

        return JournalEntryModalComponent;
      }();

      JournalEntryModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      JournalEntryModalComponent.propDecorators = {
        existedScore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      JournalEntryModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journal-entry-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./journal-entry-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/journal-entry-modal/journal-entry-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./journal-entry-modal.component.scss */
        "./src/app/modals/journal-entry-modal/journal-entry-modal.component.scss"))["default"]]
      })], JournalEntryModalComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=journal-journal-module-es5.js.map