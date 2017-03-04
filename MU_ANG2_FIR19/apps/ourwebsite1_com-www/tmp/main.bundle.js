webpackJsonp([0,4],{

/***/ 1160:
/***/ function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },

/***/ 1164:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(567);


/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.title = 'About: My Google Map';
        this.lat = 52.258107; // center of Holland
        this.lng = 5.600592; // center of Holland
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(900),
            styles: [__webpack_require__(890)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/about.component.js.map

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(431);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return DialogContent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var HomeComponent = (function () {
    function HomeComponent(_dialog, _snackbar) {
        var _this = this;
        this._dialog = _dialog;
        this._snackbar = _snackbar;
        this.isDarkTheme = false;
        this.foods = [
            { name: 'Pizza', rating: 'Excellent' },
            { name: 'Burritos', rating: 'Great' },
            { name: 'French fries', rating: 'Pretty good' },
        ];
        this.progress = 0;
        // Update the value for the progress-bar on an interval.
        setInterval(function () {
            _this.progress = (_this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this._dialog.open(DialogContent);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.lastDialogResult = result;
        });
    };
    HomeComponent.prototype.showSnackbar = function () {
        this._snackbar.open('YUM SNACKS', 'CHEW');
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(902),
            styles: [__webpack_require__(892)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
var DialogContent = (function () {
    function DialogContent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogContent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <p>This is a dialog</p>\n    <p>\n      <label>\n        This is a text box inside of a dialog.\n        <input #dialogInput>\n      </label>\n    </p>\n    <p> <button md-button (click)=\"dialogRef.close(dialogInput.value)\">CLOSE</button> </p>\n  ",
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === 'function' && _a) || Object])
    ], DialogContent);
    return DialogContent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/home.component.js.map

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductEditorComponent = (function () {
    function ProductEditorComponent() {
    }
    ProductEditorComponent.prototype.ngOnInit = function () {
    };
    ProductEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-editor',
            template: __webpack_require__(903),
            styles: [__webpack_require__(893)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductEditorComponent);
    return ProductEditorComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/product-editor.component.js.map

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductViewerComponent = (function () {
    function ProductViewerComponent() {
    }
    ProductViewerComponent.prototype.ngOnInit = function () {
    };
    ProductViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-viewer',
            template: __webpack_require__(904),
            styles: [__webpack_require__(894)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductViewerComponent);
    return ProductViewerComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/product-viewer.component.js.map

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product_model__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_service__ = __webpack_require__(482);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductsViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsViewerComponent = (function () {
    function ProductsViewerComponent(router, route, productsService) {
        this.router = router;
        this.route = route;
        this.productsService = productsService;
        this.count = 0;
        this.offset = 0;
        this.limit = 2; // choose an appropriate number
        this.loading = false;
        this.failed = false;
    }
    ProductsViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observable = this.route.params
            .map(function (params) { return params['nr']; })
            .map(function (pageNr) { return (pageNr - 1) * _this.limit; });
        observable.subscribe(function (offset) { return _this.offset = offset; });
        observable.share().subscribe(function (offset) { return _this.getAll(offset, _this.limit); });
    };
    ProductsViewerComponent.prototype.getAll = function (offset, limit) {
        var _this = this;
        console.log("ProductsViewerComponent - getAll, offset = ", offset, " limit = ", limit);
        this.products = [];
        this.loading = true;
        this.failed = false;
        this.productsService.getAll(offset, limit).subscribe(function (result) {
            //this.products = result.products;
            //this.count = result.count;
            console.log("ProductsViewerComponent - getAll - result = ", result);
            // ADDED TO TEMPORARILY OVERWRITE THE products
            _this.products = [
                new __WEBPACK_IMPORTED_MODULE_2__models_product_model__["a" /* ProductModel */](1, "She Made Them Do It", "http://www.imdb.com", "Completed")
            ];
            //ORIGINAL this.products = result[0]; // ORIGINAL result['products'];
            console.log("ProductsViewerComponent - getAll - this.products = ", _this.products);
            _this.count = 70; // ORIGINAL result['count'];
            _this.loading = false;
        }, function () {
            _this.loading = false;
            _this.failed = true;
        });
    };
    ProductsViewerComponent.prototype.viewProduct = function (productId) {
        console.log("ProductsViewerComponent - viewProduct called with productId = ", productId);
        // TEMP COMMENTED OUT		this.router.navigate(['product', productId]);
    };
    ProductsViewerComponent.prototype.editProduct = function (productId) {
        console.log("ProductsViewerComponent - editProduct called with productId = ", productId);
        // TEMP COMMENTED OUT		this.router.navigate(['product', productId, 'edit']);
    };
    ProductsViewerComponent.prototype.onPageChange = function (offset) {
        this.offset = offset;
        this.router.navigate(['/page', (offset / this.limit) + 1]);
    };
    ProductsViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products-viewer',
            template: __webpack_require__(905),
            styles: [__webpack_require__(895)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */]) === 'function' && _c) || Object])
    ], ProductsViewerComponent);
    return ProductsViewerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/products-viewer.component.js.map

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_base__ = __webpack_require__(729);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService() {
        this.data = __WEBPACK_IMPORTED_MODULE_2__data_base__["a" /* DataBase */];
    }
    DataService.prototype.list = function (search, page, limit) {
        if (search === void 0) { search = null; }
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        console.log("DataService - list, this.data = ", this.data);
        var dataResult = this.data.filter(function (data) {
            return (search) ? data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 : true;
        });
        var dataResultPage = dataResult.slice((page - 1) * limit, page * limit);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of({ total: dataResult.length, items: dataResultPage }).delay(100);
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/data.service.js.map

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//END: ADDED
var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
        //START: ADDED
        //ORIGINAL  products: ProductModel[] = ProductsBase;  // Takes the products from the static file products.base.ts
        // products: ProductModel[] = [
        //   new ProductModel(1, "She Made Them Do It", "http://www.imdb.com", "Completed")
        // ]; // Make this dynamic, so it get GET from a REST API
        //END: ADDED
        this.baseUrl = 'http://localhost:8001/api';
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' })
        });
    }
    //START: ADDED
    // getAllProducts(): Observable<ProductModel> {
    // 	return this.http
    // 	  .get(`${this.baseUrl}/products/?offset=${offset}&limit=${limit}`)
    // 		.map(response => response.json())
    // 		.map(results => this.getList(results));
    // }
    //END: ADDED
    ProductsService.prototype.getAll = function (offset, limit) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 2; }
        return this.http
            .get(this.baseUrl + "/products/?offset=" + offset + "&limit=" + limit)
            .map(function (response) { return response.json(); })
            .map(function (results) { return _this.getList(results); });
    };
    ProductsService.prototype.get = function (productId) {
        return this.http.get((this.baseUrl + "/products/") + encodeURIComponent(productId.toString())).map(this.extractData).catch(this.handleError);
    };
    ProductsService.prototype.insert = function (product) {
        return this.http.post(this.baseUrl + "/products/", JSON.stringify(product), this.requestOptions).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ProductsService.prototype.update = function (product) {
        return this.http.put((this.baseUrl + "/products/") + encodeURIComponent(product.id.toString()), JSON.stringify(product), this.requestOptions).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ProductsService.prototype.delete = function (productId) {
        return this.http.delete((this.baseUrl + "/products/") + encodeURIComponent(productId.toString())).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ProductsService.prototype.getList = function (data) {
        console.log("ProductsService - getList, data = ", data);
        // turn the generic data Object into a productModel
        // let products = new Array<ProductModel>();
        // for(let i=0; i<data.length; i++) {
        // 	console.log("ProductsService - getList, data[", i,"].id = ", data[i].id);
        //   products[i] = new ProductModel(data[i].id, "She Made Them Do It", "http://www.imdb.com", "Completed");
        // }
        // data = new Array<ProductModel[]>();
        // data[0] = [new ProductModel(1, "She Made Them Do It", "http://www.imdb.com", "Completed")];
        // room for additional filtering
        return data;
    };
    //START: ADDED
    // list(search: string = null, page: number = 1, limit: number = 10): Observable<ProductsListResult<ProductModel>> {
    //   let productsResult = this.products.filter(function(product: ProductModel) {
    //       return (search) ? product.title.toLowerCase().indexOf(search) !== -1 : true;
    //   });
    //   let productsResultPage = productsResult.slice((page - 1) * limit, page * limit);
    //   return Observable.of({totalProducts: productsResult.length, products: productsResultPage}).delay(100);
    // }
    ProductsService.prototype.list = function (products, search, page, limit) {
        if (search === void 0) { search = null; }
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        console.log("ProductsService - list, products = ", products);
        console.log("ProductsService - list, search = ", search);
        console.log("ProductsService - list, page = ", page);
        console.log("ProductsService - list, limit = ", limit);
        var productsResult = products.filter(function (product) {
            return (search) ? product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 : true;
        });
        var productsResultPage = productsResult.slice((page - 1) * limit, page * limit);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of({ totalProducts: productsResult.length, products: productsResultPage }).delay(100);
    };
    //END: ADDED
    /**
     * Pick the array that belongs to the key 'products'
     *
     * e.g. { products:[our data is in here] }
     */
    ProductsService.prototype.extractData = function (res) {
        var body = res.json();
        //console.log(body.products);
        return body.products || {};
    };
    /**
     * Handle error
     */
    ProductsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    ProductsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ProductsService);
    return ProductsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/products.service.js.map

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreComponent = (function () {
    function StoreComponent() {
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    StoreComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(909),
            styles: [__webpack_require__(899)]
        }), 
        __metadata('design:paramtypes', [])
    ], StoreComponent);
    return StoreComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/store.component.js.map

/***/ },

/***/ 566:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 566;


