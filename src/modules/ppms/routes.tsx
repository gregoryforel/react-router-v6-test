import * as React from 'react'
import { useRoutes } from 'react-router-dom'

import { Ppm, PpmList } from './screens'

export const routes = [
    { path: '/', element: <PpmList /> },
    {
        path: ':id',
        element: <Ppm />
    }
]

export const Ppms = () => {
    return useRoutes(routes)
}
