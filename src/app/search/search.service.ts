import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Goc }           from '../gocs/goc';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Goc[]> {
    return this.http
               .get(`api/gocs/?name=${term}`)
               .map(response => response.json().data as Goc[]);
  }
}
