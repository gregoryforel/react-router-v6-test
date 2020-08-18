import * as React from 'react'
import { useRoutes } from 'react-router-dom'

// import { Header as LayoutHeader  } from 'components/layout'
import { Header } from 'modules/my/components'
// import { MyContentRouteElement } from 'modules/my/routes'
import {
    OrganizationContentRouteElement,
    OrganizationHeaderRouteElement
} from 'modules/organization/routes'

import { OrganizationList } from './screens'

const contentRoutes = [
    { path: '/*', element: <OrganizationList /> },
    {
        path: ':id',
        element: <OrganizationContentRouteElement />,
        // children: [
        //     {
        //         path: 'ppms/*',
        //     },
        // ],
    }
]

const headerRoutes = [
    {
        path: '/',
        element: <Header />// <OrganizationsHeader />
    },
    {
        path: ':id',
        element: <OrganizationHeaderRouteElement />,
        // children: [
        //     {
        //         path: 'ppms/*',
        //     },
        // ],
    }
]

export function OrganizationsContentRouteElement() {
    return useRoutes(contentRoutes)
}

export function OrganizationsHeaderRouteElement() {
    return useRoutes(headerRoutes)
}

// function OrganizationsHeader() {
//     return (
//         <Header          
//             title={'Organizations'}
//             nav={
//                 <nav>
//                     <NavLink to="/" style={{ padding: '0' }}>
//                         Home
//                     </NavLink>
//                     <NavLink to="/organizations" style={{ padding: 15 }}>
//                         Organizations
//                     </NavLink>
//                 </nav>
//             }
//         />
//     )
// }
