import * as React from 'react'
import { useRoutes } from 'react-router-dom'

import { Header } from './components'

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
        element: <Header />
    }
]

export const MyContentRouteElement = () => {
    return useRoutes(contentRoutes)
}

export const MyHeaderRouteElement = () => {
    return useRoutes(headerRoutes)
}
