import type { Place } from './api/Place';
import { useState } from 'react';
import LocationList from "./components/LocationList";
import Map from "./components/Map";

function App(){
    const [place, setPlace] = useState<Place | null>(null)
    return(
        <div className="app">
            <LocationList onPlaceClick={ (p) => setPlace(p)}/>
            <Map place={place}/>
        </div>
    )
}

export default App;