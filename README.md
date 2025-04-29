
# Locator App

Locator is a React application that allows users to search for locations and view them on a map.

## Features

* **Location Search:** Users can enter a search term to find specific places.
* **Search Results:** The app displays the top 5 matching locations from the search.
* **Map Display:** Clicking on a search result will center the map on the selected location.

## Technologies Used

* React
* TypeScript
* React Leaflet
* Nominatim OpenStreetMap API
* Bootstrap

## Setup

1.  **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Run the Application:**

    ```bash
    npm start
    # or
    yarn start
    ```

## Code Highlights

###   `src/api/search.ts`

This file handles the communication with the Nominatim API.

```typescript
import { Place } from "./Place";

interface SearchResponse {
    features: {
        geometry: {
            coordinates: number[];
        }
        properties: {
            place_id: number;
            display_name: string;
        }
    }[]
}


export const search = async (term: string) => {
    const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
    );

    const data: SearchResponse = await res.json();

    const places: Place[] = data.features.map((feature) => {
        return{
            id: feature.properties.place_id,
            name: feature.properties.display_name,
            longitude: feature.geometry.coordinates[0],
            latitude: feature.geometry.coordinates[1]
        }
    });

    return places;
};
```

* The `search` function fetches location data from the Nominatim API.
* It constructs the API query with the search term and parameters to return GeoJSON data with address details, limited to 5 results.
* The response is then processed to extract `id`, `name`, `longitude`, and `latitude` for each place.

###   `src/api/Place.ts`

Defines the `Place` interface.

```typescript
export interface Place {
    id: number;
    name: string;
    longitude: number;
    latitude: number;
}
```

###   `src/styles/index.css`

Global styles for the application.

```css
.app {height: 100vh;}

.app__row {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
}

.app__map {
    height: 100%;
    width: 100%;
}

.app__list {
    width: 40%;
}

@media (max-width: 990px) {
    .app__row{
        flex-direction: column;
    }
    .app__list{
        width: 100%;
    }
}
```

* Sets the app height to 100% of the viewport.
* Defines the layout of the map and location list.
* Uses a media query to adjust the layout for smaller screens, stacking the list and map vertically.

## Summary

Locator is a React application that leverages the Nominatim API and React Leaflet to provide location search and map display functionality. It offers a user-friendly way to find places and visualize them on a map.
