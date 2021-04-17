import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Restaurant } from '../models/Restaurant'

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  // Get restuarants
  // getRestaurant():Observable<Restaurant[]> {
  //   return this.http.get<Restaurant[]>(`${this.restaurantsUrl}${this.restaurantsLimit}`);
  // }
}
