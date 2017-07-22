// Core imports
import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

// Imports of other components
import { Goc }                 from './goc';
import { GocService }          from './goc.service';

// Component decoration
@Component({
  selector: 'my-gocs',
  templateUrl: './gocs.component.html',
  styleUrls: [ './gocs.component.css' ]
})

export class GocsComponent implements OnInit {
  gocs: Goc[]; //to hold the array of grandmasters
  selectedGoc: Goc; //to hold the currently selected grandmaster

  constructor( private gocService: GocService, private router: Router) { }

  getGocs(): void { //get an array of grandmasters
    this.gocService
        .getGocs()
        .then(gocs => this.gocs = gocs);
  }

  add(name: string, rating: string, country: string, image: string): void { //add a grandmaster
    name = name.trim();
    rating = rating.trim();
    if(!rating) { return; }
    var ratingN = Number(rating);
    if (!name || !rating || isNaN(ratingN)) { return; }
    this.gocService.create(name, ratingN, country, image)
      .then(goc => {
        this.gocs.push(goc);
        this.selectedGoc = null;
      });
  }

  delete(goc: Goc): void { // delete a grandmaster
    this.gocService
        .delete(goc.id)
        .then(() => {
          this.gocs = this.gocs.filter(h => h !== goc);
          if (this.selectedGoc === goc) { this.selectedGoc = null; }
        });
  }

  ngOnInit(): void { //run on initialization
    this.getGocs();
  }

  onSelect(goc: Goc): void { //mark the currently selected gransmaster
    this.selectedGoc = goc;
  }

  gotoDetails(): void { //open the details view of the currently selelcted gransmaster 
    this.router.navigate(['/details', this.selectedGoc.id]);
  }
}
