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
    { id: '1',
      image: Finn, 
      name: 'Finn', 
      content: [
        {
          id: 'FinnContent1',
          header: '2x a day',
          subheaders: [
            { id: 'FSubheader1-1', bold: '1.5 cups ', regular: 'kibble' },
            { id: 'FSubheader1-2', bold: '1 Cosequin ', regular: 'tablet' },
          ],
          notes: 'Add water to kibble'
        },
        {
          id: 'FinnContent2',
          header: '1x a day',
          subheaders: [
            { id: 'FSubheader2-1', bold: '1 eye drop ', regular: 'in each eye ', italic: 'white bottle first' },
            { id: 'FSubheader2-2', bold: '1 eye drop ', regular: 'in each eye ', italic: 'dark bottle second' }
          ]
        }
      ]
    }, 
    { id: '2',
      image: Calvin,
      name: 'Calvin',
      content: [
        {
          id: 'CalvinContent1',
          header: '2x a day',
          subheaders: [
            { id: 'CSubheader1-1', bold: '1 baggie ', regular: 'of grain ', italic: 'soaked' },
            { id: 'CSubheader1-2', bold: '1/2 bucket ', regular: 'of chaffhaye ' },
            { id: 'CSubheader1-3', bold: '1 full ', regular: 'hay pillow' }
          ],
          notes: 'Lock Calvin in his stall after giving him his grain, and before feeding Hobbes.'
        }
      ]
    },
    { id: '3',
      image: Hobbes,
      name: 'Hobbes',
      content: [
        {
          id: 'HobbesContent1',
          header: '2x a day',
          subheaders: [
            { id: 'HSubheader1-1', bold: '1 baggie ', regular: 'of grain ', italic: 'soaked' },
            { id: 'HSubheader1-2', bold: '1/2 bucket ', regular: 'of chaffhaye ' }
          ],
          notes: 'Pour soaked grain into large rubber bucket in his stall.'
        }, {
          id: 'HobbesContent2',
          header: '1x a day',
          subheaders: [
            { id: 'HSubheader2-1', bold: '1/4 Previcox ', regular: 'pill ', italic: 'every other day' }
          ]
        }
      ]
    },
    { id: '4',
      image: Spaceman,
      name: 'Spaceman',
      content: [
        {
          id: 'SpacemanContent1',
          header: '2x a day',
          subheaders: [
            { id: 'SMSubheader1-1', bold: '1 baggie ', regular: 'of grain ', italic: 'soaked' },
            { id: 'SMSubheader1-2', bold: '1 flake ', regular: 'of hay ', italic: 'shared with Spiff' }
          ],
          notes: 'After the donkeys eat their grain, throw the hay out in the pen and shut the barn door behind them.'
        }
      ]
    },
    { id: '5',
      image: Spiff,
      name: 'Spiff',
      content: [
        {
          id: 'SpiffContent1',
          header: '2x a day',
          subheaders: [
            { id: 'SSubheader1-1', bold: '1 baggie ', regular: 'of grain ', italic: 'soaked' },
            { id: 'SSubheader1-1', bold: '1 flake ', regular: 'of hay ', italic: 'shared with Spaceman' }
          ],
          notes: 'After the donkeys eat their grain, throw the hay out in the pen and shut the barn door behind them.'
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

      <div className="accordion-container">
        { accordionData.map(({id, image, name, content}) => (
          <Accordion key={id} image={image} name={name} content={content} />
        ))}
      </div>

      <Menubutton />
    </div>
  );
}

root.render(<App />);