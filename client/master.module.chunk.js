webpackJsonp(["master.module"],{

/***/ "./src/app/pages/master/iku/iku.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>IKU</nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"form-group\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"submit($event)\" (createConfirm)=\"addData($event)\">\r\n      </ng2-smart-table>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "./src/app/pages/master/iku/iku.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IkuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IkuComponent = /** @class */ (function () {
    function IkuComponent(modalService, toastr, service) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.tabledata = [];
        this.yearPeriode = __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY");
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true
            },
            mode: "inline",
            sort: true,
            hideSubHeader: false,
            actions: {
                add: true,
                edit: true,
                delete: false,
                position: "right",
                columnTitle: "Modify",
                width: "10%"
            },
            pager: {
                display: true,
                perPage: 30
            },
            columns: {
                KODE_IKU: {
                    title: "Kode Iku",
                    type: "string",
                    filter: false,
                    editable: false,
                    width: "30%"
                },
                DESKRIPSI: {
                    title: "Description",
                    type: "number",
                    filter: false,
                    editable: true,
                    width: "30%"
                },
                TIPE_IKU: {
                    title: "IKU Type",
                    type: "html",
                    width: "30%",
                    editor: {
                        type: "list",
                        config: {
                            list: [
                                { value: "QUANTITATIVE", title: "QUANTITATIVE" },
                                { value: "QUALITATIVE", title: "QUALITATIVE" }
                            ]
                        }
                    }
                }
            }
        };
        this.loadData();
    }
    IkuComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("mst_ikus").subscribe(function (response) {
            if (response != null) {
                _this.tabledata = response;
                console.log(JSON.stringify(response));
                _this.source.load(_this.tabledata);
            }
        });
    };
    IkuComponent.prototype.submit = function (event) {
        var _this = this;
        this.tabledata.forEach(function (element, ind) {
            if (element.KODE_IKU == event.newData.KODE_IKU) {
                element.KODE_IKU = event.newData.KODE_IKU;
                element.DESKRIPSI = event.newData.DESKRIPSI;
                element.TIPE_IKU = event.newData.TIPE_IKU;
                _this.service
                    .patchreq("mst_ikus", _this.tabledata[ind])
                    .subscribe(function (response) {
                    console.log(JSON.stringify(response));
                    event.confirm.resolve(event.newData);
                    _this.toastr.success("Data Updated!");
                });
            }
        });
    };
    IkuComponent.prototype.addData = function (event) {
        var _this = this;
        console.log(event.newData);
        var data = {
            KODE_IKU: event.newData.KODE_IKU,
            DESKRIPSI: event.newData.DESKRIPSI,
            TIPE_IKU: event.newData.TIPE_IKU,
            USER_CREATED: "Admin",
            DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
            USER_UPDATED: "Admin",
            DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format()
        };
        this.service.postreq("mst_ikus", data).subscribe(function (response) {
            console.log(response);
            event.confirm.resolve(event.newData);
            _this.toastr.success("Data Saved!");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], IkuComponent.prototype, "myForm", void 0);
    IkuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-iku",
            template: __webpack_require__("./src/app/pages/master/iku/iku.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__["a" /* BackendService */]])
    ], IkuComponent);
    return IkuComponent;
}());



/***/ }),

