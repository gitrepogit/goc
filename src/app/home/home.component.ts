import { Component, OnInit } from '@angular/core';

import { Goc }        from '../gocs/goc';
import { GocService } from '../gocs/goc.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  gocs: Goc[] = [];

  constructor(private gocService: GocService) { }

  ngOnInit(): void {
    this.gocService.getGocs()
      .then(gocs => this.gocs = gocs.slice(1, 5));
  }
}
