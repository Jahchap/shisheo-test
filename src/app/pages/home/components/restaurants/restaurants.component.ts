import { Component, OnInit } from '@angular/core';

import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { Restaurant } from '../../../../shared/models/Restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurant().subscribe(res => {
      this.restaurants = res
      console.log(res)
    });
  }

  searchRestaurants(text: string) {
    this.restaurantService.filterRestaurants(text).subscribe(res => {
      this.restaurants = res
    });
  }
}
