//Core Imports
import { NgModule }             	from '@angular/core';
import { RouterModule, Routes } 	from '@angular/router';

// Other components imported
import { HomeComponent }   			from './home/home.component';
import { GocsComponent }      		from './gocs/gocs.component';
import { DetailsComponent }  		from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect visit to root of app to home page
  { path: 'home',  component: HomeComponent }, // Home View
  { path: 'details/:id', component: DetailsComponent }, //Display details of selected grandmaster
  { path: 'gocs',     component: GocsComponent } //display a list of grandmasters
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
