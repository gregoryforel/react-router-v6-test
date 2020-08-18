import * as React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'

import { Header } from 'components/layout'
import {
    OrganizationContentRouteElement,
    OrganizationHeaderRouteElement
} from 'modules/organization/routes'

import { OrganizationList } from './screens'

const contentRoutes = [
    { path: '', element: <OrganizationList /> },
    {
        path: ':id',
        element: <OrganizationContentRouteElement />,
        // children: [
        //     {
        //         path: 'ppms/*',
        //     },
        // ],
    }
]

const headerRoutes = [
    {
        path: '/*',
        element: (
            <Header
                breadcrumb={
                    <NavLink to="/" style={{ padding: '0' }}>
                        Home
                    </NavLink>
                }
                title={'FUCK'}
                nav={<OrganizationsHeader />}
            />
        )
    },
    {
        path: ':id',
        element: <OrganizationHeaderRouteElement />,
        // children: [
        //     {
        //         path: 'ppms/*',
        //     },
        // ],
    }
]

export function OrganizationsContentRouteElement() {
    return useRoutes(contentRoutes)
}

export function OrganizationsHeaderRouteElement() {
    return useRoutes(headerRoutes)
}

function OrganizationsHeader() {
    return (
        <Header
            breadcrumb={
                <NavLink to="/" style={{ padding: '0' }}>
                    Home
                </NavLink>
            }
            title={'Home'}
            nav={
                <nav>
                    <NavLink to="/" style={{ padding: '0' }}>
                        Home
                    </NavLink>
                    <NavLink to="/organizations" style={{ padding: 15 }}>
                        Organizations
                    </NavLink>
                </nav>
            }
        />
    )
}
