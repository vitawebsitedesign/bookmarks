import React from 'react';
import PropTypes from 'prop-types';

const Tag = props => (<span>{props.children}</span>);

Tag.propTypes = {
    children: PropTypes.node
};

export default Tag;
