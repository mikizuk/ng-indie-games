(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\daxte\Webdev\ng-indie-games\src\main.ts */"zUnb");


/***/ }),

/***/ "7J5v":
/*!*****************************************************************!*\
  !*** ./src/app/components/indie-games/indie-games.component.ts ***!
  \*****************************************************************/
/*! exports provided: IndieGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndieGamesComponent", function() { return IndieGamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_indie_games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/indie-games.service */ "OOTw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class IndieGamesComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    ngOnDestroy() {
        this.gamesService.games$.unsubscribe();
    }
}
IndieGamesComponent.ɵfac = function IndieGamesComponent_Factory(t) { return new (t || IndieGamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_indie_games_service__WEBPACK_IMPORTED_MODULE_1__["IndieGamesService"])); };
IndieGamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndieGamesComponent, selectors: [["app-indie-games"]], decls: 22, vars: 0, consts: [[1, "header"], [1, "header__title"], [1, "nav"], ["routerLink", "/game-list", "routerLinkActive", "router-link-active", 1, "nav__item"], ["routerLink", "/game-add", "routerLinkActive", "router-link-active", 1, "nav__item"], ["role", "main", 1, "main-container"], [1, "footer"], [1, "footer__link-title"], ["href", "https://github.com/daxtersky/ng-indie-games", "target", "_blank", "rel", "noopener", 1, "footer__link-item"], ["href", "https://github.com/daxtersky", "target", "_blank", "rel", "noopener", 1, "footer__link-item"], ["alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677", 1, "svg-clouds"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#1976d2"]], template: function IndieGamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Free indie games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add new game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "main", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Link to\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "project repo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Github profile\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "daxtersky");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  padding: 0 16px;\n}\n\n.header[_ngcontent-%COMP%]   .header__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  -webkit-text-decoration: solid;\n          text-decoration: solid;\n  text-transform: uppercase;\n  color: #ffe721;\n  font-weight: 800;\n}\n\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%] {\n  height: 100%;\n  align-items: center;\n  display: flex;\n  color: white;\n  padding: 16px;\n  text-decoration: none;\n}\n\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: red;\n  text-decoration: underline;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  padding: 0 16px;\n  flex-direction: column;\n  align-items: center;\n}\n\nfooter[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n}\n\nfooter[_ngcontent-%COMP%]   .footer__link-item[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .footer__link-title[_ngcontent-%COMP%] {\n  color: white;\n}\n\nfooter[_ngcontent-%COMP%]   .footer__link-item[_ngcontent-%COMP%] {\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\nfooter[_ngcontent-%COMP%]   .footer__link-item[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: red;\n}\n\n.svg-clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmRpZS1nYW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBL0JGOztBQWlDRTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUEvQko7O0FBa0NFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBaENKOztBQWlDSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBL0JOOztBQWdDTTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUE5QlI7O0FBcUNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWxDRjs7QUF1Q0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBcENGOztBQXFDRTs7RUFFRSxZQUFBO0FBbkNKOztBQXNDRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUFwQ0o7O0FBcUNJO0VBQ0UsMEJBQUE7RUFDQSxVQUFBO0FBbkNOOztBQXdDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBckNGIiwiZmlsZSI6ImluZGllLWdhbWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUldEXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC8vIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluayksXG4gIC8vIC50ZXJtaW5hbCB7XG4gIC8vICAgd2lkdGg6IDEwMCU7XG4gIC8vIH1cblxuICAvLyAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gIC8vICAgaGVpZ2h0OiAxNnB4O1xuICAvLyAgIG1hcmdpbjogOHB4IDA7XG4gIC8vIH1cblxuICAvLyAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgLy8gICBtYXJnaW4tbGVmdDogNzJweDtcbiAgLy8gfVxuXG4gIC8vIHN2ZyNyb2NrZXQtc21va2Uge1xuICAvLyAgIHJpZ2h0OiAxMjBweDtcbiAgLy8gICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIC8vIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLy8gc3ZnI3JvY2tldC1zbW9rZSB7XG4gIC8vICAgZGlzcGxheTogbm9uZTtcbiAgLy8gICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC8vIH1cbn1cblxuLy8gSEVBREVSXG5cbjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwIDE2cHg7XG5cbiAgLmhlYWRlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHNvbGlkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNmZmU3MjE7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuXG4gIC5uYXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgLm5hdl9faXRlbSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gTUFJTlxuLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vIEZPT1RFUlxuXG5mb290ZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuZm9vdGVyX19saW5rLWl0ZW0sXG4gIC5mb290ZXJfX2xpbmstdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyBjb2xvcjogIzE5NzZkMjtcbiAgfVxuICAuZm9vdGVyX19saW5rLWl0ZW0ge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgfVxufVxuXG4uc3ZnLWNsb3VkcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAtMTYwcHg7XG4gIGxlZnQ6IC0yMzBweDtcbiAgei1pbmRleDogLTEwO1xuICB3aWR0aDogMTkyMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BCX7":
/*!*************************************************************!*\
  !*** ./src/app/components/game-item/game-item.component.ts ***!
  \*************************************************************/
/*! exports provided: GameItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameItemComponent", function() { return GameItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_indie_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/indie-games.service */ "OOTw");
/* harmony import */ var _game_form_game_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-form/game-form.component */ "u3/M");




