import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Goc } from './goc';

@Injectable()
export class GocService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private gocsUrl = 'api/gocs';  // URL to web api

  constructor(private http: Http) { }

  getGocs(): Promise<Goc[]> {
    return this.http.get(this.gocsUrl)
               .toPromise()
               .then(response => response.json().data as Goc[])
               .catch(this.handleError);
  }


  getGoc(id: number): Promise<Goc> {
    const url = `${this.gocsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Goc)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.gocsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string, rating:number): Promise<Goc> {
    return this.http
      .post(this.gocsUrl, JSON.stringify({name: name, rating: rating}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Goc)
      .catch(this.handleError);
  }

  update(goc: Goc): Promise<Goc> {
    const url = `${this.gocsUrl}/${goc.id}`;
    return this.http
      .put(url, JSON.stringify(goc), {headers: this.headers})
      .toPromise()
      .then(() => goc)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

