import React from 'react';
import { useParams } from 'react-router-dom';

import { data } from '../../../../data';

export function Ppm() {
    const orgId = ''
    const { id: ppmId } = useParams();

    const ppm = data.organizations
        .find((org) => org.id === orgId)
        .ppms.find(({ id }) => id === ppmId);

    const { title } = ppm;

    return (
        <React.Fragment>
            <h3>PPM: {title}</h3>
        </React.Fragment>
    );
}
