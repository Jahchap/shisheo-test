import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Restaurant } from '../../../../shared/models/Restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant: Restaurant;

  // @ViewChild('stars') rating: ElementRef;
  rating: string

  constructor() { }

  ngOnInit(): void {
    // adding style attribute to the rating
    this.rating = `--rating: ${this.restaurant.rating};`
  }

  // ngAfterViewInit() {
  //   this.starRating()
  // }


  // starRating() {
  //   this.rating = '';
  //   let num = Math.floor(this.restaurant.rating);
  //   if (this.restaurant.rating.toString().length > 1) {
  //     this.rating += "<img src='assets/icons/star-half.svg'>";
  //   }
  //   Array(num).fill(0).forEach((_, i) => {
  //     this.rating += "<img src='assets/icons/star.svg'>";
  //   })
  // }
}