/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(724);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/main.js.map

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products_viewer_products_viewer_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_product_viewer_product_viewer_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_product_editor_product_editor_component__ = __webpack_require__(478);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'store', component: __WEBPACK_IMPORTED_MODULE_3__store_store_component__["a" /* StoreComponent */] },
    { path: 'products', redirectTo: 'products/page/1', pathMatch: 'full' },
    { path: 'products/page/:nr', component: __WEBPACK_IMPORTED_MODULE_4__products_products_viewer_products_viewer_component__["a" /* ProductsViewerComponent */] },
    { path: 'products/product/:id', component: __WEBPACK_IMPORTED_MODULE_5__products_product_viewer_product_viewer_component__["a" /* ProductViewerComponent */] },
    { path: 'products/product/:id/edit', component: __WEBPACK_IMPORTED_MODULE_6__products_product_editor_product_editor_component__["a" /* ProductEditorComponent */] }
];
var AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/app-routing.module.js.map

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Our Website';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(901),
            styles: [__webpack_require__(891)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/app.component.js.map

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_list_search_list_component__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_pagination_pagination_component__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_data_service__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_store_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__products_products_viewer_products_viewer_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__products_shared_products_list_products_list_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__products_product_viewer_product_viewer_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__products_product_editor_product_editor_component__ = __webpack_require__(478);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["b" /* DialogContent */],
                __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__search_list_search_list_component__["a" /* SearchListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__store_store_component__["a" /* StoreComponent */],
                __WEBPACK_IMPORTED_MODULE_15__products_products_viewer_products_viewer_component__["a" /* ProductsViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__products_shared_products_list_products_list_component__["a" /* ProductsListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__products_product_viewer_product_viewer_component__["a" /* ProductViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__products_product_editor_product_editor_component__["a" /* ProductEditorComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__home_home_component__["b" /* DialogContent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBJa7gl2Qf4grJI2--AXdptakh_6YwOTmw'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/app.module.js.map

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataModel; });
var DataModel = (function () {
    function DataModel(id, title) {
        this.id = id;
        this.title = title;
    }
    ;
    return DataModel;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/data.model.js.map

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductModel; });
var ProductModel = (function () {
    function ProductModel(id, title, link, status) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.status = status;
    }
    return ProductModel;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/product.model.js.map

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { DataService } from "../../../services/data.service";
//import { DataModel } from "../../../models/data.model";
//END: SEARCH-LIST
var ProductsListComponent = (function () {
    //END: SEARCH-LIST
    function ProductsListComponent(productsService) {
        this.productsService = productsService;
        //END: PRODUCTS-LIST	
        //START: PRODUCTS-LIST
        this.viewProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //END: PRODUCTS-LIST	
        //START: PRODUCTS-LIST
        this.editProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //END: PRODUCTS-LIST
        //START: SEARCH-LIST
        this.terms = "";
        this.searchTermStream = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.page = 1;
        this.pageStream = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ProductsListComponent - ngOnInit(), this.products", this.products);
        //START: SEARCH-LIST		
        //    const searchSource = this.searchTermStream
        //      .debounceTime(1000)
        //      .distinctUntilChanged()
        //      .map(searchTerm => {
        //        this.terms = searchTerm;
        //        return {search: searchTerm, page: 1}
        //      });
        //END: SEARCH-LIST
        //START: PRODUCTS-LIST
        // ADDED TO TEMPORARILY OVERWRITE THE products
        // this.products = [
        //   new ProductModel(1, "She Made Them Do It", "http://www.imdb.com", "Completed")
        // ];
        var searchSourceProducts = this.searchTermStream
            .debounceTime(1000)
            .distinctUntilChanged()
            .map(function (searchTerm) {
            _this.terms = searchTerm;
            return { products: _this.products, search: searchTerm, page: 1 };
        });
        //END : PRODUCTS-LIST
        //START: SEARCH-LIST
        //    const pageSource = this.pageStream.map(pageNumber => {
        //      this.page = pageNumber;
        //      return {search: this.terms, page: pageNumber}
        //    });
        //END: SEARCH-LIST
        //START: PRODUCTS-LIST
        var pageSourceProducts = this.pageStream.map(function (pageNumber) {
            _this.page = pageNumber;
            return { products: _this.products, search: _this.terms, page: pageNumber };
        });
        //END : PRODUCTS-LIST
        //START: SEARCH-LIST
        //    const source = pageSource
        //      .merge(searchSource)
        //      .startWith({search: this.terms, page: this.page})
        //      .switchMap((params: {search: string, page: number}) => {
        //        return this.dataService.list(params.search, params.page)
        //      })
        //      .share();
        //END: SEARCH-LIST
        //START: PRODUCTS-LIST
        var sourceProducts = pageSourceProducts
            .merge(searchSourceProducts)
            .startWith({ products: this.products, search: this.terms, page: this.page })
            .switchMap(function (params) {
            return _this.productsService.list(params.products, params.search, params.page);
        })
            .share();
        //END : PRODUCTS-LIST
        //START: SEARCH-LIST
        //    this.total$ = source.pluck('total');
        //    this.items$ = source.pluck('items');
        //END: SEARCH-LIST		
        //START: PRODUCTS-LIST
        this.totalProducts$ = sourceProducts.pluck('totalProducts');
        this.products$ = sourceProducts.pluck('products');
        //END : PRODUCTS-LIST		
    };
    //START: SEARCH-LIST
    ProductsListComponent.prototype.search = function (terms) {
        this.searchTermStream.next(terms);
    };
    ProductsListComponent.prototype.goToPage = function (page) {
        this.pageStream.next(page);
    };
    //END: SEARCH-LIST
    //START: PRODUCTS-LIST
    ProductsListComponent.prototype.viewProductButton = function (productId) {
        this.viewProduct.emit(productId);
    };
    ProductsListComponent.prototype.editProductButton = function (productId) {
        this.editProduct.emit(productId);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ProductsListComponent.prototype, "products", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], ProductsListComponent.prototype, "viewProduct", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], ProductsListComponent.prototype, "editProduct", void 0);
    ProductsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products-list',
            template: __webpack_require__(906),
            styles: [__webpack_require__(896)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]) === 'function' && _c) || Object])
    ], ProductsListComponent);
    return ProductsListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/products-list.component.js.map

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(481);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchListComponent = (function () {
    function SearchListComponent(dataService) {
        this.dataService = dataService;
        this.terms = "";
        this.searchTermStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.page = 1;
        this.pageStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    SearchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var searchSource = this.searchTermStream
            .debounceTime(1000)
            .distinctUntilChanged()
            .map(function (searchTerm) {
            _this.terms = searchTerm;
            return { search: searchTerm, page: 1 };
        });
        var pageSource = this.pageStream.map(function (pageNumber) {
            _this.page = pageNumber;
            return { search: _this.terms, page: pageNumber };
        });
        var source = pageSource
            .merge(searchSource)
            .startWith({ search: this.terms, page: this.page })
            .switchMap(function (params) {
            return _this.dataService.list(params.search, params.page);
        })
            .share();
        this.total$ = source.pluck('total');
        this.items$ = source.pluck('items');
    };
    SearchListComponent.prototype.search = function (terms) {
        this.searchTermStream.next(terms);
    };
    SearchListComponent.prototype.goToPage = function (page) {
        this.pageStream.next(page);
    };
    SearchListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-list',
            template: __webpack_require__(907),
            styles: [__webpack_require__(897)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], SearchListComponent);
    return SearchListComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/search-list.component.js.map

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_data_model__ = __webpack_require__(725);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataBase; });

// Extract from imdb
var DataBase = [
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](1, "She Made Them Do It"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](2, "Poka stanitsa spit"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](3, "Memory Lane"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](4, "No Through Road"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](5, "Malcolm & Eddie"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](6, "Violet"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](7, "Last Call with Carson Daly"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](8, "The Yellow Badge of Courage"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](9, "Doctor Who: The Companion Chronicles"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](10, "The Feed"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](11, "Emmerdale Farm"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](12, "The Jeselnik Offensive"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](13, "Zero Minute"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](14, "Nina and the Neurons Go Inventing"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](15, "Dynamo"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](16, "Ammattimies"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](17, "Happening Now"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](18, "The O'Reilly Factor"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](19, "How Do I Look?"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](20, "Electric Playground"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](21, "Commissaire Laviolette"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](22, "The Young Doctors"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](23, "Married with Children"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](24, "Le clan Pasquier"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](25, "The Gale Storm Show: Oh! Susanna"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](26, "Serangoon Road"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](27, "The Young Doctors"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](28, "Family Matters"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](29, "Motormouth"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](30, "Antiques Roadshow"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](31, "Wasak"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](32, "Prime News"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](33, "May bukas pa"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](34, "The Hollywood Squares"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](35, "Els matins a TV3"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](36, "Your Favorite Story"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](37, "Los desayunos de TVE"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](38, "The Small House at Allington"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](39, "Minute to Win It"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](40, "El ministerio del tiempo"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](41, "The Fabulous Picture Show"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](42, "Black Jack"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](43, "Cutting Edge"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](44, "Judge Joe Brown"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](45, "All Saints"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](46, "Quincy M.E."),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](47, "Neighbours"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](48, "Chistoserdechnoe priznanie"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](49, "John Halifax, Gentleman"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](50, "Paul Flynn"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](51, "Texas Monthly Talks"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](52, "David Copperfield"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](53, "Obruchalnoe koltso"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](54, "Rock Macabre"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](55, "The Tonight Show Starring Johnny Carson"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](56, "Daesh molodezh"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](57, "Wicked Wicked Games"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](58, "Music Fair"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](59, "Flip My Food with Chef Jeff"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](60, "Un hombre solo"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](61, "My S Rostova"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](62, "Zwei bei Kallwass"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](63, "Last Call with Carson Daly"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](64, "Jimmy Kimmel Live!"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](65, "Plebs"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](66, "Lonelygirl15"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](67, "Plus belle la vie"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](68, "Watch What Happens: Live"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](69, "WRAL Murder Trials"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](70, "Secrets of the Bible"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](71, "Six O'Clock News"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](72, "Jackie Gleason: American Scene Magazine"),
];
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/data.base.js.map

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PaginationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = (function () {
    function PaginationComponent() {
        this.total = 0;
        this.page = 1;
        this.goTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.totalPages = function () {
        return Math.ceil(this.total / 10);
    };
    PaginationComponent.prototype.pagesRange = function () {
        return this.range(1, this.totalPages() + 1);
    };
    PaginationComponent.prototype.prevPage = function () {
        return Math.max(1, this.page - 1);
    };
    PaginationComponent.prototype.nextPage = function () {
        return Math.min(this.totalPages(), this.page + 1);
    };
    PaginationComponent.prototype.pageClicked = function (page) {
        this.goTo.next(page);
    };
    PaginationComponent.prototype.range = function (start, stop, step) {
        if (step === void 0) { step = 1; }
        if (!stop) {
            start = 0;
            stop = start;
        }
        return Array.from(new Array(Number((stop - start) / step)), function (x, i) { return start + i * step; });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "total", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], PaginationComponent.prototype, "goTo", void 0);
    PaginationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(908),
            styles: [__webpack_require__(898)]
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/pagination.component.js.map

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/environment.js.map

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/Client1/src/polyfills.js.map

/***/ },

/***/ 76:
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },

/***/ 890:
/***/ function(module, exports) {

module.exports = ".sebm-google-map-container {\n  height: 500px; }\n"

/***/ },

/***/ 891:
/***/ function(module, exports) {

module.exports = "md-sidenav-container.m2app-dark {\n  background: black; }\n\n/*\r\n * The /deep/ selector is simply to overcome view encapsulation\r\n * and be able to select the div.md-sidenav-content generated at runtime\r\n*/\nmd-sidenav-container /deep/ .md-sidenav-content {\n  overflow: hidden; }\n\n.app-content {\n  padding: 20px;\n  height: calc(100% - 64px);\n  overflow: auto; }\n\n.app-sidenav {\n  padding: 0px;\n  min-width: 100px; }\n\n.app-toolbar-filler {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.app-toolbar-menu {\n  padding: 0 14px 0 14px;\n  color: white; }\n\n.app-icon-button {\n  box-shadow: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  -webkit-filter: none;\n          filter: none;\n  font-weight: normal;\n  height: auto;\n  line-height: inherit;\n  margin: 0;\n  min-width: 0;\n  padding: 0;\n  text-align: left;\n  text-decoration: none; }\n\n.app-action {\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px; }\n\n.mat-nav-list {\n  padding-top: 0px;\n  display: block; }\n"

/***/ },

/***/ 892:
/***/ function(module, exports) {

module.exports = "md-card {\n  margin: 20px; }\n\nmd-checkbox {\n  margin: 10px; }\n\n.app-action {\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px; }\n\n.app-spinner {\n  height: 30px;\n  width: 30px;\n  display: inline-block; }\n\n.app-input-icon {\n  font-size: 16px; }\n\n.app-list {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  width: 350px;\n  margin: 20px; }\n\n.app-progress {\n  margin: 20px; }\n"

/***/ },

/***/ 893:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 894:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 895:
/***/ function(module, exports) {

module.exports = ".display-4 {\n  font-size: 112px;\n  font-size: 11.2rem;\n  line-height: 128px;\n  line-height: 12.8rem;\n  letter-spacing: -0.1px;\n  letter-spacing: -0.01rem;\n  font-weight: 100;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-3 {\n  font-size: 56px;\n  font-size: 5.6rem;\n  line-height: 84px;\n  line-height: 8.4rem;\n  letter-spacing: -0.05px;\n  letter-spacing: -0.005rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-2 {\n  font-size: 45px;\n  font-size: 4.5rem;\n  line-height: 48px;\n  line-height: 4.8rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-1 {\n  font-size: 34px;\n  font-size: 3.4rem;\n  line-height: 40px;\n  line-height: 4rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.headline {\n  font-size: 24px;\n  font-size: 2.4rem;\n  line-height: 32px;\n  line-height: 3.2rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.title {\n  font-size: 20px;\n  font-size: 2rem;\n  line-height: 28px;\n  line-height: 2.8rem;\n  letter-spacing: 0.05px;\n  letter-spacing: 0.005rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.subhead-2 {\n  font-size: 15px;\n  font-size: 1.5rem;\n  line-height: 28px;\n  line-height: 2.8rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.subhead-1 {\n  font-size: 15px;\n  font-size: 1.5rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.body-2 {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.body-1 {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.caption {\n  font-size: 12px;\n  font-size: 1.2rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.2px;\n  letter-spacing: 0.02rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.label {\n  font-size: 12px;\n  font-size: 1.2rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.menu {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.button {\n  font-size: 14px;\n  font-size: 1.4rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: uppercase; }\n\n@media only screen and (max-width: 960px) {\n  .subhead-2 {\n    font-size: 16px;\n    font-size: 1.6rem; }\n  .subhead-1 {\n    font-size: 16px;\n    font-size: 1.6rem; }\n  .body-2 {\n    font-size: 14px;\n    font-size: 1.4rem; }\n  .body-1 {\n    font-size: 14px;\n    font-size: 1.4rem; }\n  .menu {\n    font-size: 14px;\n    font-size: 1.4rem; } }\n\n.display-4,\n.display-3,\n.display-2,\n.display-1 {\n  margin: 0 0 14px 0;\n  margin-bottom: 1.4rem; }\n\n.headline,\n.title,\n.subhead-2,\n.subhead-1,\n.body-2,\n.body-1,\n.caption,\n.label,\n.menu,\n.button {\n  margin: 0 0 10px 0;\n  margin-bottom: 1rem; }\n"

/***/ },