/***/ "./src/app/pages/master/master-bank/master.bank.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Bank</nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"form-group\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"submit($event)\" (createConfirm)=\"addData($event)\">\r\n      </ng2-smart-table>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "./src/app/pages/master/master-bank/master.bank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterBankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MasterBankComponent = /** @class */ (function () {
    function MasterBankComponent(modalService, toastr, service) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.tabledata = [];
        this.yearPeriode = __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY");
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true
            },
            mode: "inline",
            sort: true,
            hideSubHeader: false,
            actions: {
                add: true,
                edit: true,
                delete: false,
                position: "right",
                columnTitle: "Modify",
                width: "10%"
            },
            pager: {
                display: true,
                perPage: 30
            },
            columns: {
                ID_BANK: {
                    title: "Id Bank",
                    type: "string",
                    filter: false,
                    editable: false,
                    width: "30%"
                },
                INISIAL: {
                    title: "Inisial ",
                    type: "number",
                    filter: false,
                    editable: true,
                    width: "30%"
                },
                DESCRIPTION: {
                    title: "Description",
                    type: "number",
                    filter: false,
                    editable: true,
                    width: "30%"
                },
                FLAG_ACTIVE: {
                    title: "Flag Active",
                    type: "html",
                    width: "10%",
                    editor: {
                        type: "list",
                        config: {
                            list: [{ value: "Y", title: "Y" }, { value: "N", title: "N" }]
                        }
                    }
                }
            }
        };
        this.loadData();
    }
    MasterBankComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("mst_banks").subscribe(function (response) {
            if (response != null) {
                _this.tabledata = response;
                console.log(JSON.stringify(response));
                _this.source.load(_this.tabledata);
            }
        });
    };
    MasterBankComponent.prototype.submit = function (event) {
        var _this = this;
        this.tabledata.forEach(function (element, ind) {
            if (element.ID_BANK == event.newData.ID_BANK) {
                element.INISIAL = event.newData.ID_BANK;
                element.DESCRIPTION = event.newData.DESCRIPTION;
                element.FLAG_ACTIVE = event.newData.FLAG_ACTIVE;
                _this.service
                    .patchreq("mst_banks", event.newData)
                    .subscribe(function (response) {
                    console.log(JSON.stringify(response));
                    event.confirm.resolve(event.newData);
                    _this.toastr.success("Data Updated!");
                });
            }
        });
    };
    MasterBankComponent.prototype.addData = function (event) {
        var _this = this;
        console.log(event.newData);
        var data = {
            ID_BANK: event.newData.ID_BANK,
            INISIAL: event.newData.INISIAL,
            DESCRIPTION: event.newData.DESCRIPTION,
            FLAG_ACTIVE: event.newData.FLAG_ACTIVE,
            USER_CREATED: "Admin",
            DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
            USER_UPDATED: "Admin",
            DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format()
        };
        this.tabledata.push(data);
        this.service.postreq("mst_banks", data).subscribe(function (response) {
            console.log(response);
            event.confirm.resolve(event.newData);
            _this.toastr.success("Data Saved!");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], MasterBankComponent.prototype, "myForm", void 0);
    MasterBankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-master-bank",
            template: __webpack_require__("./src/app/pages/master/master-bank/master.bank.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__["a" /* BackendService */]])
    ], MasterBankComponent);
    return MasterBankComponent;
}());



/***/ }),

/***/ "./src/app/pages/master/master-user/master.user.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>User</nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"form-group\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"submit($event)\" (createConfirm)=\"addData($event)\">\r\n      </ng2-smart-table>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "./src/app/pages/master/master-user/master.user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MasterUserComponent = /** @class */ (function () {
    function MasterUserComponent(modalService, toastr, service) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.tabledata = [];
        this.yearPeriode = __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY");
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true
            },
            mode: "inline",
            sort: true,
            hideSubHeader: false,
            actions: {
                add: true,
                edit: true,
                delete: false,
                position: "right",
                columnTitle: "Modify",
                width: "10%"
            },
            pager: {
                display: true,
                perPage: 30
            },
            columns: {
                ID_USER: {
                    title: "Id User",
                    type: "string",
                    filter: false,
                    editable: false,
                    width: "30%"
                },
                USER_NAME: {
                    title: "Name",
                    type: "number",
                    filter: false,
                    editable: true,
                    width: "30%"
                },
                TEAM: {
                    title: "Team",
                    type: "number",
                    filter: false,
                    editable: true,
                    width: "30%"
                },
                JABATAN: {
                    title: "Jabatan",
                    type: "number",
                    filter: false,
                    editable: true,
                    width: "30%"
                },
                PASSWORD: {
                    title: "Password",
                    type: "number",
                    filter: false,
                    editable: true,
                    width: "30%"
                }
            }
        };
        this.loadData();
    }
    MasterUserComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("mst_users").subscribe(function (response) {
            if (response != null) {
                _this.tabledata = response;
                console.log(JSON.stringify(response));
                _this.source.load(_this.tabledata);
            }
        });
    };
    MasterUserComponent.prototype.submit = function (event) {
        var _this = this;
        this.tabledata.forEach(function (element, ind) {
            if (element.ID_USER == event.newData.ID_USER) {
                element.USER_NAME = event.newData.USER_NAME;
                element.PASSWORD = event.newData.PASSWORD;
                element.TEAM = event.newData.TEAM;
                element.JABATAN = event.newData.JABATAN;
                _this.service
                    .patchreq("mst_users", event.newData)
                    .subscribe(function (response) {
                    console.log(JSON.stringify(response));
                    event.confirm.resolve(event.newData);
                    _this.toastr.success("Data Updated!");
                });
            }
        });
    };
    MasterUserComponent.prototype.addData = function (event) {
        var _this = this;
        console.log(event.newData);
        var data = {
            ID_USER: event.newData.ID_USER,
            USER_NAME: event.newData.USER_NAME,
            PASSWORD: event.newData.PASSWORD,
            TEAM: event.newData.TEAM,
            JABATAN: event.newData.JABATAN,
            USER_CREATED: "Admin",
            DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
            USER_UPDATED: "Admin",
            DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format()
        };
        this.tabledata.push(data);
        this.service.postreq("mst_users", data).subscribe(function (response) {
            console.log(response);
            event.confirm.resolve(event.newData);
            _this.toastr.success("Data Saved!");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], MasterUserComponent.prototype, "myForm", void 0);
    MasterUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-master-user",
            template: __webpack_require__("./src/app/pages/master/master-user/master.user.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__["a" /* BackendService */]])
    ], MasterUserComponent);
    return MasterUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/master/master.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/master/master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasterComponent = /** @class */ (function () {
    function MasterComponent() {
    }
    MasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-master",
            template: __webpack_require__("./src/app/pages/master/master.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/pages/master/master.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterModule", function() { return MasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__master_router_module__ = __webpack_require__("./src/app/pages/master/master.router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__master_router_module__["a" /* MasterRouterModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot()
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_2__master_router_module__["b" /* routedComponents */].slice(),
            entryComponents: [],
            providers: [__WEBPACK_IMPORTED_MODULE_4__core_data_backend_service__["a" /* BackendService */]]
        })
    ], MasterModule);
    return MasterModule;
}());



