import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Goc }                from './goc';
import { GocService }         from './goc.service';

@Component({
  selector: 'my-gocs',
  templateUrl: './gocs.component.html',
  styleUrls: [ './gocs.component.css' ]
})
export class GocsComponent implements OnInit {
  gocs: Goc[];
  selectedGoc: Goc;

  constructor(
    private gocService: GocService,
    private router: Router) { }

  getGocs(): void {
    this.gocService
        .getGocs()
        .then(gocs => this.gocs = gocs);
  }

  add(name: string, rating: string): void {
    name = name.trim();
    rating = rating.trim();
    if(!rating) { return; }
    var ratingN = Number(rating);
    if (!name || !rating || isNaN(ratingN)) { return; }
    this.gocService.create(name, ratingN)
      .then(goc => {
        this.gocs.push(goc);
        this.selectedGoc = null;
      });
  }

  delete(goc: Goc): void {
    this.gocService
        .delete(goc.id)
        .then(() => {
          this.gocs = this.gocs.filter(h => h !== goc);
          if (this.selectedGoc === goc) { this.selectedGoc = null; }
        });
  }

  ngOnInit(): void {
    this.getGocs();
  }

  onSelect(goc: Goc): void {
    this.selectedGoc = goc;
  }

  gotoDetails(): void {
    this.router.navigate(['/details', this.selectedGoc.id]);
  }
}
