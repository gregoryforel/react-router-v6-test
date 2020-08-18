import * as React from 'react'
import { useRoutes } from 'react-router-dom'

import { Header } from './components'
import { Ppm } from './screens'

export const contentRoutes = [
    { path: '/', element: <Ppm /> },
    {
        path: 'dashboard',
        element: <div>Dashboard</div>
    }
]

export const headerRoutes = [
    {
        path: '/',
        element: <Header />
    },
    
]

export const PpmContentRouteElement = () => {
    return useRoutes(contentRoutes)
}

export const PpmHeaderRouteElement = () => {
    return useRoutes(headerRoutes)
}
