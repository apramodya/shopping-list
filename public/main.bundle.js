webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-shopping-item></app-shopping-item>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_item_shopping_item_component__ = __webpack_require__("./src/app/shopping-item/shopping-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__shopping_item_shopping_item_component__["a" /* ShoppingItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getShoppingItems = function () {
        return this.http.get('api/items');
    };
    DataService.prototype.addShoppingItem = function (newItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Typ', 'Application/json');
        return this.http.post('api/item/', newItem, { headers: headers });
    };
    DataService.prototype.deleteShoppingItem = function (id) {
        return this.http.delete('api/item/' + id);
    };
    DataService.prototype.updateShoppingItem = function (newItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Typ', 'Application/json');
        return this.http.put('api/item/' + newItem._id, newItem, { headers: headers });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shopping-item/shopping-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping-item/shopping-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #frm=\"ngForm\" (ngSubmit)=\"addItem(frm)\" *ngIf=\"!toggleForm\">\n    <h2>Add Item</h2>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"itemName\" value=\"\" ngModel required autofocus>\n    </div>\n    <div class=\"form-group\">\n      <label>Quantity</label>\n      <input type=\"number\" class=\"form-control\" name=\"itemQuantity\" value=\"\" ngModel required>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-primary btn-sm\" [disabled]=\"frm.invalid\">Submit</button>\n      <button class=\"btn btn-success btn-sm\" type=\"reset\">Clear</button>\n    </div>\n  </form >\n\n  <form #editForm=\"ngForm\" (ngSubmit)=\"updateItem(editForm)\" *ngIf=\"toggleForm\">\n    <h2>Edit Item</h2>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"itemName\" value=\"\" [ngModel]=\"selectedItem.itemName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Quantity</label>\n      <input type=\"number\" class=\"form-control\" name=\"itemQuantity\" value=\"\" [ngModel]=\"selectedItem.itemQuantity\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-success btn-sm\" >Save</button>\n    </div>\n  </form>\n\n  <h2>Shopping List</h2>\n\n  <div *ngFor=\"let item of shoppingItemList\">\n    <div class=\"row\">\n      <div class=\"col-md-1\">\n        <input type=\"checkbox\" [checked]=\"item.itemBought\" (click)=\"updateCheck(item)\">\n      </div>\n      <div class=\"col-md-3\">\n        {{item.itemName}}\n      </div>\n      <div class=\"col-md-2\">\n        {{item.itemQuantity}}\n      </div>\n      <div class=\"col-md-3\">\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"showEditForm(item)\" [disabled]=\"toggleForm\">Edit</button>\n      </div>\n      <div class=\"col-md-3\">\n        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteItem(item._id)\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shopping-item/shopping-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingItemComponent = /** @class */ (function () {
    function ShoppingItemComponent(dataService) {
        this.dataService = dataService;
        this.shoppingItemList = [];
        this.toggleForm = false;
    }
    ShoppingItemComponent.prototype.getItems = function () {
        var _this = this;
        this.dataService.getShoppingItems()
            .subscribe(function (items) {
            _this.shoppingItemList = items;
        });
    };
    ShoppingItemComponent.prototype.addItem = function (form) {
        var _this = this;
        var newItem = {
            itemName: form.value.itemName,
            itemQuantity: form.value.itemQuantity,
            itemBought: false
        };
        this.dataService.addShoppingItem(newItem).subscribe(function (item) {
            console.log(item);
            _this.getItems();
        });
    };
    ShoppingItemComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.dataService.deleteShoppingItem(id).subscribe(function (data) {
            console.log(data);
            _this.getItems();
        });
    };
    ShoppingItemComponent.prototype.showEditForm = function (item) {
        this.selectedItem = item;
        this.toggleForm = !this.toggleForm;
    };
    ShoppingItemComponent.prototype.updateItem = function (form) {
        var _this = this;
        var newItem = {
            _id: this.selectedItem._id,
            itemName: form.value.itemName,
            itemQuantity: form.value.itemQuantity,
            itemBought: form.value.itemBought
        };
        this.dataService.updateShoppingItem(newItem).subscribe(function (item) {
            console.log(item);
            _this.getItems();
        });
        this.toggleForm = !this.toggleForm;
    };
    ShoppingItemComponent.prototype.updateCheck = function (item) {
        var _this = this;
        item.itemBought = !item.itemBought;
        this.dataService.updateShoppingItem(item).subscribe(function (result) {
            console.log('updated');
            _this.getItems();
        });
    };
    ShoppingItemComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    ShoppingItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-shopping-item',
            template: __webpack_require__("./src/app/shopping-item/shopping-item.component.html"),
            styles: [__webpack_require__("./src/app/shopping-item/shopping-item.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ShoppingItemComponent);
    return ShoppingItemComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map