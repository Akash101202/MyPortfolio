import React from "react";
import Map, { Marker, NavigationControl, Source, Layer } from "react-map-gl";
import * as turf from "@turf/turf";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWthc2gxMDEyIiwiYSI6ImNsdmh5cm8yMjE2c2UycW80ZDgzZHliankifQ.ixHohMMrNWgYax4lhLK_ig"; // Replace with your Mapbox access token

const MapComponent = () => {
  const location = {
    lat: 13.0104, // Replace with your desired latitude
    lng: 77.6482, // Replace with your desired longitude
  };
  const radius = 1000;

  // Function to create a circle geometry
  const createCircle = (center, radius) => {
    const options = { steps: 64, units: "meters" };
    const circle = turf.circle(center, radius, options);
    return circle;
  };

  // Create circle geometry using Turf.js
  const circleData = createCircle([location.lng, location.lat], radius);
  return (
    <div style={{ height: "360px", width: "100%" }}>
      <Map
        initialViewState={{
          latitude: location.lat,
          longitude: location.lng,
          zoom: 14, // Adjust zoom level as needed
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <NavigationControl position="top-right" />

        <Source id="circle" type="geojson" data={circleData}>
          <Layer
            id="circle-outline"
            type="line"
            paint={{
              "line-color": "#00FFFF",
              "line-width": 2,
            }}
          />
          <Layer
            id="circle-fill"
            type="fill"
            paint={{
              "fill-color": "#00FFFF",
              "fill-opacity": 0.1,
            }}
          />
        </Source>
      </Map>
    </div>
  );
};

export default MapComponent;
