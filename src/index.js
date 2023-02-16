import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faTruckMedical, faHorse, faDog } from '@fortawesome/free-solid-svg-icons';

import Hobbes from './assets/hobbes.png';
import Calvin from './assets/calvin.png';
import Spaceman from './assets/spaceman.png';
import Spiff from './assets/spiff.png';
import Finn from './assets/finn.png';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
library.add(faHeart, faTruckMedical, faHorse, faDog);

const App = () => {
  return (
    <div className="App">
      <h1>Morris Family Menagerie</h1>
      <h2>How are you!</h2>
      <FontAwesomeIcon icon="heart" />
      <FontAwesomeIcon icon="truck-medical" />
      <FontAwesomeIcon icon="horse" />
      <FontAwesomeIcon icon="dog" />

      <img src={Hobbes} className="pet-image" />
    </div>
  );
}

root.render(<App />);