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
                       { content.map(({id, header, subheaders, notes}) => (
                            <div key={id} className="content-container">
                                <div className="header">{header}</div>

                                { subheaders.map(({id, bold, regular, italic}) => (
                                    <div key={id} className="subheaders">
                                       <p>
                                        <span className="bold">{bold}</span>
                                        <span className="regular">{regular}</span>
                                        <span className="italic">{italic}</span>
                                       </p>
                                    </div>
                                ))}

                                <div className="notes">{notes}</div>
                            </div>
                        ))}
                    </div>
                }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Accordion;