class GameItemComponent {
    constructor(router, route, gamesService) {
        this.router = router;
        this.route = route;
        this.gamesService = gamesService;
        this.eventType = 1 /* Update */;
        this.onSubmitClick = (game) => {
            this.gamesService.updateGame(game);
            this.router.navigate(['/indie-games-list']);
        };
        this.onDeleteClick = (gameId) => {
            var _a;
            if (gameId && confirm(`Do you want to delete ${(_a = this.game) === null || _a === void 0 ? void 0 : _a.title}?`)) {
                this.gamesService.deleteGame(gameId);
                this.router.navigate(['/indie-games-list']);
            }
        };
    }
    ngOnInit() {
        const gameId = +(this.route.snapshot.paramMap.get('id') || 0);
        this.gamesService.readGame(gameId);
        this.gamesService.game$
            .subscribe({
            next: (game) => this.game = game,
            error: err => console.log(err)
        });
    }
}
GameItemComponent.ɵfac = function GameItemComponent_Factory(t) { return new (t || GameItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_indie_games_service__WEBPACK_IMPORTED_MODULE_2__["IndieGamesService"])); };
GameItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameItemComponent, selectors: [["app-game-item"]], decls: 7, vars: 3, consts: [[3, "eventType", "game", "formSubmit"], ["routerLink", "/game-list", "routerLinkActive", "router-link-active"], [3, "click"]], template: function GameItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-game-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmit", function GameItemComponent_Template_app_game_form_formSubmit_2_listener($event) { return ctx.onSubmitClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameItemComponent_Template_button_click_5_listener() { return ctx.onDeleteClick(ctx.game == null ? null : ctx.game.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.game == null ? null : ctx.game.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("eventType", ctx.eventType)("game", ctx.game);
    } }, directives: [_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_3__["GameFormComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Dkxp":
/*!********************************************!*\
  !*** ./src/app/utils/indie-games.utils.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
class Utils {
}
Utils.getRandomId = () => Math.floor((Math.random() * 100) + 1);


/***/ }),

/***/ "JzmT":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "OOTw":
/*!************************************************!*\
  !*** ./src/app/service/indie-games.service.ts ***!
  \************************************************/