/***/ }),

/***/ "./src/app/pages/master/master.router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterRouterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__master_component__ = __webpack_require__("./src/app/pages/master/master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__master_bank_master_bank_component__ = __webpack_require__("./src/app/pages/master/master-bank/master.bank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__master_user_master_user_component__ = __webpack_require__("./src/app/pages/master/master-user/master.user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_bank_master_user_bank_component__ = __webpack_require__("./src/app/pages/master/user-bank/master.user.bank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__iku_iku_component__ = __webpack_require__("./src/app/pages/master/iku/iku.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__master_component__["a" /* MasterComponent */],
        children: [
            {
                path: "master-bank",
                component: __WEBPACK_IMPORTED_MODULE_3__master_bank_master_bank_component__["a" /* MasterBankComponent */]
            },
            {
                path: "master-user",
                component: __WEBPACK_IMPORTED_MODULE_4__master_user_master_user_component__["a" /* MasterUserComponent */]
            },
            {
                path: "user-bank",
                component: __WEBPACK_IMPORTED_MODULE_5__user_bank_master_user_bank_component__["a" /* MasterUserBankComponent */]
            },
            {
                path: "iku",
                component: __WEBPACK_IMPORTED_MODULE_6__iku_iku_component__["a" /* IkuComponent */]
            }
        ]
    }
];
var MasterRouterModule = /** @class */ (function () {
    function MasterRouterModule() {
    }
    MasterRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], MasterRouterModule);
    return MasterRouterModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__master_component__["a" /* MasterComponent */],
    __WEBPACK_IMPORTED_MODULE_3__master_bank_master_bank_component__["a" /* MasterBankComponent */],
    __WEBPACK_IMPORTED_MODULE_4__master_user_master_user_component__["a" /* MasterUserComponent */],
    __WEBPACK_IMPORTED_MODULE_5__user_bank_master_user_bank_component__["a" /* MasterUserBankComponent */],
    __WEBPACK_IMPORTED_MODULE_6__iku_iku_component__["a" /* IkuComponent */]
];


/***/ }),