/***/ 896:
/***/ function(module, exports) {

module.exports = "@import https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic;\n/* -- import Roboto Font ---------------------------- */\n/* -- You can use this tables in Bootstrap (v3) projects. -- */\n/* -- Box model ------------------------------- */\n*,\n*:after,\n*:before {\n  box-sizing: border-box; }\n\n/* -- Demo style ------------------------------- */\nhtml,\nbody {\n  position: relative;\n  min-height: 100%;\n  height: 100%; }\n\nhtml {\n  position: relative;\n  overflow-x: hidden;\n  margin: 16px;\n  padding: 0;\n  min-height: 100%;\n  font-size: 62.5%; }\n\nbody {\n  font-family: 'RobotoDraft', 'Roboto', 'Helvetica Neue, Helvetica, Arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 1.4rem;\n  line-height: 2rem;\n  letter-spacing: 0.01rem;\n  color: #212121;\n  background-color: #f5f5f5;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility; }\n\n#demo {\n  margin: 20px auto;\n  max-width: 960px; }\n\n#demo h1 {\n  font-size: 2.4rem;\n  line-height: 3.2rem;\n  letter-spacing: 0;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit;\n  margin-bottom: 1rem;\n  text-align: center; }\n\n#demo h2 {\n  font-size: 1.5rem;\n  line-height: 2.8rem;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-align: center; }\n\n.shadow-z-1 {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\n/* -- Material Design Table style -------------- */\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 2rem;\n  background-color: #ffffff; }\n\n.table > thead > tr,\n.table > tbody > tr,\n.table > tfoot > tr {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  text-align: left;\n  padding: 1.6rem;\n  vertical-align: top;\n  border-top: 0;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.table > thead > tr > th {\n  font-weight: 400;\n  color: #757575;\n  vertical-align: bottom;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0; }\n\n.table > tbody + tbody {\n  border-top: 1px solid rgba(0, 0, 0, 0.12); }\n\n.table .table {\n  background-color: #ffffff; }\n\n.table .no-border {\n  border: 0; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 0.8rem; }\n\n.table-bordered {\n  border: 0; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 0;\n  border-bottom: 1px solid #e0e0e0; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-child(odd) > td,\n.table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr:hover > td,\n.table-hover > tbody > tr:hover > th {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n@media screen and (max-width: 768px) {\n  .table-responsive-vertical > .table {\n    margin-bottom: 0;\n    background-color: transparent; }\n  .table-responsive-vertical > .table > thead,\n  .table-responsive-vertical > .table > tfoot {\n    display: none; }\n  .table-responsive-vertical > .table > tbody {\n    display: block; }\n  .table-responsive-vertical > .table > tbody > tr {\n    display: block;\n    border: 1px solid #e0e0e0;\n    border-radius: 2px;\n    margin-bottom: 1.6rem; }\n  .table-responsive-vertical > .table > tbody > tr > td {\n    background-color: #ffffff;\n    display: block;\n    vertical-align: middle;\n    text-align: right; }\n  .table-responsive-vertical > .table > tbody > tr > td[data-title]:before {\n    content: attr(data-title);\n    float: left;\n    font-size: inherit;\n    font-weight: 400;\n    color: #757575; }\n  .table-responsive-vertical.shadow-z-1 {\n    box-shadow: none; }\n  .table-responsive-vertical.shadow-z-1 > .table > tbody > tr {\n    border: none;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n  .table-responsive-vertical > .table-bordered {\n    border: 0; }\n  .table-responsive-vertical > .table-bordered > tbody > tr > td {\n    border: 0;\n    border-bottom: 1px solid #e0e0e0; }\n  .table-responsive-vertical > .table-bordered > tbody > tr > td:last-child {\n    border-bottom: 0; }\n  .table-responsive-vertical > .table-striped > tbody > tr > td,\n  .table-responsive-vertical > .table-striped > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical > .table-striped > tbody > tr > td:nth-child(odd) {\n    background-color: #f5f5f5; }\n  .table-responsive-vertical > .table-hover > tbody > tr:hover > td,\n  .table-responsive-vertical > .table-hover > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical > .table-hover > tbody > tr > td:hover {\n    background-color: rgba(0, 0, 0, 0.12); } }\n\n.table-striped.table-mc-red > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-red > tbody > tr:nth-child(odd) > th {\n  background-color: #fde0dc; }\n\n.table-hover.table-mc-red > tbody > tr:hover > td,\n.table-hover.table-mc-red > tbody > tr:hover > th {\n  background-color: #f9bdbb; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-red > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td:nth-child(odd) {\n    background-color: #fde0dc; }\n  .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-red > tbody > tr > td:hover {\n    background-color: #f9bdbb; } }\n\n.table-striped.table-mc-pink > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-pink > tbody > tr:nth-child(odd) > th {\n  background-color: #fce4ec; }\n\n.table-hover.table-mc-pink > tbody > tr:hover > td,\n.table-hover.table-mc-pink > tbody > tr:hover > th {\n  background-color: #f8bbd0; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td:nth-child(odd) {\n    background-color: #fce4ec; }\n  .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr > td:hover {\n    background-color: #f8bbd0; } }\n\n.table-striped.table-mc-purple > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-purple > tbody > tr:nth-child(odd) > th {\n  background-color: #f3e5f5; }\n\n.table-hover.table-mc-purple > tbody > tr:hover > td,\n.table-hover.table-mc-purple > tbody > tr:hover > th {\n  background-color: #e1bee7; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td:nth-child(odd) {\n    background-color: #f3e5f5; }\n  .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr > td:hover {\n    background-color: #e1bee7; } }\n\n.table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > th {\n  background-color: #ede7f6; }\n\n.table-hover.table-mc-deep-purple > tbody > tr:hover > td,\n.table-hover.table-mc-deep-purple > tbody > tr:hover > th {\n  background-color: #d1c4e9; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td:nth-child(odd) {\n    background-color: #ede7f6; }\n  .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr > td:hover {\n    background-color: #d1c4e9; } }\n\n.table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > th {\n  background-color: #e8eaf6; }\n\n.table-hover.table-mc-indigo > tbody > tr:hover > td,\n.table-hover.table-mc-indigo > tbody > tr:hover > th {\n  background-color: #c5cae9; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td:nth-child(odd) {\n    background-color: #e8eaf6; }\n  .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr > td:hover {\n    background-color: #c5cae9; } }\n\n.table-striped.table-mc-blue > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-blue > tbody > tr:nth-child(odd) > th {\n  background-color: #e7e9fd; }\n\n.table-hover.table-mc-blue > tbody > tr:hover > td,\n.table-hover.table-mc-blue > tbody > tr:hover > th {\n  background-color: #d0d9ff; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td:nth-child(odd) {\n    background-color: #e7e9fd; }\n  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr > td:hover {\n    background-color: #d0d9ff; } }\n\n.table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > th {\n  background-color: #e1f5fe; }\n\n.table-hover.table-mc-light-blue > tbody > tr:hover > td,\n.table-hover.table-mc-light-blue > tbody > tr:hover > th {\n  background-color: #b3e5fc; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td:nth-child(odd) {\n    background-color: #e1f5fe; }\n  .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr > td:hover {\n    background-color: #b3e5fc; } }\n\n.table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > th {\n  background-color: #e0f7fa; }\n\n.table-hover.table-mc-cyan > tbody > tr:hover > td,\n.table-hover.table-mc-cyan > tbody > tr:hover > th {\n  background-color: #b2ebf2; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td:nth-child(odd) {\n    background-color: #e0f7fa; }\n  .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr > td:hover {\n    background-color: #b2ebf2; } }\n\n.table-striped.table-mc-teal > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-teal > tbody > tr:nth-child(odd) > th {\n  background-color: #e0f2f1; }\n\n.table-hover.table-mc-teal > tbody > tr:hover > td,\n.table-hover.table-mc-teal > tbody > tr:hover > th {\n  background-color: #b2dfdb; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td:nth-child(odd) {\n    background-color: #e0f2f1; }\n  .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr > td:hover {\n    background-color: #b2dfdb; } }\n\n.table-striped.table-mc-green > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-green > tbody > tr:nth-child(odd) > th {\n  background-color: #d0f8ce; }\n\n.table-hover.table-mc-green > tbody > tr:hover > td,\n.table-hover.table-mc-green > tbody > tr:hover > th {\n  background-color: #a3e9a4; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-green > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td:nth-child(odd) {\n    background-color: #d0f8ce; }\n  .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-green > tbody > tr > td:hover {\n    background-color: #a3e9a4; } }\n\n.table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > th {\n  background-color: #f1f8e9; }\n\n.table-hover.table-mc-light-green > tbody > tr:hover > td,\n.table-hover.table-mc-light-green > tbody > tr:hover > th {\n  background-color: #dcedc8; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td:nth-child(odd) {\n    background-color: #f1f8e9; }\n  .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr > td:hover {\n    background-color: #dcedc8; } }\n\n.table-striped.table-mc-lime > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-lime > tbody > tr:nth-child(odd) > th {\n  background-color: #f9fbe7; }\n\n.table-hover.table-mc-lime > tbody > tr:hover > td,\n.table-hover.table-mc-lime > tbody > tr:hover > th {\n  background-color: #f0f4c3; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td:nth-child(odd) {\n    background-color: #f9fbe7; }\n  .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr > td:hover {\n    background-color: #f0f4c3; } }\n\n.table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > th {\n  background-color: #fffde7; }\n\n.table-hover.table-mc-yellow > tbody > tr:hover > td,\n.table-hover.table-mc-yellow > tbody > tr:hover > th {\n  background-color: #fff9c4; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td:nth-child(odd) {\n    background-color: #fffde7; }\n  .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr > td:hover {\n    background-color: #fff9c4; } }\n\n.table-striped.table-mc-amber > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-amber > tbody > tr:nth-child(odd) > th {\n  background-color: #fff8e1; }\n\n.table-hover.table-mc-amber > tbody > tr:hover > td,\n.table-hover.table-mc-amber > tbody > tr:hover > th {\n  background-color: #ffecb3; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td:nth-child(odd) {\n    background-color: #fff8e1; }\n  .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr > td:hover {\n    background-color: #ffecb3; } }\n\n.table-striped.table-mc-orange > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-orange > tbody > tr:nth-child(odd) > th {\n  background-color: #fff3e0; }\n\n.table-hover.table-mc-orange > tbody > tr:hover > td,\n.table-hover.table-mc-orange > tbody > tr:hover > th {\n  background-color: #ffe0b2; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td:nth-child(odd) {\n    background-color: #fff3e0; }\n  .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr > td:hover {\n    background-color: #ffe0b2; } }\n\n.table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > th {\n  background-color: #fbe9e7; }\n\n.table-hover.table-mc-deep-orange > tbody > tr:hover > td,\n.table-hover.table-mc-deep-orange > tbody > tr:hover > th {\n  background-color: #ffccbc; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td:nth-child(odd) {\n    background-color: #fbe9e7; }\n  .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr > td:hover {\n    background-color: #ffccbc; } }\n\n/* -- Input styles ---------------------------------- */\n.form-group {\n  position: relative;\n  margin-top: 35px;\n  margin-bottom: 20px; }\n\n.input-group {\n  position: relative; }\n\n.form-control {\n  display: block;\n  height: 36px;\n  width: 100%;\n  border: none;\n  border-radius: 0 !important;\n  font-size: 16px;\n  font-weight: 300;\n  padding: 0;\n  background-color: transparent;\n  box-shadow: none;\n  border-bottom: 1px solid #757575; }\n\n.input-group .form-control {\n  position: relative;\n  z-index: inherit;\n  float: inherit;\n  width: 100%;\n  margin-bottom: 0; }\n\n.form-control:focus {\n  border-color: #757575;\n  outline: none;\n  box-shadow: none; }\n\n/* -- label styles ---------------------------------- */\nlabel {\n  position: absolute;\n  top: -18px;\n  color: #999;\n  font-size: 12px;\n  font-weight: 300;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.form-horizontal .control-label {\n  position: relative;\n  top: 0;\n  margin-bottom: 0; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    font-size: 16px; } }\n\n.float-label {\n  left: 0;\n  top: 7px;\n  font-size: 16px;\n  pointer-events: none; }\n\n/* active state */\n.form-control:focus ~ .float-label,\n.form-control:valid ~ .float-label {\n  top: -18px;\n  font-size: 12px; }\n\n/* input colors ---- */\n.form-control:focus ~ label {\n  color: #03a9f4; }\n\n.form-control:focus ~ .form-bar:before,\n.form-control:focus ~ .form-bar:after {\n  background: #03a9f4; }\n\n/* help-block */\n.form-group .help-block {\n  position: absolute; }\n\n.help-block {\n  color: #bdbdbd;\n  font-size: 12px;\n  font-weight: 300; }\n\n/* input addon ---*/\n.input-group-addon {\n  border: none;\n  background: transparent; }\n\n/* ------  inline ----*/\n.input-group-addon,\n.form-inline .input-group {\n  display: table-cell; }\n\n.input-group-addon,\n.input-group-btn {\n  width: inherit; }\n\n.input-group {\n  width: 100%; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    margin-top: 16px; }\n  .input-group-btn,\n  .input-group .form-control,\n  .input-group-addon,\n  .form-inline .input-group {\n    display: inline-block; }\n  .input-group {\n    width: auto; } }\n\n/* -- bar styles -------------------------------------- */\n.form-bar {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.form-bar:before,\n.form-bar:after {\n  content: '';\n  height: 1px;\n  width: 0;\n  bottom: 0;\n  position: absolute;\n  transition: 0.3s ease all;\n  -moz-transition: 0.3s ease all;\n  -webkit-transition: 0.3s ease all; }\n\n.form-bar:before {\n  left: 50%; }\n\n.form-bar:after {\n  right: 50%; }\n\n/* active state */\n.form-control:focus ~ .form-bar:before,\n.form-control:focus ~ .form-bar:after {\n  width: 50%; }\n\n/* -- highlighter styles ------------------------------ */\n.form-highlight {\n  position: absolute;\n  height: 60%;\n  width: 60px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.4; }\n\n/* active state */\n.form-control:focus ~ .form-highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* -- highlighter animation --------------------------- */\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #5264AE; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: #5264AE; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n/*-- Checkbox --------------------------- */\n/* \r\n * Core styles required for the checkboxes.\r\n * @author Jason Mayes 2014, www.jasonmayes.com\r\n*/\n.form-group.checkbox {\n  margin-top: 20px; }\n\n.checkbox input[type='checkbox'] {\n  height: 0;\n  width: 0;\n  opacity: 0; }\n\n.checkbox label {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  top: 10px;\n  padding-left: 0; }\n\n.checkbox .chk-span {\n  top: 0;\n  border: 1px solid #5a5a5a;\n  color: #1d1d1d;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 14px;\n  margin: 0 14px 14px 1px;\n  outline-color: #eaeaea;\n  padding: 0;\n  position: relative;\n  width: 14px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  z-index: 1; }\n\n.checkbox .chk-span.checked {\n  top: -2px;\n  border-left: 2px solid #03a9f4;\n  border-bottom: 4px solid #03a9f4;\n  border-top: 1px solid transparent;\n  border-right: 1px solid transparent;\n  -webkit-transform: rotate(-45deg) scaleY(0.5);\n  transform: rotate(-45deg) scaleY(0.5); }\n\n.checkbox .chk-span.checked {\n  border-left-color: #03a9f4;\n  border-bottom-color: #03a9f4; }\n\n.checkbox input[type='checkbox']:focus ~ label {\n  color: #03a9f4; }\n\n.checkbox input[type='checkbox']:focus ~ label .chk-span {\n  border-color: #03a9f4; }\n\n.checkbox input[type='checkbox']:focus ~ label .chk-span.checked {\n  border-left-color: #03a9f4;\n  border-bottom-color: #03a9f4;\n  border-top: 1px solid transparent;\n  border-right: 1px solid transparent; }\n\n@media (min-width: 768px) {\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 5px; } }\n\n.form-control-static {\n  font-size: 16px; }\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: transparent;\n  border-bottom-style: dashed; }\n\n#focusedInput {\n  border-color: #ccc;\n  border-color: rgba(82, 168, 236, 0.8);\n  outline: 0;\n  box-shadow: none; }\n\n.display-4 {\n  font-size: 112px;\n  font-size: 11.2rem;\n  line-height: 128px;\n  line-height: 12.8rem;\n  letter-spacing: -0.1px;\n  letter-spacing: -0.01rem;\n  font-weight: 100;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-3 {\n  font-size: 56px;\n  font-size: 5.6rem;\n  line-height: 84px;\n  line-height: 8.4rem;\n  letter-spacing: -0.05px;\n  letter-spacing: -0.005rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-2 {\n  font-size: 45px;\n  font-size: 4.5rem;\n  line-height: 48px;\n  line-height: 4.8rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-1 {\n  font-size: 34px;\n  font-size: 3.4rem;\n  line-height: 40px;\n  line-height: 4rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.headline {\n  font-size: 24px;\n  font-size: 2.4rem;\n  line-height: 32px;\n  line-height: 3.2rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.title {\n  font-size: 20px;\n  font-size: 2rem;\n  line-height: 28px;\n  line-height: 2.8rem;\n  letter-spacing: 0.05px;\n  letter-spacing: 0.005rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.subhead-2 {\n  font-size: 15px;\n  font-size: 1.5rem;\n  line-height: 28px;\n  line-height: 2.8rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.subhead-1 {\n  font-size: 15px;\n  font-size: 1.5rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.body-2 {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.body-1 {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.caption {\n  font-size: 12px;\n  font-size: 1.2rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.2px;\n  letter-spacing: 0.02rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.label {\n  font-size: 12px;\n  font-size: 1.2rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.menu {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.button {\n  font-size: 14px;\n  font-size: 1.4rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: uppercase; }\n\n@media only screen and (max-width: 960px) {\n  .subhead-2 {\n    font-size: 16px;\n    font-size: 1.6rem; }\n  .subhead-1 {\n    font-size: 16px;\n    font-size: 1.6rem; }\n  .body-2 {\n    font-size: 14px;\n    font-size: 1.4rem; }\n  .body-1 {\n    font-size: 14px;\n    font-size: 1.4rem; }\n  .menu {\n    font-size: 14px;\n    font-size: 1.4rem; } }\n\n.display-4,\n.display-3,\n.display-2,\n.display-1 {\n  margin: 0 0 14px 0;\n  margin-bottom: 1.4rem; }\n\n.headline,\n.title,\n.subhead-2,\n.subhead-1,\n.body-2,\n.body-1,\n.caption,\n.label,\n.menu,\n.button {\n  margin: 0 0 10px 0;\n  margin-bottom: 1rem; }\n\n/* -- Buttons -------------------------------- */\n.btn {\n  font-family: \"Roboto\", 'Helvetica Neue, Helvetica, Arial', sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.1;\n  text-transform: uppercase;\n  letter-spacing: inherit;\n  color: rgba(255, 255, 255, 0.87); }\n\n.btn-default,\n.btn-link {\n  color: rgba(0, 0, 0, 0.87); }\n\n/* -- Buttons style ------------------------------------ */\n.btn {\n  outline: 0;\n  outline-offset: 0;\n  border: 0;\n  border-radius: 2px;\n  transition: all 0.15s ease-in-out;\n  -o-transition: all 0.15s ease-in-out;\n  -moz-transition: all 0.15s ease-in-out;\n  -webkit-transition: all 0.15s ease-in-out; }\n\n.btn:focus,\n.btn:active,\n.btn.active,\n.btn:active:focus,\n.btn.active:focus {\n  outline: 0;\n  outline-offset: 0;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\n/* -- Buttons types -------------------------------- */\n.btn-raised {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\n.btn-raised:active,\n.btn-raised.active,\n.btn-raised:active:focus,\n.btn-raised.active:focus {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.btn-raised:focus {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.btn.btn-circle {\n  padding: 0;\n  border-radius: 50%; }\n\n/* -- Buttons colors -------------------------------- */\n.btn-default,\n.dropdown-toggle.btn-default {\n  background-color: #ffffff; }\n\n.btn-default:hover,\n.dropdown-toggle.btn-default:hover {\n  background-color: #e5e5e5; }\n\n.btn-default:active,\n.dropdown-toggle.btn-default:active,\n.btn-default.active,\n.dropdown-toggle.btn-default.active {\n  background-color: #e5e5e5; }\n\n.btn-default:focus,\n.dropdown-toggle.btn-default:focus {\n  background-color: #cccccc; }\n\n.btn-default:disabled,\n.dropdown-toggle.btn-default:disabled,\n.btn-default.disabled,\n.dropdown-toggle.btn-default.disabled,\n.btn-default[disabled],\n.dropdown-toggle.btn-default[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-default .ink,\n.dropdown-toggle.btn-default .ink {\n  background-color: #b8b8b8; }\n\n.btn-flat.btn-default {\n  color: #212121;\n  background-color: transparent; }\n\n.btn-flat.btn-default:hover {\n  color: #141414;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-default:active,\n.btn-flat.btn-default.active {\n  color: #020202;\n  background-color: #cccccc; }\n\n.btn-flat.btn-default:focus {\n  color: #000000;\n  background-color: #cccccc; }\n\n.btn-flat.btn-default .ink {\n  background-color: #808080; }\n\n.btn-primary,\n.dropdown-toggle.btn-primary {\n  background-color: #5677fc; }\n\n.btn-primary:hover,\n.dropdown-toggle.btn-primary:hover {\n  background-color: #4e6cef; }\n\n.btn-primary:active,\n.dropdown-toggle.btn-primary:active,\n.btn-primary.active,\n.dropdown-toggle.btn-primary.active {\n  background-color: #4e6cef; }\n\n.btn-primary:focus,\n.dropdown-toggle.btn-primary:focus {\n  background-color: #455ede; }\n\n.btn-primary:disabled,\n.dropdown-toggle.btn-primary:disabled,\n.btn-primary.disabled,\n.dropdown-toggle.btn-primary.disabled,\n.btn-primary[disabled],\n.dropdown-toggle.btn-primary[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-primary .ink,\n.dropdown-toggle.btn-primary .ink {\n  background-color: #3b50ce; }\n\n.btn-flat.btn-primary {\n  color: #5677fc;\n  background-color: transparent; }\n\n.btn-flat.btn-primary:hover {\n  color: #4e6cef;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-primary:active,\n.btn-flat.btn-primary.active {\n  color: #455ede;\n  background-color: #cccccc; }\n\n.btn-flat.btn-primary:focus {\n  color: #3b50ce;\n  background-color: #cccccc; }\n\n.btn-flat.btn-primary .ink {\n  background-color: #808080; }\n\n.btn-success,\n.dropdown-toggle.btn-success {\n  background-color: #259b24; }\n\n.btn-success:hover,\n.dropdown-toggle.btn-success:hover {\n  background-color: #0a8f08; }\n\n.btn-success:active,\n.dropdown-toggle.btn-success:active,\n.btn-success.active,\n.dropdown-toggle.btn-success.active {\n  background-color: #0a8f08; }\n\n.btn-success:focus,\n.dropdown-toggle.btn-success:focus {\n  background-color: #0a7e07; }\n\n.btn-success:disabled,\n.dropdown-toggle.btn-success:disabled,\n.btn-success.disabled,\n.dropdown-toggle.btn-success.disabled,\n.btn-success[disabled],\n.dropdown-toggle.btn-success[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-success .ink,\n.dropdown-toggle.btn-success .ink {\n  background-color: #056f00; }\n\n.btn-flat.btn-success {\n  color: #259b24;\n  background-color: transparent; }\n\n.btn-flat.btn-success:hover {\n  color: #0a8f08;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-success:active,\n.btn-flat.btn-success.active {\n  color: #0a7e07;\n  background-color: #cccccc; }\n\n.btn-flat.btn-success:focus {\n  color: #056f00;\n  background-color: #cccccc; }\n\n.btn-flat.btn-success .ink {\n  background-color: #808080; }\n\n.btn-info,\n.dropdown-toggle.btn-info {\n  background-color: #03a9f4; }\n\n.btn-info:hover,\n.dropdown-toggle.btn-info:hover {\n  background-color: #039be5; }\n\n.btn-info:active,\n.dropdown-toggle.btn-info:active,\n.btn-info.active,\n.dropdown-toggle.btn-info.active {\n  background-color: #039be5; }\n\n.btn-info:focus,\n.dropdown-toggle.btn-info:focus {\n  background-color: #0288d1; }\n\n.btn-info:disabled,\n.dropdown-toggle.btn-info:disabled,\n.btn-info.disabled,\n.dropdown-toggle.btn-info.disabled,\n.btn-info[disabled],\n.dropdown-toggle.btn-info[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-info .ink,\n.dropdown-toggle.btn-info .ink {\n  background-color: #0277bd; }\n\n.btn-flat.btn-info {\n  color: #03a9f4;\n  background-color: transparent; }\n\n.btn-flat.btn-info:hover {\n  color: #039be5;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-info:active,\n.btn-flat.btn-info.active {\n  color: #0288d1;\n  background-color: #cccccc; }\n\n.btn-flat.btn-info:focus {\n  color: #0277bd;\n  background-color: #cccccc; }\n\n.btn-flat.btn-info .ink {\n  background-color: #808080; }\n\n.btn-warning,\n.dropdown-toggle.btn-warning {\n  background-color: #ffc107; }\n\n.btn-warning:hover,\n.dropdown-toggle.btn-warning:hover {\n  background-color: #ffb300; }\n\n.btn-warning:active,\n.dropdown-toggle.btn-warning:active,\n.btn-warning.active,\n.dropdown-toggle.btn-warning.active {\n  background-color: #ffb300; }\n\n.btn-warning:focus,\n.dropdown-toggle.btn-warning:focus {\n  background-color: #ffa000; }\n\n.btn-warning:disabled,\n.dropdown-toggle.btn-warning:disabled,\n.btn-warning.disabled,\n.dropdown-toggle.btn-warning.disabled,\n.btn-warning[disabled],\n.dropdown-toggle.btn-warning[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-warning .ink,\n.dropdown-toggle.btn-warning .ink {\n  background-color: #ff8f00; }\n\n.btn-flat.btn-warning {\n  color: #ffc107;\n  background-color: transparent; }\n\n.btn-flat.btn-warning:hover {\n  color: #ffb300;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-warning:active,\n.btn-flat.btn-warning.active {\n  color: #ffa000;\n  background-color: #cccccc; }\n\n.btn-flat.btn-warning:focus {\n  color: #ff8f00;\n  background-color: #cccccc; }\n\n.btn-flat.btn-warning .ink {\n  background-color: #808080; }\n\n.btn-danger,\n.dropdown-toggle.btn-danger {\n  background-color: #ff5722; }\n\n.btn-danger:hover,\n.dropdown-toggle.btn-danger:hover {\n  background-color: #f4511e; }\n\n.btn-danger:active,\n.dropdown-toggle.btn-danger:active,\n.btn-danger.active,\n.dropdown-toggle.btn-danger.active {\n  background-color: #f4511e; }\n\n.btn-danger:focus,\n.dropdown-toggle.btn-danger:focus {\n  background-color: #e64a19; }\n\n.btn-danger:disabled,\n.dropdown-toggle.btn-danger:disabled,\n.btn-danger.disabled,\n.dropdown-toggle.btn-danger.disabled,\n.btn-danger[disabled],\n.dropdown-toggle.btn-danger[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-danger .ink,\n.dropdown-toggle.btn-danger .ink {\n  background-color: #d84315; }\n\n.btn-flat.btn-danger {\n  color: #ff5722;\n  background-color: transparent; }\n\n.btn-flat.btn-danger:hover {\n  color: #f4511e;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-danger:active,\n.btn-flat.btn-danger.active {\n  color: #e64a19;\n  background-color: #cccccc; }\n\n.btn-flat.btn-danger:focus {\n  color: #d84315;\n  background-color: #cccccc; }\n\n.btn-flat.btn-danger .ink {\n  background-color: #808080; }\n\n/* -- Buttons sizes -------------------------------- */\n.btn {\n  min-width: 88px;\n  padding: 10px 14px; }\n\n.btn-lg,\n.btn-group-lg > .btn {\n  min-width: 122px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3; }\n\n.btn-sm,\n.btn-group-sm > .btn {\n  min-width: 64px;\n  padding: 4px 12px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.btn-xs,\n.btn-group-xs > .btn {\n  min-width: 46px;\n  padding: 2px 10px;\n  font-size: 10px;\n  line-height: 1.5; }\n\n.btn-circle {\n  width: 56px;\n  height: 56px;\n  min-width: 56px; }\n\n.btn-circle span {\n  line-height: 56px; }\n\n.btn-circle.btn-lg {\n  width: 78px;\n  height: 78px;\n  min-width: 78px; }\n\n.btn-circle.btn-lg span {\n  line-height: 78px; }\n\n.btn-circle.btn-sm {\n  width: 40px;\n  height: 40px;\n  min-width: 40px; }\n\n.btn-circle.btn-sm span {\n  line-height: 40px; }\n\n.btn-circle.btn-xs {\n  width: 30px;\n  height: 30px;\n  min-width: 30px; }\n\n.btn-circle.btn-xs span {\n  line-height: 30px; }\n\n/*-- Button groups --------------------------------- */\n.btn-group .btn {\n  border-radius: 2px; }\n\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n  outline-offset: 0;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: 0; }\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 0; }\n\n.btn-group > .btn:focus:hover,\n.btn-group-vertical > .btn:focus:hover,\n.btn-group > .btn:active:hover,\n.btn-group-vertical > .btn:active:hover,\n.btn-group > .btn.active:hover,\n.btn-group-vertical > .btn.active:hover {\n  z-index: 2; }\n\n/* -- Ripple effect -------------------------------- */\n.ripple-effect {\n  position: relative;\n  overflow: hidden;\n  -webkit-transform: translate3d(0, 0, 0); }\n\n.ink {\n  display: block;\n  position: absolute;\n  pointer-events: none;\n  border-radius: 50%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  background: #fff;\n  opacity: 1; }\n\n.ink.animate {\n  -webkit-animation: ripple .5s linear;\n  animation: ripple .5s linear; }\n\n@keyframes ripple {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(2.5);\n            transform: scale(2.5); } }\n\n@-webkit-keyframes ripple {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(2.5);\n    transform: scale(2.5); } }\n"

/***/ },

