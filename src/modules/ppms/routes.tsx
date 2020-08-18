import * as React from 'react'
import { useRoutes } from 'react-router-dom'

import { PpmContentRouteElement, PpmHeaderRouteElement } from 'modules/ppm/routes'

import { Header } from './components'
import { PpmList } from './screens'

export const contentRoutes = [
    { path: '/', element: <PpmList /> },
    {
        path: ':id/*',
        element: <PpmContentRouteElement />
    }
]

export const headerRoutes = [
    {
        path: '/',
        element: <Header />
    },
    {
        path: ':id/*',
        element: <PpmHeaderRouteElement />
        // children: [
        //     {
        //         path: 'ppms/*',
        //     },
        // ],
    }
]

export const PpmsContentRouteElement = () => {
    return useRoutes(contentRoutes)
}

export const PpmsHeaderRouteElement = () => {
    return useRoutes(headerRoutes)
}
