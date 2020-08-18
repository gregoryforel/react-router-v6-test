import * as React from 'react'
import { useRoutes } from 'react-router-dom'

import { Header } from './components'

import {
    OrganizationContentRouteElement,
    OrganizationHeaderRouteElement
} from 'modules/organization/routes'

import { OrganizationList } from './screens'

const contentRoutes = [
    { path: '/*', element: <OrganizationList /> },
    {
        path: ':id/*',
        element: <OrganizationContentRouteElement />
        // children: [
        //     {
        //         path: 'ppms/*',
        //     },
        // ],
    }
]

const headerRoutes = [
    {
        path: '/',
        element: <Header />
    },
    {
        path: ':id/*',
        element: <OrganizationHeaderRouteElement />
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
