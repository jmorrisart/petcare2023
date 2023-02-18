import React from "react";
import { createRoot } from 'react-dom/client';
import './index.scss';

import Accordion from './components/accordion';
import Menubutton from './components/menubutton';

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
  const accordionData = [
    { 
      image: Finn, 
      name: 'Finn', 
      content: [
        {
          header: '2x a day',
          subheaders: [
            { bold: '1.5 cups ', regular: 'kibble' },
            { bold: '1 Cosequine ', regular: 'tablet' },
          ],
          italic: 'Add water to kibble'
        },
        {
          header: '1x a day',
          subheaders: [
            { bold: '1 eye drop ', regular: 'in each eye ', italic: 'white bottle first' },
            { bold: '1 eye drop ', regular: 'in each eye ', italic: 'dark bottle second' }
          ]
        }
      ]
    }, 
    {
      image: Calvin,
      name: 'Calvin',
      content: [
        {
          header: '2x a day',
          subheaders: [
            { bold: '1 baggie ', regular: 'of grain ', italic: 'soaked' },
            { bold: '1/2 bucket ', regular: 'of chaffhaye ' },
            { bold: '1 full ', regular: 'hay pillow' }
          ],
          italic: 'Lock Calvin in his stall after giving him his grain, and before feeding Hobbes.'
        }
      ]
    },
    {
      image: Hobbes,
      name: 'Hobbes',
      content: [
        {
          header: '2x a day',
          subheaders: [
            { bold: '1 baggie ', regular: 'of grain ', italic: 'soaked' },
            { bold: '1/2 bucket ', regular: 'of chaffhaye ' },
            { bold: '1/4 Previcox ', regular: 'pill ', italic: 'every other day' }
          ],
          italic: 'Pour soaked grain into large rubber bucket in his stall.'
        }
      ]
    },
    {
      image: Spaceman,
      name: 'Spaceman',
      content: [
        {
          header: '2x a day',
          subheaders: [
            { bold: '1 baggie ', regular: 'of grain ', italic: 'soaked' },
            { bold: '1 flake ', regular: 'of hay ', italic: 'shared with Spiff' }
          ],
          italic: 'After the donkeys eat their grain, throw the hay out in the pen and shut the barn door behind them.'
        }
      ]
    },
    {
      image: Spiff,
      name: 'Spiff',
      content: [
        {
          header: '2x a day',
          subheaders: [
            { bold: '1 baggie ', regular: 'of grain ', italic: 'soaked' },
            { bold: '1 flake ', regular: 'of hay ', italic: 'shared with Spaceman' }
          ],
          italic: 'After the donkeys eat their grain, throw the hay out in the pen and shut the barn door behind them.'
        }
      ]
    }
  ];

  return (
    <div className="App">
      <h1>Morris Family Menagerie</h1>
      <h3>
        <FontAwesomeIcon icon="heart" className="heart" />
        <span>Thank you</span>
        <FontAwesomeIcon icon="heart" className="heart" />
      </h3>
      {/* <FontAwesomeIcon icon="heart" />
      <FontAwesomeIcon icon="horse" />
      <FontAwesomeIcon icon="dog" /> */}

      <div className="accordion">
        { accordionData.map(({image, name, content}) => (
          <Accordion image={image} name={name} content={content} />
        ))}
      </div>

      <Menubutton />
    </div>
  );
}

root.render(<App />);