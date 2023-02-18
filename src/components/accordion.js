import React, { Component, useState } from 'react';

const Accordion = ({ image, name, content }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <React.Fragment>
            <div className="accordion">
                <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <div>
                        <img src={image} className="pet-image" />
                    </div>
                    <div className="name-container">
                        <div className="name-banner left" />
                        <div className="pet-name">{name}</div>
                        <div className="name-banner right" />

                    </div>
                    {/* <div>{isActive ? '-' : '+'}</div> */}
                </div>
                {isActive && 
                    <div className="accordion-content">
                       { content.map(({header, subheaders, italic}) => (
                            <div>{header}</div>
                        ))}
                    </div>
                }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Accordion;