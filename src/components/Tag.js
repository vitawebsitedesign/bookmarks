import React from 'react';
import PropTypes from 'prop-types';

const Tag = props => (<span className="tag text-uppercase">{props.children}</span>);

Tag.propTypes = {
    children: PropTypes.node
};

export default Tag;
