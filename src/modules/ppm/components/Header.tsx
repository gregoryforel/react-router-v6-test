import * as React from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { Header as LayoutHeader } from 'components/layout'
import { data } from 'data'
import { useRouteParams } from 'RouteParamsProvider'

export const Header = () => {
    return <LayoutHeader title={<Title />} nav={<Nav />} />
}

const Title = () => {
    const { organization: orgId } = useRouteParams()
    const ppmId = useParams().id
    const title = data.organizations
        .find(org => org.id === orgId)
        ?.ppms.find(ppm => ppm.id === ppmId)?.title

    return <React.Fragment>Ppm: {title}</React.Fragment>
}

function Nav() {
    return (
        <nav>
            <NavLink to="" style={{ padding: '0' }}>
                Dashboard
            </NavLink>
            <NavLink to="ppms" style={{ padding: 15 }}>
                Ppms
            </NavLink>
        </nav>
    )
}
