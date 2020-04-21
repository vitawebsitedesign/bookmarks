import React from 'react';

const getAnchorListItems = urls => urls.map((u, idx) =>
    <li key={idx}>
        <a href={u} target="_blank" rel="noopener noreferrer" title="click to open this external link in a new tab">
            {u}
        </a>
    </li>
);

const PortfolioItemUrls = props => props.urls && props.urls.length && (
    <section>
        <p>{props.title}:</p>
        <ul>
            {getAnchorListItems(props.urls)}
        </ul>
    </section>
);

export default PortfolioItemUrls;
