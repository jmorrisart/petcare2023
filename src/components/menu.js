import React, { Component, useState } from 'react';

const Menu = (props) => {
    return (
        <React.Fragment>
            <div className={`menu ${props.showmenu ? "" : "close"}`}>
            </div>
        </React.Fragment>
    )
}

export default Menu;