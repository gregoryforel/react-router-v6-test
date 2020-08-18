import * as React from 'react'
import { useRoutes } from 'react-router-dom'


import { Header } from './components'
import { Ppm, PpmList } from './screens'

export const contentRoutes = [
    { path: '/', element: <PpmList /> },
    {
        path: ':id',
        element: <Ppm />
    }
]

export const headerRoutes = [
    {
        path: '/',
        element: <Header />
    },
    {
        path: ':id/*',
        // element: <OrganizationHeaderRouteElement />
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
