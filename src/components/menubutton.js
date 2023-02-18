import React, { useState } from 'react';
import Menu from './menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menubutton = () => {
    const [ display, setDisplay ] = useState( 'none' );
    const [ btnPosition, setBtnPosition ] = useState( '-40px' );
    const handleClick = () => {
        if (display === 'none') {
            setDisplay('block');
            setBtnPosition('430px');
        } else {
            setDisplay('none');
            setBtnPosition('-40px');
        }
    }
    return (
        <React.Fragment>
            <div className="menu-btn" onClick={handleClick} style={{bottom:btnPosition}}>
                <FontAwesomeIcon icon="truck-medical" className="truck-medical" />
            </div>
            <div style={{display:display}}>
                <Menu />
            </div>       
        </React.Fragment>
    )
}

export default Menubutton;