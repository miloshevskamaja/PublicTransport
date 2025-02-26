import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine =() =>{
    const map=useMap();
    let DefaultIcon= L.icon({
        iconUrl:require("./bus.gif"),
        iconSize: [70,71],
      });
    useEffect( () => {
        var marker1 = L.marker([36.8065, 10.1815],{icon: DefaultIcon}).addTo(
            map
          );
          map.on("click", function (e) {
            L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
        L.Routing.control({
            waypoints: [
                L.latLng(42.003991, 21.409816), 
                L.latLng(e.latlng.lat, e.latlng.lng),
            ],
            lineOptions:{
                styles: [
                    {
                        color: "blue",
                        weight: 4,
                        opacity: 0.8,
                    },
                ],
            },
            routeWhileDragging: false,
            geocoder: L.Control.Geocoder.nominatim(),
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: true,
        })
        .on("routesfound", function (e) {
            e.routes[0].coordinates.forEach((c, i) => {
              setTimeout(() => {
                marker1.setLatLng([c.lat, c.lng]);
              }, 500 * i);
            });
          })
        .addTo(map);
          });
    }, []);
    return null;
};

export default LeafletRoutingMachine;