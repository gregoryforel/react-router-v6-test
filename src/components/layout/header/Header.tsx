import * as React from 'react';

export const Header = ({ breadcrumb, title, nav }) => {
    return (
        <div>
            {breadcrumb ? <div>{breadcrumb}</div> : null}
            <h2>{title}</h2>
            <div>{nav}</div>
        </div>
    );
};
