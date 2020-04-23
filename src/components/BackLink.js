import React from 'react';
import {withRouter} from 'react-router-dom'

const BackLink = props => (
    <button onClick={() => props.history.goBack()} className="link text-uppercase">
        {props.children || "back"}
    </button>
);

export default withRouter(BackLink);
