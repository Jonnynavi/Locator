import type { Place } from "../api/Place";
import { useState } from "react";

interface LocationListProps{
    onPlaceClick: (place: Place) => void;
}

function LocationList({onPlaceClick} : LocationListProps){
    const [term, setTerm] = useState('');
    const [places, setPlaces] = useState<Place[]>([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="location-list">
            <form className="location-list__form" onSubmit={handleSubmit}>
                <label htmlFor="term">
                    Search
                </label>
                <input 
                    className="location-list__search"
                    id="term"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
            </form>
        </div>
    )
}

export default LocationList;