/***/ "./src/app/pages/master/user-bank/master.user.bank.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>User Bank</nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-1 col-form-label\">Bank</label>\r\n      <div class=\"col-sm-2\">\r\n        <select class=\"form-control\" name=\"yearPeriode\" (change)=\"reload()\" [(ngModel)]=\"formData.bank\">\r\n          <option *ngFor=\"let data of bankData\" value=\"{{data.ID_BANK}}\">{{data.INISIAL}}</option>\r\n        </select>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-sm-6\">\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"submit($event)\" (createConfirm)=\"addData($event)\">\r\n        </ng2-smart-table>\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "./src/app/pages/master/user-bank/master.user.bank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterUserBankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MasterUserBankComponent = /** @class */ (function () {
    function MasterUserBankComponent(modalService, toastr, service) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.tabledata = [];
        this.bankData = [];
        this.userData = [];
        this.userList = [];
        this.formData = {
            bank: ""
        };
        this.yearPeriode = __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY");
        this.settingsTemplate = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true
            },
            mode: "inline",
            sort: true,
            hideSubHeader: false,
            actions: {
                add: true,
                edit: true,
                delete: false,
                position: "right",
                columnTitle: "Modify",
                width: "10%"
            },
            pager: {
                display: true,
                perPage: 30
            },
            columns: {
                ID_USER: {
                    title: "Id User",
                    type: "string",
                    filter: false,
                    editable: false,
                    editor: {
                        type: "list",
                        config: {
                            list: this.userList
                        }
                    },
                    width: "30%"
                },
                USER_NAME: {
                    title: "Name",
                    type: "number",
                    filter: false,
                    editable: false,
                    width: "30%"
                },
                FLAG_ACTIVE: {
                    title: "Flag Active",
                    type: "html",
                    width: "30%",
                    editor: {
                        type: "list",
                        config: {
                            list: [{ value: "Y", title: "Y" }, { value: "N", title: "N" }]
                        }
                    }
                }
            }
        };
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true
            },
            mode: "inline",
            sort: true,
            hideSubHeader: false,
            actions: {
                add: true,
                edit: true,
                delete: false,
                position: "right",
                columnTitle: "Modify",
                width: "10%"
            },
            pager: {
                display: true,
                perPage: 30
            },
            columns: {
                ID_USER: {
                    title: "Id User",
                    type: "string",
                    filter: false,
                    editable: false,
                    editor: {
                        type: "list",
                        config: {
                            list: this.userList
                        }
                    },
                    width: "30%"
                },
                USER_NAME: {
                    title: "Name",
                    type: "number",
                    filter: false,
                    editable: false,
                    width: "30%"
                },
                FLAG_ACTIVE: {
                    title: "Flag Active",
                    type: "html",
                    width: "30%",
                    editor: {
                        type: "list",
                        config: {
                            list: [{ value: "Y", title: "Y" }, { value: "N", title: "N" }]
                        }
                    }
                }
            }
        };
        this.loadData();
    }
    MasterUserBankComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("mst_user_banks").subscribe(function (response) {
            if (response != null) {
                _this.tabledata = response;
                console.log(JSON.stringify(response));
                _this.service.getreq("mst_users").subscribe(function (response) {
                    if (response != null) {
                        _this.userData = response;
                        _this.userData.forEach(function (element, ind) {
                            _this.tabledata.forEach(function (item, index) {
                                element.ID_USER == item.ID_USER
                                    ? (_this.tabledata[index].USER_NAME = element.USER_NAME)
                                    : null;
                            });
                            _this.userList.push({
                                value: element.ID_USER,
                                title: element.ID_USER + " " + element.USER_NAME
                            });
                        });
                        _this.source.load(_this.tabledata);
                        console.log(_this.userList);
                        _this.settings = _this.settingsTemplate;
                        console.log(JSON.stringify(response));
                        _this.service.getreq("mst_banks").subscribe(function (response) {
                            if (response != null) {
                                _this.bankData = response;
                                _this.formData.bank = _this.bankData[0].ID_BANK;
                                console.log(JSON.stringify(response));
                            }
                        });
                    }
                });
            }
        });
    };
    MasterUserBankComponent.prototype.submit = function (event) {
        var _this = this;
        this.tabledata.forEach(function (element, ind) {
            if (element.ID_USER == event.newData.ID_USER &&
                element.ID_BANK == event.newData.ID_BANK) {
                element.FLAG_ACTIVE = event.newData.FLAG_ACTIVE;
                element.DATETIME_UPDATED = __WEBPACK_IMPORTED_MODULE_4_moment__().format();
                _this.service
                    .postreq("mst_user_banks/crud", _this.tabledata[ind])
                    .subscribe(function (response) {
                    console.log(JSON.stringify(response));
                    event.confirm.resolve(event.newData);
                    _this.toastr.success("Data Updated!");
                });
            }
        });
    };
    MasterUserBankComponent.prototype.addData = function (event) {
        var _this = this;
        console.log(event.newData);
        var data = {
            ID_BANK: this.formData.bank,
            ID_USER: event.newData.ID_USER,
            FLAG_ACTIVE: event.newData.FLAG_ACTIVE,
            USER_NAME: this.userData.filter(function (item) {
                return item.ID_USER == event.newData.ID_USER;
            })[0].USER_NAME,
            USER_CREATED: "Admin",
            DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
            USER_UPDATED: "Admin",
            DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format()
        };
        console.log(this.tabledata.filter(function (item) {
            return (item.ID_USER == event.newData.ID_USER &&
                item.ID_BANK == _this.formData.bank);
        })[0]);
        if (this.tabledata.filter(function (item) {
            return (item.ID_USER == event.newData.ID_USER &&
                item.ID_BANK == _this.formData.bank);
        })[0] == null) {
            this.service.postreq("mst_user_banks", data).subscribe(function (response) {
                console.log(response);
                event.confirm.resolve(data);
                _this.toastr.success("Data Saved!");
            });
        }
        else {
            event.confirm.reject();
            this.toastr.error("Data Already Exist!");
        }
    };
    MasterUserBankComponent.prototype.reload = function () {
        this.source.setFilter([{ field: "ID_BANK", search: this.formData.bank }], true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], MasterUserBankComponent.prototype, "myForm", void 0);
    MasterUserBankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-master-user-bank",
            template: __webpack_require__("./src/app/pages/master/user-bank/master.user.bank.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__["a" /* BackendService */]])
    ], MasterUserBankComponent);
    return MasterUserBankComponent;
}());



/***/ })

});
//# sourceMappingURL=master.module.chunk.js.map