/***/ 897:
/***/ function(module, exports) {

module.exports = "@import https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic;\n/* -- import Roboto Font ---------------------------- */\n/* -- You can use this tables in Bootstrap (v3) projects. -- */\n/* -- Box model ------------------------------- */\n*,\n*:after,\n*:before {\n  box-sizing: border-box; }\n\n/* -- Demo style ------------------------------- */\nhtml,\nbody {\n  position: relative;\n  min-height: 100%;\n  height: 100%; }\n\nhtml {\n  position: relative;\n  overflow-x: hidden;\n  margin: 16px;\n  padding: 0;\n  min-height: 100%;\n  font-size: 62.5%; }\n\nbody {\n  font-family: 'RobotoDraft', 'Roboto', 'Helvetica Neue, Helvetica, Arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 1.4rem;\n  line-height: 2rem;\n  letter-spacing: 0.01rem;\n  color: #212121;\n  background-color: #f5f5f5;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility; }\n\n#demo {\n  margin: 20px auto;\n  max-width: 960px; }\n\n#demo h1 {\n  font-size: 2.4rem;\n  line-height: 3.2rem;\n  letter-spacing: 0;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit;\n  margin-bottom: 1rem;\n  text-align: center; }\n\n#demo h2 {\n  font-size: 1.5rem;\n  line-height: 2.8rem;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-align: center; }\n\n.shadow-z-1 {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\n/* -- Material Design Table style -------------- */\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 2rem;\n  background-color: #ffffff; }\n\n.table > thead > tr,\n.table > tbody > tr,\n.table > tfoot > tr {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  text-align: left;\n  padding: 1.6rem;\n  vertical-align: top;\n  border-top: 0;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.table > thead > tr > th {\n  font-weight: 400;\n  color: #757575;\n  vertical-align: bottom;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0; }\n\n.table > tbody + tbody {\n  border-top: 1px solid rgba(0, 0, 0, 0.12); }\n\n.table .table {\n  background-color: #ffffff; }\n\n.table .no-border {\n  border: 0; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 0.8rem; }\n\n.table-bordered {\n  border: 0; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 0;\n  border-bottom: 1px solid #e0e0e0; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-child(odd) > td,\n.table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr:hover > td,\n.table-hover > tbody > tr:hover > th {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n@media screen and (max-width: 768px) {\n  .table-responsive-vertical > .table {\n    margin-bottom: 0;\n    background-color: transparent; }\n  .table-responsive-vertical > .table > thead,\n  .table-responsive-vertical > .table > tfoot {\n    display: none; }\n  .table-responsive-vertical > .table > tbody {\n    display: block; }\n  .table-responsive-vertical > .table > tbody > tr {\n    display: block;\n    border: 1px solid #e0e0e0;\n    border-radius: 2px;\n    margin-bottom: 1.6rem; }\n  .table-responsive-vertical > .table > tbody > tr > td {\n    background-color: #ffffff;\n    display: block;\n    vertical-align: middle;\n    text-align: right; }\n  .table-responsive-vertical > .table > tbody > tr > td[data-title]:before {\n    content: attr(data-title);\n    float: left;\n    font-size: inherit;\n    font-weight: 400;\n    color: #757575; }\n  .table-responsive-vertical.shadow-z-1 {\n    box-shadow: none; }\n  .table-responsive-vertical.shadow-z-1 > .table > tbody > tr {\n    border: none;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n  .table-responsive-vertical > .table-bordered {\n    border: 0; }\n  .table-responsive-vertical > .table-bordered > tbody > tr > td {\n    border: 0;\n    border-bottom: 1px solid #e0e0e0; }\n  .table-responsive-vertical > .table-bordered > tbody > tr > td:last-child {\n    border-bottom: 0; }\n  .table-responsive-vertical > .table-striped > tbody > tr > td,\n  .table-responsive-vertical > .table-striped > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical > .table-striped > tbody > tr > td:nth-child(odd) {\n    background-color: #f5f5f5; }\n  .table-responsive-vertical > .table-hover > tbody > tr:hover > td,\n  .table-responsive-vertical > .table-hover > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical > .table-hover > tbody > tr > td:hover {\n    background-color: rgba(0, 0, 0, 0.12); } }\n\n.table-striped.table-mc-red > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-red > tbody > tr:nth-child(odd) > th {\n  background-color: #fde0dc; }\n\n.table-hover.table-mc-red > tbody > tr:hover > td,\n.table-hover.table-mc-red > tbody > tr:hover > th {\n  background-color: #f9bdbb; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-red > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td:nth-child(odd) {\n    background-color: #fde0dc; }\n  .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-red > tbody > tr > td:hover {\n    background-color: #f9bdbb; } }\n\n.table-striped.table-mc-pink > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-pink > tbody > tr:nth-child(odd) > th {\n  background-color: #fce4ec; }\n\n.table-hover.table-mc-pink > tbody > tr:hover > td,\n.table-hover.table-mc-pink > tbody > tr:hover > th {\n  background-color: #f8bbd0; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td:nth-child(odd) {\n    background-color: #fce4ec; }\n  .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr > td:hover {\n    background-color: #f8bbd0; } }\n\n.table-striped.table-mc-purple > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-purple > tbody > tr:nth-child(odd) > th {\n  background-color: #f3e5f5; }\n\n.table-hover.table-mc-purple > tbody > tr:hover > td,\n.table-hover.table-mc-purple > tbody > tr:hover > th {\n  background-color: #e1bee7; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td:nth-child(odd) {\n    background-color: #f3e5f5; }\n  .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr > td:hover {\n    background-color: #e1bee7; } }\n\n.table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > th {\n  background-color: #ede7f6; }\n\n.table-hover.table-mc-deep-purple > tbody > tr:hover > td,\n.table-hover.table-mc-deep-purple > tbody > tr:hover > th {\n  background-color: #d1c4e9; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td:nth-child(odd) {\n    background-color: #ede7f6; }\n  .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr > td:hover {\n    background-color: #d1c4e9; } }\n\n.table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > th {\n  background-color: #e8eaf6; }\n\n.table-hover.table-mc-indigo > tbody > tr:hover > td,\n.table-hover.table-mc-indigo > tbody > tr:hover > th {\n  background-color: #c5cae9; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td:nth-child(odd) {\n    background-color: #e8eaf6; }\n  .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr > td:hover {\n    background-color: #c5cae9; } }\n\n.table-striped.table-mc-blue > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-blue > tbody > tr:nth-child(odd) > th {\n  background-color: #e7e9fd; }\n\n.table-hover.table-mc-blue > tbody > tr:hover > td,\n.table-hover.table-mc-blue > tbody > tr:hover > th {\n  background-color: #d0d9ff; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td:nth-child(odd) {\n    background-color: #e7e9fd; }\n  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr > td:hover {\n    background-color: #d0d9ff; } }\n\n.table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > th {\n  background-color: #e1f5fe; }\n\n.table-hover.table-mc-light-blue > tbody > tr:hover > td,\n.table-hover.table-mc-light-blue > tbody > tr:hover > th {\n  background-color: #b3e5fc; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td:nth-child(odd) {\n    background-color: #e1f5fe; }\n  .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr > td:hover {\n    background-color: #b3e5fc; } }\n\n.table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > th {\n  background-color: #e0f7fa; }\n\n.table-hover.table-mc-cyan > tbody > tr:hover > td,\n.table-hover.table-mc-cyan > tbody > tr:hover > th {\n  background-color: #b2ebf2; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td:nth-child(odd) {\n    background-color: #e0f7fa; }\n  .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr > td:hover {\n    background-color: #b2ebf2; } }\n\n.table-striped.table-mc-teal > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-teal > tbody > tr:nth-child(odd) > th {\n  background-color: #e0f2f1; }\n\n.table-hover.table-mc-teal > tbody > tr:hover > td,\n.table-hover.table-mc-teal > tbody > tr:hover > th {\n  background-color: #b2dfdb; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td:nth-child(odd) {\n    background-color: #e0f2f1; }\n  .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr > td:hover {\n    background-color: #b2dfdb; } }\n\n.table-striped.table-mc-green > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-green > tbody > tr:nth-child(odd) > th {\n  background-color: #d0f8ce; }\n\n.table-hover.table-mc-green > tbody > tr:hover > td,\n.table-hover.table-mc-green > tbody > tr:hover > th {\n  background-color: #a3e9a4; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-green > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td:nth-child(odd) {\n    background-color: #d0f8ce; }\n  .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-green > tbody > tr > td:hover {\n    background-color: #a3e9a4; } }\n\n.table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > th {\n  background-color: #f1f8e9; }\n\n.table-hover.table-mc-light-green > tbody > tr:hover > td,\n.table-hover.table-mc-light-green > tbody > tr:hover > th {\n  background-color: #dcedc8; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td:nth-child(odd) {\n    background-color: #f1f8e9; }\n  .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr > td:hover {\n    background-color: #dcedc8; } }\n\n.table-striped.table-mc-lime > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-lime > tbody > tr:nth-child(odd) > th {\n  background-color: #f9fbe7; }\n\n.table-hover.table-mc-lime > tbody > tr:hover > td,\n.table-hover.table-mc-lime > tbody > tr:hover > th {\n  background-color: #f0f4c3; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td:nth-child(odd) {\n    background-color: #f9fbe7; }\n  .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr > td:hover {\n    background-color: #f0f4c3; } }\n\n.table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > th {\n  background-color: #fffde7; }\n\n.table-hover.table-mc-yellow > tbody > tr:hover > td,\n.table-hover.table-mc-yellow > tbody > tr:hover > th {\n  background-color: #fff9c4; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td:nth-child(odd) {\n    background-color: #fffde7; }\n  .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr > td:hover {\n    background-color: #fff9c4; } }\n\n.table-striped.table-mc-amber > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-amber > tbody > tr:nth-child(odd) > th {\n  background-color: #fff8e1; }\n\n.table-hover.table-mc-amber > tbody > tr:hover > td,\n.table-hover.table-mc-amber > tbody > tr:hover > th {\n  background-color: #ffecb3; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td:nth-child(odd) {\n    background-color: #fff8e1; }\n  .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr > td:hover {\n    background-color: #ffecb3; } }\n\n.table-striped.table-mc-orange > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-orange > tbody > tr:nth-child(odd) > th {\n  background-color: #fff3e0; }\n\n.table-hover.table-mc-orange > tbody > tr:hover > td,\n.table-hover.table-mc-orange > tbody > tr:hover > th {\n  background-color: #ffe0b2; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td:nth-child(odd) {\n    background-color: #fff3e0; }\n  .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr > td:hover {\n    background-color: #ffe0b2; } }\n\n.table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > th {\n  background-color: #fbe9e7; }\n\n.table-hover.table-mc-deep-orange > tbody > tr:hover > td,\n.table-hover.table-mc-deep-orange > tbody > tr:hover > th {\n  background-color: #ffccbc; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td:nth-child(odd) {\n    background-color: #fbe9e7; }\n  .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr > td:hover {\n    background-color: #ffccbc; } }\n\n/* -- Input styles ---------------------------------- */\n.form-group {\n  position: relative;\n  margin-top: 35px;\n  margin-bottom: 20px; }\n\n.input-group {\n  position: relative; }\n\n.form-control {\n  display: block;\n  height: 36px;\n  width: 100%;\n  border: none;\n  border-radius: 0 !important;\n  font-size: 16px;\n  font-weight: 300;\n  padding: 0;\n  background-color: transparent;\n  box-shadow: none;\n  border-bottom: 1px solid #757575; }\n\n.input-group .form-control {\n  position: relative;\n  z-index: inherit;\n  float: inherit;\n  width: 100%;\n  margin-bottom: 0; }\n\n.form-control:focus {\n  border-color: #757575;\n  outline: none;\n  box-shadow: none; }\n\n/* -- label styles ---------------------------------- */\nlabel {\n  position: absolute;\n  top: -18px;\n  color: #999;\n  font-size: 12px;\n  font-weight: 300;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.form-horizontal .control-label {\n  position: relative;\n  top: 0;\n  margin-bottom: 0; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    font-size: 16px; } }\n\n.float-label {\n  left: 0;\n  top: 7px;\n  font-size: 16px;\n  pointer-events: none; }\n\n/* active state */\n.form-control:focus ~ .float-label,\n.form-control:valid ~ .float-label {\n  top: -18px;\n  font-size: 12px; }\n\n/* input colors ---- */\n.form-control:focus ~ label {\n  color: #03a9f4; }\n\n.form-control:focus ~ .form-bar:before,\n.form-control:focus ~ .form-bar:after {\n  background: #03a9f4; }\n\n/* help-block */\n.form-group .help-block {\n  position: absolute; }\n\n.help-block {\n  color: #bdbdbd;\n  font-size: 12px;\n  font-weight: 300; }\n\n/* input addon ---*/\n.input-group-addon {\n  border: none;\n  background: transparent; }\n\n/* ------  inline ----*/\n.input-group-addon,\n.form-inline .input-group {\n  display: table-cell; }\n\n.input-group-addon,\n.input-group-btn {\n  width: inherit; }\n\n.input-group {\n  width: 100%; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    margin-top: 16px; }\n  .input-group-btn,\n  .input-group .form-control,\n  .input-group-addon,\n  .form-inline .input-group {\n    display: inline-block; }\n  .input-group {\n    width: auto; } }\n\n/* -- bar styles -------------------------------------- */\n.form-bar {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.form-bar:before,\n.form-bar:after {\n  content: '';\n  height: 1px;\n  width: 0;\n  bottom: 0;\n  position: absolute;\n  transition: 0.3s ease all;\n  -moz-transition: 0.3s ease all;\n  -webkit-transition: 0.3s ease all; }\n\n.form-bar:before {\n  left: 50%; }\n\n.form-bar:after {\n  right: 50%; }\n\n/* active state */\n.form-control:focus ~ .form-bar:before,\n.form-control:focus ~ .form-bar:after {\n  width: 50%; }\n\n/* -- highlighter styles ------------------------------ */\n.form-highlight {\n  position: absolute;\n  height: 60%;\n  width: 60px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.4; }\n\n/* active state */\n.form-control:focus ~ .form-highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* -- highlighter animation --------------------------- */\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #5264AE; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: #5264AE; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n/*-- Checkbox --------------------------- */\n/* \r\n * Core styles required for the checkboxes.\r\n * @author Jason Mayes 2014, www.jasonmayes.com\r\n*/\n.form-group.checkbox {\n  margin-top: 20px; }\n\n.checkbox input[type='checkbox'] {\n  height: 0;\n  width: 0;\n  opacity: 0; }\n\n.checkbox label {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  top: 10px;\n  padding-left: 0; }\n\n.checkbox .chk-span {\n  top: 0;\n  border: 1px solid #5a5a5a;\n  color: #1d1d1d;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 14px;\n  margin: 0 14px 14px 1px;\n  outline-color: #eaeaea;\n  padding: 0;\n  position: relative;\n  width: 14px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  z-index: 1; }\n\n.checkbox .chk-span.checked {\n  top: -2px;\n  border-left: 2px solid #03a9f4;\n  border-bottom: 4px solid #03a9f4;\n  border-top: 1px solid transparent;\n  border-right: 1px solid transparent;\n  -webkit-transform: rotate(-45deg) scaleY(0.5);\n  transform: rotate(-45deg) scaleY(0.5); }\n\n.checkbox .chk-span.checked {\n  border-left-color: #03a9f4;\n  border-bottom-color: #03a9f4; }\n\n.checkbox input[type='checkbox']:focus ~ label {\n  color: #03a9f4; }\n\n.checkbox input[type='checkbox']:focus ~ label .chk-span {\n  border-color: #03a9f4; }\n\n.checkbox input[type='checkbox']:focus ~ label .chk-span.checked {\n  border-left-color: #03a9f4;\n  border-bottom-color: #03a9f4;\n  border-top: 1px solid transparent;\n  border-right: 1px solid transparent; }\n\n@media (min-width: 768px) {\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 5px; } }\n\n.form-control-static {\n  font-size: 16px; }\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: transparent;\n  border-bottom-style: dashed; }\n\n#focusedInput {\n  border-color: #ccc;\n  border-color: rgba(82, 168, 236, 0.8);\n  outline: 0;\n  box-shadow: none; }\n\n.display-4 {\n  font-size: 112px;\n  font-size: 11.2rem;\n  line-height: 128px;\n  line-height: 12.8rem;\n  letter-spacing: -0.1px;\n  letter-spacing: -0.01rem;\n  font-weight: 100;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-3 {\n  font-size: 56px;\n  font-size: 5.6rem;\n  line-height: 84px;\n  line-height: 8.4rem;\n  letter-spacing: -0.05px;\n  letter-spacing: -0.005rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-2 {\n  font-size: 45px;\n  font-size: 4.5rem;\n  line-height: 48px;\n  line-height: 4.8rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-1 {\n  font-size: 34px;\n  font-size: 3.4rem;\n  line-height: 40px;\n  line-height: 4rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.headline {\n  font-size: 24px;\n  font-size: 2.4rem;\n  line-height: 32px;\n  line-height: 3.2rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.title {\n  font-size: 20px;\n  font-size: 2rem;\n  line-height: 28px;\n  line-height: 2.8rem;\n  letter-spacing: 0.05px;\n  letter-spacing: 0.005rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.subhead-2 {\n  font-size: 15px;\n  font-size: 1.5rem;\n  line-height: 28px;\n  line-height: 2.8rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.subhead-1 {\n  font-size: 15px;\n  font-size: 1.5rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.body-2 {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.body-1 {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.caption {\n  font-size: 12px;\n  font-size: 1.2rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.2px;\n  letter-spacing: 0.02rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.label {\n  font-size: 12px;\n  font-size: 1.2rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.menu {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.button {\n  font-size: 14px;\n  font-size: 1.4rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: uppercase; }\n\n@media only screen and (max-width: 960px) {\n  .subhead-2 {\n    font-size: 16px;\n    font-size: 1.6rem; }\n  .subhead-1 {\n    font-size: 16px;\n    font-size: 1.6rem; }\n  .body-2 {\n    font-size: 14px;\n    font-size: 1.4rem; }\n  .body-1 {\n    font-size: 14px;\n    font-size: 1.4rem; }\n  .menu {\n    font-size: 14px;\n    font-size: 1.4rem; } }\n\n.display-4,\n.display-3,\n.display-2,\n.display-1 {\n  margin: 0 0 14px 0;\n  margin-bottom: 1.4rem; }\n\n.headline,\n.title,\n.subhead-2,\n.subhead-1,\n.body-2,\n.body-1,\n.caption,\n.label,\n.menu,\n.button {\n  margin: 0 0 10px 0;\n  margin-bottom: 1rem; }\n"

/***/ },

