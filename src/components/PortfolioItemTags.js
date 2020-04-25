import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

const getTagListItems = tags => tags.map((t, idx) =>
    <span key={idx} className="d-flex mr-1 mb-2 mb-lg-1">
        <Tag>
            <span className="px-2">
                {t}
            </span>
        </Tag>
    </span>
);

const getSections = tagsByType => Object.keys(tagsByType).map(title => getTagListItems(tagsByType[title]));

const PortfolioItemTags = props => (
    <div className="d-flex flex-wrap">
        {props.tagsByType && getSections(props.tagsByType)}
    </div>
);

PortfolioItemTags.propTypes = {
    tagsByType: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
};

export default PortfolioItemTags;
