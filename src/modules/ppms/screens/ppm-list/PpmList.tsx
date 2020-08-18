import React from 'react';
import { Link  } from 'react-router-dom';

import { data } from '../../../../data';

export function PpmList() {
    const orgId = ''
    return (
        <div>
            <h2>Ppm List</h2>
            <ul>
                {data.organizations
                    .find((org) => org.id === orgId)
                    .ppms.map(({ id, title }) => (
                        <li key={id}>
                            <Link to={`${id}`}>
                                <h3>{title}</h3>
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
}