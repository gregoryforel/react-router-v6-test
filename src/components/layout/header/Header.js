import React from 'react';

export const Header = ({ breadcrumb, title, nav }) => {
    return (
        <div>
            {breadcrumb ? <div>{breadcrumb}</div> : null}
            <div>{title}</div>
            <div>{nav}</div>
        </div>
    );
};
