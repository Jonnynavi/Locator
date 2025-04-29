import type { Place } from './api/Place';
import { useState } from 'react';
import LocationList from "./components/LocationList";
import Map from "./components/Map";


function App(){
    const [place, setPlace] = useState<Place | null>(null)
    return(
        <div className="app">
            <div className='app__row'>
                <div className='app__list'>
                    <LocationList onPlaceClick={ (p) => setPlace(p)}/>
                </div>
                <div className='app__map'>
                    <Map place={place}/>
                </div>
            </div>
        </div>
    )
}

export default App;