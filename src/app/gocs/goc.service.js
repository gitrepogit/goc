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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
// this class performs the network operations agains the http api to fetch and send data
var GocService = (function () {
    function GocService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.gocsUrl = 'api/gocs'; // URL to web api
    }
    //Fetch an array of grandmasters
    GocService.prototype.getGocs = function () {
        return this.http.get(this.gocsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // Fetch a single grandmaster based on the ID
    GocService.prototype.getGoc = function (id) {
        var url = this.gocsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // Delete a single grandmaster identified by ID
    GocService.prototype.delete = function (id) {
        var url = this.gocsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    // Add an entry for a new Grandmaster
    GocService.prototype.create = function (name, rating) {
        return this.http
            .post(this.gocsUrl, JSON.stringify({ name: name, rating: rating }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update the record of an existing grandmaster
    GocService.prototype.update = function (goc) {
        var url = this.gocsUrl + "/" + goc.id;
        return this.http
            .put(url, JSON.stringify(goc), { headers: this.headers })
            .toPromise()
            .then(function () { return goc; })
            .catch(this.handleError);
    };
    // Handle errors encournterd during http operations to the api
    GocService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // to be removed
        return Promise.reject(error.message || error);
    };
    return GocService;
}());
GocService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GocService);
exports.GocService = GocService;
//# sourceMappingURL=goc.service.js.map