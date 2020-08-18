import React from 'react';
import { Link, useRoutes } from 'react-router-dom';

import { Header } from '../../components/layout';
import { Ppms } from '../ppms/Ppms';

export const contentRoutes = [
    {
        path: '/',
        element: <h3>Org Index</h3>,
    },
    {
        path: 'ppms/*',
        element: <Ppms />,
    },
];

export const headerRoutes = [
    {
        path: '/',
        element: (
            <Header
                breadcrumb={<div>breadcrumb</div>}
                title={<h2>Organizations</h2>}
                nav={<Nav />}
            />
        ),
    },
    {
        path: 'ppms/*',
        element: (
            <Header
                breadcrumb={<div>breadcrumb</div>}
                title={<h2>Organizations</h2>}
                nav={<Nav />}
            />
        ),
    },
];

export function OrganizationContentRouteElement() {
    return useRoutes(contentRoutes);
}

export function OrganizationHeaderRouteElement() {
    return useRoutes(headerRoutes);
}

function Nav() {
    return (
        <nav>
            <Link to='/' style={{ padding: '0' }}>
                Home
            </Link>
            <Link to='/organizations' style={{ padding: 15 }}>
                Organizations
            </Link>
        </nav>
    );
}
