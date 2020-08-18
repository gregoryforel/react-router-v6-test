import * as React from 'react'
import { useRoutes } from 'react-router-dom'

import { Ppm, PpmList } from './screens'

export const contentRoutes = [
    { path: '/', element: <PpmList /> },
    {
        path: ':id',
        element: <Ppm />
    }
]

export const headerRoutes = [
    { path: '/', element: <PpmList /> },
    {
        path: ':id',
        element: <Ppm />
    }
]

export const PpmsContentRouteElement = () => {
    return useRoutes(contentRoutes)
}

export const PpmsHeadertRouteElement = () => {
    return useRoutes(headerRoutes)
}