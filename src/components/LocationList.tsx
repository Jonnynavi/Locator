import type { Place } from "../api/Place";
import { useState } from "react";
import { search } from "../api/search";

interface LocationListProps{
    onPlaceClick: (place: Place) => void;
}

function LocationList({onPlaceClick} : LocationListProps){
    const [term, setTerm] = useState('');
    const [places, setPlaces] = useState<Place[]>([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const results = await search(term);
        setPlaces(results);
    };

    const renderList = () => {
        return places.map( place => {
            return(
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    {place.name}
                    <button type="button" onClick={() => onPlaceClick(place)} className="ms-1 btn btn-primary">Go</button>
                </li>
            )
        })
    }

    return (
        <div className="location-list p-4">
            <form className="location-list__form" onSubmit={handleSubmit}>
                <label htmlFor="term" className="form-label">
                    Search
                </label>
                <input 
                    className="location-list__search form-control"
                    id="term"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
            </form>
            <ul className="list-group mt-3">
                {renderList()}
            </ul>
        </div>
    )
}

export default LocationList;