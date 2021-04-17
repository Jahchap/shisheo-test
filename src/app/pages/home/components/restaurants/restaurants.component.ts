import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../../../../shared/models/Restaurant'

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
    title = 'Shisheo';
    allRestaurants: Restaurant[];
    myRestaurants: Restaurant[];



    constructor() { }

    ngOnInit(): void {

        this.allRestaurants = [
            {
                id: 13303,
                title: 'First Restaurant',
                image: 'https://image.png',
                tags: ['Arabic', 'Lebanese', 'Chinese'],
                rating: 0,
            },
            {
                id: 13406,
                title: 'Second Restaurant',
                image: 'https://image.png',
                tags: ['Arabic', 'Lebanese', 'Chinese'],
                rating: 0,
            },
            {
                id: 13406,
                title: 'Third Restaurant',
                image: 'https://image.png',
                tags: ['Arabic', 'Lebanese', 'Chinese'],
                rating: 0,
            },
            {
                id: 13406,
                title: 'Fourt Restaurant',
                image: 'https://image.png',
                tags: ['Arabic', 'Lebanese', 'Chinese'],
                rating: 0,
            },
        ];

        this.myRestaurants = this.allRestaurants;
    }

    /* searchRestaurant(term: string):Restaurant[] {*/
    searchRestaurants(text: string) {
        let newRestaurants = this.allRestaurants.filter(res => {
            return res.title.toLowerCase().includes(text.toLowerCase())
        })
        this.myRestaurants = newRestaurants;
    }

}