/*! exports provided: IndieGamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndieGamesService", function() { return IndieGamesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _utils_indie_games_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/indie-games.utils */ "Dkxp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class IndieGamesService {
    constructor() {
        this.games$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.game$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.gamesSuggested = [
            { id: 1, title: 'Disco Elysium', previewImageUrl: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fdisco-elysium%2Fhome%2FEGS_DiscoElysium_ZAUM_S2-1200x1600-6280f1147761adcaefd5bae77dc686b6d21c39e0.jpg', itemUrl: 'https://store.steampowered.com/app/632470/Disco_Elysium/', author: 'ZA/UM', email: 'email@placeholder.com' },
            { id: 2, title: 'Untitled Goose Game', previewImageUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202009/0405/GO4TUY9mA2UNJ54R0NPEEEBf.png', itemUrl: 'https://goose.game/', author: 'House House', email: 'email@placeholder.com' },
            { id: 3, title: 'The Witness', previewImageUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/210970/capsule_616x353.jpg?t=1598383120', itemUrl: 'https://store.steampowered.com/app/210970/The_Witness/', author: 'Thekla', email: 'email@placeholder.com' },
            { id: 4, title: 'Inside', previewImageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/50/INSIDE_Xbox_One_cover_art.png/220px-INSIDE_Xbox_One_cover_art.png', itemUrl: 'https://store.steampowered.com/app/304430/INSIDE/', author: 'Playdead', email: 'email@placeholder.com' },
            { id: 5, title: 'Into The Beach', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/590380/ss_4ba0a0a7ff01b0d2d1d840fcb8b0b570a7ed69f7.1920x1080.jpg?t=1589331288', itemUrl: 'https://store.steampowered.com/app/590380/Into_the_Breach/', author: 'Subset Games', email: 'email@placeholder.com' },
            { id: 6, title: 'Hotline Miami', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/219150/ss_263387d83df0626c58a484baa8f78f9394074b76.1920x1080.jpg?t=1603501662', itemUrl: 'https://store.steampowered.com/agecheck/app/219150/', author: 'Dennaton Games', email: 'email@placeholder.com' },
            { id: 7, title: 'Stardew Valley', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1608624324', itemUrl: 'https://store.steampowered.com/app/413150/Stardew_Valley/', author: 'ConcernedApe', email: 'email@placeholder.com' },
            { id: 8, title: 'Gone Home', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/232430/capsule_616x353.jpg?t=1589995154', itemUrl: 'https://store.steampowered.com/app/232430/Gone_Home/', author: 'Fullbright', email: 'email@placeholder.com' },
            { id: 9, title: 'Valheim', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/892970/capsule_616x353.jpg?t=1614337517', itemUrl: 'https://store.steampowered.com/app/892970/Valheim/', author: 'Iron Gate AB', email: 'email@placeholder.com' },
            { id: 10, title: 'Don\'t Starve', previewImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg?t=1602117150', itemUrl: 'https://store.steampowered.com/app/219740/Dont_Starve/', author: 'Klei Entertainment', email: 'email@placeholder.com' },
            { id: 11, title: 'Bastion', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/107100/ss_490170c42afe389fb80324b5c29f9b704d87943e.1920x1080.jpg?t=1601950406', itemUrl: 'https://store.steampowered.com/app/107100/Bastion/', author: 'Supergiant Games', email: 'email@placeholder.com' },
            { id: 12, title: 'FEZ', previewImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Fez_%28video_game%29_cover_art.png', itemUrl: 'https://fez.fandom.com/wiki/FEZ_Wiki', author: 'Polytron Corp', email: 'email@placeholder.com' },
            { id: 13, title: 'Spelunky', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/239350/capsule_616x353.jpg?t=1569449064', itemUrl: 'https://store.steampowered.com/app/239350/Spelunky/', author: 'Mossmouth', email: 'email@placeholder.com' },
            { id: 14, title: 'Dead Cells', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg?t=1613038574', itemUrl: 'https://store.steampowered.com/app/588650/Dead_Cells/', author: 'Motion Twin', email: 'email@placeholder.com' },
            { id: 15, title: 'Limbo', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/48000/ss_a62bc173abb93fbc12dbb6b8d366524a43c1356f.1920x1080.jpg?t=1587371146', itemUrl: 'https://store.steampowered.com/app/48000/LIMBO/', author: 'Playdead', email: 'email@placeholder.com' },
            { id: 16, title: 'Braid', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/26800/0000007901.1920x1080.jpg?t=1515716884', itemUrl: 'https://store.steampowered.com/app/26800/Braid/', author: 'Number None', email: 'email@placeholder.com' },
            { id: 17, title: 'Super Meat Boy', previewImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/40800/header.jpg?t=1579204284', itemUrl: 'https://store.steampowered.com/app/40800/Super_Meat_Boy/', author: 'Team Meat', email: 'email@placeholder.com' },
            { id: 18, title: 'Dear Esther', previewImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/203810/capsule_616x353.jpg?t=1523040923', itemUrl: 'https://store.steampowered.com/app/203810/Dear_Esther/', author: 'The Chinese Room', email: 'email@placeholder.com' },
        ];
        this.createGame = (newGame) => {
            newGame.id = this.getUniqueId();
            this.games$.next([...this.games$.getValue(), newGame]);
            this.updateLocalStorage();
        };
        this.readGame = (id) => this.game$.next(this.games$.getValue().find(game => game.id === id));
        this.updateGame = (gameUpdated) => {
            this.games$.next(this.games$.getValue().map(item => item.id === gameUpdated.id ? gameUpdated : item));
            this.updateLocalStorage();
        };
        this.deleteGame = (id) => {
            this.games$.next(this.games$.getValue().filter(game => game.id !== id));
            this.updateLocalStorage();
        };
        this.getUniqueId = () => {
            const actualGamesIds = this.games$.getValue().map(game => game.id);
            const randomId = _utils_indie_games_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getRandomId();
            if (actualGamesIds.includes(randomId)) {
                return this.getUniqueId();
            }
            else {
                return randomId;
            }
        };
        this.getGamesFromLocalStorage = () => {
            this.games$.next(JSON.parse(sessionStorage === null || sessionStorage === void 0 ? void 0 : sessionStorage.getItem('indie-games')));
        };
        this.updateLocalStorage = () => {
            sessionStorage.setItem('indie-games', JSON.stringify(this.games$.getValue()));
        };
        this.handleGames = () => {
            var _a;
            if ((_a = sessionStorage.getItem('indie-games')) === null || _a === void 0 ? void 0 : _a.length) {
                this.getGamesFromLocalStorage();
            }
            else {
                this.games$.next(this.gamesSuggested);
            }
        };
        this.handleGames();
    }
}
IndieGamesService.ɵfac = function IndieGamesService_Factory(t) { return new (t || IndieGamesService)(); };
IndieGamesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: IndieGamesService, factory: IndieGamesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_indie_games_indie_games_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/indie-games/indie-games.component */ "7J5v");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-indie-games");
    } }, directives: [_components_indie_games_indie_games_component__WEBPACK_IMPORTED_MODULE_1__["IndieGamesComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_indie_games_indie_games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/indie-games/indie-games.component */ "7J5v");
/* harmony import */ var _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/game-list/game-list.component */ "yuyA");
/* harmony import */ var _components_game_item_game_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/game-item/game-item.component */ "BCX7");
/* harmony import */ var _service_indie_games_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/indie-games.service */ "OOTw");
/* harmony import */ var _components_game_add_game_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/game-add/game-add.component */ "pO5Z");
/* harmony import */ var _components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/game-form/game-form.component */ "u3/M");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");

// ROUTING

// REACTIVE FORMS

// COMPONENTS




// PROVIDERS





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_service_indie_games_service__WEBPACK_IMPORTED_MODULE_7__["IndieGamesService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_indie_games_indie_games_component__WEBPACK_IMPORTED_MODULE_4__["IndieGamesComponent"],
        _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_5__["GameListComponent"],
        _components_game_item_game_item_component__WEBPACK_IMPORTED_MODULE_6__["GameItemComponent"],
        _components_game_add_game_add_component__WEBPACK_IMPORTED_MODULE_8__["GameAddComponent"],
        _components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_9__["GameFormComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "pO5Z":
/*!***********************************************************!*\
  !*** ./src/app/components/game-add/game-add.component.ts ***!
  \***********************************************************/
/*! exports provided: GameAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameAddComponent", function() { return GameAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_indie_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/indie-games.service */ "OOTw");
/* harmony import */ var _game_form_game_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-form/game-form.component */ "u3/M");




class GameAddComponent {
    constructor(router, gamesService) {
        this.router = router;
        this.gamesService = gamesService;
        this.eventType = 0 /* Add */;
        this.onSubmitClick = (newGame) => {
            this.gamesService.createGame(newGame);
            this.router.navigate(['/indie-games-list']);
        };
    }
    ngOnInit() {
    }
}
GameAddComponent.ɵfac = function GameAddComponent_Factory(t) { return new (t || GameAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_indie_games_service__WEBPACK_IMPORTED_MODULE_2__["IndieGamesService"])); };
GameAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameAddComponent, selectors: [["app-game-add"]], decls: 5, vars: 1, consts: [[3, "eventType", "formSubmit"], ["routerLink", "/game-list", "routerLinkActive", "router-link-active"]], template: function GameAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add game!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-game-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmit", function GameAddComponent_Template_app_game_form_formSubmit_2_listener($event) { return ctx.onSubmitClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("eventType", ctx.eventType);
    } }, directives: [_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_3__["GameFormComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLWFkZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "u3/M":
/*!*************************************************************!*\
  !*** ./src/app/components/game-form/game-form.component.ts ***!
  \*************************************************************/
/*! exports provided: GameFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFormComponent", function() { return GameFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class GameFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.eventType = 0 /* Add */;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buttonCaption = '';
        this.formGroup = this.formBuilder.group({
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            id: [null],
            previewImageUrl: [null],
            itemUrl: [null],
            author: [null],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
        });
        this.submitClick = () => {
            var _a, _b, _c, _d, _e, _f;
            const gameEvent = {
                eventType: this.eventType,
                id: (_a = this.formGroup.get('id')) === null || _a === void 0 ? void 0 : _a.value,
                title: (_b = this.formGroup.get('title')) === null || _b === void 0 ? void 0 : _b.value,
                previewImageUrl: (_c = this.formGroup.get('previewImageUrl')) === null || _c === void 0 ? void 0 : _c.value,
                itemUrl: (_d = this.formGroup.get('itemUrl')) === null || _d === void 0 ? void 0 : _d.value,
                author: (_e = this.formGroup.get('author')) === null || _e === void 0 ? void 0 : _e.value,
                email: (_f = this.formGroup.get('email')) === null || _f === void 0 ? void 0 : _f.value
            };
            this.formSubmit.emit(gameEvent);
        };
        this.handleButtonType = () => {
            if (this.eventType === 0 /* Add */) {
                this.buttonCaption = 'Add game';
            }
            else if (this.eventType === 1 /* Update */) {
                this.buttonCaption = 'Update game';
            }
        };
        this.handleFormData = () => {
            var _a, _b, _c, _d, _e, _f;
            this.formGroup.patchValue({
                title: (_a = this.game) === null || _a === void 0 ? void 0 : _a.title,
                id: (_b = this.game) === null || _b === void 0 ? void 0 : _b.id,
                previewImageUrl: (_c = this.game) === null || _c === void 0 ? void 0 : _c.previewImageUrl,
                itemUrl: (_d = this.game) === null || _d === void 0 ? void 0 : _d.itemUrl,
                author: (_e = this.game) === null || _e === void 0 ? void 0 : _e.author,
                email: (_f = this.game) === null || _f === void 0 ? void 0 : _f.email,
            });
        };
    }
    ngOnInit() {
        this.handleButtonType();
        this.handleFormData();
    }
}
GameFormComponent.ɵfac = function GameFormComponent_Factory(t) { return new (t || GameFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
GameFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameFormComponent, selectors: [["app-game-form"]], inputs: { eventType: "eventType", game: "game" }, outputs: { formSubmit: "formSubmit" }, decls: 21, vars: 5, consts: [[1, "game-form-container", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "title"], ["type", "text", "formControlName", "author"], ["type", "text", "formControlName", "email"], ["type", "text", "formControlName", "previewImageUrl"], ["height", "300", "alt", "", 3, "src"], ["target", "_blank", 3, "href"], ["type", "text", "formControlName", "itemUrl"], ["type", "submit", 3, "disabled"]], template: function GameFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GameFormComponent_Template_form_ngSubmit_0_listener() { return ctx.submitClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Author ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Link to game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (tmp_1_0 = ctx.formGroup.get("previewImageUrl")) == null ? null : tmp_1_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", (tmp_2_0 = ctx.formGroup.get("itemUrl")) == null ? null : tmp_2_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.pristine || !ctx.formGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonCaption);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".game-form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJnYW1lLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS1mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game-list/game-list.component */ "yuyA");
/* harmony import */ var _components_game_item_game_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game-item/game-item.component */ "BCX7");
/* harmony import */ var _components_game_add_game_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/game-add/game-add.component */ "pO5Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', redirectTo: 'game-list', pathMatch: 'full' },
    { path: 'game-list', component: _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_1__["GameListComponent"] },
    { path: 'game-item/:id', component: _components_game_item_game_item_component__WEBPACK_IMPORTED_MODULE_2__["GameItemComponent"] },
    { path: 'game-add', component: _components_game_add_game_add_component__WEBPACK_IMPORTED_MODULE_3__["GameAddComponent"] },
    // { path: '404', component: PageNotFoundComponent },
    { path: '**', component: _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_1__["GameListComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yuyA":
/*!*************************************************************!*\
  !*** ./src/app/components/game-list/game-list.component.ts ***!
  \*************************************************************/
/*! exports provided: GameListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameListComponent", function() { return GameListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_indie_games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/indie-games.service */ "OOTw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function GameListComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/game-item/", game_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r2.title);
} }
function GameListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No games in your list? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add your first game now!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GameListComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
        this.games = [];
    }
    ngOnInit() {
        this.gamesService.games$
            .subscribe({
            next: (games) => this.games = games,
            error: err => console.log(err)
        });
    }
}
GameListComponent.ɵfac = function GameListComponent_Factory(t) { return new (t || GameListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_indie_games_service__WEBPACK_IMPORTED_MODULE_1__["IndieGamesService"])); };
GameListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameListComponent, selectors: [["app-game-list"]], decls: 5, vars: 2, consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], ["routerLinkActive", "router-link-active", 1, "game-item", 3, "routerLink"], ["routerLink", "/game-add", "routerLinkActive", "router-link-active", 1, "nav__item"]], template: function GameListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List of games!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameListComponent_li_3_Template, 3, 2, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameListComponent_div_4_Template, 4, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.games);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.games == null ? null : ctx.games.length) === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".game-item[_ngcontent-%COMP%] {\n  color: darkblue;\n  font-weight: 600;\n  font-size: 20px;\n}\n.game-item[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLFVBQUE7QUFFSiIsImZpbGUiOiJnYW1lLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS1pdGVtIHtcbiAgY29sb3I6IGRhcmtibHVlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map