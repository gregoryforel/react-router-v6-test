import * as React from 'react';
import { useParams } from 'react-router-dom';

import { data } from 'data';
import { useRouteParams } from 'RouteParamsProvider'

export function Ppm() {
    const { organization } = useRouteParams()
    const ppmId = useParams().id

    const ppm = data.organizations
        .find((org) => org.id === organization)
        .ppms.find(({ id }) => id === ppmId);

        console.log(ppm, data)
    const { title } = ppm;

    return (
        <React.Fragment>
            <h3>PPM: {title}</h3>
        </React.Fragment>
    );
}
