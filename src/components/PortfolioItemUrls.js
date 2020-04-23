import React from 'react';
import PropTypes from 'prop-types';

const getAnchorListItems = urls => urls.map((u, idx) =>
    <a key={idx} href={u} target="_blank" rel="noopener noreferrer" title="click to open this external link in a new tab" className="link">
        {u}
    </a>
);

const getSections = urlsByType => Object.keys(urlsByType).map(title =>
    <section key={title} className="mb-4 text-center">
        <div className="text-capitalize">{title}</div>
        {getAnchorListItems(urlsByType[title])}
    </section>
);

const PortfolioItemUrls = props => (
    <div className="col-12">
        {props.urlsByType && getSections(props.urlsByType)}
    </div>
);

PortfolioItemUrls.propTypes = {
    urlsByType: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
};

export default PortfolioItemUrls;
