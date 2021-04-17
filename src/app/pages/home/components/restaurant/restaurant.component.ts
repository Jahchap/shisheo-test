import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from '../../../../shared/models/Restaurant'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit(): void {

  }

}
