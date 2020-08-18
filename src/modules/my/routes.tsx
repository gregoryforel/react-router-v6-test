import * as React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'

import { Header } from 'components/layout'

import { Dashboard, Organizations } from './screens'

export const contentRoutes = [
    { path: '/', element: <Dashboard /> },
    {
        path: 'organizations',
        element: <Organizations />
    }
]

export const headerRoutes = [
    {
        path: '/*',
        element: <Header title={'My'} nav={<Nav />} />
    }
]

export const MyContentRouteElement = () => {
    return useRoutes(contentRoutes)
}

export const MyHeaderRouteElement = () => {
    return useRoutes(headerRoutes)
}

function Nav() {
    return (
        <nav>
            <NavLink to="/" style={{ padding: '0' }}>
                My Dashboard
            </NavLink>
            <NavLink to="/organizations" style={{ padding: 15 }}>
                Organizations
            </NavLink>
        </nav>
    )
}
