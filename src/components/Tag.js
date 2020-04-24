import React from 'react';
import PropTypes from 'prop-types';

const Tag = props => (<span className="tag rounded-pill text-uppercase">{props.children}</span>);

Tag.propTypes = {
    children: PropTypes.node.isRequired
};

export default Tag;
