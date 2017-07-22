import { Injectable } 			from '@angular/core';
import { Http }       			from '@angular/http'; //Needed for making queries to http api

import { Observable }     		from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Goc }           		from '../gocs/goc';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  //Query an http api with the supplied search term and return results as an Observable
  search(term: string): Observable<Goc[]> {
    return this.http
               .get(`api/gocs/?name=${term}`)
               .map(response => response.json().data as Goc[]); //Interpret search results as json and extract data as a Goc array
  }
}
