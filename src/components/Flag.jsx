import { OPEN_CAG_GEOCODING_API } from '../api';
import React, { useEffect, useState } from 'react';

const Flag = () => {
  const [src, setSrc] = useState('');
  const [flagAlt, setFlagAlt] = useState('');
  const getPos = () => {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  };

  useEffect(() => {
    const whereAmi = () => {
      getPos()
        .then((pos) => {
          const { latitude: lat, longitude: lng } = pos.coords;
          return fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${OPEN_CAG_GEOCODING_API}&pretty=1`
          );
        })

        .then((res) => {
          if (!res.ok) {
            throw new Error(`Problem with geocoding ${res.status}`);
          }
          const data = res.json();

          return data;
        })
        .then((data) => data.results[0].components['ISO_3166-1_alpha-3'])
        .then((res) => fetch(`https://restcountries.com/v3.1/alpha/${res}`))
        .then((res) => {
          if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
          const data = res.json();

          return data;
        })
        .then((data) => {
          setSrc(data[0].flags.png);
          setFlagAlt(data[0].altSpellings[1]);
        });
    };
    whereAmi();
  }, []);

  return (
    <div className="mt-4">
      {flagAlt && (
        <img style={{ width: 100 }} src={src} alt={`${flagAlt}' flag`} />
      )}
    </div>
  );
};

export default Flag;
