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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var goc_service_1 = require("./goc.service");
var GocsComponent = (function () {
    function GocsComponent(gocService, router) {
        this.gocService = gocService;
        this.router = router;
    }
    GocsComponent.prototype.getGocs = function () {
        var _this = this;
        this.gocService
            .getGocs()
            .then(function (gocs) { return _this.gocs = gocs; });
    };
    GocsComponent.prototype.add = function (name, rating, country, image) {
        var _this = this;
        name = name.trim();
        rating = rating.trim();
        if (!rating) {
            return;
        }
        var ratingN = Number(rating);
        if (!name || !rating || isNaN(ratingN)) {
            return;
        }
        this.gocService.create(name, ratingN, country, image)
            .then(function (goc) {
            _this.gocs.push(goc);
            _this.selectedGoc = null;
        });
    };
    GocsComponent.prototype.delete = function (goc) {
        var _this = this;
        this.gocService
            .delete(goc.id)
            .then(function () {
            _this.gocs = _this.gocs.filter(function (h) { return h !== goc; });
            if (_this.selectedGoc === goc) {
                _this.selectedGoc = null;
            }
        });
    };
    GocsComponent.prototype.ngOnInit = function () {
        this.getGocs();
    };
    GocsComponent.prototype.onSelect = function (goc) {
        this.selectedGoc = goc;
    };
    GocsComponent.prototype.gotoDetails = function () {
        this.router.navigate(['/details', this.selectedGoc.id]);
    };
    return GocsComponent;
}());
GocsComponent = __decorate([
    core_1.Component({
        selector: 'my-gocs',
        templateUrl: './gocs.component.html',
        styleUrls: ['./gocs.component.css']
    }),
    __metadata("design:paramtypes", [goc_service_1.GocService,
        router_1.Router])
], GocsComponent);
exports.GocsComponent = GocsComponent;
//# sourceMappingURL=gocs.component.js.map