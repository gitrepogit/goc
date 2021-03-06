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
// Core imports
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
// Import other components
var search_service_1 = require("./search.service");
var SearchComponent = (function () {
    function SearchComponent(searchService, router) {
        this.searchService = searchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject(); //holds the search terms
    }
    // add new terms to the observable's stream
    SearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gocs = this.searchTerms
            .debounceTime(200) // wait time after each keystroke before sending it over to api
            .distinctUntilChanged() // ignore of the search term is same as previous
            .switchMap(function (term) { return term // switch to the new observable whenever search term changes
            ? _this.searchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: console.log to be removed
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    }; //end ngOnInit()
    // Go to the details view of the selcted grandmaster
    SearchComponent.prototype.gotoDetail = function (goc) {
        //clean up search results
        var sr = document.getElementsByClassName('search-result');
        while (sr[0]) {
            sr[0].parentNode.removeChild(sr[0]);
        }
        //Clear search input box
        document.getElementById('search-box').value = ''; //HTMLElement type casted to HTMLInputElement
        //reset search
        this.search(null);
        // Go to the details page of the selected grandmaster
        var link = ['/details', goc.id];
        this.router.navigate(link);
    }; //end gotoDetail
    //Clear search box and any search results
    SearchComponent.prototype.clearSearch = function () {
        //Clear search input box
        document.getElementById('search-box').value = '';
        //clear search results
        var sr = document.getElementsByClassName('search-result');
        while (sr[0]) {
            sr[0].parentNode.removeChild(sr[0]);
        }
        //reset search
        this.search(null);
    }; //end clearSearch()
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'goc-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css'],
        providers: [search_service_1.SearchService]
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService, router_1.Router])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map