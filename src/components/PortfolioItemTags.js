import React from 'react';
import Tag from './Tag';

const getTagListItems = tags => tags.map((t, idx) =>
    <li key={idx}>
        <Tag>{t}</Tag>
    </li>
);

const getSections = tagsByType => Object.keys(tagsByType).map(title => getTagListItems(tagsByType[title]));

const PortfolioItemTags = props => (
    <div>
        {props.tagsByType && getSections(props.tagsByType)}
    </div>
);

export default PortfolioItemTags;
