import * as React from 'react'
import { Link } from 'react-router-dom'

// import {
//     OrganizationsContentRouteElement,
//     OrganizationsHeaderRouteElement,
// } from './modules/organizations/routes'
import { Header } from './components/layout'

export const contentRoutes = [
    {
        path: '/',
        element: <Nav />,
    },
    {
        path: 'organizations/*',
        element: <div>Org Content</div> // <OrganizationsContentRouteElement />,
    },
]

export const headerRoutes = [
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
        path: 'organizations/*',
        element: <div>Org Header</div> // <OrganizationsHeaderRouteElement />,
    },
]

function Nav() {
    return (
        <nav>
            <Link to="/" style={{ padding: '0' }}>
                Home
            </Link>
            <Link to="/organizations" style={{ padding: 15 }}>
                Organizations
            </Link>
        </nav>
    )
}
