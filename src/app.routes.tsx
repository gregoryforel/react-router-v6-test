import * as React from 'react'

import {
    OrganizationsContentRouteElement,
    OrganizationsHeaderRouteElement,
} from 'modules/organizations/routes'

import { MyContentRouteElement, MyHeaderRouteElement } from 'modules/my/routes'

/**
 * This is the root of our routes. 
 */
export const contentRoutes = [
    {
        path: '/*',
        element: <MyContentRouteElement />
    },
    {
        path: 'organizations/*',
        element: <OrganizationsContentRouteElement />,
    }
]

export const headerRoutes = [
    {
        path: '/*',
        element: <MyHeaderRouteElement />
    },
    // {
    //     path: 'organizations',
    //     element: <MyHeaderRouteElement />,
    // },
    {
        path: 'organizations/*',
        element: <OrganizationsHeaderRouteElement />,
    }
]
