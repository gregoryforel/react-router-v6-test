import * as React from 'react'

export const Header = ({ title, nav }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>{nav}</div>
        </div>
    )
}
