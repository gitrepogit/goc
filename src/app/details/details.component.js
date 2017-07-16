"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var goc_service_1 = require("../gocs/goc.service");
var DetailsComponent = (function () {
    function DetailsComponent(gocService, route, location) {
        this.gocService = gocService;
        this.route = route;
        this.location = location;
        this.placeHolder = '/assets/app-images/no-image.jpg';
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.gocService.getGoc(+params.get('id')); })
            .subscribe(function (goc) { return _this.goc = goc; });
    };
    DetailsComponent.prototype.save = function () {
        var _this = this;
        this.gocService.update(this.goc)
            .then(function () { return _this.goBack(); });
    };
    DetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetailsComponent.prototype.noImage = function () {
        if (this.goc.image !== this.placeHolder) {
            this.goc.image = this.placeHolder;
        }
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    core_1.Component({
        selector: 'goc-details',
        templateUrl: './details.component.html',
        styleUrls: ['./details.component.css']
    }),
    __metadata("design:paramtypes", [goc_service_1.GocService,
        router_1.ActivatedRoute,
        common_1.Location])
], DetailsComponent);
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map