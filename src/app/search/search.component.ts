// Core imports
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

// Import other components
import { SearchService }     from './search.service';
import { Goc }               from '../gocs/goc';

@Component({
  selector: 'goc-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
  providers: [SearchService]
})


export class SearchComponent implements OnInit {
  gocs: Observable<Goc[]>; //holds the observable returned from search service
  private searchTerms = new Subject<string>(); //holds the search terms

  constructor( private searchService: SearchService, private router: Router) {}

  // add new terms to the observable's stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void { //Run this on iniliatization
    this.gocs = this.searchTerms
      .debounceTime(200)        // wait time after each keystroke before sending it over to api
      .distinctUntilChanged()   // ignore of the search term is same as previous
      .switchMap(term => term   // switch to the new observable whenever search term changes
        // return the observable from the http api
        ? this.searchService.search(term)
        // or the observable of empty array if there was no search term
        : Observable.of<Goc[]>([]))
      .catch(error => {
        // TODO: console.log to be removed
        console.log(error);
        return Observable.of<Goc[]>([]);
      });
  } //end ngOnInit()

  // Go to the details view of the selcted grandmaster
  gotoDetail(goc: Goc): void {
    //clean up search results
    var sr = document.getElementsByClassName('search-result');
    while(sr[0]) {
        sr[0].parentNode.removeChild(sr[0]);
    }​

    //Clear search input box
    (<HTMLInputElement>document.getElementById('search-box')).value = ''; //HTMLElement type casted to HTMLInputElement

    //reset search
    this.search(null);

    // Go to the details page of the selected grandmaster
    let link = ['/details', goc.id];
    this.router.navigate(link);
  } //end gotoDetail


  //Clear search box and any search results
  clearSearch(): void {
    //Clear search input box
    (<HTMLInputElement>document.getElementById('search-box')).value = '';

    //clear search results
    var sr = document.getElementsByClassName('search-result');
    while(sr[0]) {
        sr[0].parentNode.removeChild(sr[0]);
    }​

    //reset search
    this.search(null);
  } //end clearSearch()


}