/***/ 898:
/***/ function(module, exports) {

module.exports = ".btn {\n  font-family: \"Roboto\", 'Helvetica Neue, Helvetica, Arial', sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.1;\n  text-transform: uppercase;\n  letter-spacing: inherit;\n  color: rgba(255, 255, 255, 0.87); }\n\n.btn-default,\n.btn-link {\n  color: rgba(0, 0, 0, 0.87); }\n\n/* -- Buttons style ------------------------------------ */\n.btn {\n  outline: 0;\n  outline-offset: 0;\n  border: 0;\n  border-radius: 2px;\n  transition: all 0.15s ease-in-out;\n  -o-transition: all 0.15s ease-in-out;\n  -moz-transition: all 0.15s ease-in-out;\n  -webkit-transition: all 0.15s ease-in-out; }\n\n.btn:focus,\n.btn:active,\n.btn.active,\n.btn:active:focus,\n.btn.active:focus {\n  outline: 0;\n  outline-offset: 0;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\n/* -- Buttons types -------------------------------- */\n.btn-raised {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\n.btn-raised:active,\n.btn-raised.active,\n.btn-raised:active:focus,\n.btn-raised.active:focus {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.btn-raised:focus {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.btn.btn-circle {\n  padding: 0;\n  border-radius: 50%; }\n\n/* -- Buttons colors -------------------------------- */\n.btn-default,\n.dropdown-toggle.btn-default {\n  background-color: #ffffff; }\n\n.btn-default:hover,\n.dropdown-toggle.btn-default:hover {\n  background-color: #e5e5e5; }\n\n.btn-default:active,\n.dropdown-toggle.btn-default:active,\n.btn-default.active,\n.dropdown-toggle.btn-default.active {\n  background-color: #e5e5e5; }\n\n.btn-default:focus,\n.dropdown-toggle.btn-default:focus {\n  background-color: #cccccc; }\n\n.btn-default:disabled,\n.dropdown-toggle.btn-default:disabled,\n.btn-default.disabled,\n.dropdown-toggle.btn-default.disabled,\n.btn-default[disabled],\n.dropdown-toggle.btn-default[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-default .ink,\n.dropdown-toggle.btn-default .ink {\n  background-color: #b8b8b8; }\n\n.btn-flat.btn-default {\n  color: #212121;\n  background-color: transparent; }\n\n.btn-flat.btn-default:hover {\n  color: #141414;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-default:active,\n.btn-flat.btn-default.active {\n  color: #020202;\n  background-color: #cccccc; }\n\n.btn-flat.btn-default:focus {\n  color: #000000;\n  background-color: #cccccc; }\n\n.btn-flat.btn-default .ink {\n  background-color: #808080; }\n\n.btn-primary,\n.dropdown-toggle.btn-primary {\n  background-color: #5677fc; }\n\n.btn-primary:hover,\n.dropdown-toggle.btn-primary:hover {\n  background-color: #4e6cef; }\n\n.btn-primary:active,\n.dropdown-toggle.btn-primary:active,\n.btn-primary.active,\n.dropdown-toggle.btn-primary.active {\n  background-color: #4e6cef; }\n\n.btn-primary:focus,\n.dropdown-toggle.btn-primary:focus {\n  background-color: #455ede; }\n\n.btn-primary:disabled,\n.dropdown-toggle.btn-primary:disabled,\n.btn-primary.disabled,\n.dropdown-toggle.btn-primary.disabled,\n.btn-primary[disabled],\n.dropdown-toggle.btn-primary[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-primary .ink,\n.dropdown-toggle.btn-primary .ink {\n  background-color: #3b50ce; }\n\n.btn-flat.btn-primary {\n  color: #5677fc;\n  background-color: transparent; }\n\n.btn-flat.btn-primary:hover {\n  color: #4e6cef;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-primary:active,\n.btn-flat.btn-primary.active {\n  color: #455ede;\n  background-color: #cccccc; }\n\n.btn-flat.btn-primary:focus {\n  color: #3b50ce;\n  background-color: #cccccc; }\n\n.btn-flat.btn-primary .ink {\n  background-color: #808080; }\n\n.btn-success,\n.dropdown-toggle.btn-success {\n  background-color: #259b24; }\n\n.btn-success:hover,\n.dropdown-toggle.btn-success:hover {\n  background-color: #0a8f08; }\n\n.btn-success:active,\n.dropdown-toggle.btn-success:active,\n.btn-success.active,\n.dropdown-toggle.btn-success.active {\n  background-color: #0a8f08; }\n\n.btn-success:focus,\n.dropdown-toggle.btn-success:focus {\n  background-color: #0a7e07; }\n\n.btn-success:disabled,\n.dropdown-toggle.btn-success:disabled,\n.btn-success.disabled,\n.dropdown-toggle.btn-success.disabled,\n.btn-success[disabled],\n.dropdown-toggle.btn-success[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-success .ink,\n.dropdown-toggle.btn-success .ink {\n  background-color: #056f00; }\n\n.btn-flat.btn-success {\n  color: #259b24;\n  background-color: transparent; }\n\n.btn-flat.btn-success:hover {\n  color: #0a8f08;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-success:active,\n.btn-flat.btn-success.active {\n  color: #0a7e07;\n  background-color: #cccccc; }\n\n.btn-flat.btn-success:focus {\n  color: #056f00;\n  background-color: #cccccc; }\n\n.btn-flat.btn-success .ink {\n  background-color: #808080; }\n\n.btn-info,\n.dropdown-toggle.btn-info {\n  background-color: #03a9f4; }\n\n.btn-info:hover,\n.dropdown-toggle.btn-info:hover {\n  background-color: #039be5; }\n\n.btn-info:active,\n.dropdown-toggle.btn-info:active,\n.btn-info.active,\n.dropdown-toggle.btn-info.active {\n  background-color: #039be5; }\n\n.btn-info:focus,\n.dropdown-toggle.btn-info:focus {\n  background-color: #0288d1; }\n\n.btn-info:disabled,\n.dropdown-toggle.btn-info:disabled,\n.btn-info.disabled,\n.dropdown-toggle.btn-info.disabled,\n.btn-info[disabled],\n.dropdown-toggle.btn-info[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-info .ink,\n.dropdown-toggle.btn-info .ink {\n  background-color: #0277bd; }\n\n.btn-flat.btn-info {\n  color: #03a9f4;\n  background-color: transparent; }\n\n.btn-flat.btn-info:hover {\n  color: #039be5;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-info:active,\n.btn-flat.btn-info.active {\n  color: #0288d1;\n  background-color: #cccccc; }\n\n.btn-flat.btn-info:focus {\n  color: #0277bd;\n  background-color: #cccccc; }\n\n.btn-flat.btn-info .ink {\n  background-color: #808080; }\n\n.btn-warning,\n.dropdown-toggle.btn-warning {\n  background-color: #ffc107; }\n\n.btn-warning:hover,\n.dropdown-toggle.btn-warning:hover {\n  background-color: #ffb300; }\n\n.btn-warning:active,\n.dropdown-toggle.btn-warning:active,\n.btn-warning.active,\n.dropdown-toggle.btn-warning.active {\n  background-color: #ffb300; }\n\n.btn-warning:focus,\n.dropdown-toggle.btn-warning:focus {\n  background-color: #ffa000; }\n\n.btn-warning:disabled,\n.dropdown-toggle.btn-warning:disabled,\n.btn-warning.disabled,\n.dropdown-toggle.btn-warning.disabled,\n.btn-warning[disabled],\n.dropdown-toggle.btn-warning[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-warning .ink,\n.dropdown-toggle.btn-warning .ink {\n  background-color: #ff8f00; }\n\n.btn-flat.btn-warning {\n  color: #ffc107;\n  background-color: transparent; }\n\n.btn-flat.btn-warning:hover {\n  color: #ffb300;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-warning:active,\n.btn-flat.btn-warning.active {\n  color: #ffa000;\n  background-color: #cccccc; }\n\n.btn-flat.btn-warning:focus {\n  color: #ff8f00;\n  background-color: #cccccc; }\n\n.btn-flat.btn-warning .ink {\n  background-color: #808080; }\n\n.btn-danger,\n.dropdown-toggle.btn-danger {\n  background-color: #ff5722; }\n\n.btn-danger:hover,\n.dropdown-toggle.btn-danger:hover {\n  background-color: #f4511e; }\n\n.btn-danger:active,\n.dropdown-toggle.btn-danger:active,\n.btn-danger.active,\n.dropdown-toggle.btn-danger.active {\n  background-color: #f4511e; }\n\n.btn-danger:focus,\n.dropdown-toggle.btn-danger:focus {\n  background-color: #e64a19; }\n\n.btn-danger:disabled,\n.dropdown-toggle.btn-danger:disabled,\n.btn-danger.disabled,\n.dropdown-toggle.btn-danger.disabled,\n.btn-danger[disabled],\n.dropdown-toggle.btn-danger[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-danger .ink,\n.dropdown-toggle.btn-danger .ink {\n  background-color: #d84315; }\n\n.btn-flat.btn-danger {\n  color: #ff5722;\n  background-color: transparent; }\n\n.btn-flat.btn-danger:hover {\n  color: #f4511e;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-danger:active,\n.btn-flat.btn-danger.active {\n  color: #e64a19;\n  background-color: #cccccc; }\n\n.btn-flat.btn-danger:focus {\n  color: #d84315;\n  background-color: #cccccc; }\n\n.btn-flat.btn-danger .ink {\n  background-color: #808080; }\n\n/* -- Buttons sizes -------------------------------- */\n.btn {\n  min-width: 88px;\n  padding: 10px 14px; }\n\n.btn-lg,\n.btn-group-lg > .btn {\n  min-width: 122px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3; }\n\n.btn-sm,\n.btn-group-sm > .btn {\n  min-width: 64px;\n  padding: 4px 12px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.btn-xs,\n.btn-group-xs > .btn {\n  min-width: 46px;\n  padding: 2px 10px;\n  font-size: 10px;\n  line-height: 1.5; }\n\n.btn-circle {\n  width: 56px;\n  height: 56px;\n  min-width: 56px; }\n\n.btn-circle span {\n  line-height: 56px; }\n\n.btn-circle.btn-lg {\n  width: 78px;\n  height: 78px;\n  min-width: 78px; }\n\n.btn-circle.btn-lg span {\n  line-height: 78px; }\n\n.btn-circle.btn-sm {\n  width: 40px;\n  height: 40px;\n  min-width: 40px; }\n\n.btn-circle.btn-sm span {\n  line-height: 40px; }\n\n.btn-circle.btn-xs {\n  width: 30px;\n  height: 30px;\n  min-width: 30px; }\n\n.btn-circle.btn-xs span {\n  line-height: 30px; }\n\n/*-- Button groups --------------------------------- */\n.btn-group .btn {\n  border-radius: 2px; }\n\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n  outline-offset: 0;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: 0; }\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 0; }\n\n.btn-group > .btn:focus:hover,\n.btn-group-vertical > .btn:focus:hover,\n.btn-group > .btn:active:hover,\n.btn-group-vertical > .btn:active:hover,\n.btn-group > .btn.active:hover,\n.btn-group-vertical > .btn.active:hover {\n  z-index: 2; }\n\n/* -- Ripple effect -------------------------------- */\n.ripple-effect {\n  position: relative;\n  overflow: hidden;\n  -webkit-transform: translate3d(0, 0, 0); }\n\n.ink {\n  display: block;\n  position: absolute;\n  pointer-events: none;\n  border-radius: 50%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  background: #fff;\n  opacity: 1; }\n\n.ink.animate {\n  -webkit-animation: ripple .5s linear;\n  animation: ripple .5s linear; }\n\n@keyframes ripple {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(2.5);\n            transform: scale(2.5); } }\n\n@-webkit-keyframes ripple {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(2.5);\n    transform: scale(2.5); } }\n"

/***/ },

