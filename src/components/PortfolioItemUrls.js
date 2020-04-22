import React from 'react';

const getAnchorListItems = urls => urls.map((u, idx) =>
    <li key={idx}>
        <a href={u} target="_blank" rel="noopener noreferrer" title="click to open this external link in a new tab">
            {u}
        </a>
    </li>
);

const getSections = urlsByType => Object.keys(urlsByType).map(title =>
    <section key={title}>
        <p>{title}:</p>
        <ul>
            {getAnchorListItems(urlsByType[title])}
        </ul>
    </section>
);

const PortfolioItemUrls = props => (
    <div>
        {props.urlsByType && getSections(props.urlsByType)}
    </div>
);

export default PortfolioItemUrls;
