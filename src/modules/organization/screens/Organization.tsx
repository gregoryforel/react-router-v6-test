import * as React from 'react'
import { useParams } from 'react-router-dom'

import { data } from 'data'

export function Organization() {
    const { id: orgId } = useParams()
    const organization = data.organizations.find(({ id }) => id === orgId)
    const { title } = organization

    return (
        <div>
            {title}'s Dashboard
        </div>
    )
}
