import React, { useState } from 'react';
import Menu from './menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menubutton = () => {
    const [ display, setDisplay ] = useState( true );
    const [ btnPosition, setBtnPosition ] = useState( '-40px' );
    const handleClick = () => {
        if (!display) {
            setDisplay(true);
            setBtnPosition('430px');
        } else {
            setDisplay(false);
            setBtnPosition('-40px');
        }
    }
    return (
        <React.Fragment>
            <div className="menu-container" onClick={handleClick}>
                <div className="menu-btn" style={{bottom:btnPosition}}>
                    <FontAwesomeIcon icon="truck-medical" className="truck-medical" />
                </div>
                <div className="menu-container">
                    <Menu showmenu={display} />
                </div>       
            </div>
        </React.Fragment>
    )
}

export default Menubutton;