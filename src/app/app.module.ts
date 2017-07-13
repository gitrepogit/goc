import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRouterModule } from './app-router.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SimDataService }  from './data/sim-data.service';

import { AppComponent }         from './app.component';
import { HomeComponent }   from './home/home.component';
import { GocsComponent }      from './gocs/gocs.component';
import { DetailsComponent }  from './details/details.component';
import { GocService }          from './gocs/goc.service';
import { SearchComponent }  from './search/search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(SimDataService),
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    GocsComponent,
    SearchComponent
  ],
  providers: [ GocService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
