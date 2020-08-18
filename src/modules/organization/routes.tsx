import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'

import { Header } from 'components/layout'
import { Ppms } from 'modules/ppms/Ppms'

import { Organization } from './screens'

export const contentRoutes = [
    {
        path: '/',
        element: <Organization />
    },
    {
        path: 'ppms/*',
        element: <Ppms />
    }
]

export const headerRoutes = [
    {
        path: '/*',
        element: (
            <Header
                breadcrumb={
                    <NavLink to="/" style={{ padding: '0' }}>
                        Home
                    </NavLink>
                }
                title={<h2>Organizations</h2>}
                nav={<Nav />}
            />
        )
    },
    {
        path: 'ppms/*',
        element: (
            <Header
                breadcrumb={
                    <NavLink to="/" style={{ padding: '0' }}>
                        Home
                    </NavLink>
                }
                title={<h2>Organizations</h2>}
                nav={<Nav />}
            />
        )
    }
]

export function OrganizationContentRouteElement() {
    return useRoutes(contentRoutes)
}

export function OrganizationHeaderRouteElement() {
    return useRoutes(headerRoutes)
}

function Nav() {
    return (
        <nav>
            <NavLink to="/" style={{ padding: '0' }}>
                Home
            </NavLink>
            <NavLink to="/organizations" style={{ padding: 15 }}>
                Organizations
            </NavLink>
        </nav>
    )
}
