import * as React from 'react'
import { NavLink } from 'react-router-dom'

import { Header as LayoutHeader } from 'components/layout'

export const Header = () => {
    return (
        <LayoutHeader
            title={'My'}
            nav={
                <nav>
                    <NavLink to="/" style={{ padding: '0' }}>
                        My Dashboard
                    </NavLink>
                    <NavLink to="/organizations" style={{ padding: 15 }}>
                        Organizations
                    </NavLink>
                </nav>
            }
        />
    )
}
