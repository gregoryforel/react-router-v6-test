import * as React from 'react'
import { useRoutes, useLocation } from 'react-router-dom'

import { Layout } from './components/layout' 
import { contentRoutes, headerRoutes } from './app.routes'

export function App() {
    const contentRouteElement = useRoutes(contentRoutes)
    const headerRouteElement = useRoutes(headerRoutes)

    console.log(getUrlParams(useLocation().pathname))

    return (
        <Layout
            sidebar={<div>Sidebar</div>}
            header={headerRouteElement}
            main={<div className="content">{contentRouteElement}</div>}
        />
    )
}

const getUrlParams = (url) => {
    const orgIdMatch =
        url.match(/organizations\/(.*?)\//) || url.match(/organizations\/(.*)/)
    const orgId = orgIdMatch ? orgIdMatch[1] : null

    const ppmIdMatch = url.match(/ppms\/(.*?)\//) || url.match(/ppms\/(.*)/)
    const ppmId = ppmIdMatch ? ppmIdMatch[1] : null

    const wbsComponentIdMatch =
        url.match(/wbs-components\/(.*?)\//) ||
        url.match(/wbs-components\/(.*)/)
    const wbsComponentId = wbsComponentIdMatch ? wbsComponentIdMatch[1] : null

    let currentActiveItem
    if (wbsComponentId) {
        currentActiveItem = wbsComponentId
    } else if (ppmId) {
        currentActiveItem = ppmId
    } else if (orgId) {
        currentActiveItem = orgId
    }

    const params = {
        id: currentActiveItem,
        organization: orgId,
        ppm: ppmId,
        wbsComponent: wbsComponentId,
    }

    return params
}
