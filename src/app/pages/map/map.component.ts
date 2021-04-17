import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, Marker, icon, LayerGroup } from 'leaflet';

import { Restaurant } from '../../shared/models/Restaurant'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  allRestaurants: Restaurant[];
  myRestaurants: Restaurant[];
  mapOptions: MapOptions;
  map: Map
  pointerLayerGroup = new LayerGroup()


  constructor() {

  }

  ngOnInit(): void {
    this.initializeMapOptions();
    this.allRestaurants = [
      {
        id: 13303,
        title: 'First Restaurant',
        image: 'https://image.png',
        tags: ['Arabic', 'Lebanese', 'Chinese'],
        rating: 0,
        location: {
          lat: "24.4539",
          lng: "54.3773"
        },
      },
      {
        id: 13406,
        title: 'Second Restaurant',
        image: 'https://image.png',
        tags: ['Arabic', 'Lebanese', 'Chinese'],
        rating: 0,
        location: {
          lat: "24.4448",
          lng: "54.3973"
        },
      },
      {
        id: 13406,
        title: 'Third Restaurant',
        image: 'https://image.png',
        tags: ['Arabic', 'Lebanese', 'Chinese'],
        rating: 0,
        location: {
          lat: "24.4648",
          lng: "54.4708"
        },
      },
      {
        id: 13406,
        title: 'Fourt Restaurant',
        image: 'https://image.png',
        tags: ['Arabic', 'Lebanese', 'Chinese'],
        rating: 0,
        location: {
          lat: "24.45048",
          lng: "54.4508"
        },
      },
    ];

    this.myRestaurants = this.allRestaurants;



  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(24.4539, 54.3773),
      zoom: 12,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            detectRetina: true,
            attribution: 'Map data © OpenStreetMap contributors',
          })
      ],

    };
  }

  private addMarkers() {

    this.myRestaurants.forEach((restaurant: Restaurant) => {
      if (!restaurant.location) return

      const { lat, lng } = restaurant.location!
      if (lat && lng) {
        const marker = new Marker([parseFloat(lat), parseFloat(lng)]);
        marker
          .setIcon(
            icon({
              iconSize: [25, 41],
              iconAnchor: [13, 41],
              iconUrl: 'assets/icons/marker.svg'
            }));
        marker.addTo(this.pointerLayerGroup)
      }
    })

  }

  private removeMarkers() {
    this.pointerLayerGroup.clearLayers();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.pointerLayerGroup.addTo(this.map)
    this.addMarkers();
  }



  searchRestaurants(serachText: string) {
    const newRestaurants = this.allRestaurants.filter(res => {
      return res.title.toLowerCase().includes(serachText.toLowerCase())
    })
    this.myRestaurants = newRestaurants;
    this.removeMarkers()
    this.addMarkers()
  }

}
