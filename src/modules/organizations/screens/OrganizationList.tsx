import * as React from 'react'
import { Link } from 'react-router-dom'

import { data } from '../../../data'

export function OrganizationList() {
    return (
        <ul>
            {data.organizations.map(({ id, title }) => (
                <li key={id}>
                    <Link to={`${id}`}>
                        <h3>{title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
