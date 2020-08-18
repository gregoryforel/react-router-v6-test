import * as React from 'react'
import { Link } from 'react-router-dom'

import { data } from 'data'
import { useRouteParams } from 'RouteParamsProvider'

export function PpmList() {
    const { organization } = useRouteParams()

    return (
        <ul>
            {data.organizations
                .find(org => org.id === organization)
                .ppms.map(({ id, title }) => (
                    <li key={id}>
                        <Link to={`${id}`}>
                            <h4>{title}</h4>
                        </Link>
                    </li>
                ))}
        </ul>
    )
}
