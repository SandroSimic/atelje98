"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import L from "leaflet";
import React, { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef(null); // Use a ref to avoid re-initializing the map

  useEffect(() => {
    // Ensure Leaflet is only initialized on the client
    if (!mapRef.current) {
      const map = L.map("map", {
        center: [44.760658, 19.223631],
        zoom: 13,
        dragging: true,
        scrollWheelZoom: true,
      });

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 19,
          id: "mapbox/streets-v10",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg",
        },
      ).addTo(map);

      const marker = L.marker([44.760658, 19.223631]).addTo(map);

      marker.bindPopup("<b>Atelje 98</b>").openPopup();

      mapRef.current = map;
    }
  }, []);

  return (
    <div id="map" style={{ height: "100%", width: "100%" }}>
      {/* Map will be rendered here */}
    </div>
  );
}
