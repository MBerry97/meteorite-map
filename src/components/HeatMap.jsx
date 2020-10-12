import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const HeatMap = (props) => {
  const { meteorites } = props.meteoriteInfo;
  const { startingYear, endingYear, mass } = props.meteoriteInfo.userInputs;
  const centerPosition = [0, 0];
  return (
    <div className='leaflet-container'>
      <Map center={centerPosition} zoom={2}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {meteorites.map((meteorite) => {
          const { geolocation, name, year } = meteorite;
          console.log(year);

          if (geolocation) {
            const { latitude, longitude } = geolocation;
            const position = [latitude, longitude];
            if (year) {
              const onlyYear = year.substring(0, 4);
              return (
                <Marker position={position}>
                  <Popup>
                    {name} <br />
                    {onlyYear}
                  </Popup>
                </Marker>
              );
            }
          }
        })}
      </Map>
    </div>
  );
};

export default HeatMap;
