// Core Imports
import { Component, OnInit } from '@angular/core';

// Import Other components
import { Goc }        from '../gocs/goc';
import { GocService } from '../gocs/goc.service';

//Component decoration
@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})

// Home page
export class HomeComponent implements OnInit {
  gocs: Goc[] = [];
  randomGoc: Goc;
  // The URL of the image which is displayed if a picture of the grandmaster is not available
  private placeHolder: string = '/assets/app-images/no-image.jpg'; 

  constructor(private gocService: GocService) { }

  ngOnInit(): void { // Run on initialization
    this.gocService.getGocs()
      .then(gocs => {
              this.gocs = (gocs.sort((item1, item2) => { //Sort the list of grandmasters, highest to lowest rank
  													if (item1.rating > item2.rating) { return -1; }
  													if (item1.rating < item2.rating) { return 1; }
  													return 0;
												  }
											  )
								      ).slice(0,4); // return top rated grandmasters
              this.randomGoc = gocs[Math.floor(Math.random() * gocs.length)]; //get random goc
          }
      );
  }


  // display a placeholder image if the picture of the selected grandamster is not available
  noImage(goc: Goc): void {
    if(goc.image !== this.placeHolder) {
      goc.image = this.placeHolder;
    }
  }

}





//gocs.slice(1, 5)