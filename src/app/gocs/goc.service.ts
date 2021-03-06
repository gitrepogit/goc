// Core imports
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// Import other components
import { Goc } from './goc';

// this class performs the network operations agains the http api to fetch and send data
@Injectable()
export class GocService {

  private headers = new Headers({'Content-Type': 'application/json'}); //to identify the http request as a json payload
  private gocsUrl = 'api/gocs';  // URL to web api

  constructor(private http: Http) { }

  //Fetch an array of grandmasters
  getGocs(): Promise<Goc[]> {
    return this.http.get(this.gocsUrl)
               .toPromise()
               .then(response => response.json().data as Goc[])
               .catch(this.handleError);
  } //end getGocs
  

  // Fetch a single grandmaster based on the ID
  getGoc(id: number): Promise<Goc> {
    const url = `${this.gocsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Goc)
      .catch(this.handleError);
  } //end getGoc


  // Delete a single grandmaster identified by ID
  delete(id: number): Promise<void> {
    const url = `${this.gocsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  } // end delete


  // Add an entry for a new Grandmaster
  create(name: string, rating: number, country: string, image: string): Promise<Goc> {
    return this.http
      .post(this.gocsUrl, JSON.stringify({name: name, rating: rating, country: country, image: image}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Goc)
      .catch(this.handleError);
  } // end create


  // Update the record of an existing grandmaster
  update(goc: Goc): Promise<Goc> {
    const url = `${this.gocsUrl}/${goc.id}`;
    return this.http
      .put(url, JSON.stringify(goc), {headers: this.headers})
      .toPromise()
      .then(() => goc)
      .catch(this.handleError);
  } //end update


  // Handle errors encournterd during http operations to the api
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // 
    return Promise.reject(error.message || error);
  } //end handleError
}