/***/ 899:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 900:
/***/ function(module, exports) {

module.exports = "<md-card class=\"_md\">\n  <md-card-header>\n    <span class=\"md-title\">{{ title }}</span>\n  </md-card-header>\n  <!-- this creates a google map on the page with the given lat/lng from -->\n  <!-- the component as the initial center of the map: -->\n  <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\">\n    <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\n  </sebm-google-map>\n</md-card>"

/***/ },

/***/ 901:
/***/ function(module, exports) {

module.exports = "<md-sidenav-container [class.m2app-dark]=\"isDarkTheme\">\n\n  <md-sidenav #sidenav mode=\"side\" class=\"app-sidenav\">\n\n\n    <md-toolbar class=\"sidenav-toolbar md-elevation-z2 md-accent\" color=\"accent\">\n      <div class=\"md-toolbar-layout\">\n        <md-toolbar-row>\n          Menu\n        </md-toolbar-row>\n      </div>\n    </md-toolbar>\n\n    <md-nav-list class=\"sidenav-list sidenav-toplevel\" fxlayout=\"column\" role=\"list\" style=\"display: flex; box-sizing: border-box; flex-direction: column; -webkit-box-orient: vertical; -webkit-box-direction: normal;\">\n<!--      <ms-sidenav-item class=\"sidenav-item\"> -->\n        <a class=\"sidenav-anchor\" md-list-item=\"\" md-ripple=\"\" role=\"listitem\" routerlinkactive=\"active\" href=\"#/home\">\n          <div class=\"md-list-item\">\n            <div class=\"md-list-text\"></div>\n            <md-icon role=\"img\" class=\"material-icons\" aria-label=\"home\">home</md-icon>\n            <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">Home</span>\n            <span fxflex=\"\" style=\"flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;\"></span>\n          </div>\n          <div class=\"md-ripple-background\"></div>\n        </a>\n<!--      </ms-sidenav-item>-->\n<!--      <ms-sidenav-item class=\"sidenav-item\"> -->\n        <a class=\"sidenav-anchor\" md-list-item=\"\" md-ripple=\"\" role=\"listitem\" routerlinkactive=\"active\" href=\"#/about\">\n          <div class=\"md-list-item\">\n            <div class=\"md-list-text\"></div>\n            <md-icon role=\"img\" class=\"material-icons\" aria-label=\"map\">map</md-icon>\n            <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">About</span>\n            <span fxflex=\"\" style=\"flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;\"></span>\n          </div>\n          <div class=\"md-ripple-background\"></div>\n        </a>\n<!--      </ms-sidenav-item>-->\n<!--      <ms-sidenav-item class=\"sidenav-item\"> -->\n        <a class=\"sidenav-anchor\" md-list-item=\"\" md-ripple=\"\" role=\"listitem\" routerlinkactive=\"active\" href=\"#/store\">\n          <div class=\"md-list-item\">\n            <div class=\"md-list-text\"></div>\n            <md-icon role=\"img\" class=\"material-icons\" aria-label=\"store\">store</md-icon>\n            <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">Store</span>\n            <span fxflex=\"\" style=\"flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;\"></span>\n          </div>\n          <div class=\"md-ripple-background\"></div>\n        </a>\n<!--      </ms-sidenav-item>-->\n<!--      <ms-sidenav-item class=\"sidenav-item\"> -->\n        <a class=\"sidenav-anchor\" md-list-item=\"\" md-ripple=\"\" role=\"listitem\" routerlinkactive=\"active\" href=\"#/products\">\n          <div class=\"md-list-item\">\n            <div class=\"md-list-text\"></div>\n            <md-icon role=\"img\" class=\"material-icons\" aria-label=\"apps\">apps</md-icon>\n            <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">Products</span>\n            <span fxflex=\"\" style=\"flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;\"></span>\n          </div>\n          <div class=\"md-ripple-background\"></div>\n        </a>\n<!--      </ms-sidenav-item>-->\n    </md-nav-list>  \n\n  </md-sidenav>\n\n  <md-toolbar color=\"primary\">\n    <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\n      <i class=\"material-icons app-toolbar-menu\">menu</i>\n    </button>\n\n    {{title}}\n\n    <span class=\"app-toolbar-filler\"></span>\n    <button md-button (click)=\"isDarkTheme = !isDarkTheme\">TOGGLE DARK THEME</button>\n  </md-toolbar>\n\n  <div class=\"app-content\">\n    <router-outlet></router-outlet>\n  </div>\n  \n</md-sidenav-container>\n\n<span class=\"app-action\" [class.m2app-dark]=\"isDarkTheme\">\n  <button md-fab><md-icon>check circle</md-icon></button>\n</span>"

/***/ },

