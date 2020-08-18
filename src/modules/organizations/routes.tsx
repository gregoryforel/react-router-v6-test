import React from 'react';
import { Link, useRoutes } from 'react-router-dom';

import { Header } from '../../components/layout';
import { OrganizationContentRouteElement, OrganizationHeaderRouteElement } from '../organization/routes';
import { OrganizationList } from './screens';

const contentRoutes = [
    { path: '/', element: <OrganizationList /> },
    {
        path: ':id',
        element: <OrganizationContentRouteElement />,
        // children: [
        //     {
        //         path: 'ppms/*',
        //     },
        // ],
    },
];

const headerRoutes = [
    {
        path: '/',
        element: (
            <Header
                breadcrumb={<div>breadcrumb</div>}
                title={<h2>Home</h2>}
                nav={<Nav />}
            />
        ),
    },
    {
        path: ':id',
        element: <OrganizationHeaderRouteElement />,
        // children: [
        //     {
        //         path: 'ppms/*',
        //     },
        // ],
    },
];

export function OrganizationsContentRouteElement() {
    return useRoutes(contentRoutes);
}

export function OrganizationsHeaderRouteElement() {
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