(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\r\n  <div class=\"container\">\r\n    <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\r\n      aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <!-- <a class=\"nav-link\" href=\"#\">Home\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a> -->\r\n        </li>\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">About</a>\r\n        </li> -->\r\n      </ul>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"https://www.github.com/Belachkar\" target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Github\">\r\n            <i class=\"fab fa-github\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"https://www.twitter.com/belachkar\" target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Twitter\">\r\n            <i class=\"fab fa-twitter\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"https://www.facebook.com/aliBelachkar\" target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Facebook\">\r\n            <i class=\"fab fa-facebook-f\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"https://www.linkedin.com/in/ali-belachkar-45596375\" target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Linked-in\">\r\n            <i class=\"fab fa-linkedin-in\"></i>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<main role=\"main\">\r\n  <div id=\"mainJambotron\" class=\"jumbotron jumbotron-fluid my-0\">\r\n    <div class=\"container py-5 px-5 mb-2\">\r\n      <h3 class=\"text-center mt-0\">Développeur Full-stack</h3>\r\n      <div class=\"mt-5 mx-4\">\r\n        <img class=\"mr-4 my-2 rounded-circle float-left\" src=\"../assets/img/portrait.jpg\" alt=\"\">\r\n        <div class=\"text-justify\">\r\n          <p><i>Bonjour</i>,</p>\r\n          <p>Je suis un développeur Full-Stack (Front-end & Back-end), qui a été fasciné par le monde de l’informatique, et\r\n            surtout celui du web.</p>\r\n          <P>Cet univers qui est si dynamique et flexible, qui bouge sans cesse, et qui ne cesse de progresser et de\r\n            croitre, en créant d’autres domaines, technologies, solutions et applications.</P>\r\n          <P>Certes, ce domaine nécessite la maitrise de beaucoup de disciplines. Mais avec de l’acharnement et de la\r\n            patience, et surtout grâce à l’aide inconditionnelle d’une communauté chaleureuse et active, on ne peut\r\n            qu’admirer le spectacle, tout en mettant notre touche personnelle, et en contribuant à la création des\r\n            briques et des structures qui constituent cet univers.</P>\r\n          <h5 class=\"text-right mr-5\"><i class=\"far fa-hand-point-right\"></i><i><strong> Belachkar Ali</strong></i></h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"section-a\" class=\"text-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\r\n          <div id=\"logosFav\">\r\n            <img src=\"../assets/appIcons/angular.png\" alt=\"Angular 7\" title=\"Angular 7\" data-toggle=\"tooltip\" data-placement=\"top\">\r\n            <img class=\"mx-5\" src=\"../assets/appIcons/ts.png\" alt=\"Typescript\" title=\"Typescript\" data-toggle=\"tooltip\" data-placement=\"top\">\r\n            <img src=\"../assets/appIcons/firebase.png\" alt=\"Firebase\" title=\"Firebase\" data-toggle=\"tooltip\" data-placement=\"top\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-group text-justify flex-column my-5\">\r\n        <div class=\"card flex-row\">\r\n          <img class=\"card-img-left\" src=\"../assets/appIcons/angular.png\" alt=\"Angular 7\" title=\"Angular 7\" data-toggle=\"tooltip\" data-placement=\"top\">\r\n          <div class=\"card-body\">\r\n            <p class=\"card-text\"><strong>Angular</strong> et <strong>Firebase,</strong> constituent mes outils favoris\r\n              pour la créations de pages web, d’applications mobiles, des <strong>SPA</strong> et <strong>PWA</strong>.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card flex-row\">\r\n          <img class=\"card-img-left\" src=\"../assets/appIcons/ts.png\" alt=\"Typescript\" title=\"Typescript\" data-toggle=\"tooltip\" data-placement=\"top\">\r\n          <div class=\"card-body\">\r\n            <p class=\"card-text\">D'une part, le Framework avec le langage <strong>Typescript</strong>, permet\r\n              l'enrichissement\r\n              du langage Javascript par des outils futur, en minimisant les erreurs et les bugs grâce au Typage.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card flex-row\">\r\n          <img class=\"card-img-left\" src=\"../assets/appIcons/firebase.png\" alt=\"Firebase\" title=\"Firebase\" data-toggle=\"tooltip\" data-placement=\"top\">\r\n          <div class=\"card-body\">\r\n            <p class=\"card-text\">D'autre part, étant maintenu par <strong>Google,</strong> et une communauté très\r\n              vaste, le Framework ne cesse de s'améliorer en sécurité et performance.</p>\r\n            <p class=\"card-text\">En plus avec <strong>Firebase</strong>, et l'intégration des services tel que <strong>Hostage</strong>,\r\n              <strong>Storage</strong>, et <strong>Functions</strong>.</p>\r\n            <p class=\"card-text\">C'est l'aire des applications <strong>Serverless</strong> qui s'annonce.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"appIcons\" class=\"row\">\r\n        <div class=\"col-6 col-sm-4 col-lg-3 col-xl-2 my-3\">\r\n          <img class=\"logoImg\" src=\"../assets/appIcons/nodejs.png\" alt=\"Node-js\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n            title=\"Node-js\">\r\n        </div>\r\n        <div class=\"col-6 col-sm-4 col-lg-3 col-xl-2 my-3\">\r\n          <img class=\"logoImg\" src=\"../assets/appIcons/chrome.png\" alt=\"Chrome Extentions\" data-toggle=\"tooltip\"\r\n            data-placement=\"top\" title=\"Chrome Extentions\">\r\n        </div>\r\n        <div class=\"col-6 col-sm-4 col-lg-3 col-xl-2 my-3\">\r\n          <img class=\"logoImg\" src=\"../assets/appIcons/js.png\" alt=\"Javascript\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n            title=\"Javascript\">\r\n        </div>\r\n        <div class=\"col-6 col-sm-4 col-lg-3 col-xl-2 my-3\">\r\n          <img class=\"logoImg\" src=\"../assets/appIcons/dart.png\" alt=\"Dart\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n            title=\"Dart\">\r\n        </div>\r\n        <div class=\"col-6 col-sm-4 col-lg-3 col-xl-2 my-3\">\r\n          <img class=\"logoImg\" src=\"../assets/appIcons/flutter.png\" alt=\"Flutter\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n            title=\"Flutter\">\r\n        </div>\r\n        <div class=\"col-6 col-sm-4 col-lg-3 col-xl-2 my-3\">\r\n          <img class=\"logoImg\" src=\"../assets/appIcons/python.png\" alt=\"Python 2.7\" data-toggle=\"tooltip\"\r\n            data-placement=\"top\" title=\"Python 2.7\">\r\n        </div>\r\n        <div class=\"col-6 col-sm-4 col-lg-3 col-xl-2 my-3\">\r\n          <img class=\"logoImg\" src=\"../assets/appIcons/sass.png\" alt=\"Sass\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n            title=\"Sass\">\r\n        </div>\r\n        <div class=\"col-6 col-sm-4 col-lg-3 col-xl-2 my-3\">\r\n          <img class=\"logoImg\" src=\"../assets/appIcons/mongodb.png\" alt=\"MongoDB\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n            title=\"MongoDB\">\r\n        </div>\r\n        <div class=\"col-6 col-sm-4 col-lg-3 col-xl-2 my-3\">\r\n          <img class=\"logoImg\" src=\"../assets/appIcons/php.png\" alt=\"PHP 7\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n            title=\"PHP 7\">\r\n        </div>\r\n        <div class=\"col-6 col-sm-4 col-lg-3 col-xl-2 my-3\">\r\n          <img class=\"logoImg\" src=\"../assets/appIcons/mysql.png\" alt=\"mySQL\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n            title=\"mySQL\">\r\n        </div>\r\n        <div class=\"col-6 col-sm-4 col-lg-3 col-xl-2 my-3\">\r\n          <img class=\"logoImg\" src=\"../assets/appIcons/html.png\" alt=\"HTML 5\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n            title=\"HTML 5\">\r\n        </div>\r\n        <div class=\"col-6 col-sm-4 col-lg-3 col-xl-2 my-3\">\r\n          <img class=\"logoImg\" src=\"../assets/appIcons/sass.png\" alt=\"SASS\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n            title=\"SASS\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div id=\"section-b\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\"> -->\r\n          <!-- <div id=\"accordion\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingOne\">\r\n                <h5 class=\"mb-0\">\r\n                  <button class=\"btn btn-link text-dark\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n                    aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                    Collapsible Group Item #1\r\n                  </button>\r\n                </h5>\r\n              </div>\r\n              <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n                <div class=\"card-body\">\r\n                  Etant un Freelance,\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingTwo\">\r\n                <h5 class=\"mb-0\">\r\n                  <button class=\"btn btn-link text-dark collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\r\n                    aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                    Collapsible Group Item #2\r\n                  </button>\r\n                </h5>\r\n              </div>\r\n              <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n                <div class=\"card-body\">\r\n                  Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it\r\n                  squid single-origin coffee\r\n                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\r\n                  nesciunt\r\n                  sapiente ea proident.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingThree\">\r\n                <h5 class=\"mb-0\">\r\n                  <button class=\"btn btn-link text-dark collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\"\r\n                    aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                    Collapsible Group Item #3\r\n                  </button>\r\n                </h5>\r\n              </div>\r\n              <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n                <div class=\"card-body\">\r\n                  Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it\r\n                  squid single-origin coffee\r\n                  nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\r\n                  nesciunt\r\n                  sapiente ea proident.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n        <!-- </div>\r\n        <div class=\"col-md-6   my-auto\">\r\n          <div class=\"card bg-light border-0\">\r\n            <img class=\"card-img\" src=\"../assets/img/pexels-photo-3.png\" alt=\"\"> -->\r\n            <!-- <div class=\"card-img-overlay\">\r\n              <h5 class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is\r\n                a little bit longer.</p>\r\n              <p class=\"card-text\">Last updated 3 mins ago</p>\r\n            </div> -->\r\n          <!-- </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <div id=\"section-c\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-8 text-center\">\r\n          <h2>Laisser un commentaire</h2>\r\n          <br />\r\n          <div class=\"text-justify\">\r\n            <p>Si vous voulez laisser une remarque, une suggestion ou une proposition, surtout n'hésiter pas!</p>\r\n            <!-- <p>Pour vous inscrire, Veuillez cliquer sur s'enregistrer</p> -->\r\n          </div>\r\n          <hr />\r\n          <form class=\"mt-4\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <input type=\"text\" class=\"form-control mb-2\" name=\"inputComment\" id=\"inputComment\" placeholder=\"Your Comment\">\r\n                </div>\r\n              </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control mb-2\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n                  placeholder=\"Enter email\">\r\n              </div>\r\n              <div class=\"col-sm-3\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-block mb-2\">Submit</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer>\r\n    <div class=\"container\">\r\n      <p>Copyright &copy; 2018 Belachkar Ali Theme</p>\r\n    </div>\r\n  </footer>\r\n</main>\r\n<!-- /.container -->\r\n"

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
        this.title = 'Belachkar Ali';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sites_e_com_e_com_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sites/e-com/e-com.component */ "./src/app/sites/e-com/e-com.component.ts");
