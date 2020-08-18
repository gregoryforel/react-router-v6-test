import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { OrganizationContentRouteElement } from '../routes'
import { data } from 'data'

export function Organization() {
    const { id: orgId } = useParams()
    const organization = data.organizations.find(({ id }) => id === orgId)
    const { title } = organization
    // console.log('Organization ID:', useParams().id);
    const orgRoutes = OrganizationContentRouteElement

    return (
        <React.Fragment>
            <h3>Org: {title}</h3>
            <nav>
                <Link to="" style={{ padding: 5 }}>
                    Org Index
                </Link>
                <Link to="ppms" style={{ padding: 5 }}>
                    Ppms
                </Link>
            </nav>
            <div className="content">{orgRoutes}</div>
        </React.Fragment>
    )
}
