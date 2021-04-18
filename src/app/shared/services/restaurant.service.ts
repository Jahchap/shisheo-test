import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Restaurant } from '../models/Restaurant';
import * as allRestaurants from '../../../../mocks/data.json'

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Restaurant[] = allRestaurants.restaurants;

  constructor() {}

  // Get restuarants
  getRestaurant(): Observable<Restaurant[]> {    
    return of(this.restaurants);
  }

  //Search restaurants
  filterRestaurants(searchText: String): Observable<Restaurant[]> {
    const filteredRestaurants: Restaurant[] = this.restaurants.filter((restaurant) => {
      return restaurant.title.toLowerCase().includes(searchText.toLowerCase());
    });
    return of(filteredRestaurants);
  }
}
