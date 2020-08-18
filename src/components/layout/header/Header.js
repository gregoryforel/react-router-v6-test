import React from 'react';

export const Header = ({ breadcrumb, title, nav }) => {
    return (
        <div>
            <div>{breadcrumb}</div>
            <div>{title}</div>
            <div>{nav}</div>
        </div>
    );
};
