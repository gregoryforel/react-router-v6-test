import * as React from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { Header as LayoutHeader } from 'components/layout'
import { data } from 'data'

export const Header = () => {
    return <LayoutHeader title={<Title />} nav={<OrganizationNav />} />
}

const Title = () => {
    const orgId = useParams().id
    const title = data.organizations.find(org => org.id === orgId)?.title

    return <React.Fragment>Org: {title}</React.Fragment>
}

function OrganizationNav() {
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
