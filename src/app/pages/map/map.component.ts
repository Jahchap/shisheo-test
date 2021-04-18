import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, Marker, icon, LayerGroup } from 'leaflet';

import { RestaurantService } from '../../shared/services/restaurant.service';
import { Restaurant } from '../../shared/models/Restaurant';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: Map;
  lat = 24.4539;
  lng = 54.3773;
  mapOptions: MapOptions;
  restaurants: Restaurant[];
  markerLayerGroup = new LayerGroup();

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurant().subscribe(res => {
      this.restaurants = res
    });
    this.initializeMapOptions();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(this.lat, this.lng),
      zoom: 12,
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          detectRetina: true,
          attribution: 'Map data © OpenStreetMap contributors',

        })
      ]
    };
  }

  private addMarkers() {
    this.restaurants.forEach((restaurant: Restaurant) => {
      if (!restaurant.location) return;

      const { lat, lng } = restaurant.location!;
      if (lat && lng) {
        const marker = new Marker([parseFloat(lat), parseFloat(lng)]);

        marker.setIcon(
          icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/icons/marker.svg'
          })
        );
        marker.addTo(this.markerLayerGroup);
      }
    });
  }

  private removeMarkers() {
    this.markerLayerGroup.clearLayers();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.markerLayerGroup.addTo(this.map);
    this.addMarkers();
  }

  searchRestaurants(text: string) {
    this.restaurantService.filterRestaurants(text).subscribe(res => {
      this.restaurants = res
    });
    this.removeMarkers();
    this.addMarkers();
  }
}
