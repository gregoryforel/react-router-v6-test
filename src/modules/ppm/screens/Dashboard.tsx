import * as React from 'react'
import { useParams } from 'react-router-dom'

import { data } from 'data'
import { useRouteParams } from 'RouteParamsProvider'

export function Dashboard() {
    const { organization } = useRouteParams()
    const ppmId = useParams().id

    const ppm = data.organizations
        .find(org => org.id === organization)
        .ppms.find(({ id }) => id === ppmId)

    const { title } = ppm

    return <div>{title} Dashboard</div>
}
