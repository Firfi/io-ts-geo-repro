import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import * as t from 'io-ts';

import App from './app/app';

const geoCoordinatesCodec = t.type({
  latitude: t.number,
  longitude: t.number,
});

navigator.geolocation.getCurrentPosition((position) => {

  const result = geoCoordinatesCodec.decode(position.coords);
  if (result._tag === 'Left') {
    alert('invalid1');
  } else {
    alert('valid1' + JSON.stringify(result.right));
  }
  const coordinates = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };

  const result2 = geoCoordinatesCodec.decode(coordinates);

  if (result2._tag === 'Left') {
    alert('invalid2');
  } else {
    alert('valid2' + JSON.stringify(result2.right));
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
