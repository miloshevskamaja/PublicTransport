import React from "react";
import './Home.css';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import L from "leaflet";
import LeafletRoutingMachine from './LeafletRoutingMachine';
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import LeafletGeocoder from './LeafletGeocoder';



const Home = () => {
    const position = [42.003991, 21.409816]
    return (
    <div className='App'>
        <MapContainer center={position} zoom={18} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         <LeafletGeocoder />
         <LeafletRoutingMachine /> 
         <Marker position={position} icon={DefaultIcon}>
          <Popup>
            Моментално сте на ФИНКИ.
          </Popup>
        </Marker> 
       
      
      
      </MapContainer>
    </div>
    );
    }
    
    let DefaultIcon= L.icon({
      iconUrl:require("./marker-icon.png"),
      iconSize: [24,41],
       iconAnchor:[10,41],
       popupAnchor: [2,-40],
    });
    L.Marker.prototype.options.icon=DefaultIcon;

export default Home;

