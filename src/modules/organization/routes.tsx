import * as React from 'react'
import { useRoutes } from 'react-router-dom'

import { Header } from './components'
import { PpmsContentRouteElement } from 'modules/ppms/routes'

import { Organization } from './screens'

export const contentRoutes = [
    {
        path: '',
        element: <Organization />
    },
    {
        path: 'ppms/*',
        element: <PpmsContentRouteElement />
    }
]

export const headerRoutes = [
    {
        path: '*',
        element: <Header />
    },
    {
        path: 'ppms/*',
        element: <Header />
    }
]

export function OrganizationContentRouteElement() {
    return useRoutes(contentRoutes)
}

export function OrganizationHeaderRouteElement() {
    return useRoutes(headerRoutes)
}
