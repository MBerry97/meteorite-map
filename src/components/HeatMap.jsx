import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
const { meteoriteFilter } = require('../utils/meteoriteFilter');

const HeatMap = (props) => {
  const { meteorites } = props.meteoriteInfo;
  const { startingYear, endingYear, mass } = props.meteoriteInfo.userInputs;
  const centerPosition = [0, 0];
  const filteredMeteorites = meteoriteFilter(
    meteorites,
    startingYear,
    endingYear,
    mass
  );
  return (
    <div className="leaflet-container">
      <Map center={centerPosition} zoom={2}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredMeteorites.map((meteorite) => {
          const { geolocation, name, year, mass } = meteorite;
          const kiloWeight = (mass / 1000).toFixed(0);
          if (geolocation && year) {
            const { latitude, longitude } = geolocation;
            const position = [latitude, longitude];
            const onlyYear = year.substring(0, 4);
            return (
              <Marker key={name} position={position}>
                <Popup>
                  {name} <br />
                  {onlyYear} <br />
                  {kiloWeight}kg
                </Popup>
              </Marker>
            );
          }
          return false;
        })}
      </Map>
    </div>
  );
};

export default HeatMap;
