import 'leaflet/dist/leaflet.css';
import {Map as LeafletMap} from 'leaflet';
import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import type { Place } from "../api/Place";

interface MapProps {
    place: Place | null;
}

function Map({ place }: MapProps){
    const mapRef = useRef<LeafletMap | null>(null);

    useEffect(() => {
        if (mapRef.current && place){
            mapRef.current.flyTo([place.latitude, place.longitude]);
        }
    }, [place]);
    
    return(
        <MapContainer ref={mapRef} center={[33.7, -84.4]} zoom={12} scrollWheelZoom className='h-100'>
            <TileLayer  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            {place && <Marker position={[place.latitude, place.longitude]} />}
        </MapContainer>
    )
}

export default Map;