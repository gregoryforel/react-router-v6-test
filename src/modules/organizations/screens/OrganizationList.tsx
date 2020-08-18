import * as React from 'react'
import { NavLink } from 'react-router-dom'

import { data } from 'data'

export function OrganizationList() {
    return (
        <ul>
            {data.organizations.map(({ id, title }) => (
                <li key={id}>
                    <NavLink to={`${id}`}>
                        <h4>{title}</h4>
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
