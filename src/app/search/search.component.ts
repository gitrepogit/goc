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

import { SearchService } from './search.service';
import { Goc } from '../gocs/goc';

@Component({
  selector: 'goc-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  gocs: Observable<Goc[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private searchService: SearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.gocs = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.searchService.search(term)
        // or the observable of empty gocs if there was no search term
        : Observable.of<Goc[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Goc[]>([]);
      });
  }

  gotoDetail(goc: Goc): void {
    //clean up search results
    var sr = document.getElementsByClassName('search-result');
    while(sr[0]) {
        sr[0].parentNode.removeChild(sr[0]);
    }​
    document.getElementById('search-box').value = '';

    let link = ['/details', goc.id];
    this.router.navigate(link);
  }
}
