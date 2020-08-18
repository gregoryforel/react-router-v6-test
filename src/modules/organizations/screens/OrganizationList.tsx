import React from 'react';
import { Link } from 'react-router-dom';

import { data } from '../../../data';

export function OrganizationList() {
    return (
        <div>
            <h3>Organization List</h3>
            <ul>
                {data.organizations.map(({ id, title }) => (
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