/***/ 902:
/***/ function(module, exports) {

module.exports = "<div class=\"app-content\">\n\n  <md-card>\n    <button md-button>FLAT</button>\n    <button md-raised-button md-tooltip=\"This is a tooltip!\">RAISED</button>\n    <button md-raised-button color=\"primary\">PRIMARY RAISED</button>\n    <button md-raised-button color=\"accent\">ACCENT RAISED</button>\n  </md-card>\n\n  <md-card>\n    <md-checkbox>Unchecked</md-checkbox>\n    <md-checkbox [checked]=\"true\">Checked</md-checkbox>\n    <md-checkbox [indeterminate]=\"true\">Indeterminate</md-checkbox>\n    <md-checkbox [disabled]=\"true\">Disabled</md-checkbox>\n  </md-card>\n\n  <md-card>\n    <md-radio-button name=\"symbol\">Alpha</md-radio-button>\n    <md-radio-button name=\"symbol\">Beta</md-radio-button>\n    <md-radio-button name=\"symbol\" disabled>Gamma</md-radio-button>\n  </md-card>\n\n  <md-card class=\"app-input-section\">\n    <input mdInput placeholder=\"First name\" />\n\n    <input mdInput #nickname placeholder=\"Nickname\" maxlength=\"50\" />\n      <md-hint align=\"end\">\n        {{nickname.characterCount}} / 50\n      </md-hint>\n\n    <input mdInput />\n      <md-placeholder>\n        <i class=\"material-icons app-input-icon\">android</i> Favorite phone\n      </md-placeholder>\n\n    <input mdInput placeholder=\"Motorcycle model\" />\n      <span md-prefix>\n        <i class=\"material-icons app-input-icon\">motorcycle</i>\n        &nbsp;\n      </span>\n\n  </md-card>\n\n  <md-card>\n    <md-list class=\"app-list\">\n      <md-list-item *ngFor=\"let food of foods\">\n        <h3 md-line>{{food.name}}</h3>\n        <p md-line class=\"demo-secondary-text\">{{food.rating}}</p>\n      </md-list-item>\n    </md-list>\n  </md-card>\n\n  <md-card>\n    <md-spinner class=\"app-spinner\"></md-spinner>\n    <md-spinner color=\"accent\" class=\"app-spinner\"></md-spinner>\n  </md-card>\n\n  <md-card>\n    <label>\n      Indeterminate progress-bar\n      <md-progress-bar\n          class=\"app-progress\"\n          mode=\"indeterminate\"\n          aria-label=\"Indeterminate progress-bar example\"></md-progress-bar>\n    </label>\n\n    <label>\n      Determinate progress bar - {{progress}}%\n      <md-progress-bar\n          class=\"app-progress\"\n          color=\"accent\"\n          mode=\"determinate\"\n          [value]=\"progress\"\n          aria-label=\"Determinate progress-bar example\"></md-progress-bar>\n    </label>\n  </md-card>\n\n  <md-card>\n    <md-tab-group>\n      <md-tab label=\"Earth\">\n        <p>EARTH</p>\n      </md-tab>\n      <md-tab label=\"Fire\">\n        <p>FIRE</p>\n      </md-tab>\n    </md-tab-group>\n  </md-card>\n\n  <md-card>\n    <md-icon>build</md-icon>\n  </md-card>\n\n  <md-card>\n    <button md-button [md-menu-trigger-for]=\"menu\">\n      MENU\n    </button>\n  </md-card>\n\n  <md-menu #menu=\"mdMenu\">\n    <button md-menu-item>Lemon</button>\n    <button md-menu-item>Lime</button>\n    <button md-menu-item>Banana</button>\n  </md-menu>\n\n  <md-card>\n    <p>Last dialog result: {{lastDialogResult}}</p>\n    <button md-raised-button (click)=\"openDialog()\">DIALOG</button>\n    <button md-raised-button (click)=\"showSnackbar()\">SNACKBAR</button>\n  </md-card>\n\n</div>\n"

/***/ },

