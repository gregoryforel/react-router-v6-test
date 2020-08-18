import * as React from 'react'
import { useRoutes } from 'react-router-dom'

import { Header } from './components'
import { Dashboard, Team } from './screens'

export const contentRoutes = [
    { path: '/', element: <Dashboard /> },
    {
        path: 'dashboard',
        element: <Dashboard />
    },
    {
        path: 'team',
        element: <Team />
    }
]

export const headerRoutes = [
    {
        path: '/*',
        element: <Header />
    },
    
]

export const PpmContentRouteElement = () => {
    return useRoutes(contentRoutes)
}

export const PpmHeaderRouteElement = () => {
    return useRoutes(headerRoutes)
}