/* harmony import */ var _sites_movies_movies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sites/movies/movies.component */ "./src/app/sites/movies/movies.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _sites_e_com_e_com_component__WEBPACK_IMPORTED_MODULE_5__["EComComponent"],
                _sites_movies_movies_component__WEBPACK_IMPORTED_MODULE_6__["MoviesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/sites/e-com/e-com.component.html":
/*!**************************************************!*\
  !*** ./src/app/sites/e-com/e-com.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  e-com works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/sites/e-com/e-com.component.scss":
/*!**************************************************!*\
  !*** ./src/app/sites/e-com/e-com.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGVzL2UtY29tL2UtY29tLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sites/e-com/e-com.component.ts":
/*!************************************************!*\
  !*** ./src/app/sites/e-com/e-com.component.ts ***!
  \************************************************/
/*! exports provided: EComComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EComComponent", function() { return EComComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EComComponent = /** @class */ (function () {
    function EComComponent() {
    }
    EComComponent.prototype.ngOnInit = function () {
    };
    EComComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-e-com',
            template: __webpack_require__(/*! ./e-com.component.html */ "./src/app/sites/e-com/e-com.component.html"),
            styles: [__webpack_require__(/*! ./e-com.component.scss */ "./src/app/sites/e-com/e-com.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EComComponent);
    return EComComponent;
}());



/***/ }),

/***/ "./src/app/sites/movies/movies.component.html":
/*!****************************************************!*\
  !*** ./src/app/sites/movies/movies.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  movies works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/sites/movies/movies.component.scss":
/*!****************************************************!*\
  !*** ./src/app/sites/movies/movies.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGVzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sites/movies/movies.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sites/movies/movies.component.ts ***!
  \**************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoviesComponent = /** @class */ (function () {
    function MoviesComponent() {
    }
    MoviesComponent.prototype.ngOnInit = function () {
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/sites/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.scss */ "./src/app/sites/movies/movies.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoviesComponent);
    return MoviesComponent;
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projets\Sites\Angular\profile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map