/***/ 903:
/***/ function(module, exports) {

module.exports = "<p>\n  product-editor works!\n</p>\n"

/***/ },

/***/ 904:
/***/ function(module, exports) {

module.exports = "<p>\n  product-viewer works!\n</p>\n"

/***/ },

/***/ 905:
/***/ function(module, exports) {

module.exports = "<md-icon role=\"img\" class=\"material-icons\" aria-label=\"apps\">apps</md-icon>\n<span class=\"display-1\">Products</span><br/>\n<app-products-list\n  [products]=\"products\"\n  (viewProduct)=\"viewProduct($event)\"\n  (editProduct)=\"editProduct($event)\">\n</app-products-list>\n"

/***/ },

/***/ 906:
/***/ function(module, exports) {

module.exports = "  <form class=\"form-horizontal\" role=\"form\" (submit)=\"search(term.value)\">\n    <div class=\"form-group\">\n      <input type=\"text\" #term (keyup)=\"search(term.value)\" [value]=\"terms\" class=\"form-control\" id=\"searchInput1\" required>\n      <span class=\"form-highlight\"></span>\n      <span class=\"form-bar\"></span>\n      <label class=\"search-label\" for=\"searchInput1\">Search</label>\n    </div>\n  </form>      \n\n  <p>Results: {{ totalProducts$ | async }}</p>\n\n  <!-- Responsive table starts here -->\n  <!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->\n  <div class=\"table-responsive-vertical shadow-z-1\">\n\n  <!-- Table starts here -->\n  <table id=\"table\" class=\"table table-hover table-mc-light-blue\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>Title</th>\n          <th>Link</th>\n          <th>Status</th>\n          <th>View</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let product of products$ | async \">\n          <td data-title=\"ID\">{{ product.id }}</td>\n          <td data-title=\"Title\">{{ product.title }}</td>\n          <td data-title=\"Link\">\n            <a href=\"{{ product.link }}\" target=\"_blank\">IMDB</a>\n          </td>\n          <td data-title=\"Status\">{{ product.status }}</td>\n          <td data-title=\"View\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-raised btn-default\" (click)=\"viewProductButton(product.id)\">View</button>\n          </td>\n          <td data-title=\"Edit\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-raised btn-default\" (click)=\"editProductButton(product.id)\">Edit</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>"

/***/ },

/***/ 907:
/***/ function(module, exports) {

module.exports = "<div id=\"demo\">\n  <md-icon role=\"img\" class=\"material-icons\" aria-label=\"store\">store</md-icon>\n  <span class=\"display-1\">Store</span><br/>\n  <small><a href=\"http://codepen.io/zavoloklom/pen/IGkDz\">Other Material Design works</a></small>\n\n  <form class=\"form-horizontal\" role=\"form\" (submit)=\"search(term.value)\">\n    <div class=\"form-group\">\n      <input type=\"text\" #term (keyup)=\"search(term.value)\" [value]=\"terms\" class=\"form-control\" id=\"searchInput1\" required>\n      <span class=\"form-highlight\"></span>\n      <span class=\"form-bar\"></span>\n      <label class=\"search-label\" for=\"searchInput1\">Search</label>\n    </div>\n  </form>      \n\n  <p>Results: {{ total$ | async }}</p>\n\n  <!-- Responsive table starts here -->\n  <!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->\n  <div class=\"table-responsive-vertical shadow-z-1\">\n\n  <!-- Table starts here -->\n  <table id=\"table\" class=\"table table-hover table-mc-light-blue\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>Title</th>\n          <th>Link</th>\n          <th>Status</th>\n        </tr>\n      </thead>\n      <tbody>\n<!--        \n        <tr>\n          <td data-title=\"ID\">1</td>\n          <td data-title=\"Title\">Material Design Color Palette</td>\n          <td data-title=\"Link\">\n            <a href=\"https://github.com/zavoloklom/material-design-color-palette\" target=\"_blank\">GitHub</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">2</td>\n          <td data-title=\"Title\">Material Design Iconic Font</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/uqCsB\" target=\"_blank\">Codepen</a>\n            <a href=\"https://github.com/zavoloklom/material-design-iconic-font\" target=\"_blank\">GitHub</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">3</td>\n          <td data-title=\"Title\">Material Design Hierarchical Display</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/eNaEBM\" target=\"_blank\">Codepen</a>\n            <a href=\"https://github.com/zavoloklom/material-design-hierarchical-display\" target=\"_blank\">GitHub</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">4</td>\n          <td data-title=\"Title\">Material Design Sidebar</td>\n          <td data-title=\"Link\"><a href=\"http://codepen.io/zavoloklom/pen/dIgco\" target=\"_blank\">Codepen</a></td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">5</td>\n          <td data-title=\"Title\">Material Design Tiles</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/wtApI\" target=\"_blank\">Codepen</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">6</td>\n          <td data-title=\"Title\">Material Design Typography</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/IkaFL\" target=\"_blank\">Codepen</a>\n            <a href=\"https://github.com/zavoloklom/material-design-typography\" target=\"_blank\">GitHub</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">7</td>\n          <td data-title=\"Title\">Material Design Buttons</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/Gubja\" target=\"_blank\">Codepen</a>\n          </td>\n          <td data-title=\"Status\">In progress</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">8</td>\n          <td data-title=\"Title\">Material Design Form Elements</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/yaozl\" target=\"_blank\">Codepen</a>\n          </td>\n          <td data-title=\"Status\">In progress</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">9</td>\n          <td data-title=\"Title\">Material Design Email Template</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/qEVqzx\" target=\"_blank\">Codepen</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">10</td>\n          <td data-title=\"Title\">Material Design Animation Timing (old one)</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/Jbrho\" target=\"_blank\">Codepen</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n-->\n        <tr *ngFor=\"let item of items$ | async\">\n          <td data-title=\"ID\">{{ item.id }}</td>\n          <td data-title=\"Title\">{{ item.title }}</td>\n          <td data-title=\"Link\">\n            <a href=\"http://www.imdb.com\" target=\"_blank\">IMDB</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n  <app-pagination [total]=\"total$ | async\" [page]=\"page\" (goTo)=\"goToPage($event)\"></app-pagination>\n</div>\n<!---- END --->\n"

/***/ },

/***/ 908:
/***/ function(module, exports) {

module.exports = "<!--<ul *ngIf=\"totalPages() > 1\" class=\"pagination pagination-sm no-margin pull-right\">\n  <li *ngIf=\"page != 1\"><a (click)=\"pageClicked(prevPage())\">«</a></li>\n  <li *ngFor=\"let p of pagesRange()\"><a (click)=\"pageClicked(p)\">{{p}}</a></li>\n  <li *ngIf=\"totalPages() > page\"><a (click)=\"pageClicked(nextPage())\">»</a></li>\n</ul>-->\n\n<div class=\"btn-toolbar\" role=\"toolbar\">\n  <div *ngIf=\"totalPages() > 1\" class=\"btn-group\">\n    <button type=\"button\" *ngIf=\"page != 1\" (click)=\"pageClicked(prevPage())\" class=\"btn btn-raised ripple-effect btn-default\">«</button>\n    <button type=\"button\" *ngFor=\"let p of pagesRange()\" (click)=\"pageClicked(p)\" class=\"btn btn-raised ripple-effect btn-default\">{{p}}</button>\n    <button type=\"button\" *ngIf=\"totalPages() > page\" (click)=\"pageClicked(nextPage())\" class=\"btn btn-raised ripple-effect btn-default\">»</button>\n  </div>\n</div>\n"

/***/ },

/***/ 909:
/***/ function(module, exports) {

module.exports = "<app-search-list></app-search-list>"

/***/ }

},[1164]);
//# sourceMappingURL=main.bundle.map