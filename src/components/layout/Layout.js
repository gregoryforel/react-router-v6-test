import React from 'react';

import './Layout.css';

export const Layout = ({sidebar, header, main}) => {
    return (
        <div className='layout'>
            <div className='sidebar'>{sidebar}</div>
            <div className='header'>{header}</div>
            <div className='main'>{main}</div>
        </div>
    );
};
