import React from 'react';
import {withRouter} from 'react-router-dom'
import { FaChevronCircleLeft } from 'react-icons/fa';

const BackLink = props => (
    <button onClick={() => props.history.goBack()} className="d-flex align-items-center justify-content-between text-uppercase btn btn-primary button-primary">
        <FaChevronCircleLeft className="mr-2 button-primary__icon" />
        {props.children || "back"}
    </button>
);

export default withRouter(BackLink);
