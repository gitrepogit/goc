import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { GocsComponent }      from './gocs/gocs.component';
import { DetailsComponent }  from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect visit to root of app to home page
  { path: 'home',  component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'gocs',     component: GocsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
