"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_router_module_1 = require("./app-router.module");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var sim_data_service_1 = require("./data/sim-data.service");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var gocs_component_1 = require("./gocs/gocs.component");
var details_component_1 = require("./details/details.component");
var goc_service_1 = require("./gocs/goc.service");
var search_component_1 = require("./search/search.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(sim_data_service_1.SimDataService),
            app_router_module_1.AppRouterModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            details_component_1.DetailsComponent,
            gocs_component_1.GocsComponent,
            search_component_1.SearchComponent
        ],
        providers: [goc_service_1.GocService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map