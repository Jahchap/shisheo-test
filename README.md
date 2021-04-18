# Shisheo Test

This app was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.
The map used in this app is Leaflet based on OpenStreeMap.

## Development server
To run the app in development, download and unzip or clone this repository to any path of your choice. Open a terminal and`cd` into path and install the packages/dependencies by running `npm install`. After the installation of the packages, run `ng serve` for a dev server and then navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the app. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Pages
There are two screens: The Homepage and The Map page

#### The Homepage
* Displays restaurants with their images, ratings and other details
* To add more restaurants, open the `mocks` folder in the root of the app and edit the data.json file.

#### The Map page
* Displays the locations of the restaurants
* To change the center of focus for the map page, open, `src/app/pages/map/map.component.ts` file and edit the latitude and longitude (i.e. `lat` and `lng`) properties of the `MapComponent` class. Currently, the center of focus is set to Abu Dhabi.