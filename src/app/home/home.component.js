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
// Core Imports
var core_1 = require("@angular/core");
var goc_service_1 = require("../gocs/goc.service");
//Component decoration
var HomeComponent = (function () {
    function HomeComponent(gocService) {
        this.gocService = gocService;
        this.gocs = [];
        // The URL of the image which is displayed if a picture of the grandmaster is not available
        this.placeHolder = '/assets/app-images/no-image.jpg';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gocService.getGocs()
            .then(function (gocs) {
            _this.gocs = (gocs.sort(function (item1, item2) {
                if (item1.rating > item2.rating) {
                    return -1;
                }
                if (item1.rating < item2.rating) {
                    return 1;
                }
                return 0;
            })).slice(0, 4); // return top rated grandmasters
            _this.randomGoc = gocs[Math.floor(Math.random() * gocs.length)]; //get random goc
        });
    };
    // display a placeholder image if the picture of the selected grandamster is not available
    HomeComponent.prototype.noImage = function (goc) {
        if (goc.image !== this.placeHolder) {
            goc.image = this.placeHolder;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'my-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
    // Home page
    ,
    __metadata("design:paramtypes", [goc_service_1.GocService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//gocs.slice(1, 5) 
//# sourceMappingURL=home.component.js.map