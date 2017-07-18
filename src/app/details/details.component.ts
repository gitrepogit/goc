import 'rxjs/add/operator/switchMap';

import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Goc }                      from '../gocs/goc';
import { GocService }               from '../gocs/goc.service';

// This component is created to create the details view for the selected grandmaster
@Component({
  selector: 'goc-details',
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.css' ]
})

export class DetailsComponent implements OnInit {
  goc: Goc;

  // The URL of the image which is displayed if a picture of the grandmaster is not available
  private placeHolder: string = '/assets/app-images/no-image.jpg'; 

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

  // Update the record of the currently displayed grandmaster
  save(): void {
    this.gocService.update(this.goc)
      .then(() => this.goBack());
  }

  // Go back to the previous view
  goBack(): void {
    this.location.back();
  }

  // display a placeholder image if the picture of the selected grandamster is not available
  noImage(): void {
    if(this.goc.image !== this.placeHolder) {
      this.goc.image = this.placeHolder;
    }
  }

}
