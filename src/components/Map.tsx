import type { Place } from "../api/Place";

interface MapProps {
    place: Place | null;
}

function Map({ place }: MapProps){
    return(
        <div className="map">
            Map
        </div>
    )
}

export default Map;