import 'rxjs/add/operator/switchMap';

import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Goc }                      from '../gocs/goc';
import { GocService }               from '../gocs/goc.service';

@Component({
  selector: 'goc-details',
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.css' ]
})
export class DetailsComponent implements OnInit {
  goc: Goc;

  constructor(
    private gocService: GocService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.gocService.getGoc(+params.get('id')))
      .subscribe(goc => this.goc = goc);
  }

  save(): void {
    this.gocService.update(this.goc)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
