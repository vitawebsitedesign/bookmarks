import React from 'react';
import {withRouter} from 'react-router-dom'

const BackButton = props => <button onClick={() => props.history.goBack()}>back</button>;

export default withRouter(BackButton);
