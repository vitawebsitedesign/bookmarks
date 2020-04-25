import React from 'react';
import PropTypes from 'prop-types';
import {FiLink} from 'react-icons/fi';

const getAnchorListItems = urls => urls.map((u, idx) =>
    <a key={idx} href={u} target="_blank" rel="noopener noreferrer" title="click to open this external link in a new tab" className="d-block mb-2 link">
        {u}
    </a>
);

const getSections = urlsByType => Object.keys(urlsByType).map(title =>
    <section key={title} className="mb-4 text-center">
        <div className="d-flex align-items-center justify-content-center text-capitalize">
            {title}
        </div>
        {getAnchorListItems(urlsByType[title])}
    </section>
);

const PortfolioItemUrls = props => (
    <div className="col-12">
        <FiLink className="my-3 mr-1 portfolio-item-urls__icon" />
        {getSections(props.urlsByType)}
    </div>
);

PortfolioItemUrls.propTypes = {
    urlsByType: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
};

export default PortfolioItemUrls;
