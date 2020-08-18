import * as React from 'react'
import { Link, useParams, useRoutes } from 'react-router-dom'

import { Header } from 'components/layout'
import { data } from 'data'
import { Ppms } from 'modules/ppms/routes'

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

const Title = () => {
    const orgId = useParams().id
    const title = data.organizations.find(org => org.id === orgId)?.title

    return <React.Fragment>Org: {title}</React.Fragment>
}

export const headerRoutes = [
    {
        path: '/*',
        element: (
            <Header
                breadcrumb={
                    <Link to="/" style={{ padding: '0' }}>
                        Home
                    </Link>
                }
                title={<Title />}
                nav={<OrganizationNav />}
            />
        )
    },
    {
        path: 'ppms/*',
        element: (
            <Header
                breadcrumb={
                    <Link to="/" style={{ padding: '0' }}>
                        Home
                    </Link>
                }
                title={<Title />}
                nav={<OrganizationNav />}
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

function OrganizationNav() {
    return (
        <nav>
            <Link to="" style={{ padding: '0' }}>
                Dashboard
            </Link>
            <Link to="ppms" style={{ padding: 15 }}>
                Ppms
            </Link>
        </nav>
    )
}
