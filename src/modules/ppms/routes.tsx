import React from 'react'
import { Ppm, PpmList } from './screens'

export const routes = [
    { path: '/', element: <PpmList /> },
    {
        path: ':id',
        element: <Ppm />,
    },
]
