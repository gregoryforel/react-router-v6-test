import * as React from 'react'
import { useRoutes } from 'react-router-dom'

import { RouteParamsProvider } from 'RouteParamsProvider'

import { Layout } from './components/layout'
import { contentRoutes, headerRoutes } from './app.routes'

export function App() {
    const contentRouteElement = useRoutes(contentRoutes)
    const headerRouteElement = useRoutes(headerRoutes)

    return (
        <RouteParamsProvider>
            <Layout
                sidebar={<div>Sidebar</div>}
                header={headerRouteElement}
                main={<div className="content">{contentRouteElement}</div>}
            />
        </RouteParamsProvider>
    )
}
